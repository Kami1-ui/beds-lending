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


