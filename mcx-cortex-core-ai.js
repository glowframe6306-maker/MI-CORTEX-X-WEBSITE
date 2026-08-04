(() => {
  "use strict";

  if (window.__MCX_CORTEX_CORE_AI_V7__) return;
  window.__MCX_CORTEX_CORE_AI_V7__ = true;

  const KEYS = {
    history: "mcx_ai_v7_history",
    settings: "mcx_ai_v7_settings",
    profile: "mcx_ai_v7_profile",
    favorites: "mcx_ai_v7_favorites",
    draft: "mcx_ai_v7_draft",
    context: "mcx_ai_v7_context",
    feedback: "mcx_ai_v7_feedback"
  };

  const MAX_HISTORY = 160;

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
    hours: "Monday to Saturday â€” 24 hours. Sunday â€” Closed.",
    responseTime: "Within 24 hours",
    advance: "30%",
    consultation: "Free consultation up to 30 minutes",
    mission: "To empower businesses through innovative, reliable and intelligent technology solutions.",
    vision: "To become a globally recognized AI and software technology company.",
    registration: "Pending",
    phoneCalls: "Phone calls are not currently available."
  };

  const products = [
    {
      id:"cortex-core-ai", name:"CORTEX CORE AI",
      aliases:["cortex core ai","cortex ai","core ai","ai assistant","company ai"],
      status:"Development", price:45000, billing:"",
      priceText:"Starting from LKR 45,000 for business integration",
      freePlan:"Available when released", route:"#/products/cortex-core-ai",
      description:"A next-generation AI platform for business automation, intelligent customer support, content generation and system integration."
    },
    {
      id:"business-suite", name:"MI Business Management Suite",
      aliases:["business suite","management suite","business management system","crm hrm inventory pos erp"],
      status:"Upcoming", price:80000, billing:"",
      priceText:"Starting from LKR 80,000", freePlan:"Not announced",
      route:"#/products/business-suite",
      description:"A complete business management platform including CRM, HRM, inventory, POS, ERP and analytics."
    }
  ];

  const services = [
    ["ai-development","AI Development",["ai development","ai develop","artificial intelligence"],60000,"","7â€“30 days","30 days",["AI models","Automation","AI integration"],"AI Development"],
    ["ai-chatbot-development","AI Chatbot Development",["ai chatbot","chatbot","chat bot","bot development"],45000,"","5â€“14 days","30 days",["AI integration","Business chatbot","Multilingual support"],"AI Development"],
    ["ai-automation","AI Automation",["ai automation","workflow automation","business automation"],65000,"","7â€“21 days","30 days",["Workflow automation","AI agents","Business automation"],"Automation"],
    ["website-development","Website Development",["website","web site","site development"],15000,"","3â€“14 days","30 days",["Responsive design","SEO-ready structure","Admin options"],"Website Development"],
    ["web-application-development","Web Application Development",["web application","web app","webapp"],50000,"","7â€“30 days","30 days",["Secure login","Dashboard","Database"],"Web Application Development"],
    ["mobile-app-development","Mobile App Development",["mobile app","android app","ios app","application development"],85000,"","14â€“45 days","30 days",["Android","iOS","Cross-platform development"],"Mobile App Development"],
    ["desktop-software-development","Desktop Software Development",["desktop software","windows software","linux software"],70000,"","10â€“30 days","30 days",["Windows","Linux","Database support"],"Desktop Software Development"],
    ["enterprise-software","Enterprise Software",["enterprise software","enterprise system","erp crm hrm pos"],250000,"","30â€“90 days","90 days",["ERP","CRM","HRM","POS"],"Enterprise Software Development"],
    ["api-development","API Development",["api development","rest api","graphql api"],30000,"","3â€“10 days","30 days",["REST","GraphQL","Secure APIs"],"API Development"],
    ["api-integration","API Integration",["api integration","third party integration","payment integration"],20000,"","2â€“7 days","30 days",["Payment APIs","AI APIs","Third-party APIs"],"API Integration"],
    ["cloud-solutions","Cloud Solutions",["cloud","aws","azure","google cloud"],30000,"","2â€“10 days","30 days",["AWS","Microsoft Azure","Google Cloud"],"Cloud and Hosting"],
    ["ui-ux-design","UI/UX Design",["ui ux","ui design","ux design","interface design"],15000,"","3â€“10 days","14 days",["Modern UI","Responsive design","Prototype"],"UI/UX Design"],
    ["software-maintenance","Software Maintenance",["maintenance","bug fixes","software support"],7500,"per month","Ongoing","Monthly",["Bug fixes","Updates","Monitoring"],"Maintenance"],
    ["technical-consulting","Technical Consulting",["technical consulting","consulting","consultation","technical advice"],5000,"","Same day when available","Consultation only",["Technology planning","Architecture advice"],"Consultation"],
    ["custom-software-development","Custom Software Development",["custom software","custom system"],100000,"","14â€“90 days","60 days",["Fully customized solutions"],"Custom Software Development"]
  ].map(([id,name,aliases,price,billing,delivery,support,features,category]) => ({
    id,name,aliases,price,billing,delivery,support,features,category,route:`#/services/${id}`
  }));

  const typoMap = [
    [/\boyage\b/g,"à¶”à¶ºà·à¶œà·š"],[/\bobe\b/g,"à¶”à¶¶à¶œà·š"],[/\bnama\b/g,"à¶±à¶¸"],
    [/\bmokakda\b/g,"à¶¸à·œà¶šà¶šà·Šà¶¯"],[/\bmokadda\b/g,"à¶¸à·œà¶šà¶šà·Šà¶¯"],[/\bmokada\b/g,"à¶¸à·œà¶šà¶šà·Šà¶¯"],
    [/\bkawda\b/g,"à¶šà·€à·”à¶¯"],[/\bkauda\b/g,"à¶šà·€à·”à¶¯"],[/\bkawuda\b/g,"à¶šà·€à·”à¶¯"],
    [/\bkeeyada\b/g,"à¶šà·“à¶ºà¶¯"],[/\bkiyada\b/g,"à¶šà·“à¶ºà¶¯"],[/\bkiyakda\b/g,"à¶šà·“à¶ºà¶¯"],
    [/\bkoheda\b/g,"à¶šà·œà·„à·™à¶¯"],[/\bkohomada\b/g,"à¶šà·œà·„à·œà¶¸à¶¯"],[/\bkawadda\b/g,"à¶šà·€à¶¯à·à¶¯"],
    [/\bmila\b/g,"à¶¸à·’à¶½"],[/\bgana\b/g,"à¶œà·à¶±"],[/\bdenna\b/g,"à¶¯à·™à¶±à·Šà¶±"],
    [/\bpennanna\b/g,"à¶´à·™à¶±à·Šà·€à¶±à·Šà¶±"],[/\bpenwanna\b/g,"à¶´à·™à¶±à·Šà·€à¶±à·Šà¶±"],
    [/\bone\b/g,"à¶•à¶±"],[/\bhadanna\b/g,"à·„à¶¯à¶±à·Šà¶±"],[/\bdanna\b/g,"à¶¯à·à¶±à·Šà¶±"],[/\bdaanna\b/g,"à¶¯à·à¶±à·Šà¶±"],
    [/\bpatan gaththe\b/g,"à¶´à¶§à¶±à·Š à¶œà¶­à·Šà¶­à·š"],[/\bpatan gatte\b/g,"à¶´à¶§à¶±à·Š à¶œà¶­à·Šà¶­à·š"],
    [/\bcompany eka\b/g,"à·ƒà¶¸à·à¶œà¶¸"],[/\bai eka\b/g,"ai"],[/\bchat bot\b/g,"chatbot"],
    [/\bwhatsap+\b/g,"whatsapp"],[/\bwatsapp\b/g,"whatsapp"],[/\btelegarm\b/g,"telegram"],
    [/\bservise\b/g,"service"],[/\bserivce\b/g,"service"],[/\bsevice\b/g,"service"],
    [/\bprodact\b/g,"product"],[/\bproduc\b/g,"product"],[/\bprduct\b/g,"product"],
    [/\bappoinment\b/g,"appointment"],[/\bapointment\b/g,"appointment"],
    [/\bchairmen\b/g,"chairman"],[/\bcheif\b/g,"chief"],[/\bexcutive\b/g,"executive"],
    [/\bexcecutive\b/g,"executive"],[/\bmail eka\b/g,"email"],[/\bnumber eka\b/g,"number"],
    [/\bprice eka\b/g,"price"],[/\bwisthara\b/g,"information"],[/\bvisthara\b/g,"information"]
  ];

  const safeJSON = (key, fallback) => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "null");
      return value ?? fallback;
    } catch { return fallback; }
  };

  let history = safeJSON(KEYS.history, []);
  let settings = safeJSON(KEYS.settings, { theme:"dark", fontScale:1, language:"auto", sounds:false });
  let profile = safeJSON(KEYS.profile, { name:"", company:"" });
  let favorites = safeJSON(KEYS.favorites, []);
  let context = safeJSON(KEYS.context, {});
  let feedback = safeJSON(KEYS.feedback, []);
  let quoteFlow = null;
  let supportFlow = null;
  let requirementFlow = null;
  let lastQuestion = "";
  let opened = false;
  let lastFocus = null;

  const save = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  };

  const normalize = value => String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[â€™'".,!?;:()[\]{}<>/_\\|@#$%^&*+=~`-]/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  function interpret(value) {
    let text = normalize(value);
    for (const [pattern, replacement] of typoMap) text = text.replace(pattern, replacement);
    return text.replace(/\s+/g, " ").trim();
  }

  function levenshtein(a,b) {
    a=normalize(a);b=normalize(b);
    const d=Array.from({length:b.length+1},()=>Array(a.length+1).fill(0));
    for(let i=0;i<=b.length;i++)d[i][0]=i;
    for(let j=0;j<=a.length;j++)d[0][j]=j;
    for(let i=1;i<=b.length;i++)for(let j=1;j<=a.length;j++)
      d[i][j]=b[i-1]===a[j-1]?d[i-1][j-1]:Math.min(d[i-1][j-1]+1,d[i][j-1]+1,d[i-1][j]+1);
    return d[b.length][a.length];
  }

  function wordMatches(a,b) {
    if(!a||!b)return false;
    if(a===b||a.includes(b)||b.includes(a))return true;
    const limit=b.length>=8?2:b.length>=5?1:0;
    return limit>0&&levenshtein(a,b)<=limit;
  }

  function phraseScore(question,phrase) {
    const q=interpret(question),p=interpret(phrase);
    if(q.includes(p))return 100+p.length;
    const qw=q.split(" "),pw=p.split(" ").filter(Boolean);
    return pw.reduce((score,target)=>score+(qw.some(w=>wordMatches(w,target))?(target.length>4?3:1):0),0);
  }

  function asks(q,...terms){ return terms.some(term=>phraseScore(q,term)>=3); }

  function detectLanguage(raw) {
    if (/[\u0D80-\u0DFF]/.test(raw)) return "si";
    const n=normalize(raw);
    if(["mokakda","kawda","kauda","keeyada","kiyada","koheda","kohomada","denna","one","hadanna","oyage","mila"].some(x=>n.includes(x)))return"si";
    if(/[\u0B80-\u0BFF]/.test(raw))return"ta";
    return"en";
  }

  function currency(value){ return `LKR ${Number(value).toLocaleString("en-US")}`; }

  function findEntity(raw,list) {
    let best=null,score=0;
    for(const item of list){
      for(const alias of [item.name,...(item.aliases||[])]){
        const s=phraseScore(raw,alias);
        if(s>score){score=s;best=item;}
      }
    }
    return score>=3?best:null;
  }

  function action(label,type,value=""){return{label,action:type,value};}
  function reply(text,actions=[],suggestions=[],extra={}){return{text,actions,suggestions,...extra};}

  function contactActions(){
    return[
      action("WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello ðŸ‘‹")}`),
      action("TELEGRAM","url",`${company.telegramUrl}?text=${encodeURIComponent("Hello ðŸ‘‹")}`),
      action("EMAIL","url",`mailto:${company.supportEmail}?subject=${encodeURIComponent("MI CORTEX X Support Request")}`)
    ];
  }

  function appointmentActions(role=""){
    return[
      action(role?`BOOK ${role.toUpperCase()} APPOINTMENT`:"SELECT EXECUTIVE & BOOK APPOINTMENT","appointment",role),
      action("CONTACT INFORMATION CENTER","hub","support")
    ];
  }


  /* MCX_V9_SMART_INTENT_ENGINE_START */

  const v9Intents = {
    ai_name: ["your name","who are you","assistant name","oyage nama","obe nama","ai eke nama","à¶”à¶ºà·à¶œà·š à¶±à¶¸","à¶”à¶¶ à¶šà·€à·”à¶¯"],
    company_name: ["company name","company eke nama","meke nama","à·ƒà¶¸à·à¶œà¶¸à·š à¶±à¶¸"],
    ceo: ["ceo","chief executive officer","chief executive","company boss","company eka lead karanne","à¶´à·Šâ€à¶»à¶°à·à¶± à·€à·’à¶°à·à¶ºà¶š"],
    owner: ["owner","company owner","who owns","à¶…à¶ºà·’à¶­à·’à¶šà¶»à·”","à·„à·’à¶¸à·’à¶šà¶»à·”"],
    chairman: ["chairman","chair person","à·ƒà¶·à·à¶´à¶­à·’"],
    founder: ["founder","who started company","created company","à¶±à·’à¶»à·Šà¶¸à·à¶­à·˜","à¶†à¶»à¶¸à·Šà¶·à¶šà¶ºà·"],
    about: ["about company","company eka gana","what does company do","oya sell karanne monawada","mi cortex x mokakda","à·ƒà¶¸à·à¶œà¶¸ à¶œà·à¶±"],
    founded: ["when founded","when started","patan gaththe kawadda","à¶´à¶§à¶±à·Š à¶œà¶­à·Šà¶­à·š à¶šà·€à¶¯à·à¶¯"],
    location: ["where located","office location","company eka koheda","address","location","à¶šà·œà·„à·™à¶¯","à¶½à·’à¶´à·’à¶±à¶º"],
    contact: ["contact","whatsapp","telegram","email","phone number","number eka","message karanna","à·ƒà¶¸à·Šà¶¶à¶±à·Šà¶°","à¶…à¶¸à¶­à¶±à·Šà¶±"],
    hours: ["business hours","opening hours","sunday open","open da","closed da","à·€à·à¶© à¶šà¶»à¶± à·€à·™à¶½à·à·€","à¶‡à¶»à¶½à·à¶¯","à·€à·„à¶½à·à¶¯"],
    appointment: ["appointment","book meeting","meet ceo","meet owner","appointment danna","meeting ekak","à·„à¶¸à·”à·€à·“à¶¸","à·€à·™à¶±à·Šà¶šà¶»à¶±à·Šà¶±"],
    products: ["products","product list","what products","product pennanna","products monawada","à¶±à·’à·‚à·Šà¶´à·à¶¯à¶±"],
    services: ["services","service list","what services","services monawada","oya karanne monawada","à·ƒà·šà·€à·"],
    price: ["price","cost","fee","how much","mila","keeyada","kiyada","ganan","à¶¸à·’à¶½","à¶šà·“à¶ºà¶¯","à¶œà·à¶«"],
    quote: ["quote","quotation","estimate","quotation ekak","à¶¸à·’à¶½ à¶œà¶«à¶±à·Š"],
    recommend: ["recommend","suggest","best for me","suitable","mage business ekata","mata monawada honda","à·ƒà·”à¶¯à·”à·ƒà·”"],
    support: ["support","customer service","help","problem","issue","bug","udaw","sahaya","à¶‹à¶¯à·€à·Š","à·ƒà·„à·à¶º"],
    payment: ["payment","advance","refund","card payment","à¶œà·™à·€à·“à¶¸","à¶…à¶­à·Šà¶­à·’à¶šà·à¶»à¶¸à·Š"],
    website: ["website","web site","business website","web ekak","website ekak","à·€à·™à¶¶à·Š à¶…à¶©à·€à·’à¶º"],
    web_app: ["web app","web application","dashboard system","online system"],
    mobile_app: ["mobile app","android app","ios app","phone app","app ekak"],
    chatbot: ["ai chatbot","chatbot","chat bot","customer service bot","bot ekak"],
    automation: ["ai automation","workflow automation","manual work automate","auto system"],
    custom_software: ["custom software","software ekak","custom system","business software"]
  };

  function v9Canon(value) {
    let text = normalize(value)
      .replace(/\bcheif\b/g,"chief")
      .replace(/\bexcutive\b/g,"executive")
      .replace(/\bexcecutive\b/g,"executive")
      .replace(/\bappoinment\b/g,"appointment")
      .replace(/\bapointment\b/g,"appointment")
      .replace(/\bchairmen\b/g,"chairman")
      .replace(/\bwhatsap+\b/g,"whatsapp")
      .replace(/\bwatsapp\b/g,"whatsapp")
      .replace(/\btelegarm\b/g,"telegram")
      .replace(/\bservise\b/g,"service")
      .replace(/\bserivce\b/g,"service")
      .replace(/\bprodact\b/g,"product")
      .replace(/\bprduct\b/g,"product")
      .replace(/\bchat bot\b/g,"chatbot");

    const map = {
      kawda:"who", kauda:"who", kawuda:"who",
      mokakda:"what", mokadda:"what", mokada:"what",
      keeyada:"price", kiyada:"price", kiyakda:"price",
      koheda:"where", kohomada:"how", kawadda:"when",
      denna:"give", pennanna:"show", penwanna:"show",
      one:"need", oni:"need", hadanna:"build", danna:"book",
      daanna:"book", mila:"price", gana:"about",
      oyage:"your", obe:"your", mata:"need", mage:"my"
    };

    Object.entries(map).forEach(([from,to]) => {
      text = text.replace(new RegExp(`\\b${from}\\b`,"g"),to);
    });

    return text.replace(/\s+/g," ").trim();
  }

  function v9Similarity(a,b) {
    a = v9Canon(a);
    b = v9Canon(b);
    if (!a || !b) return 0;
    if (a === b) return 1;
    if (a.includes(b)) return Math.min(1, 0.84 + b.length / 160);

    const aw = a.split(" ").filter(Boolean);
    const bw = b.split(" ").filter(Boolean);
    let score = 0;

    for (const target of bw) {
      let best = 0;
      for (const input of aw) {
        if (input === target) best = Math.max(best,1);
        else if (input.includes(target) || target.includes(input)) best = Math.max(best,.86);
        else {
          const distance = levenshtein(input,target);
          const longest = Math.max(input.length,target.length);
          if (longest >= 5) best = Math.max(best,1 - distance / longest);
        }
      }
      score += Math.max(0,best);
    }

    return bw.length ? score / bw.length : 0;
  }

  function v9Classify(raw) {
    const results = Object.entries(v9Intents).map(([intent,examples]) => ({
      intent,
      score: Math.max(...examples.map(example => v9Similarity(raw,example)))
    })).sort((a,b) => b.score - a.score);

    const first = results[0] || {intent:"unknown",score:0};
    const second = results[1] || {intent:"unknown",score:0};

    return {
      intent:first.intent,
      confidence:first.score,
      second:second.intent,
      margin:first.score-second.score,
      ambiguous:first.score < .47 || (first.score < .74 && first.score-second.score < .08)
    };
  }

  function v9Role(raw) {
    const q = v9Canon(raw);
    if (/\bceo\b/.test(q) || v9Similarity(q,"chief executive officer") > .68) return "Chief Executive Officer (CEO)";
    if (v9Similarity(q,"owner") > .72) return "Owner";
    if (v9Similarity(q,"chairman") > .72) return "Chairman";
    if (v9Similarity(q,"founder") > .72) return "Founder";
    return "";
  }

  function v9Clarify(classification) {
    const options = {
      price:["PRODUCT PRICE","SERVICE PRICE","CUSTOM QUOTATION"],
      contact:["WHATSAPP","TELEGRAM","EMAIL"],
      support:["TECHNICAL SUPPORT","BILLING QUESTION","FEATURE REQUEST"],
      recommend:["WEBSITE","MOBILE APP","AI CHATBOT","CUSTOM SOFTWARE"],
      appointment:["OWNER","CHAIRMAN","CEO","FOUNDER"]
    }[classification.intent] || ["PRODUCTS","SERVICES","PRICING","SUPPORT"];

    return reply(
      "I want to make sure I understood correctly. Please choose the option that best matches your request.",
      [],
      options
    );
  }

  function v9Answer(raw) {
    const result = v9Classify(raw);
    const lang = detectLanguage(raw);
    const role = v9Role(raw);

    if (result.ambiguous) return v9Clarify(result);

    switch(result.intent) {
      case "ai_name":
        return reply(lang==="si"
          ? "à¶¸à¶œà·š à¶±à¶¸ CORTEX CORE AI. à¶¸à¶¸ MI CORTEX X à·ƒà¶¸à·à¶œà¶¸à·š automated AI assistant à¶‘à¶šà¶ºà·’."
          : "My name is CORTEX CORE AI. I am the automated AI assistant of MI CORTEX X.",
          [action("ABOUT COMPANY","route","#/about"),action("SUPPORT","hub","support")]);

      case "company_name":
        return reply(lang==="si" ? "à·ƒà¶¸à·à¶œà¶¸à·š à¶±à¶¸ MI CORTEX X INC." : "The company name is MI CORTEX X INC.",
          [action("ABOUT COMPANY","route","#/about")]);

      case "ceo":
        return reply(`The Chief Executive Officer (CEO) of MI CORTEX X INC. is ${company.ceo}.`,
          [action("BOOK CEO APPOINTMENT","appointment","Chief Executive Officer (CEO)"),action("EXECUTIVE BOARD","route","#/about/executive-board")]);

      case "owner":
        return reply(`The Owner of MI CORTEX X INC. is ${company.owner}.`,
          [action("BOOK OWNER APPOINTMENT","appointment","Owner"),action("EXECUTIVE BOARD","route","#/about/executive-board")]);

      case "chairman":
        return reply(`The Chairman of MI CORTEX X INC. is ${company.chairman}.`,
          [action("BOOK CHAIRMAN APPOINTMENT","appointment","Chairman"),action("EXECUTIVE BOARD","route","#/about/executive-board")]);

      case "founder":
        return reply(`The Founder of MI CORTEX X INC. is ${company.founder}. The company was founded in ${company.founded}.`,
          [action("BOOK FOUNDER APPOINTMENT","appointment","Founder"),action("EXECUTIVE BOARD","route","#/about/executive-board")]);

      case "about":
        return reply(`MI CORTEX X is a Sri Lankan artificial intelligence and software technology company founded in ${company.founded}. It develops intelligent digital products and custom technology solutions worldwide.`,
          [action("ABOUT COMPANY","route","#/about"),action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services")]);

      case "founded":
        return reply(`MI CORTEX X was founded in ${company.founded}.`,[action("ABOUT COMPANY","route","#/about")]);

      case "location":
        return reply(`MI CORTEX X operates online from ${company.city}, ${company.country}. There is no public walk-in office.`,
          [action("CONTACT PAGE","route","#/contact")]);

      case "contact":
        return reply(`MI CORTEX X Contact Information\nâ€¢ Primary email: ${company.primaryEmail}\nâ€¢ Support: ${company.supportEmail}\nâ€¢ Sales: ${company.salesEmail}\nâ€¢ WhatsApp: ${company.whatsappDisplay}\nâ€¢ Telegram: ${company.telegram}\nâ€¢ Website: ${company.website}`,
          contactActions());

      case "hours":
        return reply(`Business hours: ${company.hours}`,[action("CONTACT SUPPORT","hub","support")]);

      case "appointment":
        return reply(role
          ? `You can prepare an appointment request for the ${role}.`
          : "Choose an Executive Board member and complete the appointment form.",
          appointmentActions(role));

      case "products":
        return reply(products.map(p=>`â€¢ ${p.name} â€” ${p.status} â€” ${p.priceText}`).join("\n"),
          [action("VIEW PRODUCTS","route","#/products"),action("PRODUCT INFORMATION","hub","products")]);

      case "services":
        return reply(services.map(s=>`â€¢ ${s.name} â€” Starting from ${currency(s.price)}${s.billing?` ${s.billing}`:""}`).join("\n"),
          [action("VIEW SERVICES","route","#/services"),action("PRICING","route","#/pricing"),action("GET RECOMMENDATION","recommend")]);

      case "quote":
        return reply("I can collect your requirements step by step and prepare a quotation-request summary.",
          [action("START QUOTATION","quote"),action("PRICING","route","#/pricing")]);

      case "recommend":
        return reply("I can recommend a suitable service after learning your goal, preferred platform, budget, and deadline.",
          [action("START RECOMMENDATION","recommend")]);

      case "support":
        return reply(`Support is available through Email, WhatsApp, Telegram, and the website contact form. Normal response time: ${company.responseTime}.`,
          [action("INFORMATION CENTER","hub","support"),...contactActions()]);

      case "payment":
        return reply(`Project payment information:\nâ€¢ Advance: ${company.advance}\nâ€¢ Remaining payment: Before final delivery\nâ€¢ Online card payments: Not activated yet\nâ€¢ Full refund: Before project commencement\nâ€¢ Completed work and delivered milestones are non-refundable after development begins.`,
          [action("REQUEST QUOTE","quote"),action("CONTACT SALES","url",`mailto:${company.salesEmail}`)]);

      case "website":
        return reply("Website Development starts from LKR 15,000. Estimated delivery is usually 3â€“14 days, with 30 days of support. Final price depends on pages, design, features, and integrations.",
          [action("VIEW WEBSITE DEVELOPMENT","route","#/services/website-development"),action("GET QUOTE","quote","Website Development"),action("BOOK CONSULTATION","appointment")]);

      case "web_app":
        return reply("Web Application Development starts from LKR 50,000. It can include secure login, dashboards, databases, and custom workflows.",
          [action("VIEW WEB APPLICATION","route","#/services/web-application-development"),action("GET QUOTE","quote","Web Application Development")]);

      case "mobile_app":
        return reply("Mobile App Development starts from LKR 85,000. Estimated delivery is normally 14â€“45 days, depending on platforms and features.",
          [action("VIEW MOBILE APP","route","#/services/mobile-app-development"),action("GET QUOTE","quote","Mobile App Development")]);

      case "chatbot":
        return reply("AI Chatbot Development starts from LKR 45,000. Estimated delivery is usually 5â€“14 days, with 30 days of support.",
          [action("VIEW AI CHATBOT","route","#/services/ai-chatbot-development"),action("GET QUOTE","quote","AI Chatbot Development"),action("BOOK CONSULTATION","appointment")]);

      case "automation":
        return reply("AI Automation starts from LKR 65,000. It can reduce repetitive manual work and connect business workflows.",
          [action("VIEW AI AUTOMATION","route","#/services/ai-automation"),action("GET QUOTE","quote","AI Automation")]);

      case "custom_software":
        return reply("Custom Software Development starts from LKR 100,000. Final cost depends on users, modules, integrations, security, and platforms.",
          [action("VIEW CUSTOM SOFTWARE","route","#/services/custom-software-development"),action("GET QUOTE","quote","Custom Software Development")]);

      case "price":
        return reply("Please specify the exact product or service so I can provide the correct starting price.",
          [action("VIEW PRICING","route","#/pricing"),action("CUSTOM QUOTE","quote")],
          ["AI chatbot eke mila keeyada?","Website ekak hadanna keeyada?","Mobile app eke mila keeyada?"]);

      default:
        return null;
    }
  }

  /* MCX_V9_SMART_INTENT_ENGINE_END */


  function answer(raw) {
    const smartAnswer = v9Answer(raw);

    if (smartAnswer) {
      return smartAnswer;
    }

    const q=interpret(raw),lang=detectLanguage(raw);
    const product=findEntity(raw,products),service=findEntity(raw,services);
    const isPrice=asks(q,"price","cost","à¶¸à·’à¶½","à¶šà·“à¶ºà¶¯","quotation");
    const isDelivery=asks(q,"delivery","days","time","à¶šà·œà¶ à·Šà¶ à¶» à¶šà¶½à·Š","à¶¯à·€à·ƒà·Š");
    const isFeatures=asks(q,"features","include","included","à¶¸à·œà¶±à·€à¶¯ à¶­à·’à¶ºà·™à¶±à·Šà¶±à·š");
    const isSupport=asks(q,"support","warranty","after delivery","à·ƒà·„à·à¶º");
    const isOrder=asks(q,"order","buy","request quote","quotation","à¶œà¶±à·Šà¶± à¶•à¶±","à·„à¶¯à¶±à·Šà¶± à¶•à¶±");

    if(/^(hi|hello|hey|hii+|à·„à·à¶ºà·’|à·„à·™à¶½à·|à¶†à¶ºà·”à¶¶à·à·€à¶±à·Š|ayubowan|vanakkam)\b/.test(q)){
      const greeting=profile.name?`Hi ${profile.name} ðŸ‘‹`:"Hi ðŸ‘‹";
      return reply(
        `${greeting} Iâ€™m CORTEX CORE AI. Ask in Sinhala, English or Singlish about company information, products, services, prices, support, quotations or appointments.`,
        [action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services"),action("GET RECOMMENDATION","recommend"),action("APPOINTMENT","appointment")],
        ["Oyaga nama mokakda?","CEO kawda?","Website ekak hadanna keeyada?"]
      );
    }

    if(asks(q,"your name","who are you","à¶”à¶ºà·à¶œà·š à¶±à¶¸","ai à¶±à¶¸","assistant à¶±à¶¸")||q==="à¶±à¶¸ à¶¸à·œà¶šà¶šà·Šà¶¯"){
      return reply(lang==="si"?"à¶¸à¶œà·š à¶±à¶¸ CORTEX CORE AI. à¶¸à¶¸ MI CORTEX X à·ƒà¶¸à·à¶œà¶¸à·š automated AI assistant à¶‘à¶šà¶ºà·’.":"My name is CORTEX CORE AI. I am the automated AI assistant of MI CORTEX X.",
        [action("ABOUT COMPANY","route","#/about"),action("SUPPORT","hub","support")]);
    }

    if(asks(q,"remember my name","my name is","à¶¸à¶œà·š à¶±à¶¸")){
      const match=raw.match(/(?:my name is|à¶¸à¶œà·š à¶±à¶¸|mage nama)\s+(.+)/i);
      if(match){
        profile.name=match[1].trim().slice(0,60);save(KEYS.profile,profile);
        return reply(`Nice to meet you, ${profile.name}. Iâ€™ll use your name in this browser.`,[action("FORGET MY PROFILE","forget-profile")]);
      }
    }

    if(asks(q,"company name","à·ƒà¶¸à·à¶œà¶¸ à¶±à¶¸","company eke nama","à¶¸à·šà¶šà·š à¶±à¶¸"))
      return reply(lang==="si"?"à·ƒà¶¸à·à¶œà¶¸à·š à¶±à¶¸ MI CORTEX X INC.":"The company name is MI CORTEX X INC.",[action("ABOUT COMPANY","route","#/about")]);

    const roles=[
      ["CEO",["ceo","chief executive","chief executive officer"],company.ceo,"Chief Executive Officer (CEO)"],
      ["OWNER",["owner","à¶…à¶ºà·’à¶­à·’à¶šà¶»à·”","à·„à·’à¶¸à·’à¶šà¶»à·”"],company.owner,"Owner"],
      ["CHAIRMAN",["chairman","à·ƒà¶·à·à¶´à¶­à·’"],company.chairman,"Chairman"],
      ["FOUNDER",["founder","à¶±à·’à¶»à·Šà¶¸à·à¶­à·˜","à¶†à¶»à¶¸à·Šà¶·à¶šà¶ºà·"],company.founder,"Founder"]
    ];
    for(const[key,terms,name,title]of roles){
      if(terms.some(t=>phraseScore(q,t)>=3)){
        context={topic:"executive",role:title};save(KEYS.context,context);
        return reply(`The ${title} of MI CORTEX X INC. is ${name}.`,
          [action(`BOOK ${key} APPOINTMENT`,"appointment",title),action("EXECUTIVE BOARD","route","#/about/executive-board")]);
      }
    }

    if(asks(q,"appointment","meeting","à·„à¶¸à·”à·€à·“à¶¸","à·€à·™à¶±à·Šà¶šà¶»à¶±à·Šà¶±"))
      return reply("Choose an Executive Board member and complete the appointment form.",appointmentActions(context.role||""),
        ["CEO appointment","Owner appointment","Founder appointment","Chairman appointment"]);

    if(product){
      context={topic:"product",entityId:product.id,entityName:product.name};save(KEYS.context,context);
      return reply(
        `${product.name}\nâ€¢ Status: ${product.status}\nâ€¢ Price: ${product.priceText}\nâ€¢ Free plan: ${product.freePlan}\n\n${product.description}`,
        [action("VIEW PRODUCT","route",product.route),action("REQUEST DEMO","demo",product.name),action("REQUEST INFORMATION","hub","products"),action("WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I need information about ${product.name}.`)}`)],
        ["Status eka mokakda?","Free plan ekak thiyenawada?","Demo ekak one"]
      );
    }

    if(service){
      context={topic:"service",entityId:service.id,entityName:service.name};save(KEYS.context,context);
      let text=`${service.name}\nâ€¢ Category: ${service.category}\nâ€¢ Starting price: ${currency(service.price)}${service.billing?` ${service.billing}`:""}\nâ€¢ Estimated delivery: ${service.delivery}\nâ€¢ Support: ${service.support}\nâ€¢ Main features: ${service.features.join(", ")}\n\nFinal pricing depends on scope, features, integrations, hosting and support.`;
      if(isPrice)text=`${service.name} starts from ${currency(service.price)}${service.billing?` ${service.billing}`:""}. Final price depends on requirements.`;
      else if(isDelivery)text=`${service.name} estimated delivery: ${service.delivery}.`;
      else if(isFeatures)text=`${service.name} main features: ${service.features.join(", ")}.`;
      else if(isSupport)text=`${service.name} support period: ${service.support}.`;
      return reply(text,[
        action("VIEW SERVICE","route",service.route),action("INSTANT QUOTE","quote",service.name),
        action("COMPARE","compare",service.id),action("WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(`Hello, I need a quotation for ${service.name}.`)}`),
        action("BOOK CONSULTATION","appointment")
      ],["Mila keeyada?","Delivery time eka?","Features monawada?"]);
    }

    if(context.entityId&&(isPrice||isDelivery||isFeatures||isSupport||isOrder)){
      const entity=[...products,...services].find(x=>x.id===context.entityId);
      if(entity){
        if(context.topic==="service"){
          const text=isPrice?`${entity.name} starts from ${currency(entity.price)}${entity.billing?` ${entity.billing}`:""}.`
            :isDelivery?`${entity.name} estimated delivery: ${entity.delivery}.`
            :isFeatures?`${entity.name} features: ${entity.features.join(", ")}.`
            :isSupport?`${entity.name} support: ${entity.support}.`
            :`You can request a quotation for ${entity.name}.`;
          return reply(text,[action("INSTANT QUOTE","quote",entity.name),action("VIEW SERVICE","route",entity.route)]);
        }
        return reply(`${entity.name}: ${entity.priceText}`,[action("VIEW PRODUCT","route",entity.route)]);
      }
    }

    if(asks(q,"recommend","best for me","suitable","suggest","à¶¸à¶§ à·„à·œà¶³","à·ƒà·”à¶¯à·”à·ƒà·”"))
      return reply("I can recommend a suitable service after asking a few short questions.",[action("START RECOMMENDATION","recommend")]);

    if(asks(q,"compare","difference","versus"," vs ","à·€à·™à¶±à·ƒ"))
      return reply("Select two services to compare price, delivery, support and features.",[action("START COMPARISON","compare")]);

    if(asks(q,"quote","quotation","estimate","à¶¸à·’à¶½ à¶œà¶«à¶±à·Š"))
      return reply("I can prepare a quotation-request summary step by step.",[action("START QUOTATION","quote")]);

    if(asks(q,"support ticket","ticket","report bug","bug report","feature request"))
      return reply("I can prepare a support-ticket request. A real ticket number is not created until the request is sent to the support team.",[
        action("CREATE SUPPORT REQUEST","support-flow"),action("EMAIL SUPPORT","url",`mailto:${company.supportEmail}`)
      ]);

    if(asks(q,"order tracking","track order","project tracking","track project"))
      return reply("Live order or project tracking requires a connected backend. You can contact support with your reference number for a verified status update.",[
        action("CONTACT SUPPORT","hub","support"),action("WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent("Hello, I need a verified project status update. My reference number is: ")}`)
      ]);

    if(asks(q,"careers","jobs","vacancy","internship"))
      return reply("Official vacancies or internships are not currently listed. You may send a professional inquiry by email.",[
        action("CAREER INQUIRY","url",`mailto:${company.primaryEmail}?subject=${encodeURIComponent("Career or Internship Inquiry")}`)
      ]);

    if(asks(q,"partnership","partner","investor","media","press"))
      return reply("Partnership, investor and media inquiries can be sent to the primary company email. No unverified partnership or investment claim is displayed.",[
        action("SEND BUSINESS INQUIRY","url",`mailto:${company.primaryEmail}?subject=${encodeURIComponent("Business Partnership Inquiry")}`)
      ]);

    if(asks(q,"privacy","privacy policy"))
      return reply("The Privacy Policy is available on the website. Use the legal page for the full current text.",[action("VIEW PRIVACY POLICY","route","#/privacy")]);

    if(asks(q,"terms","terms and conditions"))
      return reply("Terms and Conditions are available on the website. Use the legal page for the full current text.",[action("VIEW TERMS","route","#/terms")]);

    if(asks(q,"products","product list","à¶±à·’à·‚à·Šà¶´à·à¶¯à¶±"))
      return reply(products.map(p=>`â€¢ ${p.name} â€” ${p.status} â€” ${p.priceText}`).join("\n"),
        [action("VIEW PRODUCTS","route","#/products"),action("PRODUCT INFORMATION","hub","products")]);

    if(asks(q,"services","service list","à·ƒà·šà·€à·"))
      return reply(services.map(s=>`â€¢ ${s.name} â€” Starting from ${currency(s.price)}${s.billing?` ${s.billing}`:""}`).join("\n"),
        [action("VIEW SERVICES","route","#/services"),action("PRICING","route","#/pricing"),action("GET RECOMMENDATION","recommend")]);

    if(asks(q,"contact","whatsapp","telegram","email","number","à¶…à¶¸à¶­à¶±à·Šà¶±","à·ƒà¶¸à·Šà¶¶à¶±à·Šà¶°"))
      return reply(`MI CORTEX X Contact Information\nâ€¢ Primary email: ${company.primaryEmail}\nâ€¢ Support: ${company.supportEmail}\nâ€¢ Sales: ${company.salesEmail}\nâ€¢ WhatsApp: ${company.whatsappDisplay}\nâ€¢ Telegram: ${company.telegram}\nâ€¢ Website: ${company.website}`,contactActions());

    if(asks(q,"location","office","address","à¶šà·œà·„à·™à¶¯","à¶½à·’à¶´à·’à¶±à¶º"))
      return reply(`${company.name} operates online from ${company.city}, ${company.country}. There is no public walk-in office.`,[action("CONTACT PAGE","route","#/contact")]);

    if(asks(q,"hours","open","closed","sunday","à·€à·šà¶½à·à·€","à¶‡à¶»à¶½à·","à·€à·„à¶½à·"))
      return reply(`Business hours: ${company.hours}`,[action("CONTACT SUPPORT","hub","support")]);

    if(asks(q,"founded","started","established","à¶´à¶§à¶±à·Š à¶œà¶­à·Šà¶­à·š","à¶šà·€à¶¯à·à¶¯"))
      return reply(`MI CORTEX X was founded in ${company.founded}.`,[action("ABOUT COMPANY","route","#/about")]);

    if(asks(q,"mission"))return reply(`Mission: ${company.mission}`,[action("ABOUT COMPANY","route","#/about")]);
    if(asks(q,"vision"))return reply(`Vision: ${company.vision}`,[action("ABOUT COMPANY","route","#/about")]);

    if(asks(q,"payment","advance","refund","à¶œà·™à·€à·“à¶¸","à¶…à¶­à·Šà¶­à·’à¶šà·à¶»à¶¸à·Š"))
      return reply(`Project payment information:\nâ€¢ Advance: ${company.advance}\nâ€¢ Remaining payment: Before final delivery\nâ€¢ Online card payments: Not activated yet\nâ€¢ Full refund: Before project commencement\nâ€¢ Completed work and delivered milestones are non-refundable after development begins.`,
        [action("REQUEST QUOTE","quote"),action("CONTACT SALES","url",`mailto:${company.salesEmail}`)]);

    if(asks(q,"support","customer service","help","à¶‹à¶¯à·€à·Š","à·ƒà·„à·à¶º"))
      return reply(`Support is available through Email, WhatsApp, Telegram and the website contact form. Normal response time: ${company.responseTime}.`,
        [action("INFORMATION CENTER","hub","support"),action("CREATE SUPPORT REQUEST","support-flow"),...contactActions()]);

    if(asks(q,"company","about","what is mi cortex","à·ƒà¶¸à·à¶œà¶¸"))
      return reply(`MI CORTEX X is a Sri Lankan artificial intelligence and software technology company founded in ${company.founded}. It develops intelligent digital products and custom technology solutions worldwide.`,
        [action("ABOUT COMPANY","route","#/about"),action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services")]);

    if(isPrice)
      return reply("Include the exact product or service name. Example: â€œAI chatbot eke mila keeyada?â€ or â€œWebsite ekak hadanna keeyada?â€",
        [action("PRICING","route","#/pricing"),action("CUSTOM QUOTE","quote")],
        ["AI chatbot eke mila keeyada?","Website ekak hadanna keeyada?","Mobile app eke mila keeyada?"]);

    return reply(
      lang==="si"
        ?"à¶¸à¶§ à¶¸à·š à¶´à·Šâ€à¶»à·à·Šà¶±à¶ºà¶§ verified exact company answer à¶‘à¶šà¶šà·Š à·„à¶³à·”à¶±à·à¶œà¶±à·Šà¶± à¶¶à·à¶»à·’ à·€à·”à¶«à·. Product/service à¶±à¶¸, executive title, price, contact, support, quotation à·„à· appointment topic à¶‘à¶š à¶´à·à·„à·à¶¯à·’à¶½à·’à·€ à·ƒà¶³à·„à¶±à·Š à¶šà¶»à¶±à·Šà¶±."
        :"I could not identify a verified company answer. Include a product/service name, executive title, price, contact, support, quotation or appointment topic.",
      [action("PRODUCTS","route","#/products"),action("SERVICES","route","#/services"),action("SUPPORT","hub","support"),action("APPOINTMENT","appointment")],
      ["CEO kawda","AI chatbot eke mila keeyada","WhatsApp number eka denna"]
    );
  }

  const root=document.createElement("div");
  root.id="mcx-ai-chat-root";
  root.innerHTML=`
    <div class="mcx-ai-overlay" hidden>
      <section class="mcx-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="mcx-ai-title">
        <header class="mcx-ai-header">
          <div class="mcx-ai-brand"><span class="mcx-ai-status-dot"></span><div><strong id="mcx-ai-title">CORTEX CORE AI</strong><span>Customer and business assistant</span></div></div>
          <div class="mcx-ai-header-actions">
            <button type="button" data-ai-search title="Search chat">&#128269;</button>
            <button type="button" data-ai-settings title="Settings">&#9881;</button>
            <button type="button" data-ai-new title="New chat">+</button>
            <button type="button" data-ai-clear title="Clear history">&#128465;</button>
            <button class="mcx-ai-close" type="button" aria-label="Close">&#10005;</button>
          </div>
        </header>
        <div class="mcx-ai-offline" hidden>You appear to be offline. Saved company answers remain available; external links may not open.</div>
        <div class="mcx-ai-toolbar">
          <button type="button" data-ai-route="#/products">PRODUCTS</button><button type="button" data-ai-route="#/services">SERVICES</button>
          <button type="button" data-ai-route="#/pricing">PRICING</button><button type="button" data-ai-action="recommend">RECOMMEND</button>
          <button type="button" data-ai-action="quote">QUOTE</button><button type="button" data-ai-appointment="">APPOINTMENT</button>
          <button type="button" data-ai-hub="support">SUPPORT</button>
        </div>
        <div class="mcx-ai-search-panel" hidden>
          <input type="search" placeholder="Search this conversation..." aria-label="Search conversation">
          <button type="button" data-ai-search-close>CLOSE</button>
        </div>
        <div class="mcx-ai-settings-panel" hidden>
          <label>Theme <select data-setting-theme><option value="dark">Dark</option><option value="light">Light</option></select></label>
          <label>Text size <select data-setting-font><option value="0.9">Small</option><option value="1">Normal</option><option value="1.12">Large</option></select></label>
          <button type="button" data-ai-export>EXPORT CHAT</button>
          <button type="button" data-ai-print>PRINT</button>
          <button type="button" data-ai-share>SHARE</button>
          <button type="button" data-ai-favorites>FAVORITES</button>
        </div>
        <div class="mcx-ai-messages" aria-live="polite"></div>
        <div class="mcx-ai-suggestions" hidden></div>
        <form class="mcx-ai-composer" action="javascript:void(0)" novalidate>
          <textarea rows="1" maxlength="1800" placeholder="Ask in Sinhala, English or Singlish..." required></textarea>
          <button class="mcx-ai-send" aria-label="Send" type="submit">&#10148;</button>
        </form>
      </section>
    </div>`;
  document.body.appendChild(root);

  const overlay=root.querySelector(".mcx-ai-overlay");
  const dialog=root.querySelector(".mcx-ai-dialog");
  const messages=root.querySelector(".mcx-ai-messages");
  const suggestions=root.querySelector(".mcx-ai-suggestions");
  const form=root.querySelector("form");
  const input=root.querySelector("textarea");
  const searchPanel=root.querySelector(".mcx-ai-search-panel");
  const settingsPanel=root.querySelector(".mcx-ai-settings-panel");
  const offlineBanner=root.querySelector(".mcx-ai-offline");

  function applySettings(){
    dialog.dataset.theme=settings.theme;
    dialog.style.setProperty("--mcx-ai-font-scale",String(settings.fontScale||1));
    root.querySelector("[data-setting-theme]").value=settings.theme;
    root.querySelector("[data-setting-font]").value=String(settings.fontScale||1);
  }

  const formatTime=t=>new Intl.DateTimeFormat(undefined,{hour:"2-digit",minute:"2-digit"}).format(new Date(t));

  function linkify(host,text){
    const re=/(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|@MICORTEXX|\+94\s?[\d\s]{8,})/g;
    let last=0;
    for(const m of text.matchAll(re)){
      host.append(document.createTextNode(text.slice(last,m.index)));
      const a=document.createElement("a"),v=m[0];a.textContent=v;a.target="_blank";a.rel="noopener noreferrer";
      a.href=v.startsWith("http")?v:v==="@MICORTEXX"?company.telegramUrl:v.includes("@")?`mailto:${v}`:`https://wa.me/${company.whatsappNumber}`;
      host.append(a);last=m.index+v.length;
    }
    host.append(document.createTextNode(text.slice(last)));
  }

  function showSuggestions(items=[]){
    suggestions.innerHTML="";suggestions.hidden=!items.length;
    items.slice(0,5).forEach(text=>{const b=document.createElement("button");b.type="button";b.textContent=text;b.dataset.suggestion=text;suggestions.append(b);});
  }

  function addMessage(type,payload,persist=true,timestamp=Date.now()){
    const data=typeof payload==="string"?reply(payload):payload;
    const row=document.createElement("article");row.className=`mcx-ai-message mcx-ai-${type}`;
    const bubble=document.createElement("div");bubble.className="mcx-ai-bubble";
    const content=document.createElement("div");content.className="mcx-ai-content";linkify(content,data.text||"");bubble.append(content);
    const meta=document.createElement("div");meta.className="mcx-ai-meta";meta.textContent=`${type==="user"?"You":"CORTEX CORE AI"} Â· ${formatTime(timestamp)}`;bubble.append(meta);

    if(type==="assistant"){
      const tools=document.createElement("div");tools.className="mcx-ai-tools";
      const buttons=[
        ["COPY","copy",data.text||""],["REGENERATE","regenerate",""],["SAVE","favorite",data.text||""],
        ["HELPFUL","feedback","helpful"],["NOT HELPFUL","feedback","not-helpful"]
      ];
      buttons.forEach(([label,key,value])=>{const b=document.createElement("button");b.type="button";b.textContent=label;b.dataset[key]=value;tools.append(b);});
      bubble.append(tools);
      if(data.actions?.length){
        const host=document.createElement("div");host.className="mcx-ai-message-actions";
        data.actions.forEach(item=>{const b=document.createElement("button");b.type="button";b.textContent=item.label;b.dataset.action=item.action;b.dataset.value=item.value||"";host.append(b);});
        bubble.append(host);
      }
      showSuggestions(data.suggestions||[]);
    }

    row.append(bubble);messages.append(row);messages.scrollTop=messages.scrollHeight;
    if(persist){history.push({type,payload:data,timestamp});history=history.slice(-MAX_HISTORY);save(KEYS.history,history);}
  }

  function typing(){
    const row=document.createElement("div");row.className="mcx-ai-message mcx-ai-assistant mcx-ai-typing";
    row.innerHTML='<div class="mcx-ai-bubble"><span></span><span></span><span></span><em>Carefully analysing your company question...</em></div>';
    messages.append(row);messages.scrollTop=messages.scrollHeight;return row;
  }

  function transcript(){
    return history.map(item=>`${item.type==="user"?"You":"CORTEX CORE AI"} [${new Date(item.timestamp).toLocaleString()}]\n${item.payload.text||""}`).join("\n\n");
  }

  function downloadText(filename,text){
    const blob=new Blob([text],{type:"text/plain;charset=utf-8"});
    const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
  }

  function newChat(){
    history=[];quoteFlow=null;supportFlow=null;requirementFlow=null;context={};save(KEYS.history,history);save(KEYS.context,context);
    messages.innerHTML="";showSuggestions([]);
    addMessage("assistant",reply(
      `${profile.name?`Hi ${profile.name}`:"Hi"} ðŸ‘‹ Iâ€™m CORTEX CORE AI. I can help with company information, service recommendations, quotations, support requests and appointments.`,
      [action("GET RECOMMENDATION","recommend"),action("INSTANT QUOTE","quote"),action("SUPPORT REQUEST","support-flow"),action("APPOINTMENT","appointment")],
      ["CEO kawda?","Website ekak hadanna keeyada?","Mata suitable service ekak kiyanna"]
    ));
  }

  function restoreHistory(){messages.innerHTML="";history.forEach(i=>addMessage(i.type,i.payload,false,i.timestamp));}

  function openChat(){
    lastFocus=document.activeElement;overlay.hidden=false;document.body.classList.add("mcx-ai-open");
    if(!opened){opened=true;if(history.length)restoreHistory();else newChat();}
    input.value=localStorage.getItem(KEYS.draft)||"";applySettings();setTimeout(()=>input.focus(),50);
  }

  function closeChat(){overlay.hidden=true;document.body.classList.remove("mcx-ai-open");lastFocus?.focus?.();}

  window.addEventListener("mcx:open-cortex-core-ai", () => {
    openChat();
  });

  function openHub(panel="main",role=""){
    closeChat();const hub=document.getElementById("mcx-contact-hub-root");
    if(!hub){location.hash="#/contact";return;}
    hub.querySelector(".mcx-hub-fab")?.click();
    setTimeout(()=>{
      if(role||panel==="executives"){
        hub.querySelector('[data-open="executives"]')?.click();
        if(role)setTimeout(()=>{const wanted=normalize(role);[...hub.querySelectorAll("[data-executive]")].find(b=>normalize(b.dataset.executive).includes(wanted.replace("chief executive officer ceo","chief executive officer")))?.click();},100);
      }else if(panel!=="main")hub.querySelector(`[data-open="${panel}"]`)?.click();
    },120);
  }

  function beginFlow(kind,initial=""){
    const flows={
      quote:[
        ["service",initial?null:"What product or service do you need?"],
        ["features","What main features or requirements do you need?"],
        ["budget","What is your estimated budget? You may type Not decided."],
        ["deadline","What is your preferred deadline?"],
        ["name","What is your full name?"],
        ["email","What is your email address?"]
      ],
      support:[
        ["category","Choose a support category: Bug, Technical issue, Billing question, Feature request, or Other."],
        ["details","Describe the issue or request clearly."],
        ["urgency","Choose urgency: Normal, Important, or Urgent."],
        ["name","What is your full name?"],
        ["email","What is your email address?"]
      ],
      recommend:[
        ["goal","What do you want to build or improve?"],
        ["platform","Which platform do you prefer: Website, Web app, Mobile app, Desktop, AI, or Not sure?"],
        ["budget","What is your approximate budget?"],
        ["deadline","What is your preferred deadline?"]
      ]
    };
    const state={kind,step:0,data:{},questions:flows[kind]};
    if(kind==="quote"&&initial)state.data.service=initial;
    if(kind==="quote")quoteFlow=state;
    if(kind==="support")supportFlow=state;
    if(kind==="recommend")requirementFlow=state;
    addMessage("assistant",kind==="quote"?"Iâ€™ll prepare a quotation-request summary. Do not enter card information.":kind==="support"?"Iâ€™ll prepare a support request. A real ticket is created only after you send it to support.":"Iâ€™ll ask a few questions and recommend a suitable starting service.");
    continueFlow(state);
  }

  function activeFlow(){return quoteFlow||supportFlow||requirementFlow;}

  function continueFlow(state){
    while(state&&state.step<state.questions.length){
      const[key,question]=state.questions[state.step];
      if(state.data[key]){state.step++;continue;}
      addMessage("assistant",question);return;
    }
    if(!state)return;
    if(state.kind==="quote"){
      const d=state.data;
      const summary=`QUOTATION REQUEST SUMMARY\nService/Product: ${d.service}\nRequirements: ${d.features}\nBudget: ${d.budget}\nDeadline: ${d.deadline}\nName: ${d.name}\nEmail: ${d.email}`;
      addMessage("assistant",reply(summary,[action("SEND VIA WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(summary)}`),action("SEND VIA EMAIL","url",`mailto:${company.salesEmail}?subject=${encodeURIComponent("Quotation Request")}&body=${encodeURIComponent(summary)}`)]));
      quoteFlow=null;
    }else if(state.kind==="support"){
      const d=state.data;
      const summary=`SUPPORT REQUEST\nCategory: ${d.category}\nDetails: ${d.details}\nUrgency: ${d.urgency}\nName: ${d.name}\nEmail: ${d.email}`;
      addMessage("assistant",reply(summary,[action("SEND TO SUPPORT EMAIL","url",`mailto:${company.supportEmail}?subject=${encodeURIComponent("Support Request")}&body=${encodeURIComponent(summary)}`),action("SEND VIA WHATSAPP","url",`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(summary)}`)]));
      supportFlow=null;
    }else{
      const d=state.data;let recommended=services.find(s=>s.id==="custom-software-development");
      const text=normalize(`${d.goal} ${d.platform}`);
      if(text.includes("website"))recommended=services.find(s=>s.id==="website-development");
      else if(text.includes("mobile"))recommended=services.find(s=>s.id==="mobile-app-development");
      else if(text.includes("chat")||text.includes("support"))recommended=services.find(s=>s.id==="ai-chatbot-development");
      else if(text.includes("automation"))recommended=services.find(s=>s.id==="ai-automation");
      else if(text.includes("web app")||text.includes("dashboard"))recommended=services.find(s=>s.id==="web-application-development");
      addMessage("assistant",reply(`Recommended starting option: ${recommended.name}\nStarting price: ${currency(recommended.price)}${recommended.billing?` ${recommended.billing}`:""}\nEstimated delivery: ${recommended.delivery}\n\nA final recommendation requires detailed requirements.`,
        [action("VIEW RECOMMENDED SERVICE","route",recommended.route),action("GET QUOTE","quote",recommended.name),action("BOOK CONSULTATION","appointment")]));
      requirementFlow=null;
    }
  }

  function acceptFlow(text){
    const state=activeFlow();if(!state)return false;
    const[key]=state.questions[state.step];
    if(key==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim())){addMessage("assistant","Please enter a valid email address.");return true;}
    state.data[key]=text.trim();state.step++;continueFlow(state);return true;
  }

  function compareServices(firstId=""){
    const first=services.find(s=>s.id===firstId)||services[0];
    const second=services.find(s=>s.id!==first.id&&s.price>=first.price)||services[1];
    addMessage("assistant",reply(
      `${first.name} vs ${second.name}\n\n${first.name}\nâ€¢ ${currency(first.price)}${first.billing?` ${first.billing}`:""}\nâ€¢ Delivery: ${first.delivery}\nâ€¢ Support: ${first.support}\n\n${second.name}\nâ€¢ ${currency(second.price)}${second.billing?` ${second.billing}`:""}\nâ€¢ Delivery: ${second.delivery}\nâ€¢ Support: ${second.support}`,
      [action(`VIEW ${first.name.toUpperCase()}`,"route",first.route),action(`VIEW ${second.name.toUpperCase()}`,"route",second.route),action("CUSTOM QUOTE","quote")]
    ));
  }

  function execute(type,value){
    if(type==="route"){closeChat();location.hash=value;}
    else if(type==="url")window.open(value,"_blank","noopener,noreferrer");
    else if(type==="appointment")openHub("executives",value);
    else if(type==="hub")openHub(value||"main");
    else if(type==="quote")beginFlow("quote",value);
    else if(type==="support-flow")beginFlow("support");
    else if(type==="recommend")beginFlow("recommend");
    else if(type==="compare")compareServices(value);
    else if(type==="demo"){
      const text=`Demo request for ${value}`;
      window.open(`mailto:${company.salesEmail}?subject=${encodeURIComponent(text)}&body=${encodeURIComponent("Hello, I would like to request a demo.")}`,"_blank");
    }else if(type==="forget-profile"){profile={name:"",company:""};save(KEYS.profile,profile);addMessage("assistant","Saved customer profile removed from this browser.");}
  }



  /* MCX_V11_ADVANCED_COMPANY_AI_START */

  const V11_KEYS = {
    analytics: "mcx_ai_v11_analytics",
    summary: "mcx_ai_v11_summary"
  };

  let pendingAttachments = [];
  let v11Analytics = (() => {
    try {
      return JSON.parse(localStorage.getItem(V11_KEYS.analytics) || "null") || {
        questions: 0,
        successfulAnswers: 0,
        fallbackAnswers: 0,
        attachmentQuestions: 0,
        intents: {}
      };
    } catch {
      return {
        questions: 0,
        successfulAnswers: 0,
        fallbackAnswers: 0,
        attachmentQuestions: 0,
        intents: {}
      };
    }
  })();

  function saveV11Analytics() {
    try {
      localStorage.setItem(V11_KEYS.analytics, JSON.stringify(v11Analytics));
    } catch {}
  }

  function recordV11Intent(intent) {
    const key = String(intent || "company_question").slice(0, 80);
    v11Analytics.intents[key] = (v11Analytics.intents[key] || 0) + 1;
    saveV11Analytics();
  }

  function buildCompanyAIHistory() {
    return history
      .slice(-30)
      .map(item => ({
        role: item.type === "user" ? "user" : "assistant",
        content: String(item.payload?.text || "").slice(0, 2800)
      }))
      .filter(item => item.content);
  }

  function sanitizeRemoteActions(actions) {
    const allowed = new Set([
      "route", "url", "appointment", "hub",
      "quote", "recommend", "support-flow"
    ]);

    if (!Array.isArray(actions)) return [];

    return actions
      .slice(0, 6)
      .filter(item =>
        item &&
        typeof item.label === "string" &&
        allowed.has(item.action)
      )
      .map(item => ({
        label: item.label.slice(0, 70),
        action: item.action,
        value: typeof item.value === "string"
          ? item.value.slice(0, 700)
          : ""
      }));
  }

  function createStreamingAssistantMessage() {
    const row = document.createElement("article");
    row.className = "mcx-ai-message mcx-ai-assistant mcx-v11-streaming";

    const bubble = document.createElement("div");
    bubble.className = "mcx-ai-bubble";

    const content = document.createElement("div");
    content.className = "mcx-ai-content";

    const meta = document.createElement("div");
    meta.className = "mcx-ai-meta";
    meta.textContent = `CORTEX CORE AI Â· ${formatTime(Date.now())}`;

    bubble.append(content, meta);
    row.append(bubble);
    messages.append(row);
    messages.scrollTop = messages.scrollHeight;

    return { row, content };
  }

  async function askAdvancedCompanyAI(question, onDelta) {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 60000);

    try {
      const response = await fetch("/api/company-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          history: buildCompanyAIHistory(),
          conversationSummary:
            localStorage.getItem(V11_KEYS.summary) || "",
          attachments: pendingAttachments.map(item => ({
            name: item.name,
            type: item.type,
            category: item.category,
            content: item.content
          }))
        }),
        signal: controller.signal
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const error = new Error(
          data.error || `AI request failed with status ${response.status}.`
        );
        error.status = response.status;
        throw error;
      }

      if (!response.body) {
        throw new Error("Streaming response is unavailable.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let answer = "";
      let actions = [];
      let suggestions = [];
      let intent = "company_question";
      let summary = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split("\n\n");
        buffer = events.pop() || "";

        for (const event of events) {
          const line = event
            .split("\n")
            .find(value => value.startsWith("data:"));

          if (!line) continue;

          const payload = JSON.parse(line.slice(5).trim());

          if (payload.type === "delta") {
            answer += payload.text || "";
            onDelta(payload.text || "");
          } else if (payload.type === "meta") {
            actions = sanitizeRemoteActions(payload.actions);
            suggestions = Array.isArray(payload.suggestions)
              ? payload.suggestions.slice(0, 5)
              : [];
            intent = payload.intent || intent;
            summary = payload.summary || "";
          } else if (payload.type === "error") {
            throw new Error(payload.error || "AI streaming failed.");
          }
        }
      }

      if (!answer.trim()) {
        throw new Error("The AI server returned an empty answer.");
      }

      if (summary) {
        try {
          localStorage.setItem(V11_KEYS.summary, summary.slice(0, 6000));
        } catch {}
      }

      recordV11Intent(intent);

      return reply(
        answer.trim(),
        actions,
        suggestions.map(value => String(value).slice(0, 140))
      );
    } finally {
      window.clearTimeout(timer);
    }
  }

  function advancedAIFallback(error, question) {
    v11Analytics.fallbackAnswers += 1;
    saveV11Analytics();

    const local = answer(question);

    if (error?.status === 503) {
      return reply(
        "CORTEX CORE AI needs GROQ_API_KEY in Vercel Environment Variables. Until it is configured, the verified local company answer is shown below.\n\n" +
        local.text,
        local.actions,
        local.suggestions
      );
    }

    return reply(
      "The secure company AI service could not be reached, so I used the verified local company knowledge.\n\n" +
      local.text,
      local.actions,
      local.suggestions
    );
  }

  function humanFileSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
      reader.onload = () => resolve(String(reader.result || ""));
      reader.readAsDataURL(file);
    });
  }

  function readAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
      reader.onload = () => resolve(String(reader.result || ""));
      reader.readAsText(file);
    });
  }

  async function ensurePdfJs() {
    if (window.pdfjsLib) return window.pdfjsLib;

    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.onload = resolve;
      script.onerror = () =>
        reject(new Error("PDF reader library could not be loaded."));
      document.head.append(script);
    });

    if (!window.pdfjsLib) {
      throw new Error("PDF text extraction is unavailable.");
    }

    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    return window.pdfjsLib;
  }

  async function extractPdfText(file) {
    if (file.size > 8 * 1024 * 1024) {
      throw new Error("PDF files must be 8 MB or smaller.");
    }

    const pdfjs = await ensurePdfJs();
    const data = new Uint8Array(await file.arrayBuffer());
    const pdf = await pdfjs.getDocument({ data }).promise;
    const pageCount = Math.min(pdf.numPages, 25);
    const parts = [];

    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      const text = content.items
        .map(item => item.str || "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      if (text) parts.push(`Page ${pageNumber}: ${text}`);
    }

    if (!parts.length) {
      throw new Error(
        "No selectable text was found. Upload page screenshots for image analysis."
      );
    }

    return parts.join("\n\n").slice(0, 50000);
  }

  function renderAttachmentTray() {
    let tray = root.querySelector(".mcx-v11-attachment-tray");

    if (!tray) {
      tray = document.createElement("div");
      tray.className = "mcx-v11-attachment-tray";
      tray.hidden = true;
      form.before(tray);
    }

    tray.innerHTML = "";
    tray.hidden = pendingAttachments.length === 0;

    pendingAttachments.forEach((item, index) => {
      const chip = document.createElement("div");
      chip.className = "mcx-v11-attachment-chip";
      chip.innerHTML = `
        <span>${item.category === "image" ? "ðŸ–¼ï¸" : "ðŸ“„"}</span>
        <strong>${item.name}</strong>
        <small>${item.sizeLabel}</small>
        <button type="button" data-remove-attachment="${index}" aria-label="Remove attachment">Ã—</button>
      `;
      tray.append(chip);
    });
  }

  async function addFiles(fileList) {
    const files = [...fileList].slice(0, 4);

    for (const file of files) {
      if (pendingAttachments.length >= 4) {
        alert("A maximum of 4 files can be attached to one message.");
        break;
      }

      try {
        if (file.type.startsWith("image/")) {
          if (file.size > 4 * 1024 * 1024) {
            throw new Error("Images must be 4 MB or smaller.");
          }

          pendingAttachments.push({
            name: file.name,
            type: file.type,
            category: "image",
            content: await readAsDataURL(file),
            sizeLabel: humanFileSize(file.size)
          });
        } else if (
          file.type === "application/pdf" ||
          /\.pdf$/i.test(file.name)
        ) {
          pendingAttachments.push({
            name: file.name,
            type: "text/plain",
            category: "document",
            content: await extractPdfText(file),
            sizeLabel: humanFileSize(file.size)
          });
        } else {
          if (file.size > 1024 * 1024) {
            throw new Error("Text and code files must be 1 MB or smaller.");
          }

          pendingAttachments.push({
            name: file.name,
            type: file.type || "text/plain",
            category: "document",
            content: (await readAsText(file)).slice(0, 50000),
            sizeLabel: humanFileSize(file.size)
          });
        }
      } catch (error) {
        alert(`${file.name}: ${error.message}`);
      }
    }

    renderAttachmentTray();
  }

  function installAttachmentUI() {
    if (root.querySelector("[data-ai-attach]")) return;

    const input = document.createElement("input");
    input.type = "file";
    input.hidden = true;
    input.tabIndex = -1;
    input.setAttribute("aria-hidden", "true");
    input.multiple = true;
    input.accept =
      "image/png,image/jpeg,image/webp,application/pdf,text/plain,text/markdown,text/csv,application/json,text/html,text/css,text/javascript,.js,.py,.java,.xml,.yaml,.yml";

    const attach = document.createElement("button");
    attach.type = "button";
    attach.className = "mcx-v11-attach";
    attach.dataset.aiAttach = "true";
    attach.setAttribute("aria-label", "Attach files");
    attach.title = "Attach files or images";
    attach.textContent = "ðŸ“Ž";

    const messageInput = form.querySelector("textarea");

    if (messageInput) {
      form.insertBefore(attach, messageInput);
    } else {
      form.prepend(attach);
    }

    form.append(input);

    attach.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      input.click();
    });
    input.addEventListener("change", async () => {
      await addFiles(input.files || []);
      input.value = "";
    });
  }

  function installAnalyticsButton() {
    if (root.querySelector("[data-ai-analytics]")) return;

    const headerActions = root.querySelector(".mcx-ai-header-actions");
    if (!headerActions) return;

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.aiAnalytics = "true";
    button.title = "Local AI analytics";
    button.setAttribute("aria-label", "Open local AI analytics");
    button.textContent = "â–¥";
    headerActions.insertBefore(button, headerActions.firstChild);
  }

  function showLocalAnalytics() {
    const intents = Object.entries(v11Analytics.intents)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => `${name}: ${count}`)
      .join("\n");

    alert(
      `CORTEX CORE AI â€” Local Analytics\n\n` +
      `Questions: ${v11Analytics.questions}\n` +
      `Successful AI answers: ${v11Analytics.successfulAnswers}\n` +
      `Fallback answers: ${v11Analytics.fallbackAnswers}\n` +
      `Questions with attachments: ${v11Analytics.attachmentQuestions}\n\n` +
      `Top intents:\n${intents || "No data yet."}\n\n` +
      `These analytics are stored only in this browser.`
    );
  }

  installAttachmentUI();
  installAnalyticsButton();

  /* MCX_V11_ADVANCED_COMPANY_AI_END */



  async function process(text){
    lastQuestion = text;
    addMessage("user", text);

    if (acceptFlow(text)) {
      return;
    }

    v11Analytics.questions += 1;
    if (pendingAttachments.length) {
      v11Analytics.attachmentQuestions += 1;
    }
    saveV11Analytics();

    const loader = typing();
    const streaming = createStreamingAssistantMessage();
    loader.remove();

    try {
      const result = await askAdvancedCompanyAI(text, delta => {
        streaming.content.textContent += delta;
        messages.scrollTop = messages.scrollHeight;
      });

      v11Analytics.successfulAnswers += 1;
      saveV11Analytics();

      streaming.row.remove();
      addMessage("assistant", result);

      pendingAttachments = [];
      renderAttachmentTray();
    }
    catch (error) {
      console.error("CORTEX CORE AI request failed:", error);
      streaming.row.remove();
      addMessage("assistant", advancedAIFallback(error, text));
    }
  }

  function updateOnline(){offlineBanner.hidden=navigator.onLine;}
  window.addEventListener("online",updateOnline);window.addEventListener("offline",updateOnline);updateOnline();

  document.addEventListener("click",event=>{
    const trigger=event.target.closest("button,a,[role='button']");if(!trigger)return;
    if(normalize(trigger.innerText||trigger.textContent).includes("chat with cortex core ai")){event.preventDefault();event.stopPropagation();openChat();}
  },true);

  root.addEventListener("click", async event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const removeAttachment = target.closest("[data-remove-attachment]");
    if (removeAttachment) {
      event.preventDefault();
      pendingAttachments.splice(
        Number(removeAttachment.dataset.removeAttachment),
        1
      );
      renderAttachmentTray();
      return;
    }

    if (target.closest("[data-ai-analytics]")) {
      event.preventDefault();
      showLocalAnalytics();
      return;
    }

    const actionButton = target.closest("[data-action]");
    if (actionButton) {
      event.preventDefault();
      execute(
        actionButton.dataset.action,
        actionButton.dataset.value || ""
      );
      return;
    }

    const suggestion = target.closest("[data-suggestion]");
    if (suggestion) {
      event.preventDefault();
      await process(suggestion.dataset.suggestion || "");
      return;
    }

    const route = target.closest("[data-ai-route]");
    if (route) {
      event.preventDefault();
      execute("route", route.dataset.aiRoute || "#/home");
      return;
    }

    const appointment = target.closest("[data-ai-appointment]");
    if (appointment) {
      event.preventDefault();
      execute(
        "appointment",
        appointment.dataset.aiAppointment || ""
      );
      return;
    }

    const hub = target.closest("[data-ai-hub]");
    if (hub) {
      event.preventDefault();
      execute("hub", hub.dataset.aiHub || "main");
      return;
    }

    const quickAction = target.closest("[data-ai-action]");
    if (quickAction) {
      event.preventDefault();
      execute(quickAction.dataset.aiAction || "");
      return;
    }

    const copy = target.closest("[data-copy]");
    if (copy) {
      event.preventDefault();
      await navigator.clipboard?.writeText(copy.dataset.copy || "");
      const original = copy.textContent;
      copy.textContent = "COPIED";
      window.setTimeout(() => {
        copy.textContent = original || "COPY";
      }, 1200);
      return;
    }

    const favorite = target.closest("[data-favorite]");
    if (favorite) {
      event.preventDefault();
      favorites.push({
        text: favorite.dataset.favorite || "",
        time: Date.now()
      });
      favorites = favorites.slice(-50);
      save(KEYS.favorites, favorites);
      favorite.textContent = "SAVED";
      return;
    }

    const feedbackButton = target.closest("[data-feedback]");
    if (feedbackButton) {
      event.preventDefault();
      feedback.push({
        value: feedbackButton.dataset.feedback || "",
        time: Date.now(),
        question: lastQuestion
      });
      feedback = feedback.slice(-100);
      save(KEYS.feedback, feedback);
      feedbackButton.textContent = "RECORDED";
      return;
    }

    if (target.closest("[data-regenerate]")) {
      event.preventDefault();
      if (lastQuestion) await process(lastQuestion);
      return;
    }

    if (target.closest("[data-ai-new]")) {
      event.preventDefault();
      newChat();
      return;
    }

    if (target.closest("[data-ai-clear]")) {
      event.preventDefault();
      if (confirm("Clear complete AI chat history?")) newChat();
      return;
    }

    if (target.closest(".mcx-ai-close")) {
      event.preventDefault();
      closeChat();
      return;
    }

    if (target === overlay) {
      closeChat();
      return;
    }

    if (target.closest("[data-ai-search]")) {
      event.preventDefault();
      searchPanel.hidden = !searchPanel.hidden;
      searchPanel.querySelector("input")?.focus();
      return;
    }

    if (target.closest("[data-ai-search-close]")) {
      event.preventDefault();
      searchPanel.hidden = true;
      return;
    }

    if (target.closest("[data-ai-settings]")) {
      event.preventDefault();
      settingsPanel.hidden = !settingsPanel.hidden;
      return;
    }

    if (target.closest("[data-ai-export]")) {
      event.preventDefault();
      downloadText("CORTEX-CORE-AI-CHAT.txt", transcript());
      return;
    }

    if (target.closest("[data-ai-print]")) {
      event.preventDefault();
      window.print();
      return;
    }

    if (target.closest("[data-ai-share]")) {
      event.preventDefault();
      const data = {
        title: "CORTEX CORE AI Conversation",
        text: transcript()
      };

      if (navigator.share) {
        navigator.share(data).catch(() => {});
      } else {
        await navigator.clipboard?.writeText(data.text);
        addMessage(
          "assistant",
          "Conversation copied because Web Share is unavailable."
        );
      }
      return;
    }

    if (target.closest("[data-ai-favorites]")) {
      event.preventDefault();
      addMessage(
        "assistant",
        favorites.length
          ? favorites.map((item, index) =>
              `${index + 1}. ${item.text}`
            ).join("\n\n")
          : "No saved answers yet."
      );
    }
  });

  searchPanel.querySelector("input").addEventListener("input",event=>{
    const term=normalize(event.target.value);
    [...messages.querySelectorAll(".mcx-ai-message")].forEach(row=>{row.hidden=term&&!normalize(row.textContent).includes(term);});
  });

  root.querySelector("[data-setting-theme]").addEventListener("change",event=>{settings.theme=event.target.value;save(KEYS.settings,settings);applySettings();});
  root.querySelector("[data-setting-font]").addEventListener("change",event=>{settings.fontScale=Number(event.target.value);save(KEYS.settings,settings);applySettings();});

  let messageSending = false;

  async function submitCurrentMessage() {
    if (messageSending) return;

    const text =
      input.value.trim() ||
      (
        pendingAttachments.length
          ? "Please analyze the attached files and answer only in relation to MI CORTEX X."
          : ""
      );

    if (!text) {
      input.focus();
      return;
    }

    messageSending = true;
    form.classList.add("mcx-ai-sending");
    input.disabled = true;

    const sendButton = form.querySelector(".mcx-ai-send");
    if (sendButton) sendButton.disabled = true;

    input.value = "";
    localStorage.removeItem(KEYS.draft);
    input.style.height = "auto";

    try {
      await process(text);
    } finally {
      messageSending = false;
      form.classList.remove("mcx-ai-sending");
      input.disabled = false;
      if (sendButton) sendButton.disabled = false;
      input.focus();
    }
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    event.stopPropagation();
    void submitCurrentMessage();
  });

  input.addEventListener("keydown", event => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.isComposing
    ) {
      event.preventDefault();
      event.stopPropagation();
      void submitCurrentMessage();
    }
  });
  input.addEventListener("input",()=>{input.style.height="auto";input.style.height=`${Math.min(input.scrollHeight,130)}px`;localStorage.setItem(KEYS.draft,input.value);});

  root.dataset.mcxAiRuntimeReady = "true";
  root.classList.add("mcx-ai-runtime-ready");

  document.addEventListener("keydown",event=>{
    if(event.ctrlKey&&event.key==="/"){event.preventDefault();openChat();}
    if(overlay.hidden)return;
    if(event.key==="Escape")closeChat();
    if(event.ctrlKey&&event.key.toLowerCase()==="k"){event.preventDefault();searchPanel.hidden=false;searchPanel.querySelector("input").focus();}
    if(event.key==="Tab"){
      const f=[...dialog.querySelectorAll("button,textarea,input,select,a[href],[tabindex]:not([tabindex='-1'])")].filter(e=>!e.disabled&&!e.hidden);
      if(!f.length)return;const first=f[0],last=f[f.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });

  applySettings();
})();
