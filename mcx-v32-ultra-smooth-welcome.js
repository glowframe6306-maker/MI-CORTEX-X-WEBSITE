(function () {
  "use strict";

  if (window.__MCX_V32_ULTRA_SMOOTH_WELCOME__) {
    return;
  }

  window.__MCX_V32_ULTRA_SMOOTH_WELCOME__ = true;

  function sleep(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function svgElement(name, attrs) {
    var element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      name
    );

    Object.keys(attrs || {}).forEach(function (key) {
      element.setAttribute(key, String(attrs[key]));
    });

    return element;
  }

  function buildPremiumNeuralNetwork(svg) {
    if (!svg || svg.dataset.mcxV32Built === "true") {
      return;
    }

    svg.dataset.mcxV32Built = "true";
    svg.innerHTML = "";

    /*
     * Carefully spaced nodes provide a clear, premium network.
     * Fewer overlapping effects reduce stutter while preserving detail.
     */
    var nodes = [
      [40,90],[160,60],[290,110],[430,52],[575,110],[720,62],[865,118],
      [1010,58],[1155,108],[1300,62],[1450,115],[1570,78],
      [75,245],[205,205],[340,275],[480,215],[625,295],[770,220],
      [915,285],[1060,210],[1205,280],[1350,215],[1505,268],
      [42,430],[175,382],[310,465],[450,385],[595,495],[740,402],
      [885,485],[1030,390],[1170,470],[1315,390],[1460,458],[1570,392],
      [78,620],[220,560],[365,660],[515,565],[665,685],[815,575],
      [965,675],[1115,565],[1265,670],[1415,565],[1545,650],
      [150,808],[335,755],[520,830],[710,758],[900,835],[1090,758],
      [1280,825],[1460,758]
    ];

    var links = [
      [0,1],[0,12],[1,2],[1,13],[2,3],[2,13],[2,14],[3,4],[3,15],
      [4,5],[4,15],[4,16],[5,6],[5,17],[6,7],[6,17],[6,18],
      [7,8],[7,19],[8,9],[8,19],[8,20],[9,10],[9,21],[10,11],
      [10,21],[10,22],[11,22],
      [12,13],[12,23],[13,14],[13,24],[14,15],[14,25],[15,16],
      [15,26],[16,17],[16,27],[17,18],[17,28],[18,19],[18,29],
      [19,20],[19,30],[20,21],[20,31],[21,22],[21,32],[22,34],
      [23,24],[23,35],[24,25],[24,36],[25,26],[25,37],[26,27],
      [26,38],[27,28],[27,39],[28,29],[28,40],[29,30],[29,41],
      [30,31],[30,42],[31,32],[31,43],[32,33],[32,44],[33,34],
      [33,45],[34,45],
      [35,36],[35,46],[36,37],[36,47],[37,38],[37,48],[38,39],
      [38,49],[39,40],[39,49],[40,41],[40,50],[41,42],[41,51],
      [42,43],[42,51],[43,44],[43,52],[44,45],[44,53],
      [46,47],[47,48],[48,49],[49,50],[50,51],[51,52],[52,53],
      [0,13],[2,15],[4,17],[6,19],[8,21],[10,22],
      [12,25],[14,27],[16,29],[18,31],[20,33],
      [23,36],[25,38],[27,40],[29,42],[31,44],[33,45],
      [35,47],[37,49],[39,50],[41,52],[43,53]
    ];

    var lines = svgElement("g", { class: "mi-neural-lines" });
    var pulses = svgElement("g", { class: "mi-neural-pulses" });
    var nodeGroup = svgElement("g", { class: "mi-neural-nodes" });

    links.forEach(function (link, index) {
      var a = nodes[link[0]];
      var b = nodes[link[1]];

      lines.appendChild(svgElement("line", {
        x1: a[0],
        y1: a[1],
        x2: b[0],
        y2: b[1],
        class: index % 4 === 0
          ? "mi-neural-line mi-line-secondary"
          : "mi-neural-line"
      }));

      if (index % 5 === 0) {
        var pulse = svgElement("line", {
          x1: a[0],
          y1: a[1],
          x2: b[0],
          y2: b[1],
          class: "mi-neural-pulse"
        });

        pulse.style.animationDelay =
          ((index % 12) * -0.63) + "s";

        pulses.appendChild(pulse);
      }
    });

    nodes.forEach(function (point, index) {
      var major = index % 7 === 0;

      var halo = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: major ? 16 : 10,
        class: "mi-neural-node-halo"
      });

      halo.style.animationDelay =
        ((index % 13) * -0.38) + "s";

      var node = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: major ? 5 : 3.1,
        class: "mi-neural-node"
      });

      node.style.animationDelay =
        ((index % 15) * -0.31) + "s";

      nodeGroup.appendChild(halo);
      nodeGroup.appendChild(node);
    });

    svg.appendChild(lines);
    svg.appendChild(pulses);
    svg.appendChild(nodeGroup);
  }

  function ensureEnergyCore(neural) {
    if (neural.querySelector(".mcx-v32-energy-core")) {
      return;
    }

    var core = document.createElement("div");
    core.className = "mcx-v32-energy-core";
    core.setAttribute("aria-hidden", "true");
    neural.appendChild(core);
  }

  async function waitForLift(neural) {
    await new Promise(function (resolve) {
      var completed = false;

      function finish() {
        if (completed) {
          return;
        }

        completed = true;
        neural.removeEventListener("transitionend", onEnd);
        resolve();
      }

      function onEnd(event) {
        if (
          event.target === neural &&
          event.propertyName === "transform"
        ) {
          finish();
        }
      }

      neural.addEventListener("transitionend", onEnd);
      window.setTimeout(finish, 5100);
    });
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");
    var network = document.getElementById("mi-neural-network");

    if (
      !welcome ||
      !neural ||
      neural.dataset.mcxV32Started === "true"
    ) {
      return;
    }

    neural.dataset.mcxV32Started = "true";

    buildPremiumNeuralNetwork(network);
    ensureEnergyCore(neural);

    root.classList.add("mcx-v32-welcome-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v32-title-in",
      "mcx-v32-title-out",
      "mcx-v32-welcome-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v32-neural-visible",
      "mcx-v32-logo-visible",
      "mcx-v32-logo-out",
      "mcx-v32-neural-hold",
      "mcx-v32-neural-lift",
      "mcx-v32-finished"
    );

    /*
     * 1. Extra-strong blue blur.
     * It resolves in one continuous motion without stepping or jumping.
     */
    await sleep(260);
    welcome.classList.add("mcx-v32-title-in");

    /* 7.2-second smooth unblur plus a short clear hold. */
    await sleep(8100);

    /* Smooth title exit. */
    welcome.classList.remove("mcx-v32-title-in");
    welcome.classList.add("mcx-v32-title-out");
    await sleep(2000);

    /*
     * 2. High-quality neural-only stage.
     */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v32-neural-visible");
    welcome.classList.add("mcx-v32-welcome-hidden");
    await sleep(5200);

    /*
     * 3. Slow premium logo entrance and hold.
     */
    neural.classList.remove("mcx-v32-neural-visible");
    neural.classList.add("mcx-v32-logo-visible");
    await sleep(5600);

    /*
     * 4. Slow smooth logo exit.
     */
    neural.classList.remove("mcx-v32-logo-visible");
    neural.classList.add("mcx-v32-logo-out");
    await sleep(2000);

    /*
     * 5. Full opaque neural screen remains.
     */
    neural.classList.remove("mcx-v32-logo-out");
    neural.classList.add("mcx-v32-neural-hold");
    await sleep(2500);

    /*
     * 6. One uninterrupted, GPU-composited page lift.
     */
    neural.classList.remove("mcx-v32-neural-hold");
    void neural.offsetHeight;
    neural.classList.add("mcx-v32-neural-lift");

    await waitForLift(neural);

    neural.classList.add("mcx-v32-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v32-welcome-active");
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
