$(document).ready(function () {
    $('#allFilter').click(function () {
        if ($(this).hasClass('active')) {
            $('.projectCol').show();
        } else {
            $('li').not(this).removeClass('active');
            $(this).toggleClass('active');
            $('.projectCol').show();
        }
    })

    $('#deployedFilter').click(function () {
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

    $('#uiFilter').click(function () {
        if ($(this).hasClass('active')) {
            $('.projectCol').not('.developing').hide();
            $('.developing').show();
        } else {
            $('li').not(this).removeClass('active');
            $(this).toggleClass('active');
            $('.projectCol').not('.developing').hide();
            $('.developing').show();
        }
    });
})