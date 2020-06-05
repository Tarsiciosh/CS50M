function isPositive (x) {
   return x > 0
}
myArray = [-3,-2,-1, -0.0003, 0, 0.002, , 0.1, 2, 3]
console.log(myArray.filter(isPositive))
