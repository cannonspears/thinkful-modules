const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {
    it("should return false if alphabet argument value isn't present", () => {
      const message = "this is a test";
      const alphabet = undefined;
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
    it("should return false if alphabet argument does not contain exactly 26 characters", () => {
      const message = "this is a test";
      const alphabet = "zyxwvut";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
    it("should return false if alphabet argument contains duplicate characters", () => {
      const message = "this is a test";
      const alphabet = "abcdefefefefefefefefefefef";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should correctly encode message according to alphabet argument", () => {
      const message = "test";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "jmdj";

      expect(actual).to.equal(expected);
    });
    it("should be able to utilize special characters and spaces in alphabet argument", () => {
      const message = "my test";
      const alphabet = "xoyqmcgruk$wafln+hdjpzib3v";
      const actual = substitution(message, alphabet);
      const expected = "a3 jmdj";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should correctly decode message according to alphabet argument", () => {
      const message = "jmdj";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "test";

      expect(actual).to.equal(expected);
    });
    it("should be able to utilize special characters and spaces in alphabet argument", () => {
      const message = "a3 jmdj";
      const alphabet = "xoyqmcgruk$wafln+hdjpzib3v";
      const actual = substitution(message, alphabet, false);
      const expected = "my test";

      expect(actual).to.equal(expected);
    });
  });
});
