//burger-button

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');
let overlay = document.querySelector('.overlay');

function removeActiveClasses() {
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
  overlay.classList.remove('overlay--active');
  burger.setAttribute('aria-expanded', false);
  burger.setAttribute("aria-label", "Открыть меню");
}


burger.addEventListener('click',
    function () {

        burger.classList.toggle('burger--active');
        menu.classList.toggle('header__nav--active');
        document.body.classList.toggle('stop-scroll');
        overlay.classList.toggle('overlay--active');
        if (burger.getAttribute("aria-expanded") === "true") {
          burger.setAttribute("aria-expanded", false);
          burger.setAttribute("aria-label", "Открыть меню");
        } else {
          burger.setAttribute("aria-expanded", true);
          burger.setAttribute("aria-label", "Закрыть меню");
        }
});


menuLinks.forEach(function (el) {
    el.addEventListener('click', removeActiveClasses);
});

overlay.addEventListener('click', removeActiveClasses);


const menufocusTrap = document.querySelector(".menu-focus-trap");
menufocusTrap.addEventListener("keydown", handleKey1);

function handleKey1(e) {
  //если элемент бургер содержит класс бургер-актив "И" была нажата кнопка таб
  if (burger.classList.contains('burger--active') && e.keyCode === 9 ) {
    let focusable = document
      .querySelector(".menu-focus-trap")
      .querySelectorAll("button, a");
    if (focusable.length) {
      let first = focusable[0];
      let last = focusable[focusable.length - 1];
      let shift = e.shiftKey;
      if (shift) {
        if (e.target === first) {
          // shift-tab pressed on first input in dialog
          last.focus();
  e.preventDefault();
        }
      } else {
        if (e.target === last) {
          // tab pressed on last input in dialog
          first.focus();
          e.preventDefault();
        }
      }
    }
  }
};


// search-button

document.addEventListener('DOMContentLoaded' , (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form--active');
    document.querySelector(".search-form__input").focus()
  });

  document.getElementById('btn-closed').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form--active');
    document.querySelector(".search").focus()
  });

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
});
});

const focusTrap = document.querySelector(".focus-trap");
focusTrap.addEventListener("keydown", handleKey);

function handleKey(e) {
  if (e.keyCode === 9) {
    let focusable = document
      .querySelector(".focus-trap")
      .querySelectorAll("input,button,select,textarea");
    if (focusable.length) {
      let first = focusable[0];
      let last = focusable[focusable.length - 1];
      let shift = e.shiftKey;
      if (shift) {
        if (e.target === first) {
          // shift-tab pressed on first input in dialog
          last.focus();
  e.preventDefault();
        }
      } else {
        if (e.target === last) {
          // tab pressed on last input in dialog
          first.focus();
          e.preventDefault();
        }
      }
    }
  }
};


//swiper

let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  a11y: {
    paginationBulletMessage: 'Переход к слайду {{index}}',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


//tabs

let tabsLink = document.querySelectorAll('.tabs__link');
let tabsItem = document.querySelectorAll('.tabs__content');

tabsLink.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function(btn){btn.classList.remove('tabs__link_active')});
    e.currentTarget.classList.add('tabs__link_active');

    tabsItem.forEach(function(element){element.classList.remove('tabs__content_active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content_active');
  });
});


//accordion

new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__content',
  activeClass: 'accordion__item--active'
});







