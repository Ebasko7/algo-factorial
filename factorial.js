//looping solution
function factorial(num) {
  factorialOfNum = 1
  for (let i = num; i >=1 ; i--){
    factorialOfNum *= i
  }
  return factorialOfNum
}

//recursive solution

function recursiveFactorial (num){
  if(num === 1){
    return 1
  } else {
    return num * recursiveFactorial(num - 1)
  }
}
//module.exports = factorial

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))

console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(6))