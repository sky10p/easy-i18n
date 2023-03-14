"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var extract_1 = require("../lib/extract");
describe("extract should be worked", function () {
    describe("replaceParameters", function () {
        it("should format correctly each match in a file", function () {
            var key = "This is a test";
            var result = (0, extract_1.replaceParameters)(key);
            var expected = "This is a test";
            expect(result).toEqual(expected);
        });
        it("should format correctly each match with parameters in a file", function () {
            var key = "This is a test with ${parameter1} as parameter1 and ${parameter2} as parameter2";
            var result = (0, extract_1.replaceParameters)(key);
            var expected = "This is a test with {{0}} as parameter1 and {{1}} as parameter2";
            expect(result).toEqual(expected);
        });
        it("should format correctly each match with the same repeatedly parameter in a file", function () {
            var key = "This is a test with ${parameter1} as parameter1 and ${parameter1} as parameter2 too";
            var result = (0, extract_1.replaceParameters)(key);
            var expected = "This is a test with {{0}} as parameter1 and {{1}} as parameter2 too";
            expect(result).toEqual(expected);
        });
    });
    describe("getKeyFromTranslation", function () {
        it("should return the key from the translation", function () {
            var key = "__`This is a test`";
            var result = (0, extract_1.getKeyFromTranslation)(key);
            var expected = "This is a test";
            expect(result).toEqual(expected);
        });
        it("should return the key from the translation with parameters", function () {
            var key = "__`This is a test with ${parameter}`";
            var result = (0, extract_1.getKeyFromTranslation)(key);
            var expected = "This is a test with ${parameter}";
            expect(result).toEqual(expected);
        });
    });
    describe("searchInFile", function () {
        it("should return the keys from the translation", function () {
            var file = "".concat(__dirname, "/fakeDirectoryExtract/someI18n.ts");
            var result = (0, extract_1.searchInFile)(file);
            var expected = [
                "This is a simple example",
                "This is an example with {{0}}",
                "This is an example with {{0}} and {{1}}",
            ];
            expect(result).toEqual(expected);
        });
    });
    describe("getAllFilesRecursively", function () {
        it("should return the file paths of all *.ts recursively", function () {
            var dir = "".concat(__dirname, "/fakeDirectoryExtract");
            var result = (0, extract_1.getAllFilesRecursively)(dir);
            var expected = [
                path_1.default.join(dir, "another_directory", "file.ts"),
                path_1.default.join(dir, "another_file.ts"),
                path_1.default.join(dir, "someI18n.ts"),
            ];
            expect(result).toEqual(expected);
        });
    });
    describe("searchInDirectory", function () {
        it("should return the keys from the translation in all files", function () {
            var directory = "".concat(__dirname, "/fakeDirectoryExtract");
            var result = (0, extract_1.searchInDirectory)(directory);
            var expected = {
                Hola: "Hola",
                "This is another text in other file with {{0}} and {{1}}": "This is another text in other file with {{0}} and {{1}}",
                "This is a simple example": "This is a simple example",
                "This is an example with {{0}}": "This is an example with {{0}}",
                "This is an example with {{0}} and {{1}}": "This is an example with {{0}} and {{1}}",
                hola: "hola",
            };
            expect(result).toEqual(expected);
        });
        it("should return the keys from the translation in all  which is not in the compared translations", function () {
            var directory = "".concat(__dirname, "/fakeDirectoryExtract");
            var translationPath = path_1.default.join(__dirname, "translations", "en.ts");
            var result = (0, extract_1.searchInDirectory)(directory, translationPath);
            var expected = {
                Hola: "Hola",
                "This is another text in other file with {{0}} and {{1}}": "This is another text in other file with {{0}} and {{1}}",
                "This is a simple example": "This is a simple example",
                "This is an example with {{0}}": "This is an example with {{0}}",
                "This is an example with {{0}} and {{1}}": "This is an example with {{0}} and {{1}}"
            };
            expect(result).toEqual(expected);
        });
    });
});
//# sourceMappingURL=extract.spec.js.map