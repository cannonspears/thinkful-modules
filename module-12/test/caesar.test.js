const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if shift value isn't present", () => {
      const message = "this is a test";
      const shift = undefined;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if shift is 0", () => {
      const message = "this is a test";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if shift value is greater than 25", () => {
      const message = "this is a test";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    it("should return false if shift value is less than -25", () => {
      const message = "this is a test";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should correctly encode message according to shift", () => {
      const message = "test";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "whvw";

      expect(actual).to.equal(expected);
    });
    it("should ignore capitol letters", () => {
      const message = "TeSt";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "whvw";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and nonalphabetic symbols", () => {
      const message = "this is a test.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "wklv lv d whvw.";

      expect(actual).to.equal(expected);
    });
    it("should allow letters to wrap around if given positive shift", () => {
      const message = "zazu";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cdcx";

      expect(actual).to.equal(expected);
    });
    it("should allow letters to wrap around if given negative shift", () => {
      const message = "abcd";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "xyza";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should correctly decode message according to shift", () => {
      const message = "whvw";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "test";

      expect(actual).to.equal(expected);
    });
    it("should ignore capitol letters", () => {
      const message = "WhVw";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "test";

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and nonalphabetic symbols", () => {
      const message = "this is a test.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "qefp fp x qbpq.";

      expect(actual).to.equal(expected);
    });
    it("should allow letters to wrap around if given positive shift", () => {
      const message = "cdcx";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "zazu";

      expect(actual).to.equal(expected);
    });
    it("should allow letters to wrap around if given negative shift", () => {
      const message = "xyza";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "abcd";

      expect(actual).to.equal(expected);
    });
  });
});
