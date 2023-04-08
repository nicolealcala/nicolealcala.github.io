$(document).ready(function () {
  //Menu Page
  $(".menu-label").click(function () {
    $("#menu-check").on("change", function () {
      if ($(this).is(":checked")) {
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
          width: "70px",
          margin: "27px 0 0 0",
          transform: "rotate(-45deg) scaleX(0.55) translate(40px, 4.5px)",
          "border-radius": "0 50px 50px 50px",
        });
        $(".menuPage").removeClass("d-none");
        $("section").not(".menuPage").addClass("d-none");

        // Links
        $("#link-home").click(function () {
          $(this).removeClass("stroked").addClass("nav-active");
          $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
          $("#landing").removeClass("d-none").addClass("active");
          $("section").not("#landing").removeClass("active").addClass("d-none");
          $(".line1, .line2, .line3").css({
            width: "70px",
            height: "2px",
            "background-color": "#fff",
            position: "absolute",
            transform: "rotate(0deg) scaleX(1) translate(0, 0)",
          });
          $(".line2").css("width", "50px");
          $(".line3").css("margin", "36px 0 0 0");
        });
        $("#link-about").click(function () {
          $(this).removeClass("stroked").addClass("nav-active");
          $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
          $("#about").removeClass("d-none").addClass("active");
          $("section").not("#about").removeClass("active").addClass("d-none");
          $(".line1, .line2, .line3").css({
            width: "70px",
            height: "2px",
            "background-color": "#fff",
            position: "absolute",
            transform: "rotate(0deg) scaleX(1) translate(0, 0)",
          });
          $(".line2").css("width", "50px");
          $(".line3").css("margin", "36px 0 0 0");
        });
        $("#link-portfolio").click(function () {
          $(this).removeClass("stroked").addClass("nav-active");
          $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
          $("#portfolio").removeClass("d-none").addClass("active");
          $("section")
            .not("#portfolio")
            .removeClass("active")
            .addClass("d-none");
          $(".line1, .line2, .line3").css({
            width: "70px",
            height: "2px",
            "background-color": "#fff",
            position: "absolute",
            transform: "rotate(0deg) scaleX(1) translate(0, 0)",
          });
          $(".line2").css("width", "50px");
          $(".line3").css("margin", "36px 0 0 0");
        });
        $("#link-contact").click(function () {
          $(this).removeClass("stroked").addClass("nav-active");
          $(".navTxt").not(this).removeClass("nav-active").addClass("stroked");
          $("#contact").removeClass("d-none").addClass("active");
          $("section").not("#contact").removeClass("active").addClass("d-none");
          $(".line1, .line2, .line3").css({
            width: "70px",
            height: "2px",
            "background-color": "#fff",
            position: "absolute",
            transform: "rotate(0deg) scaleX(1) translate(0, 0)",
          });
          $(".line2").css("width", "50px");
          $(".line3").css("margin", "36px 0 0 0");
        });
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
        setTimeout(function () {
          $(".menuPage")
            .removeClass("animate__slideInDown")
            .addClass("animate__slideOutUp");
        }, 3000);
        // $(".menuPage").addClass("d-none");
        $("section.active").removeClass("d-none");
      }
    });
  });

  $("#learnMore").click(function () {
    $("section").not("#about").removeClass("active").addClass("d-none");
  });

  // Animations
  var bodyBgImage = new Image();
  bodyBgImage.onload = function () {
    $(".content").removeClass("d-none");
    $(".content").css("--animate-delay", "1s");
  };
  bodyBgImage.src =
    "https://github.com/nicolealcala/Portfolio/blob/main/assets/background01.png?raw=true";

  // //Entrance and Exit animations on scroll
  // // Function to add exit animation to elements in the current section
  // function addExitAnimationToCurrentSection() {
  //   // var currentSection = $("section.active");
  // }

  // // Function to add entrance animation to elements in the next section
  // function addEntranceAnimationToNextSection() {
  //   var nextSection = $("section.active").next("section");
  // }

  // // Function to add entrance animation to elements in the previous section
  // function addEntranceAnimationToPreviousSection() {
  //   var prevSection = $("section.active").prev("section");
  //   prevSection
  //     .find(".animate__animated.animate__slideInDown")
  //     .removeClass("animate__slideInDown")
  //     .addClass("animate__fadeOutUp");
  //   prevSection
  //     .find(".animate__animated.animate__slideInUp")
  //     .removeClass("animate__slideInUp")
  //     .addClass("animate__fadeOutDown");
  //   prevSection
  //     .find(".animate__animated.animate__slideInLeft")
  //     .removeClass("animate__slideInLeft")
  //     .addClass("animate__fadeOutLeft");
  //   prevSection
  //     .find(".animate__animated.animate__slideInRight")
  //     .removeClass("animate__slideInRight")
  //     .addClass("animate__fadeOutRight");
  // }

  // var currentSection; // Variable to keep track of current section

  // // Function to animate exit of current section
  // function animateSectionExit(currentSection) {
  //   currentSection
  //     .find(".animate__animated.animate__slideInDown")
  //     .removeClass("animate__slideInDown")
  //     .addClass("animate__fadeOutUp");
  //   currentSection
  //     .find(".animate__animated.animate__slideInUp")
  //     .removeClass("animate__slideInUp")
  //     .addClass("animate__fadeOutDown");
  //   currentSection
  //     .find(".animate__animated.animate__slideInLeft")
  //     .removeClass("animate__slideInLeft")
  //     .addClass("animate__fadeOutLeft");
  //   currentSection
  //     .find(".animate__animated.animate__slideInRight")
  //     .removeClass("animate__slideInRight")
  //     .addClass("animate__fadeOutRight");
  //   setTimeout(function () {
  //     currentSection.find("animate__animated animate__fadeOutUp");
  //     currentSection.removeClass("animate__fadeOutUp");
  //     currentSection.find("animate__animated animate__fadeOutDown");
  //     currentSection.removeClass("animate__fadeOutDown");
  //     currentSection.find("animate__animated animate__fadeOutLeft");
  //     currentSection.removeClass("animate__fadeOutLeft");
  //     currentSection.find("animate__animated animate__fadeOutRight");
  //     currentSection.removeClass("animate__fadeOutRight");
  //     currentSection.hide();
  //   }, 1000); // Add a delay to allow animation to complete
  // }

  // // Function to animate entrance of next section
  // function animateSectionEntrance(nextSection) {
  //   nextSection
  //     .find(".animate__animated.animate__slideInDown")
  //     .removeClass("animate__slideInDown")
  //     .addClass("animate__fadeOutUp");
  //   nextSection
  //     .find(".animate__animated.animate__slideInUp")
  //     .removeClass("animate__slideInUp")
  //     .addClass("animate__fadeOutDown");
  //   nextSection
  //     .find(".animate__animated.animate__slideInLeft")
  //     .removeClass("animate__slideInLeft")
  //     .addClass("animate__fadeOutLeft");
  //   nextSection
  //     .find(".animate__animated.animate__slideInRight")
  //     .removeClass("animate__slideInRight")
  //     .addClass("animate__fadeOutRight");
  //   nextSection.show();
  //   setTimeout(function () {
  //     nextSection.removeClass("animate__animated animate__fadeInDown");
  //     currentSection.find("animate__animated animate__fadeOutUp");
  //     nextSection.removeClass("animate__fadeOutUp");
  //     nextSection.find("animate__animated animate__fadeOutDown");
  //     nextSection.removeClass("animate__fadeOutDown");
  //     nextSection.find("animate__animated animate__fadeOutLeft");
  //     nextSection.removeClass("animate__fadeOutLeft");
  //     nextSection.find("animate__animated animate__fadeOutRight");
  //     nextSection.removeClass("animate__fadeOutRight");
  //   }, 1000); // Add a delay to allow animation to complete
  // }

  // // Scroll event listener
  // $(window).on("scroll", function () {
  //   var scrollTop = $(window).scrollTop();
  //   var windowHeight = $(window).height();

  //   // Check if scrolled down
  //   if (scrollTop > windowHeight) {
  //     animateSectionExit(currentSection);
  //     currentSection = currentSection.next("section"); // Update current section
  //     animateSectionEntrance(currentSection);
  //   }
  //   // Check if scrolled up
  //   else {
  //     animateSectionExit(currentSection);
  //     currentSection = currentSection.prev("section"); // Update current section
  //     animateSectionEntrance(currentSection);
  //   }
  // });

  // currentSection = $("#landing"); // Set initial current section as section A
  // animateSectionEntrance(currentSection); // Show section A with entrance animation

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
