/*
Parameter 
A stringing that will bec checked to see if its a Palindrome

Return
True or False if stringing === a palindrome

Example
"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid

Pseudo Code
We need to check for non alphanumeric characters. (/[^A-Za-z0-9]/g)
then we check to see if the length of both strings are the same
Afterwards we go into a for loop to check to see if the characters match are the same


*/


const palindrome = string => {
    string = string.replace(/[\W_]+/g, '').toLowerCase();
    
    return string === [...string].reverse().join``;
  }