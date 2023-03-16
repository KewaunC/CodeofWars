/*
Parameters 
str that a troll has commented

Return
The string without vowels (y doesnt count for this Kata)


Example
This website is for losers LOL!" -> "Ths wbst s fr lsrs LL!".
This video is bad -> Ths vd s bd

Psuedo COde
So I would need to first check to see if the string has an vowels in it
Then I would replace the vowels with an empty place
Afterwards I would return the string

*/

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }