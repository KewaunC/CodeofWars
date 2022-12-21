function toCamelCase(str){
  let newStr = str
  for (let i = 0; i < newStr.length; i++){
    if (newStr[i] === '-' || newStr[i] === '_'){
      newStr = newStr.replace(newStr[i] + newStr[i+1], newStr[i+1].toUpperCase())
      
      return newStr
    }
  }
}