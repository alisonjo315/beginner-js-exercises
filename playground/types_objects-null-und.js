/* eslint-disable */

// object!
const person = {
  first: 'alison',
  middle: 'jo',
  age: 95
};

// nothing! -- specifically...
// null and undefined
let dog;
console.log(dog); // undefined (a variable that hasn't had a value set to it)
dog = 'Poz';

// const somethingUndefined; // actually throws syntax error b/c have to set a value when you declare a const variable; see random-notes for slightly more detail
let somethingUndefined;
const somethingNull = null;

// "real life example" ha ha
const cher = {
  first: 'cher',
};

const teller = { // i.e. penn and teller, apparently
  first: 'Raymond',
  last: 'Teller',
};
teller.first = 'Teller';
teller.last = null; // apparently he legally changed his name to make his first name "Teller" and no last name at all.

// console.log(cher.first);
// outputs "cher"
// console.log(cher.last);
// outputs undefined
