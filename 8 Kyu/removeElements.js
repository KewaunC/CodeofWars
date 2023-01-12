//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

/*
Parameter
arr which is comprised of elements

Return
I need to return every other element inside of the arr

Example
["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
--> ["Keep", "Keep", "Keep", ...]

LETS COUNT
keep = Index 0
remove = Index 1
keep = Index 2
remove = Index 3
keep = Index 4

Pseudo Code
I need to loop through the array and delete the 1st, 3rd, 5th indexes

*/

function removeEveryOther(arr){
    return arr.filter((_,index)=> index  % 2 ==0)
}



/*OLD CODE

/*
Parameter
arr which is comprised of elements

Return
I need to return every other element inside of the arr

Example
["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
--> ["Keep", "Keep", "Keep", ...]

LETS COUNT
keep = Index 0
remove = Index 1
keep = Index 2
remove = Index 3
keep = Index 4

Pseudo Code
I need to loop through the array and delete the 1st, 3rd, 5th indexes

*/

*/