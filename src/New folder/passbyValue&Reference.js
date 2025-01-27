//Pass by value and reference
/*In Pass by value, the function is called by directly passing the value of the variable as an argument. So any changes made inside the function do not affect the original value.
In Pass by value, parameters passed as arguments create their own copy. So any changes made inside the function are made to the copied value not to the original value*/
function passByValue(a, b){
    a = 2;
    b = 1
    console.log("passByValue", a, b);
}
let a = 1;
let b = 2;

console.log("passByValue", a, b);
passByValue(a, b);
console.log("passByValue", a, b);

/*In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside function affect the original value. */
function passByReference(obj){
    obj.a = 2,
    obj.b = 1
    console.log("passByReference", obj.a, obj.b);
}
let obj = {
    a : 1,
    b : 2
}
console.log("passByReference", obj.a, obj.b);
passByReference(obj);
console.log("passByReference", obj.a, obj.b);


// function pass(){
//     name = "Chay";
//     person = {
//         name : "Chaitanya Sai",
//         city : "Hyd"
//     }
//     console.log(name);
//     console.log(person);
//     modifyData(name, person);
//     console.log(name);
//     console.log(person);
// }
// pass();

// function modifyData(primitiveType, ObjectType){
//     primitiveType = "Anand";
//     ObjectType.name = "Anand Sai";
//     console.log(primitiveType);
//     console.log(ObjectType);
// }




