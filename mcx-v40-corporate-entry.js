(function () {
  "use strict";

  if (window.__MCX_V40_CORPORATE_ENTRY__) {
    return;
  }

  window.__MCX_V40_CORPORATE_ENTRY__ = true;

  function sleep(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function make(className) {
    var element = document.createElement("div");
    element.className = className;
    element.setAttribute("aria-hidden", "true");
    return element;
  }

  function buildIntroDecor(welcome) {
    if (welcome.querySelector(".mcx-v40-hairline")) {
      return;
    }

    welcome.appendChild(make("mcx-v40-hairline"));
  }

  function buildBrandCanvas(neural) {
    if (neural.dataset.mcxV40Built === "true") {
      return;
    }

    neural.dataset.mcxV40Built = "true";

    neural.appendChild(make("mcx-v40-top-rule"));
    neural.appendChild(make("mcx-v40-bottom-rule"));
    neural.appendChild(make("mcx-v40-light-sweep"));

    var lockup = make("mcx-v40-company-lockup");
    lockup.textContent = "MI CORTEX X INC.";
    neural.appendChild(lockup);

    neural.appendChild(make("mcx-v40-curtain-left"));
    neural.appendChild(make("mcx-v40-curtain-right"));
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");

    if (!welcome || !neural || neural.dataset.mcxV40Started === "true") {
      return;
    }

    neural.dataset.mcxV40Started = "true";

    buildIntroDecor(welcome);
    buildBrandCanvas(neural);

    root.classList.add("mcx-v40-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v40-line-visible",
      "mcx-v40-title-visible",
      "mcx-v40-title-exit",
      "mcx-v40-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v40-canvas-visible",
      "mcx-v40-logo-visible",
      "mcx-v40-lockup-visible",
      "mcx-v40-curtain-reveal",
      "mcx-v40-finished"
    );

    /* 1. Restrained gold hairline. */
    await sleep(180);
    welcome.classList.add("mcx-v40-line-visible");
    await sleep(1200);

    /* 2. Company name. */
    welcome.classList.add("mcx-v40-title-visible");
    await sleep(2400);

    /* 3. Company name exits. */
    welcome.classList.remove("mcx-v40-title-visible");
    welcome.classList.add("mcx-v40-title-exit");
    await sleep(850);

    /* 4. Brand canvas appears. */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v40-canvas-visible");
    welcome.classList.add("mcx-v40-hidden");
    await sleep(1450);

    /* 5. Existing logo is introduced. */
    neural.classList.remove("mcx-v40-canvas-visible");
    neural.classList.add("mcx-v40-logo-visible");
    await sleep(2700);

    /* 6. Official lockup appears. */
    neural.classList.remove("mcx-v40-logo-visible");
    neural.classList.add("mcx-v40-lockup-visible");
    await sleep(1900);

    /* 7. Corporate curtain reveal. */
    neural.classList.remove("mcx-v40-lockup-visible");
    neural.classList.add("mcx-v40-curtain-reveal");
    await sleep(2350);

    neural.classList.add("mcx-v40-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v40-active");
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
