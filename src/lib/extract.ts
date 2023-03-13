import fs from "fs";
import path from "path";

const searchRegex = /__`(.+)`/g;

export const replaceParameters = (str: string): string => {
  let index = 0;

  while (str.includes("${")) {
    const start = str.indexOf("${");
    const end = str.indexOf("}", start);

    str = str.slice(0, start) + `{{${index}}}` + str.slice(end + 1);
    index++;
  }

  return str;
};

export const getKeyFromTranslation = (translation: string): string => {
  const regex: RegExp = /^__\`(.*)\`$/;
  const match: RegExpMatchArray | null = translation.match(regex);

  if (match && match[1]) {
    return match[1].replace(/\\\\/g, "\\").replace(/\\`/g, "`");
  }

  return translation;
};

export const getAllFilesRecursively = (dir: string): string[] => {
  const files = fs.readdirSync(dir);

  return files.flatMap((file: string) => {
    const filePath = path.join(dir, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      return getAllFilesRecursively(filePath);
    } else if (fileStats.isFile() && path.extname(file) === ".ts") {
      return [filePath];
    }
    return [];
  });
};

export const searchInFile = (filePath: string): string[] => {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const matches = fileContent.match(searchRegex);
  const searchTranslations: string[] = [];

  if (matches) {
    matches.forEach((match) => {
      const key = getKeyFromTranslation(match);
      const translation = replaceParameters(key);
      searchTranslations.push(translation);
    });
  }
  return searchTranslations;
};

export const searchInDirectory = (
  directoryPath: string,
  compareFilePath?: string
): Record<string, string> => {
  const filesPath = getAllFilesRecursively(directoryPath);
  const translations = compareFilePath ? require(compareFilePath).default : undefined;
  const translationsKeys = translations ? Object.keys(translations) : undefined;

  return filesPath
    .flatMap((filePath) => {
      return searchInFile(filePath);
    })
    .reduce((acc, curr) => {
      if(!translationsKeys || !translationsKeys.includes(curr)) {
      acc[curr] = curr;
      }
      return acc;
    }, {} as Record<string, string>);
};
