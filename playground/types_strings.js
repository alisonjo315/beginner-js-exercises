/* eslint-disable */

console.log('it works!');

// strings!
const first = 'alison';
const middle = "jo";
const last = `lastname`;

// tics allow multi-line strings
const song = `Ohhh
la

la

la`;

// const html_string = `
//   <div>
//     <h2>heading goes here</h2>
//     hello world
//   </div>
// `;
// document.body.innerHTML = html_string;

const welcome_message = 'hello my name is ' + first + '. Nice to meet you.';
const welcome_message2 = 'hello my name is ' + first + ". Nice to meet you.";

// remove "//" to enable eslint
// /* eslint-enable */
let welcome3 = 'hello my name is ';
welcome3 = welcome3 + first;
welcome3 = welcome3 + '. Nice to meet you';

// backticks with "interpolation strings"
const another_hello = `Now with fanciness! -- Hello my name is ${first}. Nice to meet you.`;
const hello_with_math = `Hello my name is ${first}. Nice to meet you. I am ${1 + 95} years old.`;

const html_fancier = `
  <div>
    <h2>heading goes here</h2>
    <p>hello world</p>
  </div>
`;
//document.body.innerHTML = html_fancier;
