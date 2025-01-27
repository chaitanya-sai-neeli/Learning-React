// Outer function
function outer() {
    debugger;
	let arr = [];
	let i;
	for (i = 0; i < 4; i++) {
		// storing anonymous function
        debugger;
		arr[i] = function () { 
			return i; 
		}
	}

	// returning the array.
    debugger;
	return arr;
}

let get_arr = outer();

console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());