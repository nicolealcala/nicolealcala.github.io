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

  // SKILLS
  const counter90 = $(".counter90");
  const counter85 = $(".counter85");
  const counter80 = $(".counter80");
  const counter75 = $(".counter75");

  function count90() {
    let current90 = parseInt(counter90.text());
    if (current90 < 90) {
      current90++;
      counter90.text(current90 + "%");
      setTimeout(count90, 5);
    }
  }

  function count85() {
    let current85 = parseInt(counter85.text());
    if (current85 < 85) {
      current85++;
      counter85.text(current85 + "%");
      setTimeout(count85, 5);
    }
  }

  function count80() {
    let current80 = parseInt(counter80.text());
    if (current80 < 80) {
      current80++;
      counter80.text(current80 + "%");
      setTimeout(count80, 5);
    }
  }

  function count75() {
    let current75 = parseInt(counter75.text());
    if (current75 < 75) {
      current75++;
      counter75.text(current75 + "%");
      setTimeout(count75, 5);
    }
  }
  setTimeout(count90, 500);
  setTimeout(count85, 500);
  setTimeout(count80, 500);
  setTimeout(count75, 500);

  $("#allWorks").click(function () {
    $(this).addClass("active");
    $(".navBtn").not(this).removeClass("active");
  });

  $("#websites").click(function () {
    $(this).addClass("active");
    $(".navBtn").not(this).removeClass("active");
  });

  $("#branding").click(function () {
    $(this).addClass("active");
    $(".navBtn").not(this).removeClass("active");
  });
});
