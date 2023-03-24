$(document).ready(function () {
  // $("#menu-check").click(
  //   function () {
  //     $(".menuPage").removeClass("d-none");
  //     $("section").not('.menuPage').addClass("d-none");
  //   },

  //   function () {
  //     $(".menuPage").addClass("d-none");
  //     $("section").not('.menuPage').removeClass("d-none");
  //   }
  // );

  $('#allWorks').click(function(){
    $(this).addClass('active');
    $('.navBtn').not(this).removeClass('active');
  })

  $('#websites').click(function(){
    $(this).addClass('active');
    $('.navBtn').not(this).removeClass('active');
  })

  $('#branding').click(function(){
    $(this).addClass('active');
    $('.navBtn').not(this).removeClass('active');
  })
});
