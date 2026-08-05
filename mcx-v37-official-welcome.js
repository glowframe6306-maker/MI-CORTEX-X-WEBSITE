(function () {
  "use strict";

  if (window.__MCX_V37_OFFICIAL_WELCOME__) {
    return;
  }

  window.__MCX_V37_OFFICIAL_WELCOME__ = true;

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

  function buildOfficialNetwork(svg) {
    if (!svg || svg.dataset.mcxV37Built === "true") {
      return;
    }

    svg.dataset.mcxV37Built = "true";
    svg.innerHTML = "";

    var nodes = [
      [55,100],[180,70],[320,125],[470,62],[625,120],[790,70],
      [950,125],[1110,65],[1270,118],[1430,72],[1550,112],
      [80,270],[230,220],[380,310],[530,225],[690,315],[850,230],
      [1010,305],[1170,220],[1325,300],[1485,235],
      [45,475],[200,400],[350,510],[505,405],[660,520],[820,410],
      [980,515],[1140,405],[1295,505],[1460,415],[1560,500],
      [85,680],[245,600],[410,710],[575,610],[745,720],[915,610],
      [1085,705],[1255,610],[1425,700],[1545,630],
      [180,835],[400,780],[630,845],[860,785],[1090,840],[1320,790]
    ];

    var links = [
      [0,1],[0,11],[1,2],[1,12],[2,3],[2,12],[2,13],[3,4],[3,14],
      [4,5],[4,14],[4,15],[5,6],[5,16],[6,7],[6,16],[6,17],
      [7,8],[7,18],[8,9],[8,18],[8,19],[9,10],[9,20],[10,20],
      [11,12],[11,21],[12,13],[12,22],[13,14],[13,23],[14,15],
      [14,24],[15,16],[15,25],[16,17],[16,26],[17,18],[17,27],
      [18,19],[18,28],[19,20],[19,29],[20,30],
      [21,22],[21,31],[22,23],[22,32],[23,24],[23,33],[24,25],
      [24,34],[25,26],[25,35],[26,27],[26,36],[27,28],[27,37],
      [28,29],[28,38],[29,30],[29,39],[30,40],
      [31,32],[31,41],[32,33],[32,42],[33,34],[33,43],[34,35],
      [34,44],[35,36],[35,44],[36,37],[36,45],[37,38],[37,46],
      [38,39],[38,46],[39,40],[39,47],
      [41,42],[42,43],[43,44],[44,45],[45,46],[46,47],
      [0,12],[2,14],[4,16],[6,18],[8,20],
      [11,23],[13,25],[15,27],[17,29],[19,30],
      [21,33],[23,35],[25,37],[27,39],[29,40],
      [31,42],[33,44],[35,45],[37,46],[39,47]
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

      if (index % 6 === 0) {
        var pulse = svgElement("line", {
          x1: a[0],
          y1: a[1],
          x2: b[0],
          y2: b[1],
          class: "mi-neural-pulse"
        });

        pulse.style.animationDelay =
          (-0.67 * (index % 12)) + "s";

        pulses.appendChild(pulse);
      }
    });

    nodes.forEach(function (point, index) {
      var major = index % 8 === 0;

      var halo = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: major ? 15 : 9,
        class: "mi-neural-node-halo"
      });

      halo.style.animationDelay =
        (-0.31 * (index % 13)) + "s";

      var node = svgElement("circle", {
        cx: point[0],
        cy: point[1],
        r: major ? 4.8 : 3,
        class: "mi-neural-node"
      });

      node.style.animationDelay =
        (-0.27 * (index % 15)) + "s";

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
      window.setTimeout(finish, 3600);
    });
  }

  async function runOfficialWelcome() {
    var root = document.documentElement;
    var body = document.body;
    var welcome = document.getElementById("welcome-screen");
    var neural = document.getElementById("mi-neural-intro");
    var network = document.getElementById("mi-neural-network");

    if (
      !welcome ||
      !neural ||
      neural.dataset.mcxV37Started === "true"
    ) {
      return;
    }

    neural.dataset.mcxV37Started = "true";
    buildOfficialNetwork(network);

    root.classList.add("mcx-v37-intro-active");
    body.classList.add("intro-active");

    welcome.hidden = false;
    welcome.setAttribute("aria-hidden", "false");

    neural.hidden = false;
    neural.setAttribute("aria-hidden", "true");

    welcome.classList.remove(
      "intro-exiting",
      "mcx-v37-title-visible",
      "mcx-v37-title-exit",
      "mcx-v37-hidden"
    );

    neural.classList.remove(
      "mi-neural-visible",
      "mi-logo-entering",
      "mi-logo-settled",
      "mi-logo-leaving",
      "mi-neural-exiting",
      "mcx-v37-neural-visible",
      "mcx-v37-logo-visible",
      "mcx-v37-logo-exit",
      "mcx-v37-neural-hold",
      "mcx-v37-page-lift",
      "mcx-v37-finished"
    );

    /* 1. Official black screen and gold company name. */
    await sleep(180);
    welcome.classList.add("mcx-v37-title-visible");

    /* Slow reveal plus clear hold. */
    await sleep(5550);

    /* 2. Smooth title exit. */
    welcome.classList.remove("mcx-v37-title-visible");
    welcome.classList.add("mcx-v37-title-exit");
    await sleep(1450);

    /* 3. Official neural brand field. */
    neural.setAttribute("aria-hidden", "false");
    neural.classList.add("mcx-v37-neural-visible");
    welcome.classList.add("mcx-v37-hidden");
    await sleep(2800);

    /* 4. Company logo and brand statement. */
    neural.classList.remove("mcx-v37-neural-visible");
    neural.classList.add("mcx-v37-logo-visible");
    await sleep(3900);

    /* 5. Logo exits; neural field stays fully opaque. */
    neural.classList.remove("mcx-v37-logo-visible");
    neural.classList.add("mcx-v37-logo-exit");
    await sleep(1450);

    /* 6. Clean neural-only hold. */
    neural.classList.remove("mcx-v37-logo-exit");
    neural.classList.add("mcx-v37-neural-hold");
    await sleep(1200);

    /* 7. The complete official neural page lifts. */
    neural.classList.remove("mcx-v37-neural-hold");
    void neural.offsetHeight;
    neural.classList.add("mcx-v37-page-lift");

    await waitForLift(neural);

    neural.classList.add("mcx-v37-finished");
    neural.setAttribute("aria-hidden", "true");

    root.classList.remove("mcx-v37-intro-active");
    body.classList.remove("intro-active");
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        runOfficialWelcome().catch(console.error);
      },
      { once: true }
    );
  } else {
    runOfficialWelcome().catch(console.error);
  }
})();
