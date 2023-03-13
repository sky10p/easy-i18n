export declare enum Language {
    en = "en",
    de = "de",
    fr = "fr",
    it = "it",
    es = "es"
}
export declare const ALLOWED_LANGUAGES: Language[];
export type TranslationsSource = Record<Language, Record<string, string>>;
export declare let i18n: {
    configure: (lang: Language, translationsSource?: TranslationsSource) => void;
    getTranslations: () => Record<string, string>;
};
export declare const __: (strs: TemplateStringsArray, ...parameters: string[]) => string;
