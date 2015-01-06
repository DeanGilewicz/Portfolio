
// sets an array to be looped through continuously
// set to allow for change of name and font color
// $(function () {
//   var $header = $("#header");
//   var header = ['Front End Developer', 'Keen Traveler', 'Front End Developer', 'Soccer Enthusiast'];
//   var color = ['red', 'blue', 'green', 'white'];
//   var position = -1;
//
//   (function loop() {
//     position = (position + 1) % header.length;
//     // $header.css('color', color)
//     //   .fadeIn(1000)
//     //   .delay(2000)
//     //   .fadeOut(1000);
//     $header.html(header[position]).css('color', color[position])
//       .fadeIn(1000)
//       .delay(2000)
//       .fadeOut(1000, loop);
//   })();
// });

// Performs a smooth page scroll to anchor on same page
// Set up for all a href links
$(function() {
  $('a[href*=#]:not([href=#top])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
  });
});


// $('.male').on('click', function () {
//   $('.social').toggleClass('toggle-show');
// });

// position the slide in below at exact height to replace current content on hover
$(function() {
  $(".wrap").hover(function() {
    $(this).stop().animate({ top:"-60px" },{ queue:false, duration:200 });
  }, function() {
    $(this).stop().animate({ top:"30px" },{ queue:false,duration:200 });
  });
});

// resets the carousel slider when move cursor out from overlay and pauses so doesn't auto cycle
$(function() {
  $('.overlay').mouseleave(function() {
    $(this).carousel(0).carousel('pause');
  });
});
//scrolls to targeted id
// $('body').scrollspy({ target: '.navbar-fixed-top' });
//
// //waypoint for animation
// $('.cd-color-2').waypoint(function(direction) {
//   $('.img-skill').removeClass('imgnone');
//   $('.imgleft').addClass('animated bounceInLeft');
//   $('.imgcenter').addClass('animated bounceIn');
//   $('.imgright').addClass('animated bounceInRight');
// }, {
//   offset: '50%'
// });
