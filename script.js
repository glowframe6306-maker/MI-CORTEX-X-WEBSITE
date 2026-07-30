document.addEventListener('DOMContentLoaded', function () {
  const welcomeScreen = document.getElementById('welcome-screen');
  const welcomeStage = welcomeScreen ? welcomeScreen.querySelector('.welcome-stage') : null;
  const body = document.body;
  const titleParts = welcomeStage ? Array.from(welcomeStage.querySelectorAll('.title-part')) : [];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let introTimer = null;
  let fallbackTimer = null;
  let hasStarted = false;

  const finishIntro = () => {
    if (!welcomeScreen || !welcomeStage || welcomeScreen.classList.contains('intro-exiting')) {
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

    const partDelay = reducedMotion ? 120 : 900;
    titleParts.forEach(function (part, index) {
      window.setTimeout(function () {
        part.classList.add('is-visible');
      }, partDelay * (index + 1));
    });

    const fullTitleStart = reducedMotion ? 400 : 3600;
    const exitStart = reducedMotion ? 800 : 7200;

    window.setTimeout(function () {
      welcomeStage.classList.add('title-complete', 'title-zooming');
    }, fullTitleStart);

    introTimer = window.setTimeout(function () {
      finishIntro();
    }, exitStart);

    fallbackTimer = window.setTimeout(function () {
      finishIntro();
    }, reducedMotion ? 1800 : 10500);
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
