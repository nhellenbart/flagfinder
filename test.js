/**
 * Flag Finder Test
 * Very simple vanilla test of flagfinder module.
 *
 * @author Niklas Hellenbart <niklas.hellenbart@gmail.com>
 */

const colors = {
	reset: '\x1b[0m',
	green: '\x1b[32m',
	red: '\x1b[31m'
};
const flagfinder = require('./flagfinder.js');
const result = flagfinder('Test 🇩🇪🇫🇮 foobar 🤠🇸🇽');

console.log('FLAG FINDER TEST');
if (result
	&& typeof result === 'object'
	&& 'length' in result
	&& result.length === 3
	&& 0 in result
	&& 1 in result
	&& 2 in result
	&& result[0] === 'DE'
	&& result[1] === 'FI'
	&& result[2] === 'SX'
) {
	console.log(colors.green + 'SUCCESSFUL' + colors.reset + ' 🏁');
} else {
	console.log(colors.red + 'FAIL' + colors.reset);
}
