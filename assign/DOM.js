//DOM- document object model. This is a way in which javascript interacts with and manipulates webpages
//the DOM represents the html document in a tree structure(javascript object )with methods and properties to allow javascript access,modify and create elements on the page, dynamically changing content and behavior.



//Accessing elements 
/**
 * document.getElementByTagName(tagname)
 * document.getElementByClassName(class)
 * document.getElementById(id)
 */

//each element is an object with its own properties and methods to manipulate it(e.g. change text content,chnange inner html/children, add or remove or change attributes, styles, add event listeners,)

console.log(document.getElementById("testelement"));

let myP=document.getElementById("testelement")

console.log(myP);
myP.style.backgroundColor="green"
myP.textContent="Ngio"
myP.setAttribute("class","newp jjajy")
myP.addEventListener("click",handleClicking)

let count=0
function handleClicking(){
    count++
    console.log("element clicked!!!!"+count+"times");
}