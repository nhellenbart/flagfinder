# Flag Finder

Little javascript to find all Emoji flags in text.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

Get _flagfinder_ via npm: `npm install flagfinder --save`.

## Usage

Simply call the exported method with the input text containing Emoji flags as `String` parameter. The method returns all found Emoji flags in appearing order as `Array` of ISO 3166 country codes.

```js
const flagfinder = require("./flagfinder.js");
flagfinder("Foo 🇩🇪 foobar 🇳🇱🇫🇮 baz");
```

returns `[ 'DE', 'NL', 'FI' ]`.

or use it via import:

```js
import flagfinder from "flagfinder";
```

## Testing

Call `npm test` to run the testing using [jest](https://facebook.github.io/jest/).
