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
 window.dispatchEvent(
 new CustomEvent("mcx:open-cortex-core-ai")
 );
 }, 80);
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
