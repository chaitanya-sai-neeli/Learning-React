
// Outer();
// var a = 1;
// function Outer(){
//     inner();
//     function inner(){
//         console.log(a);
//     }
// }
// Outer();


//  var foo = 1;
//  function bar(){
//     if(!foo){       //why foo is becoming undefined instead of 1 (it should look for foo in global scope also kada which means 1)
//         var foo = 10;
//     }
//     console.log(foo);
//  }
//  bar();


// let a = 100;
// var b = 200;
// const c = 300;
// {
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);



// Q1   //https://www.freecodecamp.org/news/function-hoisting-hoisting-interview-questions-b6f91dbc2be8/
// function foo() {
//     function bar() {
//         return 3;
//     }
//     return bar();
//     function bar() {
//         return 8;
//     }
// }
// console.log(foo());

// Q2
// function parent() {
//     var hoisted = "I'm a variable";
//     function hoisted() {
//         return "I'm a function";
//     }
//     return hoisted();
// }
// console.log(parent());

// // Q3
// alert(foo());
// function foo() {
//     var bar = function () {
//         return 3;
//     };
//     return bar();
//     var bar = function () {
//         return 8;
//     };
// }


// Q4
// var myVar = 'foo';
// (function () {
//     console.log('Original value was: ' + myVar);
//     var myVar = 'bar';
//     console.log('New value is: ' + myVar);
// }
// )();


// Q5
// var x = 1;
// function dummy(){
//     console.log(x);
//     // var x = 2;
//     dummy2();
//     function dummy2(){
//         console.log(x);
//     }
// }
// dummy();


//Q6
// let x = 1;
// function dummy(){
//     // console.log(x);
//     let x = 2;
//     dummy2();
//     function dummy2(){
//         console.log(x);
//     }
// }
// dummy();


// Q7 (Types of Errors)
// console.log(a);   //yields reference error
// let  a = 10;     //yields reference error

// const c;         //yields syntax error
// c = 1000;        //yields syntax error

// const c =100;    //yields Type error
// c = 100;         //yields Type error

// Q8
// function magic() {
//     return function calc(x) {
//         console.log(x * 42);
//     };
// }
// const answer = magic();
// answer(1337); 
// console.log(answer);

//Q9
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

//Q10
// var x = 23;
// (function () {
//     var x = 43;
//     (function random() {
//         x++;
//         console.log(x);
//         var x = 21;
//     })();
// })();





