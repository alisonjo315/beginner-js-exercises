/* eslint-disable prettier/prettier */
/**
 * Example with global variables, ew!
 */
/*
// global variables
const billGlobal = 100;
const taxRateGlobal = 0.13;

function calculateBillGlobal() {
  console.log('Running calculate bill global!');

  // Here, we're "reaching out of the function" to get global variables. Not great!
  const totalFromGlobals = billGlobal * (1 + taxRateGlobal);
  console.log(totalFromGlobals);

  return totalFromGlobals;
}
console.log(calculateBillGlobal());
 */

/*
 * Now that that's over...
 */
function calculateBill(billAmount, taxRate) { // here, we specify PARAMETERS that we can use (as *variables*) inside the function
  console.log('Running calculate bill!');
  console.log(billAmount, taxRate);

  const total = billAmount * (1 + taxRate);
  console.log(total);

  return total;
}

const myTotal = calculateBill(100, 0.13); // here, we pass ARGUMENTS to the function (as *variable values*)
console.log(myTotal);

// also can create variables and pass those to the function (duh)
// ^^ This is called passing arguments by REFERENCE (reference to a variable)
// (whereas in the previous example, "mytotal", we passed arguments DIRECTLY).
// const myTotal2 = calculateBill(billVarICreated, taxVarICreated);

// also can pass expressions -- super simple math example:
//const myTotal2 = calculateBill(20 + 20 + 25 + 18, 0.16);

/* Again! */
/* function sayHiTo0() {
  return `Hello ${firstName0}`; // fail, b/c firstName0 doesn't exist anywhere (in this scope, or in a global variable)
}
const greeting0 = sayHiTo0();
console.log(greeting0); */

/* const firstName1 = 'alison';
function sayHiTo1() {
  return `Hello ${firstName1}`; // no fail -- even though firstName1 doesn't exist in the function scope, it reaches outside the function and finds it
}
const greeting1 = sayHiTo1();
console.log(greeting1); */

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
const greeting = sayHiTo('alison');
console.log(greeting); // Hello alison
console.log(sayHiTo()); // Hello undefined

// pass a "function" argument, so to speak
function doctorize(name) {
  return `Dr. ${name}`;
}
function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}
console.log(doctorize('alison'));
console.log(yell(doctorize('alison')));

// set default values
function calculateBill2(billAmount, taxRate = 0.13, tipRate = 0.25) { // set defaults for taxRate and tipRate
  console.log('Running calculate bill 2!');
  console.log(billAmount, taxRate, tipRate);

  const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate); // my parentheses here are just for readability, IDGAF that you think they're stupid, prettier/prettier

  return total;
}
console.log(calculateBill2(100));
// how to use default taxRate but pass a custom tipRate value?
// console.log(calculateBill2(100, , 0.3)); // omg no
console.log(calculateBill2(100, undefined, 0.3)); // cool
