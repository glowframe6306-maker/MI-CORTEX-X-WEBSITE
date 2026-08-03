(() => {
  "use strict";

  if (window.__MCX_CORTEX_CORE_AI_V6__) return;
  window.__MCX_CORTEX_CORE_AI_V6__ = true;

  const HISTORY_KEY = "mcx_cortex_core_ai_v6_history";
  const CONTEXT_KEY = "mcx_cortex_core_ai_v6_context";
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
    primaryEmail: "micortexx@gmail.com",
    supportEmail: "support.micortexx@gmail.com",
    salesEmail: "sales.cortexx@gmail.com",
    whatsappDisplay: "+94 75 639 0621",
    whatsappNumber: "94756390621",
    telegram: "@MICORTEXX",
    telegramUrl: "https://t.me/MICORTEXX",
    location: "Online operations, Colombo, Sri Lanka",
    hours: "Monday to Saturday — 24 hours. Sunday — Closed.",
    responseTime: "Within 24 hours",
    advance: "30%",
    consultation: "Free consultation up to 30 minutes",
    mission: "To empower businesses through innovative, reliable and intelligent technology solutions.",
    vision: "To become a globally recognized AI and software technology company."
  };

  const products = [
    {
      id: "cortex-core-ai",
      name: "CORTEX CORE AI",
      aliases: ["cortex core ai", "cortex ai", "core ai", "ai assistant", "company ai"],
      status: "Development",
      price: 45000,
      billing: "",
      priceText: "Starting from LKR 45,000 for business integration",
      freePlan: "Available when released",
      route: "#/products/cortex-core-ai",
      description: "A next-generation AI platform for business automation, intelligent customer support, content generation and system integration."
    },
    {
      id: "business-suite",
      name: "MI Business Management Suite",
      aliases: ["business suite", "management suite", "business management system", "crm hrm inventory pos erp"],
      status: "Upcoming",
      price: 80000,
      billing: "",
      priceText: "Starting from LKR 80,000",
      freePlan: "Not announced",
      route: "#/products/business-suite",
      description: "A complete business management platform including CRM, HRM, inventory, POS, ERP and analytics."
    }
  ];

  const services = [
    ["ai-development","AI Development",["ai development","ai develop","artificial intelligence"],60000,"","7–30 days","30 days",["AI models","Automation","AI integration"]],
    ["ai-chatbot-development","AI Chatbot Development",["ai chatbot","chatbot","chat bot","bot development"],45000,"","5–14 days","30 days",["AI integration","Business chatbot","Multilingual support"]],
    ["ai-automation","AI Automation",["ai automation","workflow automation","business automation"],65000,"","7–21 days","30 days",["Workflow automation","AI agents","Business automation"]],
    ["website-development","Website Development",["website","web site","site development"],15000,"","3–14 days","30 days",["Responsive design","SEO-ready structure","Admin options"]],
    ["web-application-development","Web Application Development",["web application","web app","webapp"],50000,"","7–30 days","30 days",["Secure login","Dashboard","Database"]],
    ["mobile-app-development","Mobile App Development",["mobile app","android app","ios app","application development"],85000,"","14–45 days","30 days",["Android","iOS","Cross-platform development"]],
    ["desktop-software-development","Desktop Software Development",["desktop software","windows software","linux software"],70000,"","10–30 days","30 days",["Windows","Linux","Database support"]],
    ["enterprise-software","Enterprise Software",["enterprise software","enterprise system","erp crm hrm pos"],250000,"","30–90 days","90 days",["ERP","CRM","HRM","POS"]],
    ["api-development","API Development",["api development","rest api","graphql api"],30000,"","3–10 days","30 days",["REST","GraphQL","Secure APIs"]],
    ["api-integration","API Integration",["api integration","third party integration","payment integration"],20000,"","2–7 days","30 days",["Payment APIs","AI APIs","Third-party APIs"]],
    ["cloud-solutions","Cloud Solutions",["cloud","aws","azure","google cloud"],30000,"","2–10 days","30 days",["AWS","Microsoft Azure","Google Cloud"]],
    ["ui-ux-design","UI/UX Design",["ui ux","ui design","ux design","interface design"],15000,"","3–10 days","14 days",["Modern UI","Responsive design","Prototype"]],
    ["software-maintenance","Software Maintenance",["maintenance","bug fixes","software support"],7500,"per month","Ongoing","Monthly",["Bug fixes","Updates","Monitoring"]],
    ["technical-consulting","Technical Consulting",["technical consulting","consulting","consultation","technical advice"],5000,"","Same day when available","Consultation only",["Technology planning","Architecture advice"]],
    ["custom-software-development","Custom Software Development",["custom software","custom system"],100000,"","14–90 days","60 days",["Fully customized solutions"]]
  ].map(([id,name,aliases,price,billing,delivery,support,features]) => ({
    id,name,aliases,price,billing,delivery,support,features,route:`#/services/${id}`
  }));

  const replacements = [
    [/\boyage\b/g,"ඔයාගේ"],[/\bobe\b/g,"ඔබගේ"],[/\bnama\b/g,"නම"],
    [/\bmokakda\b/g,"මොකක්ද"],[/\bmokadda\b/g,"මොකක්ද"],[/\bmokada\b/g,"මොකක්ද"],
    [/\bkawda\b/g,"කවුද"],[/\bkauda\b/g,"කවුද"],[/\bkawuda\b/g,"කවුද"],
    [/\bkeeyada\b/g,"කීයද"],[/\bkiyada\b/g,"කීයද"],[/\bkiyakda\b/g,"කීයද"],
    [/\bkoheda\b/g,"කොහෙද"],[/\bkohomada\b/g,"කොහොමද"],[/\bkawadda\b/g,"කවදාද"],
    [/\bmila\b/g,"මිල"],[/\bgana\b/g,"ගැන"],[/\bdenna\b/g,"දෙන්න"],
    [/\bpennanna\b/g,"පෙන්වන්න"],[/\bpenwanna\b/g,"පෙන්වන්න"],
    [/\bone\b/g,"ඕන"],[/\bhadanna\b/g,"හදන්න"],[/\bdanna\b/g,"දාන්න"],[/\bdaanna\b/g,"දාන්න"],
    [/\bpatan gaththe\b/g,"පටන් ගත්තේ"],[/\bpatan gatte\b/g,"පටන් ගත්තේ"],
    [/\bcompany eka\b/g,"සමාගම"],[/\bai eka\b/g,"ai"],
    [/\bchat bot\b/g,"chatbot"],[/\bwhatsap+\b/g,"whatsapp"],[/\bwatsapp\b/g,"whatsapp"],
    [/\btelegarm\b/g,"telegram"],[/\btelegramm\b/g,"telegram"],
    [/\bservise\b/g,"service"],[/\bserivce\b/g,"service"],[/\bsevice\b/g,"service"],
    [/\bprodact\b/g,"product"],[/\bproduc\b/g,"product"],[/\bprduct\b/g,"product"],
    [/\bappoinment\b/g,"appointment"],[/\bapointment\b/g,"appointment"],
    [/\bchairmen\b/g,"chairman"],[/\bcheif\b/g,"chief"],[/\bexcutive\b/g,"executive"],
    [/\bexcecutive\b/g,"executive"],[/\bmail eka\b/g,"email"],[/\bnumber eka\b/g,"number"],
    [/\bprice eka\b/g,"price"],[/\bwisthara\b/g,"information"],[/\bvisthara\b/g,"information"],
    [/\bthiyenawada\b/g,"තියෙනවද"],[/\bnadda\b/g,"නැද්ද"],[/\bda\b/g,"ද"]
  ];

  const normalize = value => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[’'".,!?;:()[\]{}<>/_\\|@#$%^&*+=~`-]/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  function interpret(value) {
    let text = normalize(value);
    for (const [pattern, replacement] of replacements) text = text.replace(pattern, replacement);
    return text.replace(/\s+/g, " ").trim();
  }

  function levenshtein(a, b) {
    a = normalize(a); b = normalize(b);
    const rows = b.length + 1, cols = a.length + 1;
    const d = Array.from({length: rows}, () => Array(cols).fill(0));
    for (let i=0;i<rows;i++) d[i][0]=i;
    for (let j=0;j<cols;j++) d[0][j]=j;
    for (let i=1;i<rows;i++) {
      for (let j=1;j<cols;j++) {
        d[i][j] = b[i-1] === a[j-1] ? d[i-1][j-1] : Math.min(d[i-1][j-1]+1,d[i][j-1]+1,d[i-1][j]+1);
      }
    }
    return d[b.length][a.length];
  }

  function wordMatches(inputWord, targetWord) {
    if (!inputWord || !targetWord) return false;
    if (inputWord === targetWord || inputWord.includes(targetWord) || targetWord.includes(inputWord)) return true;
    const limit = targetWord.length >= 8 ? 2 : targetWord.length >= 5 ? 1 : 0;
    return limit > 0 && levenshtein(inputWord, targetWord) <= limit;
  }

  function phraseScore(question, phrase) {
    const q = interpret(question);
    const p = interpret(phrase);
    if (q.includes(p)) return 100 + p.length;
    const qWords = q.split(" ").filter(Boolean);
    const pWords = p.split(" ").filter(Boolean);
    let score = 0;
    for (const target of pWords) {
      if (qWords.some(word => wordMatches(word, target))) score += target.length > 4 ? 3 : 1;
    }
    return score;
  }

  function detectLanguage(value) {
    if (/[\u0D80-\u0DFF]/.test(value)) return "si";
    const n = normalize(value);
    if (["mokakda","kawda","kauda","keeyada","kiyada","koheda","kohomada","denna","one","hadanna","oyage","mila"].some(x => n.includes(x))) return "si";
    if (/[\u0B80-\u0BFF]/.test(value)) return "ta";
    return "en";
  }

  function currency(value) {
    return `LKR ${Number(value).toLocaleString("en-US")}`;
  }

  function findEntity(raw, list) {
    let best = null, score = 0;
    for (const item of list) {
      for (const alias of [item.name, ...(item.aliases || [])]) {
        const current = phraseScore(raw, alias);
        if (current > score) { score = current; best = item; }
      }
    }
    return score >= 3 ? best : null;
  }

  function action(label, actionType, value = "") {
    return { label, action: actionType, value };
  }

  function reply(text, actions = [], suggestions = [], context = null) {
    return { text, actions, suggestions, context };
  }

  function contactActions() {
    return [
      action("WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello 👋")}`),
      action("TELEGRAM","url",`${company.telegramUrl}?text=${encodeURIComponent("Hello 👋")}`),
      action("EMAIL","url",`mailto:${company.supportEmail}?subject=${encodeURIComponent("MI CORTEX X Support Request")}`)
    ];
  }

  function appointmentActions(role = "") {
    return [
      action(role ? `BOOK ${role.toUpperCase()} APPOINTMENT` : "SELECT EXECUTIVE & BOOK APPOINTMENT","appointment",role),
      action("CONTACT INFORMATION CENTER","hub","support")
    ];
  }

  let context = {};
  try { context = JSON.parse(sessionStorage.getItem(CONTEXT_KEY) || "{}"); } catch {}

  function setContext(next) {
    context = { ...context, ...next, updatedAt: Date.now() };
    try { sessionStorage.setItem(CONTEXT_KEY, JSON.stringify(context)); } catch {}
  }

  function answer(raw) {
    const q = interpret(raw);
    const lang = detectLanguage(raw);
    const product = findEntity(raw, products);
    const service = findEntity(raw, services);

    const asks = (...terms) => terms.some(term => phraseScore(q, term) >= 3);
    const isPrice = asks("price","cost","මිල","කීයද","quotation");
    const isDelivery = asks("delivery","days","time","කොච්චර කල්","දවස්");
    const isFeatures = asks("features","include","included","මොනවද තියෙන්නේ");
    const isSupport = asks("support","warranty","after delivery","සහාය");
    const isOrder = asks("order","buy","request quote","quotation","ගන්න ඕන","හදන්න ඕන");

    if (/^(hi|hello|hey|hii+|හායි|හෙලෝ|ආයුබෝවන්|ayubowan|vanakkam)\b/.test(q)) {
      return reply(
        lang === "si"
          ? "හායි 👋 මම CORTEX CORE AI. Sinhala, English හෝ Singlish වලින් MI CORTEX X ගැන ඕනෑම company question එකක් අහන්න."
          : "Hi 👋 I’m CORTEX CORE AI. Ask me any verified company question in Sinhala, English or Singlish.",
        [action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services"),action("APPOINTMENT","appointment")],
        ["Oyaga nama mokakda?", "CEO kawda?", "AI chatbot eke mila keeyada?"]
      );
    }

    if (asks("your name","who are you","ඔයාගේ නම","ඔබගේ නම","ai නම","assistant නම") || q === "නම මොකක්ද") {
      return reply(
        lang === "si"
          ? "මගේ නම CORTEX CORE AI. මම MI CORTEX X සමාගමේ automated AI assistant එකයි."
          : "My name is CORTEX CORE AI. I am the automated AI assistant of MI CORTEX X.",
        [action("ABOUT COMPANY","route","#/about"),action("CONTACT SUPPORT","hub","support")],
        ["Company eke nama mokakda?", "CEO kawda?"],
        { topic:"ai-name" }
      );
    }

    if (asks("company name","සමාගම නම","company eke nama","මේකේ නම")) {
      return reply(
        lang === "si" ? "සමාගමේ නම MI CORTEX X INC." : "The company name is MI CORTEX X INC.",
        [action("ABOUT COMPANY","route","#/about")],
        ["Company eka patan gaththe kawadda?", "Company eka koheda?"],
        { topic:"company" }
      );
    }

    const roleMap = [
      ["ceo",["ceo","chief executive","chief executive officer","ප්‍රධාන විධායක"],company.ceo,"Chief Executive Officer (CEO)"],
      ["owner",["owner","අයිතිකරු","හිමිකරු"],company.owner,"Owner"],
      ["chairman",["chairman","සභාපති"],company.chairman,"Chairman"],
      ["founder",["founder","නිර්මාතෘ","ආරම්භකයා"],company.founder,"Founder"]
    ];

    for (const [key,terms,name,title] of roleMap) {
      if (terms.some(term => phraseScore(q,term)>=3)) {
        setContext({ topic:"executive", role:title });
        return reply(
          lang === "si"
            ? `MI CORTEX X INC. සමාගමේ ${title} වන්නේ ${name}.`
            : `The ${title} of MI CORTEX X INC. is ${name}.`,
          [action(`BOOK ${key.toUpperCase()} APPOINTMENT`,"appointment",title),action("VIEW EXECUTIVE BOARD","route","#/about/executive-board")],
          ["Appointment ekak danna one", "Executive Board eka pennanna"],
          { topic:"executive", role:title }
        );
      }
    }

    if (asks("appointment","meeting","හමුවීම","වෙන්කරන්න")) {
      const role = context.role || "";
      return reply(
        lang === "si"
          ? "Executive Board member කෙනෙක් තෝරා appointment form එක සම්පූර්ණ කරන්න."
          : "Choose an Executive Board member and complete the appointment form.",
        appointmentActions(role),
        ["CEO appointment", "Owner appointment", "Founder appointment", "Chairman appointment"],
        { topic:"appointment", role }
      );
    }

    if (product) {
      setContext({ topic:"product", entityId:product.id, entityName:product.name });
      let text = `${product.name}\n• Status: ${product.status}\n• Price: ${product.priceText}\n• Free plan: ${product.freePlan}\n\n${product.description}`;
      if (isPrice) text = `${product.name} price: ${product.priceText}.`;
      return reply(
        text,
        [
          action("VIEW PRODUCT","route",product.route),
          action("REQUEST INFORMATION","hub","products"),
          action("WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I need information about ${product.name}.`)}`)
        ],
        ["Status eka mokakda?", "Free plan ekak thiyenawada?", "Order karanne kohomada?"],
        { topic:"product", entityId:product.id, entityName:product.name }
      );
    }

    if (service) {
      setContext({ topic:"service", entityId:service.id, entityName:service.name });
      let detail = `${service.name}\n• Starting price: ${currency(service.price)}${service.billing ? ` ${service.billing}` : ""}\n• Estimated delivery: ${service.delivery}\n• Support: ${service.support}\n• Main features: ${service.features.join(", ")}\n\nFinal pricing depends on scope, features, integrations, hosting and support.`;
      if (isPrice) detail = `${service.name} starts from ${currency(service.price)}${service.billing ? ` ${service.billing}` : ""}. Final price depends on project scope and requirements.`;
      else if (isDelivery) detail = `${service.name} usually takes ${service.delivery}, depending on scope and requirements.`;
      else if (isFeatures) detail = `${service.name} includes: ${service.features.join(", ")}.`;
      else if (isSupport) detail = `${service.name} includes ${service.support} of support.`;
      return reply(
        detail,
        [
          action("VIEW SERVICE","route",service.route),
          action("REQUEST QUOTE","quote",service.name),
          action("WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I need a quotation for ${service.name}.`)}`),
          action("BOOK CONSULTATION","appointment")
        ],
        ["Mila keeyada?", "Delivery time eka?", "Features monawada?"],
        { topic:"service", entityId:service.id, entityName:service.name }
      );
    }

    // Follow-up questions that omit the service/product name.
    if (context.entityId && (isPrice || isDelivery || isFeatures || isSupport || isOrder)) {
      const entity = [...products, ...services].find(item => item.id === context.entityId);
      if (entity) {
        if (context.topic === "service") {
          const follow = isPrice
            ? `${entity.name} starts from ${currency(entity.price)}${entity.billing ? ` ${entity.billing}` : ""}.`
            : isDelivery
              ? `${entity.name} estimated delivery: ${entity.delivery}.`
              : isFeatures
                ? `${entity.name} main features: ${entity.features.join(", ")}.`
                : isSupport
                  ? `${entity.name} support period: ${entity.support}.`
                  : `You can request a quotation for ${entity.name}.`;
          return reply(follow,[action("REQUEST QUOTE","quote",entity.name),action("VIEW SERVICE","route",entity.route)],[],context);
        }
        return reply(`${entity.name}: ${entity.priceText}`,[action("VIEW PRODUCT","route",entity.route)],[],context);
      }
    }

    if (asks("products","product list","නිෂ්පාදන","product පෙන්වන්න")) {
      return reply(
        products.map(p => `• ${p.name} — ${p.status} — ${p.priceText}`).join("\n"),
        [action("VIEW ALL PRODUCTS","route","#/products"),action("PRODUCT INFORMATION","hub","products")],
        products.map(p => `${p.name} mila keeyada?`),
        { topic:"products" }
      );
    }

    if (asks("services","service list","සේවා","service පෙන්වන්න")) {
      return reply(
        services.map(s => `• ${s.name} — Starting from ${currency(s.price)}${s.billing ? ` ${s.billing}` : ""}`).join("\n"),
        [action("VIEW ALL SERVICES","route","#/services"),action("VIEW PRICING","route","#/pricing"),action("REQUEST QUOTE","quote")],
        ["Website ekak hadanna keeyada?", "Mobile app ekak hadanna keeyada?"],
        { topic:"services" }
      );
    }

    if (asks("contact","whatsapp","telegram","email","number","අමතන්න","සම්බන්ධ")) {
      return reply(
        `MI CORTEX X Contact Information\n• Primary email: ${company.primaryEmail}\n• Support: ${company.supportEmail}\n• Sales: ${company.salesEmail}\n• WhatsApp: ${company.whatsappDisplay}\n• Telegram: ${company.telegram}\n• Website: ${company.website}`,
        contactActions(),
        ["Support email eka mokakda?", "WhatsApp number eka denna"],
        { topic:"contact" }
      );
    }

    if (asks("location","office","address","කොහෙද","ලිපිනය")) {
      return reply(`${company.name} operates online from ${company.city}, ${company.country}. There is no public walk-in office.`,[action("CONTACT PAGE","route","#/contact")],[],{topic:"location"});
    }

    if (asks("hours","open","closed","sunday","වේලාව","ඇරලා","වහලා")) {
      return reply(`Business hours: ${company.hours}`,[action("CONTACT SUPPORT","hub","support")],[],{topic:"hours"});
    }

    if (asks("founded","started","established","පටන් ගත්තේ","කවදාද")) {
      return reply(`MI CORTEX X was founded in ${company.founded}.`,[action("ABOUT COMPANY","route","#/about")],[],{topic:"company"});
    }

    if (asks("mission")) return reply(`Mission: ${company.mission}`,[action("ABOUT COMPANY","route","#/about")],[],{topic:"company"});
    if (asks("vision")) return reply(`Vision: ${company.vision}`,[action("ABOUT COMPANY","route","#/about")],[],{topic:"company"});

    if (asks("payment","advance","refund","ගෙවීම","අත්තිකාරම්")) {
      return reply(
        `Project payment information:\n• Advance: ${company.advance}\n• Remaining payment: Before final delivery\n• Online card payments: Not activated yet\n• Full refund: Before project commencement\n• Completed work and delivered milestones are non-refundable after development begins.`,
        [action("REQUEST QUOTE","quote"),action("CONTACT SALES","url",`mailto:${company.salesEmail}`)],
        [],
        {topic:"payment"}
      );
    }

    if (asks("support","customer service","help","උදව්","සහාය")) {
      return reply(
        `Support is available through Email, WhatsApp, Telegram and the website contact form. Normal response time: ${company.responseTime}.`,
        [action("INFORMATION CENTER","hub","support"),...contactActions()],
        [],
        {topic:"support"}
      );
    }

    if (asks("company","about","what is mi cortex","සමාගම")) {
      return reply(
        `MI CORTEX X is a Sri Lankan artificial intelligence and software technology company founded in ${company.founded}. It develops intelligent digital products and custom technology solutions worldwide.`,
        [action("ABOUT COMPANY","route","#/about"),action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services")],
        ["CEO kawda?", "Company eka koheda?"],
        {topic:"company"}
      );
    }

    if (isPrice) {
      return reply(
        "Exact product or service name එකත් එක්ක අහන්න. උදාහරණයක්: “AI chatbot eke mila keeyada?” හෝ “Website ekak hadanna keeyada?”",
        [action("VIEW PRICING","route","#/pricing"),action("CUSTOM QUOTE","quote")],
        ["AI chatbot eke mila keeyada?", "Website ekak hadanna keeyada?", "Mobile app eke mila keeyada?"]
      );
    }

    return reply(
      lang === "si"
        ? "මට මේ ප්‍රශ්නයට තහවුරු කළ exact company answer එකක් හඳුනාගන්න බැරි වුණා. Spelling හෝ punctuation වැරදි තිබුණත් මම හඳුනාගන්න උත්සාහ කරනවා. Product/service නම, executive title, price, contact, support හෝ appointment topic එක පැහැදිලිව සඳහන් කරන්න."
        : "I could not identify a verified company answer. Please include a product/service name, executive title, price, contact, support or appointment topic.",
      [action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services"),action("SUPPORT","hub","support"),action("APPOINTMENT","appointment")],
      ["CEO kawda", "AI chatbot eke mila keeyada", "WhatsApp number eka denna"]
    );
  }

  const root = document.createElement("div");
  root.id = "mcx-ai-chat-root";
  root.innerHTML = `
    <div class="mcx-ai-overlay" hidden>
      <section class="mcx-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="mcx-ai-title">
        <header class="mcx-ai-header">
          <div class="mcx-ai-brand"><span class="mcx-ai-status-dot"></span><div><strong id="mcx-ai-title">CORTEX CORE AI</strong><span>Smart MI CORTEX X company assistant</span></div></div>
          <div class="mcx-ai-header-actions">
            <button type="button" data-ai-new title="New chat">+</button>
            <button type="button" data-ai-clear title="Clear history">&#128465;</button>
            <button class="mcx-ai-close" type="button" aria-label="Close">&#10005;</button>
          </div>
        </header>
        <div class="mcx-ai-quick-actions">
          <button data-ai-route="#/products">PRODUCTS</button><button data-ai-route="#/services">SERVICES</button>
          <button data-ai-route="#/pricing">PRICING</button><button data-ai-appointment="">APPOINTMENT</button>
          <button data-ai-hub="support">SUPPORT</button>
        </div>
        <div class="mcx-ai-messages" aria-live="polite"></div>
        <div class="mcx-ai-suggestions" hidden></div>
        <form class="mcx-ai-composer">
          <textarea rows="1" maxlength="1800" placeholder="Ask in Sinhala, English or Singlish..." required></textarea>
          <button class="mcx-ai-send" type="submit" aria-label="Send">&#10148;</button>
        </form>
      </section>
    </div>`;
  document.body.appendChild(root);

  const overlay = root.querySelector(".mcx-ai-overlay");
  const dialog = root.querySelector(".mcx-ai-dialog");
  const messages = root.querySelector(".mcx-ai-messages");
  const suggestions = root.querySelector(".mcx-ai-suggestions");
  const form = root.querySelector("form");
  const input = root.querySelector("textarea");
  let history = [];
  let opened = false;
  let lastFocus = null;
  let lastQuestion = "";
  let quoteFlow = null;

  try {
    const stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    if (Array.isArray(stored)) history = stored.slice(-MAX_HISTORY);
  } catch {}

  const saveHistory = () => {
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-MAX_HISTORY))); } catch {}
  };

  const formatTime = t => new Intl.DateTimeFormat(undefined,{hour:"2-digit",minute:"2-digit"}).format(new Date(t));

  function linkify(host,text) {
    const re = /(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|@MICORTEXX|\+94\s?[\d\s]{8,})/g;
    let last=0;
    for (const m of text.matchAll(re)) {
      host.append(document.createTextNode(text.slice(last,m.index)));
      const a=document.createElement("a"),v=m[0];
      a.textContent=v;a.target="_blank";a.rel="noopener noreferrer";
      a.href=v.startsWith("http")?v:v==="@MICORTEXX"?company.telegramUrl:v.includes("@")?`mailto:${v}`:`https://wa.me/${company.whatsappNumber}`;
      host.append(a);last=m.index+v.length;
    }
    host.append(document.createTextNode(text.slice(last)));
  }

  function showSuggestions(items=[]) {
    suggestions.innerHTML="";suggestions.hidden=!items.length;
    items.slice(0,5).forEach(text=>{const b=document.createElement("button");b.type="button";b.textContent=text;b.dataset.suggestion=text;suggestions.append(b);});
  }

  function addMessage(type,payload,persist=true,timestamp=Date.now()) {
    const data=typeof payload==="string"?reply(payload):payload;
    if (data.context) setContext(data.context);
    const row=document.createElement("article");row.className=`mcx-ai-message mcx-ai-${type}`;
    const bubble=document.createElement("div");bubble.className="mcx-ai-bubble";
    const content=document.createElement("div");content.className="mcx-ai-content";linkify(content,data.text||"");bubble.append(content);
    const meta=document.createElement("div");meta.className="mcx-ai-meta";meta.textContent=`${type==="user"?"You":"CORTEX CORE AI"} · ${formatTime(timestamp)}`;bubble.append(meta);
    if(type==="assistant"){
      const tools=document.createElement("div");tools.className="mcx-ai-tools";
      const copy=document.createElement("button");copy.type="button";copy.textContent="COPY";copy.dataset.copy=data.text||"";
      const regen=document.createElement("button");regen.type="button";regen.textContent="REGENERATE";regen.dataset.regenerate="true";
      tools.append(copy,regen);bubble.append(tools);
      if(data.actions?.length){
        const h=document.createElement("div");h.className="mcx-ai-message-actions";
        data.actions.forEach(item=>{const b=document.createElement("button");b.type="button";b.textContent=item.label;b.dataset.action=item.action;b.dataset.value=item.value||"";h.append(b);});
        bubble.append(h);
      }
      showSuggestions(data.suggestions||[]);
    }
    row.append(bubble);messages.append(row);messages.scrollTop=messages.scrollHeight;
    if(persist){history.push({type,payload:data,timestamp});history=history.slice(-MAX_HISTORY);saveHistory();}
  }

  function typing() {
    const row=document.createElement("div");row.className="mcx-ai-message mcx-ai-assistant mcx-ai-typing";
    row.innerHTML='<div class="mcx-ai-bubble"><span></span><span></span><span></span></div>';messages.append(row);messages.scrollTop=messages.scrollHeight;return row;
  }

  function newChat() {
    history=[];quoteFlow=null;context={};saveHistory();sessionStorage.removeItem(CONTEXT_KEY);messages.innerHTML="";showSuggestions([]);
    addMessage("assistant",reply(
      "Hi 👋 I’m CORTEX CORE AI. Spelling mistakes, missing punctuation සහ Singlish තිබුණත් company questions තේරුම් ගන්න මම උත්සාහ කරනවා.",
      [action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services"),action("APPOINTMENT","appointment")],
      ["Oyaga nama mokakda?", "CEO kawda?", "AI chatbot eke mila keeyada?"]
    ));
  }

  function openChat() {
    lastFocus=document.activeElement;overlay.hidden=false;document.body.classList.add("mcx-ai-open");
    if(!opened){opened=true;if(history.length){messages.innerHTML="";history.forEach(i=>addMessage(i.type,i.payload,false,i.timestamp));}else newChat();}
    setTimeout(()=>input.focus(),50);
  }
  function closeChat(){overlay.hidden=true;document.body.classList.remove("mcx-ai-open");lastFocus?.focus?.();}

  function openHub(panel="main",role="") {
    closeChat();const hub=document.getElementById("mcx-contact-hub-root");
    if(!hub){location.hash="#/contact";return;}
    hub.querySelector(".mcx-hub-fab")?.click();
    setTimeout(()=>{
      if(role||panel==="executives"){
        hub.querySelector('[data-open="executives"]')?.click();
        if(role)setTimeout(()=>{const wanted=normalize(role);[...hub.querySelectorAll("[data-executive]")].find(b=>normalize(b.dataset.executive).includes(wanted.replace("chief executive officer ceo","chief executive officer")))?.click();},100);
      } else if(panel!=="main") hub.querySelector(`[data-open="${panel}"]`)?.click();
    },120);
  }

  function startQuote(service="") {
    quoteFlow={step:0,data:{service},questions:[
      ["service",service?null:"What product or service do you need?"],["features","What main features do you need?"],
      ["budget","What is your estimated budget? You may type Not decided."],["deadline","What is your preferred deadline?"],
      ["name","What is your full name?"],["email","What is your email address?"]
    ]};
    addMessage("assistant","I’ll collect quotation details step by step. Do not enter card or payment information.");continueQuote();
  }
  function continueQuote(){
    while(quoteFlow&&quoteFlow.step<quoteFlow.questions.length){const[key,q]=quoteFlow.questions[quoteFlow.step];if(quoteFlow.data[key]){quoteFlow.step++;continue;}addMessage("assistant",q);return;}
    if(!quoteFlow)return;const d=quoteFlow.data;
    const summary=`QUOTATION REQUEST SUMMARY\nService/Product: ${d.service}\nRequired features: ${d.features}\nEstimated budget: ${d.budget}\nPreferred deadline: ${d.deadline}\nFull name: ${d.name}\nEmail: ${d.email}`;
    addMessage("assistant",reply(summary,[action("SEND VIA WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(summary)}`),action("SEND VIA EMAIL","url",`mailto:${company.salesEmail}?subject=${encodeURIComponent("Quotation Request")}&body=${encodeURIComponent(summary)}`)]));quoteFlow=null;
  }
  function acceptQuote(text){
    if(!quoteFlow)return false;const[key]=quoteFlow.questions[quoteFlow.step];
    if(key==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim())){addMessage("assistant","Please enter a valid email address.");return true;}
    quoteFlow.data[key]=text.trim();quoteFlow.step++;continueQuote();return true;
  }

  function execute(type,value){
    if(type==="route"){closeChat();location.hash=value;}
    else if(type==="url")window.open(value,"_blank","noopener,noreferrer");
    else if(type==="appointment")openHub("executives",value);
    else if(type==="hub")openHub(value||"main");
    else if(type==="quote")startQuote(value);
  }

  function process(text){
    lastQuestion=text;addMessage("user",text);if(acceptQuote(text))return;
    const loader=typing();setTimeout(()=>{loader.remove();addMessage("assistant",answer(text));},Math.min(1100,320+text.length*7));
  }

  document.addEventListener("click",event=>{
    const trigger=event.target.closest("button,a,[role='button']");if(!trigger)return;
    if(normalize(trigger.innerText||trigger.textContent).includes("chat with cortex core ai")){event.preventDefault();event.stopPropagation();openChat();}
  },true);

  root.addEventListener("click",event=>{
    const a=event.target.closest("[data-action]");if(a)execute(a.dataset.action,a.dataset.value||"");
    const s=event.target.closest("[data-suggestion]");if(s)process(s.dataset.suggestion);
    const r=event.target.closest("[data-ai-route]");if(r)execute("route",r.dataset.aiRoute);
    const ap=event.target.closest("[data-ai-appointment]");if(ap)execute("appointment",ap.dataset.aiAppointment||"");
    const h=event.target.closest("[data-ai-hub]");if(h)execute("hub",h.dataset.aiHub);
    const c=event.target.closest("[data-copy]");if(c){navigator.clipboard?.writeText(c.dataset.copy||"");c.textContent="COPIED";setTimeout(()=>c.textContent="COPY",1200);}
    if(event.target.closest("[data-regenerate]")&&lastQuestion)process(lastQuestion);
    if(event.target.closest("[data-ai-new]"))newChat();
    if(event.target.closest("[data-ai-clear]")&&confirm("Clear complete AI chat history?"))newChat();
    if(event.target.closest(".mcx-ai-close"))closeChat();
    if(event.target===overlay)closeChat();
  });

  form.addEventListener("submit",event=>{event.preventDefault();const text=input.value.trim();if(!text)return;input.value="";input.style.height="auto";process(text);});
  input.addEventListener("keydown",event=>{if(event.key==="Enter"&&!event.shiftKey){event.preventDefault();form.requestSubmit();}});
  input.addEventListener("input",()=>{input.style.height="auto";input.style.height=`${Math.min(input.scrollHeight,130)}px`;});
  document.addEventListener("keydown",event=>{
    if(overlay.hidden)return;if(event.key==="Escape")closeChat();
    if(event.key==="Tab"){const f=[...dialog.querySelectorAll("button,textarea,a[href],[tabindex]:not([tabindex='-1'])")].filter(e=>!e.disabled&&!e.hidden);if(!f.length)return;const first=f[0],last=f[f.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
  });
})();
