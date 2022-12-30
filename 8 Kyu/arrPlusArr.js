// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

/*
Parameter
We are given 2 arrays

Return
We need to combine the 2 arrays and then we need to return the sum

Example
[1, 2, 3], [4, 5, 6]
Outpt will be 21

Pseduo Code
First I need to combine each array (concat method)
And then I need to sum all the intergers (reduce)

*/


function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((accumulator, currentValue) => accumulator + currentValue); 
  }