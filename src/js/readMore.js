let readMoreButton = document.querySelector('.readMore');
let readMoreIcon =document.querySelector(".readMore__label");
let textInfo =document.querySelector('.main-content__info');

readMoreButton.addEventListener('click', function(){
 debugger
  if(readMoreButton.textContent === 'Читать далее'){
    readMoreButton.textContent = "Скрыть";
    readMoreIcon.classList.add('readMoreRotate');
    textInfo.classList.add('main-content__info__showMore')
  }else{
    readMoreButton.textContent = "Читать далее";
    readMoreIcon.classList.remove('readMoreRotate');
    textInfo.classList.remove('main-content__info__showMore')

  }
})
