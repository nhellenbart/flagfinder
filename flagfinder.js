/**
 * Flag Finder
 * Detects Emoji flags in text.
 *
 * @author Niklas Hellenbart <niklas.hellenbart@gmail.com>
 */


/**
 * Detect all Emoji flags in input.
 * @param  {String} input
 * @return {Array}
 */
module.exports = function(input) {
	const flags = [];
	for (let i = 0; i < input.length; i++) {
		const c0 = input.charCodeAt(i);
		const c1 = input.charCodeAt(i + 1);
		const c2 = input.charCodeAt(i + 2);
		const c3 = input.charCodeAt(i + 3);

		if (c0 === 55356
				&& c1 >= 56806
				&& c1 <= 56832
				&& c2 === 55356
				&& c3 >= 56806
				&& c3 <= 56832
		) {
			flags.push(String.fromCharCode(c1 - 56741) + String.fromCharCode(c3 - 56741));
			i += 3;
		}
	}
	return flags;
}
