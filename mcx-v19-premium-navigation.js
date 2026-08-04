(function () {
  "use strict";

  if (window.__MCX_FINAL_STABLE_NAVIGATION__) {
    return;
  }

  window.__MCX_FINAL_STABLE_NAVIGATION__ = true;

  function getRoute() {
    return String(window.location.hash || "")
      .replace(/^#\/?/, "")
      .split("?")[0]
      .split("/")[0]
      .trim()
      .toLowerCase();
  }

  function isFrontPage() {
    const hash = String(window.location.hash || "");

    return (
      hash === "" ||
      hash === "#" ||
      hash === "#/"
    );
  }

  function updateNavigation() {
    const frontPage = isFrontPage();
    const route = getRoute();
    const html = document.documentElement;
    const header = document.querySelector(".site-header");

    html.classList.toggle(
      "mcx-v19-front-page",
      frontPage
    );

    html.classList.toggle(
      "mcx-v19-inner-page",
      !frontPage
    );

    if (header) {
      header.hidden = false;

      header.setAttribute(
        "aria-hidden",
        frontPage ? "true" : "false"
      );
    }

    document
      .querySelectorAll(
        ".site-header .nav-links a[data-mcx-page-link]"
      )
      .forEach(function (link) {
        const page = String(
          link.dataset.mcxPageLink || ""
        )
          .trim()
          .toLowerCase();

        const active =
          !frontPage &&
          (
            page === route ||
            (
              route === "" &&
              page === "home"
            )
          );

        link.classList.toggle(
          "mcx-v19-active",
          active
        );

        if (active) {
          link.setAttribute(
            "aria-current",
            "page"
          );
        } else {
          link.removeAttribute(
            "aria-current"
          );
        }
      });
  }

  document.addEventListener(
    "click",
    function (event) {
      const link = event.target.closest(
        ".site-header .nav-links a"
      );

      if (!link) {
        return;
      }

      const menu = document.querySelector(
        ".site-header .nav-links"
      );

      const toggle = document.querySelector(
        ".site-header .nav-toggle"
      );

      if (menu) {
        menu.classList.remove("open");
      }

      if (toggle) {
        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }
    },
    true
  );

  window.addEventListener(
    "hashchange",
    updateNavigation
  );

  window.addEventListener(
    "popstate",
    updateNavigation
  );

  window.addEventListener(
    "pageshow",
    updateNavigation
  );

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