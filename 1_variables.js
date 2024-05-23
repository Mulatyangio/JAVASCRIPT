//what are variables?
//vaiables are ways to store data in memory/ram as a program/app is running
//in Javascript we declae variables using var, let or const keywords
var age = 90
//var is globally scopped
//let and const are block{}scopped
let username = "victor"
const PI = 3.142
//we use = to assign values to our variables
//when the application is running, we can access these values using the variable name

console.log(age);//90
console.log(age);//90
console.log(username); //victor
console.log(PI * 2);//6.284

//you cannot reassign to a constant variable eg PI = 4.2 // trying to reassingn to a constant variable--type error



//passing by reference vs passing by value(CS)
//variable naming rules in Javascript--
/**
*variables in javascript are case sensitive 
*names can't start with a number
*names can start with letters,_(underscore)or dollarsign
*names can contain letters, numbers, underscores or dollarsign
*names can't have spaces
*names can't be reserved keywords(let const var function this)

*/
//variable naming conventions( CS )
/**
 * Names should be meaningful/descriptive - makes code readable and easy to maintain
 * Do not use the same name for a variable and a function within the same scope
 * naming styles/notations-> camelCaseNotation, PascalCaseNotation, snake_case_notation, kebab-case-notation
 *
 */
//What is an API
//objects(arrays) are called by reference 
//primitives(strings, numbers, boolean) are called by value


/*declaring a function  : there are three ways of declaring a function:
function declaration:function name, parameters<function body> accessed at a global level
function expression: a function declared and stored in a variable: classes,local scope
arrow function:for ease and expertise accessibility


*/
//function declaration
//void function
function getName(){
    return("john","mwangi")
}

