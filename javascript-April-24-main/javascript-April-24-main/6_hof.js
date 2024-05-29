// Higher Order Functions

// These are functions that can take other functions as arguments or retun functions


function fOne(){
    console.log("running/executing function One");
}

function fTwo(){
    console.log("running/executing function Two");
}

function fThree(cbF){
    console.log("running F three");
    cbF()
    console.log("completing F three");
}

fThree(fTwo)

fThree(fOne)

fThree(function anothreF(){
    console.log("executing another Function");
})
// the function being passed as an argument to another funtion is called a callback function


