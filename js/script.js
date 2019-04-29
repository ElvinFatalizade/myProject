$(document).ready(function(){
    $('.carousel').carousel({
        interval: 3000
      })
      $('.sliders').owlCarousel({
        loop:true,
        dosts:false,
        autoplay:false,
        margin:10,
        freeDrag:false,
        
       autoplay:false,
        mouseDrag:true,
      
       
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:3,
                nav:true,
            },
            1000:{
                items:5,
                nav:false,
                loop:false
            }
        }
    })
});
