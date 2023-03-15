import path from "path";
import {
  getAllFilesRecursively,
  getKeyFromTranslation,
  replaceParameters,
  searchInDirectory,
  searchInFile,
} from "../lib/extract";

describe("extract should be worked", () => {
  describe("replaceParameters", () => {
    it("should format correctly each match in a file", () => {
      const key = "This is a test";
      const result = replaceParameters(key);

      const expected = "This is a test";

      expect(result).toEqual(expected);
    });

    it("should format correctly each match with parameters in a file", () => {
      const key =
        "This is a test with ${parameter1} as parameter1 and ${parameter2} as parameter2";
      const result = replaceParameters(key);

      const expected =
        "This is a test with {{0}} as parameter1 and {{1}} as parameter2";

      expect(result).toEqual(expected);
    });

    it("should format correctly each match with the same repeatedly parameter in a file", () => {
      const key =
        "This is a test with ${parameter1} as parameter1 and ${parameter1} as parameter2 too";
      const result = replaceParameters(key);

      const expected =
        "This is a test with {{0}} as parameter1 and {{1}} as parameter2 too";

      expect(result).toEqual(expected);
    });
  });

  describe("getKeyFromTranslation", () => {
    it("should return the key from the translation", () => {
      const key = "__`This is a test`";
      const result = getKeyFromTranslation(key);

      const expected = "This is a test";

      expect(result).toEqual(expected);
    });

    it("should return the key from the translation with parameters", () => {
      const key = "__`This is a test with ${parameter}`";
      const result = getKeyFromTranslation(key);

      const expected = "This is a test with ${parameter}";

      expect(result).toEqual(expected);
    });
  });
  describe("searchInFile", () => {
    it("should return the keys from the translation", () => {
      const file = `${__dirname}/fakeDirectoryExtract/someI18n.ts`;
      const result = searchInFile(file);

      const expected: string[] = [
        "This is a simple example",
        "This is an example with {{0}}",
        "This is an example with {{0}} and {{1}}",
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("getAllFilesRecursively", () => {
    it("should return the file paths of all *.ts recursively", () => {
      const dir = `${__dirname}/fakeDirectoryExtract`;
      const result = getAllFilesRecursively(dir);
      const expected: string[] = [
        path.join(dir, "another_directory", "file.ts"),
        path.join(dir, "another_file.ts"),
        path.join(dir, "someI18n.ts"),
      ];

      expect(result).toEqual(expected);
    });
  });

  describe("searchInDirectory", () => {
    it("should return the keys from the translation in all files", () => {
      const directory = `${__dirname}/fakeDirectoryExtract`;
      const result = searchInDirectory(directory);

      const expected: Record<string, string> = {
        Hola: "Hola",
        "This is another text in other file with {{0}} and {{1}}":
          "This is another text in other file with {{0}} and {{1}}",
        "This is a simple example": "This is a simple example",
        "This is an example with {{0}}": "This is an example with {{0}}",
        "This is an example with {{0}} and {{1}}":
          "This is an example with {{0}} and {{1}}",
        hola: "hola",
      };

      expect(result).toEqual(expected);
    });

    it("should return the keys from the translation in all  which is not in the compared translations", () => {
        const directory = `${__dirname}/fakeDirectoryExtract`;
        const translationPath = path.join(__dirname, "translations", "en.ts")
        const result = searchInDirectory(directory, translationPath);
  
        const expected: Record<string, string> = {
          Hola: "Hola",
          "This is another text in other file with {{0}} and {{1}}":
            "This is another text in other file with {{0}} and {{1}}",
          "This is a simple example": "This is a simple example",
          "This is an example with {{0}}": "This is an example with {{0}}",
          "This is an example with {{0}} and {{1}}":
            "This is an example with {{0}} and {{1}}"
        };
  
        expect(result).toEqual(expected);
      });

      it("should return the keys from the translation in all  which is not in the compared translations with exported strings", () => {
        const directory = `${__dirname}/fakeDirectoryExtract`;
        const translationPath = path.join(__dirname, "translations", "es.ts")
        const result = searchInDirectory(directory, translationPath);
  
        const expected: Record<string, string> = {
         
          "This is another text in other file with {{0}} and {{1}}":
            "This is another text in other file with {{0}} and {{1}}",
          "This is a simple example": "This is a simple example",
          "This is an example with {{0}}": "This is an example with {{0}}",
          "This is an example with {{0}} and {{1}}":
            "This is an example with {{0}} and {{1}}"
        };
  
        expect(result).toEqual(expected);
      });
  });
});
