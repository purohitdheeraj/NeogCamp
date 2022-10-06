var arr1 = [1, 2];
var arr2 = [arr1, [3, 4]];
var arr3 = [...arr2, [7, 8]];

arr2; // * [[1,2], [3,4]]
arr3; // * [ [ 1, 2 ], [ 3, 4 ], [ 7, 8 ] ]

let a = [..."apple"];
a; // [ 'a', 'p', 'p', 'l', 'e' ]

// swap
let x = 1,
	y = 2;

[x, y] = [y, x]; // arr destructuring
x;
y;
