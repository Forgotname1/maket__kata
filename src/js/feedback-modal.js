let buttonFeedBack = document.querySelector('.btn-chat');
let buttonFeedBackMenu = document.querySelector('.menu__btn-chat')
let buttonCloseFeedBack = document.querySelector('.feedback__btn-close')
let mainFeedBack = document.querySelector('.modal-feedback');
let blurFeedBack = document.querySelector('.feedback-blur');

buttonFeedBack.addEventListener('click', function(){
  mainFeedBack.classList.add('modal-feedback--active');
  blurFeedBack.classList.add('feedback-blur--active')
})
buttonCloseFeedBack.addEventListener('click', function(){
  mainFeedBack.classList.remove('modal-feedback--active');
  blurFeedBack.classList.remove('feedback-blur--active')
})
buttonFeedBackMenu.addEventListener('click', function(){
  mainFeedBack.classList.add('modal-feedback--active');
  blurFeedBack.classList.add('feedback-blur--active')
})
blurFeedBack.addEventListener('click', function(){
  mainFeedBack.classList.remove('modal-feedback--active');
  blurFeedBack.classList.remove('feedback-blur--active')
})
