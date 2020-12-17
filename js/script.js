// (function($) {
// //   var $navArea = $('#navArea');
//   var $gnav = $('.gnav');
//   var $btn   = $('.toggle_btn');
//   var $mask  = $('.gnav_mask');
//   var open   = 'open'; // class
//   // menu open close
//   $btn.on( 'click', function() {
//     if ( ! $gnav.hasClass( open ) ) {
//         $gnav.addClass( open );
//         $btn.addClass( open );
//         $mask.addClass( open );
//     } else {
//         $gnav.removeClass( open );
//         $btn.removeClass( open );
//         $mask.removeClass( open );
//     }
//   });
//   // mask close
//   $mask.on('click', function() {
//     $nav.removeClass( open );
//   });
// } )(jQuery);


///// hamberger /////
$(function(){
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('.gnav_mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
});

var nav_pos = $('.gnav').offset().top;
var nav_height = $('.gnav').outerHeight();
$(window).scroll(function () {
    if ($(this).scrollTop() > nav_pos) {
        $('body').css('padding-top', nav_height);
        $('.gnav').addClass('fixed');
        $('header').addClass('header_bg');
    } else {
        $('body').css('padding-top', 0);
        $('.gnav').removeClass('fixed');
        $('header').removeClass('header_bg');
    }
});

// $(function(){
//   var $like_btn_next = $('.btn_next');
//   var $like_btn_prev = $('.btn_prev');
//   $like_btn_next.on('click',function(){
//     if()
//   })  
// })



// swiper

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	spaceBetween: 0,
	// initialSlide: 2,
	loop: true,
	slidesPerView: 4,
	breakpoints: {
		// 768px以上の場合
		768: {
		slidesPerView: 1,
		},
		// 980px以上の場合
		980: {
		slidesPerView: 2,
		},
		// 1200px以上の場合
		1200: {
		slidesPerView: 3,
		}
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
  });
