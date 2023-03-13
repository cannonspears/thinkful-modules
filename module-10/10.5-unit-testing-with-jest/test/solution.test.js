// Write your tests here!
const findLowestScoringStudent = require("../src/solution")

let students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];

describe("findLowestScoringStudent", ()=>{
  it("should return correct student", ()=>{
    const actual = findLowestScoringStudent(students)
    const expected = { name: "Morgan Sutton", score: 7.4 }
    expect(expected).toEqual(actual)
  })
  it("should have passed in an object", ()=>{
    const actual = findLowestScoringStudent(students)
    expect(typeof actual).toEqual("object")
  })
  it("should return null if student list is empty", ()=>{
    students = []
    const actual = findLowestScoringStudent(students)
    expect(actual).toBeNull()
  })
})