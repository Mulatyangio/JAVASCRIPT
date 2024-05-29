// Javascript built-in standard objects provide essential functionalities for working with data, manipulating strings, performing calculations, and more. This is made posible by their pre-defined properties and methods.

// These objects include:- Object, Array, Math, Date, JSON ,String, Number among others. 
// js proptotype chaining
// These objects are also available in the global scope so they can be used anywhere in the code without having to import/require.

/**
 * Object:- The base object from which all other objects inherit. It provides methods for interacting with objects like creating new properties or checking if a property exists.
 * Array:- provides a set of functions/methods and properties to manipulate arrays
 * Math:- provides mathematical constants and functions like calculating square roots, exponentiation, and trigonometric functions.
 * Date:- Provides methods for getting different parts of the date (year, month, day) and performing date calculations.
 * JSON:- Used for textual data interchange. JSON objects mimic JavaScript object syntax and can be easily converted to and from JavaScript objects.
*/ 

// The browser comes built with an additional set of global object to help work with html elements and the browser itself. The same applies to other javascript environments like node js and bun js

console.log( Math.sqrt(16)    );
console.log( Math.round(9.7) );
console.log( Math.round(Math.random()*50) );
let smallest = Math.min(23,41,4,53,)
console.log(smallest);

 console.log(  new Date(Date.now()).toLocaleTimeString()); // epoch time

setTimeout(()=>{
    console.log(  new Date(Date.now()).toLocaleTimeString()); // epoch time
}, 3000)

let names = ["joy","albert", "victor"]
console.log( names.sort() );
 const winner = "Beniah"
console.log(   winner.startsWith("b") ); // true

// array methods, string methods ,, object methods, number methods