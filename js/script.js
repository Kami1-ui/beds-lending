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
        prevArrow: '<div>  <svg class="slick-prev"><use xlink: href = "img/icons/icons-sprite.svg#arrov-left" ></use></svg ></div>',
        nextArrow: '<div><svg class="slick-next"><use xlink: href = "img/icons/icons-sprite.svg#arrov-right" ></use></svg > </div>',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        //autoplay: true,
        autoplaySpeed: 2500,

    });
});

/*Форма*/
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');

            let response = await fetch('/mail.php', {
                method: 'POST',
                body: formData
            });

            console.log(response);
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending')
            } else {
                alert('Ошибка');
                form.classList.remove('_sending')
            }

        } else {
            alert('Заполните обязательные поля ' + error)
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddrror(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddrror(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddrror(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }
});
