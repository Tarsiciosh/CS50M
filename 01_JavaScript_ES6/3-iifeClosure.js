// we can create a closure around each anonymous function pushed to the array by
// turning them into IIFEs
function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push( (function (x) {
      return function () { console.log(x) }
    })(i) )
  }

  // Tar - it pushes the result of a funtion that is invoked in that moment
  // the result is a "compiled" function

  return arr
}

const functionArr = makeFunctionArray()

// this now logs 0 as expected
functionArr[0]()
