"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.message3 = exports.message2 = exports.message1 = void 0;
var core_1 = require("@easy-i18n/core");
var parameter = 'parameter1';
var parameter2 = 'anotherParameter';
exports.message1 = (0, core_1.__)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["This is a simple example"], ["This is a simple example"])));
exports.message2 = (0, core_1.__)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["This is an example with ", ""], ["This is an example with ", ""])), parameter);
exports.message3 = (0, core_1.__)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["This is an example with ", " and ", ""], ["This is an example with ", " and ", ""])), parameter, parameter2);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=someI18n.js.map