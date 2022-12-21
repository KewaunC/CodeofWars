// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

/*
Parameter 
We are given an array of numbers 

Return
And we would need to return the odd numbers 

Example
If given an array of [2,4,5,6] should == [2,4,6]

Pseduo Code
Filter method checks to see if the condition 
returns a truthy or falsy method, and then it will return a new arr
with the conditons met

*/


function getEvenNumbers(numbersArray){ 
    // filter out the odd numbers
    return numbersArray.filter(numbersArray => numbersArray % 2 === 0)
  }