let a = 100;

// * for block it will store the let and const value in separate memory space call "Block"
{
	// let a = 108
	// console.log(a); // Cannot access 'a' before initialization bcoz of tdz
	let a = 108;
	console.log(a); // * 108 if above console is commented else 100
}

let admin = "John";
let name = admin;
name;
