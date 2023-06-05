function cable1(currentLength, requiredLength, saleLength) {
  let count = 0
  let i = currentLength
  while (i < requiredLength) {
    i += saleLength
    count++
  }
  return count
}

function cable2(currentLength, requiredLength, saleLength) {
  const distance = requiredLength - currentLength
  let total = Math.ceil(distance / saleLength)
  return total
}

module.exports = {cable1, cable2}