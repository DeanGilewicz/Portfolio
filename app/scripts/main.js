
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





// resets the carousel slider when move cursor out from overlay and pauses so doesn't auto cycle
$(function() {
  $('.overlay').mouseleave(function() {
    $(this).carousel(0).carousel('pause');
  });
});

// position the slide in below at exact height to replace current content on hover
$(function() {
  $(".wrap").hover(function() {
    $(this).stop().animate({ top:"-60px" },{ queue:false, duration:200 });
  }, function() {
    $(this).stop().animate({ top:"30px" },{ queue:false,duration:200 });
  });
});





// runs animation based on window scroll
$(function(){
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  var $elm;

  $(window).scroll(function(){
    animate_elems();
  });

  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window

    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);

      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next one

        topcoords = $elm.offset().top; // element's distance from top of page in pixels

        if(wintop > (topcoords - (winheight*.75))) {
          // animate when top of the window is 3/4 above the element
          $elm.addClass('animated');
        }
      });
    } // end animate_elems()
  });
