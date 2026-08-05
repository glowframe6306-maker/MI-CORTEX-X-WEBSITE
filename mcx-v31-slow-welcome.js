(function () {
  "use strict";

  if (window.__MCX_V31_SLOW_WELCOME__) {
    return;
  }

  window.__MCX_V31_SLOW_WELCOME__ = true;

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

  function buildHighQualityNeuralNetwork(svg) {
    if (!svg || svg.dataset.mcxV31Built === "true") {
      return;
    }

    svg.dataset.mcxV31Built = "true";
    svg.innerHTML = "";

    /*
     * More nodes and connections than V30 for a denser,
     * higher-quality neural field.
     */
    var nodes = [
      [45,95],[150,65],[270,115],[400,52],[540,110],[680,62],[830,125],
      [990,58],[1140,108],[1295,62],[1455,120],[1560,78],
      [80,245],[205,205],[335,280],[475,215],[620,300],[760,220],
      [915,290],[1060,210],[1210,285],[1360,215],[1510,270],
      [45,430],[170,385],[300,470],[445,385],[585,500],[725,405],
      [875,490],[1015,390],[1160,475],[1305,390],[1460,465],[1565,390],
      [75,625],[220,560],[365,665],[515,565],[660,690],[810,575],
      [960,680],[1110,565],[1260,675],[1415,565],[1545,655],
      [145,810],[330,760],[515,835],[710,760],[900,840],[1095,760],
      [1280,830],[1460,760]
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

      if (index % 4 === 0) {
        var pulse = svgElement("line", {
          x1: a[0],
          y1: a[1],
          x2: b[0],
          y2: b[1],
          class: "mi-neural-pulse"
        });

        pulse.style.animationDelay =
          ((index % 11) * -0.52) + "s";

        pulses.appendChild(pulse);
      }
    });

    nodes.forEach(function (point, index) {
      var major = index % 7 === 0;

      var halo = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: major ? 17 : 10.5,
        class: "mi-neural-node-halo"
      });

      halo.style.animationDelay =
        ((index % 13) * -0.29) + "s";

      var node = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: major ? 5.2 : 3.2,
        class: "mi-neural-node"
      });

      node.style.animationDelay =
        ((index % 15) * -0.23) + "s";

      nodeGroup.appendChild(halo);
      nodeGroup.appendChild(node);
    });

    svg.appendChild(lines);
    svg.appendChild(pulses);
    svg.appendChild(nodeGroup);
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
      window.setTimeout(finish, 4500);
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
      neural.dataset.mcxV31Started === "true"
    ) {
      return;
    }

    neural.dataset.mcxV31Started = "true";
    buildHighQualityNeuralNetwork(network);

    root.classList.add("mcx-v31-welcome-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v31-title-in",
      "mcx-v31-title-out",
      "mcx-v31-welcome-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v31-neural-visible",
      "mcx-v31-logo-visible",
      "mcx-v31-logo-out",
      "mcx-v31-neural-hold",
      "mcx-v31-neural-lift",
      "mcx-v31-finished"
    );

    /*
     * 1. Dark black screen.
     * Deep navy blurred presence slowly resolves to solid gold.
     */
    await sleep(250);
    welcome.classList.add("mcx-v31-title-in");

    /* Long, slow unblur and clear-title hold. */
    await sleep(6100);

    /* Slow title fade and blur out. */
    welcome.classList.remove("mcx-v31-title-in");
    welcome.classList.add("mcx-v31-title-out");
    await sleep(2000);

    /*
     * 2. Higher-quality opaque neural animation only.
     * Extended from 2 seconds to 4.5 seconds.
     */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v31-neural-visible");
    welcome.classList.add("mcx-v31-welcome-hidden");
    await sleep(4500);

    /*
     * 3. Logo appears slowly and remains for 5 seconds.
     */
    neural.classList.remove("mcx-v31-neural-visible");
    neural.classList.add("mcx-v31-logo-visible");
    await sleep(5000);

    /* 4. Logo slowly fades out. */
    neural.classList.remove("mcx-v31-logo-visible");
    neural.classList.add("mcx-v31-logo-out");
    await sleep(1800);

    /*
     * 5. Opaque neural page remains after logo.
     */
    neural.classList.remove("mcx-v31-logo-out");
    neural.classList.add("mcx-v31-neural-hold");
    await sleep(2200);

    /*
     * 6. Same opaque neural page lifts slowly.
     */
    neural.classList.remove("mcx-v31-neural-hold");
    void neural.offsetHeight;
    neural.classList.add("mcx-v31-neural-lift");

    await waitForLift(neural);

    neural.classList.add("mcx-v31-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v31-welcome-active");
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
