/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
 // Base case
  if (text.length <= 0) {
    return text
  }
  
  return reverse(text.slice(1))+text[0]
  
}

module.exports = reverse;
