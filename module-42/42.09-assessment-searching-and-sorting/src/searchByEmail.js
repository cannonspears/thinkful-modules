/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */

function searchByEmail(email, customers) {
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].email === email) {
      return i; // Found the customer with the given email
    }
  }

  return -1; // Customer with the given email not found
}



module.exports = searchByEmail;
