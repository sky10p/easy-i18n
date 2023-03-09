import { en } from "../../translations/en";
import { es } from "../../translations/es";
import { i18n, Language, __ } from "../../lib/i18n";

describe("i18n", () => {
  beforeAll(() => {
    i18n.configure(Language.es, {
      en: en,
      es: es,
      de: {},
      fr: {},
      it: {},
    });
  });

  describe("spanish translation", () => {
    beforeAll(() => {
        i18n.configure(Language.es)
    });
    test("should return the same text", () => {
        expect(__`Esto es una prueba de texto.`).toBe(
          "Esto es una prueba de texto."
        );
      });
  })

  describe("english translation", () => {
    beforeAll(() => {
        i18n.configure(Language.en)
    });
    test("should return the text in english", () => {
        expect(__`Esto es una prueba de texto.`).toBe(
          "This is a test text"
        );
      });
  })
 

  
});
