$(document).ready(function () {
  //Menu Page
  $(".menu-label").click(function () {
    $("#menu-check").on("change", function () {
      if ($(this).is(":checked")) {
        $(".menuPage").removeClass("d-none");
        $(".line1").css({
          width: "70px",
          margin: "0 2px 0 0",
          transform: "rotate(45deg) scaleX(0.55) translate(45px, -4.5px)",
          "border-radius": "50px 50px 50px 0",
        });
        $(".line2 ").css({
          "border-top-right-radius": "50px",
          "border-bottom-right-radius": "50px",
          width: "0px",
        });
        $(".line3").css({
          margin: "27px 0 0 0",
          transform: "rotate(-45deg) scaleX(0.55) translate(40px, 4.5px)",
          "border-radius": "0 50px 50px 50px",
        });
        $(".page").addClass("d-none");
        $(".menuPage")
          .removeClass("animate__slideOutUp d-none")
          .addClass("animate__slideInDown");
      } else {
        $(".line1, .line2, .line3").css({
          width: "70px",
          height: "2px",
          "background-color": "#fff",
          margin: "0",
          position: "absolute",
          transform: "rotate(0deg) scaleX(1) translate(0, 0)",
        });
        $(".line2").css({ width: "50px", margin: "18px 0 0 0" });
        $(".line3").css("margin", "36px 0 0 0");
        $(".menuPage")
          .removeClass("animate__slideInDown")
          .addClass("animate__slideOutUp");
        setTimeout(function () {
          $(".menuPage").addClass("d-none");
        }, 500);
        setTimeout(function () {
          $(".page").removeClass("d-none");
        }, 500);
      }
    });
  });

  // Links
  $(".navTxt").each(function () {
    $(this).click(function () {
      $(".menuPage")
        .removeClass("animate__slideInDown")
        .addClass("animate__slideOutUp");
      setTimeout(function () {
        $(".menuPage").addClass("d-none");
      }, 1000);
      $(".line1, .line2, .line3").css({
        width: "70px",
        height: "2px",
        "background-color": "#fff",
        position: "absolute",
        transform: "rotate(0deg) scaleX(1) translate(0, 0)",
      });
      $(".line1").css("margin", "0");
      $(".line2").css("width", "50px");
      $(".line3").css("margin", "36px 0 0 0");
      $(this).removeClass("stroked").addClass("nav-active");
      $(".page").removeClass("d-none");
    });
  });

  $("#link-home").click(function () {
    $(this).addClass("nav-active");
    $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
    $("#landing").addClass("active");
  });

  $("#learnMore").click(function () {
    $("#about").addClass("active");
  });

  $("#link-about").click(function () {
    $(this).addClass("nav-active");
    $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
    $("#about").addClass("active");
  });

  $("#link-portfolio").click(function () {
    $(this).addClass("nav-active");
    $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
    $("#portfolio").addClass("active");
  });

  $("#link-contact").click(function () {
    $(this).addClass("nav-active");
    $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
    $("#contact").addClass("active");
  });

  // Animations loading after bg
  var bodyBgImage = new Image();
  bodyBgImage.onload = function () {
    $(".content").removeClass("d-none");
    $(".content").css("--animate-delay", "1s");
  };
  bodyBgImage.src =
    "https://github.com/nicolealcala/Portfolio/blob/main/assets/background01.png?raw=true";

  // Adjust nav color on bg brightness
  // Get the position of the last section
  var contactTop = $("#contact").offset().top;

  // Attach scroll event handler to window
  $(window).scroll(function () {
    // Get the current scroll position
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var windowCenter = windowHeight / 2;

    // Check if the current scroll position has reached the last section
    if (scrollPos >= contactTop) {
      // Set the div color to black
      $(".line1, .line2, .line3").css("background-color", "#505050");
      $(".socialsDiv > a, #scrollTxt").css("color", "#505050");
    } else {
      // Set the div color to white
      $(".line1, .line2, .line3").css("background-color", "white");
      $(".socialsDiv > a").css("color", "#909090");
      $("#scrollTxt").css("color", "#aeaeae");
    }
  });

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

  // CONTACTS
  initMap();
});

let map;
async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map($("#map")[0], {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
