const wes = document.querySelector('.wes');

// console.log(wes.children);
// console.log(wes.childNodes);
// blah blah blah
// lots more notes in random-notes.txt => "node vs. element"

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p); // still exists/available to us

document.body.appendChild(p); // ergo, we can add it right back

// Probably will be covered later BUT just in case --
// querySelectorAll() also exists! i.e.
// const things = wes.querySelectorAll('p');
