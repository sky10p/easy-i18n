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
npm install easy-i18n-ts
```

If you only want to install the core of the library, you can run:

```bash
npm install @easy-i18n/core
```

## Configuration

### File translations

To configure easy-i18n for TypeScript, first create translation objects for the languages you want to support. For example, to create an English translation object, you can create a file called en.ts in a translations folder with the following content:

```typescript
export default {
  "This is a text to translate": "This is a text to translate",
  "The value of parameter1 is {{0}} and the value of parameter2 is {{1}}": "The value of parameter1 is {{0}} and the value of parameter2 is {{1}}",
  "Hello": "Hello",
  "Goodbye": "Goodbye"
};

```

If you are using JavaScript instead of TypeScript, you would need to use a slightly different syntax:

```javascript
module.exports.default = {
  "This is a text to translate": "This is a text to translate",
  "The value of parameter1 is {{0}} and the value of parameter2 is {{1}}": "The value of parameter1 is {{0}} and the value of parameter2 is {{1}}",
  "Hello": "Hello",
  "Goodbye": "Goodbye"
};

```

In this case, you would need to import the translation object using require instead of import.

### Add translation to your code

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

To extract text for translation, you first need to install the @easy-i18n/extract package. You can do this using either npm or yarn.

Using npm:

```bash
npm install @easy-i18n/extract --save-dev
```

Using yarn:

```
yarn add @easy-i18n/extract --dev
```

Both of these commands will install the package and add it to your project's devDependencies.

Once the package is installed, you can use the easy-i18n-extract command to extract translations. There are two ways to run this command:

1. By adding it to the scripts section of your package.json file:

```json
"scripts": {
  "extract": "easy-i18n-extract"
}
```

With this setup, you can run the command by running **npm run extract** or **yarn extract**, depending on your package manager. You can also pass in any additional arguments you need, such as the directory to search or the path to an existing translation file.

2. By running it with npx:

```css
npx easy-i18n-extract [directory] [existing translation file path]

```

When running the command with npx, you can pass in the optional parameters directly. For example, to extract all translations in the "src" directory and its subdirectories, you can run:

```css
npx easy-i18n-extract src/
```

And to extract only new translations in the "src" directory and show them in the console output (without adding them to an existing translation file), you can run:

```bash
npx easy-i18n-extract src/ translations/en.ts
```