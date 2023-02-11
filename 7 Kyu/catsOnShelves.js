/*
An infinite number of shelves are arranged one above the other in a staggered fashion.

The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3
(the cat cannot climb on the shelf directly above its head), */


function solution(start, finish){
    let difference = finish-start
    
   return Math.round(difference/3) + (difference % 3)
}