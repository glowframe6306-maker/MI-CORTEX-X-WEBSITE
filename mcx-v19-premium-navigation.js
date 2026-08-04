(function () {
  "use strict";

  if (window.__MCX_STABLE_SCROLL_NAVIGATION__) {
    return;
  }

  window.__MCX_STABLE_SCROLL_NAVIGATION__ = true;

  let framePending = false;
  let navigationVisible = null;

  function getFrontPage() {
    return (
      document.getElementById("mi-front-page") ||
      document.querySelector(
        "[data-mcx-front-page]," +
        ".mi-front-page," +
        ".mcx-front-page," +
        ".front-page-banner," +
        ".front-banner"
      )
    );
  }

  function getCurrentPage() {
    const hash = String(window.location.hash || "")
      .replace(/^#\/?/, "")
      .split("?")[0]
      .split("/")[0]
      .trim()
      .toLowerCase();

    return hash || "home";
  }

  function getShowThreshold() {
    const frontPage = getFrontPage();

    if (!frontPage) {
      return 0;
    }

    const rect = frontPage.getBoundingClientRect();
    const pageTop = window.scrollY + rect.top;
    const height = Math.max(
      frontPage.offsetHeight,
      rect.height
    );

    return Math.max(
      0,
      pageTop + height - 48
    );
  }

  function shouldShowNavigation() {
    const frontPage = getFrontPage();

    if (!frontPage) {
      return true;
    }

    if (
      frontPage.hidden ||
      frontPage.getAttribute("aria-hidden") === "true"
    ) {
      return true;
    }

    const style = window.getComputedStyle(frontPage);

    if (
      style.display === "none" ||
      style.visibility === "hidden"
    ) {
      return true;
    }

    const threshold = getShowThreshold();

    /*
     * Hysteresis prevents rapid hide/show switching
     * when scrolling near the exact boundary.
     */
    if (navigationVisible === true) {
      return window.scrollY > threshold - 32;
    }

    return window.scrollY > threshold + 16;
  }

  function updateActiveLink(showNavigation) {
    const currentPage = getCurrentPage();

    document
      .querySelectorAll(
        ".site-header .nav-links a[data-mcx-page-link]"
      )
      .forEach(function (link) {
        const linkPage = String(
          link.dataset.mcxPageLink || ""
        )
          .trim()
          .toLowerCase();

        const active =
          showNavigation &&
          linkPage === currentPage;

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

  function applyNavigationState() {
    framePending = false;

    const showNavigation =
      shouldShowNavigation();

    const html =
      document.documentElement;

    const header =
      document.querySelector(".site-header");

    if (navigationVisible !== showNavigation) {
      navigationVisible = showNavigation;

      html.classList.toggle(
        "mcx-v19-front-page",
        !showNavigation
      );

      html.classList.toggle(
        "mcx-v19-inner-page",
        showNavigation
      );

      if (header) {
        header.hidden = false;

        header.setAttribute(
          "aria-hidden",
          showNavigation
            ? "false"
            : "true"
        );
      }
    }

    updateActiveLink(showNavigation);
  }

  function scheduleNavigationUpdate() {
    if (framePending) {
      return;
    }

    framePending = true;

    window.requestAnimationFrame(
      applyNavigationState
    );
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

      const menu =
        document.querySelector(
          ".site-header .nav-links"
        );

      const toggle =
        document.querySelector(
          ".site-header .nav-toggle"
        );

      menu?.classList.remove("open");

      toggle?.setAttribute(
        "aria-expanded",
        "false"
      );

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