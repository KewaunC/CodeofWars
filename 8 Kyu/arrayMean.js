/*
Parameter nums = array of numbers

Return = the mean which is the sum off all numbers divided by how many nmbers in the array

Example
[1, 3, 5, 7]
1+3+5+7 = 16
16/4 = 4

PSUEDO CODE 
Reduce and then afterwards we would divide by the arr

*/

const findAverage = nums => nums.reduce((acc, curr)=> acc + curr)/nums.length