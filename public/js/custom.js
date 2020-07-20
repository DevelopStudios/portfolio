$(function () {
  //Sort functionality
  var selectedClass = "";
  $(".sort").click(function () {
    selectedClass = $(this).attr("data-rel");
    $(".sort[ data-rel=" + selectedClass + "]").addClass("active");
    $(".sort")
      .not("[ data-rel=" + selectedClass + "]")
      .removeClass("active");
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div")
      .not("." + selectedClass)
      .fadeOut();
    setTimeout(function () {
      $("." + selectedClass).fadeIn();
      $("#portfolio").fadeTo(500, 1);
    }, 500);
  });

  // Show text overlay
  $(".company-image-overlay").hide();
  $(".tile").mouseover(handleHover).mouseout(handleOver);
  function handleHover() {
    let overlay = this.children[1];
    let overlayText = this.children[1].children;
    $(overlay).show();
    $(overlayText).show();
  }
  function handleOver() {
    let overlay = this.children[1];
    $(overlay).hide();
  }
  let menuButton = $(".hamburger");
  let mobileMenu = $(".mobile-menu ul");
  mobileMenu.hide();
  menuButton.click(toggleMobileMenu);
  function toggleMobileMenu() {
    if (menuButton.hasClass("is-active")) {
      menuButton.removeClass("is-active");
      mobileMenu.hide(500);
    } else {
      menuButton.addClass("is-active");
      mobileMenu.show(500);
    }
  }

  //Scroll Spy
  $("#home").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".navbar").offset().top,
      },
      1000
    );
  });
  $("#about").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".about-container").offset().top,
      },
      1000
    );
  });
  $("#service").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".services-container").offset().top,
      },
      1000
    );
  });
  $("#port").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".recent-works-container").offset().top,
      },
      1000
    );
  });
  $("#contact").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".contact-container").offset().top,
      },
      1000
    );
  });
});


