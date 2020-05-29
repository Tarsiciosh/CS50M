const myArray = [0,1,2,3,4,5,6]

function dobleValue (x){
    return x*2
}
newArray = myArray.map(dobleValue)
console.log (newArray)

function myMap(arr, fn) {
  const newArr = []
  /*
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    newArr.push(fn(val))
  }*/
  arr.forEach(function(val){
    newArr.push(fn(val))
  });

  return newArr
}
console.log( myMap(myArray,dobleValue))

//single threaded - synchronous
