/*
Promise.all : FAIL-FAST
Used to handle multiple promise's together. It takes array of promises as an input.
Success case: Will wait till all the promises are finished and then gives each promise's results.
Failure case: As soon as any of the promises get rejected, 'Promise.all' throws an error of the first rejected promise without waiting for the result of remaining promises.

Promise.allSettled : 
Success case: Same as 'Promise.all' success case, waits till all the promises are settled and then gives the result. 
Failure case: Even if any of the promises fails, it will wait for all the promises to get settled.
Irrespective of individual promises results, it will provide each of their results as an array of objects at the end. Output values will be the same number of input promises.

Promise.race :
It gives the result of the first settled promise, irrespective of the promise's value(success/failure).
It will not wait for other promises to get settled.

Promise.any : FIRST SUCCESS-SEEKING
It waits for any of the promise to get successful first and then gives its result.
If none of the promises are resolved then it gives the Aggregated error, ie;the list/array of all promise's errors (after all the promises are settled).
*/

const p1 = new Promise((resolve, reject) => {
    // setTimeout(function(){
    //     resolve("P1 Success");
    // },3000)
    // setTimeout(() => resolve("P1 Success"), 3000);
    setTimeout(() => reject("P1 Failed"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 1000);
    setTimeout(() => reject("P2 Failed"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Failed"), 2000);
});

Promise.any([p1, p2, p3])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
        console.error(err.errors);
    })