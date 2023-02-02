// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.


/*
Parameters
A year given 

Return
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

Pseudo Code
I need to use The Math.ceil() as it always rounds up 
and returns the smaller integer greater than or equal to a given number.


*/



const century = (year) => Math.ceil(year/100) 