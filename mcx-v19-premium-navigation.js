(function () {
  "use strict";

  if (window.__MCX_V20_NAV_SHAKE_FIX__) {
    return;
  }

  window.__MCX_V20_NAV_SHAKE_FIX__ = true;

  var framePending = false;
  var lastFrontVisible = null;
  var lastPageName = "";

  function getFrontPage() {
    return document.getElementById("mi-front-page");
  }

  function isFrontPageVisible() {
    var frontPage = getFrontPage();

    if (!frontPage) {
      return false;
    }

    var style = window.getComputedStyle(frontPage);

    if (
      frontPage.hidden ||
      frontPage.getAttribute("aria-hidden") === "true" ||
      style.display === "none" ||
      style.visibility === "hidden"
    ) {
      return false;
    }

    var rect = frontPage.getBoundingClientRect();

    /*
     * A small fixed threshold prevents visibility from rapidly switching
     * at the exact edge of the front banner.
     */
    return rect.height > 20 && rect.bottom > 12;
  }

  function currentPageName() {
    var hash = String(window.location.hash || "")
      .replace(/^#\/?/, "")
      .split("?")[0]
      .split("/")[0]
      .trim()
      .toLowerCase();

    if (hash) {
      return hash;
    }

    return "home";
  }

  function applyNavigationState() {
    framePending = false;

    var html = document.documentElement;
    var header = document.querySelector(".site-header");
    var frontVisible = isFrontPageVisible();
    var pageName = currentPageName();

    /*
     * Write classes only when the state really changed.
     * This avoids continuous style recalculation and visual shaking.
     */
    if (frontVisible !== lastFrontVisible) {
      lastFrontVisible = frontVisible;

      html.classList.toggle(
        "mcx-v19-front-page",
        frontVisible
      );

      html.classList.toggle(
        "mcx-v19-inner-page",
        !frontVisible
      );

      if (header) {
        header.hidden = false;
        header.setAttribute(
          "aria-hidden",
          frontVisible ? "true" : "false"
        );
      }
    }

    if (pageName !== lastPageName || lastPageName === "") {
      lastPageName = pageName;

      document
        .querySelectorAll(
          ".site-header .nav-links a[data-mcx-page-link]"
        )
        .forEach(function (link) {
          var linkPage = String(
            link.dataset.mcxPageLink || ""
          )
            .trim()
            .toLowerCase();

          var active =
            !frontVisible &&
            (
              linkPage === pageName ||
              (pageName === "" && linkPage === "home")
            );

          if (
            link.classList.contains("mcx-v19-active") !== active
          ) {
            link.classList.toggle(
              "mcx-v19-active",
              active
            );
          }

          if (active) {
            if (link.getAttribute("aria-current") !== "page") {
              link.setAttribute("aria-current", "page");
            }
          } else if (link.hasAttribute("aria-current")) {
            link.removeAttribute("aria-current");
          }
        });
    }
  }

  function scheduleNavigationUpdate() {
    if (framePending) {
      return;
    }

    framePending = true;
    window.requestAnimationFrame(applyNavigationState);
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest(
        ".site-header .nav-links a"
      );

      if (!link) {
        return;
      }

      var links = document.querySelector(
        ".site-header .nav-links"
      );

      var toggle = document.querySelector(
        ".site-header .nav-toggle"
      );

      if (links) {
        links.classList.remove("open");
      }

      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }

      scheduleNavigationUpdate();
    },
    true
  );

  window.addEventListener(
    "scroll",
    scheduleNavigationUpdate,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    scheduleNavigationUpdate,
    { passive: true }
  );

  window.addEventListener(
    "hashchange",
    scheduleNavigationUpdate
  );

  window.addEventListener(
    "popstate",
    scheduleNavigationUpdate
  );

  window.addEventListener(
    "pageshow",
    scheduleNavigationUpdate
  );

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      scheduleNavigationUpdate,
      { once: true }
    );
  } else {
    scheduleNavigationUpdate();
  }
})();
