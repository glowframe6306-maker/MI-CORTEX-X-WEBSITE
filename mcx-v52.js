(function () {
  "use strict";

  if (window.__MCX_V52_CURTAIN_WELCOME__) return;
  window.__MCX_V52_CURTAIN_WELCOME__ = true;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function make(className) {
    const element = document.createElement("div");
    element.className = className;
    element.setAttribute("aria-hidden", "true");
    return element;
  }

  function buildCurtainStage(welcome) {
    if (welcome.dataset.mcxV52Built === "true") return;

    welcome.dataset.mcxV52Built = "true";
    welcome.appendChild(make("mcx-v52-curtain mcx-v52-left"));
    welcome.appendChild(make("mcx-v52-curtain mcx-v52-right"));
    welcome.appendChild(make("mcx-v52-center-seam"));
  }

  function buildAnimationStage(neural) {
    if (neural.dataset.mcxV52Built === "true") return;

    neural.dataset.mcxV52Built = "true";
    neural.appendChild(make("mcx-v52-aurora"));
    neural.appendChild(make("mcx-v52-ribbon"));
    neural.appendChild(make("mcx-v52-horizon"));

    for (let index = 0; index < 52; index += 1) {
      const particle = make("mcx-v52-particle");
      particle.style.left = (5 + ((index * 19) % 90)) + "%";
      particle.style.top = (7 + ((index * 31) % 84)) + "%";
      particle.style.setProperty("--d", (4 + ((index % 7) * 0.62)) + "s");
      particle.style.setProperty("--delay", (-0.44 * (index % 11)) + "s");
      particle.style.setProperty("--x", (((index % 9) - 4) * 6) + "px");
      neural.appendChild(particle);
    }

    const brand = make("mcx-v52-brand");

    const name = document.createElement("div");
    name.className = "mcx-v52-brand-name";
    name.textContent = "MI CORTEX X INC.";

    const points = document.createElement("div");
    points.className = "mcx-v52-points";
    points.innerHTML =
      '<span>INTELLIGENCE</span>' +
      '<span class="mcx-v52-dot">•</span>' +
      '<span>INNOVATION</span>' +
      '<span class="mcx-v52-dot">•</span>' +
      '<span>INFINITY</span>';

    brand.appendChild(name);
    brand.appendChild(points);
    neural.appendChild(brand);
  }

  async function run() {
    const root = document.documentElement;
    const body = document.body;
    const welcome = document.getElementById("welcome-screen");
    const neural = document.getElementById("mi-neural-intro");

    if (!welcome || !neural || neural.dataset.mcxV52Started === "true") return;

    neural.dataset.mcxV52Started = "true";

    buildCurtainStage(welcome);
    buildAnimationStage(neural);

    root.classList.add("mcx-v52-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    neural.hidden = false;

    /* 1. Closed curtain appears first. */
    await sleep(500);

    /* 2. Center seam appears. */
    welcome.classList.add("mcx-v52-seam-in");
    await sleep(900);

    /* 3. MI CORTEX X appears from deep blur to sharp. */
    welcome.classList.add("mcx-v52-title-in");
    await sleep(6800);

    /* 4. MI CORTEX X leaves. */
    welcome.classList.remove("mcx-v52-title-in");
    welcome.classList.add("mcx-v52-title-out");
    await sleep(1150);

    /* 5. Background animation starts behind the closed curtain. */
    neural.classList.add("mcx-v52-show");
    await sleep(220);

    /* 6. Curtain opens once at a normal, smooth speed. */
    welcome.classList.remove(
      "mcx-v52-half-open",
      "mcx-v52-curtain-breathe"
    );

    void welcome.offsetHeight;
    welcome.classList.add("mcx-v52-open");

    await sleep(3200);
    welcome.classList.add("mcx-v52-hidden");

    /* 7. Animation continues briefly. */
    await sleep(1900);

    /* 8. Existing logo enters with cinematic animation. */
    neural.classList.remove("mcx-v52-show");
    neural.classList.add("mcx-v52-logo-in");
    await sleep(4300);

    /* 9. Whole animation page lifts upward with the logo. */
    neural.classList.remove("mcx-v52-logo-in");
    void neural.offsetHeight;
    neural.classList.add("mcx-v52-lift");
    await sleep(3600);

    neural.classList.add("mcx-v52-done");

    root.classList.remove("mcx-v52-active");
    body.classList.remove("intro-active");
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => run().catch(console.error),
      { once: true }
    );
  } else {
    run().catch(console.error);
  }
})();
