$(document).ready(function () {
    var loader = $("#sectionLoader");

    function fetchData() {

        setTimeout(function () {
            loader.fadeOut("fast")
            // window.scrollTo(0, 0);
        }, 2000); // Simulate a 3-second delay
    }
    fetchData();
})