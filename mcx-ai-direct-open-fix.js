(() => {
    "use strict";

    if (window.__MCX_AI_DIRECT_OPEN_FIX__) {
        return;
    }

    window.__MCX_AI_DIRECT_OPEN_FIX__ = true;

    function closeOldContactPopup() {
        const hub = document.getElementById("mcx-contact-hub-root");

        if (!hub) {
            return;
        }

        const overlay = hub.querySelector(".mcx-hub-overlay");

        if (overlay) {
            overlay.hidden = true;
        }

        hub.querySelector(".mcx-hub-fab")
            ?.setAttribute("aria-expanded", "false");

        document.body.classList.remove("mcx-hub-open");
    }

    function openRealCortexCoreAI() {
        closeOldContactPopup();

        window.dispatchEvent(
            new CustomEvent("mcx:open-cortex-core-ai")
        );

        window.setTimeout(() => {
            const realOverlay = document.querySelector(
                "#mcx-ai-chat-root .mcx-ai-overlay"
            );

            if (realOverlay && realOverlay.hidden) {
                const temporaryButton = document.createElement("button");

                temporaryButton.type = "button";
                temporaryButton.textContent =
                    "CHAT WITH CORTEX CORE AI";

                temporaryButton.style.position = "fixed";
                temporaryButton.style.left = "-99999px";
                temporaryButton.style.opacity = "0";
                temporaryButton.style.pointerEvents = "none";

                document.body.appendChild(temporaryButton);
                temporaryButton.click();
                temporaryButton.remove();
            }
        }, 100);
    }

    document.addEventListener(
        "click",
        event => {
            const aiButton = event.target.closest(
                '[data-open="ai"]'
            );

            if (!aiButton) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            openRealCortexCoreAI();
        },
        true
    );
})();
document.addEventListener("keydown", function(e){

    if(
        e.key === "Enter" &&
        e.target &&
        (
            e.target.tagName === "INPUT" ||
            e.target.tagName === "TEXTAREA"
        )
    ){

        e.preventDefault();

    }

});
