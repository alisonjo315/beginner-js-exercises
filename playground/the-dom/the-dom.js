/* eslint-disable no-self-compare */
/* eslint-disable no-constant-condition */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');

// console.log([1,2,3]);
// console.dir([1,2,3]);
// console.log(p);
// console.dir(p);

// I don'tremember why I put this here, oh well.
if (1 === 1) {
  // do stuff
}

/////// The DOM: Element properties and methods

// P.S. these are pretty similar, and the differences may never matter for my purposes; if they end up mattering, look at MDN documentation, otherwise, use whatever is being used in whatever program I'm working on.
// console.log(heading.textContent);
// console.log(heading.innerText);

/* const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
pizzaList.insertAdjacentText('afterbegin', '🍕');
console.log(pizzaList.textContent);
pizzaList.insertAdjacentText('beforeend', '🍕');
console.log(pizzaList.textContent); */

/////// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
// toggle() adds if it's not there, removes if it is there
// pic.classList.toggle('round');

// classList gets us some utility functions, i.e. classList.contains('round')
// console.log(pic.classList);
// className tells us the classes on the thing
// console.log(pic.className); // returns "nice open"

function toggleRound() {
  pic.classList.toggle('round');
  console.log(pic.className); // returns "nice open round" (then "nice open") (then "nice open round") (then "nice open round"...)
}
// when we click on the image known as "pic", it will toggle the class "round" on that image.
pic.addEventListener('click', toggleRound);

/////// Built-in attributes
pic.alt = 'Cute Pup'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter
pic.width = 200;

// eslint-disable-next-line prefer-arrow-callback
// wait for entire window and stuff to load before checking naturalWidth
// window.addEventListener('load', function() {
// wait for "pic" to load before checking naturalWidth
/* pic.addEventListener('load', function() {
  console.log(pic.naturalWidth); // getter
}); */

/////// Custom attributes (!!)
const custom = document.querySelector('.custom');
// dataset object contains the custom data-* attributes, i.e. value of data-name and data-last attributes on img.custom
// console.log(custom.dataset);
