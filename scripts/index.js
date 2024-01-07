$(document).ready(function () {
    $('#feedbackSlider1').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'ease-in',
        fade: true,
        arrows: false,
        dots: true,
        pauseOnHover: true,
        // prevArrow: '<button type="button" class="btn slickBtn me-2" id="prevBtn1"><i class="fa-solid fa-chevron-left"></i></button>',
        // nextArrow: '<button type="button" class="btn slickBtn" id="nextBtn1"><i class="fa-solid fa-chevron-right"></i></button>',
    });

    // $('#prevBtn1').prependTo("#indicatorBtn1");
    // $('#nextBtn1').appendTo("#indicatorBtn1");


    $('#feedbackSlider2').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'ease-in',
        fade: true,
        arrows: false,
        dots: true,
        // prevArrow: '<button type="button" class="btn slickBtn me-2" id="prevBtn2"><i class="fa-solid fa-chevron-left"></i></button>',
        // nextArrow: '<button type="button" class="btn slickBtn" id="nextBtn2"><i class="fa-solid fa-chevron-right"></i></button>',
    });

    // $('#prevBtn2').prependTo("#indicatorBtn2");
    // $('#nextBtn2').appendTo("#indicatorBtn2");
});