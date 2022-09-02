let buttonBurger = document.querySelector(".btn-burger");
let mainMenu = document.querySelector('.main-menu');
let buttonClose = document.querySelector('.btn-close')
let mainMenuBlur = document.querySelector('.main-menu__blur')
buttonBurger.addEventListener('click', function(){
  mainMenu.classList.add('main-menu--active');
  mainMenuBlur.classList.add('main-menu__blur--active');
})
buttonClose.addEventListener('click', function(){
  mainMenu.classList.remove('main-menu--active');
  mainMenuBlur.classList.remove('main-menu__blur--active');
})
mainMenuBlur.addEventListener('click', function(){
  mainMenu.classList.remove('main-menu--active');
  mainMenuBlur.classList.remove('main-menu__blur--active');
})
