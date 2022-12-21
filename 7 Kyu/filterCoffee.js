// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

/*

Filter method checks to see if the condition 
returns a truthy or falsy method, and then it will return a new arr
with the conditons met


Parameter
Budget = a number that I can afford
Prices = an array of coffee beans prices

Return
Which coffee beans I can afford and I also need to sort them from least expensive to most

Example
Budget = 10
Prices = [7,15,21,2,8,100]

Then my fucntion should return '2', '7' , '8'

Pseduo Code
i need to declare an empty arr so I can push if the price is less than or equal to my budget
and then afterwards I am going to return the arr and then I'm going to sort
Sort will allow me to return lowest value to highest and then with join it will return as strings


*/

function search(budget, prices) {

// return array of prices that are within budget
  let afford = []
  
  prices.forEach(price => {
  if(price <= budget){
  return afford.push(price)
}
  })
  
  return afford.sort((a,b) => a-b).join(',')
  

}

//Best Practice

// let search = (budget, prices) => prices
//     .filter(p => p <= budget)
//     .sort((a, b) => a - b)
//     .join(',')