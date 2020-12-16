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
(function($) {
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
} )(jQuery);

///// more /////
// $(function(){
//     $(window).on('load scroll', function() {
//        var winScroll = $(window).scrollTop();
//        var winHeight = $(window).height();
//        var scrollPos = winScroll + (winHeight * 0.8);
//     });
//  });