document.addEventListener('DOMContentLoaded', function () {
  const welcomeScreen = document.getElementById('welcome-screen');
  const welcomeStage = welcomeScreen ? welcomeScreen.querySelector('.welcome-stage') : null;
  const body = document.body;
  const particlesContainer = welcomeStage ? welcomeStage.querySelector('.letter-particles') : null;
  const titleParts = welcomeStage ? Array.from(welcomeStage.querySelectorAll('.title-part')) : [];
  const robot = welcomeStage ? welcomeStage.querySelector('.ai-robot') : null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let introTimer = null;
  let fallbackTimer = null;
  let hasStarted = false;

  const clearTimers = () => {
    if (introTimer) {
      window.clearTimeout(introTimer);
    }
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
    }
  };

  const finishIntro = () => {
    if (!welcomeScreen || !welcomeStage) {
      body.classList.remove('intro-active');
      body.classList.add('welcome-complete');
      return;
    }

    if (welcomeScreen.classList.contains('intro-exiting')) {
      return;
    }

    welcomeScreen.classList.add('intro-exiting');
    welcomeStage.classList.add('intro-exiting');
    body.classList.remove('intro-active');
    body.classList.add('welcome-complete');

    window.setTimeout(function () {
      if (welcomeScreen.parentNode) {
        welcomeScreen.parentNode.removeChild(welcomeScreen);
      }
    }, 900);
  };

  const startIntroSequence = () => {
    if (!welcomeScreen || !welcomeStage || hasStarted) {
      return;
    }

    hasStarted = true;
    body.classList.add('intro-active');
    welcomeScreen.setAttribute('aria-hidden', 'false');
    welcomeScreen.classList.add('intro-visible');
    welcomeStage.classList.add('sequence-started');

    const partDelay = reducedMotion ? 120 : 800;
    titleParts.forEach(function (part, index) {
      window.setTimeout(function () {
        part.classList.add('is-visible');
      }, partDelay * (index + 1));
    });

    const titleZoomStart = reducedMotion ? 300 : 3400;
    const robotStart = reducedMotion ? 600 : 4800;
    const walkStart = reducedMotion ? 900 : 7200;
    const exitStart = reducedMotion ? 1400 : 9300;

    window.setTimeout(function () {
      welcomeStage.classList.add('title-complete', 'title-zooming');
    }, titleZoomStart);

    window.setTimeout(function () {
      welcomeStage.classList.add('assembling-robot');
      welcomeStage.classList.remove('title-zooming');
      if (robot) {
        robot.setAttribute('data-assembled', 'true');
      }
    }, robotStart);

    window.setTimeout(function () {
      welcomeStage.classList.add('robot-complete', 'robot-walking');
    }, walkStart);

    introTimer = window.setTimeout(function () {
      finishIntro();
    }, exitStart);

    fallbackTimer = window.setTimeout(function () {
      finishIntro();
    }, reducedMotion ? 2200 : 11050);
  };

  const generateParticles = () => {
    if (!particlesContainer) {
      return;
    }

    const fragments = ['MI', 'CORTEX', 'X', 'INC.', 'M', 'I', 'C', 'O', 'R', 'T', 'E', 'X'];
    const positions = [
      { x: -100, y: -60 },
      { x: -40, y: -20 },
      { x: 0, y: -80 },
      { x: 110, y: -120 },
      { x: -140, y: 90 },
      { x: -70, y: 110 },
      { x: 10, y: 95 },
      { x: 80, y: 100 },
      { x: -40, y: 140 },
      { x: 60, y: 150 },
      { x: 140, y: 130 },
      { x: 200, y: 100 }
    ];

    fragments.forEach(function (fragment, index) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.textContent = fragment;
      particle.style.setProperty('--tx', `${positions[index].x}px`);
      particle.style.setProperty('--ty', `${positions[index].y}px`);
      particlesContainer.appendChild(particle);
    });
  };

  if (welcomeScreen) {
    generateParticles();
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
