
myArray = ["pepe", "julio"];
protoKeys = Object.keys(myArray.__proto__);
console.log(protoKeys)

//this is a way to change the prototype function
Number.prototype.toString = function () {
    return "hello"
}

