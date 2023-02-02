// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

/*
Parameters
distanceToPump = How many miles away 
mpg = Miles per Gallons 
fuelLeft = How many Gallons left

Return
if I can make it to the nearest pump


Example
distance to pump = 50 
mpg = 25 
fuelLeft = 2 
RETURN TRUE

distance to pump = 100 
mpg = 50 
fuelLeft = 1
RETURN FALSE


Pseudo Code
distanceToPump / mpg >= fuelLeft? True
Else Falase

*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump ? true : false
