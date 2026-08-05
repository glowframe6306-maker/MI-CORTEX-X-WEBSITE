(function () {
  "use strict";

  if (window.__MCX_V29_EXACT_WELCOME__) {
    return;
  }

  window.__MCX_V29_EXACT_WELCOME__ = true;

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

  function buildNeuralNetwork(svg) {
    if (!svg || svg.dataset.mcxV29Built === "true") {
      return;
    }

    svg.dataset.mcxV29Built = "true";
    svg.innerHTML = "";

    var nodes = [
      [70,125],[205,92],[365,150],[515,72],[735,125],[970,82],
      [1210,130],[1455,85],[95,310],[260,255],[430,345],[1175,290],
      [1370,310],[1520,245],[65,565],[215,680],[390,590],[550,755],
      [735,670],[930,760],[1110,640],[1265,735],[1455,610],[1540,770],
      [320,820],[710,840],[1160,825],[1375,850]
    ];

    var links = [
      [0,1],[0,8],[1,2],[1,9],[2,3],[2,9],[3,4],[4,5],[5,6],
      [5,11],[6,7],[6,11],[6,12],[7,13],[8,9],[8,14],[9,10],
      [9,14],[10,15],[10,16],[11,12],[11,20],[12,13],[12,22],
      [13,22],[14,15],[15,16],[15,24],[16,17],[16,18],[17,18],
      [17,24],[18,19],[18,25],[19,20],[19,26],[20,21],[20,22],
      [20,26],[21,22],[21,26],[21,27],[22,23],[22,27],[24,25],
      [25,26],[26,27]
    ];

    var lines = svgElement("g", { class: "mi-neural-lines" });
    var pulses = svgElement("g", { class: "mi-neural-pulses" });
    var nodeGroup = svgElement("g", { class: "mi-neural-nodes" });

    links.forEach(function (link, index) {
      var a = nodes[link[0]];
      var b = nodes[link[1]];

      lines.appendChild(svgElement("line", {
        x1: a[0], y1: a[1], x2: b[0], y2: b[1],
        class: index % 3 === 0
          ? "mi-neural-line mi-line-secondary"
          : "mi-neural-line"
      }));

      if (index % 5 === 0) {
        var pulse = svgElement("line", {
          x1: a[0], y1: a[1], x2: b[0], y2: b[1],
          class: "mi-neural-pulse"
        });
        pulse.style.animationDelay = ((index % 7) * -0.55) + "s";
        pulses.appendChild(pulse);
      }
    });

    nodes.forEach(function (point, index) {
      var halo = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: index % 6 === 0 ? 15 : 10,
        class: "mi-neural-node-halo"
      });
      halo.style.animationDelay = ((index % 8) * -0.31) + "s";

      var node = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: index % 6 === 0 ? 4.8 : 3.2,
        class: "mi-neural-node"
      });
      node.style.animationDelay = ((index % 10) * -0.24) + "s";

      nodeGroup.appendChild(halo);
      nodeGroup.appendChild(node);
    });

    svg.appendChild(lines);
    svg.appendChild(pulses);
    svg.appendChild(nodeGroup);
  }

  async function run() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");
    var network = document.getElementById("mi-neural-network");

    if (!welcome || !neural || neural.dataset.mcxV29Started === "true") {
      return;
    }

    neural.dataset.mcxV29Started = "true";
    buildNeuralNetwork(network);

    root.classList.add("mcx-v29-welcome-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");
    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v29-title-in",
      "mcx-v29-title-out",
      "mcx-v29-welcome-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v29-neural-visible",
      "mcx-v29-logo-visible",
      "mcx-v29-logo-out",
      "mcx-v29-neural-hold",
      "mcx-v29-neural-lift",
      "mcx-v29-finished"
    );

    /* 1. Black screen -> gold title blur in. */
    await sleep(120);
    welcome.classList.add("mcx-v29-title-in");

    /* Hold the clear title. */
    await sleep(2800);

    /* Gold title blur out. */
    welcome.classList.remove("mcx-v29-title-in");
    welcome.classList.add("mcx-v29-title-out");
    await sleep(1250);

    /* 2. Neural animation begins immediately after title. */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v29-neural-visible");
    welcome.classList.add("mcx-v29-welcome-hidden");
    await sleep(1900);

    /* 3. Logo and tagline appear. */
    neural.classList.remove("mcx-v29-neural-visible");
    neural.classList.add("mcx-v29-logo-visible");
    await sleep(3000);

    /* 4. Logo fades out. */
    neural.classList.remove("mcx-v29-logo-visible");
    neural.classList.add("mcx-v29-logo-out");
    await sleep(1150);

    /* 5. Blank neural animation remains briefly. */
    neural.classList.remove("mcx-v29-logo-out");
    neural.classList.add("mcx-v29-neural-hold");
    await sleep(1200);

    /* 6. The complete neural page lifts upward. */
    neural.classList.remove("mcx-v29-neural-hold");
    void neural.offsetHeight;
    neural.classList.add("mcx-v29-neural-lift");

    await new Promise(function (resolve) {
      var done = false;

      function finish() {
        if (done) return;
        done = true;
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
      window.setTimeout(finish, 2700);
    });

    neural.classList.add("mcx-v29-finished");
    neural.setAttribute("aria-hidden", "true");
    root.classList.remove("mcx-v29-welcome-active");
    body.classList.remove("intro-active");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      run().catch(console.error);
    }, { once: true });
  } else {
    run().catch(console.error);
  }
})();
