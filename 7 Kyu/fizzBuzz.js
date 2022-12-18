// Return an array

/*
Parameter 
N is a data type that with represent a number

Return 
the string of 'Fizz' if a multiplicative of 3
the string of 'Buzz' if a multiplicative of 5
the string of 'FizzBuzz' if a multiplicative of 3 AND 5

Example
if n = 3 return Fizz
if n = 5 return Buzz
if n = 3 && 5 return FizzBuzz

return the array

Pseudo Code

we need an empty arr 
then we need to iterate over n to check to see if 
n = 3, 5 or 15 

to return Fizz, BUzz, FizzBuzz
*/


function fizzBuzz(n) {
    let arr = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        arr.push("Fizz");
      } else if (i % 5 === 0) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }  
      return arr;
    
  }