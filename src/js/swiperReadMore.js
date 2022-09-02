let swiperReadMoreButton = document.querySelector('.swiper-readMore');
let swiperReadMoreIcon = document.querySelector('.swiper-readMore__label');
let swiperInfo = document.querySelector('.swiper');

swiperReadMoreButton.addEventListener('click',function(){
  if(swiperReadMoreButton.textContent === 'Показать все'){
    swiperReadMoreButton.textContent = 'Скрыть';
    swiperReadMoreIcon.classList.add('readMoreRotate');
    swiperInfo.classList.add('swiper__ShowMore');
  }else{
    swiperReadMoreButton.textContent = 'Показать все';
    swiperReadMoreIcon.classList.remove('readMoreRotate');
    swiperInfo.classList.remove('swiper__ShowMore');
  }
})
