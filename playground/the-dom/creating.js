const myParagraph = document.createElement('p');
// console.log(myParagraph);
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
// no, we can't do all of this at once (we can't create the p element with the class and text content, we have to do it bit by bit)
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// p.s. valid but unnecessary to do const = document.querySelector('body'), "body" is directly available to us on the document
// document.body.appendChild(myParagraph);
document.body.appendChild(myDiv);
// appendChild can be done to any node
myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);

// BETTER YET! Append to myDiv, then add myDiv to the DOM.
// Every time you touch the DOM like this, it does a re-paint, which is a performance hit (or something like that).
/*
myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);
document.body.appendChild(myDiv);
 */

// oh shoot! we need to add something to the top, like a heading!
// obviously, we must be able to put stuff before stuff, not just after stuff...
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

// method: insertAdjacentElement(position, element-to-insert)
// p.s. insertAdjacentElement() first argument, there are four "position" options:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement#parameters
myDiv.insertAdjacentElement('beforebegin', heading);
