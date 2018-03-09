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
        scrollTop: $('.bio').offset().top
    }, 1000);
    $(function () {
     showText("#msg", "About Me!", 0, 275);
});
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

  var showText = function (target, message, index, interval) {

    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }

  }
$("#shrink").on("click", function(){
  $("#go").toggle(1000);
  $("#check").fadeIn(1000)
  $("#resume").fadeIn(1000)
  var jump = $("#check");
  jump.animate({opacity:1});
  jump.animate({height:'+=100px', width:'+=100px', top:'+=100px'},500);
  jump.animate({height:'-=100px', width:'-=100px', left:'-=100px'},500);
  jump.animate({height:'+=100px', width:'+=100px', top:'-=100px'},500);
  jump.animate({height:'-=100px', width:'-=100px', left:'-=100px'},500);
  jump.animate({opacity:0.5})
})
$("#resume").on("click", function(){
  $('html, body').animate({
      scrollTop: $('.new').offset().top
  }, 1000);
  $("#moneyMaker").slideToggle(500);
})

