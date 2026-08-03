(() => {
  "use strict";

  if (window.__MCX_CORTEX_CORE_AI_V4__) return;
  window.__MCX_CORTEX_CORE_AI_V4__ = true;

  const STORAGE_KEY = "mcx_cortex_core_ai_v4_history";
  const SETTINGS_KEY = "mcx_cortex_core_ai_v4_settings";
  const MAX_HISTORY = 120;

  const company = {
    name: "MI CORTEX X",
    legalName: "MI CORTEX X INC.",
    founded: "2026",
    country: "Sri Lanka",
    city: "Colombo",
    operatingModel: "Online operations",
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
    responseTime: "Within 24 hours",
    advance: "30%",
    consultation: "Free consultation up to 30 minutes",
    registration: "Pending"
  };

  const products = [
    {
      id: "cortex-core-ai",
      name: "CORTEX CORE AI",
      aliases: ["cortex ai", "core ai", "ai assistant", "company ai"],
      status: "Development",
      price: 45000,
      priceText: "Starting from LKR 45,000 for business integration",
      description: "A next-generation AI platform designed for business automation, intelligent customer support, content generation, and integration with websites, mobile applications, and enterprise systems.",
      route: "#/products/cortex-core-ai",
      freePlan: "Available when released"
    },
    {
      id: "business-suite",
      name: "MI Business Management Suite",
      aliases: ["business suite", "management suite", "crm hrm inventory pos erp"],
      status: "Upcoming",
      price: 80000,
      priceText: "Starting from LKR 80,000",
      description: "A complete business management platform including CRM, HRM, inventory, POS, ERP, and analytics.",
      route: "#/products/business-suite",
      freePlan: "Not announced"
    }
  ];

  const services = [
    { id:"ai-development", name:"AI Development", aliases:["ai develop","artificial intelligence development"], price:60000, billing:"", delivery:"7–30 days", support:"30 days", features:["AI models","Automation","AI integration"], route:"#/services/ai-development" },
    { id:"ai-chatbot-development", name:"AI Chatbot Development", aliases:["ai chatbot","chatbot development","chat bot","bot development"], price:45000, billing:"", delivery:"5–14 days", support:"30 days", features:["AI integration","Business chatbot","Multilingual support"], route:"#/services/ai-chatbot-development" },
    { id:"ai-automation", name:"AI Automation", aliases:["ai workflow","business automation"], price:65000, billing:"", delivery:"7–21 days", support:"30 days", features:["Workflow automation","AI agents","Business automation"], route:"#/services/ai-automation" },
    { id:"website-development", name:"Website Development", aliases:["website","web site","site development"], price:15000, billing:"", delivery:"3–14 days", support:"30 days", features:["Responsive design","SEO-ready structure","Admin options"], route:"#/services/website-development" },
    { id:"web-application-development", name:"Web Application Development", aliases:["web app","web application"], price:50000, billing:"", delivery:"7–30 days", support:"30 days", features:["Secure login","Dashboard","Database"], route:"#/services/web-application-development" },
    { id:"mobile-app-development", name:"Mobile App Development", aliases:["mobile app","android app","ios app","application development"], price:85000, billing:"", delivery:"14–45 days", support:"30 days", features:["Android","iOS","Cross-platform development"], route:"#/services/mobile-app-development" },
    { id:"desktop-software-development", name:"Desktop Software Development", aliases:["desktop software","windows software","linux software"], price:70000, billing:"", delivery:"10–30 days", support:"30 days", features:["Windows","Linux","Database support"], route:"#/services/desktop-software-development" },
    { id:"enterprise-software", name:"Enterprise Software", aliases:["enterprise system","erp crm hrm pos"], price:250000, billing:"", delivery:"30–90 days", support:"90 days", features:["ERP","CRM","HRM","POS"], route:"#/services/enterprise-software" },
    { id:"api-development", name:"API Development", aliases:["api","rest api","graphql api"], price:30000, billing:"", delivery:"3–10 days", support:"30 days", features:["REST","GraphQL","Secure APIs"], route:"#/services/api-development" },
    { id:"api-integration", name:"API Integration", aliases:["integration","third party integration","payment integration"], price:20000, billing:"", delivery:"2–7 days", support:"30 days", features:["Payment APIs","AI APIs","Third-party APIs"], route:"#/services/api-integration" },
    { id:"cloud-solutions", name:"Cloud Solutions", aliases:["cloud","aws","azure","google cloud"], price:30000, billing:"", delivery:"2–10 days", support:"30 days", features:["AWS","Microsoft Azure","Google Cloud"], route:"#/services/cloud-solutions" },
    { id:"ui-ux-design", name:"UI/UX Design", aliases:["ui ux","ui design","ux design","interface design"], price:15000, billing:"", delivery:"3–10 days", support:"14 days", features:["Modern UI","Responsive design","Prototype"], route:"#/services/ui-ux-design" },
    { id:"software-maintenance", name:"Software Maintenance", aliases:["maintenance","bug fixes","software support"], price:7500, billing:"per month", delivery:"Ongoing", support:"Monthly", features:["Bug fixes","Updates","Monitoring"], route:"#/services/software-maintenance" },
    { id:"technical-consulting", name:"Technical Consulting", aliases:["consulting","consultation","technical advice"], price:5000, billing:"", delivery:"Same day when available", support:"Consultation only", features:["Technology planning","Architecture advice"], route:"#/services/technical-consulting" },
    { id:"custom-software-development", name:"Custom Software Development", aliases:["custom software","custom system"], price:100000, billing:"", delivery:"14–90 days", support:"60 days", features:["Fully customized solutions"], route:"#/services/custom-software-development" }
  ];

  const aliases = {
    ceo: ["ceo","chief executive","chief executive officer","siio","c e o","සීඊඕ","ප්‍රධාන විධායක"],
    owner: ["owner","අයිතිකරු","හිමිකරු"],
    chairman: ["chairman","chairmen","chair person","සභාපති"],
    founder: ["founder","නිර්මාතෘ","ආරම්භකයා"],
    appointment: ["appointment","appoinment","apointment","meeting","book meeting","executive meet","හමුවීම","වෙන්කරන්න","අපොයින්ට්මන්ට්"],
    price: ["price","cost","mila","keeyada","kiyada","කීයද","මිල","ගාණ","ගණන"],
    contact: ["contact","call","message","connect","සම්බන්ධ","අමතන්න"],
    product: ["product","products","නිෂ්පාදන"],
    service: ["service","services","සේවා"],
    quote: ["quote","quotation","estimate","request quote","මිල ගණන්","quotation එක"],
    compare: ["compare","difference","vs","වෙනස","සසඳන්න"],
    recommend: ["recommend","best for me","suitable","suggest","මට හොඳ","සුදුසු"],
    support: ["support","help center","customer service","උදව්","සහාය"],
    payment: ["payment","advance","refund","pay","ගෙවීම","අත්තිකාරම්"],
    location: ["location","office","address","where","කොහෙද","ලිපිනය"],
    hours: ["hours","open","closed","sunday","වේලාව","ඇරලා","වහලා"]
  };

  const normalize = value => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s/@.+-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  const includesAny = (text, list) => list.some(term => text.includes(normalize(term)));

  function levenshtein(a, b) {
    a = normalize(a); b = normalize(b);
    const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        matrix[i][j] = b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
      }
    }
    return matrix[b.length][a.length];
  }

  function fuzzyContains(question, candidate) {
    const q = normalize(question);
    const c = normalize(candidate);
    if (q.includes(c)) return true;
    const qWords = q.split(" ");
    const cWords = c.split(" ").filter(Boolean);
    return cWords.every(word =>
      qWords.some(qw => qw.includes(word) || word.includes(qw) || (word.length > 4 && levenshtein(qw, word) <= 2))
    );
  }

  function detectLanguage(text) {
    if (/[\u0D80-\u0DFF]/.test(text)) return "si";
    if (/[\u0B80-\u0BFF]/.test(text)) return "ta";
    return "en";
  }

  function currency(value) {
    return `LKR ${Number(value).toLocaleString("en-US")}`;
  }

  function findService(question) {
    let best = null;
    let score = 0;
    for (const service of services) {
      const names = [service.name, ...service.aliases];
      let current = 0;
      for (const name of names) {
        if (fuzzyContains(question, name)) current = Math.max(current, normalize(name).split(" ").length + 2);
        else {
          const words = normalize(name).split(" ").filter(w => w.length > 2);
          current = Math.max(current, words.filter(w => normalize(question).includes(w)).length);
        }
      }
      if (current > score) { score = current; best = service; }
    }
    return score >= 2 ? best : null;
  }

  function findProduct(question) {
    return products.find(p => [p.name, ...p.aliases].some(name => fuzzyContains(question, name))) || null;
  }

  function extractTwoServices(question) {
    const matches = services.filter(s => [s.name, ...s.aliases].some(name => fuzzyContains(question, name)));
    return [...new Map(matches.map(s => [s.id, s])).values()].slice(0, 2);
  }

  function pageAction(label, route, kind = "route") {
    return { label, action: kind, value: route };
  }

  function contactActions() {
    return [
      { label: "WHATSAPP", action: "url", value: `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello 👋")}` },
      { label: "TELEGRAM", action: "url", value: `${company.telegramUrl}?text=${encodeURIComponent("Hello 👋")}` },
      { label: "EMAIL", action: "url", value: `mailto:${company.supportEmail}?subject=${encodeURIComponent("MI CORTEX X Support Request")}` }
    ];
  }

  function appointmentActions(role = "") {
    return [
      { label: role ? `BOOK ${role.toUpperCase()} APPOINTMENT` : "SELECT EXECUTIVE & BOOK APPOINTMENT", action: "appointment", value: role },
      { label: "CONTACT INFORMATION CENTER", action: "hub", value: "support" }
    ];
  }

  function reply(text, actions = [], suggestions = []) {
    return { text, actions, suggestions };
  }

  function answerCompanyQuestion(raw) {
    const q = normalize(raw);
    const language = detectLanguage(raw);
    const service = findService(raw);
    const product = findProduct(raw);

    if (/^(hi|hello|hey|hii+|ayubowan|vanakkam|හායි|හෙලෝ|ආයුබෝවන්)\b/.test(q)) {
      return reply(
        language === "si"
          ? "හායි 👋 මම CORTEX CORE AI. MI CORTEX X සමාගම, products, services, prices, support හෝ appointments ගැන අහන්න."
          : "Hi 👋 I’m CORTEX CORE AI. Ask me about MI CORTEX X, products, services, pricing, support, or appointments.",
        [
          pageAction("VIEW PRODUCTS", "#/products"),
          pageAction("VIEW SERVICES", "#/services"),
          { label: "BOOK APPOINTMENT", action: "appointment", value: "" }
        ],
        ["CEO කවුද?", "AI chatbot එකේ මිල කීයද?", "Website එකක් හදන්න කීයද?"]
      );
    }

    if (includesAny(q, aliases.ceo)) {
      const wantsAppointment = includesAny(q, aliases.appointment) || q.includes("talk") || q.includes("chat");
      return reply(
        `The Chief Executive Officer (CEO) of ${company.legalName} is ${company.ceo}.`,
        wantsAppointment ? appointmentActions("Chief Executive Officer (CEO)") : [
          { label: "BOOK CEO APPOINTMENT", action: "appointment", value: "Chief Executive Officer (CEO)" },
          pageAction("VIEW EXECUTIVE BOARD", "#/about/executive-board")
        ],
        ["Owner කවුද?", "Founder කවුද?", "CEO appointment එකක් දාන්න"]
      );
    }

    if (includesAny(q, aliases.owner)) {
      return reply(
        `The Owner of ${company.legalName} is ${company.owner}.`,
        [
          { label: "BOOK OWNER APPOINTMENT", action: "appointment", value: "Owner" },
          pageAction("VIEW EXECUTIVE BOARD", "#/about/executive-board")
        ],
        ["Chairman කවුද?", "Owner එක්ක appointment එකක් දාන්න"]
      );
    }

    if (includesAny(q, aliases.chairman)) {
      return reply(
        `The Chairman of ${company.legalName} is ${company.chairman}.`,
        [
          { label: "BOOK CHAIRMAN APPOINTMENT", action: "appointment", value: "Chairman" },
          pageAction("VIEW EXECUTIVE BOARD", "#/about/executive-board")
        ]
      );
    }

    if (includesAny(q, aliases.founder)) {
      return reply(
        `The Founder of ${company.legalName} is ${company.founder}. The company was founded in ${company.founded}.`,
        [
          { label: "BOOK FOUNDER APPOINTMENT", action: "appointment", value: "Founder" },
          pageAction("VIEW EXECUTIVE BOARD", "#/about/executive-board")
        ]
      );
    }

    if (includesAny(q, aliases.appointment)) {
      let role = "";
      if (includesAny(q, aliases.ceo)) role = "Chief Executive Officer (CEO)";
      else if (includesAny(q, aliases.owner)) role = "Owner";
      else if (includesAny(q, aliases.chairman)) role = "Chairman";
      else if (includesAny(q, aliases.founder)) role = "Founder";

      return reply(
        role
          ? `You can prepare an appointment request for the ${role} using the appointment form.`
          : "Choose the executive board member you want to contact, then complete the appointment form with your preferred date and time.",
        appointmentActions(role),
        ["CEO appointment", "Owner appointment", "Founder appointment", "Chairman appointment"]
      );
    }

    const compared = includesAny(q, aliases.compare) ? extractTwoServices(raw) : [];
    if (compared.length === 2) {
      const [a, b] = compared;
      return reply(
        `${a.name} vs ${b.name}\n\n` +
        `${a.name}\n• Starting price: ${currency(a.price)}${a.billing ? ` ${a.billing}` : ""}\n• Delivery: ${a.delivery}\n• Support: ${a.support}\n\n` +
        `${b.name}\n• Starting price: ${currency(b.price)}${b.billing ? ` ${b.billing}` : ""}\n• Delivery: ${b.delivery}\n• Support: ${b.support}\n\n` +
        "The better option depends on your required platform, features, integrations, delivery schedule, and budget.",
        [
          pageAction(`VIEW ${a.name.toUpperCase()}`, a.route),
          pageAction(`VIEW ${b.name.toUpperCase()}`, b.route),
          { label: "REQUEST QUOTATION", action: "quote", value: `${a.name} vs ${b.name}` }
        ]
      );
    }

    if (service) {
      const askingPrice = includesAny(q, aliases.price) || q.includes("delivery") || q.includes("support") || q.includes("feature");
      return reply(
        `${service.name}\n` +
        `• Starting price: ${currency(service.price)}${service.billing ? ` ${service.billing}` : ""}\n` +
        `• Estimated delivery: ${service.delivery}\n` +
        `• Support: ${service.support}\n` +
        `• Main features: ${service.features.join(", ")}\n\n` +
        "The final quotation depends on project scope, required features, integrations, hosting, third-party charges, and ongoing support.",
        [
          pageAction("VIEW SERVICE", service.route),
          { label: "REQUEST QUOTE", action: "quote", value: service.name },
          { label: "WHATSAPP", action: "url", value: `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like a quotation for ${service.name}.`)}` },
          { label: "BOOK CONSULTATION", action: "appointment", value: "" }
        ],
        askingPrice ? ["What features are included?", "How long will it take?", "Request a quotation"] : []
      );
    }

    if (product) {
      return reply(
        `${product.name}\n• Status: ${product.status}\n• Price: ${product.priceText}\n• Free plan: ${product.freePlan}\n\n${product.description}`,
        [
          pageAction("VIEW PRODUCT", product.route),
          { label: "REQUEST INFORMATION", action: "hub", value: "products" },
          { label: "WHATSAPP", action: "url", value: `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like information about ${product.name}.`)}` }
        ]
      );
    }

    if (includesAny(q, aliases.recommend)) {
      let recommended = services[0];
      if (q.includes("business") || q.includes("company management")) recommended = services.find(s => s.id === "enterprise-software");
      else if (q.includes("sell") || q.includes("shop") || q.includes("online store")) recommended = services.find(s => s.id === "website-development");
      else if (q.includes("customer support") || q.includes("chat")) recommended = services.find(s => s.id === "ai-chatbot-development");
      else if (q.includes("manual work") || q.includes("workflow")) recommended = services.find(s => s.id === "ai-automation");
      else if (q.includes("mobile") || q.includes("android") || q.includes("ios")) recommended = services.find(s => s.id === "mobile-app-development");

      return reply(
        `A suitable starting option is ${recommended.name}.\nStarting price: ${currency(recommended.price)}${recommended.billing ? ` ${recommended.billing}` : ""}\nEstimated delivery: ${recommended.delivery}.\n\nFor a precise recommendation, share your business type, required users, main features, preferred platform, deadline, and budget.`,
        [
          pageAction("VIEW RECOMMENDED SERVICE", recommended.route),
          { label: "START PROJECT REQUIREMENTS", action: "quote", value: recommended.name },
          { label: "FREE CONSULTATION", action: "appointment", value: "" }
        ]
      );
    }

    if (includesAny(q, aliases.quote)) {
      return reply(
        "I can collect your project requirements step by step and prepare a quotation-request summary.",
        [
          { label: "START QUOTATION REQUEST", action: "quote", value: "" },
          pageAction("VIEW PRICING", "#/pricing")
        ]
      );
    }

    if (includesAny(q, aliases.product)) {
      return reply(
        products.map(p => `• ${p.name} — ${p.status} — ${p.priceText}`).join("\n"),
        [
          pageAction("VIEW ALL PRODUCTS", "#/products"),
          { label: "PRODUCT INFORMATION", action: "hub", value: "products" }
        ],
        products.map(p => `${p.name} මිල කීයද?`)
      );
    }

    if (includesAny(q, aliases.service)) {
      return reply(
        services.map(s => `• ${s.name} — Starting from ${currency(s.price)}${s.billing ? ` ${s.billing}` : ""}`).join("\n"),
        [
          pageAction("VIEW ALL SERVICES", "#/services"),
          pageAction("VIEW PRICING", "#/pricing"),
          { label: "REQUEST QUOTE", action: "quote", value: "" }
        ]
      );
    }

    if (includesAny(q, aliases.contact)) {
      return reply(
        `MI CORTEX X Contact Information\n• Primary email: ${company.email}\n• Support: ${company.supportEmail}\n• Sales: ${company.salesEmail}\n• WhatsApp: ${company.whatsappDisplay}\n• Telegram: ${company.telegram}\n• Website: ${company.website}`,
        contactActions()
      );
    }

    if (includesAny(q, aliases.support)) {
      return reply(
        `Support is available through Email, WhatsApp, Telegram, the website contact form, and live chat when available. Normal response time: ${company.responseTime}.`,
        [
          { label: "OPEN INFORMATION CENTER", action: "hub", value: "support" },
          ...contactActions()
        ]
      );
    }

    if (includesAny(q, aliases.payment)) {
      return reply(
        `Project payment information:\n• Advance: ${company.advance}\n• Remaining payment: Before final delivery\n• Online card payments: Not activated yet\n• Full refund: Before project commencement\n• After development begins: Completed work and delivered milestones are non-refundable.`,
        [
          { label: "REQUEST QUOTATION", action: "quote", value: "" },
          { label: "CONTACT SALES", action: "url", value: `mailto:${company.salesEmail}` }
        ]
      );
    }

    if (includesAny(q, aliases.location)) {
      return reply(
        `${company.name} operates online from ${company.city}, ${company.country}. There is currently no public walk-in office.`,
        [pageAction("VIEW CONTACT PAGE", "#/contact")]
      );
    }

    if (includesAny(q, aliases.hours)) {
      return reply(
        `Business hours: ${company.hours}`,
        [{ label: "CONTACT SUPPORT", action: "hub", value: "support" }]
      );
    }

    if (q.includes("company") || q.includes("about") || q.includes("what is mi cortex")) {
      return reply(
        `${company.name} is a Sri Lankan artificial intelligence and software technology company founded in ${company.founded}. It develops intelligent digital products and custom technology solutions for businesses, organizations, and individuals worldwide.`,
        [
          pageAction("ABOUT MI CORTEX X", "#/about"),
          pageAction("VIEW PRODUCTS", "#/products"),
          pageAction("VIEW SERVICES", "#/services")
        ]
      );
    }

    if (q.includes("mission")) {
      return reply("The mission of MI CORTEX X is to empower businesses through innovative, reliable, and intelligent technology solutions.", [pageAction("VIEW ABOUT", "#/about")]);
    }

    if (q.includes("vision")) {
      return reply("The vision of MI CORTEX X is to become a globally recognized AI and software technology company.", [pageAction("VIEW ABOUT", "#/about")]);
    }

    if (q.includes("process") || q.includes("project step") || q.includes("how start")) {
      return reply(
        "Project process:\n1. Free consultation\n2. Requirement analysis and quotation\n3. Project approval and 30% advance\n4. Development and progress updates\n5. Testing, remaining payment, final delivery, and support.",
        [
          { label: "START QUOTATION REQUEST", action: "quote", value: "" },
          { label: "BOOK CONSULTATION", action: "appointment", value: "" }
        ]
      );
    }

    if (includesAny(q, aliases.price)) {
      return reply(
        "Tell me the exact product or service name to receive its starting price. All displayed prices are starting estimates and may change according to scope, features, integrations, delivery requirements, hosting, third-party charges, and support.",
        [
          pageAction("VIEW PRICING", "#/pricing"),
          { label: "REQUEST CUSTOM QUOTE", action: "quote", value: "" }
        ],
        ["AI chatbot එකේ මිල කීයද?", "Website එකක් හදන්න කීයද?", "Mobile app එකේ මිල කීයද?"]
      );
    }

    return reply(
      language === "si"
        ? "මේ ප්‍රශ්නයට තහවුරු කළ නිවැරදි පිළිතුරක් දැනට knowledge base එකේ නැහැ. ප්‍රශ්නයට product/service නම, price, executive title හෝ contact topic එක පැහැදිලිව ඇතුළත් කරන්න."
        : "I do not have a verified answer for that question yet. Please include the exact product, service, price, executive title, or contact topic.",
      [
        pageAction("VIEW PRODUCTS", "#/products"),
        pageAction("VIEW SERVICES", "#/services"),
        { label: "CONTACT SUPPORT", action: "hub", value: "support" },
        { label: "BOOK APPOINTMENT", action: "appointment", value: "" }
      ],
      ["CEO කවුද?", "AI chatbot එකේ මිල කීයද?", "Product list එක පෙන්වන්න"]
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
            <button type="button" data-ai-speech title="Voice replies" aria-pressed="false">&#128266;</button>
            <button class="mcx-ai-close" type="button" aria-label="Close">&#10005;</button>
          </div>
        </header>

        <div class="mcx-ai-quick-actions" aria-label="Quick actions">
          <button type="button" data-ai-route="#/products">PRODUCTS</button>
          <button type="button" data-ai-route="#/services">SERVICES</button>
          <button type="button" data-ai-route="#/pricing">PRICING</button>
          <button type="button" data-ai-appointment="">APPOINTMENT</button>
          <button type="button" data-ai-hub="support">SUPPORT</button>
        </div>

        <div class="mcx-ai-messages" aria-live="polite"></div>

        <div class="mcx-ai-suggestions" hidden></div>

        <form class="mcx-ai-composer">
          <button class="mcx-ai-voice" type="button" title="Voice input" aria-label="Voice input">&#127908;</button>
          <textarea rows="1" maxlength="1600" placeholder="Ask about MI CORTEX X..." required></textarea>
          <button class="mcx-ai-send" type="submit" aria-label="Send">&#10148;</button>
        </form>
      </section>
    </div>`;
  document.body.appendChild(root);

  const overlay = root.querySelector(".mcx-ai-overlay");
  const dialog = root.querySelector(".mcx-ai-dialog");
  const messages = root.querySelector(".mcx-ai-messages");
  const suggestionsHost = root.querySelector(".mcx-ai-suggestions");
  const form = root.querySelector(".mcx-ai-composer");
  const input = root.querySelector("textarea");
  const voiceButton = root.querySelector(".mcx-ai-voice");
  const speechButton = root.querySelector("[data-ai-speech]");
  let opened = false;
  let lastFocus = null;
  let lastQuestion = "";
  let speechEnabled = false;
  let quoteFlow = null;

  function loadHistory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed.slice(-MAX_HISTORY) : [];
    } catch { return []; }
  }

  function saveHistory(items) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(-MAX_HISTORY))); } catch {}
  }

  let history = loadHistory();

  function formatTime(value = Date.now()) {
    return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(value));
  }

  function safeLinkify(container, text) {
    const pattern = /(https?:\/\/[^\s]+|mailto:[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|\+94\s?[\d\s]{8,}|@MICORTEXX)/g;
    let last = 0;
    for (const match of text.matchAll(pattern)) {
      container.append(document.createTextNode(text.slice(last, match.index)));
      const value = match[0];
      const a = document.createElement("a");
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      if (value.startsWith("http")) a.href = value;
      else if (value.startsWith("mailto:")) a.href = value;
      else if (value.includes("@") && value !== "@MICORTEXX") a.href = `mailto:${value}`;
      else if (value === "@MICORTEXX") a.href = company.telegramUrl;
      else a.href = `https://wa.me/${company.whatsappNumber}`;
      a.textContent = value;
      container.append(a);
      last = match.index + value.length;
    }
    container.append(document.createTextNode(text.slice(last)));
  }

  function createActions(actions = []) {
    const host = document.createElement("div");
    host.className = "mcx-ai-message-actions";
    for (const item of actions) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = item.label;
      button.dataset.action = item.action;
      button.dataset.value = item.value || "";
      host.append(button);
    }
    return host;
  }

  function addMessage(type, payload, persist = true, timestamp = Date.now()) {
    const data = typeof payload === "string" ? { text: payload, actions: [], suggestions: [] } : payload;
    const row = document.createElement("article");
    row.className = `mcx-ai-message mcx-ai-${type}`;

    const bubble = document.createElement("div");
    bubble.className = "mcx-ai-bubble";

    const content = document.createElement("div");
    content.className = "mcx-ai-content";
    safeLinkify(content, data.text || "");
    bubble.append(content);

    const meta = document.createElement("div");
    meta.className = "mcx-ai-meta";
    meta.textContent = `${type === "user" ? "You" : "CORTEX CORE AI"} · ${formatTime(timestamp)}`;
    bubble.append(meta);

    if (type === "assistant") {
      const tools = document.createElement("div");
      tools.className = "mcx-ai-tools";
      const copy = document.createElement("button");
      copy.type = "button";
      copy.textContent = "COPY";
      copy.dataset.copyText = data.text || "";
      const regen = document.createElement("button");
      regen.type = "button";
      regen.textContent = "REGENERATE";
      regen.dataset.regenerate = "true";
      tools.append(copy, regen);
      bubble.append(tools);
      if (data.actions?.length) bubble.append(createActions(data.actions));
      showSuggestions(data.suggestions || []);
    }

    row.append(bubble);
    messages.append(row);
    messages.scrollTop = messages.scrollHeight;

    if (persist) {
      history.push({ type, payload: data, timestamp });
      history = history.slice(-MAX_HISTORY);
      saveHistory(history);
    }

    if (type === "assistant" && speechEnabled && "speechSynthesis" in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(data.text.replace(/[•\n]/g, " "));
      utterance.lang = detectLanguage(data.text) === "si" ? "si-LK" : "en-US";
      speechSynthesis.speak(utterance);
    }
  }

  function showSuggestions(items) {
    suggestionsHost.innerHTML = "";
    if (!items.length) { suggestionsHost.hidden = true; return; }
    items.slice(0, 5).forEach(text => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = text;
      button.dataset.suggestion = text;
      suggestionsHost.append(button);
    });
    suggestionsHost.hidden = false;
  }

  function showTyping() {
    const row = document.createElement("div");
    row.className = "mcx-ai-message mcx-ai-assistant mcx-ai-typing";
    row.innerHTML = `<div class="mcx-ai-bubble"><span></span><span></span><span></span></div>`;
    messages.append(row);
    messages.scrollTop = messages.scrollHeight;
    return row;
  }

  function restoreHistory() {
    messages.innerHTML = "";
    history.forEach(item => addMessage(item.type, item.payload, false, item.timestamp));
  }

  function newChat() {
    quoteFlow = null;
    history = [];
    saveHistory(history);
    messages.innerHTML = "";
    showSuggestions([]);
    addMessage("assistant", reply(
      "Hi 👋 I’m CORTEX CORE AI. Ask me about MI CORTEX X, exact service prices, products, executives, support, quotations, or appointments.",
      [
        pageAction("VIEW PRODUCTS", "#/products"),
        pageAction("VIEW SERVICES", "#/services"),
        { label: "BOOK APPOINTMENT", action: "appointment", value: "" }
      ],
      ["CEO කවුද?", "AI chatbot එකේ මිල කීයද?", "Website එකක් හදන්න කීයද?"]
    ));
  }

  function openChat() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    document.body.classList.add("mcx-ai-open");
    if (!opened) {
      opened = true;
      if (history.length) restoreHistory();
      else newChat();
    }
    setTimeout(() => input.focus(), 40);
  }

  function closeChat() {
    overlay.hidden = true;
    document.body.classList.remove("mcx-ai-open");
    speechSynthesis?.cancel?.();
    lastFocus?.focus?.();
  }

  function openHub(panel = "main", role = "") {
    closeChat();
    const hubRoot = document.getElementById("mcx-contact-hub-root");
    if (!hubRoot) {
      location.hash = "#/contact";
      return;
    }
    const fab = hubRoot.querySelector(".mcx-hub-fab");
    fab?.click();
    setTimeout(() => {
      if (panel === "executives" || role) {
        hubRoot.querySelector('[data-open="executives"]')?.click();
        if (role) {
          setTimeout(() => {
            const buttons = [...hubRoot.querySelectorAll("[data-executive]")];
            const match = buttons.find(btn => normalize(btn.dataset.executive).includes(normalize(role).replace("chief executive officer ceo", "chief executive officer")));
            match?.click();
          }, 100);
        }
      } else if (panel !== "main") {
        hubRoot.querySelector(`[data-open="${panel}"]`)?.click();
      }
    }, 100);
  }

  function startQuoteFlow(initialService = "") {
    quoteFlow = {
      step: 0,
      data: { service: initialService || "" },
      questions: [
        ["service", initialService ? null : "What product or service do you need?"],
        ["features", "What main features or requirements do you need?"],
        ["budget", "What is your estimated budget? You may type “Not decided”."],
        ["deadline", "What is your preferred deadline?"],
        ["name", "What is your full name?"],
        ["email", "What email address should the team use to contact you?"]
      ]
    };
    addMessage("assistant", "I’ll collect the quotation details step by step. Do not include payment-card information.");
    continueQuoteFlow();
  }

  function continueQuoteFlow() {
    while (quoteFlow && quoteFlow.step < quoteFlow.questions.length) {
      const [key, question] = quoteFlow.questions[quoteFlow.step];
      if (quoteFlow.data[key]) { quoteFlow.step++; continue; }
      addMessage("assistant", question);
      return;
    }
    if (!quoteFlow) return;
    const d = quoteFlow.data;
    const summary =
      `QUOTATION REQUEST SUMMARY\n` +
      `Service/Product: ${d.service}\n` +
      `Required features: ${d.features}\n` +
      `Estimated budget: ${d.budget}\n` +
      `Preferred deadline: ${d.deadline}\n` +
      `Full name: ${d.name}\n` +
      `Email: ${d.email}`;
    addMessage("assistant", reply(
      summary,
      [
        { label: "SEND VIA WHATSAPP", action: "url", value: `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(summary)}` },
        { label: "SEND VIA EMAIL", action: "url", value: `mailto:${company.salesEmail}?subject=${encodeURIComponent("Quotation Request")}&body=${encodeURIComponent(summary)}` },
        pageAction("VIEW PRICING", "#/pricing")
      ]
    ));
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
    continueQuoteFlow();
    return true;
  }

  function executeAction(action, value) {
    if (action === "route") {
      closeChat();
      location.hash = value.startsWith("#") ? value : `#/${value}`;
    } else if (action === "url") {
      window.open(value, "_blank", "noopener,noreferrer");
    } else if (action === "appointment") {
      openHub("executives", value);
    } else if (action === "hub") {
      openHub(value || "main");
    } else if (action === "quote") {
      startQuoteFlow(value);
    }
  }

  function processQuestion(question) {
    lastQuestion = question;
    addMessage("user", question);
    if (acceptQuoteAnswer(question)) return;

    const typing = showTyping();
    const delay = Math.min(1150, 350 + question.length * 7);
    setTimeout(() => {
      typing.remove();
      addMessage("assistant", answerCompanyQuestion(question));
    }, delay);
  }

  document.addEventListener("click", event => {
    const trigger = event.target.closest("button,a,[role='button']");
    if (!trigger) return;
    const text = normalize(trigger.innerText || trigger.textContent);
    if (text.includes("chat with cortex core ai")) {
      event.preventDefault();
      event.stopPropagation();
      openChat();
    }
  }, true);

  root.addEventListener("click", event => {
    const action = event.target.closest("[data-action]");
    if (action) executeAction(action.dataset.action, action.dataset.value || "");

    const suggestion = event.target.closest("[data-suggestion]");
    if (suggestion) processQuestion(suggestion.dataset.suggestion);

    const route = event.target.closest("[data-ai-route]");
    if (route) executeAction("route", route.dataset.aiRoute);

    const appointment = event.target.closest("[data-ai-appointment]");
    if (appointment) executeAction("appointment", appointment.dataset.aiAppointment);

    const hub = event.target.closest("[data-ai-hub]");
    if (hub) executeAction("hub", hub.dataset.aiHub);

    const copy = event.target.closest("[data-copy-text]");
    if (copy) {
      navigator.clipboard?.writeText(copy.dataset.copyText).then(() => {
        copy.textContent = "COPIED";
        setTimeout(() => copy.textContent = "COPY", 1200);
      });
    }

    if (event.target.closest("[data-regenerate]") && lastQuestion) {
      processQuestion(lastQuestion);
    }

    if (event.target.closest("[data-ai-new]")) newChat();

    if (event.target.closest("[data-ai-clear]")) {
      if (confirm("Clear the complete CORTEX CORE AI chat history?")) newChat();
    }

    if (event.target.closest("[data-ai-speech]")) {
      speechEnabled = !speechEnabled;
      speechButton.setAttribute("aria-pressed", String(speechEnabled));
      speechButton.classList.toggle("active", speechEnabled);
      if (!speechEnabled) speechSynthesis?.cancel?.();
    }

    if (event.target.closest(".mcx-ai-close")) closeChat();
    if (event.target === overlay) closeChat();
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    input.value = "";
    input.style.height = "auto";
    processQuestion(question);
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

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.continuous = false;
    voiceButton.addEventListener("click", () => {
      recognition.lang = /[\u0D80-\u0DFF]/.test(input.value) ? "si-LK" : "en-US";
      voiceButton.classList.add("listening");
      recognition.start();
    });
    recognition.addEventListener("result", event => {
      input.value = event.results[0][0].transcript;
      input.dispatchEvent(new Event("input"));
      input.focus();
    });
    recognition.addEventListener("end", () => voiceButton.classList.remove("listening"));
    recognition.addEventListener("error", () => voiceButton.classList.remove("listening"));
  } else {
    voiceButton.hidden = true;
  }

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
