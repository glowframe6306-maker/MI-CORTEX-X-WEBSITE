(function () {
  "use strict";

  if (window.__MCX_V41_MONOLITH_ENTRY__) {
    return;
  }

  window.__MCX_V41_MONOLITH_ENTRY__ = true;

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

  function buildIntro(welcome) {
    if (welcome.dataset.mcxV41Built === "true") {
      return;
    }

    welcome.dataset.mcxV41Built = "true";
    welcome.appendChild(make("mcx-v41-aurora"));

    var monolith = make("mcx-v41-monolith");
    monolith.appendChild(make("mcx-v41-scan"));
    welcome.appendChild(monolith);
  }

  function buildBrand(neural) {
    if (neural.dataset.mcxV41Built === "true") {
      return;
    }

    neural.dataset.mcxV41Built = "true";
    neural.appendChild(make("mcx-v41-ribbon"));
    neural.appendChild(make("mcx-v41-frame"));

    var company = make("mcx-v41-company");
    company.textContent = "MI CORTEX X INC.";
    neural.appendChild(company);
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");

    if (!welcome || !neural || neural.dataset.mcxV41Started === "true") {
      return;
    }

    neural.dataset.mcxV41Started = "true";
    buildIntro(welcome);
    buildBrand(neural);

    root.classList.add("mcx-v41-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v41-aurora-in",
      "mcx-v41-monolith-in",
      "mcx-v41-scan-run",
      "mcx-v41-title-in",
      "mcx-v41-title-out",
      "mcx-v41-out",
      "mcx-v41-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v41-brand-in",
      "mcx-v41-logo-in",
      "mcx-v41-lockup-in",
      "mcx-v41-reveal",
      "mcx-v41-finished"
    );

    /* 1. Aurora atmosphere forms. */
    await sleep(140);
    welcome.classList.add("mcx-v41-aurora-in");
    await sleep(850);

    /* 2. Glass monolith appears. */
    welcome.classList.add("mcx-v41-monolith-in");
    await sleep(1250);

    /* 3. Precision scan line runs through it. */
    welcome.classList.add("mcx-v41-scan-run");
    await sleep(1250);

    /* 4. Company name appears inside the monolith. */
    welcome.classList.add("mcx-v41-title-in");
    await sleep(2500);

    /* 5. Company name exits. */
    welcome.classList.remove("mcx-v41-title-in");
    welcome.classList.add("mcx-v41-title-out");
    await sleep(900);

    /* 6. Brand canvas replaces the monolith. */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v41-brand-in");
    welcome.classList.add("mcx-v41-out");
    await sleep(1300);

    welcome.classList.add("mcx-v41-hidden");

    /* 7. Existing company logo enters. */
    neural.classList.remove("mcx-v41-brand-in");
    neural.classList.add("mcx-v41-logo-in");
    await sleep(2800);

    /* 8. Official lockup appears. */
    neural.classList.remove("mcx-v41-logo-in");
    neural.classList.add("mcx-v41-lockup-in");
    await sleep(1900);

    /* 9. Elegant cross-fade to the existing front page. */
    neural.classList.remove("mcx-v41-lockup-in");
    neural.classList.add("mcx-v41-reveal");
    await sleep(1550);

    neural.classList.add("mcx-v41-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v41-active");
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
