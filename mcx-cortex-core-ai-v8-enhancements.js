(() => {
  "use strict";

  if (window.__MCX_AI_V8_ENHANCEMENTS__) return;
  window.__MCX_AI_V8_ENHANCEMENTS__ = true;

  const KEYS = {
    v8: "mcx_ai_v8_preferences",
    pins: "mcx_ai_v8_pins",
    recent: "mcx_ai_v8_recent_actions",
    consent: "mcx_ai_v8_privacy_consent",
    calculator: "mcx_ai_v8_calculator"
  };

  const company = {
    sales: "sales.cortexx@gmail.com",
    support: "support.micortexx@gmail.com",
    whatsapp: "94756390621"
  };

  const servicePrices = {
    "Website Development": 15000,
    "Web Application Development": 50000,
    "Mobile App Development": 85000,
    "AI Chatbot Development": 45000,
    "AI Automation": 65000,
    "Custom Software Development": 100000,
    "UI/UX Design": 15000,
    "API Integration": 20000,
    "Cloud Solutions": 30000
  };

  const safeJSON = (key, fallback) => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "null");
      return value ?? fallback;
    } catch {
      return fallback;
    }
  };

  const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  };

  const prefs = safeJSON(KEYS.v8, {
    compact: false,
    contrast: false,
    timestamps: true,
    sounds: false,
    reducedMotion: false,
    readingWidth: "normal",
    density: "comfortable",
    language: "auto"
  });

  let pins = safeJSON(KEYS.pins, []);
  let recent = safeJSON(KEYS.recent, []);
  let sessionStarted = Date.now();
  let unread = 0;
  let root = null;
  let dialog = null;
  let messages = null;
  let enhancementHost = null;
  let commandPanel = null;
  let faqPanel = null;
  let calculatorPanel = null;
  let customerPanel = null;
  let toastHost = null;
  let initialized = false;

  const normalize = value => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  function toast(message) {
    if (!toastHost) return;
    const item = document.createElement("div");
    item.className = "mcx-v8-toast";
    item.textContent = message;
    toastHost.append(item);
    window.setTimeout(() => item.remove(), 2600);
  }

  function beep() {
    if (!prefs.sounds) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = 620;
      gain.gain.value = 0.025;
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.06);
    } catch {}
  }

  function download(filename, content, type = "text/plain;charset=utf-8") {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function transcriptRows() {
    if (!messages) return [];
    return [...messages.querySelectorAll(".mcx-ai-message")].map((row, index) => ({
      index: index + 1,
      sender: row.classList.contains("mcx-ai-user") ? "Customer" : "CORTEX CORE AI",
      text: row.querySelector(".mcx-ai-content")?.innerText?.trim() || row.innerText.trim(),
      time: row.querySelector(".mcx-ai-meta")?.innerText?.trim() || ""
    }));
  }

  function addRecent(label, value) {
    recent.unshift({ label, value, time: Date.now() });
    recent = recent.slice(0, 12);
    save(KEYS.recent, recent);
    renderRecent();
  }

  function applyPreferences() {
    if (!dialog) return;
    dialog.classList.toggle("mcx-v8-compact", prefs.compact);
    dialog.classList.toggle("mcx-v8-high-contrast", prefs.contrast);
    dialog.classList.toggle("mcx-v8-hide-times", !prefs.timestamps);
    dialog.classList.toggle("mcx-v8-reduced-motion", prefs.reducedMotion);
    dialog.dataset.readingWidth = prefs.readingWidth;
    dialog.dataset.density = prefs.density;
    dialog.dataset.language = prefs.language;
    save(KEYS.v8, prefs);
  }

  function privacyNotice() {
    if (localStorage.getItem(KEYS.consent) === "accepted") return;
    const banner = document.createElement("div");
    banner.className = "mcx-v8-privacy";
    banner.innerHTML = `
      <div>
        <strong>Privacy notice</strong>
        <span>Chat history and preferences are stored only in this browser. Do not enter passwords, card details, or highly sensitive information.</span>
      </div>
      <button type="button" data-v8-consent>UNDERSTOOD</button>`;
    dialog.prepend(banner);
  }

  function commandItems() {
    return [
      ["Products", "#/products", "route"],
      ["Services", "#/services", "route"],
      ["Pricing", "#/pricing", "route"],
      ["Premium", "#/premium", "route"],
      ["Contact", "#/contact", "route"],
      ["About", "#/about", "route"],
      ["Book Appointment", "", "appointment"],
      ["Get Recommendation", "", "recommend"],
      ["Instant Quote", "", "quote"],
      ["Support Request", "", "support"],
      ["Open WhatsApp", `https://wa.me/${company.whatsapp}`, "url"],
      ["Email Sales", `mailto:${company.sales}`, "url"],
      ["Email Support", `mailto:${company.support}`, "url"]
    ];
  }

  function buildCommandPanel() {
    commandPanel = document.createElement("section");
    commandPanel.className = "mcx-v8-panel";
    commandPanel.hidden = true;
    commandPanel.innerHTML = `
      <header><strong>Command Center</strong><button type="button" data-v8-close-panel>&#10005;</button></header>
      <input type="search" data-v8-command-search placeholder="Search actions..." aria-label="Search actions">
      <div class="mcx-v8-command-grid"></div>
      <div class="mcx-v8-recent"><strong>Recent actions</strong><div data-v8-recent></div></div>`;
    enhancementHost.append(commandPanel);

    const grid = commandPanel.querySelector(".mcx-v8-command-grid");
    commandItems().forEach(([label, value, type]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.dataset.v8Command = type;
      button.dataset.value = value;
      grid.append(button);
    });

    commandPanel.querySelector("[data-v8-command-search]").addEventListener("input", event => {
      const term = normalize(event.target.value);
      [...grid.children].forEach(button => {
        button.hidden = term && !normalize(button.textContent).includes(term);
      });
    });
    renderRecent();
  }

  function renderRecent() {
    const host = commandPanel?.querySelector("[data-v8-recent]");
    if (!host) return;
    host.innerHTML = "";
    if (!recent.length) {
      host.textContent = "No recent actions.";
      return;
    }
    recent.slice(0, 6).forEach(item => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = item.label;
      button.dataset.v8RecentValue = item.value;
      host.append(button);
    });
  }

  function buildFaqPanel() {
    const faqs = [
      ["Who is the CEO?", "The CEO of MI CORTEX X INC. is M.I. MUHAMMADH."],
      ["What is the AI chatbot price?", "AI Chatbot Development starts from LKR 45,000."],
      ["What is the website price?", "Website Development starts from LKR 15,000."],
      ["How long does a mobile app take?", "Mobile App Development usually takes 14–45 days."],
      ["How can I contact support?", "Use WhatsApp, Telegram, support email, or the website information center."],
      ["Is online payment active?", "Online card payments are not activated yet."],
      ["What is the advance payment?", "The normal advance is 30% after project approval."],
      ["Where is the office?", "MI CORTEX X operates online from Colombo, Sri Lanka."],
      ["Is Sunday open?", "Sunday is closed."],
      ["Can I book an appointment?", "Yes. Choose Owner, Chairman, CEO, or Founder from the appointment workflow."]
    ];

    faqPanel = document.createElement("section");
    faqPanel.className = "mcx-v8-panel";
    faqPanel.hidden = true;
    faqPanel.innerHTML = `
      <header><strong>Customer FAQ Library</strong><button type="button" data-v8-close-panel>&#10005;</button></header>
      <input type="search" data-v8-faq-search placeholder="Search FAQs..." aria-label="Search FAQs">
      <div class="mcx-v8-faq-list"></div>`;
    enhancementHost.append(faqPanel);

    const list = faqPanel.querySelector(".mcx-v8-faq-list");
    faqs.forEach(([question, answer]) => {
      const details = document.createElement("details");
      details.innerHTML = `<summary>${question}</summary><p>${answer}</p><button type="button" data-v8-ask="${question}">ASK AI</button>`;
      list.append(details);
    });

    faqPanel.querySelector("[data-v8-faq-search]").addEventListener("input", event => {
      const term = normalize(event.target.value);
      [...list.children].forEach(item => {
        item.hidden = term && !normalize(item.textContent).includes(term);
      });
    });
  }

  function calculateEstimate() {
    const service = calculatorPanel.querySelector("[data-calc-service]").value;
    const pages = Number(calculatorPanel.querySelector("[data-calc-pages]").value);
    const integrations = Number(calculatorPanel.querySelector("[data-calc-integrations]").value);
    const urgency = Number(calculatorPanel.querySelector("[data-calc-urgency]").value);
    const design = Number(calculatorPanel.querySelector("[data-calc-design]").value);

    const base = servicePrices[service] || 15000;
    const pageFactor = Math.max(0, pages - 5) * 1800;
    const integrationFactor = integrations * 6000;
    const designFactor = design * 8000;
    const subtotal = base + pageFactor + integrationFactor + designFactor;
    const estimate = Math.round(subtotal * urgency / 500) * 500;

    calculatorPanel.querySelector("[data-calc-result]").textContent =
      `Estimated starting range: LKR ${estimate.toLocaleString("en-US")} – LKR ${(Math.round(estimate * 1.28 / 500) * 500).toLocaleString("en-US")}`;
  }

  function buildCalculatorPanel() {
    calculatorPanel = document.createElement("section");
    calculatorPanel.className = "mcx-v8-panel";
    calculatorPanel.hidden = true;
    calculatorPanel.innerHTML = `
      <header><strong>Project Cost Estimator</strong><button type="button" data-v8-close-panel>&#10005;</button></header>
      <div class="mcx-v8-form-grid">
        <label>Service<select data-calc-service>${Object.keys(servicePrices).map(name => `<option>${name}</option>`).join("")}</select></label>
        <label>Pages / main screens<input data-calc-pages type="number" min="1" max="100" value="5"></label>
        <label>External integrations<input data-calc-integrations type="number" min="0" max="20" value="0"></label>
        <label>Custom design level<select data-calc-design><option value="0">Standard</option><option value="1">Advanced</option><option value="2">Premium</option></select></label>
        <label>Delivery speed<select data-calc-urgency><option value="1">Normal</option><option value="1.15">Priority</option><option value="1.3">Urgent</option></select></label>
      </div>
      <div class="mcx-v8-estimate" data-calc-result></div>
      <p class="mcx-v8-note">This is a non-binding starting estimate. Final pricing requires confirmed requirements.</p>
      <div class="mcx-v8-panel-actions">
        <button type="button" data-v8-calc-quote>REQUEST QUOTE</button>
        <button type="button" data-v8-calc-whatsapp>WHATSAPP</button>
      </div>`;
    enhancementHost.append(calculatorPanel);

    calculatorPanel.querySelectorAll("input,select").forEach(control => {
      control.addEventListener("input", calculateEstimate);
      control.addEventListener("change", calculateEstimate);
    });
    calculateEstimate();
  }

  function buildCustomerPanel() {
    customerPanel = document.createElement("section");
    customerPanel.className = "mcx-v8-panel";
    customerPanel.hidden = true;
    customerPanel.innerHTML = `
      <header><strong>Customer Tools</strong><button type="button" data-v8-close-panel>&#10005;</button></header>
      <div class="mcx-v8-customer-grid">
        <button type="button" data-v8-tool="copy-all">Copy conversation</button>
        <button type="button" data-v8-tool="export-json">Export JSON</button>
        <button type="button" data-v8-tool="export-csv">Export CSV</button>
        <button type="button" data-v8-tool="clear-draft">Clear saved draft</button>
        <button type="button" data-v8-tool="pins">View pinned answers</button>
        <button type="button" data-v8-tool="session">Session summary</button>
        <button type="button" data-v8-tool="keyboard">Keyboard help</button>
        <button type="button" data-v8-tool="reset">Reset AI preferences</button>
      </div>
      <div class="mcx-v8-profile">
        <strong>Customer profile</strong>
        <input type="text" data-v8-profile-name maxlength="60" placeholder="Your name">
        <input type="text" data-v8-profile-company maxlength="80" placeholder="Company name">
        <button type="button" data-v8-save-profile>SAVE PROFILE</button>
      </div>`;
    enhancementHost.append(customerPanel);
  }

  function addTopBar() {
    const toolbar = root.querySelector(".mcx-ai-toolbar") || root.querySelector(".mcx-ai-quick-actions");
    if (!toolbar) return;
    const additions = [
      ["COMMANDS", "commands"],
      ["FAQ", "faq"],
      ["ESTIMATOR", "calculator"],
      ["CUSTOMER TOOLS", "customer"]
    ];
    additions.forEach(([label, panel]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.dataset.v8Panel = panel;
      toolbar.append(button);
    });
  }

  function addMessageEnhancements() {
    if (!messages) return;
    [...messages.querySelectorAll(".mcx-ai-assistant .mcx-ai-bubble")].forEach(bubble => {
      if (bubble.dataset.v8Enhanced === "true") return;
      bubble.dataset.v8Enhanced = "true";

      const text = bubble.querySelector(".mcx-ai-content")?.innerText || "";
      const tools = bubble.querySelector(".mcx-ai-tools") || document.createElement("div");
      tools.classList.add("mcx-ai-tools");

      const pin = document.createElement("button");
      pin.type = "button";
      pin.textContent = "PIN";
      pin.dataset.v8Pin = text;

      const collapse = document.createElement("button");
      collapse.type = "button";
      collapse.textContent = text.length > 420 ? "COLLAPSE" : "EXPAND";
      collapse.dataset.v8Collapse = "true";

      const words = document.createElement("span");
      words.className = "mcx-v8-word-count";
      words.textContent = `${text.trim().split(/\s+/).filter(Boolean).length} words`;

      tools.append(pin, collapse, words);
      if (!tools.parentElement) bubble.append(tools);

      if (text.length > 700) bubble.classList.add("mcx-v8-long-message");
    });
  }

  function observeMessages() {
    const observer = new MutationObserver(() => {
      addMessageEnhancements();
      if (overlay.hidden) {
        unread += 1;
        document.title = unread ? `(${unread}) MI CORTEX X` : document.title;
      } else {
        beep();
      }
    });
    observer.observe(messages, { childList: true, subtree: true });
  }

  function openPanel(name) {
    [commandPanel, faqPanel, calculatorPanel, customerPanel].forEach(panel => {
      if (panel) panel.hidden = true;
    });
    const selected = { commands: commandPanel, faq: faqPanel, calculator: calculatorPanel, customer: customerPanel }[name];
    if (selected) selected.hidden = false;
  }

  function closePanels() {
    [commandPanel, faqPanel, calculatorPanel, customerPanel].forEach(panel => {
      if (panel) panel.hidden = true;
    });
  }

  function sendPrompt(text) {
    const input = root.querySelector(".mcx-ai-composer textarea");
    const form = root.querySelector(".mcx-ai-composer");
    if (!input || !form) return;
    input.value = text;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    form.requestSubmit();
    closePanels();
  }

  function runCommand(type, value, label) {
    addRecent(label || value || type, value || type);
    if (type === "route") {
      overlay.hidden = true;
      location.hash = value;
    } else if (type === "url") {
      window.open(value, "_blank", "noopener,noreferrer");
    } else if (type === "appointment") {
      const hub = document.getElementById("mcx-contact-hub-root");
      overlay.hidden = true;
      hub?.querySelector(".mcx-hub-fab")?.click();
      window.setTimeout(() => hub?.querySelector('[data-open="executives"]')?.click(), 120);
    } else if (type === "recommend") {
      sendPrompt("Mata suitable service ekak recommend karanna");
    } else if (type === "quote") {
      sendPrompt("Quotation ekak prepare karanna");
    } else if (type === "support") {
      sendPrompt("Support request ekak prepare karanna");
    }
  }

  function pinnedText() {
    return pins.length
      ? pins.map((item, index) => `${index + 1}. ${item.text}`).join("\n\n")
      : "No pinned answers.";
  }

  function handleTool(name) {
    const rows = transcriptRows();
    if (name === "copy-all") {
      navigator.clipboard?.writeText(rows.map(row => `${row.sender}: ${row.text}`).join("\n\n"));
      toast("Conversation copied.");
    } else if (name === "export-json") {
      download("CORTEX-CORE-AI-CHAT.json", JSON.stringify(rows, null, 2), "application/json;charset=utf-8");
    } else if (name === "export-csv") {
      const csv = ["Index,Sender,Time,Text", ...rows.map(row =>
        [row.index, row.sender, row.time, row.text].map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")
      )].join("\n");
      download("CORTEX-CORE-AI-CHAT.csv", csv, "text/csv;charset=utf-8");
    } else if (name === "clear-draft") {
      localStorage.removeItem("mcx_ai_v7_draft");
      localStorage.removeItem("mcx_cortex_core_ai_v4_draft");
      root.querySelector("textarea").value = "";
      toast("Saved draft cleared.");
    } else if (name === "pins") {
      alert(pinnedText());
    } else if (name === "session") {
      const minutes = Math.max(1, Math.round((Date.now() - sessionStarted) / 60000));
      alert(`Session duration: ${minutes} minute(s)\nMessages: ${rows.length}\nPinned answers: ${pins.length}\nRecent actions: ${recent.length}`);
    } else if (name === "keyboard") {
      alert("Keyboard shortcuts:\nCtrl + / — Open AI\nCtrl + K — Search chat\nEscape — Close panel/chat\nEnter — Send\nShift + Enter — New line");
    } else if (name === "reset") {
      localStorage.removeItem(KEYS.v8);
      localStorage.removeItem(KEYS.pins);
      localStorage.removeItem(KEYS.recent);
      location.reload();
    }
  }

  function initialize() {
    root = document.getElementById("mcx-ai-chat-root");
    if (!root) {
      window.setTimeout(initialize, 120);
      return;
    }

    dialog = root.querySelector(".mcx-ai-dialog");
    messages = root.querySelector(".mcx-ai-messages");
    if (!dialog || !messages) {
      window.setTimeout(initialize, 120);
      return;
    }

    initialized = true;
    enhancementHost = document.createElement("div");
    enhancementHost.className = "mcx-v8-enhancement-host";
    dialog.append(enhancementHost);

    toastHost = document.createElement("div");
    toastHost.className = "mcx-v8-toast-host";
    dialog.append(toastHost);

    addTopBar();
    buildCommandPanel();
    buildFaqPanel();
    buildCalculatorPanel();
    buildCustomerPanel();
    privacyNotice();
    applyPreferences();
    addMessageEnhancements();
    observeMessages();

    const profile = safeJSON("mcx_ai_v7_profile", { name: "", company: "" });
    customerPanel.querySelector("[data-v8-profile-name]").value = profile.name || "";
    customerPanel.querySelector("[data-v8-profile-company]").value = profile.company || "";

    const scrollButton = document.createElement("button");
    scrollButton.type = "button";
    scrollButton.className = "mcx-v8-scroll-bottom";
    scrollButton.textContent = "↓";
    scrollButton.title = "Scroll to latest message";
    scrollButton.addEventListener("click", () => messages.scrollTo({ top: messages.scrollHeight, behavior: "smooth" }));
    dialog.append(scrollButton);

    messages.addEventListener("scroll", () => {
      scrollButton.hidden = messages.scrollHeight - messages.scrollTop - messages.clientHeight < 120;
    }, { passive: true });

    const originalCloseObserver = new MutationObserver(() => {
      if (!root.querySelector(".mcx-ai-overlay").hidden) {
        unread = 0;
        document.title = document.title.replace(/^\(\d+\)\s*/, "");
      }
    });
    originalCloseObserver.observe(root.querySelector(".mcx-ai-overlay"), { attributes: true, attributeFilter: ["hidden"] });
  }

  document.addEventListener("click", event => {
    if (!initialized) return;

    const consent = event.target.closest("[data-v8-consent]");
    if (consent) {
      localStorage.setItem(KEYS.consent, "accepted");
      consent.closest(".mcx-v8-privacy")?.remove();
    }

    const panelButton = event.target.closest("[data-v8-panel]");
    if (panelButton) openPanel(panelButton.dataset.v8Panel);

    if (event.target.closest("[data-v8-close-panel]")) closePanels();

    const command = event.target.closest("[data-v8-command]");
    if (command) runCommand(command.dataset.v8Command, command.dataset.value || "", command.textContent);

    const recentButton = event.target.closest("[data-v8-recent-value]");
    if (recentButton) {
      const item = recent.find(entry => entry.value === recentButton.dataset.v8RecentValue);
      if (item) {
        const commandMatch = commandItems().find(entry => entry[1] === item.value || entry[2] === item.value);
        if (commandMatch) runCommand(commandMatch[2], commandMatch[1], commandMatch[0]);
      }
    }

    const ask = event.target.closest("[data-v8-ask]");
    if (ask) sendPrompt(ask.dataset.v8Ask);

    const pin = event.target.closest("[data-v8-pin]");
    if (pin) {
      const text = pin.dataset.v8Pin;
      if (!pins.some(item => item.text === text)) {
        pins.unshift({ text, time: Date.now() });
        pins = pins.slice(0, 30);
        save(KEYS.pins, pins);
      }
      pin.textContent = "PINNED";
      toast("Answer pinned.");
    }

    const collapse = event.target.closest("[data-v8-collapse]");
    if (collapse) {
      const bubble = collapse.closest(".mcx-ai-bubble");
      const collapsed = bubble.classList.toggle("mcx-v8-collapsed");
      collapse.textContent = collapsed ? "EXPAND" : "COLLAPSE";
    }

    const tool = event.target.closest("[data-v8-tool]");
    if (tool) handleTool(tool.dataset.v8Tool);

    if (event.target.closest("[data-v8-save-profile]")) {
      const profile = {
        name: customerPanel.querySelector("[data-v8-profile-name]").value.trim(),
        company: customerPanel.querySelector("[data-v8-profile-company]").value.trim()
      };
      save("mcx_ai_v7_profile", profile);
      toast("Customer profile saved in this browser.");
    }

    if (event.target.closest("[data-v8-calc-quote]")) {
      const service = calculatorPanel.querySelector("[data-calc-service]").value;
      sendPrompt(`${service} quotation ekak prepare karanna`);
    }

    if (event.target.closest("[data-v8-calc-whatsapp]")) {
      const text = calculatorPanel.querySelector("[data-calc-result]").textContent;
      window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello, I would like to discuss this estimate: ${text}`)}`, "_blank", "noopener,noreferrer");
    }
  });

  document.addEventListener("keydown", event => {
    if (!initialized) return;
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "p") {
      event.preventDefault();
      const overlay = root.querySelector(".mcx-ai-overlay");
      overlay.hidden = false;
      openPanel("commands");
      commandPanel.querySelector("input")?.focus();
    }
    if (event.key === "Escape") closePanels();
  });

  initialize();
})();

