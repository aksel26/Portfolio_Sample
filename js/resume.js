(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict



$('.row').each(function(){
  $(this).hover(function(){
    $(this).animate({ opacity: "0.5" })
  })
    $(this).click(function(index,value){
      
      
      console.log($(this).index())
      if($(this).index()==0){
        location.href='portfolio1.html'
      }else if($(this).index()==1){
        location.href='portfolio2.html'
      }else if($(this).index()==2){
        location.href='portfolio3.html'
      }
    })
    $(this).mouseleave(function(){
      
        $(this).animate({ opacity: "1" })
    })

 
})



  $("body").css("display", "none");
  $("body").fadeIn(2000);
  $("a.transition").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $("body").fadeOut(1000, redirectPage);
  });
  function redirectPage() {
  window.location = linkLocation;
  }
  
  
  




