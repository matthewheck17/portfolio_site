$(window).on("load",function() {
    var fadingIn = false;
    var fadingOut = false;
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
        if (this.id == "education-container"){
          console.log("objbottom: " + objectBottom + " windowbottom: " + windowBottom);
        }

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if (!fadingIn){
            if ($(this).css("opacity")==0) {
              $(this).fadeTo(500,1, function() {
                //Reset the fade-in flag when the animation is over
                fadingIn = false;
              }); 
              fadingIn = true;
            }
          }
        } else { //object goes out of view (scrolling up)
          if (!fadingOut){
            if ($(this).css("opacity")==1) {
              $(this).fadeTo(500,0, function() {
                //Reset the fade-in flag when the animation is over
                fadingOut = false;
              });
              fadingOut = true;
            }
          }
        }

      });
    }).scroll(); //invoke scroll-handler on page-load
  });