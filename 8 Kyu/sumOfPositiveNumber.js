function positiveSum(arr) {
  let sum = 0;
  arr.forEach((n) => {
    if (n >= 0) {
      sum += n;
    }
  });
  return sum
}

console.log(positiveSum([1,2,-3,4,5]))