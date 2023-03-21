const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    input = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // determine how many letters, based on the direction, the shift occurs
    const shiftLetter = (letter, shift, direction) => {
      const letterIndex = alphabet.indexOf(letter);
      let shiftedIndex = (letterIndex + shift * direction) % 26;
      if (shiftedIndex < 0) shiftedIndex += 26;
      return alphabet[shiftedIndex];
    };

    let result = "";

    // determines the shift direction
    const direction = encode ? 1 : -1;

    for (let i = 0; i < input.length; i++) {
      if (input[i] >= "a" && input[i] <= "z") {
        result += shiftLetter(input[i], shift, direction);
      } else {
        result += input[i];
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
