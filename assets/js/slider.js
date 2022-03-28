$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider',
        centerMode: true,
        focusOnSelect: true
    });
})