//Datatypes define the kind of information a variable can hold
//there are two main categories of datatypes in js
//Primitive/simple dsatatypes:- String, Number, BigInt, Boolean, Undefined, Null
//Primitivedatatypes hold a single value
let age = 25;
let maxNum = 98436427462n; //n at the end labels this to memoryas of type bigint
let isPresent = false;
let user;
let StartingPoint = null;
let city = "Eldoret";
//we can use the type of operator to check the datatype of a value/variable
console.log(typeof age);
console.log(typeof maxNum);
console.log(typeof isPresent);
console.log(typeof user);
console.log(typeof StartingPoint);
console.log(typeof city);

//Assignment: Differentiate between undefined and not defined in js
//Non-primitive/composite/complex/Reference datatypes ;- Object, array, function
//Non-primitive datatypes are more complex and store collections of data
let car = {
  brand: "Toyota",
  model: "Vitz",
  year: 2024,
  locallyAssembled: true,
  color: "red",
  start: function start() {
    console.log("car starting!!!!1");
    console.log("Vroommmmmmm");
  },
};
car.start();
//car is an object
console.log(car);
console.log(typeof car);
//objects are made up of key-value pairs seperated by a comma
//the key and the value are seperated by a full colon
//we use either bracket notation or dot notation to access individual values stored in an object
//for example:- to check the color of the car
console.log(car.color); //dot notation
//to check the car brand
console.log(car["brand"]); //bracket notation
//dot notation is considered a cleaner option by most  developers and bracket notations is used on need basis
//Array,function

//ARRAY
const cars = ["toyota", "mazda", "subaru", 78, true, [1, 2, 3]];
const students = [
  { name: "james", age: 12 },
  { name: "joy", age: 22, height: 5.8 },
];
//arrays are special objects
//arrays are zero indexed
//we use bracket notation
console.log(cars[0]); //toyota
console.log(cars[3]); //78

//the age for the second student
console.log(students[1].age); //22
cars[0];
