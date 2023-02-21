const fecha = new Date();
var footer = "Copyright © " + fecha.getFullYear() + " Leví Rosales. All Rights Reserved.";
console.log(footer);
document.getElementById("DevuelveTextoFooterConAnio").innerHTML = footer;

//collapse hamburger menu after do click
('.js-scroll-trigger').click(function() {
    ('.navbar-collapse').collapse('hide');
  });

//back-top
/*$document.ready(function(){
  $('.my-class-button').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 1000);
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $('.my-class-button').slideDown(1000)
    }
    else{
      $('.my-class-button').slideUp(1000)
    }
  })
});*/