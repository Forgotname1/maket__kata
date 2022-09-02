let buttonCall = document.querySelector('.btn-call');
let buttonCallMenu = document.querySelector('.menu__btn-call')
let buttonCloseCall = document.querySelector('.call-btn__close')
let mainCall = document.querySelector('.modal-call');
let blurCall = document.querySelector('.call-blur');

buttonCall.addEventListener('click', function(){
  mainCall.classList.add('modal-call--active');
  blurCall.classList.add('call-blur--active')
})
buttonCloseCall.addEventListener('click', function(){
  mainCall.classList.remove('modal-call--active');
  blurCall.classList.remove('call-blur--active')
})
buttonCallMenu.addEventListener('click', function(){
  mainCall.classList.add('modal-call--active');
  blurCall.classList.add('call-blur--active')
})
blurCall.addEventListener('click', function(){
  mainCall.classList.remove('modal-call--active');
  blurCall.classList.remove('call-blur--active')
})
