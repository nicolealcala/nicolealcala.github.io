$(document).ready(function () {
    $("#menuBtn, #check-icon").click(function () {
        // Toggle visibility of sections
        $("section").toggleClass('d-none');

        // Toggle visibility of .navbar-brand
        $(".navbar-brand").toggleClass('d-none');
        $("#menuBtn").toggleClass('white, darkTxt');
        $(".bar").toggleClass('whiteBg, darkBg');
    });

});