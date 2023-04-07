$(document).ready(function () {
  // Animations
  var bodyBgImage = new Image();
  bodyBgImage.onload = function () {
    $(".content").removeClass("d-none");
    $(".content").css("--animate-delay", "1s");
  };
  bodyBgImage.src =
    "https://github.com/nicolealcala/Portfolio/blob/main/assets/background01.png?raw=true";

  //Entrance and Exit animations on scroll
  // Function to add exit animation to elements in the current section
  function addExitAnimationToCurrentSection() {
    var currentSection = $("section.active");
    currentSection
      .find(".animate__animated.animate__slideInDown")
      .removeClass("animate__slideInDown")
      .addClass("animate__fadeOutUp");
    currentSection
      .find(".animate__animated.animate__slideInUp")
      .removeClass("animate__slideInUp")
      .addClass("animate__fadeOutDown");
    currentSection
      .find(".animate__animated.animate__slideInLeft")
      .removeClass("animate__slideInLeft")
      .addClass("animate__fadeOutLeft");
    currentSection
      .find(".animate__animated.animate__slideInRight")
      .removeClass("animate__slideInRight")
      .addClass("animate__fadeOutRight");
  }

  // Function to add entrance animation to elements in the next section
  function addEntranceAnimationToNextSection() {
    var nextSection = $("section.active").next("section");
    nextSection
      .find(".animate__animated.animate__slideInDown")
      .removeClass("animate__slideInDown")
      .addClass("animate__fadeOutUp");
    nextSection
      .find(".animate__animated.animate__slideInUp")
      .removeClass("animate__slideInUp")
      .addClass("animate__fadeOutDown");
    nextSection
      .find(".animate__animated.animate__slideInLeft")
      .removeClass("animate__slideInLeft")
      .addClass("animate__fadeOutLeft");
    nextSection
      .find(".animate__animated.animate__slideInRight")
      .removeClass("animate__slideInRight")
      .addClass("animate__fadeOutRight");
  }

  // Function to add entrance animation to elements in the previous section
  function addEntranceAnimationToPreviousSection() {
    var prevSection = $("section.active").prev("section");
    prevSection
      .find(".animate__animated.animate__slideInDown")
      .removeClass("animate__slideInDown")
      .addClass("animate__fadeOutUp");
    prevSection
      .find(".animate__animated.animate__slideInUp")
      .removeClass("animate__slideInUp")
      .addClass("animate__fadeOutDown");
    prevSection
      .find(".animate__animated.animate__slideInLeft")
      .removeClass("animate__slideInLeft")
      .addClass("animate__fadeOutLeft");
    prevSection
      .find(".animate__animated.animate__slideInRight")
      .removeClass("animate__slideInRight")
      .addClass("animate__fadeOutRight");
  }

  // Detect when the user scrolls
  $(window).on("scroll", function () {
    var currentSection = null;
    $("section").each(function () {
      var sectionTop = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSection = $(this);
      }
    });

    // Remove "active" class from all sections
    $("section").removeClass("active");

    // Add "active" class to the currently visible section
    if (currentSection) {
      currentSection.addClass("active");
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
});
