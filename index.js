const computeFactorialIt = (n) => {
  let res = 1;
  for(let i = 1; i <= n; i++) {
    res = i * res;
  };
  return res;
}

const computeFactorialRec = (n) => {
  if(n === 0) {
    return 1;
  } else {
    return computeFactorialIt(n - 1) * n;
  };
}

const computePowerIt = (n, p) => {
  for(let i = 1; i < p; i++) {
    n = n * n;
  };
  return n;
}

const computePowerRec = (n, p) => {
  if (p == 1) {
    return n;
  } else {
    return computePowerRec(n, p - 1) * n;
  }
}

const computeSquareRoot = (n) => {
  const sqrt = (n, i) => {
    if (i * i > n) {
      return `${n} isn't a perfect square`;
    }
    if (i*i === n) {
      return i;
    }
    return sqrt(n, i+1);
  };
  let i =  1;
  return sqrt(n, i);
}

// const isPrimeNumber = (n) => {
//   if (n % 1 == 0) {
//     return true;
//   } else {
//     return isPrimeNumber(n) -;
//   }
// }

console.log(computeFactorialIt(5));
console.log(computeFactorialRec(5));
console.log(computePowerIt(5, 2));
console.log(computePowerRec(5, 2));
console.log(computeSquareRoot(16));



