$(function() {
  $(window).scroll(function(ev) {
    $navbar = $('.navbar');
    if(ev.currentTarget.scrollY>=270) {
      $navbar.addClass('abajo');
    }else {
      $navbar.removeClass('abajo');
    }
  }); 
});


  
