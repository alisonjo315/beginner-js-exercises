/* eslint-disable prettier/prettier */

// Function definition
function calculateBill() { // open function block
                           // aka "scope start"
  // function body
  console.log('Running calculate bill!');
  const total = 100 * 1.27;
  console.log(total);

  const total2 = total;
  return total2;
} // close function function block
  // aka "scope end"

// Function call (or **Run**)
calculateBill();

// console.log(total); // throws error because SCOPE (total only exists inside function block)
// console.log(total2); // throws error bceause SCOPE (wtf?! -- yep, need to "capture" return value (like, outside the function) as a thing)

// P.S. "garbage collection" is the variables that only exist inside a function getting cleaned-up

const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);
console.log(`(once more) Your total is $${calculateBill()}`);
