(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width: 767px)' );
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
    mySwiper = new Swiper('.swiper-3', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination-3',
        clickable: true,
        /*dynamicBullets: true,*/
      },
      mousewheel: {
        sensitivity: 1.5,
        evntsTarget: '.swiper-3',
      },
      grabCursor:true,
      slidesPerView: 1.3,
      freemode: true,
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();
