export enum Language {
  en = 'en',
  es = 'es',
  fr = 'fr',
  it = 'it',
  de = 'de',
  pt = 'pt',
  nl = 'nl',
  ru = 'ru',
  zh = 'zh',
  ja = 'ja',
  ko = 'ko',
  ar = 'ar',
  hi = 'hi',
  bn = 'bn',
  id = 'id',
  tr = 'tr',
  pl = 'pl',
  uk = 'uk',
  sv = 'sv',
  no = 'no',
  da = 'da'
}
export const ALLOWED_LANGUAGES: Language[] = Object.values(Language);

export type TranslationsSource = Record<Language | string, Record<string, string>>;
export type TextParameter = string | number;

const i18nFn = () => {
  let language: string = Language.es;
  let translations: TranslationsSource;

  return {
    configure: (lang: Language | string, translationsSource?: TranslationsSource) => {
      language = lang;
      if (translationsSource) {
        translations = translationsSource;
      }
    },
    getTranslations: () => translations?.[language] ?? {},
  };
};

export let i18n = i18nFn();

const getKey = (
  strs: TemplateStringsArray,
  parameters: TextParameter[]
): string => {
  if (parameters.length === 0) {
    return strs[0];
  }

  return strs.reduce((acc, str, index) => {
    const parameter = parameters[index] !== undefined && parameters[index] !== null ? `{{${index}}}` : "";
    return `${acc}${str}${parameter}`;
  }, '');
};

export const __ = (
  strs: TemplateStringsArray,
  ...parameters: TextParameter[]
): string => {
  const translations = i18n.getTranslations();
  const key = getKey(strs, parameters);

  if(!translations[key]) {
    console.warn("No translation found for key: ", key);
  }
  let translation = translations ? translations[key] || key : key;

  for (let i = 0; i < parameters.length; i++) {
    translation = translation.replace(`{{${i}}}`, String(parameters[i]));
  }

  return translation;
};
