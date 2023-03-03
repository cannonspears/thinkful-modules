function printNames(names) {
  names.forEach((name) => console.log(name));
}

function logTreeType(trees) {
  trees.forEach((tree)=>console.log (tree.type));
}

function totalPoints(points) {
  let total = 0;
  points.forEach((point) => total += point)
  return total
}

function buildSentence(words) {
  let message = ""
  words.forEach((word)=>{ message += `${word} `})
  return message
}

function logPercentages(decimals) {
  decimals.forEach((number)=>{
    console.log(`${number * 100}%`)
  })
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
