document.addEventListener('DOMContentLoaded', function () {
  if (window.__miWelcomeIntroInitialized) {
    return;
  }

  window.__miWelcomeIntroInitialized = true;

  const welcomeScreen = document.getElementById('welcome-screen');
  const welcomeStage = welcomeScreen ? welcomeScreen.querySelector('.welcome-stage') : null;
  const title = welcomeScreen ? welcomeScreen.querySelector('.welcome-title') : null;
  const robot = welcomeScreen ? welcomeScreen.querySelector('.intro-robot') : null;
  const body = document.body;
  const documentElement = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let titleFadeTimer = null;
  let titleClearTimer = null;
  let robotAssemblyTimer = null;
  let fallbackTimer = null;
  let transitionHandler = null;
  let hasStarted = false;

  const finalizeIntro = (options = {}) => {
    if (window.__miIntroFinalized) {
      return;
    }

    window.__miIntroFinalized = true;

    clearTimers();
    body.classList.remove('intro-active');
    body.classList.add('welcome-complete');
    documentElement.classList.add('welcome-complete');
    documentElement.style.overflow = '';
    body.style.overflow = '';

    if (transitionHandler) {
      welcomeScreen?.removeEventListener('transitionend', transitionHandler);
    }

    if (options.removeWelcomeScreen !== false) {
      if (welcomeScreen?.parentNode) {
        welcomeScreen.parentNode.removeChild(welcomeScreen);
      }
    }

    const neuralIntro = document.getElementById('mi-neural-intro');
    if (neuralIntro?.parentNode) {
      neuralIntro.parentNode.removeChild(neuralIntro);
    }

    window.dispatchEvent(new Event('resize'));
  };

  window.__miFinalizeIntro = finalizeIntro;

  const clearTimers = () => {
    if (titleFadeTimer) {
      window.clearTimeout(titleFadeTimer);
      titleFadeTimer = null;
    }
    if (titleClearTimer) {
      window.clearTimeout(titleClearTimer);
      titleClearTimer = null;
    }
    if (robotAssemblyTimer) {
      window.clearTimeout(robotAssemblyTimer);
      robotAssemblyTimer = null;
    }
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = null;
    }
  };

  const removeIntro = () => {
    if (!welcomeScreen || welcomeScreen.classList.contains('intro-exiting')) {
      return;
    }

    welcomeScreen.classList.add('intro-exiting');
    welcomeScreen.setAttribute('aria-hidden', 'true');

    if (transitionHandler) {
      welcomeScreen.removeEventListener('transitionend', transitionHandler);
    }

    transitionHandler = function () {
      finalizeIntro();
    };

    welcomeScreen.addEventListener('transitionend', transitionHandler, { once: true });
    fallbackTimer = window.setTimeout(function () {
      finalizeIntro();
    }, 2800);
  };

  const startIntroSequence = () => {
    if (!welcomeScreen || !welcomeStage || !title || hasStarted) {
      return;
    }

    hasStarted = true;
    body.classList.add('intro-active');
    documentElement.classList.remove('welcome-complete');
    body.classList.remove('welcome-complete');
    welcomeScreen.setAttribute('aria-hidden', 'false');
    welcomeScreen.classList.add('intro-visible');

    window.requestAnimationFrame(function () {
      title.classList.add('is-visible');
    });

    titleFadeTimer = window.setTimeout(function () {
      title.classList.add('is-clear');
    }, 1400);

    titleClearTimer = window.setTimeout(function () {
      title.classList.add('title-transforming');

      window.setTimeout(function () {
        if (welcomeScreen && welcomeScreen.isConnected) {
          welcomeScreen.setAttribute('aria-hidden', 'true');
          welcomeScreen.remove();
        }

        window.dispatchEvent(new CustomEvent('mi:letters-complete'));
      }, reducedMotion ? 500 : 1400);
    }, 5200);

    fallbackTimer = window.setTimeout(function () {
      removeIntro();
    }, reducedMotion ? 7000 : 11000);
  };

  if (welcomeScreen) {
    startIntroSequence();
  }

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const setActiveLink = () => {
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    navAnchors.forEach((anchor) => {
      anchor.classList.toggle('active', anchor.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
});

/* MI_NEURAL_LOGO_SEQUENCE_START */
(() => {
    if (window.__miNeuralIntroInitialized) {
        return;
    }

    window.__miNeuralIntroInitialized = true;

    "use strict";

    const INTRO_START_DELAY = 6600;
    const NETWORK_REVEAL_TIME = 2100;
    const LOGO_ZOOM_IN_TIME = 1900;
    const LOGO_ZOOM_OUT_TIME = 1500;
    const LOGO_HOLD_TIME = 900;
    const LOGO_FADE_TIME = 1200;
    const SCREEN_LIFT_TIME = 2200;
    const FALLBACK_TIME = 20000;

    const sleep = (milliseconds) =>
        new Promise((resolve) => window.setTimeout(resolve, milliseconds));

    const createSvgElement = (tagName, attributes = {}) => {
        const element = document.createElementNS(
            "http://www.w3.org/2000/svg",
            tagName
        );

        Object.entries(attributes).forEach(([name, value]) => {
            element.setAttribute(name, String(value));
        });

        return element;
    };

    const buildNeuralNetwork = (svg) => {
        if (!svg || svg.dataset.built === "true") {
            return;
        }

        svg.dataset.built = "true";

        const nodes = [
            [70, 125], [205, 92], [365, 150], [515, 72],
            [735, 125], [970, 82], [1210, 130], [1455, 85],
            [95, 310], [260, 255], [430, 345], [1175, 290],
            [1370, 310], [1520, 245], [65, 565], [215, 680],
            [390, 590], [550, 755], [735, 670], [930, 760],
            [1110, 640], [1265, 735], [1455, 610], [1540, 770],
            [320, 820], [710, 840], [1160, 825], [1375, 850]
        ];

        const connections = [
            [0,1], [0,8], [1,2], [1,9], [2,3], [2,9],
            [3,4], [4,5], [5,6], [5,11], [6,7], [6,11],
            [6,12], [7,13], [8,9], [8,14], [9,10], [9,14],
            [10,15], [10,16], [11,12], [11,20], [12,13],
            [12,22], [13,22], [14,15], [15,16], [15,24],
            [16,17], [16,18], [17,18], [17,24], [18,19],
            [18,25], [19,20], [19,26], [20,21], [20,22],
            [20,26], [21,22], [21,26], [21,27], [22,23],
            [22,27], [24,25], [25,26], [26,27]
        ];

        const lineGroup = createSvgElement("g", {
            class: "mi-neural-lines"
        });

        const pulseGroup = createSvgElement("g", {
            class: "mi-neural-pulses"
        });

        connections.forEach(([startIndex, endIndex], index) => {
            const [x1, y1] = nodes[startIndex];
            const [x2, y2] = nodes[endIndex];

            lineGroup.appendChild(
                createSvgElement("line", {
                    x1,
                    y1,
                    x2,
                    y2,
                    class:
                        index % 3 === 0
                            ? "mi-neural-line mi-line-secondary"
                            : "mi-neural-line"
                })
            );

            if (index % 5 === 0) {
                const pulse = createSvgElement("line", {
                    x1,
                    y1,
                    x2,
                    y2,
                    class: "mi-neural-pulse"
                });

                pulse.style.animationDelay = `${(index % 7) * -0.55}s`;
                pulseGroup.appendChild(pulse);
            }
        });

        const nodeGroup = createSvgElement("g", {
            class: "mi-neural-nodes"
        });

        nodes.forEach(([cx, cy], index) => {
            const haloRadius = index % 6 === 0 ? 15 : 10;
            const nodeRadius = index % 6 === 0 ? 4.8 : 3.2;

            const halo = createSvgElement("circle", {
                cx,
                cy,
                r: haloRadius,
                class: "mi-neural-node-halo"
            });

            halo.style.animationDelay = `${(index % 8) * -0.31}s`;

            const node = createSvgElement("circle", {
                cx,
                cy,
                r: nodeRadius,
                class: "mi-neural-node"
            });

            node.style.animationDelay = `${(index % 10) * -0.24}s`;

            nodeGroup.appendChild(halo);
            nodeGroup.appendChild(node);
        });

        svg.appendChild(lineGroup);
        svg.appendChild(pulseGroup);
        svg.appendChild(nodeGroup);
    };

    const removeOldRobotElements = () => {
        document.querySelectorAll(
            ".intro-robot, .ai-robot, .letter-particles"
        ).forEach((element) => element.remove());
    };

    const removeOldRobotStates = () => {
        const oldStates = [
            "title-transforming",
            "robot-assembling",
            "robot-ready",
            "robot-walking",
            "robot-walking-left"
        ];

        const welcomeScreen = document.getElementById("welcome-screen");

        oldStates.forEach((className) => {
            document.body.classList.remove(className);

            if (welcomeScreen) {
                welcomeScreen.classList.remove(className);
            }
        });
    };

    const cleanup = (neuralIntro) => {
        if (window.__miFinalizeIntro) {
            window.__miFinalizeIntro({ removeWelcomeScreen: false });
            return;
        }

        document.body.classList.remove("intro-active");
        document.body.classList.add("welcome-complete");
        document.documentElement.classList.add("welcome-complete");
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";

        if (neuralIntro?.isConnected) {
            neuralIntro.remove();
        }

        const welcomeScreen = document.getElementById("welcome-screen");

        if (welcomeScreen?.isConnected) {
            welcomeScreen.remove();
        }
    };

    const runNeuralLogoSequence = async () => {
        const neuralIntro = document.getElementById("mi-neural-intro");
        const networkSvg = document.getElementById("mi-neural-network");

        if (!neuralIntro || neuralIntro.dataset.started === "true") {
            return;
        }

        neuralIntro.dataset.started = "true";

        buildNeuralNetwork(networkSvg);
        removeOldRobotElements();
        removeOldRobotStates();

        document.body.classList.add("intro-active");
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        await sleep(INTRO_START_DELAY);

        neuralIntro.classList.add("mi-neural-visible");

        await sleep(NETWORK_REVEAL_TIME);

        neuralIntro.classList.add("mi-logo-entering");

        await sleep(LOGO_ZOOM_IN_TIME);

        neuralIntro.classList.add("mi-logo-settled");

        await sleep(LOGO_ZOOM_OUT_TIME + LOGO_HOLD_TIME);

        neuralIntro.classList.add("mi-logo-leaving");

        await sleep(LOGO_FADE_TIME);

        neuralIntro.classList.add("mi-neural-exiting");

        const finish = () => cleanup(neuralIntro);

        neuralIntro.addEventListener(
            "transitionend",
            (event) => {
                if (
                    event.target === neuralIntro &&
                    event.propertyName === "transform"
                ) {
                    finish();
                }
            },
            { once: true }
        );

        window.setTimeout(finish, SCREEN_LIFT_TIME + 500);
    };

    const initialize = () => {
        removeOldRobotElements();
        removeOldRobotStates();

        runNeuralLogoSequence().catch((error) => {
            console.error("Neural logo intro failed:", error);

            const neuralIntro = document.getElementById("mi-neural-intro");
            cleanup(neuralIntro);
        });

        window.setTimeout(() => {
            const neuralIntro = document.getElementById("mi-neural-intro");

            if (neuralIntro?.isConnected) {
                cleanup(neuralIntro);
            }
        }, FALLBACK_TIME);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize, {
            once: true
        });
    } else {
        initialize();
    }
})();
/* MI_NEURAL_LOGO_SEQUENCE_END */

