function fOne(){
    console.log("normal function");
}
async function fTwo(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const actualData= await data.json()

    console.log(actualData);
}
fTwo()

fOne()



//synchronous code is executed line by line, waiting for one operation to finish before moving to the next.if the operation takes time, like fetching data from a server, or performing very heavy calculations, the entire program halts/is paused until the operation is done.
//this can make an application unresponsive for a while.
//to avoid this , for such time taking operations we use asynchronus code.
//Assynchronous code can start multiple operations at one and continue with othe tasks while waiting for the slow operations to complete.
//This guarantees improved responsiveness and efficiency

//callbacks can help achieve this by calling a function after an operation,and sometimes even nesting callbacks (multiple levels of callbacks/callback hell)
//however code can get difficult to read with callbacks, hence the async..await and .then(promises) were included in js through the task queue/event loop
//promises in js
