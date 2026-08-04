(function () {
  "use strict";

  if (window.__MCX_FRONT_BANNER_START_POSITION__) {
    return;
  }

  window.__MCX_FRONT_BANNER_START_POSITION__ = true;

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo(0, 0);

  window.addEventListener(
    "pageshow",
    function () {
      const intro = document.getElementById("mi-neural-intro");

      if (intro && intro.isConnected) {
        window.scrollTo(0, 0);
      }
    },
    { once: true }
  );
})();