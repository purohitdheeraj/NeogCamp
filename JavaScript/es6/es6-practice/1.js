function consoleNum() {
	var isWorkshop = true;
	var num = 20;
	if (isWorkshop) {
		let num = 10;
		console.log(num); // 10 bcoz of block scope of let
	}
	console.log(num); // 20 bcoz of functional scope of var
}

consoleNum();

// in hoisting jit compiler moves the variable declaration top of the scope

u; // ref error
let u; // undefined

u = 10;

x;
var x = 10;
var x = 20;

x;
k;
let k = 10;