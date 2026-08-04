(function () {
  "use strict";

  if (window.__MCX_NEURAL_PAGE_LIFT_ONLY__) {
    return;
  }

  window.__MCX_NEURAL_PAGE_LIFT_ONLY__ = true;

  function initializeNeuralLift() {
    const intro = document.getElementById("mi-neural-intro");

    if (!intro) {
      return;
    }

    let liftStarted = false;
    let liftFinished = false;

    function startLift() {
      if (liftStarted || liftFinished) {
        return;
      }

      liftStarted = true;

      intro.classList.remove(
        "mcx-v25-finished",
        "mi-neural-finished"
      );

      intro.classList.add(
        "mcx-neural-lift-active"
      );

      intro.hidden = false;
      intro.setAttribute("aria-hidden", "false");
    }

    function finishLift() {
      if (liftFinished) {
        return;
      }

      liftFinished = true;

      intro.classList.add(
        "mcx-neural-lift-finished"
      );

      intro.setAttribute("aria-hidden", "true");
    }

    intro.addEventListener(
      "transitionend",
      function (event) {
        if (
          event.propertyName === "transform" &&
          intro.classList.contains("mcx-neural-lift-active")
        ) {
          finishLift();
        }
      }
    );

    const observer = new MutationObserver(function () {
      const shouldLift =
        intro.classList.contains("mi-neural-exiting") ||
        intro.classList.contains("mcx-v25-page-out") ||
        intro.classList.contains("mcx-v25-finished") ||
        intro.classList.contains("mi-neural-finished");

      if (shouldLift) {
        startLift();
      }
    });

    observer.observe(intro, {
      attributes: true,
      attributeFilter: ["class", "hidden", "aria-hidden"]
    });

    if (
      intro.classList.contains("mi-neural-exiting") ||
      intro.classList.contains("mcx-v25-page-out")
    ) {
      startLift();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeNeuralLift,
      { once: true }
    );
  } else {
    initializeNeuralLift();
  }
})();