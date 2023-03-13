const findStudentScoreByName = require("../src/solution")
const expect = require("chai").expect;

describe("findStudentScoreByName", ()=> {
  const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
  it("should return number if correct name given", ()=> {
    const expected = 9.2
    const actual = findStudentScoreByName(students, "Natalee Vargas")
    expect(actual).to.equal(expected)
  })
  
  it("should return null if cannot find given student", ()=>{
    const expected = null
    const actual = findStudentScoreByName(students, "Terry Peters")
    expect(actual).to.equal(expected)
  })
})