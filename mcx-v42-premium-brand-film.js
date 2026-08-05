(function () {
  "use strict";

  if (window.__MCX_V42_BRAND_FILM__) {
    return;
  }

  window.__MCX_V42_BRAND_FILM__ = true;

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
    if (welcome.dataset.mcxV42Built === "true") {
      return;
    }

    welcome.dataset.mcxV42Built = "true";
    welcome.appendChild(make("mcx-v42-grain"));
    welcome.appendChild(make("mcx-v42-light"));
    welcome.appendChild(make("mcx-v42-rule"));
  }

  function buildBrand(neural) {
    if (neural.dataset.mcxV42Built === "true") {
      return;
    }

    neural.dataset.mcxV42Built = "true";
    neural.appendChild(make("mcx-v42-grain"));
    neural.appendChild(make("mcx-v42-plate"));
    neural.appendChild(make("mcx-v42-line-top"));
    neural.appendChild(make("mcx-v42-line-bottom"));

    var company = make("mcx-v42-company");
    company.textContent = "MI CORTEX X INC.";
    neural.appendChild(company);
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");

    if (!welcome || !neural || neural.dataset.mcxV42Started === "true") {
      return;
    }

    neural.dataset.mcxV42Started = "true";
    buildIntro(welcome);
    buildBrand(neural);

    root.classList.add("mcx-v42-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");
    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v42-light-in",
      "mcx-v42-rule-in",
      "mcx-v42-title-in",
      "mcx-v42-title-out",
      "mcx-v42-fade-out",
      "mcx-v42-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v42-brand-in",
      "mcx-v42-logo-in",
      "mcx-v42-lockup-in",
      "mcx-v42-final-out",
      "mcx-v42-finished"
    );

    /* 1. Light and gold rule establish the brand tone. */
    await sleep(140);
    welcome.classList.add("mcx-v42-light-in");
    await sleep(550);

    welcome.classList.add("mcx-v42-rule-in");
    await sleep(1000);

    /* 2. Company name appears. */
    welcome.classList.add("mcx-v42-title-in");
    await sleep(2400);

    /* 3. Company name exits cleanly. */
    welcome.classList.remove("mcx-v42-title-in");
    welcome.classList.add("mcx-v42-title-out");
    await sleep(850);

    /* 4. Transition into the brand film stage. */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v42-brand-in");
    welcome.classList.add("mcx-v42-fade-out");
    await sleep(1100);

    welcome.classList.add("mcx-v42-hidden");

    /* 5. Existing company logo appears. */
    neural.classList.remove("mcx-v42-brand-in");
    neural.classList.add("mcx-v42-logo-in");
    await sleep(2600);

    /* 6. Official company lockup appears. */
    neural.classList.remove("mcx-v42-logo-in");
    neural.classList.add("mcx-v42-lockup-in");
    await sleep(1800);

    /* 7. Elegant dissolve into the existing front page. */
    neural.classList.remove("mcx-v42-lockup-in");
    neural.classList.add("mcx-v42-final-out");
    await sleep(1400);

    neural.classList.add("mcx-v42-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v42-active");
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
