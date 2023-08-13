$(document).ready(function () {
    var loader = $("#sectionLoader");

    function fetchData() {

        setTimeout(function () {
            loader.fadeOut()
            window.scrollTo(0, 0);
        }, 3000); // Simulate a 3-second delay
    }
    fetchData();
})