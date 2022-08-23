(function() {

    'use strict';

    const breakpoint = window.matchMedia( '(min-width: 325px)' );
    let mySwiper;
    const breakpointChecker = function() {

        if ( breakpoint.matches === true ) {
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
            return;

        } else if ( breakpoint.matches === false ) {
            return enableSwiper();
        }
    };

    const enableSwiper = function () {
    mySwiper = new Swiper('.swiper', {
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        mousewheel: {
            sensitivity: 0.5,
            evntsTarget: '.swiper',
        },
        grabCursor:true,
        slidesPerView: 1.3,
        freemode: true,
    });
};
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
})();

let main = document.querySelector('.swiper');
let button = document.querySelector('.readMore');
let icon =document.querySelector('.icon');
button.addEventListener('click', function (){
    main.classList.toggle('showAll');
    button.classList.toggle('showLess');
    if (!button.classList.toggle('showAll')) {
        button.textContent = 'Показать все';
        icon.classList.remove('rotate');
    }else {
        button.textContent = 'Скрыть';
        icon.classList.add('rotate');
    }
});
