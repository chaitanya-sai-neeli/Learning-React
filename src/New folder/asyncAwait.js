/*
Async function: 
* async keyword is used to create a async function, it always returns a promise.
* async and await combo is used to handle promises
* await can only be used inside an async function
*/
// const p = new Promise (function(resolve, reject){
//     resolve("promise resolved!"); 
// })

// async function getData(){
//     return "namaste";
//     // return p;       //if return value is already a promise then it will not wrap inside a promise rather it will be returned as it is
// }

// /* Using await in async function*/
// async function handlePromise(){
//     const value = await p;      //"await" keyword should be used before a promise
//     console.log(value);
// }
// handlePromise();

// const dataPromise = getData();
// console.log(dataPromise);   //returns a promise
// dataPromise.then((res) => console.log(res));    //returns the actual data "namaste", incase of promise it retuns the resolved promise

/*Handling two promises at a time */
const pr1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("This promise 1 is resolved");
    }, 5000);
});

const pr2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("This promise 2 is resolved");
    }, 10000);
});


// Handling promises using async funtion
async function handlePromise(params) {
    const val = await pr1;                  //"await" keyword should be used before a promise
    console.log("in await func 1");
    console.log(val);

    const val2 = await pr2;                 //"await" keyword should be used before a promise
    console.log("in await func 2");
    console.log(val2);
}
handlePromise();