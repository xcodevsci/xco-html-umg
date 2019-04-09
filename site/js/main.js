(function ($) {

     "use strict";

    // Convert All Image to SVG
    $('img.svg').each(function() {
         var $img = $(this),
             imgID = $img.attr('id'),
             imgClass = $img.attr('class'),
             imgURL = $img.attr('src');

         $.get(imgURL, function(data) {
             // Get the SVG tag, ignore the rest
             var $svg = $(data).find('svg');

             // Add replaced image's ID to the new SVG
             if (typeof imgID !== 'undefined') {
                 $svg = $svg.attr('id', imgID);
             }
             // Add replaced image's classes to the new SVG
             if (typeof imgClass !== 'undefined') {
                 $svg = $svg.attr('class', imgClass);
             }

             // Remove any invalid XML tags as per http://validator.w3.org
             $svg = $svg.removeAttr('xmlns:a');

             // Replace image with new SVG
             $img.replaceWith($svg);
         }, 'xml');
    });

    // Mean Menu
    $(".mobile_menu").meanmenu({
      meanScreenWidth: "767"     
    });    

  // Show current page
if(location.href.split("/").slice(-1) == ""){
    $(".main_menu>li:first-child>a").addClass('current_page');
}else{
    $('.main_menu>li>a').each(function() {
      if ($(this).attr('href') == location.href.split("/").slice(-1)){ 
        $(this).addClass('current_page'); }
    });    
  }
  
    // Main Slider 
    $('.main_slider_area').owlCarousel({
        items:1,
        loop:true,      
        autoplay:true,
        // autoplayHoverPause:true,
        // autoplaySpeed:2000,
        // smartSpeed:2000,
        dots:true,
        dotsEach:true,
        animateIn: 'slideInLeft',
        animateOut: 'slideOutRight'       
    }); 
    $('.main_slider_area h1, .main_slider_area h5').addClass('fadeInLeft animated');
    $('.main_slider_area h2, .main_slider_area .slider_contact_me').addClass('fadeInRight animated');
    $('.main_slider_area').on('translate.owl.carousel',function(){
      $('.main_slider_area h1, .main_slider_area h5').removeClass('fadeInLeft').addClass('fadeOutLeft animated');
      $('.main_slider_area h2, .main_slider_area .slider_contact_me').removeClass('fadeInRight').addClass('fadeOutRight animated');
    });
    $('.main_slider_area').on('translated.owl.carousel',function(){
      $('.main_slider_area h1, .main_slider_area h5').removeClass('fadeOutLeft').addClass('fadeInLeft animated');
      $('.main_slider_area h2, .main_slider_area .slider_contact_me').removeClass('fadeOutRight').addClass('fadeInRight animated');
    });

    // Categories Slider
    $('.categories_slider').owlCarousel({
        margin: 30,
        items:3,
        nav:true,
        autoplay:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        navText:['<i class="ion-arrow-left-c"></i>','<i class="ion-arrow-right-c"></i>'],
        loop: true,
        responsive:{
            300:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            }
        }
    });

    // Popular categories  
    $(".veno").venobox({
      numeratio: true,
      titleattr: 'data-title',
      spinner:'wandering-cubes'
    });

    // New arrival venobox
    $(".brand_veno").venobox({
      numeratio: true,
      titleattr: 'data-title',
      framewidth:"270px",
      spinner:'wandering-cubes'  
    });

    // Feedback Slider Carousel
    var slider=$('.feedback_slider'),
        slider2=$('.feedback_slider.style1'),
        items=2,
        dots=true;
    if(slider2.length){
      items=1,
      dots=false     
    }
    slider.owlCarousel({
        margin:0,
        items:items,
        loop:true,
        responsive:{
            300:{
                items:1
            },
            768:{
                items:items,
                margin:30
            },
            992:{
              items:items,
              margin:0
            }  
        },
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:3000,        
        smartSpeed:1000,
        dots:dots,
        dotsEach:true
    });

    // News Slider
    $('.news_slider').owlCarousel({
        margin:0,
        items:2,
        loop:true,
        responsive:{
            300:{
                items:1
            },
            480:{
              items:1
            },
            768:{
                items:2,               
            }    
        },
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:2000,
        smartSpeed:1000,
        nav:true,
        navText:['<i class="ion-arrow-left-c"></i>','<i class="ion-arrow-right-c"></i>']          
    });    
    
    // Animate the scroll to top
    $('.scroll').on('click', function(event) {
        $('html, body').animate({scrollTop: 0}, 2000);
    });

    //WOW js
     new WOW().init();

     // Texillate js
     $('.txt_search').textillate({
        loop: true,
        initialDelay:1000
     });
      $(".sup_title").textillate({
        loop:true
      })
     $('.txt_error').textillate({    
      loop: true
     });

     //Google Map
      var googleMapSelector = $('#contactgoogleMap'),
          myCenter = new google.maps.LatLng(40.715721, -74.000017);
      function initialize() {
          var mapProp = {
           center: myCenter,
           zoom: 10,
           scrollwheel: false,
           styles: [],
           mapTypeId: google.maps.MapTypeId.ROADMAP
          };
       var map = new google.maps.Map(document.getElementById("contactgoogleMap"), mapProp);
       var marker = new google.maps.Marker({
           position: myCenter,
           animation: google.maps.Animation,
           icon: 'images/google.png'
        });
        marker.setMap(map); 
        }
        if (googleMapSelector.length) {
          google.maps.event.addDomListener(window, 'load', initialize);
        }
    $(window).on('load',function () {      
       $("#preloader").delay(200).fadeOut("slow");
    });        
})(jQuery);