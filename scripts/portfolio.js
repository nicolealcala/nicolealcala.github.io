$(document).ready(function () {
    $('#allNav').click(function () {
        if ($(this).hasClass('active')) {
            $('.projectCol').show();
        } else {
            $('li').not(this).removeClass('active');
            $(this).toggleClass('active');
            $('.projectCol').show();
        }
    })

    $('#deployedNav').click(function () {
        if ($(this).hasClass('active')) {
            $('.projectCol').not('.deployed').hide();
            $('.deployed').show();
        } else {
            $('li').not(this).removeClass('active');
            $(this).toggleClass('active');
            $('.projectCol').not('.deployed').hide();
            $('.deployed').show();
        }
    });

    $('#designNav').click(function () {
        if ($(this).hasClass('active')) {
            $('.projectCol').not('.design').hide();
            $('.design').show();
        } else {
            $('li').not(this).removeClass('active');
            $(this).toggleClass('active');
            $('.projectCol').not('.design').hide();
            $('.design').show();
        }
    });
})

// const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
// const modalBody = $("#modalBodyImg");
// const modalHeader = $(".modal-title");
// var imgUrls = [];
// var modalImg = '';

// function openModal(project) {
//     modalImg = '';
//     modalHeader[0].innerHTML = "";
//     modalBody[0].innerHTML = modalImg;
//     loadContents(project);
// }

// function closeModal() {
//     projectModal.hide();
// }

// function loadContents(project) {
//     if (project === 'sws') {
//         imgUrls = [
//             "design/sws/thumbnail.png",
//         ]

//         appendImages(imgUrls, "Strays Worth Saving (SWS) Unofficial Web Design Preview");
//         modalHeader[0].innerHTML = "Strays Worth Saving (SWS) Unofficial Web Design";
//         projectModal.show();
//     } else if (project === "loungescape") {
//         imgUrls = [
//             "design/loungescape/thumbnail.png",
//         ]

//         appendImages(imgUrls, "Loungescape Preview");
//         modalHeader[0].innerHTML = "Loungescape";
//         projectModal.show();
//     } else if (project === "kkis") {
//         imgUrls = [
//             "design/kkis/01.png",
//             "design/kkis/02.png",
//             "design/kkis/03.png",
//             "design/kkis/04.png",
//             "design/kkis/05.png",
//             "design/kkis/06.png",
//             "design/kkis/07.png",
//             "design/kkis/08.png",
//             "design/kkis/09.png",
//             "design/kkis/10.png",
//             "design/kkis/11.png",
//             "design/kkis/12.png",
//             "design/kkis/13.png",
//             "design/kkis/14.png",
//             "design/kkis/15.png"
//         ]

//         appendImages(imgUrls, "KKIS Preview");
//         modalHeader[0].innerHTML = "Katipunan ng Kabataan Information System (KKIS)";
//         projectModal.show();
//     } else if (project === "unblokc") {
//         imgUrls = [
//             "design/unblokc/thumbnail.png",
//         ]

//         appendImages(imgUrls, "UNBLOKC Hackathon Website Preview");
//         modalHeader[0].innerHTML = "UNBLOKC Hackathon Website";
//         projectModal.show();
//     } else if (project === "medeco") {
//         imgUrls = [
//             "design/medeco/thumbnail.png",
//             "design/medeco/01.png",
//             "design/medeco/02.png",
//             "design/medeco/03.png",

//         ]
//         appendImages(imgUrls, "Medeco Preview");
//         modalBody[0].innerHTML = modalImg;
//         modalHeader[0].innerHTML = "Medeco";
//         projectModal.show();
//     } else if (project === "portfolio") {
//         imgUrls = [
//             "design/portfolio/01.png",
//             "design/portfolio/02.png",
//             "design/portfolio/03.png",
//             "design/portfolio/04.png"
//         ]

//         appendImages(imgUrls, "Portfolio Website Preview");
//         modalHeader[0].innerHTML = "Portfolio Website";
//         projectModal.show();
//     } else if (project === "gradInvi") {
//         imgUrls = [
//             "design/gradInvi/thumbnail.png",
//             "design/gradInvi/01.png",
//             "design/gradInvi/02.png",
//         ]

