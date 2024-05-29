// a fuction is a reusable block of code
// a function can optopnally have as many parameters as required.

function checkAge(yob,user){
    const age = 2024 - yob // moment js 
    let suffix = age!==1 ? " years old.": " year old."
    console.log("Hello "+ user+ ".Your are "+ age + suffix  );
    return age

}

checkAge(2002, "albert")
checkAge(2023, "Ethan")
checkAge(2024, "Joy")
checkAge(2009, "Wendy")

// Assignments

//Write a function called calculateTotal that takes two numbers (prices) as input. Inside the function, add the two numbers together. If the sum is greater than 100, apply a 10% discount by multiplying the sum by 0.9.  Return the final price after the discount (if applicable)

function calculateTotal(price1,price2){
    let total = price1+price2
    if(total>500){
        total = total * 0.85
    }else if(total>100){
        total = total * 0.9
    }
    return Math.round(total)
}
// MAth.floor, Math.ceil

console.log(calculateTotal(20,40)); // 60
console.log(calculateTotal(200,40)); // 216
console.log(calculateTotal(200,450)); // 552.5
// Write a function called isPositiveNumber that takes a number as input. Inside the function, use a logical OR operator (||) to check if the number is greater than zero (positive) or equal to zero. If it is, return true. Otherwise, return false.

// Control structures -> Conditional statements(ternary oprator, if else, switch case) and Loops(for loop, for in, for of, while , do while)
// objects--- arrays -- also everything in  js is an object
// hof 
// async js

// DOM- browser js
// practice (alot)

//sql/r database ms
// server js / node / express/templates/authentication/authorization/encryption/middleware/