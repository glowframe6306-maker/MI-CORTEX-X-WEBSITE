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

  function updateNavigation() {
    var html = document.documentElement;
    var route = normalizedRoute();
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

      if (active) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
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

  window.addEventListener("hashchange", updateNavigation);
  window.addEventListener("popstate", updateNavigation);
  window.addEventListener("pageshow", updateNavigation);

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      updateNavigation,
      { once: true }
    );
  } else {
    updateNavigation();
  }
})();