//         appendImages(imgUrls, "Class of 2023 Graduation Invitation Design Concept Preview");
//         modalHeader[0].innerHTML = "Class of 2023 Graduation Invitation Design Concept";
//         projectModal.show();
//     }
// }

// function appendImages(imgSet, imgAlt) {
//     imgSet.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="' + imgAlt + '">');
//     modalBody[0].innerHTML = modalImg;
// }

//Carousel 
const carouselInner = $("#carousel");
var imgSrcs = [];

function openCarousel(project) {
    loadCarouselSlides(project)
}

function loadCarouselSlides(project) {
    if (project === 'sws') {
        imgSrcs = [
            "design/sws/thumbnail.png",
        ]

        createCarouselSlide(imgSrcs, "Strays Worth Saving (SWS) Unofficial Web Design Preview");
    } else if (project === "loungescape") {
        imgSrcs = [
            "design/loungescape/thumbnail.png",
        ]

        createCarouselSlide(imgSrcs, "Loungescape Preview");
    } else if (project === "kkis") {
        imgSrcs = [
            "design/kkis/01.png",
            "design/kkis/02.png",
            "design/kkis/03.png",
            "design/kkis/04.png",
            "design/kkis/05.png",
            "design/kkis/06.png",
            "design/kkis/07.png",
            "design/kkis/08.png",
            "design/kkis/09.png",
            "design/kkis/10.png",
            "design/kkis/11.png",
            "design/kkis/12.png",
            "design/kkis/13.png",
            "design/kkis/14.png",
            "design/kkis/15.png"
        ]

        createCarouselSlide(imgSrcs, "KKIS Preview");
    } else if (project === "unblokc") {
        imgSrcs = [
            "design/unblokc/thumbnail.png",
        ]

        createCarouselSlide(imgSrcs, "UNBLOKC Hackathon Website Preview");
    } else if (project === "medeco") {
        imgSrcs = [
            "design/medeco/thumbnail.png",
            "design/medeco/01.png",
            "design/medeco/02.png",
            "design/medeco/03.png",
        ]

        createCarouselSlide(imgSrcs, "Medeco Preview");
    } else if (project === "portfolio") {
        imgSrcs = [
            "design/portfolio/01.png",
            "design/portfolio/02.png",
            "design/portfolio/03.png",
            "design/portfolio/04.png"
        ]

        createCarouselSlide(imgSrcs, "Portfolio Website Preview");
    } else if (project === "gradInvi") {
        imgSrcs = [
            "design/gradInvi/thumbnail.png",
            "design/gradInvi/01.png",
            "design/gradInvi/02.png",
        ]

        createCarouselSlide(imgSrcs, "Class of 2023 Graduation Invitation Design Concept Preview");
    }
}

function createCarouselSlide(imgSrcs, imgAlt) {
    var counter = 1;

    imgSrcs.forEach((imgSrc) => {
        //Indicator
        var carouselIndicatorRow = $("#carouselIndicatorRow");
        var buttonIndicator = document.createElement("button");
        buttonIndicator.type = 'button';
        buttonIndicator.dataset.bsTarget = '#projectCarousel';
        buttonIndicator.dataset.bsSlideTo = counter - 1;
        buttonIndicator.classList.add('active');
        buttonIndicator.setAttribute('aria-current', 'true');
        buttonIndicator.setAttribute('aria-label', 'Slide ' + counter);

        carouselIndicatorRow.append(buttonIndicator);

        //Slide Div
        var slideDiv = document.createElement("div");
        slideDiv.classList.add("carousel-item");
        if (counter === 1) {
            slideDiv.classList.add("active");
        }

        //Slide Img
        var slideImg = document.createElement("img");
        slideImg.src = imgSrc;
        slideImg.alt = imgAlt;
        slideImg.classList.add("d-block w-100 modalImg");

        slideDiv.appendChild(slideImg);

        $("#carouselInner").append(slideDiv);
        counter++;
        $('#projectCarousel').carousel();
    });
}