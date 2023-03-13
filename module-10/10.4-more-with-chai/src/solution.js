/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  return students.find((student) => student.name === name) || null;
}

module.exports = findStudentByName;
