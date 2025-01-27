"use strict";
/*
//this keyword in Global scope:
It represents global object in generic scenario
Incase of browsers "this" keyword represents the window object (ie;Global object)
*/
console.log("In a global scope: ", this);
//example of "this" in global scope

//this keyword inside a function
/*
Note: "this" keyword behaves differently in strict & non-strict mode and how the function is being called.
this substitution : In non strict mode, if the value of this keyword is null or undefined then its value
 will be replaced by GlobalObject.
*/
function xyz() {
  console.log("Inside a function:", this);
}
xyz();
//prints undefined in strict mode whereas in nonstrict mode it prints the window object
window.xyz();
//prints window object even in strict mode

// this inside a Object's method
// Method : if we make function as part of an Object then it is called as method
const student = {
  name: "Chay",
  printName: function () {
    console.log("value of this keyword in an object's method is", this);
    //prints the whole student object
    console.log("value of key is", this.name);
    //prints "Chay" the value of name
  },
};
student.printName();
//to use the methods of one object in an other we use call, apply and bind methods
const student2 = {
  name: "Sai",
};
student.printName.call(student2);
//here the value of this = student2

//this inside an Arrow function
// Arrow functions doesn't have their own this binding, it retains the this value of the lexical context they are defined in (enclosing lexical context).
const abc = () => {
  console.log(
    "Value of this keyword in arrow function defined in global scope is",
    this
  ); //prints window object, lexical context is global space
};
abc();

const employee = {
  name: "Chay",
  printSalary: () => {
    //arrowfn as a method of the object
    console.log(
      "value of this keyword in arrowfn defined in an object is",
      this
    );
    //prints window object, lexical context is global space
  },
};
employee.printSalary();

const employee2 = {
  name: "Chay",
  printSalary: function () {
    //enclosing lexical context
    const inhandAmount = () => {
      console.log(
        "value of this keyword of an arrowfn inside an object's method is",
        this
      ); //prints whole object employee2, lexical context of arrowfn
    };
    inhandAmount();
  },
};
employee2.printSalary();

//this keyword inside DOM is the reference to the HTML element itself
