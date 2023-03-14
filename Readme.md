# easy-i18n

<p align="center">
<a href="https://github.com/sky10p/easy-i18n/blob/master/doc/donate/donate.md" alt="Donate shield"><img src="./doc/donate/donate-bitcoin.svg" /></a>
</p>

Easy-i18n is a simple library that enables you to add internationalization (i18n) support to your Node.js projects.

## Features

* Uses tagged literal functions to make translating texts easy.
* Comes with an npx module that makes extracting texts to translate * straightforward.
* Supports multiple languages simultaneously.
* Allows for including parameters in translated texts.

## Installation

To install easy-i18n in your project, simply run:

```bash
npm install easy-i18n
```

If you only want to install the core of the library, you can run:

```bash
npm install @easy-i18n/core
```

## Configuration

To configure easy-i18n, first create translation objects for the languages you want to support. For example, to create an English translation object, you can create a file called en.js in a translations folder with the following content:

```typescript
export default {
  "This is a text to translate": "This is a text to translate",
  "The value of parameter1 is {{0}} and the value of parameter2 is {{1}}": "The value of parameter1 is {{0}} and the value of parameter2 is {{1}}",
  "Hello": "Hello",
  "Goodbye": "Goodbye"
};

```

Then, import the translations for the languages you want to support, and use the configure method of i18n to specify the default language and the available translations:

```typescript
import en from "./translations/en";
import es from "./translations/es";
import { i18n, Language } from "@easy-i18n/core";

i18n.configure(Language.es, {
  en: en,
  es: es
});
```

In this example, we import the English and Spanish translation objects, and set the default language to Spanish (Language.es). If you want to add support for more languages, simply add more translation objects to the second parameter of configure.

## Usage

Once you have configured easy-i18n, you can use the __ (double underscore) function to translate texts. For example:

```typescript
const translatedText = __`This is a text to translate`;
```

You can also include parameters in the texts to translate using the ${parameterName} syntax. For example:

```typescript
const parameter1 = 10;
const parameter2 = 20;
const translatedTextWithParameters = __`The value of parameter1 is ${parameter1} and the value of parameter2 is ${parameter2}`;

```

## Text Extraction

To extract the texts to translate from your project, use the following command:

```bash
npx easy-i18n-extract
```

This command will look for all .ts nd .ts files in your project and extract the texts to translate using the __ function. The extracted texts will be saved in JSON files in the translations folder.

And that's it! I hope this information is helpful to you when creating the easy-i18n README.md. If you have any additional questions, feel free to ask.