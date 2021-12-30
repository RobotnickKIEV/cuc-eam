const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu-list');

burger.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
})

const lang = document.querySelector('.header__lang');
const otherLang = document.querySelector('.other-lang');

lang.addEventListener('click', () => {
    otherLang.classList.toggle('active');
})