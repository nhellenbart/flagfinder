# Flag Finder

Little javascript to find all Emoji flags in text.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Usage

Simply call the exported method with the input text containing Emoji flags as `String` parameter. The method returns all found Emoji flags in appearing order as `Array` of ISO 3166 country codes.

```
const flagfinder = require('./flagfinder.js');
flagfinder('Foo 🇩🇪 foobar 🇳🇱🇫🇮 baz')
```

returns `[ 'DE', 'NL', 'FI' ]`
