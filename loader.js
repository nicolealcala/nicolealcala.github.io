$(document).ready(function () {
    var loader = $("#sectionLoader");

    function fetchData() {
        loader.css('display', 'block');

        setTimeout(function () {
            loader.css('display', 'none');
            // Display fetched data or perform other actions
        }, 3000); // Simulate a 3-second delay
    }

    // Call the fetchData function when the page loads
    fetchData();
})