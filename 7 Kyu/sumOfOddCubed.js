function cubeOdd(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
    }
    total = undefined;
    return total;
  }

  arr.map(function (x) {
    if (x % 2 !== 0) {
      x = x * x * x;
      return (total = total + x);
    }
    return total;
  });
}
