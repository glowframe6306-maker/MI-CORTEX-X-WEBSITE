(function () {
  "use strict";

  if (window.__MCX_V43_CINEMATIC_ENTRY__) {
    return;
  }

  window.__MCX_V43_CINEMATIC_ENTRY__ = true;

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
    if (welcome.dataset.mcxV43Built === "true") {
      return;
    }

    welcome.dataset.mcxV43Built = "true";
    welcome.appendChild(make("mcx-v43-aurora"));
    welcome.appendChild(make("mcx-v43-stars"));
    welcome.appendChild(make("mcx-v43-frame"));
    welcome.appendChild(make("mcx-v43-sweep"));
  }

  function buildBrand(neural) {
    if (neural.dataset.mcxV43Built === "true") {
      return;
    }

    neural.dataset.mcxV43Built = "true";
    neural.appendChild(make("mcx-v43-aurora"));
    neural.appendChild(make("mcx-v43-stars"));
    neural.appendChild(make("mcx-v43-stage"));
    neural.appendChild(make("mcx-v43-beam"));

    var company = make("mcx-v43-company");
    company.textContent = "MI CORTEX X INC.";
    neural.appendChild(company);
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");

    if (!welcome || !neural || neural.dataset.mcxV43Started === "true") {
      return;
    }

    neural.dataset.mcxV43Started = "true";
    buildIntro(welcome);
    buildBrand(neural);

    root.classList.add("mcx-v43-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v43-aurora-in",
      "mcx-v43-frame-in",
      "mcx-v43-sweep-run",
      "mcx-v43-title-in",
      "mcx-v43-title-out",
      "mcx-v43-fade-out",
      "mcx-v43-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v43-brand-in",
      "mcx-v43-logo-in",
      "mcx-v43-lockup-in",
      "mcx-v43-final-out",
      "mcx-v43-finished"
    );

    /* 1. Build atmosphere. */
    await sleep(140);
    welcome.classList.add("mcx-v43-aurora-in");
    await sleep(650);

    /* 2. Signature frame appears. */
    welcome.classList.add("mcx-v43-frame-in");
    await sleep(900);

    /* 3. Refined light sweep. */
    welcome.classList.add("mcx-v43-sweep-run");
    await sleep(850);

    /* 4. Company name appears. */
    welcome.classList.add("mcx-v43-title-in");
    await sleep(2500);

    /* 5. Company name exits. */
    welcome.classList.remove("mcx-v43-title-in");
    welcome.classList.add("mcx-v43-title-out");
    await sleep(850);

    /* 6. Transition to logo film. */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v43-brand-in");
    welcome.classList.add("mcx-v43-fade-out");
    await sleep(1150);

    welcome.classList.add("mcx-v43-hidden");

    /* 7. Logo reveal. */
    neural.classList.remove("mcx-v43-brand-in");
    neural.classList.add("mcx-v43-logo-in");
    await sleep(2800);

    /* 8. Official lockup. */
    neural.classList.remove("mcx-v43-logo-in");
    neural.classList.add("mcx-v43-lockup-in");
    await sleep(1900);

    /* 9. Elegant final fade to front page. */
    neural.classList.remove("mcx-v43-lockup-in");
    neural.classList.add("mcx-v43-final-out");
    await sleep(1450);

    neural.classList.add("mcx-v43-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v43-active");
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
