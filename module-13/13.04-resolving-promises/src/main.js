const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "Will I learn promises today?";
const tellPromise = tell(question);
tellPromise
  .then((fortune) => {
    console.log(question);
    console.log(fortune);
  })
  .catch(console.error);

welcome()
  .then((welcomeMessage) =>
    goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`)
  ) // welcomeMessage and goodbyeMessage combined.
  .then(console.log) // Logs combines messages
  .catch(console.error); // Logs error from welcome() or goodbye()
