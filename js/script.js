$(document).ready(function () {

    $(window).scroll(function () {
        if ($("html").scrollTop() >= 70) {
            $("#eduGlobal").addClass("fixed-top").css("background-color", "white");
        } else {
            $("#eduGlobal").removeClass("fixed-top");
        }
    });

    $("#eduGlobal .nav-item").hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
    });

    $('#icon').click(function () {
        $('#getOff').hide();

    });
    $('.carousel').carousel({
        interval: 5000
    })
    $('.sliders').owlCarousel({
        loop: true,
        dosts: false,
        autoplay: false,
        margin: 10,
        freeDrag: false,

        autoplay: false,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 5,
                nav: false,
                loop: false
            }
        }
    })
    // Ours Gallery
    $('.portfolio-item').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li').click(function () {
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });
    //   End Ours Gallery


    var cardImg = $("#our-teachers .card-img-top")
    var links = $("#our-teachers .card-img-top .social")
    for (let i = 0; i < cardImg.length; i++) {
        $(cardImg[i]).mouseover(function () {
            $(links[i]).stop();
            $(links[i]).animate({ top: "120px" });
        })

        $(cardImg[i]).mouseout(function () {
            $(links[i]).stop();
            $(links[i]).animate({ top: "255px" });
        })

    }
    $("#student-say .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 2,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }

    })
    $('#client .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    var cardImg = $("#teachers .card-img-top")
    var links = $("#teachers .card-img-top .social")
    for (let i = 0; i < cardImg.length; i++) {
        $(cardImg[i]).mouseover(function () {
            $(links[i]).stop();
            $(links[i]).animate({ top: "120px" });
        })

        $(cardImg[i]).mouseout(function () {
            $(links[i]).stop();
            $(links[i]).animate({ top: "255px" });
        })

    }
   
});
