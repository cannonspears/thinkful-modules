function secretPasscode(code) {
  let errors = [];
  if (code.length < 14) errors.push("Code is too short!");
  if (code.length > 14) errors.push("Code is too long!");
  if (!code.includes("-")) errors.push("Code is missing a '-'.");
  if (code !== "jWhyYFh-eTx3qt") errors.push("Code is incorrect.");

  if (errors.length > 0) {
    throw errors
//     errors.push(errors);
  }
  return true;
}

module.exports = secretPasscode;
