// function x() {
//     let i = 1;
//     setTimeout(function () {
//         console.log(i);
//         let i = 2;
//     }, 3000)
// }
// x();


function x() {
    for (let i = 0; i <= 4; i++) {
        // function y() {
            setTimeout(function () {
                console.log(i);
            }, 2000);
        // }
        // y();
    }
}
x();

// var x = 10;
// function a(){
//     if(x==10){
//     console.log(x);
//     }
// }
// a()
// console.log(x);