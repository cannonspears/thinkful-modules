const substitutionModule = (function () {
  function isValid(alphabet) {
    if (!alphabet || alphabet.length !== 26) return false;

    // determines that every value within the input alphabet is unique
    const uniqueChars = new Set(alphabet);
    return uniqueChars.size === 26;
  }

  function substitution(input, alphabet, encode = true) {
    if (!isValid(alphabet)) return false;
    let originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.toLowerCase();

    let result = "";
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        result += " ";
      } else {
        //determines which alphabet the letter is indexed depending on encode/decode
        const charIndex = encode
          ? originalAlphabet.indexOf(input[i])
          : alphabet.indexOf(input[i]);
        result +=
          // if the letter was found, add the index to the result, if not, add the special character
          charIndex !== -1
            ? encode
              ? alphabet[charIndex]
              : originalAlphabet[charIndex]
            : input[i];
      }
    }
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
