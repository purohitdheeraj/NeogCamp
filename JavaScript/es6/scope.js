// ? Summary
/*
 - let and const are block scoped
 - var is func and global scope
 - let value can be declared separately and define separately
 - const value need to be declared and define simultaneously
 - const value cannot be changed after defining
 - let and const will be stored in separate memory space
 - const hard-coded var should be in UPPERCASE
 - * let/const declarations do hoist, but they throw errors when accessed before being initialized
*/

// * let/const declarations do hoist, but they throw errors when accessed before being initialized

if (true) {
	let a = 2;
	// var a = 2;
}
// console.log(a);

// ! a is not defined
// * a has block scope { }

/*let a = 42;
{
	let a = 100;
}

console.log(a);
*/

let a = 100;
function App() {
	// console.log("1", a);
	let a = 42;
	console.log("2", a);
	{
		let a = 100;
	}
	console.log("3", a);
}

App();

let X = 100;
function Xpp() {
	X = 42;
	console.log("1", X);
}

Xpp();
