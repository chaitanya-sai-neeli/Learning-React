//function statement
function xyz() {
  console.log("this is function statement");
}

//function expression
var b = function () {
  console.log("this is function expression");
};

// Named function expression
var a = function xyz() {
  console.log("this is named function expression");
};

//First Class Functions / First Class Citizens:
//Ability of function's to be used as values or arguments to an other function
var a = function (params) {
  console.log(params);
};
a(function () {
  console.log("Anonymous function being sent as an argument");
});
a(function xyz() {
  console.log("A normal function statement passed as an argument");
});

//returning a function from an other function
var a = function (params) {
  return function xyz() {
    console.log("Returning xyz function from an other function");
  };
};
console.log(a());
