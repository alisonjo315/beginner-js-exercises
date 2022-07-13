/* eslint-disable */
const first = 'alison';
let second = 'jo';
var age = 99;
function sayHi() {
  console.log('hi!');
}

// all three ^^ are global variables
console.log(first, second, age, sayHi); // alison jo 99 "function sayHi()"
// const/let are NOT attached to "window" (even though they're global variables)
console.log(window.first, window.second, window.age, window.sayHi); // undefined undefined 99 "function sayHi()"

// function scoped
// block scoped
// ...

// curly braces make a "block" -- it's not just functions, block scope exists even with just conditionals!
if (1 === 1) {
  const cool = true;
}
// console.log(cool); // error, cool is not defined

// function isCool(name) {
//   if (name === 'wes') {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }
