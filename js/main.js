"use strict";

(function () {
  "use strict";

  function headerBootstrap() {
    var header = document.getElementById("header");
    window.addEventListener("scroll", function () {
      window.scrollY || window.pageYOffset || 40 < document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0) ? header.classList.add("fixed-header") : header.classList.remove("fixed-eader");
    });
  }

  function backToTop() {
    //click back to top
    var backToTop = document.getElementById("backToTop");
    console.log(backToTop);
    backToTop.addEventListener("click", function (e) {
      e.preventDefault(), window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }); // when scroll down back to top show

    window.addEventListener("scroll", function () {
      var e = window.innerHeight / 2;
      window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0) > e ? backToTop.classList.add("showBackToTop") : backToTop.classList.remove("showBackToTop");
    });
  }

  function mobile() {
    var mobileMenuButton = document.querySelector(".mobileMenuButton"),
        closeMobileMenu = document.querySelector("#closeMobileMenu"),
        mobileNav = document.querySelector(".mobileNav");
    mobileMenuButton.addEventListener("click", function () {
      mobileNav.classList.add("mobileMenuOpen"), document.body.classList.add("showOverlay"), header.classList.add("transparentBackground");
    }), closeMobileMenu.addEventListener("click", function () {
      document.body.classList.remove("showOverlay"), mobileNav.classList.remove("mobileMenuOpen"), header.classList.remove("transparentBackground");
    });
  }

  function init() {
    headerBootstrap();
    mobile();
    backToTop();
  }

  init();
})();