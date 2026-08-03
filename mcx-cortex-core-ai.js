(() => {
  "use strict";

  if (window.__MCX_CORTEX_CORE_AI_V3__) return;
  window.__MCX_CORTEX_CORE_AI_V3__ = true;

  const STORAGE_KEY = "mcx_cortex_core_ai_v3_history";
  const MAX_HISTORY = 80;

  const company = {
    name: "MI CORTEX X",
    founded: "2026",
    location: "Online operations, Colombo, Sri Lanka",
    website: "https://mi-cortex-x.vercel.app",
    email: "micortexx@gmail.com",
    supportEmail: "support.micortexx@gmail.com",
    salesEmail: "sales.cortexx@gmail.com",
    whatsappNumber: "94756390621",
    whatsappDisplay: "+94 75 639 0621",
    telegram: "MICORTEXX",
    owner: "M.I. MUHAMMADH",
    chairman: "M.I. MUHAMMADH",
    ceo: "M.I. MUHAMMADH",
    founder: "M.I. MUHAMMADH"
  };

  const serviceData = [
    {name:"AI Development", price:"LKR 60,000", route:"#/services/ai-development", delivery:"7–30 days"},
    {name:"AI Chatbot Development", price:"LKR 45,000", route:"#/services/ai-chatbot-development", delivery:"5–14 days"},
    {name:"AI Automation", price:"LKR 65,000", route:"#/services/ai-automation", delivery:"7–21 days"},
    {name:"Website Development", price:"LKR 15,000", route:"#/services/website-development", delivery:"3–14 days"},
    {name:"Web Application Development", price:"LKR 50,000", route:"#/services/web-application-development", delivery:"7–30 days"},
    {name:"Mobile App Development", price:"LKR 85,000", route:"#/services/mobile-app-development", delivery:"14–45 days"},
    {name:"Desktop Software Development", price:"LKR 70,000", route:"#/services/desktop-software-development", delivery:"10–30 days"},
    {name:"Enterprise Software", price:"LKR 250,000", route:"#/services/enterprise-software", delivery:"30–90 days"},
    {name:"API Development", price:"LKR 30,000", route:"#/services/api-development", delivery:"3–10 days"},
    {name:"API Integration", price:"LKR 20,000", route:"#/services/api-integration", delivery:"2–7 days"},
    {name:"Cloud Solutions", price:"LKR 30,000", route:"#/services/cloud-solutions", delivery:"2–10 days"},
    {name:"UI/UX Design", price:"LKR 15,000", route:"#/services/ui-ux-design", delivery:"3–10 days"},
    {name:"Software Maintenance", price:"LKR 7,500 per month", route:"#/services/software-maintenance", delivery:"Ongoing"},
    {name:"Technical Consulting", price:"LKR 5,000", route:"#/services/technical-consulting", delivery:"Same day when available"},
    {name:"Custom Software Development", price:"LKR 100,000", route:"#/services/custom-software-development", delivery:"14–90 days"}
  ];

  const productData = [
    {name:"CORTEX CORE AI", status:"Development", price:"Starting from LKR 45,000 for business integration", route:"#/products/cortex-core-ai"},
    {name:"MI Business Management Suite", status:"Upcoming", price:"Starting from LKR 80,000", route:"#/products/business-suite"}
  ];

  const normalize = value => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  const esc = value => String(value || "").replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[char]);

  const actions = {
    route(label, href, icon = "&#8594;") { return {type:"route", label, href, icon}; },
    external(label, href, icon = "&#8599;") { return {type:"external", label, href, icon}; },
    command(label, command, icon = "+") { return {type:"command", label, command, icon}; }
  };

  function detectLanguage(text) {
    if (/[\u0D80-\u0DFF]/.test(text)) return "si";
    if (/[\u0B80-\u0BFF]/.test(text)) return "ta";
    return "en";
  }

  function findService(q) {
    const nq = normalize(q);
    return serviceData.find(item => {
      const words = normalize(item.name).split(" ").filter(w => w.length > 2);
      return words.filter(w => nq.includes(w)).length >= Math.min(2, words.length);
    });
  }

  function findProduct(q) {
    const nq = normalize(q);
    return productData.find(item => normalize(item.name).split(" ").filter(w => w.length > 2).some(w => nq.includes(w)));
  }

  function response(text) {
    const q = normalize(text);
    const lang = detectLanguage(text);
    const service = findService(text);
    const product = findProduct(text);
    const appointmentWords = ["appointment", "meeting", "book", "executive", "හමුව", "වෙන්කර", "පත්වීම", "சந்திப்பு"];

    if (!q) return {text:"Please type your question.", actions:[]};

    if (/^(hi|hello|hey|hii|hiii|ayubowan|ආයුබෝවන්|vanakkam)\b/.test(q)) {
      return {
        text: lang === "si"
          ? "ආයුබෝවන් 👋 මම CORTEX CORE AI. MI CORTEX X සමාගම, products, services, prices, support සහ appointments ගැන අහන්න පුළුවන්."
          : "Hello 👋 I’m CORTEX CORE AI. Ask me about MI CORTEX X, products, services, pricing, support, contact details, or appointments.",
        actions:[
          actions.route("View Products", "#/products"),
          actions.route("View Services", "#/services"),
          actions.command("Book Appointment", "appointment", "&#128197;")
        ]
      };
    }

    if (appointmentWords.some(word => q.includes(normalize(word)))) {
      return {
        text: lang === "si"
          ? "Executive Board සාමාජිකයෙකු සමඟ appointment request එකක් සකස් කරන්න පුළුවන්. පහත button එක press කර Owner, Chairman, CEO හෝ Founder තෝරන්න."
          : "You can prepare an appointment request with a member of the Executive Board. Select Owner, Chairman, CEO, or Founder on the next screen.",
        actions:[actions.command("SELECT EXECUTIVE & BOOK APPOINTMENT", "appointment", "&#128197;")]
      };
    }

    if (q.includes("owner")) return {text:`The Owner of MI CORTEX X INC. is ${company.owner}.`, actions:[actions.route("Executive Board", "#/about/executive-board")]};
    if (q.includes("chairman") || q.includes("chairmen")) return {text:`The Chairman of MI CORTEX X INC. is ${company.chairman}.`, actions:[actions.command("Book Appointment", "appointment", "&#128197;")]};
    if (q.includes("chief executive") || q.includes("ceo")) return {text:`The Chief Executive Officer (CEO) of MI CORTEX X INC. is ${company.ceo}.`, actions:[actions.command("Book CEO Appointment", "appointment", "&#128197;")]};
    if (q.includes("founder")) return {text:`The Founder of MI CORTEX X INC. is ${company.founder}.`, actions:[actions.command("Book Appointment", "appointment", "&#128197;")]};

    if (q.includes("company") || q.includes("about") || q.includes("who is mi cortex")) {
      return {
        text:"MI CORTEX X is a Sri Lankan artificial intelligence and software technology company founded in 2026. It develops intelligent digital products and custom technology solutions for businesses, organizations, and individuals worldwide.",
        actions:[actions.route("About MI CORTEX X", "#/about"), actions.route("Executive Board", "#/about/executive-board")]
      };
    }

    if (q.includes("contact") || q.includes("email") || q.includes("whatsapp") || q.includes("telegram")) {
      return {
        text:`Primary email: ${company.email}\nSupport: ${company.supportEmail}\nSales: ${company.salesEmail}\nWhatsApp: ${company.whatsappDisplay}\nTelegram: @${company.telegram}`,
        actions:[
          actions.external("WhatsApp", `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello 👋")}`, "&#128172;"),
          actions.external("Telegram", `https://t.me/${company.telegram}?text=${encodeURIComponent("Hello 👋")}`, "&#9992;"),
          actions.external("Email Support", `mailto:${company.supportEmail}?subject=${encodeURIComponent("MI CORTEX X Support Request")}`, "&#9993;"),
          actions.route("Contact Page", "#/contact")
        ]
      };
    }

    if (q.includes("hour") || q.includes("open") || q.includes("sunday")) {
      return {text:"Business hours: Monday to Saturday — 24 hours. Sunday — Closed.", actions:[actions.route("Contact Details", "#/contact")]};
    }

    if (q.includes("location") || q.includes("office") || q.includes("address")) {
      return {text:`MI CORTEX X operates online from Colombo, Sri Lanka. There is currently no public walk-in office.`, actions:[actions.route("Contact Page", "#/contact")]};
    }

    if (q.includes("payment") || q.includes("advance") || q.includes("refund")) {
      return {
        text:"Online payments are not activated yet. A 30% advance is normally required after project approval, and the remaining payment is due before final delivery. Full refund is available before project commencement; completed work and delivered milestones are non-refundable after development begins.",
        actions:[actions.route("View Pricing", "#/pricing"), actions.external("Ask Sales", `mailto:${company.salesEmail}?subject=${encodeURIComponent("Payment and Quotation Inquiry")}`, "&#9993;")]
      };
    }

    if (q.includes("process") || q.includes("project step") || q.includes("how start")) {
      return {
        text:"Project process:\n1. Free consultation\n2. Requirement analysis and quotation\n3. Project approval and 30% advance\n4. Development and progress updates\n5. Testing, remaining payment, final delivery, and support.",
        actions:[actions.command("Book Consultation", "appointment", "&#128197;"), actions.route("Contact", "#/contact")]
      };
    }

    if (service) {
      return {
        text:`${service.name}\nStarting price: ${service.price}\nEstimated delivery: ${service.delivery}\nFinal pricing depends on project scope, features, integrations, hosting, and support requirements.`,
        actions:[actions.route(`View ${service.name}`, service.route), actions.command("Request Consultation", "appointment", "&#128197;"), actions.external("Ask on WhatsApp", `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello 👋 I need information about ${service.name}.`)}`, "&#128172;")]
      };
    }

    if (product) {
      return {
        text:`${product.name}\nStatus: ${product.status}\nPrice: ${product.price}`,
        actions:[actions.route(`View ${product.name}`, product.route), actions.external("Request Information", `mailto:${company.salesEmail}?subject=${encodeURIComponent(`Information Request - ${product.name}`)}`, "&#9993;")]
      };
    }

    if (q.includes("product")) {
      return {
        text:"Current products:\n• CORTEX CORE AI — Development — Starting from LKR 45,000 for business integration\n• MI Business Management Suite — Upcoming — Starting from LKR 80,000",
        actions:[actions.route("Browse Products", "#/products"), actions.route("Browse Premium", "#/premium")]
      };
    }

    if (q.includes("service")) {
      return {
        text:"MI CORTEX X provides AI development, chatbot development, automation, websites, web applications, mobile applications, desktop software, enterprise systems, API development, cloud solutions, UI/UX design, maintenance, consulting, and custom software development.",
        actions:[actions.route("Browse Services", "#/services"), actions.route("View Pricing", "#/pricing"), actions.command("Book Consultation", "appointment", "&#128197;")]
      };
    }

    if (q.includes("price") || q.includes("cost") || q.includes("quotation")) {
      return {
        text:"All displayed prices are starting estimates. Final prices depend on scope, features, integrations, delivery requirements, hosting, third-party charges, and ongoing support. A custom quotation and a free consultation of up to 30 minutes are available.",
        actions:[actions.route("View Pricing", "#/pricing"), actions.command("Book Free Consultation", "appointment", "&#128197;"), actions.external("Request Quote", `mailto:${company.salesEmail}?subject=${encodeURIComponent("Quotation Request")}`, "&#9993;")]
      };
    }

    return {
      text: lang === "si"
        ? "ඒ ප්‍රශ්නයට තහවුරු කළ පිළිතුරක් දැනට මගේ knowledge base එකේ නැහැ. Support team එක සම්බන්ධ කරගන්න හෝ company catalogue එක බලන්න."
        : "I do not have a verified answer for that question yet. You can contact the support team or browse the company catalogue.",
      actions:[
        actions.route("Products", "#/products"),
        actions.route("Services", "#/services"),
        actions.external("WhatsApp Support", `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello 👋 I need assistance.")}`, "&#128172;"),
        actions.command("Book Appointment", "appointment", "&#128197;")
      ]
    };
  }

  const root = document.createElement("div");
  root.id = "mcx-ai-chat-root";
  root.innerHTML = `
    <div class="mcx-ai-overlay" hidden>
      <section class="mcx-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="mcx-ai-title">
        <header class="mcx-ai-header">
          <div class="mcx-ai-brand"><strong id="mcx-ai-title">CORTEX CORE AI</strong><span>MI CORTEX X company assistant</span></div>
          <div class="mcx-ai-header-actions">
            <button type="button" data-ai-new title="New chat">+</button>
            <button type="button" data-ai-clear title="Clear history">&#128465;</button>
            <button class="mcx-ai-close" type="button" aria-label="Close">&#10005;</button>
          </div>
        </header>
        <div class="mcx-ai-quick" aria-label="Quick actions">
          <button type="button" data-ai-prompt="Tell me about your products">Products</button>
          <button type="button" data-ai-prompt="Tell me about your services">Services</button>
          <button type="button" data-ai-prompt="Show me pricing information">Pricing</button>
          <button type="button" data-ai-command="appointment">Appointment</button>
          <button type="button" data-ai-prompt="How can I contact MI CORTEX X?">Contact</button>
        </div>
        <div class="mcx-ai-messages" aria-live="polite"></div>
        <form class="mcx-ai-composer">
          <textarea rows="1" maxlength="1500" placeholder="Ask about MI CORTEX X..." required></textarea>
          <button type="submit" aria-label="Send">&#10148;</button>
        </form>
      </section>
    </div>`;
  document.body.appendChild(root);

  const overlay = root.querySelector(".mcx-ai-overlay");
  const dialog = root.querySelector(".mcx-ai-dialog");
  const messages = root.querySelector(".mcx-ai-messages");
  const form = root.querySelector("form");
  const input = root.querySelector("textarea");
  const closeButton = root.querySelector(".mcx-ai-close");
  let opened = false;
  let lastFocus = null;
  let history = [];

  function saveHistory() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-MAX_HISTORY))); } catch (_) {}
  }

  function loadHistory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      history = Array.isArray(parsed) ? parsed.slice(-MAX_HISTORY) : [];
    } catch (_) { history = []; }
  }

  function timeLabel(timestamp = Date.now()) {
    return new Intl.DateTimeFormat(undefined, {hour:"2-digit", minute:"2-digit"}).format(new Date(timestamp));
  }

  function renderActions(container, list) {
    if (!Array.isArray(list) || !list.length) return;
    const row = document.createElement("div");
    row.className = "mcx-ai-actions";
    list.forEach(action => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mcx-ai-action";
      button.innerHTML = `<span aria-hidden="true">${action.icon || "&#8594;"}</span>${esc(action.label)}`;
      if (action.type === "route") button.dataset.aiRoute = action.href;
      if (action.type === "external") button.dataset.aiExternal = action.href;
      if (action.type === "command") button.dataset.aiCommand = action.command;
      row.appendChild(button);
    });
    container.appendChild(row);
  }

  function addMessage(type, text, actionList = [], options = {}) {
    const timestamp = options.timestamp || Date.now();
    const row = document.createElement("article");
    row.className = `mcx-ai-message mcx-ai-${type}`;
    const content = document.createElement("div");
    content.className = "mcx-ai-message-content";
    const bubble = document.createElement("div");
    bubble.className = "mcx-ai-bubble";
    bubble.textContent = text;
    content.appendChild(bubble);
    renderActions(content, actionList);
    const meta = document.createElement("div");
    meta.className = "mcx-ai-meta";
    meta.innerHTML = `<time>${esc(timeLabel(timestamp))}</time>${type === "assistant" ? '<button type="button" data-ai-copy title="Copy answer">Copy</button>' : ""}`;
    content.appendChild(meta);
    row.appendChild(content);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;

    if (!options.skipHistory) {
      history.push({type, text, actions:actionList, timestamp});
      history = history.slice(-MAX_HISTORY);
      saveHistory();
    }
    return row;
  }

  function restoreMessages() {
    messages.innerHTML = "";
    history.forEach(item => addMessage(item.type, item.text, item.actions || [], {timestamp:item.timestamp, skipHistory:true}));
  }

  function greeting() {
    addMessage("assistant", "Hi 👋", [], {skipHistory:false});
    window.setTimeout(() => addMessage("assistant", "I’m CORTEX CORE AI. Ask me about MI CORTEX X, products, services, pricing, support, contact details, or appointments.", [
      actions.route("Products", "#/products"),
      actions.route("Services", "#/services"),
      actions.command("Book Appointment", "appointment", "&#128197;")
    ]), 300);
  }

  function openChat() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("mcx-ai-open");
    if (!opened) {
      opened = true;
      loadHistory();
      if (history.length) restoreMessages(); else greeting();
    }
    window.setTimeout(() => input.focus(), 50);
  }

  function closeChat() {
    overlay.hidden = true;
    document.body.classList.remove("mcx-ai-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function showTyping() {
    const row = document.createElement("div");
    row.className = "mcx-ai-message mcx-ai-assistant mcx-ai-typing";
    row.innerHTML = '<div class="mcx-ai-message-content"><div class="mcx-ai-bubble"><i></i><i></i><i></i></div></div>';
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
    return row;
  }

  function ask(question) {
    const q = String(question || "").trim();
    if (!q) return;
    addMessage("user", q);
    input.value = "";
    input.style.height = "auto";
    const typing = showTyping();
    const result = response(q);
    window.setTimeout(() => {
      typing.remove();
      addMessage("assistant", result.text, result.actions || []);
    }, Math.min(1050, 350 + q.length * 7));
  }

  function openAppointmentSelector() {
    closeChat();
    const hub = document.getElementById("mcx-contact-hub-root");
    if (!hub) {
      window.location.hash = "#/contact";
      return;
    }
    const fab = hub.querySelector(".mcx-hub-fab");
    const overlayElement = hub.querySelector(".mcx-hub-overlay");
    if (overlayElement && overlayElement.hidden && fab) fab.click();
    window.setTimeout(() => {
      const executiveButton = hub.querySelector('[data-open="executives"]');
      if (executiveButton) executiveButton.click();
    }, 120);
  }

  function runCommand(command) {
    if (command === "appointment") openAppointmentSelector();
  }

  document.addEventListener("click", event => {
    const target = event.target.closest("button,a,[role='button']");
    if (!target) return;
    const label = normalize(target.innerText || target.textContent);
    if (label.includes("chat with cortex core ai")) {
      event.preventDefault();
      event.stopPropagation();
      openChat();
    }
  }, true);

  root.addEventListener("click", event => {
    const prompt = event.target.closest("[data-ai-prompt]");
    if (prompt) ask(prompt.dataset.aiPrompt);

    const route = event.target.closest("[data-ai-route]");
    if (route) {
      closeChat();
      window.location.hash = route.dataset.aiRoute.replace(/^#/, "");
      if (!window.location.hash.startsWith("#")) window.location.hash = route.dataset.aiRoute;
    }

    const external = event.target.closest("[data-ai-external]");
    if (external) window.open(external.dataset.aiExternal, "_blank", "noopener,noreferrer");

    const command = event.target.closest("[data-ai-command]");
    if (command) runCommand(command.dataset.aiCommand);

    const copy = event.target.closest("[data-ai-copy]");
    if (copy) {
      const text = copy.closest(".mcx-ai-message-content")?.querySelector(".mcx-ai-bubble")?.textContent || "";
      navigator.clipboard?.writeText(text).then(() => { copy.textContent = "Copied"; setTimeout(() => { copy.textContent = "Copy"; }, 1200); }).catch(() => {});
    }

    if (event.target.closest("[data-ai-new]")) {
      messages.innerHTML = "";
      history = [];
      saveHistory();
      greeting();
    }

    if (event.target.closest("[data-ai-clear]")) {
      if (window.confirm("Clear the saved CORTEX CORE AI chat history?")) {
        history = [];
        saveHistory();
        messages.innerHTML = "";
        greeting();
      }
    }
  });

  closeButton.addEventListener("click", closeChat);
  overlay.addEventListener("click", event => { if (event.target === overlay) closeChat(); });

  document.addEventListener("keydown", event => {
    if (overlay.hidden) return;
    if (event.key === "Escape") closeChat();
    if (event.key === "Tab") {
      const focusable = [...dialog.querySelectorAll("button,textarea,a[href],[tabindex]:not([tabindex='-1'])")].filter(el => !el.disabled && !el.hidden);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); }
  });
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 135)}px`;
  });
  form.addEventListener("submit", event => { event.preventDefault(); ask(input.value); });
})();
