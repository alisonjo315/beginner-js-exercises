/* eslint-disable spaced-comment */
/////// Security warning!
// Example of how XSS hack could happen if you don't sanitize input before barfing it on the page. Sanitization isn't covered in this segment of the course, this is just a heads-up.

const item = document.querySelector('.item');

/* item.innerHTML = `
  <div>
  <h1>Hey, how are ya</h1>
  </div>
`
console.log(item.innerHTML); */

const width = 200;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
<div class="wrapper">
<h2>${desc}</h2>
<img src="${src}" />
</div>
`;
item.innerHTML = myHTML;

// ^^ Cool! -- also...
// These things are not "elements," they're just strings. For example:
console.log(typeof myHTML);
// And, this will not work:
// myHTML.classList.add('special');
// And, this will say "what...?" or, more accurately, "undefined" --
console.log(myHTML.classList);

// In order to do things to ^^ this kind of stuff, first we have to dump it into the DOM, then we have to pull it back out.  So, we already added it to the DOM, like this:
// item.innerHTML = myHTML;
// Now we can access the elements, and do stuff -- like this:
const itemImage = document.querySelector('.wrapper img');
// console.log(itemImage);
itemImage.classList.add('round');

// turn a string into a DOM element
// TL;DR: Create a document-fragment from a string (i.e. an HTML string).
const myHTML2 = `
<div class="wrapper">
<h2>${desc}</h2>
<img src="${src}" />
</div>
`;

// document.createRange() -- a range is just, a collection of, stuff
// then, on that, createContextualFragment(string) -- pass a string (myHTML2)
const myFragment = document.createRange().createContextualFragment(myHTML2);
// myFragment is a "document-fragment" -- actual DOM elements (even though they aren't on the page)
// i.e. myHTML2 is just a string, myFragment contains actual DOM elements
console.log(myFragment); // output is best in Chrome
document.body.appendChild(myFragment);

// Security vulnerability example: If you don't sanitize the HTML you add to your DOM, you can get HACKED 😱
// i.e. if end users can enter a description for their profile, let's say...
/*
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="profile wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;
*/
