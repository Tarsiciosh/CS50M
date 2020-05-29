
function getFirstNum (num){
  if (num === 2) throw new Error("num is 2")
  return num + 1
}

function getSecondNum (num){
  return getFirstNum (2) + num ;
}

function sumTwoNumbers (x,y){
  return x + y
}

sum =  sumTwoNumbers (getFirstNum(1), getSecondNum(1))
console.log(sum)

/* thorw the error only the second time it calls the getFirstNum
Error: num is 2
    at getFirstNum (C:\Users\....
    at getSecondNum (C:\Users\...
    at Object.<anonymous> (C:\Users\...
    ...
*/
