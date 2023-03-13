// Write your tests here!
const findStudentByName = require("../src/solution")
const {expect} = require("chai")

const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

describe("findStudentByName", ()=>{
  it("should return correct student object", ()=> {
    const actual = findStudentByName(students, "Leo Yeon-Joo")
    const expected = { name: "Leo Yeon-Joo", score: 8.9 }
    expect(actual).to.be.eql(expected)
  })
  it("should return null if cannot find student", ()=> {
    const actual = findStudentByName(students, "Terry Peters")
    expect(actual).to.be.null
  })
  it("should return null if input array is empty", ()=> {
    const students = []
    const actual = findStudentByName(students, "Terry Peters")
    const expected = null
    expect(actual).to.be.null
  })
})