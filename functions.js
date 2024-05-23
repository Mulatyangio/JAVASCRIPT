//a function is a reusable block of code
//a function can optionally have as many parameters as required

function checkAge(yob, name) {
  const age = 2024 - yob; // momentjs
  let suffix = age !== 1 ? " years old" : " year old";
  console.log("Hello " + name + " you are  " + age + suffix);
  return age, name;
}

checkAge(2002, "Ashley");
checkAge(2006, "lindsey");
checkAge(2023, "Josh");
checkAge(2024, "John");

//assignments
//Write a function called calculateTotal that takes two numbers (prices) as input. Inside the function,add the two numbers together. If the sum is greater than 100, apply a 10% discount by multiplying the sum by 0.9. Return the final price after the discount if applicable

//Write a function called isPositiveNumber that takes a number as an input. inside the function, use a logical or operator(||)to check if the number is greater than zero(positive)or equal to zero. If it is return true .Otherwise return false


//control structures -> Conditional statements (ternary operator,if else,switch case)and loops (for loop,for in,for of,while, do while )
//objects---arrays
//hof
//async js

//DOM-browser js
//practice(alot)

//sql/r database ms
//server js /node/express/template/authentication/authorization/encryption/middleware/