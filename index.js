$(document).ready(function () {
    var landingPageHeight = $("#landingPage").height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > landingPageHeight) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // Smooth scroll to top when the button is clicked
    $('#backToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100);
    });
});