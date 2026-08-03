(() => {
  "use strict";

  if (window.__MCX_CORTEX_CORE_AI_V2__) return;
  window.__MCX_CORTEX_CORE_AI_V2__ = true;

  const STORAGE_KEY = "mcx_cortex_core_ai_history_v2";
  const MAX_HISTORY = 80;

  const COMPANY = {
    name: "MI CORTEX X",
    website: "https://mi-cortex-x.vercel.app",
    whatsappNumber: "94756390621",
    whatsappDisplay: "+94 75 639 0621",
    telegram: "MICORTEXX",
    primaryEmail: "micortexx@gmail.com",
    supportEmail: "support.micortexx@gmail.com",
    salesEmail: "sales.cortexx@gmail.com",
    office: "Online operations, Colombo, Sri Lanka",
    hours: "Monday to Saturday — 24 hours. Sunday — Closed.",
    owner: "M.I. MUHAMMADH",
    chairman: "M.I. MUHAMMADH",
    ceo: "M.I. MUHAMMADH",
    founder: "M.I. MUHAMMADH"
  };

  const SERVICE_DATA = [
    { name: "AI Development", price: "LKR 60,000", delivery: "7–30 days", route: "#/services/ai-development" },
    { name: "AI Chatbot Development", price: "LKR 45,000", delivery: "5–14 days", route: "#/services/ai-chatbot-development" },
    { name: "AI Automation", price: "LKR 65,000", delivery: "7–21 days", route: "#/services/ai-automation" },
    { name: "Website Development", price: "LKR 15,000", delivery: "3–14 days", route: "#/services/website-development" },
    { name: "Web Application Development", price: "LKR 50,000", delivery: "7–30 days", route: "#/services/web-application-development" },
    { name: "Mobile App Development", price: "LKR 85,000", delivery: "14–45 days", route: "#/services/mobile-app-development" },
    { name: "Desktop Software Development", price: "LKR 70,000", delivery: "10–30 days", route: "#/services/desktop-software-development" },
    { name: "Enterprise Software", price: "LKR 250,000", delivery: "30–90 days", route: "#/services/enterprise-software" },
    { name: "API Development", price: "LKR 30,000", delivery: "3–10 days", route: "#/services/api-development" },
    { name: "API Integration", price: "LKR 20,000", delivery: "2–7 days", route: "#/services/api-integration" },
    { name: "Cloud Solutions", price: "LKR 30,000", delivery: "2–10 days", route: "#/services/cloud-solutions" },
    { name: "UI/UX Design", price: "LKR 15,000", delivery: "3–10 days", route: "#/services/ui-ux-design" },
    { name: "Software Maintenance", price: "LKR 7,500 per month", delivery: "Ongoing", route: "#/services/software-maintenance" },
    { name: "Technical Consulting", price: "LKR 5,000", delivery: "Same day when available", route: "#/services/technical-consulting" },
    { name: "Custom Software Development", price: "LKR 100,000", delivery: "14–90 days", route: "#/services/custom-software-development" }
  ];

  const PRODUCT_DATA = [
    { name: "CORTEX CORE AI", status: "Development", price: "Starting from LKR 45,000 for business integration", route: "#/products/cortex-core-ai" },
    { name: "MI Business Management Suite", status: "Upcoming", price: "Starting from LKR 80,000", route: "#/products/business-suite" }
  ];

  const QUICK_ACTIONS = [
    { label: "Products", route: "#/products" },
    { label: "Services", route: "#/services" },
    { label: "Pricing", route: "#/pricing" },
    { label: "Premium", route: "#/premium" },
    { label: "Contact", route: "#/contact" }
  ];

  const state = {
    history: [],
    lastQuestion: "",
    lastResponse: null,
    lastFocus: null,
    opened: false
  };

  const normalize = (value) => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  const hasSinhala = (text) => /[\u0D80-\u0DFF]/.test(text);
  const hasTamil = (text) => /[\u0B80-\u0BFF]/.test(text);

  function routeAction(label, route) {
    return { type: "route", label, value: route };
  }

  function externalAction(label, url) {
    return { type: "external", label, value: url };
  }

  function mailAction(label, email, subject = "MI CORTEX X Inquiry") {
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    return externalAction(label, url);
  }

  function getGreeting(text) {
    if (hasSinhala(text)) {
      return {
        text: "ආයුබෝවන් 👋 මම CORTEX CORE AI. MI CORTEX X සමාගම, products, services, pricing, support සහ contact details ගැන මගෙන් අහන්න පුළුවන්.",
        actions: QUICK_ACTIONS.map(item => routeAction(item.label, item.route))
      };
    }

    if (hasTamil(text)) {
      return {
        text: "வணக்கம் 👋 நான் CORTEX CORE AI. MI CORTEX X நிறுவனம், தயாரிப்புகள், சேவைகள், விலைகள் மற்றும் தொடர்பு விவரங்கள் பற்றி கேட்கலாம்.",
        actions: QUICK_ACTIONS.map(item => routeAction(item.label, item.route))
      };
    }

    return {
      text: "Hello 👋 I’m CORTEX CORE AI, the automated company assistant of MI CORTEX X. Ask me about the company, products, services, pricing, support, appointments, or contact details.",
      actions: QUICK_ACTIONS.map(item => routeAction(item.label, item.route))
    };
  }

  function findService(question) {
    const q = normalize(question);
    return SERVICE_DATA.find(service => {
      const words = normalize(service.name).split(" ").filter(word => word.length > 2);
      const matches = words.filter(word => q.includes(word));
      return matches.length >= Math.min(2, words.length);
    });
  }

  function findProduct(question) {
    const q = normalize(question);
    return PRODUCT_DATA.find(product => {
      const words = normalize(product.name).split(" ").filter(word => word.length > 2);
      return words.some(word => q.includes(word));
    });
  }

  function answer(question) {
    const q = normalize(question);
    if (!q) return { text: "Please type your question.", actions: [] };

    if (/^(hi|hello|hey|hii|hiii|ayubowan|vanakkam)\b/.test(q) || hasSinhala(question) && q.length < 12) {
      return getGreeting(question);
    }

    if (q.includes("who are you") || q.includes("your name") || q.includes("oya kawda") || q.includes("ඔයා කවුද")) {
      return { text: "I’m CORTEX CORE AI, the automated company assistant of MI CORTEX X.", actions: [] };
    }

    if (q.includes("owner")) {
      return { text: `The Owner of MI CORTEX X INC. is ${COMPANY.owner}.`, actions: [routeAction("View Executive Board", "#/about/executive-board")] };
    }

    if (q.includes("chairman") || q.includes("chairmen")) {
      return { text: `The Chairman of MI CORTEX X INC. is ${COMPANY.chairman}.`, actions: [routeAction("View Executive Board", "#/about/executive-board")] };
    }

    if (q.includes("chief executive") || q.includes("ceo")) {
      return { text: `The Chief Executive Officer (CEO) of MI CORTEX X INC. is ${COMPANY.ceo}.`, actions: [routeAction("View Executive Board", "#/about/executive-board")] };
    }

    if (q.includes("founder")) {
      return { text: `The Founder of MI CORTEX X INC. is ${COMPANY.founder}.`, actions: [routeAction("View Executive Board", "#/about/executive-board")] };
    }

    if (q.includes("company") || q.includes("about") || q.includes("what is mi cortex")) {
      return {
        text: "MI CORTEX X is a Sri Lankan artificial intelligence and software technology company founded in 2026. It develops intelligent digital products and custom technology solutions for businesses, organizations, and individuals worldwide.",
        actions: [routeAction("About MI CORTEX X", "#/about"), externalAction("Official Website", COMPANY.website)]
      };
    }

    if (q.includes("contact") || q.includes("email") || q.includes("whatsapp") || q.includes("telegram")) {
      return {
        text: `Primary email: ${COMPANY.primaryEmail}\nSupport: ${COMPANY.supportEmail}\nSales: ${COMPANY.salesEmail}\nWhatsApp: ${COMPANY.whatsappDisplay}\nTelegram: @${COMPANY.telegram}`,
        actions: [
          externalAction("WhatsApp", `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent("Hello 👋")}`),
          externalAction("Telegram", `https://t.me/${COMPANY.telegram}?text=${encodeURIComponent("Hello 👋")}`),
          mailAction("Email Support", COMPANY.supportEmail, "MI CORTEX X Support Request"),
          routeAction("Contact Page", "#/contact")
        ]
      };
    }

    if (q.includes("hour") || q.includes("open") || q.includes("sunday")) {
      return { text: `Business hours: ${COMPANY.hours}`, actions: [routeAction("Contact Page", "#/contact")] };
    }

    if (q.includes("location") || q.includes("office") || q.includes("address")) {
      return { text: `MI CORTEX X operates online from Colombo, Sri Lanka. There is currently no public walk-in office.`, actions: [routeAction("Contact Page", "#/contact")] };
    }

    if (q.includes("payment") || q.includes("advance") || q.includes("refund")) {
      return {
        text: "Online payments are not activated yet. A 30% advance is normally required after project approval, and the remaining payment is due before final delivery. A full refund is available before project commencement; completed work and delivered milestones are non-refundable after development begins.",
        actions: [routeAction("View Pricing", "#/pricing"), mailAction("Request Quotation", COMPANY.salesEmail, "Quotation Request")]
      };
    }

    if (q.includes("process") || q.includes("project step") || q.includes("how does project")) {
      return {
        text: "Project process:\n1. Free consultation\n2. Requirement analysis and quotation\n3. Project approval and 30% advance\n4. Development and progress updates\n5. Testing, remaining payment, final delivery, and support.",
        actions: [routeAction("Contact Team", "#/contact")]
      };
    }

    if (q.includes("appointment") || q.includes("executive")) {
      return {
        text: "You can request an appointment with the Owner, Chairman, CEO, or Founder through the Executive Board option in the MI CORTEX X contact hub.",
        actions: [routeAction("Executive Board", "#/about/executive-board")]
      };
    }

    const product = findProduct(question);
    if (product) {
      return {
        text: `${product.name}\nStatus: ${product.status}\nPrice: ${product.price}`,
        actions: [routeAction("View Product", product.route), mailAction("Request Information", COMPANY.salesEmail, `${product.name} Information Request`)]
      };
    }

    const service = findService(question);
    if (service) {
      return {
        text: `${service.name}\nStarting price: ${service.price}\nEstimated delivery: ${service.delivery}\nFinal pricing depends on scope, features, integrations, hosting, and support requirements.`,
        actions: [routeAction("View Service", service.route), mailAction("Request Quotation", COMPANY.salesEmail, `${service.name} Quotation Request`)]
      };
    }

    if (q.includes("product")) {
      return {
        text: PRODUCT_DATA.map(product => `• ${product.name} — ${product.status} — ${product.price}`).join("\n"),
        actions: [routeAction("View All Products", "#/products")]
      };
    }

    if (q.includes("service")) {
      return {
        text: SERVICE_DATA.map(service => `• ${service.name} — Starting from ${service.price}`).join("\n"),
        actions: [routeAction("View All Services", "#/services")]
      };
    }

    if (q.includes("price") || q.includes("cost") || q.includes("quotation")) {
      return {
        text: "Prices are starting estimates and may change according to project scope, features, integrations, delivery requirements, hosting, third-party charges, and ongoing support. A custom quotation and free consultation are available.",
        actions: [routeAction("Pricing", "#/pricing"), mailAction("Request Quotation", COMPANY.salesEmail, "MI CORTEX X Quotation Request")]
      };
    }

    if (hasSinhala(question)) {
      return {
        text: `මේ ප්‍රශ්නයට verified answer එකක් දැනට knowledge base එකේ නැහැ. ${COMPANY.supportEmail} හෝ WhatsApp ${COMPANY.whatsappDisplay} මගින් support team එක අමතන්න.`,
        actions: [externalAction("WhatsApp", `https://wa.me/${COMPANY.whatsappNumber}`), mailAction("Email Support", COMPANY.supportEmail)]
      };
    }

    return {
      text: `I don’t have a verified answer for that question yet. Please contact ${COMPANY.supportEmail} or WhatsApp ${COMPANY.whatsappDisplay}.`,
      actions: [externalAction("WhatsApp", `https://wa.me/${COMPANY.whatsappNumber}`), mailAction("Email Support", COMPANY.supportEmail)]
    };
  }

  function loadHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      state.history = Array.isArray(saved) ? saved.slice(-MAX_HISTORY) : [];
    } catch {
      state.history = [];
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history.slice(-MAX_HISTORY)));
    } catch {
      // Storage is optional.
    }
  }

  function pushHistory(message) {
    state.history.push(message);
    state.history = state.history.slice(-MAX_HISTORY);
    saveHistory();
  }

  const root = document.createElement("div");
  root.id = "mcx-ai-chat-root";
  root.innerHTML = `
    <div class="mcx-ai-overlay" hidden>
      <section class="mcx-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="mcx-ai-title">
        <header class="mcx-ai-header">
          <div class="mcx-ai-brand">
            <strong id="mcx-ai-title">CORTEX CORE AI</strong>
            <span>Automated company assistant</span>
          </div>
          <div class="mcx-ai-header-actions">
            <button type="button" class="mcx-ai-icon-button" data-mcx-ai-new title="New chat" aria-label="New chat">+</button>
            <button type="button" class="mcx-ai-icon-button" data-mcx-ai-clear title="Clear history" aria-label="Clear history">&#128465;</button>
            <button type="button" class="mcx-ai-icon-button mcx-ai-close" aria-label="Close">&#10005;</button>
          </div>
        </header>

        <div class="mcx-ai-quick-actions" aria-label="Quick actions"></div>
        <div class="mcx-ai-messages" aria-live="polite"></div>

        <form class="mcx-ai-composer">
          <label class="mcx-ai-sr-only" for="mcx-ai-input">Message CORTEX CORE AI</label>
          <textarea id="mcx-ai-input" rows="1" maxlength="1600" placeholder="Ask about MI CORTEX X..." required></textarea>
          <button type="submit" aria-label="Send message">&#10148;</button>
        </form>
      </section>
    </div>`;
  document.body.appendChild(root);

  const overlay = root.querySelector(".mcx-ai-overlay");
  const dialog = root.querySelector(".mcx-ai-dialog");
  const messages = root.querySelector(".mcx-ai-messages");
  const form = root.querySelector(".mcx-ai-composer");
  const input = root.querySelector("#mcx-ai-input");
  const closeButton = root.querySelector(".mcx-ai-close");
  const newButton = root.querySelector("[data-mcx-ai-new]");
  const clearButton = root.querySelector("[data-mcx-ai-clear]");
  const quickActionsHost = root.querySelector(".mcx-ai-quick-actions");

  function formatTime(timestamp) {
    return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(timestamp));
  }

  function createAction(action) {
    const button = document.createElement(action.type === "external" ? "a" : "button");
    button.className = "mcx-ai-action";
    button.textContent = action.label;

    if (action.type === "external") {
      button.href = action.value;
      if (!action.value.startsWith("mailto:")) {
        button.target = "_blank";
        button.rel = "noopener noreferrer";
      }
    } else {
      button.type = "button";
      button.dataset.mcxAiRoute = action.value;
    }

    return button;
  }

  function renderMessage(message, persist = false) {
    const row = document.createElement("article");
    row.className = `mcx-ai-message mcx-ai-${message.role}`;

    const bubble = document.createElement("div");
    bubble.className = "mcx-ai-bubble";

    const text = document.createElement("div");
    text.className = "mcx-ai-text";
    text.textContent = message.text;
    bubble.appendChild(text);

    if (Array.isArray(message.actions) && message.actions.length) {
      const actionRow = document.createElement("div");
      actionRow.className = "mcx-ai-message-actions";
      message.actions.forEach(action => actionRow.appendChild(createAction(action)));
      bubble.appendChild(actionRow);
    }

    const meta = document.createElement("footer");
    meta.className = "mcx-ai-message-meta";

    const time = document.createElement("time");
    time.dateTime = new Date(message.timestamp).toISOString();
    time.textContent = formatTime(message.timestamp);
    meta.appendChild(time);

    if (message.role === "assistant") {
      const copy = document.createElement("button");
      copy.type = "button";
      copy.className = "mcx-ai-copy";
      copy.textContent = "Copy";
      copy.dataset.copyText = message.text;
      meta.appendChild(copy);
    }

    bubble.appendChild(meta);
    row.appendChild(bubble);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;

    if (persist) pushHistory(message);
    return row;
  }

  function addMessage(role, text, actions = [], persist = true) {
    return renderMessage({ role, text, actions, timestamp: Date.now() }, persist);
  }

  function showTyping() {
    const row = document.createElement("div");
    row.className = "mcx-ai-message mcx-ai-assistant mcx-ai-typing";
    row.innerHTML = `<div class="mcx-ai-bubble"><span></span><span></span><span></span></div>`;
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
    return row;
  }

  function renderHistory() {
    messages.innerHTML = "";
    state.history.forEach(message => renderMessage(message, false));
  }

  function startNewChat() {
    state.history = [];
    saveHistory();
    messages.innerHTML = "";
    state.lastQuestion = "";
    state.lastResponse = null;
    const greeting = getGreeting("");
    addMessage("assistant", "Hi 👋", [], true);
    setTimeout(() => addMessage("assistant", greeting.text, greeting.actions, true), 280);
  }

  function openChat() {
    state.lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("mcx-ai-open");

    if (!state.opened) {
      state.opened = true;
      loadHistory();
      if (state.history.length) {
        renderHistory();
      } else {
        startNewChat();
      }
    }

    setTimeout(() => input.focus(), 50);
  }

  function closeChat() {
    overlay.hidden = true;
    document.body.classList.remove("mcx-ai-open");
    if (state.lastFocus && typeof state.lastFocus.focus === "function") state.lastFocus.focus();
  }

  function renderQuickActions() {
    quickActionsHost.innerHTML = "";
    QUICK_ACTIONS.forEach(item => quickActionsHost.appendChild(createAction(routeAction(item.label, item.route))));
  }

  function openRoute(route) {
    closeChat();
    if (window.location.hash === route) {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.hash = route;
    }
  }

  async function copyText(text, button) {
    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => { button.textContent = original; }, 1300);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
  }

  document.addEventListener("click", event => {
    const trigger = event.target.closest("button,a,[role='button']");
    if (!trigger) return;
    const text = normalize(trigger.innerText || trigger.textContent);
    if (!text.includes("chat with cortex core ai")) return;
    event.preventDefault();
    event.stopPropagation();
    openChat();
  }, true);

  root.addEventListener("click", event => {
    const routeButton = event.target.closest("[data-mcx-ai-route]");
    if (routeButton) {
      event.preventDefault();
      openRoute(routeButton.dataset.mcxAiRoute);
      return;
    }

    const copyButton = event.target.closest("[data-copy-text]");
    if (copyButton) {
      copyText(copyButton.dataset.copyText || "", copyButton);
    }
  });

  closeButton.addEventListener("click", closeChat);
  newButton.addEventListener("click", startNewChat);
  clearButton.addEventListener("click", () => {
    if (window.confirm("Clear the saved CORTEX CORE AI chat history?")) startNewChat();
  });

  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeChat();
  });

  document.addEventListener("keydown", event => {
    if (overlay.hidden) return;
    if (event.key === "Escape") closeChat();
    if (event.key !== "Tab") return;

    const focusable = [...dialog.querySelectorAll("button, textarea, a[href], [tabindex]:not([tabindex='-1'])")]
      .filter(element => !element.disabled && !element.hidden);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;

    state.lastQuestion = question;
    addMessage("user", question, [], true);
    input.value = "";
    input.style.height = "auto";

    const typing = showTyping();
    const delay = Math.min(1250, 420 + question.length * 8);

    setTimeout(() => {
      typing.remove();
      const response = answer(question);
      state.lastResponse = response;
      addMessage("assistant", response.text, response.actions, true);
    }, delay);
  });

  renderQuickActions();
})();
