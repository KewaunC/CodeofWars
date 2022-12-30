/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


Parameters
s which ill be a random string wtih an exclamatiin point

Return
The string with the explanation point

Exampe
'I love pie!
'I love pie

Pseduo Code
We need to find the ! and then get replace it
 
 **Whens using the replace method and we are removing something we need to make sure to mark
 /\(what are we replacing)/g, (insert what we are replacing)
 G stands for global

*/


function removeExclamationMarks(s) {
    return s.replace(/\!/g, '');
  }