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

    // Slick Slider
    $("#mockupSlider").slick({
        slidesToShow: 1,
        infinite: false,
        dots: true,
        centerMode: true,
        centerPadding: "auto",
        arrows: true,
        prevArrow: '<button type="button" class="btn rounded-pill slickBtn" id="prevBtn"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="btn rounded-pill slickBtn" id="nextBtn"><i class="fa-solid fa-chevron-right"></i></button>',
    })

    $('#prevBtn').prependTo(".slickWrapper");
    $('#nextBtn').appendTo(".slickWrapper");

})

const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
const modalBody = $("#modalBodyImg");
var modalHeader = $(".modal-title");
var imgUrls = [];
var modalImg = '';

function openModal(project) {
    if (project === 'sws') {
        imgUrls = [
            "design/sws/thumbnail.png",
        ]
        imgUrls.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="Grad Invitation Preview">');

        modalBody[0].innerHTML = modalImg;

        projectModal.show();
    } else if (project === "loungescape") {
        imgUrls = [
            "design/loungescape/thumbnail.png",
        ]
        imgUrls.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="Grad Invitation Preview">');

        modalBody[0].innerHTML = modalImg;

        projectModal.show();
    } else if (project === "kkis") {
        imgUrls = [
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
        imgUrls.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="KKIS Preview">');

        modalBody[0].innerHTML = modalImg;
        modalHeader[0].innerHTML = "Katipunan ng Kabataan Information System (KKIS)"
        projectModal.show();
    } else if (project === "unblokc") {
        imgUrls = [
            "design/unblokc/thumbnail.png",
        ]
        imgUrls.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="Grad Invitation Preview">');

        modalBody[0].innerHTML = modalImg;

        projectModal.show();
    } else if (project === "medeco") {
        imgUrls = [
            "design/medeco/thumbnail.png",
        ]
        imgUrls.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="Grad Invitation Preview">');

        modalBody[0].innerHTML = modalImg;

        projectModal.show();
    } else if (project === "portfolio") {
        imgUrls = [
            "design/portfolio/thumbnail.png",
        ]
        imgUrls.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="Grad Invitation Preview">');

        modalBody[0].innerHTML = modalImg;

        projectModal.show();
    } else if (project === "gradInvi") {
        imgUrls = [
            "design/gradInvi/thumbnail.png",
            "design/gradInvi/01.png",
            "design/gradInvi/02.png",
        ]
        imgUrls.forEach(url => modalImg += '<img src="' + url + '" class="modalImg" alt="Grad Invitation Preview">');

        modalBody[0].innerHTML = modalImg;

        projectModal.show();
    }
}

function closeModal() {
    modalImg = '';
    modalHeader[0].innerHTML = "";
    modalBody[0].innerHTML = modalImg;
    projectModal.hide();
}
