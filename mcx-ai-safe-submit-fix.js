(() => {
  "use strict";

  if (window.__MCX_AI_SAFE_SUBMIT_FIX__) {
    return;
  }

  window.__MCX_AI_SAFE_SUBMIT_FIX__ = true;

  function repairChat() {
    const root = document.getElementById("mcx-ai-chat-root");

    if (!root) {
      return;
    }

    const form = root.querySelector("form.mcx-ai-composer");

    if (form && form.dataset.mcxSafeSubmit !== "true") {
      form.dataset.mcxSafeSubmit = "true";
      form.setAttribute("action", "javascript:void(0)");
      form.setAttribute("method", "post");

      /*
       * Prevent only the browser's native page navigation.
       * Do not stop propagation.
       * The original AI submit listener can still run normally.
       */
      form.addEventListener(
        "submit",
        event => {
          event.preventDefault();
        },
        true
      );
    }

    root.querySelectorAll(
      ".mcx-ai-toolbar button," +
      ".mcx-ai-header-actions button," +
      ".mcx-ai-message-actions button," +
      ".mcx-ai-tools button," +
      ".mcx-ai-suggestions button"
    ).forEach(button => {
      button.type = "button";
      button.disabled = false;
      button.style.pointerEvents = "auto";
    });

    const sendButton = root.querySelector(".mcx-ai-send");

    if (sendButton) {
      sendButton.type = "submit";
      sendButton.disabled = false;
      sendButton.style.pointerEvents = "auto";
    }

    const textarea = root.querySelector(
      ".mcx-ai-composer textarea"
    );

    if (textarea) {
      textarea.disabled = false;
      textarea.style.pointerEvents = "auto";
    }

    root.querySelectorAll(".mcx-v11-streaming").forEach(element => {
      if (!element.textContent.trim()) {
        element.remove();
      }
    });

    const dialog = root.querySelector(".mcx-ai-dialog");

    if (dialog) {
      dialog.style.pointerEvents = "auto";
    }
  }

  document.addEventListener("DOMContentLoaded", repairChat);

  window.addEventListener(
    "mcx:open-cortex-core-ai",
    () => window.setTimeout(repairChat, 50)
  );

  const observer = new MutationObserver(repairChat);

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  repairChat();
})();