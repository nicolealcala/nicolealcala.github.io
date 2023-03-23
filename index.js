$(document).ready(function(){
  $('#menu-check').click(
    function(){
    $('.menuPage').removeClass('d-none')
    $('section').not(this).addClass('d-none');
    },

    function(){
      $('.menuPage').addClass('d-none');
      $('section').not(this).removeClass('d-none');
    })
})