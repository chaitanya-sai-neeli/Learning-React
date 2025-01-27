console.log("Start");

setTimeout(function timerCallback() {
    console.log("In Timer");
}, 2000);

// // fetch("https://netflix.com") 
// // .then(function fetchCallback(){
// //     console.log("In Fetch");
// // });


console.log("End");
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 5000) {
    endDate = new Date().getTime();
}
console.log("while expired");