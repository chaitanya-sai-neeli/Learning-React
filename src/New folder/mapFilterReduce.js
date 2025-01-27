const
    arr = [3,5,4,7,8,2,6];
// const output = arr.map((i) => i*i);
// const output = arr.filter((i) => i>4);
// const output = arr.filter(function(i){
//     return i>4;
// });
// console.log(output);
// const output = arr.reduce(function(min, curr){
//     if(curr<min){
//         min = curr;
//     }
//     return min;
// },1);
// const output = arr.reduce(function(acc, curr){
//     acc+=curr;
//     return acc;
// },0);

const users = [
        {
            firstName: "Chaitanya",
            lastName: "Neeli",
            age: 24
        },
        {
            firstName: "deviliers",
            lastName: "Ab",
            age: 37
        },
        {
            firstName: "sunil",
            lastName: "chitre",
            age: 24
        },
        {
            firstName: "Lionel",
            lastName: "Messi",
            age: 40
        }
    ];

// const output = users.map(function(i){
//   return i.firstName +" "+ i.lastName;
// });
// const output = users.filter(function(i){
//     /* if(i.age < 30){
//       return i.firstName;
//      }*/
//     return(i.age < 30);
// }).map(function(i){
//      return i.firstName;
// })

// const output = users.filter(i => i.age<30).map(i => i.firstName);
// const output = users.reduce(function(acc,curr){
//   if(curr.age < 30) {
//       acc.push(curr.firstName);
//   }
//   return acc;
// },[])

// const output = users.reduce(function(acc,curr){
//   if(acc[curr.age]){
//       acc[curr.age]++;
//   }
//   else{
//       acc[curr.age]=1;
//   }
//   return acc;
// },{});
// console.log(output);

let student = [
        {
            name: "Smith",
            rollNumber: 31,
            marks: 80
        },
        {
            name: "Jenny",
            rollNumber: 15,
            marks: 69
        },
        {
            name: "John",
            rollNumber: 16,
            marks: 35
        },
        {
            name: "Tiger",
            rollNumber: 7,
            marks: 55
        }
    ];

// const output2 = student.filter(function(i){
//     return i.marks > 60
// }).map(function(i){
//     return i.marks;
// }).reduce(function(acc,curr){
//     return acc+=curr;
// },0);

// const output1 = student.filter(function(i){
//     return i.marks < 60;
// }).map(function(i){
//     return i.marks+=20;
// }).filter(function(i){
//     return i>60;
// })
// console.log(output2);
// console.log(output1);

// const output = student.map(function(i){
//     if(i.marks<60){
//         i.marks+=20;
//     }
//     return i;
// }).filter(function(i){
//     return i.marks > 60;
// }).reduce(function(acc, curr){
//     acc+=curr.marks;
//     return acc;
// },0);
// console.log(output);

const
    output = student.map((i) => {
        if (i.marks <60) {
            i.marks += 20;
        }
        return i;
    }).filter((i) => {
        return i.marks > 60;
    }).reduce((acc, curr) =>
        acc += curr.marks,0);
console.log(output);