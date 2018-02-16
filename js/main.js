/**Personal
Author: Derek SCarlett
LIC: GPLv3
*/
$( ".logo" ).hover(function() {
  $( this ).fadeOut( 500 );
  $( this ).fadeIn( 500 );
});
$('.logo').click(() => {
    $('html, body').animate({
        scrollTop: $('.new').offset().top
    }, 1000);
});
$(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.back-top').fadeIn();
      } else {
          $('.back-top').fadeOut();
      }
  });

  // scroll body to 0px on click
  $('.back-top').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 1600);
      return false;
  });
