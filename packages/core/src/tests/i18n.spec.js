"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var en_1 = require("./translations/en");
var es_1 = require("./translations/es");
var i18n_1 = require("../lib/i18n");
describe("i18n", function () {
    beforeAll(function () {
        i18n_1.i18n.configure(i18n_1.Language.es, {
            en: en_1["default"],
            es: es_1["default"],
            de: {},
            fr: {},
            it: {}
        });
    });
    describe("spanish translation", function () {
        beforeAll(function () {
            i18n_1.i18n.configure(i18n_1.Language.es);
        });
        test("should return the same text", function () {
            expect((0, i18n_1.__)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Esto es una prueba de texto."], ["Esto es una prueba de texto."])))).toBe("Esto es una prueba de texto.");
        });
        test("should return the same text with parameters", function () {
            var parameter1 = (0, i18n_1.__)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["hola"], ["hola"])));
            var parameter2 = (0, i18n_1.__)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["adios"], ["adios"])));
            expect((0, i18n_1.__)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["par\u00E1metro1: ", ", par\u00E1metro2: ", ""], ["par\u00E1metro1: ", ", par\u00E1metro2: ", ""])), parameter1, parameter2)).toBe("parámetro1: hola, parámetro2: adios");
        });
    });
    describe("english translation", function () {
        beforeAll(function () {
            i18n_1.i18n.configure(i18n_1.Language.en);
        });
        test("should return the text in english", function () {
            expect((0, i18n_1.__)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Esto es una prueba de texto."], ["Esto es una prueba de texto."])))).toBe("This is a test text");
        });
        test("should return the same text with parameters", function () {
            var parameter1 = (0, i18n_1.__)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["hola"], ["hola"])));
            var parameter2 = (0, i18n_1.__)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["adios"], ["adios"])));
            expect((0, i18n_1.__)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["par\u00E1metro1: ", ", par\u00E1metro2: ", ""], ["par\u00E1metro1: ", ", par\u00E1metro2: ", ""])), parameter1, parameter2)).toBe("parameter: hi, otherParameter: bye");
        });
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
