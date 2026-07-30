document.addEventListener('DOMContentLoaded', function () {
  const welcomeScreen = document.getElementById('welcome-screen');
  const welcomeStage = welcomeScreen ? welcomeScreen.querySelector('.welcome-stage') : null;
  const title = welcomeScreen ? welcomeScreen.querySelector('.welcome-title') : null;
  const robot = welcomeScreen ? welcomeScreen.querySelector('.intro-robot') : null;
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let titleFadeTimer = null;
  let titleClearTimer = null;
  let titleTransformTimer = null;
  let robotAssemblyTimer = null;
  let fallbackTimer = null;
  let transitionHandler = null;
  let hasStarted = false;

  const clearTimers = () => {
    if (titleFadeTimer) {
      window.clearTimeout(titleFadeTimer);
      titleFadeTimer = null;
    }
    if (titleClearTimer) {
      window.clearTimeout(titleClearTimer);
      titleClearTimer = null;
    }
    if (titleTransformTimer) {
      window.clearTimeout(titleTransformTimer);
      titleTransformTimer = null;
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

    clearTimers();
    welcomeScreen.classList.add('intro-exiting');
    body.classList.remove('intro-active');
    body.classList.add('welcome-complete');
    welcomeScreen.setAttribute('aria-hidden', 'true');

    if (transitionHandler) {
      welcomeScreen.removeEventListener('transitionend', transitionHandler);
    }

    transitionHandler = function () {
      if (welcomeScreen.parentNode) {
        welcomeScreen.parentNode.removeChild(welcomeScreen);
      }
    };

    welcomeScreen.addEventListener('transitionend', transitionHandler, { once: true });
    fallbackTimer = window.setTimeout(function () {
      if (welcomeScreen.parentNode) {
        welcomeScreen.parentNode.removeChild(welcomeScreen);
      }
    }, 2800);
  };

  const startIntroSequence = () => {
    if (!welcomeScreen || !welcomeStage || !title || hasStarted) {
      return;
    }

    hasStarted = true;
    body.classList.add('intro-active');
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

      if (robot) {
        robot.classList.add('intro-robot-assembling');
      }

      const assemblyDuration = reducedMotion ? 700 : 1400;
      const walkDuration = reducedMotion ? 1200 : 2400;

      robotAssemblyTimer = window.setTimeout(function () {
        if (robot) {
          robot.classList.remove('intro-robot-assembling');
          robot.classList.add('intro-robot-ready');
          if (reducedMotion) {
            robot.classList.add('intro-robot-walking-left-reduced');
          } else {
            robot.classList.add('intro-robot-walking-left');
          }
        }

        const handleWalkEnd = function () {
          if (robot) {
            robot.removeEventListener('animationend', handleWalkEnd);
          }
          removeIntro();
        };

        if (robot) {
          robot.addEventListener('animationend', handleWalkEnd, { once: true });
        }

        window.setTimeout(function () {
          if (!robot) {
            removeIntro();
            return;
          }
          if (robot.classList.contains('intro-robot-walking-left') || robot.classList.contains('intro-robot-walking-left-reduced')) {
            if (robot.getAnimations().length === 0) {
              handleWalkEnd();
            }
          }
        }, walkDuration + 100);
      }, assemblyDuration);
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

/* MI_REMOVE_INTRO_ROBOT_START */
(() => {
    "use strict";

    const ROBOT_CLASSES = [
        "title-transforming",
        "robot-assembling",
        "robot-ready",
        "robot-walking",
        "robot-walking-left"
    ];

    const removeRobotElements = () => {
        document.querySelectorAll(
            ".intro-robot, .ai-robot, .letter-particles"
        ).forEach((element) => element.remove());
    };

    const finishWelcomeIntro = (welcomeScreen) => {
        if (!welcomeScreen || welcomeScreen.dataset.robotRemovalExit === "true") {
            return;
        }

        welcomeScreen.dataset.robotRemovalExit = "true";

        ROBOT_CLASSES.forEach((className) => {
            welcomeScreen.classList.remove(className);
            document.body.classList.remove(className);
        });

        requestAnimationFrame(() => {
            welcomeScreen.classList.add("intro-exiting");
        });

        const cleanup = () => {
            document.body.classList.remove("intro-active");
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";

            if (welcomeScreen.isConnected) {
                welcomeScreen.remove();
            }
        };

        welcomeScreen.addEventListener(
            "transitionend",
            (event) => {
                if (
                    event.target === welcomeScreen &&
                    event.propertyName === "transform"
                ) {
                    cleanup();
                }
            },
            { once: true }
        );

        window.setTimeout(cleanup, 3000);
    };

    const initializeRobotRemoval = () => {
        const welcomeScreen = document.getElementById("welcome-screen");

        removeRobotElements();

        if (!welcomeScreen) {
            return;
        }

        const startExitWhenRobotPhaseBegins = () => {
            const robotPhaseStarted = ROBOT_CLASSES.some((className) => {
                return (
                    welcomeScreen.classList.contains(className) ||
                    document.body.classList.contains(className)
                );
            });

            if (robotPhaseStarted) {
                removeRobotElements();
                window.setTimeout(() => {
                    finishWelcomeIntro(welcomeScreen);
                }, 250);
            }
        };

        const observer = new MutationObserver(() => {
            removeRobotElements();
            startExitWhenRobotPhaseBegins();
        });

        observer.observe(welcomeScreen, {
            attributes: true,
            attributeFilter: ["class"],
            childList: true,
            subtree: true
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"]
        });

        startExitWhenRobotPhaseBegins();

        window.setTimeout(() => {
            removeRobotElements();

            if (
                welcomeScreen.isConnected &&
                !welcomeScreen.classList.contains("intro-exiting")
            ) {
                finishWelcomeIntro(welcomeScreen);
            }
        }, 11000);
    };

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeRobotRemoval,
            { once: true }
        );
    } else {
        initializeRobotRemoval();
    }
})();
/* MI_REMOVE_INTRO_ROBOT_END */

