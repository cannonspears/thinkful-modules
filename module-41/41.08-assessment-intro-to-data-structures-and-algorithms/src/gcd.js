function gcd1(a, b) {
  // if a is equal to 0 then the GCD of a and b is b, so return b
  if (a === 0) {
    return b;
  }

  // if b is equal to 0 then the GCD of a and b is a, so return a
  if (b === 0) {
    return a;
  }

  while (b !== 0) {
    // let r be the remainder of dividing a by b
    const r = a % b;
    a = b;
    b = r;
  }

  return a;
}

function gcd2(a, b) {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  const divA = [1, a];
  const divB = [1, b];
  const common = [];

  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      divA.push(i);
    }
  }

  for (let i = 2; i < b; i++) {
    if (b % i === 0) {
      divB.push(i);
    }
  }

  for (let i = 0; i < divA.length; i++) {
    if (divB.includes(divA[i])) {
      common.push(divA[i]);
    }
  }

  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < common.length; i++) {
    if (common[i] > largest) {
      largest = common[i];
    }
  }

  return largest;
}
module.exports = { gcd1, gcd2 };
