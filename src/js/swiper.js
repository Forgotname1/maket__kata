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
    mySwiper = new Swiper('.swiper', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        /*dynamicBullets: true,*/
      },
      mousewheel: {
        sensitivity: 1.5,
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
