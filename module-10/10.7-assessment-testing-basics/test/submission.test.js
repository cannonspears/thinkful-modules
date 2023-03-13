const fs = require("fs");
const path = require("path");
const { expect } = require("chai");
const partitionStudentsByScore = require("../src/solution");

describe("partitionStudentsByScore()", () => {
  it("should split students by score", () => {
    const students = [
      { name: "Thomas Wimmer", score: 8.4 },
      { name: "Paula Pregl", score: 9.8 },
      { name: "Maja Renner", score: 7.3 },
    ];
    const [low, high] = partitionStudentsByScore(students, 9);
    expect(low).to.have.deep.members([
      { name: "Thomas Wimmer", score: 8.4 },
      { name: "Maja Renner", score: 7.3 },
    ]);
    expect(high).to.have.deep.members([{ name: "Paula Pregl", score: 9.8 }]);
  });

  it('should place all students in first array if necessary', () => {
    const students = [
      { name: 'Thomas Wimmer', score: 8.4 },
      { name: 'Paula Pregl', score: 9.8 },
      { name: 'Maja Renner', score: 7.3 },
    ];
    const [low, high] = partitionStudentsByScore(students, 10);
    expect(low).to.have.deep.members(students);
    expect(high).to.be.empty;
  });

  it('should place all students in second array if necessary', () => {
    const students = [
      { name: 'Thomas Wimmer', score: 11.4 },
      { name: 'Paula Pregl', score: 12.8 },
      { name: 'Maja Renner', score: 15.3 },
    ];
    const [low, high] = partitionStudentsByScore(students, 10);
    expect(high).to.have.deep.members(students);
    expect(low).to.be.empty;
  });

  it("should return an empty array with two arrays if the students list is empty", () => {
    const students = [];
    const actual = partitionStudentsByScore(students, 10);
    const expected = [[], []];
    expect(actual).to.eql(expected);
  });
});

const solutionTestsFilePath = path.join(__dirname, "solution.test.js");
const solutionTestContent = fs.readFileSync(solutionTestsFilePath, "utf-8");

describe("solution.test.js", () => {
  it("should require chai", () => {
    expect(solutionTestContent).to.include("chai");
  });

  it("should use the expect syntax", () => {
    expect(solutionTestContent).to.include("expect(");
  });

  it("should use the describe syntax", () => {
    expect(solutionTestContent).to.include("describe(");
  });

  it("should use the it syntax", () => {
    expect(solutionTestContent).to.include("it(");
  });
});
