function getArea(length,width){
    return (length*width)
}
let length=10
let width=12
console.log(length*width)
//first have to declare he variables before using them and this is due to its global scope

//arrow function
//the shorthand notation to variable naming, usend in call back functions, imbedded functions
//simplicity
let firstname='jenny'
let secondname='jeptoo'
let age=167
let userName =(firstname,secondname)=>{
    console.log('${firstname}${secondname}',(age)=>{
        
    })
    console.log(age);
}
console.log('hello')
//use any functional methods to calculate the peremiter of  a triangle
//tips declare sides variable


function getPerimeter(){
    
    console.log(side1+side2+side3);
    if (side1<=0||side2<=0||side3<=0){
        console.log("error sides should be greater than 0");
    }
}
let sides=3
    let side1=10
    let side2=15
    let side3=20
getPerimeter()
//write a function that is used to get data from a person and calculate the area of a cuboid