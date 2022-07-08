// Function definition
function calculateBill() { // open function block
  // function body
  console.log('Running calculate bill!');
  const total = 100 * 1.25;
  console.log(total);

  const total2 = total;
  return total2;
} // close function function block

// Function call (or **Run**)
calculateBill();

// console.log(total); // throws error because SCOPE (total only exists inside function block)
// console.log(total2); // throws error bceause SCOPE (wtf?! -- yep, need to "capture" return value (like, outside the function) as a thing)

const myTotal = calculateBill();
console.log(`Your total is ${myTotal}`);
