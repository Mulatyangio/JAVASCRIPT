// What are variables
// Variables are ways to store data in memory/ram as a program/app is running
// in javascript we declare variables using var, let or const keywords
var age = 90
var Age = 90
// var is globally scopped
// let and const are block{} scopped
let username = "victor"
const PI = 3.142
// we use =(equal) to assign values to our variables
// when the application is running, we can access these values using the variable name

console.log(age);//90 
console.log(age); //90
console.log(username); // victor
console.log( PI * 2 ); // 6.284
username = "james" // 
// PI = 4.2 //trying to reassign to a constant variable - TypeError

const $_Fity = 573
const x = 0
// Passing by refference vs passing by value ( CS )

// objects(arrays) are called by reference()
// primitives(strings, numbers, boolean) are called by value

// Variable naming rules in Javascript --
/**
 * variables are case sensitive
 * name cannot start with a number but a number can appear after the first character
 * names can start with letters, _ underscore or $ dollarsign
 * you can not have spaces within the variable name
 * you can not use reserved keywords(let , const , var, function, this,  )
 * 
*/

// Variable naming conventions( CS ) 
/**
 * Names should be meaningful/descriptive - makes code readable and easy to maintain
 * Do not use the same name for a varibale and a function within the same scope
 * Naming Styles/Notations -> camelCaseNotation, PascalCaseNotation, snake_case_notation, kebab-case-notation
 */ 



// What is an API -- e.g. what daraja api is used for