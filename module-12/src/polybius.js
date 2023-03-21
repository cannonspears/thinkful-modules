const polybiusModule = (function () {
  let lookup = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
          result += lookup[input[i]];
        } else {
          result += input[i];
        }
      }
      return result;
    } else {
      let inputLength = input.split(" ").join("").length;
      if (inputLength % 2 !== 0) return false;

      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
          let num = input[i] + input[i + 1];
          if (num === "42") {
            result += "(i/j)";
            i++;
          } else {
            let lookupLetter = Object.keys(lookup).find(
              (key) => lookup[key] === num
            );
            result += lookupLetter;
            i++;
          }
        } else {
          result += input[i];
        }
      }
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
