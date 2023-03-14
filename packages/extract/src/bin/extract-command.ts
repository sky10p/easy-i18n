import { searchInDirectory } from "../lib/extract";
import path from 'path';

const args = process.argv.slice(2);
const [directory = '.', tranlationsFile] = args;
const directoryPath = path.resolve(directory);
const translationPath = tranlationsFile ? path.resolve(tranlationsFile) : undefined;

const foundTranslations = searchInDirectory(directoryPath, translationPath);

console.log("This is a list of translations that are not included in the specified translation file.");
console.log(JSON.stringify(foundTranslations, null, 2))