obj = {
    name: "chay",
    initial: "sai",
    sample: {
        key: "value"
    }
}

// var newObj1 = obj;       //shallow copying since bith top & nested level values of original object are modified
// newObj1.initial = "neeli";
// newObj1.sample.key = "newValue";
// console.log(newObj1);
// console.log(obj);

// var newObj2 = Object.assign({}, obj);       //not deep copying since top level values are not modified but nested ones are modified
// newObj2.initial = "neeli";
// newObj2.sample.key = "newValue";
// console.log(newObj2);
// console.log(obj);

// var newObj3 = {...obj};       //not deep copying since top level values are not modified but nested ones are modified
// newObj3.initial = "neeli";
// newObj3.sample.key = "newValue";
// console.log(newObj3);
// console.log(obj);

var newObj4 = JSON.parse(JSON.stringify(obj));       //deep copying since both top & nested level values are modified
newObj4.initial = "neeli";
newObj4.sample.key = "newValue";
console.log(newObj4);
console.log(obj);