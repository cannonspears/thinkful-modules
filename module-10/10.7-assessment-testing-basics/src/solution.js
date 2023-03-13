/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let lowScores = []
  let highScores = []
  if (!students.length) return [lowScores,highScores]
  students.forEach((student)=>{
    if (student.score <= score) {
      lowScores.push(student)
    } else {
      highScores.push(student)
    }
  })
  return [lowScores,highScores]
}

module.exports = partitionStudentsByScore