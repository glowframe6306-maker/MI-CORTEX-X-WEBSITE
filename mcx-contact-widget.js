(function () {
  "use strict";

  if (window.__MCX_CONTACT_HUB_INSTALLED__) return;
  window.__MCX_CONTACT_HUB_INSTALLED__ = true;

  const WHATSAPP_NUMBER = "94756390621";
  const TELEGRAM_URL = "https://t.me/MICORTEXX";
  const SUPPORT_EMAIL = "support.micortexx@gmail.com";
  const COLOMBO_TZ = "Asia/Colombo";
  const SAME_DAY_LEAD_HOURS = 4;
  const OPEN_HOUR = 8;
  const CLOSE_HOUR = 20;

  const icons = {
    whatsapp: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#25D366"/><path fill="#fff" d="M23.4 18.9c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-2.2-1.1-3.7-2-5.2-4.6-.4-.7.4-.7 1.1-2.2.1-.2 0-.5-.1-.7-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.7.1-1 .5-1 1.1-1.5 2.3-1.5 3.6 0 2.2 1.6 4.4 1.8 4.7.2.3 3.1 4.8 7.7 6.7 2.9 1.2 4 1.3 5.4 1.1.9-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z"/></svg>',
    telegram: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#229ED9"/><path fill="#fff" d="M24.7 8.7 21.9 23c-.2 1-.8 1.2-1.6.8l-4.3-3.2-2.1 2c-.2.2-.4.4-.9.4l.3-4.4 8-7.2c.3-.3-.1-.5-.5-.2l-9.9 6.2-4.3-1.3c-.9-.3-.9-.9.2-1.3l16.8-6.5c.8-.3 1.5.2 1.1 1.4z"/></svg>',
    mail: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="6" width="26" height="20" rx="4" fill="#EA4335"/><path fill="#fff" d="M6 10.2 16 18l10-7.8V23H6z"/><path fill="#f7f7f7" d="M6.5 9h19L16 16.4z"/></svg>',
    ai: '<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="mcxAiG" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#5fe2ff"/><stop offset="1" stop-color="#765cff"/></linearGradient></defs><circle cx="16" cy="16" r="15" fill="#091633" stroke="#5fe2ff"/><path d="M9 12h14v10H9z" fill="none" stroke="url(#mcxAiG)" stroke-width="2"/><circle cx="13" cy="17" r="1.4" fill="#fff"/><circle cx="19" cy="17" r="1.4" fill="#fff"/><path d="M13 21h6M16 8v4M8 15H5M27 15h-3" stroke="#5fe2ff" stroke-width="2" stroke-linecap="round"/></svg>',
    people: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="10" r="5" fill="#68dcff"/><circle cx="8" cy="13" r="3.5" fill="#8978ff"/><circle cx="24" cy="13" r="3.5" fill="#8978ff"/><path d="M7 26c.5-6 3.7-9 9-9s8.5 3 9 9" fill="#68dcff"/><path d="M2.5 26c.3-4.2 2.3-6.6 5.8-7.1M29.5 26c-.3-4.2-2.3-6.6-5.8-7.1" fill="none" stroke="#8978ff" stroke-width="2"/></svg>',
    info: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="#10234c" stroke="#68dcff" stroke-width="2"/><circle cx="16" cy="10" r="2" fill="#ffe176"/><path d="M16 15v9" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>',
    logo: '<img src="assets/images/logo/Cortex.png" alt="MI CORTEX X">'
  };

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }

  function nowParts() {
    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: COLOMBO_TZ,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false, weekday: "short"
    });
    return Object.fromEntries(formatter.formatToParts(new Date()).filter(p => p.type !== "literal").map(p => [p.type, p.value]));
  }

  function colomboNow() {
    const p = nowParts();
    return {
      date: `${p.year}-${p.month}-${p.day}`,
      minutes: Number(p.hour) * 60 + Number(p.minute),
      weekday: p.weekday
    };
  }

  function dateWeekday(dateString) {
    const d = new Date(`${dateString}T12:00:00Z`);
    return new Intl.DateTimeFormat("en-US", { timeZone: COLOMBO_TZ, weekday: "short" }).format(d);
  }

  function showToast(message) {
    const toast = document.querySelector(".mcx-hub-toast");
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => { toast.hidden = true; }, 3800);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    return Promise.resolve();
  }

  const root = document.createElement("div");
  root.id = "mcx-contact-hub-root";
  root.innerHTML = `
    <div class="mcx-hub-fab-label">Connect with MI CORTEX X</div>
    <button class="mcx-hub-fab" type="button" aria-label="Open MI CORTEX X contact hub" aria-expanded="false">
      <span class="mcx-hub-fab-icon">${icons.whatsapp}</span>
    </button>
    <div class="mcx-hub-overlay" hidden>
      <div class="mcx-hub-modal" role="dialog" aria-modal="true" aria-labelledby="mcx-hub-title">
        <button class="mcx-hub-close" type="button" aria-label="Close">&#10005;</button>
        <div class="mcx-hub-panel" data-panel="main">
          <h2 id="mcx-hub-title">How may we assist you?</h2>
          <p class="mcx-hub-subtitle">Choose a secure communication or information option.</p>
          <div class="mcx-hub-grid">
            <button class="mcx-hub-button" type="button" data-open="ai"><span class="mcx-hub-button-icon">${icons.ai}</span><span>CHAT WITH CORTEX CORE AI<small>Automated company assistant - coming soon</small></span></button>
            <button class="mcx-hub-button" type="button" data-open="support"><span class="mcx-hub-button-icon">${icons.people}</span><span>CONNECT WITH INFORMATION CENTER<small>WhatsApp, Telegram or Email support</small></span></button>
            <button class="mcx-hub-button" type="button" data-open="executives"><span class="mcx-hub-button-icon">${icons.logo}</span><span>CONNECT WITH AN EXECUTIVE BOARD MEMBER<small>Prepare a professional appointment request</small></span></button>
            <button class="mcx-hub-button" type="button" data-open="products"><span class="mcx-hub-button-icon">${icons.info}</span><span>INFORMATION ABOUT PRODUCTS AND SERVICES<small>Request product, service or pricing information</small></span></button>
          </div>
        </div>
        <div class="mcx-hub-panel" data-panel="ai" hidden>
          <button class="mcx-hub-back" type="button">&#8592; Back</button>
          <h2>CORTEX CORE AI</h2>
          <p class="mcx-hub-subtitle">The automated chat system is being prepared. Use the Information Center for immediate assistance.</p>
          <div class="mcx-hub-notice">CORTEX CORE AI will answer questions about MI CORTEX X, products, services, prices and company information after the AI service is connected.</div>
        </div>
        <div class="mcx-hub-panel" data-panel="support" hidden>
          <button class="mcx-hub-back" type="button">&#8592; Back</button>
          <h2>Information Center</h2>
          <p class="mcx-hub-subtitle">Choose your preferred support channel.</p>
          <div class="mcx-hub-grid" data-contact-mode="support"></div>
        </div>
        <div class="mcx-hub-panel" data-panel="products" hidden>
          <button class="mcx-hub-back" type="button">&#8592; Back</button>
          <h2>Products and Services Information</h2>
          <p class="mcx-hub-subtitle">Ask about availability, features, prices, quotations, delivery and support.</p>
          <div class="mcx-hub-grid" data-contact-mode="products"></div>
        </div>
        <div class="mcx-hub-panel" data-panel="executives" hidden>
          <button class="mcx-hub-back" type="button">&#8592; Back</button>
          <h2>Executive Board Appointment</h2>
          <p class="mcx-hub-subtitle">Choose the executive position you wish to contact.</p>
          <div class="mcx-hub-grid">
            <button class="mcx-hub-button" type="button" data-executive="Owner of MI CORTEX X INC."><span>CHAT WITH OWNER OF MI CORTEX X INC.</span></button>
            <button class="mcx-hub-button" type="button" data-executive="Chief Executive Officer (CEO) of MI CORTEX X INC."><span>CHAT WITH CHIEF EXECUTIVE OFFICER OF MI CORTEX X INC.</span></button>
            <button class="mcx-hub-button" type="button" data-executive="Founder of MI CORTEX X INC."><span>CHAT WITH FOUNDER OF MI CORTEX X INC.</span></button>
            <button class="mcx-hub-button" type="button" data-executive="Chairman of MI CORTEX X INC."><span>CHAT WITH CHAIRMAN OF MI CORTEX X INC.</span></button>
          </div>
        </div>
        <div class="mcx-hub-panel" data-panel="appointment" hidden>
          <button class="mcx-hub-back" type="button" data-back="executives">&#8592; Back</button>
          <h2>Appointment Request</h2>
          <p class="mcx-hub-subtitle" data-selected-executive></p>
          <form class="mcx-hub-form" novalidate>
            <div class="mcx-hub-form-grid">
              <div class="mcx-hub-field"><label>Full Name *</label><input class="mcx-hub-input" name="fullName" required autocomplete="name"><span class="mcx-hub-error" data-error="fullName"></span></div>
              <div class="mcx-hub-field"><label>Company Name</label><input class="mcx-hub-input" name="companyName" autocomplete="organization"><span class="mcx-hub-error"></span></div>
              <div class="mcx-hub-field"><label>Email Address *</label><input class="mcx-hub-input" name="email" type="email" required autocomplete="email"><span class="mcx-hub-error" data-error="email"></span></div>
              <div class="mcx-hub-field"><label>Phone Number *</label><input class="mcx-hub-input" name="phone" type="tel" required autocomplete="tel"><span class="mcx-hub-error" data-error="phone"></span></div>
              <div class="mcx-hub-field"><label>Country *</label><input class="mcx-hub-input" name="country" required autocomplete="country-name"><span class="mcx-hub-error" data-error="country"></span></div>
              <div class="mcx-hub-field"><label>Preferred Date *</label><input class="mcx-hub-input" name="date" type="date" required><span class="mcx-hub-error" data-error="date"></span></div>
              <div class="mcx-hub-field"><label>Preferred Time *</label><input class="mcx-hub-input" name="time" type="time" required><span class="mcx-hub-error" data-error="time"></span></div>
              <div class="mcx-hub-field"><label>Meeting Format *</label><select class="mcx-hub-input" name="meetingFormat" required><option value="">Select</option><option>Online meeting</option><option>Voice call</option><option>Text consultation</option></select><span class="mcx-hub-error" data-error="meetingFormat"></span></div>
              <div class="mcx-hub-field full"><label>Purpose of the Appointment *</label><textarea class="mcx-hub-input" name="purpose" required></textarea><span class="mcx-hub-error" data-error="purpose"></span></div>
              <div class="mcx-hub-field full"><label>Additional Information</label><textarea class="mcx-hub-input" name="details"></textarea><span class="mcx-hub-error"></span></div>
            </div>
            <div class="mcx-hub-notice">Appointments are available Monday to Saturday. Same-day requests must be at least 4 hours after the current Colombo time. Future-date requests must be between 8:00 AM and 8:00 PM.</div>
            <label class="mcx-hub-checkbox"><input type="checkbox" name="agreement" required> <span>I confirm that these details are accurate and may be used to prepare an appointment request.</span></label>
            <span class="mcx-hub-error" data-error="agreement"></span>
            <div class="mcx-hub-actions"><button class="mcx-hub-button mcx-hub-primary" type="submit">SUBMIT APPOINTMENT REQUEST</button></div>
          </form>
        </div>
        <div class="mcx-hub-panel" data-panel="send" hidden>
          <button class="mcx-hub-back" type="button" data-back="appointment">&#8592; Back</button>
          <h2>How would you like to send this appointment request?</h2>
          <p class="mcx-hub-subtitle">The request will be prepared with every detail you entered.</p>
          <div class="mcx-hub-grid">
            <button class="mcx-hub-button" type="button" data-send="whatsapp"><span class="mcx-hub-button-icon">${icons.whatsapp}</span><span>WHATSAPP<small>Opens a prefilled WhatsApp message. Press Send in WhatsApp.</small></span></button>
            <button class="mcx-hub-button" type="button" data-send="telegram"><span class="mcx-hub-button-icon">${icons.telegram}</span><span>TELEGRAM<small>Copies the request and opens @MICORTEXX.</small></span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="mcx-hub-toast" role="status" aria-live="polite" hidden></div>`;
  document.body.appendChild(root);

  const overlay = root.querySelector(".mcx-hub-overlay");
  const fab = root.querySelector(".mcx-hub-fab");
  const fabIcon = root.querySelector(".mcx-hub-fab-icon");
  const modal = root.querySelector(".mcx-hub-modal");
  let lastFocus = null;
  let selectedExecutive = "";
  let appointmentMessage = "";

  const rotation = [icons.whatsapp, icons.telegram, icons.logo, icons.ai];
  let rotationIndex = 0;
  setInterval(() => {
    rotationIndex = (rotationIndex + 1) % rotation.length;
    fabIcon.innerHTML = rotation[rotationIndex];
    fabIcon.style.animation = "none";
    requestAnimationFrame(() => { fabIcon.style.animation = "mcxHubSwap .35s ease"; });
  }, 3000);

  function showPanel(name) {
    root.querySelectorAll(".mcx-hub-panel").forEach(panel => { panel.hidden = panel.dataset.panel !== name; });
    modal.scrollTop = 0;
    setTimeout(() => modal.querySelector(".mcx-hub-panel:not([hidden]) button, .mcx-hub-panel:not([hidden]) input")?.focus(), 20);
  }

  function openHub() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    fab.setAttribute("aria-expanded", "true");
    showPanel("main");
  }
  function closeHub() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    fab.setAttribute("aria-expanded", "false");
    lastFocus?.focus?.();
  }

  function contactButtons(mode) {
    const productMode = mode === "products";
    const hello = productMode ? "Hello, I would like information about MI CORTEX X products and services." : "Hello \uD83D\uDC4B";
    const subject = productMode ? "Products and Services Information Request" : "MI CORTEX X Support Request";
    const body = productMode ? "Hello MI CORTEX X Team,\n\nI would like information about your products and services.\n\nMy question: " : "Hello MI CORTEX X Information Center,\n\nI need assistance with: ";
    return `
      <button class="mcx-hub-button" type="button" data-direct="whatsapp" data-message="${escapeHtml(hello)}"><span class="mcx-hub-button-icon">${icons.whatsapp}</span><span>WHATSAPP<small>Open a prefilled WhatsApp chat</small></span></button>
      <button class="mcx-hub-button" type="button" data-direct="telegram" data-message="${escapeHtml(hello)}"><span class="mcx-hub-button-icon">${icons.telegram}</span><span>TELEGRAM<small>Copy the message and open @MICORTEXX</small></span></button>
      <button class="mcx-hub-button" type="button" data-direct="email" data-subject="${escapeHtml(subject)}" data-body="${escapeHtml(body)}"><span class="mcx-hub-button-icon">${icons.mail}</span><span>EMAIL<small>Open your email app with a prepared message</small></span></button>`;
  }
  root.querySelectorAll("[data-contact-mode]").forEach(host => { host.innerHTML = contactButtons(host.dataset.contactMode); });

  function validateAppointment(form) {
    form.querySelectorAll("[data-error]").forEach(el => { el.textContent = ""; });
    const data = Object.fromEntries(new FormData(form).entries());
    let valid = true;
    const setError = (name, message) => { const el = form.querySelector(`[data-error="${name}"]`); if (el) el.textContent = message; valid = false; };
    ["fullName", "email", "phone", "country", "purpose", "date", "time", "meetingFormat"].forEach(name => { if (!String(data[name] || "").trim()) setError(name, "This field is required."); });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) setError("email", "Enter a valid email address.");
    if (data.phone && !/^[+\d][\d\s()-]{6,20}$/.test(data.phone)) setError("phone", "Enter a valid phone number.");
    if (!form.elements.agreement.checked) setError("agreement", "You must confirm the information before submitting.");

    const now = colomboNow();
    if (data.date) {
      if (data.date < now.date) setError("date", "Choose today or a future date.");
      if (dateWeekday(data.date) === "Sun") setError("date", "Sunday is closed. Choose Monday to Saturday.");
    }
    if (data.date && data.time) {
      const [hour, minute] = data.time.split(":").map(Number);
      const selectedMinutes = hour * 60 + minute;
      if (data.date === now.date) {
        const minimum = now.minutes + SAME_DAY_LEAD_HOURS * 60;
        if (selectedMinutes < minimum) setError("time", `For a same-day appointment, select a time at least ${SAME_DAY_LEAD_HOURS} hours from the current Colombo time.`);
        if (selectedMinutes > CLOSE_HOUR * 60) setError("time", "Same-day appointments must be no later than 8:00 PM.");
      } else if (selectedMinutes < OPEN_HOUR * 60 || selectedMinutes > CLOSE_HOUR * 60) {
        setError("time", "Future appointments must be between 8:00 AM and 8:00 PM.");
      }
    }
    return valid ? data : null;
  }

  function buildAppointmentMessage(data) {
    const reference = `MCX-APT-${data.date.replaceAll("-", "")}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    return [
      "MI CORTEX X INC. - EXECUTIVE APPOINTMENT REQUEST",
      "",
      `Reference: ${reference}`,
      `Executive Position: ${selectedExecutive}`,
      `Full Name: ${data.fullName}`,
      `Company Name: ${data.companyName || "Not provided"}`,
      `Email Address: ${data.email}`,
      `Phone Number: ${data.phone}`,
      `Country: ${data.country}`,
      `Purpose: ${data.purpose}`,
      `Preferred Date: ${data.date}`,
      `Preferred Time: ${data.time} (Sri Lanka time)` ,
      `Meeting Format: ${data.meetingFormat}`,
      `Additional Information: ${data.details || "Not provided"}`,
      "",
      "This is an appointment request and is subject to confirmation by MI CORTEX X INC."
    ].join("\n");
  }

  fab.addEventListener("click", openHub);
  root.querySelector(".mcx-hub-close").addEventListener("click", closeHub);
  overlay.addEventListener("click", event => { if (event.target === overlay) closeHub(); });
  root.addEventListener("click", event => {
    const open = event.target.closest("[data-open]");
    if (open) showPanel(open.dataset.open);
    const back = event.target.closest(".mcx-hub-back");
    if (back) showPanel(back.dataset.back || "main");
    const executive = event.target.closest("[data-executive]");
    if (executive) {
      selectedExecutive = executive.dataset.executive;
      root.querySelector("[data-selected-executive]").textContent = `Selected: ${selectedExecutive}`;
      const today = colomboNow().date;
      const dateInput = root.querySelector('input[name="date"]');
      dateInput.min = today;
      showPanel("appointment");
    }
    const direct = event.target.closest("[data-direct]");
    if (direct) {
      const message = direct.dataset.message || "Hello";
      if (direct.dataset.direct === "whatsapp") window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
      if (direct.dataset.direct === "telegram") {
        const telegramUrl =
          TELEGRAM_URL +
          "?text=" +
          encodeURIComponent(message);

        copyText(message).catch(() => {});

        showToast(
          "Telegram opened with the message prepared. Press Send to continue."
        );

        window.open(
          telegramUrl,
          "_blank",
          "noopener,noreferrer"
        );
      }
      if (direct.dataset.direct === "email") window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(direct.dataset.subject || "MI CORTEX X Request")}&body=${encodeURIComponent(direct.dataset.body || "Hello")}`;
    }
    const send = event.target.closest("[data-send]");
    if (send && appointmentMessage) {
      if (send.dataset.send === "whatsapp") window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(appointmentMessage)}`, "_blank", "noopener");
      if (send.dataset.send === "telegram") {
        const telegramUrl =
          TELEGRAM_URL +
          "?text=" +
          encodeURIComponent(appointmentMessage);

        copyText(appointmentMessage).catch(() => {});

        showToast(
          "Telegram opened with the appointment request prepared. Press Send to continue."
        );

        window.open(
          telegramUrl,
          "_blank",
          "noopener,noreferrer"
        );
      }
    }
  });

  root.querySelector(".mcx-hub-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = validateAppointment(event.currentTarget);
    if (!data) { showToast("Please correct the highlighted appointment details."); return; }
    appointmentMessage = buildAppointmentMessage(data);
    showPanel("send");
  });

  document.addEventListener("keydown", event => {
    if (overlay.hidden) return;
    if (event.key === "Escape") closeHub();
    if (event.key === "Tab") {
      const focusable = [...modal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])')].filter(el => !el.closest("[hidden]"));
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();


/* MCX_EXACT_FLOATING_BUTTON_FIX_START */
(function () {
  "use strict";

  const iconClasses = [
    "mcx-fixed-whatsapp-icon",
    "mcx-fixed-telegram-icon",
    "mcx-fixed-company-icon",
    "mcx-fixed-ai-icon"
  ];

  let currentIconIndex = 0;
  let iconTimer = null;

  function findLauncher() {
    return document.querySelector(
      "[data-mcx-contact-toggle]," +
      ".mcx-contact-launcher," +
      ".mcx-contact-fab," +
      ".mcx-contact-button," +
      ".mcx-widget-launcher"
    );
  }

  function findWidgetRoot(launcher) {
    if (!launcher) {
      return null;
    }

    return (
      launcher.closest(
        "[data-mcx-contact-widget]," +
        ".mcx-contact-widget," +
        ".mcx-contact-hub," +
        ".mcx-widget"
      ) || launcher
    );
  }

  function getCurrentRoute() {
    return window.location.hash
      .replace(/^#\/?/, "")
      .split("/")[0]
      .trim()
      .toLowerCase();
  }

  function isFrontPage() {
    const route = getCurrentRoute();

    return (
      !window.location.hash ||
      window.location.hash === "#" ||
      route === "" ||
      route === "home" ||
      route === "overview"
    );
  }

  function updateFrontPageVisibility() {
    const launcher = findLauncher();
    const widget = findWidgetRoot(launcher);

    if (!widget) {
      return;
    }

    widget.classList.toggle(
      "mcx-floating-hidden-on-front-page",
      isFrontPage()
    );
  }

  function removeConnectLabel() {
    document.querySelectorAll("body *").forEach((element) => {
      if (element.children.length !== 0) {
        return;
      }

      const text = (element.textContent || "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();

      if (text === "connect with mi cortex x") {
        element.classList.add("mcx-connect-label-removed");
        element.setAttribute("aria-hidden", "true");
      }
    });
  }

  function showCurrentIcon(launcher) {
    iconClasses.forEach((className) => {
      launcher.classList.remove(className);
    });

    launcher.classList.add(
      "mcx-fixed-rotating-launcher",
      iconClasses[currentIconIndex]
    );

    launcher.setAttribute(
      "aria-label",
      "Open MI CORTEX X contact center"
    );
  }

  function startIconRotation() {
    const launcher = findLauncher();

    if (!launcher) {
      window.setTimeout(startIconRotation, 300);
      return;
    }

    if (iconTimer) {
      window.clearInterval(iconTimer);
    }

    currentIconIndex = 0;
    showCurrentIcon(launcher);

    iconTimer = window.setInterval(() => {
      currentIconIndex =
        (currentIconIndex + 1) % iconClasses.length;

      showCurrentIcon(launcher);
    }, 3000);
  }

  function initializeFloatingButtonFix() {
    updateFrontPageVisibility();
    removeConnectLabel();
    startIconRotation();

    window.setTimeout(removeConnectLabel, 500);
    window.setTimeout(removeConnectLabel, 1500);
  }

  window.addEventListener(
    "hashchange",
    updateFrontPageVisibility
  );

  window.addEventListener(
    "popstate",
    updateFrontPageVisibility
  );

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeFloatingButtonFix,
      { once: true }
    );
  } else {
    initializeFloatingButtonFix();
  }
})();
/* MCX_EXACT_FLOATING_BUTTON_FIX_END */
