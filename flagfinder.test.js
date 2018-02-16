/**
 * Flag Finder Test
 *
 * @author Niklas Hellenbart <niklas.hellenbart@gmail.com>
 */

const flagfinder = require("./flagfinder.js");

describe("Flag Finder", () => {
	test("Find one flag", () => {
		expect(flagfinder("🇩🇪")).toEqual(["DE"]);
	});
	test("Find multiple flags", () => {
		expect(flagfinder("Test 🇩🇪🇫🇮 foobar 🤠🇸🇽")).toEqual(["DE", "FI", "SX"]);
	});
	test("Find nothing in text", () => {
		expect(flagfinder("Test foobar")).toEqual([]);
	});
	test("Find nothing in empty string", () => {
		expect(flagfinder("")).toEqual([]);
	});
});
