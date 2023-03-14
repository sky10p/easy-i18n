"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thisHolaShouldNotBeGotten = exports.hola = exports.message1 = void 0;
var core_1 = require("@easy-i18n/core");
exports.message1 = (0, core_1.__)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["This is a simple example"], ["This is a simple example"])));
exports.hola = (0, core_1.__)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Hola"], ["Hola"])));
exports.thisHolaShouldNotBeGotten = (0, core_1.__)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["hola"], ["hola"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=file.js.map