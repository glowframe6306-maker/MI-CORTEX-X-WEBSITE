(() => {
  "use strict";

  if (window.__MCX_CORTEX_CORE_AI_V5__) return;
  window.__MCX_CORTEX_CORE_AI_V5__ = true;

  const STORAGE_KEY = "mcx_cortex_core_ai_v5_history";
  const MAX_HISTORY = 120;

  const company = {
    aiName: "CORTEX CORE AI",
    name: "MI CORTEX X",
    legalName: "MI CORTEX X INC.",
    founded: "2026",
    country: "Sri Lanka",
    city: "Colombo",
    owner: "M.I. MUHAMMADH",
    chairman: "M.I. MUHAMMADH",
    ceo: "M.I. MUHAMMADH",
    founder: "M.I. MUHAMMADH",
    website: "https://mi-cortex-x.vercel.app",
    email: "micortexx@gmail.com",
    supportEmail: "support.micortexx@gmail.com",
    salesEmail: "sales.cortexx@gmail.com",
    whatsappDisplay: "+94 75 639 0621",
    whatsappNumber: "94756390621",
    telegram: "@MICORTEXX",
    telegramUrl: "https://t.me/MICORTEXX",
    hours: "Monday to Saturday — 24 hours. Sunday — Closed.",
    location: "Online operations, Colombo, Sri Lanka",
    responseTime: "Within 24 hours"
  };

  const products = [
    {
      id: "cortex-core-ai",
      name: "CORTEX CORE AI",
      aliases: ["cortex core ai", "cortex ai", "core ai", "ai assistant"],
      status: "Development",
      price: 45000,
      priceText: "Starting from LKR 45,000 for business integration",
      freePlan: "Available when released",
      route: "#/products/cortex-core-ai",
      description: "A next-generation AI platform for business automation, intelligent customer support, content generation and system integration."
    },
    {
      id: "business-suite",
      name: "MI Business Management Suite",
      aliases: ["business suite", "management suite", "business management"],
      status: "Upcoming",
      price: 80000,
      priceText: "Starting from LKR 80,000",
      freePlan: "Not announced",
      route: "#/products/business-suite",
      description: "A complete business management platform including CRM, HRM, inventory, POS, ERP and analytics."
    }
  ];

  const services = [
    { id:"ai-development", name:"AI Development", aliases:["ai development","ai develop","artificial intelligence development"], price:60000, billing:"", delivery:"7–30 days", support:"30 days", features:["AI models","Automation","AI integration"], route:"#/services/ai-development" },
    { id:"ai-chatbot-development", name:"AI Chatbot Development", aliases:["ai chatbot","chatbot development","chat bot","bot development"], price:45000, billing:"", delivery:"5–14 days", support:"30 days", features:["AI integration","Business chatbot","Multilingual support"], route:"#/services/ai-chatbot-development" },
    { id:"ai-automation", name:"AI Automation", aliases:["ai automation","ai workflow","business automation"], price:65000, billing:"", delivery:"7–21 days", support:"30 days", features:["Workflow automation","AI agents","Business automation"], route:"#/services/ai-automation" },
    { id:"website-development", name:"Website Development", aliases:["website development","website","web site","site development"], price:15000, billing:"", delivery:"3–14 days", support:"30 days", features:["Responsive design","SEO-ready structure","Admin options"], route:"#/services/website-development" },
    { id:"web-application-development", name:"Web Application Development", aliases:["web application","web app","webapp"], price:50000, billing:"", delivery:"7–30 days", support:"30 days", features:["Secure login","Dashboard","Database"], route:"#/services/web-application-development" },
    { id:"mobile-app-development", name:"Mobile App Development", aliases:["mobile app","android app","ios app","application development"], price:85000, billing:"", delivery:"14–45 days", support:"30 days", features:["Android","iOS","Cross-platform development"], route:"#/services/mobile-app-development" },
    { id:"desktop-software-development", name:"Desktop Software Development", aliases:["desktop software","windows software","linux software"], price:70000, billing:"", delivery:"10–30 days", support:"30 days", features:["Windows","Linux","Database support"], route:"#/services/desktop-software-development" },
    { id:"enterprise-software", name:"Enterprise Software", aliases:["enterprise software","enterprise system","erp crm hrm pos"], price:250000, billing:"", delivery:"30–90 days", support:"90 days", features:["ERP","CRM","HRM","POS"], route:"#/services/enterprise-software" },
    { id:"api-development", name:"API Development", aliases:["api development","rest api","graphql api"], price:30000, billing:"", delivery:"3–10 days", support:"30 days", features:["REST","GraphQL","Secure APIs"], route:"#/services/api-development" },
    { id:"api-integration", name:"API Integration", aliases:["api integration","integration","third party integration","payment integration"], price:20000, billing:"", delivery:"2–7 days", support:"30 days", features:["Payment APIs","AI APIs","Third-party APIs"], route:"#/services/api-integration" },
    { id:"cloud-solutions", name:"Cloud Solutions", aliases:["cloud solutions","cloud","aws","azure","google cloud"], price:30000, billing:"", delivery:"2–10 days", support:"30 days", features:["AWS","Microsoft Azure","Google Cloud"], route:"#/services/cloud-solutions" },
    { id:"ui-ux-design", name:"UI/UX Design", aliases:["ui ux","ui design","ux design","interface design"], price:15000, billing:"", delivery:"3–10 days", support:"14 days", features:["Modern UI","Responsive design","Prototype"], route:"#/services/ui-ux-design" },
    { id:"software-maintenance", name:"Software Maintenance", aliases:["software maintenance","maintenance","bug fixes","software support"], price:7500, billing:"per month", delivery:"Ongoing", support:"Monthly", features:["Bug fixes","Updates","Monitoring"], route:"#/services/software-maintenance" },
    { id:"technical-consulting", name:"Technical Consulting", aliases:["technical consulting","consulting","consultation","technical advice"], price:5000, billing:"", delivery:"Same day when available", support:"Consultation only", features:["Technology planning","Architecture advice"], route:"#/services/technical-consulting" },
    { id:"custom-software-development", name:"Custom Software Development", aliases:["custom software","custom system","custom software development"], price:100000, billing:"", delivery:"14–90 days", support:"60 days", features:["Fully customized solutions"], route:"#/services/custom-software-development" }
  ];

  const singlishMap = [
    [/\boyage\b/g, "ඔයාගේ"], [/\bobe\b/g, "ඔබගේ"], [/\bnama\b/g, "නම"],
    [/\bmokakda\b/g, "මොකක්ද"], [/\bmokadda\b/g, "මොකක්ද"],
    [/\bkawda\b/g, "කවුද"], [/\bkauda\b/g, "කවුද"], [/\bkawuda\b/g, "කවුද"],
    [/\bkeeyada\b/g, "කීයද"], [/\bkiyada\b/g, "කීයද"], [/\bkiyakda\b/g, "කීයද"],
    [/\bkoheda\b/g, "කොහෙද"], [/\bkohomada\b/g, "කොහොමද"],
    [/\bkawadda\b/g, "කවදාද"], [/\bkawadada\b/g, "කවදාද"],
    [/\bmila\b/g, "මිල"], [/\bgana\b/g, "ගැන"], [/\bdenna\b/g, "දෙන්න"],
    [/\bpennanna\b/g, "පෙන්වන්න"], [/\bpenwanna\b/g, "පෙන්වන්න"],
    [/\bone\b/g, "ඕන"], [/\bhadanna\b/g, "හදන්න"], [/\bdanna\b/g, "දාන්න"],
    [/\bdaanna\b/g, "දාන්න"], [/\byanna\b/g, "යන්න"], [/\benna\b/g, "එන්න"],
    [/\bpatan gaththe\b/g, "පටන් ගත්තේ"], [/\bpatan gatte\b/g, "පටන් ගත්තේ"],
    [/\bcompany eka\b/g, "සමාගම"], [/\bai eka\b/g, "ai"],
    [/\bchat bot\b/g, "chatbot"], [/\bwhatsap\b/g, "whatsapp"],
    [/\bwatsapp\b/g, "whatsapp"], [/\btelegarm\b/g, "telegram"],
    [/\bservise\b/g, "service"], [/\bserivce\b/g, "service"],
    [/\bprodact\b/g, "product"], [/\bproduc\b/g, "product"],
    [/\bappoinment\b/g, "appointment"], [/\bapointment\b/g, "appointment"],
    [/\bchairmen\b/g, "chairman"], [/\bcheif\b/g, "chief"],
    [/\bexcutive\b/g, "executive"], [/\bexcecutive\b/g, "executive"],
    [/\bmail eka\b/g, "email"], [/\bnumber eka\b/g, "number"],
    [/\bprice eka\b/g, "price"], [/\bwisthara\b/g, "information"],
    [/\bvisthara\b/g, "information"], [/\bsunday open da\b/g, "sunday open"]
  ];

  const normalize = value => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s/@.+-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  function interpret(value) {
    let text = normalize(value);
    for (const [pattern, replacement] of singlishMap) text = text.replace(pattern, replacement);
    return text.replace(/\s+/g, " ").trim();
  }

  function detectLanguage(value) {
    if (/[\u0D80-\u0DFF]/.test(value) || singlishMap.some(([p]) => p.test(normalize(value)))) return "si";
    if (/[\u0B80-\u0BFF]/.test(value)) return "ta";
    return "en";
  }

  function currency(value) {
    return `LKR ${Number(value).toLocaleString("en-US")}`;
  }

  function containsAny(text, terms) {
    return terms.some(term => text.includes(normalize(term)));
  }

  function findService(raw) {
    const q = interpret(raw);
    let best = null;
    let bestScore = 0;
    for (const service of services) {
      for (const alias of [service.name, ...service.aliases]) {
        const words = normalize(alias).split(" ").filter(w => w.length > 2);
        const score = words.filter(w => q.includes(w)).length;
        if (q.includes(normalize(alias))) {
          if (words.length + 3 > bestScore) { best = service; bestScore = words.length + 3; }
        } else if (score > bestScore) {
          best = service; bestScore = score;
        }
      }
    }
    return bestScore >= 1 ? best : null;
  }

  function findProduct(raw) {
    const q = interpret(raw);
    return products.find(product =>
      [product.name, ...product.aliases].some(alias => q.includes(normalize(alias)))
    ) || null;
  }

  function action(label, type, value = "") {
    return { label, action: type, value };
  }

  function reply(text, actions = [], suggestions = []) {
    return { text, actions, suggestions };
  }

  function appointmentActions(role = "") {
    return [
      action(role ? `BOOK ${role.toUpperCase()} APPOINTMENT` : "SELECT EXECUTIVE & BOOK APPOINTMENT", "appointment", role),
      action("CONTACT INFORMATION CENTER", "hub", "support")
    ];
  }

  function contactActions() {
    return [
      action("WHATSAPP", "url", `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello 👋")}`),
      action("TELEGRAM", "url", `${company.telegramUrl}?text=${encodeURIComponent("Hello 👋")}`),
      action("EMAIL", "url", `mailto:${company.supportEmail}?subject=${encodeURIComponent("MI CORTEX X Support Request")}`)
    ];
  }

  function answer(raw) {
    const q = interpret(raw);
    const lang = detectLanguage(raw);
    const service = findService(raw);
    const product = findProduct(raw);

    const aiNameQuestion =
      containsAny(q, ["ඔයාගේ නම", "ඔබගේ නම", "your name", "who are you", "ai නම", "assistant නම"]) ||
      q === "නම මොකක්ද";

    if (aiNameQuestion) {
      return reply(
        lang === "si"
          ? "මගේ නම CORTEX CORE AI. මම MI CORTEX X සමාගමේ automated AI assistant එකයි."
          : "My name is CORTEX CORE AI. I am the automated AI assistant of MI CORTEX X.",
        [
          action("ABOUT MI CORTEX X", "route", "#/about"),
          action("VIEW PRODUCTS", "route", "#/products"),
          action("CONTACT SUPPORT", "hub", "support")
        ],
        ["Company eke nama mokakda?", "CEO kawda?", "AI chatbot eke mila keeyada?"]
      );
    }

    const companyNameQuestion =
      containsAny(q, ["company name", "සමාගම නම", "මේකේ නම", "company eke nama", "company නම"]);

    if (companyNameQuestion) {
      return reply(
        lang === "si"
          ? "සමාගමේ නම MI CORTEX X INC."
          : "The company name is MI CORTEX X INC.",
        [action("ABOUT COMPANY", "route", "#/about")]
      );
    }

    if (/^(hi|hello|hey|hii+|හායි|හෙලෝ|ආයුබෝවන්|ayubowan|vanakkam)\b/.test(q)) {
      return reply(
        lang === "si"
          ? "හායි 👋 මම CORTEX CORE AI. MI CORTEX X සමාගම, products, services, prices, support හෝ appointments ගැන අහන්න."
          : "Hi 👋 I’m CORTEX CORE AI. Ask me about MI CORTEX X, products, services, prices, support or appointments.",
        [
          action("VIEW PRODUCTS", "route", "#/products"),
          action("VIEW SERVICES", "route", "#/services"),
          action("BOOK APPOINTMENT", "appointment")
        ],
        ["CEO kawda?", "AI chatbot eke mila keeyada?", "Website ekak hadanna keeyada?"]
      );
    }

    if (containsAny(q, ["ceo", "chief executive", "chief executive officer", "ප්‍රධාන විධායක"])) {
      return reply(
        lang === "si"
          ? `MI CORTEX X INC. සමාගමේ Chief Executive Officer (CEO) වන්නේ ${company.ceo}.`
          : `The Chief Executive Officer (CEO) of MI CORTEX X INC. is ${company.ceo}.`,
        [
          action("BOOK CEO APPOINTMENT", "appointment", "Chief Executive Officer (CEO)"),
          action("VIEW EXECUTIVE BOARD", "route", "#/about/executive-board")
        ]
      );
    }

    if (containsAny(q, ["owner", "අයිතිකරු", "හිමිකරු"])) {
      return reply(
        lang === "si" ? `MI CORTEX X INC. සමාගමේ Owner වන්නේ ${company.owner}.` : `The Owner of MI CORTEX X INC. is ${company.owner}.`,
        [action("BOOK OWNER APPOINTMENT", "appointment", "Owner"), action("VIEW EXECUTIVE BOARD", "route", "#/about/executive-board")]
      );
    }

    if (containsAny(q, ["chairman", "සභාපති"])) {
      return reply(
        lang === "si" ? `MI CORTEX X INC. සමාගමේ Chairman වන්නේ ${company.chairman}.` : `The Chairman of MI CORTEX X INC. is ${company.chairman}.`,
        [action("BOOK CHAIRMAN APPOINTMENT", "appointment", "Chairman"), action("VIEW EXECUTIVE BOARD", "route", "#/about/executive-board")]
      );
    }

    if (containsAny(q, ["founder", "නිර්මාතෘ", "ආරම්භකයා"])) {
      return reply(
        lang === "si" ? `MI CORTEX X INC. සමාගමේ Founder වන්නේ ${company.founder}.` : `The Founder of MI CORTEX X INC. is ${company.founder}.`,
        [action("BOOK FOUNDER APPOINTMENT", "appointment", "Founder"), action("VIEW EXECUTIVE BOARD", "route", "#/about/executive-board")]
      );
    }

    if (containsAny(q, ["appointment", "meeting", "හමුවීම", "වෙන්කරන්න"])) {
      let role = "";
      if (q.includes("ceo") || q.includes("chief executive")) role = "Chief Executive Officer (CEO)";
      else if (q.includes("owner")) role = "Owner";
      else if (q.includes("chairman")) role = "Chairman";
      else if (q.includes("founder")) role = "Founder";
      return reply(
        lang === "si"
          ? "Executive Board member කෙනෙක් තෝරාගෙන appointment form එක සම්පූර්ණ කරන්න."
          : "Choose an Executive Board member and complete the appointment form.",
        appointmentActions(role),
        ["CEO appointment", "Owner appointment", "Founder appointment", "Chairman appointment"]
      );
    }

    if (service) {
      return reply(
        `${service.name}\n• Starting price: ${currency(service.price)}${service.billing ? ` ${service.billing}` : ""}\n• Estimated delivery: ${service.delivery}\n• Support: ${service.support}\n• Main features: ${service.features.join(", ")}\n\nFinal pricing depends on scope, features, integrations, hosting and support requirements.`,
        [
          action("VIEW SERVICE", "route", service.route),
          action("REQUEST QUOTE", "quote", service.name),
          action("WHATSAPP", "url", `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I need a quotation for ${service.name}.`)}`),
          action("BOOK CONSULTATION", "appointment")
        ],
        ["What features are included?", "How long will it take?", "Request quotation"]
      );
    }

    if (product) {
      return reply(
        `${product.name}\n• Status: ${product.status}\n• Price: ${product.priceText}\n• Free plan: ${product.freePlan}\n\n${product.description}`,
        [
          action("VIEW PRODUCT", "route", product.route),
          action("PRODUCT INFORMATION", "hub", "products"),
          action("WHATSAPP", "url", `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I need information about ${product.name}.`)}`)
        ]
      );
    }

    if (containsAny(q, ["product", "products", "නිෂ්පාදන"])) {
      return reply(
        products.map(p => `• ${p.name} — ${p.status} — ${p.priceText}`).join("\n"),
        [action("VIEW ALL PRODUCTS", "route", "#/products"), action("PRODUCT INFORMATION", "hub", "products")]
      );
    }

    if (containsAny(q, ["service", "services", "සේවා"])) {
      return reply(
        services.map(s => `• ${s.name} — Starting from ${currency(s.price)}${s.billing ? ` ${s.billing}` : ""}`).join("\n"),
        [
          action("VIEW ALL SERVICES", "route", "#/services"),
          action("VIEW PRICING", "route", "#/pricing"),
          action("REQUEST QUOTE", "quote")
        ]
      );
    }

    if (containsAny(q, ["whatsapp", "telegram", "email", "contact", "සම්බන්ධ", "අමතන්න"])) {
      return reply(
        `MI CORTEX X Contact Information\n• Primary email: ${company.email}\n• Support: ${company.supportEmail}\n• Sales: ${company.salesEmail}\n• WhatsApp: ${company.whatsappDisplay}\n• Telegram: ${company.telegram}\n• Website: ${company.website}`,
        contactActions()
      );
    }

    if (containsAny(q, ["support", "customer service", "උදව්", "සහාය"])) {
      return reply(
        `Support is available through Email, WhatsApp, Telegram and the website contact form. Normal response time: ${company.responseTime}.`,
        [action("OPEN INFORMATION CENTER", "hub", "support"), ...contactActions()]
      );
    }

    if (containsAny(q, ["location", "office", "address", "කොහෙද", "ලිපිනය"])) {
      return reply(
        `${company.name} operates online from ${company.city}, ${company.country}. There is currently no public walk-in office.`,
        [action("VIEW CONTACT PAGE", "route", "#/contact")]
      );
    }

    if (containsAny(q, ["hour", "open", "closed", "sunday", "වේලාව", "ඇරලා", "වහලා"])) {
      return reply(`Business hours: ${company.hours}`, [action("CONTACT SUPPORT", "hub", "support")]);
    }

    if (containsAny(q, ["founded", "started", "established", "පටන් ගත්තේ", "කවදාද"])) {
      return reply(`MI CORTEX X was founded in ${company.founded}.`, [action("ABOUT COMPANY", "route", "#/about")]);
    }

    if (containsAny(q, ["company", "about", "what is mi cortex", "සමාගම"])) {
      return reply(
        `MI CORTEX X is a Sri Lankan artificial intelligence and software technology company founded in ${company.founded}. It develops intelligent digital products and custom technology solutions worldwide.`,
        [action("ABOUT COMPANY", "route", "#/about"), action("VIEW PRODUCTS", "route", "#/products"), action("VIEW SERVICES", "route", "#/services")]
      );
    }

    if (containsAny(q, ["price", "cost", "මිල", "කීයද", "quotation"])) {
      return reply(
        "Please include the exact product or service name. All prices are starting estimates and may change according to scope, features, integrations, hosting and support.",
        [action("VIEW PRICING", "route", "#/pricing"), action("REQUEST CUSTOM QUOTE", "quote")],
        ["AI chatbot eke mila keeyada?", "Website ekak hadanna keeyada?", "Mobile app eke mila keeyada?"]
      );
    }

    return reply(
      lang === "si"
        ? "මට මේ ප්‍රශ්නය සම්පූර්ණයෙන් තේරුණේ නැහැ. Product/service නම, price, CEO/Owner/Founder/Chairman title එක, contact detail එක හෝ appointment අවශ්‍යතාව පැහැදිලිව ලියන්න. Sinhala, English හෝ Singlish භාවිතා කරන්න පුළුවන්."
        : "I do not have a verified answer for that question yet. Include the exact product, service, price, executive title, contact detail or appointment requirement.",
      [
        action("VIEW PRODUCTS", "route", "#/products"),
        action("VIEW SERVICES", "route", "#/services"),
        action("CONTACT SUPPORT", "hub", "support"),
        action("BOOK APPOINTMENT", "appointment")
      ],
      ["CEO kawda?", "AI chatbot eke mila keeyada?", "Product list eka pennanna"]
    );
  }

  const root = document.createElement("div");
  root.id = "mcx-ai-chat-root";
  root.innerHTML = `
    <div class="mcx-ai-overlay" hidden>
      <section class="mcx-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="mcx-ai-title">
        <header class="mcx-ai-header">
          <div class="mcx-ai-brand">
            <span class="mcx-ai-status-dot" aria-hidden="true"></span>
            <div><strong id="mcx-ai-title">CORTEX CORE AI</strong><span>MI CORTEX X company assistant</span></div>
          </div>
          <div class="mcx-ai-header-actions">
            <button type="button" data-ai-new title="New chat">+</button>
            <button type="button" data-ai-clear title="Clear history">&#128465;</button>
            <button class="mcx-ai-close" type="button" aria-label="Close">&#10005;</button>
          </div>
        </header>

        <div class="mcx-ai-quick-actions">
          <button type="button" data-ai-route="#/products">PRODUCTS</button>
          <button type="button" data-ai-route="#/services">SERVICES</button>
          <button type="button" data-ai-route="#/pricing">PRICING</button>
          <button type="button" data-ai-appointment="">APPOINTMENT</button>
          <button type="button" data-ai-hub="support">SUPPORT</button>
        </div>

        <div class="mcx-ai-messages" aria-live="polite"></div>
        <div class="mcx-ai-suggestions" hidden></div>

        <form class="mcx-ai-composer">
          <textarea rows="1" maxlength="1600" placeholder="Ask in Sinhala, English or Singlish..." required></textarea>
          <button class="mcx-ai-send" type="submit" aria-label="Send">&#10148;</button>
        </form>
      </section>
    </div>`;
  document.body.appendChild(root);

  const overlay = root.querySelector(".mcx-ai-overlay");
  const dialog = root.querySelector(".mcx-ai-dialog");
  const messages = root.querySelector(".mcx-ai-messages");
  const suggestions = root.querySelector(".mcx-ai-suggestions");
  const form = root.querySelector(".mcx-ai-composer");
  const input = root.querySelector("textarea");
  let history = [];
  let opened = false;
  let lastFocus = null;
  let lastQuestion = "";
  let quoteFlow = null;

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (Array.isArray(stored)) history = stored.slice(-MAX_HISTORY);
  } catch {}

  function saveHistory() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-MAX_HISTORY))); } catch {}
  }

  function timeText(timestamp = Date.now()) {
    return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(timestamp));
  }

  function linkify(container, text) {
    const regex = /(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|@MICORTEXX|\+94\s?[\d\s]{8,})/g;
    let last = 0;
    for (const match of text.matchAll(regex)) {
      container.append(document.createTextNode(text.slice(last, match.index)));
      const value = match[0];
      const a = document.createElement("a");
      a.textContent = value;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      if (value.startsWith("http")) a.href = value;
      else if (value === "@MICORTEXX") a.href = company.telegramUrl;
      else if (value.includes("@")) a.href = `mailto:${value}`;
      else a.href = `https://wa.me/${company.whatsappNumber}`;
      container.append(a);
      last = match.index + value.length;
    }
    container.append(document.createTextNode(text.slice(last)));
  }

  function showSuggestions(items = []) {
    suggestions.innerHTML = "";
    suggestions.hidden = !items.length;
    for (const text of items.slice(0, 5)) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.dataset.suggestion = text;
      suggestions.append(button);
    }
  }

  function addMessage(type, payload, persist = true, timestamp = Date.now()) {
    const data = typeof payload === "string" ? reply(payload) : payload;
    const row = document.createElement("article");
    row.className = `mcx-ai-message mcx-ai-${type}`;
    const bubble = document.createElement("div");
    bubble.className = "mcx-ai-bubble";
    const content = document.createElement("div");
    content.className = "mcx-ai-content";
    linkify(content, data.text || "");
    bubble.append(content);

    const meta = document.createElement("div");
    meta.className = "mcx-ai-meta";
    meta.textContent = `${type === "user" ? "You" : "CORTEX CORE AI"} · ${timeText(timestamp)}`;
    bubble.append(meta);

    if (type === "assistant") {
      const tools = document.createElement("div");
      tools.className = "mcx-ai-tools";
      tools.innerHTML = `<button type="button" data-copy>COPY</button><button type="button" data-regenerate>REGENERATE</button>`;
      tools.querySelector("[data-copy]").dataset.copy = data.text || "";
      bubble.append(tools);

      if (data.actions?.length) {
        const host = document.createElement("div");
        host.className = "mcx-ai-message-actions";
        for (const item of data.actions) {
          const button = document.createElement("button");
          button.type = "button";
          button.textContent = item.label;
          button.dataset.action = item.action;
          button.dataset.value = item.value || "";
          host.append(button);
        }
        bubble.append(host);
      }
      showSuggestions(data.suggestions || []);
    }

    row.append(bubble);
    messages.append(row);
    messages.scrollTop = messages.scrollHeight;

    if (persist) {
      history.push({ type, payload: data, timestamp });
      history = history.slice(-MAX_HISTORY);
      saveHistory();
    }
  }

  function typing() {
    const row = document.createElement("div");
    row.className = "mcx-ai-message mcx-ai-assistant mcx-ai-typing";
    row.innerHTML = `<div class="mcx-ai-bubble"><span></span><span></span><span></span></div>`;
    messages.append(row);
    messages.scrollTop = messages.scrollHeight;
    return row;
  }

  function restoreHistory() {
    messages.innerHTML = "";
    for (const item of history) addMessage(item.type, item.payload, false, item.timestamp);
  }

  function newChat() {
    history = [];
    quoteFlow = null;
    saveHistory();
    messages.innerHTML = "";
    showSuggestions([]);
    addMessage("assistant", reply(
      "Hi 👋 I’m CORTEX CORE AI. Ask me in Sinhala, English or Singlish about MI CORTEX X, products, services, prices, executives, support or appointments.",
      [action("VIEW PRODUCTS","route","#/products"), action("VIEW SERVICES","route","#/services"), action("BOOK APPOINTMENT","appointment")],
      ["Oyaga nama mokakda?", "CEO kawda?", "AI chatbot eke mila keeyada?"]
    ));
  }

  function openChat() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("mcx-ai-open");
    if (!opened) {
      opened = true;
      if (history.length) restoreHistory(); else newChat();
    }
    setTimeout(() => input.focus(), 50);
  }

  function closeChat() {
    overlay.hidden = true;
    document.body.classList.remove("mcx-ai-open");
    lastFocus?.focus?.();
  }

  function openHub(panel = "main", role = "") {
    closeChat();
    const hub = document.getElementById("mcx-contact-hub-root");
    if (!hub) { location.hash = "#/contact"; return; }
    hub.querySelector(".mcx-hub-fab")?.click();
    setTimeout(() => {
      if (role || panel === "executives") {
        hub.querySelector('[data-open="executives"]')?.click();
        if (role) {
          setTimeout(() => {
            const wanted = normalize(role);
            [...hub.querySelectorAll("[data-executive]")].find(btn =>
              normalize(btn.dataset.executive).includes(wanted.replace("chief executive officer ceo", "chief executive officer"))
            )?.click();
          }, 100);
        }
      } else if (panel !== "main") {
        hub.querySelector(`[data-open="${panel}"]`)?.click();
      }
    }, 120);
  }

  function startQuote(service = "") {
    quoteFlow = {
      step: 0,
      data: { service },
      questions: [
        ["service", service ? null : "What product or service do you need?"],
        ["features", "What main features do you need?"],
        ["budget", "What is your estimated budget? You may type Not decided."],
        ["deadline", "What is your preferred deadline?"],
        ["name", "What is your full name?"],
        ["email", "What is your email address?"]
      ]
    };
    addMessage("assistant", "I’ll collect your quotation details step by step. Do not enter card or payment information.");
    continueQuote();
  }

  function continueQuote() {
    while (quoteFlow && quoteFlow.step < quoteFlow.questions.length) {
      const [key, question] = quoteFlow.questions[quoteFlow.step];
      if (quoteFlow.data[key]) { quoteFlow.step++; continue; }
      addMessage("assistant", question);
      return;
    }
    if (!quoteFlow) return;
    const d = quoteFlow.data;
    const summary = `QUOTATION REQUEST SUMMARY\nService/Product: ${d.service}\nRequired features: ${d.features}\nEstimated budget: ${d.budget}\nPreferred deadline: ${d.deadline}\nFull name: ${d.name}\nEmail: ${d.email}`;
    addMessage("assistant", reply(summary, [
      action("SEND VIA WHATSAPP", "url", `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(summary)}`),
      action("SEND VIA EMAIL", "url", `mailto:${company.salesEmail}?subject=${encodeURIComponent("Quotation Request")}&body=${encodeURIComponent(summary)}`)
    ]));
    quoteFlow = null;
  }

  function acceptQuoteAnswer(text) {
    if (!quoteFlow) return false;
    const [key] = quoteFlow.questions[quoteFlow.step];
    if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim())) {
      addMessage("assistant", "Please enter a valid email address.");
      return true;
    }
    quoteFlow.data[key] = text.trim();
    quoteFlow.step++;
    continueQuote();
    return true;
  }

  function execute(type, value) {
    if (type === "route") { closeChat(); location.hash = value; }
    else if (type === "url") window.open(value, "_blank", "noopener,noreferrer");
    else if (type === "appointment") openHub("executives", value);
    else if (type === "hub") openHub(value || "main");
    else if (type === "quote") startQuote(value);
  }

  function process(text) {
    lastQuestion = text;
    addMessage("user", text);
    if (acceptQuoteAnswer(text)) return;
    const loader = typing();
    setTimeout(() => {
      loader.remove();
      addMessage("assistant", answer(text));
    }, Math.min(1100, 350 + text.length * 7));
  }

  document.addEventListener("click", event => {
    const trigger = event.target.closest("button,a,[role='button']");
    if (!trigger) return;
    const label = normalize(trigger.innerText || trigger.textContent);
    if (label.includes("chat with cortex core ai")) {
      event.preventDefault();
      event.stopPropagation();
      openChat();
    }
  }, true);

  root.addEventListener("click", event => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) execute(actionButton.dataset.action, actionButton.dataset.value || "");

    const suggestion = event.target.closest("[data-suggestion]");
    if (suggestion) process(suggestion.dataset.suggestion);

    const route = event.target.closest("[data-ai-route]");
    if (route) execute("route", route.dataset.aiRoute);

    const appointment = event.target.closest("[data-ai-appointment]");
    if (appointment) execute("appointment", appointment.dataset.aiAppointment || "");

    const hub = event.target.closest("[data-ai-hub]");
    if (hub) execute("hub", hub.dataset.aiHub);

    const copy = event.target.closest("[data-copy]");
    if (copy) {
      navigator.clipboard?.writeText(copy.dataset.copy || "");
      copy.textContent = "COPIED";
      setTimeout(() => copy.textContent = "COPY", 1200);
    }

    if (event.target.closest("[data-regenerate]") && lastQuestion) process(lastQuestion);
    if (event.target.closest("[data-ai-new]")) newChat();
    if (event.target.closest("[data-ai-clear]") && confirm("Clear complete AI chat history?")) newChat();
    if (event.target.closest(".mcx-ai-close")) closeChat();
    if (event.target === overlay) closeChat();
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    input.style.height = "auto";
    process(text);
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 130)}px`;
  });

  document.addEventListener("keydown", event => {
    if (overlay.hidden) return;
    if (event.key === "Escape") closeChat();
    if (event.key === "Tab") {
      const focusable = [...dialog.querySelectorAll("button,textarea,a[href],[tabindex]:not([tabindex='-1'])")]
        .filter(el => !el.disabled && !el.hidden);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
