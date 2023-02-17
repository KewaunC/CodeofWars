/*
Paramter 
classPoints - An array of student grades
yourPoints - my grade

Return
True if I'm better than the class Average
False if Im' not better

Example
console.log(betterThanAverage([1,2,3], 10),true)
console.log(betterThanAverage([61,62,63], 71),true)
console.log(betterThanAverage([100,97,98], 10),false)

Pseudo Code
First I need to take the array of classPints and ten divide it by array.lenth
Then afyerwards I need to compare the result of the average to my grade
Return True or False


*/

function betterThanAverage(classPoints, yourPoints) {

    const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;  
      
      return average < yourPoints ? true : false
    }