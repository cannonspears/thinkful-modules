/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
    const count = {};
    const singleChar = [];
    const wordArray = word.toLowerCase().split('');

    wordArray.forEach(letter => {
        count[letter] = (count[letter] || 0) + 1;
    });
    
    for (let duplicates in count) {
        if (count[duplicates] % 2 !== 0) {
            singleChar.push(count[duplicates]);
        }
    }

    const isPalindrome = singleChar.length <= 1;
    return isPalindrome;
}


module.exports = permutationPalindrome;
