(function () {
  "use strict";

  if (window.__MCX_V27_DIRECT_WELCOME_FLOW__) {
    return;
  }

  window.__MCX_V27_DIRECT_WELCOME_FLOW__ = true;

  const root = document.documentElement;

  function finishIntro() {
    const intro = document.getElementById("mi-neural-intro");
    const frontPage = document.getElementById("mi-front-page");

    root.classList.remove("mcx-v27-intro-active");
    root.classList.add("mcx-v27-intro-done");

    if (frontPage) {
      frontPage.hidden = false;
      frontPage.removeAttribute("aria-hidden");
      frontPage.style.removeProperty("display");
      frontPage.style.removeProperty("visibility");
      frontPage.style.removeProperty("opacity");
    }

    if (intro) {
      intro.setAttribute("aria-hidden", "true");
    }
  }

  function initialize() {
    const intro = document.getElementById("mi-neural-intro");

    if (!intro) {
      finishIntro();
      return;
    }

    root.classList.add("mcx-v27-intro-active");
    root.classList.remove("mcx-v27-intro-done");

    function checkState() {
      if (
        intro.classList.contains("mcx-v25-finished") ||
        intro.classList.contains("mi-neural-finished")
      ) {
        finishIntro();
      }
    }

    const observer = new MutationObserver(checkState);

    observer.observe(intro, {
      attributes: true,
      attributeFilter: ["class", "hidden", "aria-hidden"]
    });

    intro.addEventListener(
      "transitionend",
      function (event) {
        if (
          event.propertyName === "transform" &&
          (
            intro.classList.contains("mcx-v25-page-out") ||
            intro.classList.contains("mi-neural-exiting")
          )
        ) {
          finishIntro();
          observer.disconnect();
        }
      }
    );

    checkState();
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