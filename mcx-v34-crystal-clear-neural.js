(function () {
  "use strict";

  if (window.__MCX_V34_CRYSTAL_CLEAR_NEURAL__) {
    return;
  }

  window.__MCX_V34_CRYSTAL_CLEAR_NEURAL__ = true;

  function removeWelcomeAudio() {
    var toggle = document.getElementById("mcx-v33-audio-toggle");

    if (toggle) {
      toggle.remove();
    }

    /*
     * Stop any V33 welcome audio element or Audio object
     * that may already have been created by an older cached script.
     */
    document.querySelectorAll(
      'audio[src*="mcx-premium-intro-v33"]'
    ).forEach(function (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.removeAttribute("src");
        audio.load();
        audio.remove();
      } catch (error) {
        /* Ignore audio cleanup errors. */
      }
    });
  }

  function sharpenNetwork() {
    var network = document.getElementById("mi-neural-network");

    if (!network) {
      return;
    }

    network.setAttribute("shape-rendering", "geometricPrecision");
    network.setAttribute("preserveAspectRatio", "xMidYMid slice");

    network.querySelectorAll(".mi-neural-line").forEach(
      function (line) {
        line.setAttribute("vector-effect", "non-scaling-stroke");
      }
    );

    network.querySelectorAll(".mi-neural-pulse").forEach(
      function (pulse) {
        pulse.setAttribute("vector-effect", "non-scaling-stroke");
      }
    );
  }

  function initialize() {
    removeWelcomeAudio();
    sharpenNetwork();

    /*
     * The SVG may be rebuilt shortly after DOMContentLoaded,
     * so repeat only these lightweight adjustments.
     */
    window.setTimeout(sharpenNetwork, 120);
    window.setTimeout(sharpenNetwork, 650);
    window.setTimeout(removeWelcomeAudio, 800);
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
