(function () {
  "use strict";

  if (window.__MCX_V19_NAVIGATION__) {
    return;
  }

  window.__MCX_V19_NAVIGATION__ = true;

  function normalizedRoute() {
    return String(window.location.hash || "")
      .replace(/^#\/?/, "")
      .split("?")[0]
      .split("/")[0]
      .trim()
      .toLowerCase();
  }

  function isFrontBannerRoute() {
    var hash = String(window.location.hash || "");
    return hash === "" || hash === "#" || hash === "#/";
  }

  function updateNavigation(forcePage) {
    var html = document.documentElement;
    var route = forcePage || normalizedRoute();
    var front = isFrontBannerRoute();

    html.classList.toggle("mcx-v19-front-page", front);
    html.classList.toggle("mcx-v19-inner-page", !front);

    var links = document.querySelectorAll(
      ".site-header .nav-links a[data-mcx-page-link]"
    );

    links.forEach(function (link) {
      var page = String(link.dataset.mcxPageLink || "")
        .trim()
        .toLowerCase();

      var active =
        (!front && route === "" && page === "home") ||
        (!front && route === page);

      link.classList.toggle("mcx-v19-active", active);
      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function updateNavigationFromVisibleSection() {
    var sections = Array.from(
      document.querySelectorAll("[data-mcx-page]")
    );

    if (!sections.length) {
      return;
    }

    var visible = sections
      .filter(function (section) {
        var rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.62 && rect.bottom > 120;
      })
      .sort(function (a, b) {
        return b.getBoundingClientRect().top - a.getBoundingClientRect().top;
      })[0];

    if (!visible) {
      return;
    }

    var page = String(visible.getAttribute("data-mcx-page") || "")
      .trim()
      .toLowerCase();

    if (!page) {
      return;
    }

    if (page === "overview") {
      page = "home";
    }

    updateNavigation(page);
  }

  function closeMobileMenuAfterNavigation(event) {
    var link = event.target.closest(
      ".site-header .nav-links a[data-mcx-page-link]"
    );

    if (!link) {
      return;
    }

    var links = document.querySelector(".site-header .nav-links");
    var toggle = document.querySelector(".site-header .nav-toggle");

    if (links) {
      links.classList.remove("open");
    }

    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }

    window.setTimeout(updateNavigation, 0);
  }

  document.addEventListener(
    "click",
    closeMobileMenuAfterNavigation,
    true
  );

  window.addEventListener("hashchange", function () {
    updateNavigation();
  });
  window.addEventListener("popstate", function () {
    updateNavigation();
  });
  window.addEventListener("pageshow", function () {
    updateNavigation();
  });

  if ("IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) {
            return entry.isIntersecting;
          })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          })[0];

        if (visible && visible.target && visible.target.getAttribute) {
          var sectionPage = String(
            visible.target.getAttribute("data-mcx-page") || ""
          )
            .trim()
            .toLowerCase();

          if (sectionPage === "overview") {
            sectionPage = "home";
          }

          if (sectionPage) {
            updateNavigation(sectionPage);
          }
        }
      },
      {
        root: null,
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-12% 0px -30% 0px"
      }
    );

    document.querySelectorAll("[data-mcx-page]").forEach(function (section) {
      navObserver.observe(section);
    });
  }

  window.addEventListener("scroll", function () {
    window.requestAnimationFrame(updateNavigationFromVisibleSection);
  }, { passive: true });

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        updateNavigation();
        window.requestAnimationFrame(updateNavigationFromVisibleSection);
      },
      { once: true }
    );
  } else {
    updateNavigation();
    window.requestAnimationFrame(updateNavigationFromVisibleSection);
  }
})();
