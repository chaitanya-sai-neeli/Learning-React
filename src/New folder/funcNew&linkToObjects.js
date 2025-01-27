// let myString = prompt("enter the string");
// let chay = new Function("q1", "q2", myString);
// console.log(chay(3,2));
// let greet = new Function(console.log("welcome"));
// greet();

firstDetails = {
    name: "chay",
    marks: 47,
    rank: 3
}
secondDetails = {
    name: "anand",
    marks: 49,
    rank: 1
}

function calcPercentage(grace) {
    let percentage = (this.marks / 60) * 100;
    console.log(`Incremented marks % of ${this.name} is ${percentage}`);
    // console.log("Incremented marks % of "+ this.name + " is " + percentage);
}

console.log("Function linked to object using call method");
calcPercentage.call(firstDetails, 10);   
calcPercentage.call(secondDetails, 10);  
console.log("");

console.log("Function linked to object using apply method");
calcPercentage.apply(firstDetails, [10]);   
calcPercentage.apply(secondDetails, [10]); 
console.log("");

console.log("Function bounded to object using bind method");
let firstMarks = calcPercentage.bind(firstDetails);
firstMarks(10);
let secondMarks = calcPercentage.bind(secondDetails);
secondMarks(10);