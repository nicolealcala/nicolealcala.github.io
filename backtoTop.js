$(document).ready(function () {

    // Smooth scroll to top when the button is clicked
    $('#backToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').addClass("backToTopShow");
        } else {
            $('#backToTop').removeClass("backToTopShow");
        }
    });
}) 