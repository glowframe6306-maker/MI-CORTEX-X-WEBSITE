(function () {
  "use strict";

  if (window.__MCX_V33_PREMIUM_EFFECTS__) {
    return;
  }

  window.__MCX_V33_PREMIUM_EFFECTS__ = true;

  function addPremiumLayers() {
    var neural = document.getElementById("mi-neural-intro");

    if (!neural) {
      return;
    }

    if (!neural.querySelector(".mcx-v33-mist-layer")) {
      var mistLayer = document.createElement("div");
      mistLayer.className = "mcx-v33-mist-layer";
      mistLayer.setAttribute("aria-hidden", "true");

      ["a", "b", "c"].forEach(function (name) {
        var mist = document.createElement("div");
        mist.className =
          "mcx-v33-mist mcx-v33-mist-" + name;
        mistLayer.appendChild(mist);
      });

      neural.appendChild(mistLayer);
    }

    if (!neural.querySelector(".mcx-v33-logo-bloom")) {
      var bloom = document.createElement("div");
      bloom.className = "mcx-v33-logo-bloom";
      bloom.setAttribute("aria-hidden", "true");
      neural.appendChild(bloom);
    }
  }

  function varyPulseSpeeds() {
    var pulses = document.querySelectorAll(
      "#mi-neural-intro .mi-neural-pulse"
    );

    var classes = [
      "mcx-pulse-slow",
      "mcx-pulse-medium",
      "mcx-pulse-fast"
    ];

    pulses.forEach(function (pulse, index) {
      pulse.classList.remove.apply(
        pulse.classList,
        classes
      );

      pulse.classList.add(
        classes[index % classes.length]
      );

      /*
       * Deterministic variation avoids random reflow
       * while making the network feel organic.
       */
      pulse.style.animationDelay =
        (-0.71 * (index % 13)) + "s";
    });
  }

  function setupAudio() {
    var source =
      "./assets/audio/mcx-premium-intro-v33.wav";

    var audio = new Audio(source);
    audio.preload = "auto";
    audio.volume = 0.34;
    audio.loop = false;

    var toggle = document.createElement("button");
    toggle.id = "mcx-v33-audio-toggle";
    toggle.type = "button";
    toggle.title = "Toggle welcome sound";
    toggle.setAttribute("aria-label", "Toggle welcome sound");
    toggle.textContent = "â™ª";

    document.body.appendChild(toggle);

    var manuallyMuted = false;

    function updateButton() {
      toggle.textContent =
        audio.muted || manuallyMuted ? "Ã—" : "â™ª";
    }

    function tryPlay() {
      if (manuallyMuted) {
        return;
      }

      var result = audio.play();

      if (result && typeof result.catch === "function") {
        result.catch(function () {
          /*
           * Browser autoplay policy may block sound.
           * Resume on the user's first interaction.
           */
        });
      }
    }

    function resumeFromGesture() {
      if (
        !manuallyMuted &&
        audio.paused &&
        document.documentElement.classList.contains(
          "mcx-v32-welcome-active"
        )
      ) {
        tryPlay();
      }
    }

    toggle.addEventListener("click", function () {
      manuallyMuted = !manuallyMuted;
      audio.muted = manuallyMuted;

      if (!manuallyMuted && audio.paused) {
        tryPlay();
      }

      updateButton();
    });

    ["pointerdown", "keydown", "touchstart"].forEach(
      function (eventName) {
        window.addEventListener(
          eventName,
          resumeFromGesture,
          { once: true, passive: true }
        );
      }
    );

    var observer = new MutationObserver(function () {
      var active =
        document.documentElement.classList.contains(
          "mcx-v32-welcome-active"
        );

      if (active && audio.currentTime === 0) {
        tryPlay();
      }

      if (!active && !audio.paused) {
        audio.pause();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    updateButton();

    if (
      document.documentElement.classList.contains(
        "mcx-v32-welcome-active"
      )
    ) {
      tryPlay();
    }
  }

  function initialize() {
    addPremiumLayers();

    /*
     * V32 builds the SVG during DOMContentLoaded.
     * Apply speed classes after that build is complete.
     */
    window.setTimeout(varyPulseSpeeds, 80);
    window.setTimeout(varyPulseSpeeds, 500);

    // Audio disabled by user
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

