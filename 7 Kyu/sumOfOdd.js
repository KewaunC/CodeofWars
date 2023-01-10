// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


/*
Parameter
of an arr that contains a data type 
I dont know the type

Return
UNdefined if the values aren't numbers
I need to odd numbers cube ( multply the same interger by itself twice) 

Example
[1,2,3,4]
return 28

Pseduo Code
if given an arry of [1,2,3,4] I shold be able to return 28 since 1 and 3 are odd numbers and 
combined the value is 28 
Since the power of non-numbers is NaN. I can just check for NaN at the end of my function and return undefined

*/

function cubeOdd(arr) {
    return arr.reduce((acc, curr)=> {
      if(isNaN(curr % 2 !== 0)){
       acc += Math.pow(curr, 3) 
      } 
      return acc 
    }, 0)
  }