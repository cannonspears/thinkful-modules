// Write your tests here!
const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution");

let students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

describe("partitionStudentsByScore()", () => {
  it("should split students by score", () => {
    let actual = partitionStudentsByScore(students, 8)
    let expected =  
        [
          [{ name: "Morgan Sutton", score: 7.4 }],
          [{ name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Natalee Vargas", score: 9.2 }],
        ];
    expect(actual).to.eql(expected)
  });

  it('should place all students in first array if necessary', () => {
    let actual = partitionStudentsByScore(students, 10)
    let expected =  
        [
          [
            { name: 'Leo Yeon-Joo', score: 8.9 },
            { name: 'Morgan Sutton', score: 7.4 },
            { name: 'Natalee Vargas', score: 9.2 }
          ],
          []
        ];
    expect(actual).to.eql(expected)
  });

  it('should place all students in second array if necessary', () => {
    let actual = partitionStudentsByScore(students, 0)
    let expected =  
        [
          [],
          [
            { name: 'Leo Yeon-Joo', score: 8.9 },
            { name: 'Morgan Sutton', score: 7.4 },
            { name: 'Natalee Vargas', score: 9.2 }
          ]
        ];
    expect(actual).to.eql(expected)
  });

  it("should return an empty array with two arrays if the students list is empty", () => {
    students = []
    let actual = partitionStudentsByScore(students, 0)
    let expected = [[],[]]
    expect(actual).to.eql(expected)
  });
});
