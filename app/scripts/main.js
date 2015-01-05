
// sets an array to be looped through continuously
// $(function () {
//   var $header = $("#header");
//   var header = ['Front End Developer', 'Keen Traveler', 'Soccer Enthusiast'];
//   var position = -1;
//
//   (function loop() {
//     position = (position + 1) % header.length;
//     $header.html(header[position])
//       .fadeIn(1000)
//       .delay(2000)
//       .fadeOut(1000, loop);
//   })();
// });



// $('.male').on('click', function () {
//   $('.social').toggleClass('toggle-show');
// });

// position the slide in below at exact height to replace current content on hover
$(function() {
  $(".wrap").hover(function() {
    $(this).stop().animate({ top:"-33px" },{ queue:false, duration:200 });
  }, function() {
    $(this).stop().animate({ top:"0px" },{ queue:false,duration:200 });
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
