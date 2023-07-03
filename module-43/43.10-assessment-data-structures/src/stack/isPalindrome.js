const Stack = require("../linked-list/stack");

function isPalindrome(text) {
  let cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if (cleanText.length === 0) return false;
  const newStack = new Stack();
  let middle = Math.floor(cleanText.length / 2);
  if (cleanText.length % 2) {
    cleanText = cleanText.slice(0, middle) + cleanText.slice(middle + 1);
  }

  for (let i = 0; i < cleanText.length; i++) {
    if (i < middle) {
      newStack.push(cleanText[i]);
    }
    if (i >= middle) {
      if (newStack.pop() !== cleanText[i]){
        return false;
      }
    }
  }

  return true;
}

module.exports = isPalindrome;