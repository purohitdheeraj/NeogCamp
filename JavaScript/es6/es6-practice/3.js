// ? == vs ===

/* 
  - == is loose equality operator (only value)
  - === is strict equality operator (type and value)
*/

let a = null;
let b;

console.log(a == b);
console.log(a === b);

a = typeof null;
a; // object

b = typeof undefined;
b; // undefined