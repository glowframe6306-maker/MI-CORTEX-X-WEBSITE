(function () {
  "use strict";

  if (window.__MCX_V39_LIGHT_GATE__) {
    return;
  }

  window.__MCX_V39_LIGHT_GATE__ = true;

  function sleep(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function el(className) {
    var node = document.createElement("div");
    node.className = className;
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function buildVault(welcome) {
    if (welcome.querySelector(".mcx-v39-vault")) {
      return;
    }

    var vault = el("mcx-v39-vault");
    vault.appendChild(el("mcx-v39-panel mcx-v39-panel-left"));
    vault.appendChild(el("mcx-v39-panel mcx-v39-panel-right"));
    vault.appendChild(el("mcx-v39-seam"));
    welcome.appendChild(vault);
  }

  function buildLightChamber(neural) {
    if (neural.dataset.mcxV39Built === "true") {
      return;
    }

    neural.dataset.mcxV39Built = "true";

    neural.appendChild(el("mcx-v39-light-column"));
    neural.appendChild(el("mcx-v39-floor"));

    var frame = el("mcx-v39-frame");
    frame.appendChild(el("mcx-v39-corner mcx-v39-corner-tl"));
    frame.appendChild(el("mcx-v39-corner mcx-v39-corner-tr"));
    frame.appendChild(el("mcx-v39-corner mcx-v39-corner-bl"));
    frame.appendChild(el("mcx-v39-corner mcx-v39-corner-br"));
    neural.appendChild(frame);

    var lockup = el("mcx-v39-company-lockup");
    lockup.textContent = "MI CORTEX X INC.";
    neural.appendChild(lockup);

    neural.appendChild(el("mcx-v39-gate-left"));
    neural.appendChild(el("mcx-v39-gate-right"));
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");

    if (!welcome || !neural || neural.dataset.mcxV39Started === "true") {
      return;
    }

    neural.dataset.mcxV39Started = "true";

    buildVault(welcome);
    buildLightChamber(neural);

    root.classList.add("mcx-v39-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v39-seam-in",
      "mcx-v39-title-in",
      "mcx-v39-title-out",
      "mcx-v39-open",
      "mcx-v39-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v39-chamber-visible",
      "mcx-v39-logo-visible",
      "mcx-v39-signature-visible",
      "mcx-v39-final-reveal",
      "mcx-v39-finished"
    );

    /* 1. Black vault seam lights up. */
    await sleep(160);
    welcome.classList.add("mcx-v39-seam-in");
    await sleep(1450);

    /* 2. Company name appears. */
    welcome.classList.add("mcx-v39-title-in");
    await sleep(2500);

    /* 3. Company name exits. */
    welcome.classList.remove("mcx-v39-title-in");
    welcome.classList.add("mcx-v39-title-out");
    await sleep(950);

    /* 4. Vault doors open. */
    welcome.classList.add("mcx-v39-open");
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v39-chamber-visible");
    await sleep(2350);

    welcome.classList.add("mcx-v39-hidden");

    /* 5. Existing logo enters the brand chamber. */
    neural.classList.remove("mcx-v39-chamber-visible");
    neural.classList.add("mcx-v39-logo-visible");
    await sleep(3000);

    /* 6. Official company lockup appears. */
    neural.classList.remove("mcx-v39-logo-visible");
    neural.classList.add("mcx-v39-signature-visible");
    await sleep(2200);

    /* 7. Final light gate opens to the front page. */
    neural.classList.remove("mcx-v39-signature-visible");
    neural.classList.add("mcx-v39-final-reveal");
    await sleep(2650);

    neural.classList.add("mcx-v39-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v39-active");
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
