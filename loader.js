$(document).ready(function () {
    var loader = $("#sectionLoader");

    function fetchData() {
        loader.css('display', 'block');

        setTimeout(function () {
            loader.css('display', 'none');
            window.scrollTo(0, 0);
        }, 3000); // Simulate a 3-second delay
    }
    fetchData();
})