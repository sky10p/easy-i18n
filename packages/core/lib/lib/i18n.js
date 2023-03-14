"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__ = exports.i18n = exports.ALLOWED_LANGUAGES = exports.Language = void 0;
var Language;
(function (Language) {
    Language["en"] = "en";
    Language["de"] = "de";
    Language["fr"] = "fr";
    Language["it"] = "it";
    Language["es"] = "es";
})(Language = exports.Language || (exports.Language = {}));
exports.ALLOWED_LANGUAGES = Object.values(Language);
var i18nFn = function () {
    var language = Language.es;
    var translations;
    return {
        configure: function (lang, translationsSource) {
            language = lang;
            if (translationsSource) {
                translations = translationsSource;
            }
        },
        getTranslations: function () { var _a; return (_a = translations === null || translations === void 0 ? void 0 : translations[language]) !== null && _a !== void 0 ? _a : {}; },
    };
};
exports.i18n = i18nFn();
var getKey = function (strs, parameters) {
    if (parameters.length === 0) {
        return strs[0];
    }
    return strs.reduce(function (acc, str, index) {
        var parameter = parameters[index] !== undefined && parameters[index] !== null ? "{{".concat(index, "}}") : "";
        return "".concat(acc).concat(str).concat(parameter);
    }, '');
};
var __ = function (strs) {
    var parameters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parameters[_i - 1] = arguments[_i];
    }
    var translations = exports.i18n.getTranslations();
    var key = getKey(strs, parameters);
    if (!translations[key]) {
        console.warn("No translation found for key: ", key);
    }
    var translation = translations ? translations[key] || key : key;
    for (var i = 0; i < parameters.length; i++) {
        translation = translation.replace("{{".concat(i, "}}"), parameters[i]);
    }
    return translation;
};
exports.__ = __;
//# sourceMappingURL=i18n.js.map