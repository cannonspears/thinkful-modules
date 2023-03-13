const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

function getFortune(question) {
  if (question) {
    return ask(question)
  } else {
    return ask(question).catch((response) => `There was an error: ${response}`);
  }
}

function fullSession(question) {
  let result = [];
  return welcome()
    .then((resolvedWelcome) => {
      result.push(resolvedWelcome);
      return getFortune(question);
    })
    .then((resolvedFortune) => {
      result = result.concat(resolvedFortune);
      return goodbye();
    })
    .then((resolvedGoodbye) => {
      result.push(resolvedGoodbye);
      return result;
    });
}

module.exports = { getFortune, fullSession };
