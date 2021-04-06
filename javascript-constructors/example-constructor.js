function ExampleConstructor () {

}
console.log('value of protype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);


var newFunction = new ExampleConstructor()
console.log(newFunction)

console.log(newFunction instanceof ExampleConstructor)
