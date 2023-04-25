$(document).ready(function () {

        $('#menu').click(function () {
                $(this).toggleClass('fa-times');
                $('header').toggleClass('toggle');
        });

        $(window).on('scroll load', function () {

                $('#menu').removeClass('fa-times');
                $('header').removeClass('toggle');

        });

});

//smooth scrolling
$('a[href*="#"]').on('click', function (e) {

        e.preventDefault();
        $('html, body').animate({

                scrollTop: $($(this).attr(' href')).offset().top,

        },
                500,
                'linear'
        );

});

var typed = new Typed(".input", {
        strings:[ "I'm Chidochemoyo Rushwaya.","I am a Digital Makerter.", "and also a UX/UI Designer."],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });

