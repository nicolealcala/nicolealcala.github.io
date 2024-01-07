$(document).ready(function () {
    $("#menuBtn").click(function () {
        // Toggle visibility of sections
        $("section").toggleClass('d-none');

        $("#check-icon").prop("checked", !$("#check-icon").prop("checked"));
        // Toggle visibility of .navbar-brand
        $(".navbar-brand").toggleClass('d-none');
        $("#menuBtn").toggleClass('white, darkTxt');
        $(".bar").toggleClass('whiteBg, darkBg');
    });

    AOS.init();


});