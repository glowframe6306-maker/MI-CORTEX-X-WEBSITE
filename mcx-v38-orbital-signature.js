(function () {
  "use strict";

  if (window.__MCX_V38_ORBITAL_SIGNATURE__) {
    return;
  }

  window.__MCX_V38_ORBITAL_SIGNATURE__ = true;

  function sleep(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function createElement(className, tagName) {
    var element = document.createElement(tagName || "div");
    element.className = className;
    element.setAttribute("aria-hidden", "true");
    return element;
  }

  function buildOrbitalScene(neural) {
    if (!neural || neural.dataset.mcxV38Built === "true") {
      return;
    }

    neural.dataset.mcxV38Built = "true";

    var grid = createElement("mcx-v38-grid");

    var system = createElement("mcx-v38-orbital-system");
    system.appendChild(createElement("mcx-v38-ring mcx-v38-ring-one"));
    system.appendChild(createElement("mcx-v38-ring mcx-v38-ring-two"));
    system.appendChild(createElement("mcx-v38-ring mcx-v38-ring-three"));
    system.appendChild(createElement("mcx-v38-core"));

    var brandName = createElement("mcx-v38-brand-name");
    brandName.textContent = "MI CORTEX X INC.";

    var aperture = createElement("mcx-v38-aperture");

    neural.appendChild(grid);
    neural.appendChild(system);
    neural.appendChild(brandName);
    neural.appendChild(aperture);
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");

    if (
      !welcome ||
      !neural ||
      neural.dataset.mcxV38Started === "true"
    ) {
      return;
    }

    neural.dataset.mcxV38Started = "true";
    buildOrbitalScene(neural);

    root.classList.add("mcx-v38-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v38-line-in",
      "mcx-v38-name-in",
      "mcx-v38-name-out",
      "mcx-v38-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v38-orbit-visible",
      "mcx-v38-logo-visible",
      "mcx-v38-signature-hold",
      "mcx-v38-reveal",
      "mcx-v38-finished"
    );

    /* 1. Gold signature line appears on black. */
    await sleep(160);
    welcome.classList.add("mcx-v38-line-in");
    await sleep(1500);

    /* 2. Company name signs onto the screen. */
    welcome.classList.add("mcx-v38-name-in");
    await sleep(2700);

    /* 3. Signature leaves. */
    welcome.classList.remove("mcx-v38-name-in");
    welcome.classList.add("mcx-v38-name-out");
    await sleep(1050);

    /* 4. Entirely new orbital brand environment. */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v38-orbit-visible");
    welcome.classList.add("mcx-v38-hidden");
    await sleep(2200);

    /* 5. Existing logo enters inside the orbital system. */
    neural.classList.remove("mcx-v38-orbit-visible");
    neural.classList.add("mcx-v38-logo-visible");
    await sleep(3000);

    /* 6. Official company signature appears. */
    neural.classList.remove("mcx-v38-logo-visible");
    neural.classList.add("mcx-v38-signature-hold");
    await sleep(2200);

    /* 7. Circular aperture opens to the existing front page. */
    neural.classList.remove("mcx-v38-signature-hold");
    neural.classList.add("mcx-v38-reveal");
    await sleep(2850);

    neural.classList.add("mcx-v38-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v38-active");
    body.classList.remove("intro-active");
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        run().catch(console.error);
      },
      { once: true }
    );
  } else {
    run().catch(console.error);
  }
})();
