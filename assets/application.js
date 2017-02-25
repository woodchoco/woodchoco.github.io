// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


<script>
     function goToByScroll(id){
          // Reove "link" from the ID

        id = id.replace("link", "");
          // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
            'slow');
    }

    $("#nav_content > a").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 

          // Call the scroll function
        goToByScroll($(this).attr("id"));         

    });
    

    $(".nav_item > a").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 

          // Call the scroll function
        goToByScroll($(this).attr("id"));         
    });
  
  
$(document).ready(function(){       
   var scroll_start = 0;
   $("#logo_img").hide();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > 10) {
          $('#logo_img').fadeIn();
          
          $('#navbar').addClass('scrolltop');
          $('#navbar').removeClass('scrolldown');
          $('#menu_phone').addClass('phone_nav');
          
       } else {
          $('#logo_img').fadeOut();
          $('#navbar').removeClass('scrolltop');
          $('#navbar').addClass('scrolldown');
          $('#menu_phone').removeClass('phone_nav');
       }
   });
