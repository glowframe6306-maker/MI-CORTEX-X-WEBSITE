(function () {
  "use strict";

  if (window.__MCX_V19_NAVIGATION_VISIBILITY_FIX__) {
    return;
  }

  window.__MCX_V19_NAVIGATION_VISIBILITY_FIX__ = true;

  function isElementVisible(element) {
    if (!element) {
      return false;
    }

    if (
      element.hidden ||
      element.getAttribute("aria-hidden") === "true"
    ) {
      return false;
    }

    const style = window.getComputedStyle(element);

    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      Number(style.opacity) === 0
    ) {
      return false;
    }

    const rect = element.getBoundingClientRect();

    return (
      rect.width > 20 &&
      rect.height > 20 &&
      rect.bottom > 0 &&
      rect.top < window.innerHeight
    );
  }

  function getFrontPageElement() {
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

  function isActualFrontPageVisible() {
    const frontPage = getFrontPageElement();

    return isElementVisible(frontPage);
  }

  function currentPageName() {
    const hash = String(window.location.hash || "")
      .replace(/^#\/?/, "")
      .split("?")[0]
      .split("/")[0]
      .trim()
      .toLowerCase();

    if (hash) {
      return hash;
    }

    const activeSection = document.querySelector(
      '[data-page].active,' +
      '[data-page]:not([hidden]),' +
      '.page-section.active,' +
      '.route-page.active'
    );

    if (activeSection) {
      return String(
        activeSection.dataset.page ||
        activeSection.id ||
        "home"
      )
        .replace(/^page-/, "")
        .toLowerCase();
    }

    return "home";
  }

  function updateNavigationVisibility() {
    const frontVisible = isActualFrontPageVisible();
    const html = document.documentElement;
    const header = document.querySelector(".site-header");

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

    const currentPage = currentPageName();

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
          !frontVisible &&
          (
            linkPage === currentPage ||
            (
              currentPage === "" &&
              linkPage === "home"
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

  let updateTimer = null;

  function scheduleUpdate() {
    window.clearTimeout(updateTimer);

    updateTimer = window.setTimeout(
      updateNavigationVisibility,
      30
    );
  }

  document.addEventListener(
    "click",
    function (event) {
      const link = event.target.closest(
        ".site-header .nav-links a"
      );

      if (link) {
        const links =
          document.querySelector(
            ".site-header .nav-links"
          );

        const toggle =
          document.querySelector(
            ".site-header .nav-toggle"
          );

        links?.classList.remove("open");

        toggle?.setAttribute(
          "aria-expanded",
          "false"
        );

        window.setTimeout(scheduleUpdate, 0);
        window.setTimeout(scheduleUpdate, 150);
        window.setTimeout(scheduleUpdate, 500);
      }
    },
    true
  );

  window.addEventListener(
    "hashchange",
    scheduleUpdate
  );

  window.addEventListener(
    "popstate",
    scheduleUpdate
  );

  window.addEventListener(
    "pageshow",
    scheduleUpdate
  );

  window.addEventListener(
    "scroll",
    scheduleUpdate,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    scheduleUpdate
  );

  const observer = new MutationObserver(
    scheduleUpdate
  );

  observer.observe(
    document.documentElement,
    {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: [
        "class",
        "style",
        "hidden",
        "aria-hidden"
      ]
    }
  );

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      scheduleUpdate,
      { once: true }
    );
  } else {
    scheduleUpdate();
  }

  window.setTimeout(scheduleUpdate, 200);
  window.setTimeout(scheduleUpdate, 800);
})();