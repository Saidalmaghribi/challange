$(document).ready(function(){

 $('.carousel').carousel({

  autoplay:false,
  wrap:false

 });
  

/*resizing*/
$(window).resize(function(){

  console.log($(this));
});

/*$(".navbar-default .navbar-toggle").click(function(){

 $(".header .navbar-nav").toggleTo();
  

})
*/

$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});

$("html, body").niceScroll();
  

});