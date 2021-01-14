const navigation = document.querySelector('.hide-menu');

const openNavigationButtom = document.querySelector('i.fas.fa-bars');
const closeNavigationButtom = document.querySelector('i.fas.fa-times');


openNavigationButtom.addEventListener('click', () => navigation.classList.add('hide-menu-visible'));
closeNavigationButtom.addEventListener('click', () => navigation.classList.remove('hide-menu-visible'));