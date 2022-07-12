/* eslint-disable prefer-arrow-callback */
/* eslint-disable prettier/prettier */
// i.e. in addition to what we covered in cf_params-args.js...

// part 1: misc anons, arrow functions, IIFE

// Hoisting demonstration (relates to "Hoisting" further down).
// console.log(doctorize('alison')); // throws ReferenceError, "can't access doctorize before initialization"
// console.log(doctorize0('alison')); // works fine

// Uncomment this example for the hoisting demo.
// function doctorize0(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous function -- no good.
// but it won't work in this situation, needs a name
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function expression (aka anonymous function) -- good.
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// Hoisting.
// What is: The difference between the declaration of doctorize0() and that of doctorize()?
// Functions created with "function" keyword (doctorize()) are "hoisted" which means they can be anywhere in the file and you can call it from anywhere in the file.  Variable functions (doctorize()) are not "hoisted" which means you can't call them until after you declare/initialize them.
// Effectively, javascript "hoists" the function up to the top of the script so you can use it anywhere.

// regular function to arrow function...
/* "phase 1"
function inchToCm(inches) {
  // not part of making it an arrow function, just making it more concise
  // const cm = inches * 2.54;
  // return cm;
  return inches * 2.54;
} */
/* "phase 2"
const inchToCm = (inches) => {
  return inches * 2.54;
}; */
/* "phase 3" */
const inchToCm = (inches) => inches * 2.54;

// IIFE
// Immediately Invoked Function Expression
(function() {
  console.log('runing anon function');
  return `You are cool`;
})();
// ^^ honestly, idk, weird, but that's what it is -- with those parens around it, and more parents at the end

// and, if you're passing an argument
(function(age) {
  return `You are cool and age ${age}`;
})(10);
