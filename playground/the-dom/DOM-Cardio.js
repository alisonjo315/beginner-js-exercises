/* eslint-disable prettier/prettier */

// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const myListItem1 = document.createElement('li');
const myListItem2 = document.createElement('li');
const myListItem3 = document.createElement('li');

myListItem1.textContent = 'one';
myListItem2.textContent = 'two';
myListItem3.textContent = 'three';

myList.append(myListItem1, myListItem2, myListItem3); // not sure if this is "bad" and I should do appendChild three times; we'll see what he shows in the solution

myDiv.appendChild(myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

myImg.src = 'https://picsum.photos/500';
myImg.width = 250;
myImg.classList.add('cute');
myImg.alt = 'Cute Puppy';

myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myStringDiv = document.createElement('div');
const myStringDivHTML = `
<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Hanc quoque iucunditatem, si vis, transfer in animum.</p>
</div>
`;
myStringDiv.innerHTML = myStringDivHTML;

// I guess I don't have anything I can do with this "listSpot" idea -- YET!... I'm sure there's a way...
// aaaaaa insertAdjacentElement ... (see end of creating.js)
// const listSpot = myDiv.querySelector('ul');
// listSpot.insertAdjacentElement('beforebegin', myStringDiv);

myDiv.prepend(myStringDiv);

// add a class to the second paragraph called warning

// I may have forgotten I was supposed to add the class to the second paragraph, not the first...
// const p1 = myStringDiv.querySelector('p'); // gets the first matching item then stops
// p1.classList.add('warning');

const p2 = myStringDiv.firstElementChild.lastElementChild;
p2.classList.add('warning');
// or
// myStringDiv.firstElementChild.children[1].classList.add('warning');

// remove the first paragraph
myStringDiv.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const dogAge = age * 7;
  const cardHTML = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${dogAge}. That would be a tall dog!</p>
    </div>
  `;
  // or, for the dog years part, do it on-the-fly:
  // this person would be ${age * 7}. That would be
  return cardHTML;
}

// make a new div with a class of cards
const cardWrapper = document.createElement('div');
cardWrapper.classList.add('cards');

// make 4 player cards using generatePlayerCard
const card1 = document.createElement('div');
const card2 = document.createElement('div');
const card3 = document.createElement('div');
const card4 = document.createElement('div');

card1.innerHTML = generatePlayerCard('Alison', 40, '5ft 9in');
card2.innerHTML = generatePlayerCard('Darcy', 1.5, '22 inches');
card3.innerHTML = generatePlayerCard('Tim', 41, '6ft');
card4.innerHTML = generatePlayerCard('Olivia', 2, '28 inches');

// append those cards to the div
cardWrapper.append(card1, card2, card3, card4);

// or, create one "cardsHTML" variable with "let" and modify it over and over
// let cardsHTML = '';
// cardsHTML += generatePlayerCard('Jane', 40, '5ft 9in');
// cardsHTML += generatePlayerCard('Darcy', 1.5, '22 inches');
// cardsHTML += generatePlayerCard('John', 41, '6ft');
// cardsHTML += generatePlayerCard('Olivia', 2, '28 inches');
// cardWrapper.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
myDiv.appendChild(cardWrapper);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// (I'm just doing it for one card; to do for all cards, modify the variable names to not be specific to card4, then put this code inside generatePlayerCard() .)
const deleteC4 = document.createElement('button');
deleteC4.innerHTML = 'delete card';
deleteC4.addEventListener('click', function() {
  this.parentElement.remove();
});
card4.append(deleteC4);

// "OR" (for the bonus delete fun) ...

// const buttons = document.querySelectorAll('.delete');
// function deleteCard(event) {
//   const buttonThatGotClicked = event.currentTarget;
//   // buttonThatGotClicked.parentElement.remove();
//   // or use closest() which looks "up" until it finds a matching element; in this case, imagine the button was inside the <p> inside div.playerCard, in that case, parentElement.remove() would remove the <p> not the card. With closest('.playerCard') it will look "up" and select the first match it finds.
//   buttonThatGotClicked.closest('.playerCard').remove();
// }
// loop over them and attach a listener
// buttons.forEach(button => button.addEventListener('click', deleteCard));
