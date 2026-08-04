(function () {
  "use strict";

  if (window.__MCX_V22_ZERO_STUCK_NAV__) {
    return;
  }

  window.__MCX_V22_ZERO_STUCK_NAV__ = true;

  var observer = null;
  var frontVisible = null;
  var routeName = "";

  function frontPageElement() {
    return document.getElementById("mi-front-page");
  }

  function currentRoute() {
    return String(window.location.hash || "")
      .replace(/^#\/?/, "")
      .split("?")[0]
      .split("/")[0]
      .trim()
      .toLowerCase() || "home";
  }

  function updateActiveLink() {
    var current = currentRoute();

    if (current === routeName) {
      return;
    }

    routeName = current;

    document
      .querySelectorAll(
        ".site-header .nav-links a[data-mcx-page-link]"
      )
      .forEach(function (link) {
        var page = String(
          link.dataset.mcxPageLink || ""
        )
          .trim()
          .toLowerCase();

        var active =
          frontVisible === false &&
          page === current;

        link.classList.toggle(
          "mcx-v19-active",
          active
        );

        if (active) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
  }

  function applyFrontState(nextFrontVisible) {
    if (nextFrontVisible === frontVisible) {
      return;
    }

    frontVisible = nextFrontVisible;

    var html = document.documentElement;
    var header = document.querySelector(".site-header");

    html.classList.toggle(
      "mcx-v19-front-page",
      nextFrontVisible
    );

    html.classList.toggle(
      "mcx-v19-inner-page",
      !nextFrontVisible
    );

    if (header) {
      header.hidden = false;
      header.setAttribute(
        "aria-hidden",
        nextFrontVisible ? "true" : "false"
      );
    }

    routeName = "";
    updateActiveLink();
  }

  function setupFrontObserver() {
    var front = frontPageElement();

    if (!front) {
      applyFrontState(false);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      applyFrontState(false);
      return;
    }

    observer = new IntersectionObserver(
      function (entries) {
        var entry = entries[0];

        if (!entry) {
          return;
        }

        /*
         * The navigation remains hidden while at least 48px of the
         * real front banner is visible. This fixed boundary prevents
         * rapid switching and eliminates scroll jitter.
         */
        applyFrontState(
          entry.isIntersecting &&
          entry.intersectionRect.height >= 48
        );
      },
      {
        root: null,
        threshold: [0, 0.001],
        rootMargin: "0px 0px -48px 0px"
      }
    );

    observer.observe(front);
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

      var menu = document.querySelector(
        ".site-header .nav-links"
      );

      var toggle = document.querySelector(
        ".site-header .nav-toggle"
      );

      if (menu) {
        menu.classList.remove("open");
      }

      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    },
    true
  );

  window.addEventListener("hashchange", updateActiveLink);
  window.addEventListener("popstate", updateActiveLink);
  window.addEventListener("pageshow", updateActiveLink);

  function initialize() {
    setupFrontObserver();
    updateActiveLink();
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
