function findOdd(numbers) {
  let count = 0; // let count equal Zero
  for(let i = 0; i<numbers.length; i++){ // our number is bigger than 1 and nw we run a loop
    for(let n = 0; n<numbers.length; n++){ // in the loop we try to find a number that appears an odd number of times
      if(numbers[i] == numbers[n]){ // here we are saying hey if 
        count++; 
      }
    }
    if(count % 2 != 0 ){ // if the count has a remainder that doesn't equal 2 then return the number in the array
      return numbers[i];
    }
  }
};