document.addEventListener('DOMContentLoaded', function () {
  const welcomeScreen = document.getElementById('welcome-screen');
  const welcomeStage = welcomeScreen ? welcomeScreen.querySelector('.welcome-stage') : null;
  const title = welcomeScreen ? welcomeScreen.querySelector('.welcome-title') : null;
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let introTimer = null;
  let fallbackTimer = null;
  let transitionTimer = null;
  let hasStarted = false;

  const clearTimers = () => {
    if (introTimer) {
      window.clearTimeout(introTimer);
      introTimer = null;
    }
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = null;
    }
    if (transitionTimer) {
      window.clearTimeout(transitionTimer);
      transitionTimer = null;
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

    transitionTimer = window.setTimeout(function () {
      if (welcomeScreen.parentNode) {
        welcomeScreen.parentNode.removeChild(welcomeScreen);
      }
    }, 2400);
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

    introTimer = window.setTimeout(function () {
      title.classList.add('is-clear');
    }, reducedMotion ? 900 : 1400);

    introTimer = window.setTimeout(function () {
      removeIntro();
    }, reducedMotion ? 3000 : 5200);

    fallbackTimer = window.setTimeout(function () {
      removeIntro();
    }, reducedMotion ? 5000 : 9000);
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
