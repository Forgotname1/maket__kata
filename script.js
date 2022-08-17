const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    grabCursor:true,
    slidesPerView: 1.3,
    spaceBetween:5,
   /* spaceBetween: 5,
    freeMode:true*/
});
let readMore = document.querySelector('.readMore');
let readLess = document.querySelector('.readLess');
let mainBlock = document.querySelector('.main');

readMore.addEventListener('click', function (){
    mainBlock.classList.add('showAll');
    readMore.classList.add('none');
    readLess.classList.remove('none');
})
readLess.addEventListener('click', function (){
    mainBlock.classList.remove('showAll');
    readMore.classList.remove('none');
    readLess.classList.add('none');
})
/*
function readMore(){
    let more = document.getElementById('readMore');
    let btn = document.getElementById('btn');

    if(more.style.display === 'none'){
        btn.innerHTML = 'скрыть';
        more.style.display = 'flex';
    }else {
        btn.innerHTML = 'показать все';
        more.style.display = 'none';

    }

}


*/

/*let btnReadMore = document.querySelector('.btn-readmore');
let secondBlock = document.querySelector('.second-row-blocks');
let hiddenBlocks = secondBlock.querySelectorAll('.hidden');



btnReadMore.addEventListener('click', function (evt){
    evt.preventDefault();
    if(hiddenBlocks.style.display === 'none'){
        hiddenBlocks.style.display = 'block';
        btnReadMore.innerHTML = '12345'
    }
})
*/

/*let btnReadMore = document.querySelector(".btn-readmore");
let hiddenBlocks = document.querySelectorAll(".hidden");
let allBlocks = document.querySelector(".main").children;

btnReadMore.addEventListener('click', function (evt)
{
    evt.preventDefault();
    let itemsCount2Hide = window.screenX > 320 && window.screenX < 1120 ? 5 : 3;

    if (hiddenBlocks.length)
    {
        for (const element of hiddenBlocks)
        {
            element.classList.remove("hidden");
        }
        btnReadMore.textContent='Скрыть';
    }
    else
    {
        for (let index = allBlocks.length; index > allBlocks.length-itemsCount2Hide; index--)
        {
            allBlocks[index].classList.add("hidden");
        }
        btnReadMore.textContent='Показать';
    }
});
*/
