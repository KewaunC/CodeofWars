// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.




/*
Paramter 
Arr which represent an array thta has intergers that are in ascending order
mixArr which represent an array thta has intergers that are mixed order and also missing an interger

Return
I need to return the missing number and if there is no missing missing return 'No Deletion' || 0

Example
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.

Pseduo Code
So I need to first check to see if the the length of the arrs are the same
Then if they arent then I need to sort mixArr
And then I need to loop through the arr to  find the missing interger

*/


function findDeletedNumber(arr, mixArr) {
    if(arr.length == mixArr.length){
    return 0
    }else{
      let sortedMix = mixArr.sort((a,b)=> a-b)
      for(let i = 0; i < arr.length; i++){
          if(arr[i] != mixArr[i]){
            return arr[i]
          }
        }
    }
  }