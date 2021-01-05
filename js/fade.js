$(window).on("load",function() {
  var completed = false;
  var about = false;
  var experience = false;
  var education = false;
  var projects = false;
  var contact = false;
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      if (completed) {
        return;
      }

      if (this.id == "about-fade" && about){
        return;
      }
  
      if (this.id == "experience-fade" && experience){
        return;
      }
  
      if (this.id == "education-fade" && education){
        return;
      }
  
      if (this.id == "projects-fade" && projects){
        return;
      }
  
      if (this.id == "contact-fade" && contact){
        return;
      }
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()/2;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        $(this).fadeTo(700,1, function() {
          if (this.id == "about-fade"){
            about = true;
          }
          if (this.id == "experience-fade"){
            experience = true;
          }
          if (this.id == "education-fade"){
            education = true;
          }
          if (this.id == "projects-fade"){
            projects = true;
          }
          if (this.id == "contact-fade"){
            contact = true;
          }
        });
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});