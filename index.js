$(document).ready(function () {
    var loader = $("#sectionLoader");
    $(window).on("load", function () {
        loader.hide(); // Hide the loader when the page has finished loading
    });

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