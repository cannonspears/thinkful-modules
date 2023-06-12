const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function sortByName(customers) {
  function compareNames(a, b) {
    const lastNameComparison = a.lastName.localeCompare(b.lastName);
    if (lastNameComparison !== 0) {
      // If last names are different, sort by last name
      return lastNameComparison;
    } else {
      // If last names are the same, sort by first name
      return a.firstName.localeCompare(b.firstName);
    }
  }

  return sort(compareNames, customers);
}

module.exports = sortByName;
