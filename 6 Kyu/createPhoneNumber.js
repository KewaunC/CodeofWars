/*
Parameter 
an array of 9 numbers

Return 
the 9 numbers into a (617) 234 5890 format

Example 

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");

Psuedo Code
  First I need to format 0-2 indexes into () while also making sure I account for the space
  Afterwards I would just return all numbers and respective indexes
*/  

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ` + 
  numbers[3] + numbers[4] + numbers[5] + "-" +
  numbers[6] + numbers[7] + numbers[8] + numbers[9]; 
  }
  

  //I also did a format where I did a for loop and used replace
  function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx'
    
    for(let i = 0; i < numbers.length; i++){
        format = format.replace('x', numbers[i])
    }
    return format
  }