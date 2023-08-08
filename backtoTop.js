$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#backToTop').addClass("backToTopShow");
        } else {
            $('#backToTop').removeClass("backToTopShow");
        }
    });
}) 