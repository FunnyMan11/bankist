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

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content')

// tabs.forEach(t=>t.addEventListener('click', function(){
//     console.log('hello')
// }))

tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab'); // closest parent 
    console.log(clicked);

    //guard clause 
    if(!clicked) return; 
    clicked.classList.add('operations__tab--active')

    //remove active classes 
    tabs.forEach(t=>t.classList.remove(
        'operations__tab--active'
        ))
        tabsContent.forEach(c=>c.classList.remove("operations__content--active"))
        
    //active tab
    clicked.classList.add('operations__tab--active')

    //activate code area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active')
})