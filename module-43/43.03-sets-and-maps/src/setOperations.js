/**
 * return the union of two sets
 */
function union(s1, s2) {
  let newSet = [...s1,...s2]
  return new Set(newSet)
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  return new Set([...s1].filter(x => s2.has(x)));
}

/**
 * return the difference of two sets
 */
function difference(setA, setB) {
  // Create a new Set to store the difference
  const diff = new Set();

  // Iterate over the elements in setA
  for (const element of setA) {
    // Check if the element is not in setB
    if (!setB.has(element)) {
      // Add the element to the difference set
      diff.add(element);
    }
  }

  // Return the difference set
  return diff;
}

module.exports = { union, intersect, difference };
