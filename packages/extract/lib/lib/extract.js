"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInDirectory = exports.searchInFile = exports.getAllFilesRecursively = exports.getKeyFromTranslation = exports.replaceParameters = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var searchRegex = /__`(.+)`/g;
var replaceParameters = function (str) {
    var index = 0;
    while (str.includes("${")) {
        var start = str.indexOf("${");
        var end = str.indexOf("}", start);
        str = str.slice(0, start) + "{{".concat(index, "}}") + str.slice(end + 1);
        index++;
    }
    return str;
};
exports.replaceParameters = replaceParameters;
var getKeyFromTranslation = function (translation) {
    var regex = /^__\`(.*)\`$/;
    var match = translation.match(regex);
    if (match && match[1]) {
        return match[1].replace(/\\\\/g, "\\").replace(/\\`/g, "`");
    }
    return translation;
};
exports.getKeyFromTranslation = getKeyFromTranslation;
var getAllFilesRecursively = function (dir) {
    var files = fs_1.default.readdirSync(dir);
    return files.flatMap(function (file) {
        var filePath = path_1.default.join(dir, file);
        var fileStats = fs_1.default.statSync(filePath);
        if (fileStats.isDirectory()) {
            return (0, exports.getAllFilesRecursively)(filePath);
        }
        else if (fileStats.isFile() && path_1.default.extname(file) === ".ts") {
            return [filePath];
        }
        return [];
    });
};
exports.getAllFilesRecursively = getAllFilesRecursively;
var searchInFile = function (filePath) {
    var fileContent = fs_1.default.readFileSync(filePath, "utf8");
    var matches = fileContent.match(searchRegex);
    var searchTranslations = [];
    if (matches) {
        matches.forEach(function (match) {
            var key = (0, exports.getKeyFromTranslation)(match);
            var translation = (0, exports.replaceParameters)(key);
            searchTranslations.push(translation);
        });
    }
    return searchTranslations;
};
exports.searchInFile = searchInFile;
var searchInDirectory = function (directoryPath, compareFilePath) {
    var filesPath = (0, exports.getAllFilesRecursively)(directoryPath);
    var translations = compareFilePath ? require(compareFilePath).default : undefined;
    var translationsKeys = translations ? Object.keys(translations) : undefined;
    return filesPath
        .flatMap(function (filePath) {
        return (0, exports.searchInFile)(filePath);
    })
        .reduce(function (acc, curr) {
        if (!translationsKeys || !translationsKeys.includes(curr)) {
            acc[curr] = curr;
        }
        return acc;
    }, {});
};
exports.searchInDirectory = searchInDirectory;
//# sourceMappingURL=extract.js.map