const numbers = [3,2];
const add = function(a,b){
    return a+b;
}
const subtract = function(a,b){
    return a-b;
}
//Generic function to compute the logic of iteration through the elements of an array
const calculate = function(arr,logic){
    let output = null;
    for(i=0; i<arr.length-1; i++){
        output = logic(arr[i],arr[i+1]);
    }
    return output;
}
console.log("The sum is ", numbers.map(add));
console.log("The sum is ", calculate(numbers,add));
console.log("The difference is ", calculate(numbers,subtract));

const radius = [4,3];
const circleArea = function(r){
    return 3.14*r*r;
};
const circlePerimeter = function(r){
    return 2*3.14*r;
}
//Generic function
const logicFunc = function(arrEle, req){
    let output = [];
    for(let i=0 ; i<radius.length ; i++){
        output.push(req(arrEle[i]));
    }   
    return output;
}
console.log(logicFunc(radius, circleArea));
console.log(logicFunc(radius, circlePerimeter));
//Using map function to calc area
const boom = radius.map(function(i){
    return 3.14*i*i;
})
console.log("Area of circles with radii [4,3] is", boom);