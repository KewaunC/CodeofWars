/*
Parameter
Line which will represent a string 

Return
If the value of line reads the same forward or backwards
If the input is a number convert it into a string first 

Example
Anna ==> True
12321 ==> True
Pie ==> False
12345 ==> False

Pseudo Code
First I need to check if line === a number and if it is then convert that into string
Next I need to take the string and then check to see if the reverse of the string matches 
  the initial string 
  line.split("").reverse().join("")
  
Afterwards I would return True or False 

*/


function isPalindrome(line) { 
  let palindrome = line.toString()
  
  if(palindrome === palindrome.split("").reverse().join("")){
    return true
  }else{
    return false
  } 
}