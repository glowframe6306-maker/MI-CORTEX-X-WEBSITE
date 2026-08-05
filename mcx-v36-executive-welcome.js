(function () {
  "use strict";

  if (window.__MCX_V36_EXECUTIVE_REFINEMENT__) {
    return;
  }

  window.__MCX_V36_EXECUTIVE_REFINEMENT__ = true;

  function addCenterClarityLayer() {
    var neural = document.getElementById("mi-neural-intro");

    if (!neural) {
      return;
    }

    if (neural.querySelector(".mcx-v36-center-clarity")) {
      return;
    }

    var clarity = document.createElement("div");
    clarity.className = "mcx-v36-center-clarity";
    clarity.setAttribute("aria-hidden", "true");

    /*
     * Insert before the logo so the logo and tagline always remain above it.
     */
    var logo = neural.querySelector(".mi-logo-reveal");

    if (logo) {
      neural.insertBefore(clarity, logo);
    } else {
      neural.appendChild(clarity);
    }
  }

  function rebalancePulseClasses() {
    var pulses = document.querySelectorAll(
      "#mi-neural-intro .mi-neural-pulse"
    );

    pulses.forEach(function (pulse, index) {
      pulse.classList.remove(
        "mcx-pulse-slow",
        "mcx-pulse-medium",
        "mcx-pulse-fast"
      );

      /*
       * Executive balance:
       * 55% slow, 35% medium, 10% fast.
       */
      var slot = index % 20;

      if (slot < 11) {
        pulse.classList.add("mcx-pulse-slow");
      } else if (slot < 18) {
        pulse.classList.add("mcx-pulse-medium");
      } else {
        pulse.classList.add("mcx-pulse-fast");
      }

      pulse.style.animationDelay =
        (-0.73 * (index % 17)) + "s";
    });
  }

  function initialize() {
    addCenterClarityLayer();

    /*
     * The SVG can be rebuilt shortly after page load,
     * so apply the lightweight pulse balance again.
     */
    window.setTimeout(rebalancePulseClasses, 100);
    window.setTimeout(rebalancePulseClasses, 650);
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
