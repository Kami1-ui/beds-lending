var $page = $('html, body');

$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});

document.body.onload = function () {
    $('.load').toggleClass('preloader_done');
    $('body').toggleClass('lock');
}


/* Слайдер*/
$(document).ready(function () {

    $('.carusel').slick({
        arrows: true,
        /*  prevArrow: '<button type="button" class="slick-prev"><i class="icon-left"></i></button>',*/
        prevArrow: '<div>  <svg class="slick-prev"><use xlink: href = "img/icons/icons-sprite.svg#arrov-left" ></use></svg ></div>',
        nextArrow: '<div><svg class="slick-next"><use xlink: href = "img/icons/icons-sprite.svg#arrov-right" ></use></svg > </div>',
        //dots: true,
        //adeptiveHight: true, flex-start
        /*   slidesToShow: 6,
          slidesToScroll: 5,
          rows: 3, */
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',

        //easing: 'ease',
        //autoplay: true,
        autoplaySpeed: 2500,

        /*  responsive: [
             {
                 breakpoint: 1218,
                 settings: {
                     slidesToShow: 5,
                     slidesToScroll: 4,
                 }
             },
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 3,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2,
                 }
             },
             {
                 breakpoint: 375,//576,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     // dots: true,
                     arrows: false,
                 }
             },
         ] */
    });
});
