import { searchInDirectory } from "./lib/extract";

const searchDirectory = process.argv[2];
const compareFile = process.argv[3];

searchInDirectory(searchDirectory, compareFile);