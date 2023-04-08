
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
    $(".owl-carousel2").owlCarousel();
  });
  
  var carousel_height = '';
  var carousel_height2 = '';
  
  if (screen.width < 767) {
    carousel_height += 2;
    carousel_height2 += 1;
  }else if(screen.width < 1023){
    carousel_height += 4;
    carousel_height2 += 2;
  }
  else {
    carousel_height += 6;
    carousel_height2 += 3;
  }
  
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: carousel_height,
    loop: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });
  $('.owl-carousel2').owlCarousel({
    items: carousel_height2,
    loop: true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  })
  $('.owl-nav').hide();$('.owl-dots').hide()
  
  AOS.init();
  
  