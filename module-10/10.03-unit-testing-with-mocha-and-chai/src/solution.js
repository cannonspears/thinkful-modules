/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  let result = null;
  students.forEach(studentObj => {
    if (studentObj.name === name) {
      result = studentObj.score
    }
  })
  return result
}

module.exports = findStudentScoreByName;
