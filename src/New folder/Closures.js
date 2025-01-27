//Closures : Function along with its lexical scope bundled together forms a "Closure".
// basic example:
// function a(){
//     var x = 1;
//     b();
//     function b(){
//         console.log(x);
//     }
// }
// a();


// function a() {
//     var x = 1;
//     function b() {
//         console.log(x);
//     }
//     return b;  //Function along with its lexical scope(whole closure) will be returned here.
// }
// var c = a();
// console.log(c);
// c();
// Above code can also we written as below:
    // return function b() {
    //     console.log(x);
    // }
    // When functions are returned from another functtions(return b) they will still maintain the lexical scope, 
    // Here function b() rememebers the scope of its parent lexical scope, so it prints 1 when funtion c() is invoked


function c(){
    var y = 2;
    function a(){
        var x = 1;
        function b(){
            console.log(x,y);
        }
        b();
        return b;
    }
    a();
    var z = a();
    console.log(z);
    z();
}
c();