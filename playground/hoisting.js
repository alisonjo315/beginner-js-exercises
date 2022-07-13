/* eslint-disable */
console.log(age); // undefined
console.log(cool); // error, cool is not defined
var age = 10;

// ^^ javascript will hoist the variable declaration, not the value, so, "age" exists, but the value is undefined.  (cool simply doesn't exist -- no surprise.)
