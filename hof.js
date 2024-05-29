//higher order functions

//these are these are functions that can take other fumnctions as arguements or return functions

function fOne() {
  console.log("running/executing function one");
}
function fTwo() {
  console.log("running/executing function two");
}
function fThree(cbF) {
  console.log("running/executing F three");
  cbF();
  console.log("completing F Three");
}
fThree(fTwo);

fThree(fOne);

fThree(function anotherF() {
  console.log("running/executing anotherF");
});
//The function being passed as an arguement to another function is called a call back function




