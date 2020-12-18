///// scrollでフェードイン /////
$(window).fadeThis();

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

// // 
// var nav_pos = $('.gnav').offset().top;
// var nav_height = $('.gnav').outerHeight();
// $(window).scroll(function () {
//     if ($(this).scrollTop() > nav_pos) {
//         $('body').css('padding-top', nav_height);
//         $('.gnav').addClass('fixed');
//         $('header').addClass('header_bg');
//     } else {
//         $('body').css('padding-top', 0);
//         $('.gnav').removeClass('fixed');
//         $('header').removeClass('header_bg');
//     }
// });

///// header_bg /////
// $(document).ready(function(){
// 	$(window).scroll(function() {
// 	  if($(this).scrollTop() > 100) { 
// 		$("header").addClass("header_bg"); 
// 	  } else {
// 		$("header").removeClass("header_bg");
// 	  }
// 	});
// });
$(window).scroll(function(){
	var element = $('header'),
		 scroll = $(window).scrollTop(),
		 height = $('.mainvisual').height();
	if ( scroll >= (height - 70)) {
	  element.addClass('header_bg');
	} else {
	  element.removeClass('header_bg');
	}
});

///// like_photo /////
$(function() {
	var current_index = 0 ;
	var img_array = ['.img6', '.img5', '.img4', '.img3', '.img2'];
  $('.btn_next').click(function() {
	$(img_array[current_index]).fadeOut(1000);
	current_index ++ ;
  });
  $('.btn_prev').click(function() {
	  current_index -- ;
	$(img_array[current_index]).fadeIn(1000);
  });
});





// swiper
var mySwiper = new Swiper ('.swiper-container', {
	// ここからオプション
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
});

