export enum Language {
    en = 'en',
    de = 'de',
    fr = 'fr',
    it = 'it',
    es = 'es'
  }
export const ALLOWED_LANGUAGES: Language[] = Object.values(Language);

export type TranslationsSource = Record<Language, Record<string, string>>;





const i18nFn = () => {
    let language = Language.es;
    let translations: TranslationsSource;


    return {
        configure: (lang: Language, translationsSource?: TranslationsSource) => { 
            language = lang;
            if(translationsSource) {
                translations = translationsSource 
            }
            
        },
        getTranslations: () => translations[language],
    }
}

export let i18n = i18nFn();

export const __ = (strs: ReadonlyArray<string>): string => {
    const translations = i18n.getTranslations();
    const text = strs[0];

    return translations? translations[text] || text : text;
}

 