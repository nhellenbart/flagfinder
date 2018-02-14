# Flag Finder
Little javascript to find all Emoji flags in text.

## Usage
Simply call the exported method with the input text containing Emoji flags as `String` parameter. The method returns all found Emoji flags in appearing order as `Array` of ISO 3166 country codes.

```
const flagfinder = require('./flagfinder.js');
flagfinder('Foo 🇩🇪 foobar 🇳🇱🇫🇮 baz')
```
returns `[ 'DE', 'NL', 'FI' ]`
