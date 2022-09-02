let swiper2ReadMoreButton = document.querySelector('.swiper-2__readMore');
let swiper2ReadMoreIcon = document.querySelector('.swiper-2__readMore__label');
let swiper2Info = document.querySelector('.swiper-2');


swiper2ReadMoreButton.addEventListener('click',function(){
  if(swiper2ReadMoreButton.textContent === 'Показать все') {
    swiper2ReadMoreButton.textContent = 'Скрыть';
    swiper2ReadMoreIcon.classList.add('readMoreRotate');
    swiper2Info.classList.add('swiper-2__showMore');
  } else{
    swiper2ReadMoreButton.textContent = 'Показать все';
    swiper2ReadMoreIcon.classList.remove('readMoreRotate');
    swiper2Info.classList.remove('swiper-2__showMore')
  }
})
