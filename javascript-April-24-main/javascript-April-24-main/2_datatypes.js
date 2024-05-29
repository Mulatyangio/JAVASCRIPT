// Data Types define the kind of information a variable can hold
// there are two main categories of data types in js
// Primitives/simple data types :- String, Number, BigInt, Boolean, Undefined, Null
// Primitive data types hold a single value
let age = 25
let maxNum = 98436427462n // n at the end labels this to memory as of type bigint
let isPresent = false
let user
let startingPoint = null
let city = "Eldoret"
// We can use the typeof operator to check the data type of a value/variable
console.log(typeof age);

// Assignment: Differentiate between undefined and not defined in js

// Non-Primitive/Composite/Complex/Reference data types ;- object, array, function
// non-primitive data types are more complex and store collections of data
let car = {
    brand: "Toyota",
    model: "Vitz",
    year: 2024,
    locallyAssembled: true,
    color: "red",
    start: function start(){
        console.log( "Car starting!!!1" );
        console.log("vroooommm!!!!!");
    }
}
// car is an object
car.start()
console.log(car);
console.log(typeof car);
// objects are made up of key-value pairs separated by a comma
// the key and the value are separated bu a full-collon
// We use either bracket notation or dot notation to access individual values stored in an object
// for example:- to check the color of the car
console.log( car.color ); // dot notation
// to check the car brand
console.log( car["brand"] ); // bracket notation
// dot notation is considered a cleaner option by most developers and bracket notation is used on need basis. 


//ARRAY
const cars = ["toyota","mazda", "subaru", 78, true, [1,2,3] ]
const students = [{name:"james", age: 12}, {name:"joy", age: 22, height: 5.8}, {name:"jude", age: 32}]
// arrays are special objects - 
// arrays are zero indexed
// we use bracket notation
console.log(  cars[0]  ); // toyota
console.log(  cars[3]  ); // 78
console.log(  cars[5][0]  ); // [1,2,3]

// the age for the second student
console.log( students[1].age );  //22























