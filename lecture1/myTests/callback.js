function doSomethingAsync (seconds, callback) {
  setTimeout(function (){callback(seconds)}, seconds * 1000)
}
// callback
// callback is inmediately invoked if it is not passed as an anonimous function
doSomethingAsync (2, function(seconds){
  console.log("hello after " + seconds + " s" )
})
