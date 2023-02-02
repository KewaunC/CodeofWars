// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

/*
Parameters 
A string of space separated numbers

Return
highest and lowest number

Example
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Pseudo Code
I need to first turn it into a string
Then I can use the spread operator since it's an array
Now I need to find the highest value = Math.Nax
And then the lowest value = Math.min
I can use the spread (...) operator to make it easier to read


*/


function highAndLow(numbers){
  numbers = numbers.split(' ')
return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}