// ? Summary
/*
 - => one parameter a =>
 - => without parameter () => 
 - => multiline arrow func () => { return(explicit) }
 - => return obj in ({value:a})
 - => multiple parameter (a,b)=> a+b
*/

// Can you convert below arrow function into function declaration (normal function) format?

// with no parameter
// const getNum = () => 2;

function getNum() {
	return 2;
}

// with one parameter
// const isOne = (num) => num == 1;

function isOne(num) {
	return num == 1;
}

console.log(isOne(2));

// How would you write this with the least amount of characters
function Add22andReturn(num) {
	let sum = 0;
	sum = num + 22;
	return sum;
}

const Add22andReturnA = (num2) => num2 + 22;

// * arrow func with more than one statement
const sumAndReturn = (rest) => {
	let [a, b, ...arr] = rest;
	let sumOfArr = arr.reduce((a, b) => a + b);
	return sumOfArr;
};

let sumOfArr = sumAndReturn([1, 2, 3, 4, 5]);
sumOfArr;

// ! if we are returning and obj from arrow func wrap in ()
const giveMeObject = (a) => ({ value: a });

x = giveMeObject(5);
x;
