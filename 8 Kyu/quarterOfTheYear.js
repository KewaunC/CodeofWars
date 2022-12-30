// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.


/*
Parameter
We will be assigned a month s 

Return
Based on the month we need to return which quarter the month falls under

Example

If February is passed the we return 1st Q

July 3rd 

November 4th

Pseudo Code
If month === Jan,Feb,Mar  1

April May, June === 2

July AUgust Sept === 3

Else return Q4
*/


// const quarterOf = (month) => {
//     if(month === 'January' || month === 'February' || month === 'March'){
//   return `${month} is part of the first quarter`  
//     }else if(month === 'April' || month === 'May' || month === 'June' ){
//   return `${month} is part of second quarter` 
//     }else if(month === 'July' || month === 'August' || month === 'September' ){
//   return `${month} is part of third quarter`
//     }else{
//     return `${month} is apart of fourth quarter`
//     }    
// }

    //Best solution

    const quarterOf = (month) => {
        return Math.ceil(month/3) 
        }