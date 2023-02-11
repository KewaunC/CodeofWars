const findOdd = xs => xs.reduce((a,b) => a ^ b )

/*

A number XORed with itself produces zero because XOR flips all the 1 bits to 0 and leaves the 0 bits alone.

A number XORed with zero produces the original number because zero doesn't flip any bits at all.

All numbers with an even number of occurrences can be organized into pairs XORing to 0. 
This leaves us with a number that has an odd number of occurrences. 
After cancelling out that number's pairs, one occurrence of the number remains.
 This XORs with zero and there's your result.


*/