// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. 
//Return null/nil/None if input is empty string or null/nil/None.

/*
Parameter
name since we will be given a random Name

Return
Retun null if an empty string or if the input is null

Example

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null

Pseduo Code
if name == null or name.length = 0 return null
Else return hello name

*/


function greet(name) {
    if(name == null || name.length == 0)  {
    return null
    }else{
      return `hello ${name}!`
    }
  }
  
  /*
Refractured

function greet(name) {
  return name ? 'hello ' + name + '!' : null;
}
  */

/*
Best

function greet(name) {
  return name ? `hello ${name}!` : null;
}

*/