/* 
Parameter
We have a parameter of time which will be represented by the data type of a number 

Return
We will return the number of litres rounded down to the smallest value 
and it is represented by a number

Example
If Nathan biked for 2.5hrs then he will need to have consumed 1.25 litres
but rounded down would be 1 litre

Pseudo Code 

I know that I need to divide time by n and then round down the sum 
n = 2 
if Nathan biked for 3 hrs (time) then half of that (n) wuld 
return how many liters he would have to drink (litres)

Math.floor()
*/

function litres(time) { 
  
    return Math.floor(time/2);
  }


  const litres = time => Math.floor(time/2)