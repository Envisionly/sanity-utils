import { describe, it, expect } from "vitest";
import { getSocialLabelByValue, socialOptions } from "../src/socialOptions";

// Example test for getSocialLabelByValue
describe("getSocialLabelByValue", () => {
	it("returns the correct label for a known value", () => {
		const value = socialOptions[0]?.value;
		const expected = socialOptions[0]?.label;
		if (value && expected) {
			expect(getSocialLabelByValue(value)).toBe(expected);
		}
	});

	it("returns undefined for an unknown value", () => {
		expect(getSocialLabelByValue("not-a-real-value")).toBeUndefined();
	});
});
