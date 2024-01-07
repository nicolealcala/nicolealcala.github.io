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