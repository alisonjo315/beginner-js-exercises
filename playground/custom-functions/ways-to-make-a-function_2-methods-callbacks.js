/* eslint-disable prefer-arrow-callback */
/* eslint-disable prettier/prettier */

// part 2: methods and callbacks

// METHODS!!!

const alison = {
  name: 'Alison M',
  // Method!
  // sayHi: function() {
  //   console.log(this); // equal to "the object it was called against"
  //   console.log(`Hey ${this.name}`);
  //   return 'Hey Alison';
  // }
  // Method - shorthand
  sayHi() {
    console.log(this); // equal to "the object it was called against"
    console.log(`Hey ${this.name}`);
    return 'Hey Alison'; // idk the point of this line I guess
  }
}

// callback functions!
// i.e. when someone clicks something, run this
// or, when an amount of time has passed, run this

// click callback
const button = document.querySelector('.clickMe');
function handleClick() {
  console.log('Great Clicking!!');
}
button.addEventListener('click', handleClick);
button.addEventListener('click', function() {
  console.log('Nice job!');
});
