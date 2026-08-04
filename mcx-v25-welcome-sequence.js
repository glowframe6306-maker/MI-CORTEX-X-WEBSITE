(function () {
  "use strict";

  if (window.__MCX_V25_WELCOME_SEQUENCE__) {
    return;
  }

  window.__MCX_V25_WELCOME_SEQUENCE__ = true;

  function startWelcomeSequence() {
    const intro = document.getElementById("mi-neural-intro");

    if (!intro) {
      return;
    }

    intro.classList.remove(
      "mcx-v25-blur-stage",
      "mcx-v25-neural-stage",
      "mcx-v25-logo-stage",
      "mcx-v25-logo-out",
      "mcx-v25-page-out",
      "mcx-v25-finished",
      "mi-neural-exiting",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving"
    );

    intro.hidden = false;
    intro.setAttribute("aria-hidden", "false");

    window.setTimeout(function () {
      intro.classList.add("mcx-v25-blur-stage");
    }, 100);

    window.setTimeout(function () {
      intro.classList.add("mcx-v25-neural-stage");
    }, 950);

    window.setTimeout(function () {
      intro.classList.add("mcx-v25-logo-stage");
    }, 2600);

    window.setTimeout(function () {
      intro.classList.add("mcx-v25-logo-out");
    }, 5300);

    window.setTimeout(function () {
      intro.classList.add("mcx-v25-page-out");
    }, 6500);

    window.setTimeout(function () {
      intro.classList.add("mcx-v25-finished");
      intro.setAttribute("aria-hidden", "true");
    }, 8500);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      startWelcomeSequence,
      { once: true }
    );
  } else {
    startWelcomeSequence();
  }
})();