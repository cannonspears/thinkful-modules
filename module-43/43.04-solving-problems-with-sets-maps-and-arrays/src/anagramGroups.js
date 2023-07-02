/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  const results = new Map();

  words.forEach(word => {
    const sortedWord = word.toLowerCase().split('').sort().join('');
    const wordsWithSameAnagram = results.get(sortedWord) || [];

    wordsWithSameAnagram.push(word);
    results.set(sortedWord, wordsWithSameAnagram);
  });

  return Array.from(results.values());
}

module.exports = anagramGroups;
