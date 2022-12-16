// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

/*
Parameter is Num

Return
the summation from num to num


Example
if num is 2 then I want to return 1 +2 
if number is 8 then I want to return 1+2..

Pseudo Code
Summation = n(n+1)2
*/


const summation = function (num) {
    return num * (num + 1) / 2
   }