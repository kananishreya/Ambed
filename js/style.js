
$(document).ready(function () {
    new WOW().init();
    $("#banner").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false
    });
    wow.init();
});


$(document).ready(function () {
    new WOW().init();
    $("#logo").owlCarousel({
        items: 5,
        loop: true,
        nav: false,
        dots: false
    });
    wow.init();
});


(function () {
    "use strict";
  
    var carousels = function () {
      $("#testimonial").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        // dots:false,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();


  $(document).ready(function() {

    var owl = $("#testimonial");

    owl.owlCarousel({

        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0;
        itemsMobile: [360, 1] // itemsMobile disabled - inherit from itemsTablet option

    });

    // Custom Navigation Events
    $(".next").click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })
    $(".play").click(function() {
        owl.trigger('owl.play', 1000);
    })
    $(".stop").click(function() {
        owl.trigger('owl.stop');
    })

});

$(document).ready(function(){
  setTimeout(function(){
      $('.loader').fadeOut();
  },2000);
  var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '500');
});
})

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 150) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// $('#owl-demo1').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })

// $(document).ready(function () {
//   new WOW().init();
//   $("#blog-sil").owlCarousel({
//       items: 1,
//       loop: true,
//       nav: false,
//       dots: false
//   });
//   wow.init();
// });

  