(function () {
  "use strict";

  if (window.__MCX_V21_NAV_SMOOTH_STABILITY__) {
    return;
  }

  window.__MCX_V21_NAV_SMOOTH_STABILITY__ = true;

  var frontObserver = null;
  var framePending = false;
  var frontVisible = false;
  var appliedFrontVisible = null;
  var appliedPageName = "";

  function getFrontPage() {
    return document.getElementById("mi-front-page");
  }

  function currentPageName() {
    var hash = String(window.location.hash || "")
      .replace(/^#\/?/, "")
      .split("?")[0]
      .split("/")[0]
      .trim()
      .toLowerCase();

    return hash || "home";
  }

  function detectFrontPageWithoutObserver() {
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
     * Hysteresis prevents rapid hide/show switching near the boundary.
     */
    if (frontVisible) {
      return rect.bottom > -24;
    }

    return rect.bottom > 72;
  }

  function applyNavigationState() {
    framePending = false;

    var html = document.documentElement;
    var header = document.querySelector(".site-header");
    var pageName = currentPageName();

    if (frontVisible !== appliedFrontVisible) {
      appliedFrontVisible = frontVisible;

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

    if (pageName !== appliedPageName || appliedPageName === "") {
      appliedPageName = pageName;

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
            linkPage === pageName;

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

  function scheduleApply() {
    if (framePending) {
      return;
    }

    framePending = true;
    window.requestAnimationFrame(applyNavigationState);
  }

  function updateFallbackVisibility() {
    var next = detectFrontPageWithoutObserver();

    if (next !== frontVisible) {
      frontVisible = next;
      scheduleApply();
    }
  }

  function connectFrontObserver() {
    var frontPage = getFrontPage();

    if (!frontPage) {
      frontVisible = false;
      scheduleApply();
      return;
    }

    if ("IntersectionObserver" in window) {
      frontObserver = new IntersectionObserver(
        function (entries) {
          var entry = entries[0];

          if (!entry) {
            return;
          }

          var next =
            entry.isIntersecting &&
            entry.intersectionRect.height > 24;

          if (next !== frontVisible) {
            frontVisible = next;
            scheduleApply();
          }
        },
        {
          root: null,
          threshold: [0, 0.01],
          rootMargin: "-1px 0px -36px 0px"
        }
      );

      frontObserver.observe(frontPage);
      return;
    }

    frontVisible = detectFrontPageWithoutObserver();

    window.addEventListener(
      "scroll",
      updateFallbackVisibility,
      { passive: true }
    );
  }

  function updatePageOnly() {
    scheduleApply();
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

      updatePageOnly();
    },
    true
  );

  window.addEventListener("hashchange", updatePageOnly);
  window.addEventListener("popstate", updatePageOnly);
  window.addEventListener("pageshow", updatePageOnly);

  function initialize() {
    connectFrontObserver();
    scheduleApply();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      { once: true }
    );
  } else {
    initialize();
  }
})();
