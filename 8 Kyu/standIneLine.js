/*
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
*/

function nextInLine(arr, item) {
    // Ok in order to push tp an array I need to use the push method
    // And to remove the first element of an array I need to shift
  
    arr.push(item)
     item = arr.shift(item)
    
    return item;
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));