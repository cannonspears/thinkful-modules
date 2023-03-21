let { expect } = require("chai");
let { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding message", () => {
    it("should output a string", () => {
      const message = "thinkful";
      const actual = polybius(message);
      expect(actual).to.be.a("string");
    });
    it("should ignore capital letters", () => {
      const message = "ThInKfUl tEsT";
      const actual = polybius(message);
      const expected = "4432423352125413 44513444";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in output", () => {
      const message = "thinkful test";
      const actual = polybius(message);
      const expected = "4432423352125413 44513444";
      expect(actual).to.equal(expected);
    });
    it("should encode both I and J to 42", () => {
      const message = "jim jaws jam jar";
      const actual = polybius(message);
      const expected = "424223 42112534 421123 421124";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding message", () => {
    it("should output a string", () => {
      const message = "4432423352125413";
      const actual = polybius(message, false);
      expect(actual).to.be.a("string");
    });
    it("should maintain spaces in output", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });
    it("should return false if input without spaces is not even number", () => {
      const message = "443";
      const actual = polybius(message, false);
      expect(actual).to.be.false;
    });
    it("should show both I and J if given 42", () => {
      const message = "424223 42112534 421123 421124";
      const actual = polybius(message, false);
      const expected = "(i/j)(i/j)m (i/j)aws (i/j)am (i/j)ar";
      expect(actual).to.equal(expected);
    });
  });
});
