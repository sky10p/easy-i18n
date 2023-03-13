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
const i18nFn = () => {
    let language = Language.es;
    let translations;
    return {
        configure: (lang, translationsSource) => {
            language = lang;
            if (translationsSource) {
                translations = translationsSource;
            }
        },
        getTranslations: () => { var _a; return (_a = translations === null || translations === void 0 ? void 0 : translations[language]) !== null && _a !== void 0 ? _a : {}; },
    };
};
exports.i18n = i18nFn();
const getKey = (strs, parameters) => {
    if (parameters.length === 0) {
        return strs[0];
    }
    return strs.reduce((acc, str, index) => {
        const parameter = parameters[index] !== undefined && parameters[index] !== null ? `{{${index}}}` : "";
        return `${acc}${str}${parameter}`;
    }, '');
};
const __ = (strs, ...parameters) => {
    const translations = exports.i18n.getTranslations();
    const key = getKey(strs, parameters);
    if (!translations[key]) {
        console.warn("No translation found for key: ", key);
    }
    let translation = translations ? translations[key] || key : key;
    for (let i = 0; i < parameters.length; i++) {
        translation = translation.replace(`{{${i}}}`, parameters[i]);
    }
    return translation;
};
exports.__ = __;
//# sourceMappingURL=i18n.js.map