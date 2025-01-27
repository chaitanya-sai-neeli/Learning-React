const arr = [5, 19, 3, 2, 6];
// const output = arr.map(function(x){
//     return x*3;
// })
// console.log(output);

// const output = arr.filter(function(x){
//     return x%2 === 0;
// })
// console.log(output);

// const output = arr.reduce(function(min, num){
//     if(num < min){
//         min = num;
//     }
//     return min;
// })
// console.log(output);

const users = [
    { firstName: "Chaitanya", lastName: "Neeli", age: 24 },
    { firstName: "deviliers", lastName: "Ab", age: 37 },
    { firstName: "sunil", lastName: "joshi", age: 24 },
    { firstName: "Lionel", lastName: "Messi", age: 40 }
];
// const output = users.filter(i => i.age < 30 ).map(x => x.firstName);

const output = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);

// const output = users.reduce(function(acc, curr){
//     if(acc[curr.age]){
//         // acc[curr.age]++;
//         acc[curr.age] +=1;
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{});

console.log(output);