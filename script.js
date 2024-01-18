///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// - - - - - - -

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button');

console.log(allButtons)

console.log(document.getElementsByClassName("btn"));

const message = document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML = 'we use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it! </button>';

// if you use either both of them message dissapears only once on the bottom on the page
// header.prepend(message); // first child
header.append(message) // last child 
// header.prepend(message.cloneNode(true)) solution ! 

// header.before(message); // message is before header element 
// header.after(message); // header is after header element

//deleting element
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function(){
    message.remove();
    // message.parentElement.removeChild(message) // second way
})

//styles

message.style.backgroundColor = "#37383d"
message.style.width = "120%";

console.log(message.style.backgroundColor); // logged 
console.log(message.style.color) // not logged inline style

console.log(getComputedStyle(message)) //all styles 
console.log(getComputedStyle(message).color) // color property

document.documentElement.style.setProperty('--color-primary', 'orangered') // all element which have property --color-primary, changed to oranged

// attributes 

const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src) // absolute path
console.log(logo.className)

console.log(logo.getAttribute('src')); // relative path

// same as links 
const link = document.querySelector('.twitter-link')
console.log(link.href); // same 
console.log(link.getAttribute('href')); // same because of they are absolutes 

// but not for buttons, use this 
// console.log(link.getAttribute('href'));


