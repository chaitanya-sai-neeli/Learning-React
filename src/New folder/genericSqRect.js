const sides = [34, 45];

const area = function (length, breadth){
    return length * breadth;
}
const perimeter = function (length, breadth){
    return 2*(length + breadth);
}

//Generic function for the common logic
const calculate = function (sides, logic){
    const output = [];
    for(let i=0; i<sides.length-1; i++){
        output.push(logic(sides[i], sides[i+1]));
    }
    return output;
}

console.log("area is ",calculate(sides, area));
console.log("perimeter is ",calculate(sides, perimeter));

//Normal functions to calc area and perimeter
const calculateArea = function (){
    const output = [];
    for(let i=0; i<sides.length-1; i++){
        output.push(sides[i] * sides[i+1]);
    }
    return output;
}
console.log(calculateArea());

const calculatePerimeter = function (){
    const output = [];
    for(let i=0; i<sides.length-1; i++){
        output.push(2*(sides[i] + sides[i+1]));
    }
    return output;
}
console.log(calculatePerimeter());
