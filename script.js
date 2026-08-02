
/* MI_CATEGORY_ICON_SYSTEM_START */

var mcxCategoryIconMap = {
  home: {
    "hero": "&#128640;",
    "introduction": "&#127970;",
    "company-introduction": "&#127970;",
    "featured-products": "&#129302;",
    "featured-services": "&#128736;",
    "industries": "&#127981;",
    "development-process": "&#9881;",
    "testimonials": "&#11088;",
    "faq": "&#10067;",
    "contact-cta": "&#128232;"
  },

  about: {
    "company-overview": "&#127970;",
    "our-story": "&#128214;",
    "mission": "&#127919;",
    "vision": "&#128065;",
    "leadership": "&#128101;",
    "core-values": "&#128142;",
    "technologies": "&#128187;",
    "research": "&#128300;",
    "timeline": "&#128197;",
    "future-goals": "&#128640;",
    "global-vision": "&#127758;",
    "why-choose-us": "&#127942;"
  },

  products: {
    "cortex-core-ai": "&#129504;",
    "ai-products": "&#129302;",
    "ai-assistants": "&#129302;",
    "ai-chatbots": "&#128172;",
    "ai-agents": "&#129504;",
    "web-applications": "&#127760;",
    "web-apps": "&#127760;",
    "mobile-applications": "&#128241;",
    "mobile-apps": "&#128241;",
    "desktop-software": "&#128421;",
    "enterprise-software": "&#127970;",
    "saas-platforms": "&#9729;",
    "saas": "&#9729;",
    "apis": "&#128279;",
    "automation": "&#9881;",
    "automation-tools": "&#9881;",
    "business-solutions": "&#128188;",
    "upcoming-products": "&#128640;"
  },

  services: {
    "ai-development": "&#129504;",
    "ai-chatbot-development": "&#128172;",
    "chatbot-development": "&#128172;",
    "chatbots": "&#128172;",
    "ai-automation": "&#9881;",
    "automation": "&#9881;",
    "website-development": "&#127760;",
    "websites": "&#127760;",
    "web-application-development": "&#128187;",
    "web-apps": "&#128187;",
    "mobile-app-development": "&#128241;",
    "mobile-apps": "&#128241;",
    "desktop-software-development": "&#128421;",
    "desktop-software": "&#128421;",
    "enterprise-solutions": "&#127970;",
    "enterprise-software-development": "&#127970;",
    "api-development": "&#128279;",
    "api-integration": "&#128279;",
    "apis": "&#128279;",
    "cloud-solutions": "&#9729;",
    "cloud": "&#9729;",
    "ui-ux-design": "&#127912;",
    "ui-ux": "&#127912;",
    "software-maintenance": "&#128295;",
    "maintenance": "&#128295;",
    "technical-consulting": "&#128161;",
    "consulting": "&#128161;",
    "custom-software-development": "&#128736;"
  },

  pricing: {
    "website-packages": "&#127760;",
    "ai-packages": "&#129302;",
    "business-packages": "&#128188;",
    "enterprise-packages": "&#127970;",
    "enterprise": "&#127970;",
    "custom-solutions": "&#128736;",
    "maintenance-plans": "&#128295;",
    "maintenance": "&#128295;",
    "free-consultation": "&#128172;",
    "consultation": "&#128172;",
    "request-a-quote": "&#128221;",
    "payment-methods": "&#128179;",
    "pricing-faq": "&#10067;",
    "faq": "&#10067;"
  },

  contact: {
    "contact-info": "&#8505;",
    "contact-information": "&#8505;",
    "inquiry-form": "&#128221;",
    "email": "&#9993;",
    "phone": "&#128222;",
    "whatsapp": "&#128172;",
    "telegram": "&#9992;",
    "office": "&#127970;",
    "business-hours": "&#128338;",
    "google-map": "&#128205;",
    "social-media": "&#127760;",
    "support": "&#128737;",
    "customer-support": "&#128737;",
    "send-inquiry": "&#128232;"
  }
};

function mcxGetCategoryIcon(page, categoryId) {
  var pageIcons = mcxCategoryIconMap[String(page || "").toLowerCase()] || {};
  var id = String(categoryId || "").toLowerCase();

  if (pageIcons[id]) {
    return pageIcons[id];
  }

  if (id.includes("chat")) return "&#128172;";
  if (id.includes("mobile")) return "&#128241;";
  if (id.includes("desktop")) return "&#128421;";
  if (id.includes("web")) return "&#127760;";
  if (id.includes("cloud")) return "&#9729;";
  if (id.includes("api")) return "&#128279;";
  if (id.includes("automation")) return "&#9881;";
  if (id.includes("research")) return "&#128300;";
  if (id.includes("payment")) return "&#128179;";
  if (id.includes("contact")) return "&#128232;";
  if (id.includes("support")) return "&#128737;";
  if (id.includes("service")) return "&#128736;";
  if (id.includes("product")) return "&#128230;";
  if (id.includes("ai")) return "&#129302;";

  return "&#10022;";
}

/* MI_CATEGORY_ICON_SYSTEM_END */


document.addEventListener('DOMContentLoaded', function () {
 if (window.__miWelcomeIntroInitialized) {
 return;
 }

 window.__miWelcomeIntroInitialized = true;

 const welcomeScreen = document.getElementById('welcome-screen');
 const welcomeStage = welcomeScreen ? welcomeScreen.querySelector('.welcome-stage') : null;
 const title = welcomeScreen ? welcomeScreen.querySelector('.welcome-title') : null;
 const robot = welcomeScreen ? welcomeScreen.querySelector('.intro-robot') : null;
 const body = document.body;
 const documentElement = document.documentElement;
 const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

 let titleFadeTimer = null;
 let titleClearTimer = null;
 let robotAssemblyTimer = null;
 let fallbackTimer = null;
 let transitionHandler = null;
 let hasStarted = false;

 const finalizeIntro = (options = {}) => {
 if (window.__miIntroFinalized) {
 return;
 }

 window.__miIntroFinalized = true;

 clearTimers();
 body.classList.remove('intro-active');
 body.classList.add('welcome-complete');
 documentElement.classList.add('welcome-complete');
 documentElement.style.overflow = '';
 body.style.overflow = '';

 if (transitionHandler) {
 welcomeScreen?.removeEventListener('transitionend', transitionHandler);
 }

 if (options.removeWelcomeScreen !== false) {
 if (welcomeScreen?.parentNode) {
 welcomeScreen.parentNode.removeChild(welcomeScreen);
 }
 }

 const neuralIntro = document.getElementById('mi-neural-intro');
 if (neuralIntro?.parentNode) {
 neuralIntro.parentNode.removeChild(neuralIntro);
 }

 window.dispatchEvent(new Event('resize'));
 };

 window.__miFinalizeIntro = finalizeIntro;

 const clearTimers = () => {
 if (titleFadeTimer) {
 window.clearTimeout(titleFadeTimer);
 titleFadeTimer = null;
 }
 if (titleClearTimer) {
 window.clearTimeout(titleClearTimer);
 titleClearTimer = null;
 }
 if (robotAssemblyTimer) {
 window.clearTimeout(robotAssemblyTimer);
 robotAssemblyTimer = null;
 }
 if (fallbackTimer) {
 window.clearTimeout(fallbackTimer);
 fallbackTimer = null;
 }
 };

 const removeIntro = () => {
 if (!welcomeScreen || welcomeScreen.classList.contains('intro-exiting')) {
 return;
 }

 welcomeScreen.classList.add('intro-exiting');
 welcomeScreen.setAttribute('aria-hidden', 'true');

 if (transitionHandler) {
 welcomeScreen.removeEventListener('transitionend', transitionHandler);
 }

 transitionHandler = function () {
 finalizeIntro();
 };

 welcomeScreen.addEventListener('transitionend', transitionHandler, { once: true });
 fallbackTimer = window.setTimeout(function () {
 finalizeIntro();
 }, 2800);
 };

 const startIntroSequence = () => {
 if (!welcomeScreen || !welcomeStage || !title || hasStarted) {
 return;
 }

 hasStarted = true;
 body.classList.add('intro-active');
 documentElement.classList.remove('welcome-complete');
 body.classList.remove('welcome-complete');
 welcomeScreen.setAttribute('aria-hidden', 'false');
 welcomeScreen.classList.add('intro-visible');

 window.requestAnimationFrame(function () {
 title.classList.add('is-visible');
 });

 titleFadeTimer = window.setTimeout(function () {
 title.classList.add('is-clear');
 }, 1400);

 titleClearTimer = window.setTimeout(function () {
 title.classList.add('title-transforming');

 window.setTimeout(function () {
 if (welcomeScreen && welcomeScreen.isConnected) {
 welcomeScreen.setAttribute('aria-hidden', 'true');
 welcomeScreen.remove();
 }

 window.dispatchEvent(new CustomEvent('mi:letters-complete'));
 }, reducedMotion ? 500 : 1400);
 }, 5200);

 fallbackTimer = window.setTimeout(function () {
 removeIntro();
 }, reducedMotion ? 7000 : 11000);
 };

 if (welcomeScreen) {
 startIntroSequence();
 }

 const year = document.getElementById('year');
 if (year) {
 year.textContent = new Date().getFullYear();
 }

 const navToggle = document.querySelector('.nav-toggle');
 const navLinks = document.querySelector('.nav-links');

 if (navToggle && navLinks) {
 navToggle.addEventListener('click', function () {
 const isOpen = navLinks.classList.toggle('open');
 navToggle.setAttribute('aria-expanded', String(isOpen));
 });
 }

 const revealItems = document.querySelectorAll('.reveal');
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add('is-visible');
 }
 });
 },
 { threshold: 0.15 }
 );

 revealItems.forEach((item) => observer.observe(item));

 const sections = document.querySelectorAll('main section[id]');
 const navAnchors = document.querySelectorAll('.nav-links a');

 const setActiveLink = () => {
 let current = '';
 sections.forEach((section) => {
 const top = section.offsetTop - 140;
 if (window.scrollY >= top) {
 current = section.id;
 }
 });

 navAnchors.forEach((anchor) => {
 anchor.classList.toggle('active', anchor.getAttribute('href') === `#${current}`);
 });
 };

 window.addEventListener('scroll', setActiveLink);
 setActiveLink();
});

/* MI_NEURAL_LOGO_SEQUENCE_START */
(() => {
 if (window.__miNeuralIntroInitialized) {
 return;
 }

 window.__miNeuralIntroInitialized = true;

 "use strict";

 const INTRO_START_DELAY = 6600;
 const NETWORK_REVEAL_TIME = 2100;
 const LOGO_ZOOM_IN_TIME = 1900;
 const LOGO_ZOOM_OUT_TIME = 1500;
 const LOGO_HOLD_TIME = 900;
 const LOGO_FADE_TIME = 1200;
 const SCREEN_LIFT_TIME = 2200;
 const FALLBACK_TIME = 20000;

 const sleep = (milliseconds) =>
 new Promise((resolve) => window.setTimeout(resolve, milliseconds));

 const createSvgElement = (tagName, attributes = {}) => {
 const element = document.createElementNS(
 "http://www.w3.org/2000/svg",
 tagName
 );

 Object.entries(attributes).forEach(([name, value]) => {
 element.setAttribute(name, String(value));
 });

 return element;
 };

 const buildNeuralNetwork = (svg) => {
 if (!svg || svg.dataset.built === "true") {
 return;
 }

 svg.dataset.built = "true";

 const nodes = [
 [70, 125], [205, 92], [365, 150], [515, 72],
 [735, 125], [970, 82], [1210, 130], [1455, 85],
 [95, 310], [260, 255], [430, 345], [1175, 290],
 [1370, 310], [1520, 245], [65, 565], [215, 680],
 [390, 590], [550, 755], [735, 670], [930, 760],
 [1110, 640], [1265, 735], [1455, 610], [1540, 770],
 [320, 820], [710, 840], [1160, 825], [1375, 850]
 ];

 const connections = [
 [0,1], [0,8], [1,2], [1,9], [2,3], [2,9],
 [3,4], [4,5], [5,6], [5,11], [6,7], [6,11],
 [6,12], [7,13], [8,9], [8,14], [9,10], [9,14],
 [10,15], [10,16], [11,12], [11,20], [12,13],
 [12,22], [13,22], [14,15], [15,16], [15,24],
 [16,17], [16,18], [17,18], [17,24], [18,19],
 [18,25], [19,20], [19,26], [20,21], [20,22],
 [20,26], [21,22], [21,26], [21,27], [22,23],
 [22,27], [24,25], [25,26], [26,27]
 ];

 const lineGroup = createSvgElement("g", {
 class: "mi-neural-lines"
 });

 const pulseGroup = createSvgElement("g", {
 class: "mi-neural-pulses"
 });

 connections.forEach(([startIndex, endIndex], index) => {
 const [x1, y1] = nodes[startIndex];
 const [x2, y2] = nodes[endIndex];

 lineGroup.appendChild(
 createSvgElement("line", {
 x1,
 y1,
 x2,
 y2,
 class:
 index % 3 === 0
 ? "mi-neural-line mi-line-secondary"
 : "mi-neural-line"
 })
 );

 if (index % 5 === 0) {
 const pulse = createSvgElement("line", {
 x1,
 y1,
 x2,
 y2,
 class: "mi-neural-pulse"
 });

 pulse.style.animationDelay = `${(index % 7) * -0.55}s`;
 pulseGroup.appendChild(pulse);
 }
 });

 const nodeGroup = createSvgElement("g", {
 class: "mi-neural-nodes"
 });

 nodes.forEach(([cx, cy], index) => {
 const haloRadius = index % 6 === 0 ? 15 : 10;
 const nodeRadius = index % 6 === 0 ? 4.8 : 3.2;

 const halo = createSvgElement("circle", {
 cx,
 cy,
 r: haloRadius,
 class: "mi-neural-node-halo"
 });

 halo.style.animationDelay = `${(index % 8) * -0.31}s`;

 const node = createSvgElement("circle", {
 cx,
 cy,
 r: nodeRadius,
 class: "mi-neural-node"
 });

 node.style.animationDelay = `${(index % 10) * -0.24}s`;

 nodeGroup.appendChild(halo);
 nodeGroup.appendChild(node);
 });

 svg.appendChild(lineGroup);
 svg.appendChild(pulseGroup);
 svg.appendChild(nodeGroup);
 };

 const removeOldRobotElements = () => {
 document.querySelectorAll(
 ".intro-robot, .ai-robot, .letter-particles"
 ).forEach((element) => element.remove());
 };

 const removeOldRobotStates = () => {
 const oldStates = [
 "title-transforming",
 "robot-assembling",
 "robot-ready",
 "robot-walking",
 "robot-walking-left"
 ];

 const welcomeScreen = document.getElementById("welcome-screen");

 oldStates.forEach((className) => {
 document.body.classList.remove(className);

 if (welcomeScreen) {
 welcomeScreen.classList.remove(className);
 }
 });
 };

 const cleanup = (neuralIntro) => {
 if (window.__miFinalizeIntro) {
 window.__miFinalizeIntro({ removeWelcomeScreen: false });
 return;
 }

 document.body.classList.remove("intro-active");
 document.body.classList.add("welcome-complete");
 document.documentElement.classList.add("welcome-complete");
 document.documentElement.style.overflow = "";
 document.body.style.overflow = "";

 if (neuralIntro?.isConnected) {
 neuralIntro.remove();
 }

 const welcomeScreen = document.getElementById("welcome-screen");

 if (welcomeScreen?.isConnected) {
 welcomeScreen.remove();
 }
 };

 const runNeuralLogoSequence = async () => {
 const neuralIntro = document.getElementById("mi-neural-intro");
 const networkSvg = document.getElementById("mi-neural-network");

 if (!neuralIntro || neuralIntro.dataset.started === "true") {
 return;
 }

 neuralIntro.dataset.started = "true";

 buildNeuralNetwork(networkSvg);
 removeOldRobotElements();
 removeOldRobotStates();

 document.body.classList.add("intro-active");
 document.documentElement.style.overflow = "hidden";
 document.body.style.overflow = "hidden";

 await sleep(INTRO_START_DELAY);

 neuralIntro.classList.add("mi-neural-visible");

 await sleep(NETWORK_REVEAL_TIME);

 neuralIntro.classList.add("mi-logo-entering");

 await sleep(LOGO_ZOOM_IN_TIME);

 neuralIntro.classList.add("mi-logo-settled");

 await sleep(LOGO_ZOOM_OUT_TIME + LOGO_HOLD_TIME);

 neuralIntro.classList.add("mi-logo-leaving");

 await sleep(LOGO_FADE_TIME);

 neuralIntro.classList.add("mi-neural-exiting");

 const finish = () => cleanup(neuralIntro);

 neuralIntro.addEventListener(
 "transitionend",
 (event) => {
 if (
 event.target === neuralIntro &&
 event.propertyName === "transform"
 ) {
 finish();
 }
 },
 { once: true }
 );

 window.setTimeout(finish, SCREEN_LIFT_TIME + 500);
 };

 const initialize = () => {
 removeOldRobotElements();
 removeOldRobotStates();

 runNeuralLogoSequence().catch((error) => {
 console.error("Neural logo intro failed:", error);

 const neuralIntro = document.getElementById("mi-neural-intro");
 cleanup(neuralIntro);
 });

 window.setTimeout(() => {
 const neuralIntro = document.getElementById("mi-neural-intro");

 if (neuralIntro?.isConnected) {
 cleanup(neuralIntro);
 }
 }, FALLBACK_TIME);
 };

 if (document.readyState === "loading") {
 document.addEventListener("DOMContentLoaded", initialize, {
 once: true
 });
 } else {
 initialize();
 }
})();
/* MI_NEURAL_LOGO_SEQUENCE_END */



/* MI_CORTEX_PRO_CATEGORY_SYSTEM_START */
(() => {
  "use strict";
  if (window.__miCortexCatalogueSystemInitialized) return;
  window.__miCortexCatalogueSystemInitialized = true;
  window.__miCortexHierarchyInitialized = true;

  const company = {
    name: "MI CORTEX X",
    shortDescription: "MI CORTEX X is a Sri Lankan AI and software technology company that develops intelligent digital products and custom technology solutions for businesses, organizations and individuals worldwide.",
    founded: "2026",
    country: "Sri Lanka",
    city: "Colombo",
    website: "https://mi-cortex-x.vercel.app",
    founder: "Respected M.I. Muhammadh",
    email: "micortexx@gmail.com",
    supportEmail: "support.micortexx@gmail.com",
    salesEmail: "sales.cortexx@gmail.com",
    whatsapp: "94756390621",
    telegram: "@MICORTEXX",
    telegramUrl: "https://t.me/MICORTEXX",
    office: "Online operations, Colombo, Sri Lanka",
    businessHours: "Monday to Saturday — 24 hours",
    sunday: "Closed",
    privacyPolicy: "Available",
    terms: "Available",
    languages: "English, Sinhala and Tamil"
  };

  const pageData = {
    home: {
      title: "HOME",
      intro: "A professional overview of MI CORTEX X and the main areas of the business.",
      categories: [
        { id: "hero", title: "HERO", summary: "A clear introduction to MI CORTEX X and its technology direction.", subtopics: [{ title: "Core Message", summary: "A refined company message for modern visitors.", points: ["MI CORTEX X", "Intelligent technology for global businesses", "AI products, software products and custom services"], note: "" }, { title: "Featured Offerings", summary: "The company combines products and services under one professional platform.", points: ["CORTEX CORE AI", "Business systems", "Custom development and support"], note: "" }, { title: "Project Start", summary: "A direct route to request information or a quotation.", points: ["Project requirements", "Preferred timeline", "Quotation request"], note: "" }], status: "" },
        { id: "introduction", title: "COMPANY INTRODUCTION", summary: "A concise overview of the company, its operating model and focus.", subtopics: [{ title: "Company Overview", summary: "MI CORTEX X is a Sri Lankan AI and software technology company founded in 2026.", points: ["Based in Colombo", "Online operations", "Serving clients worldwide"], note: "" }, { title: "Business Focus", summary: "The company focuses on useful and responsible digital development.", points: ["Artificial intelligence", "Web and mobile applications", "Desktop software, APIs and automation"], note: "" }, { title: "Company Motto", summary: "The company message keeps the vision focused on durable innovation.", points: ["Building the future with artificial intelligence."], note: "" }], status: "" },
        { id: "featured-products", title: "FEATURED PRODUCTS", summary: "Selected catalogues and product-ready solutions for modern teams.", subtopics: [{ title: "CORTEX CORE AI", summary: "A next-generation AI platform for business automation.", points: ["Automation", "Customer support", "Web and mobile integration"], note: "" }, { title: "Business Management Suite", summary: "Integrated business operations in one platform.", points: ["CRM", "HRM", "ERP and analytics"], note: "" }, { title: "Custom Solutions", summary: "Reusable products or custom services can be requested through the same workflow.", points: ["Product catalogue", "Service catalogue", "Quotation request"], note: "" }], status: "" },
        { id: "featured-services", title: "FEATURED SERVICES", summary: "Custom development and support services for business requirements.", subtopics: [{ title: "AI Development", summary: "Custom intelligent systems for operations and automation.", points: ["AI integration", "Automation", "Custom workflows"], note: "" }, { title: "Website and App Development", summary: "Professional websites, web apps and mobile apps.", points: ["Responsive design", "SEO-ready structure", "Modern user experience"], note: "" }, { title: "Maintenance and Support", summary: "Ongoing support and system care after delivery.", points: ["Bug fixes", "Updates", "Monitoring"], note: "" }], status: "" },
        { id: "industries", title: "SUPPORTED INDUSTRIES", summary: "MI CORTEX X can support companies across a range of sectors.", subtopics: [{ title: "Education", summary: "Learning systems, portals and automation for education.", points: ["Learning platforms", "Automation", "Operations support"], note: "" }, { title: "Healthcare", summary: "Professional digital systems for healthcare workflows.", points: ["Secure systems", "Patient and admin workflows", "Reliable support"], note: "" }, { title: "Retail and Hospitality", summary: "Digital systems for service, operations and user experience.", points: ["Inventory", "POS", "Booking systems"], note: "" }], status: "" },
        { id: "development-process", title: "DEVELOPMENT PROCESS", summary: "A clear process from consultation to delivery.", subtopics: [{ title: "Consultation", summary: "A free consultation is available to begin the project.", points: ["Requirements", "Scope", "Technology direction"], note: "" }, { title: "Quotation", summary: "A starting estimate is prepared before development begins.", points: ["Delivery plan", "Estimated budget", "Support plan"], note: "" }, { title: "Delivery", summary: "Projects move forward with updates, testing and final support.", points: ["Progress updates", "Testing", "Support after delivery"], note: "" }], status: "" },
        { id: "faq", title: "FAQ", summary: "Common questions and direct answers.", subtopics: [{ title: "Pricing", summary: "Prices are starting estimates and may vary with scope.", points: ["Custom estimates", "Project scope", "Delivery and support"], note: "" }, { title: "Communication", summary: "Clients can connect by email, WhatsApp or Telegram.", points: ["Email", "WhatsApp", "Telegram"], note: "" }, { title: "Support", summary: "Support is available after delivery according to the project agreement.", points: ["30 days free support", "Maintenance available", "Remote support"], note: "" }], status: "" },
        { id: "contact-cta", title: "CONTACT CTA", summary: "A direct contact pathway for inquiries, quotations and support requests.", subtopics: [{ title: "Send an Inquiry", summary: "Use the contact page or the order request flow.", points: ["Email", "WhatsApp", "Telegram"], note: "" }, { title: "Request a Quotation", summary: "Share project details for a professional quotation.", points: ["Requirements", "Timeline", "Budget"], note: "" }, { title: "Support", summary: "Support channels are available to help after delivery.", points: ["Support email", "WhatsApp", "Website contact"], note: "" }], status: "" }
      ]
    },
    about: {
      title: "ABOUT US",
      intro: "A verified company profile, origin story and strategic direction.",
      categories: [
        { id: "company-overview", title: "COMPANY OVERVIEW", summary: "MI CORTEX X is a software and artificial intelligence company focused on building modern digital solutions for businesses worldwide.", subtopics: [{ title: "Company Profile", summary: "The company combines product thinking with custom software delivery.", points: ["Sri Lankan origin", "Online operations", "International focus"], note: "" }, { title: "Founder and CEO", summary: "Founder and CEO Respected M.I. Muhammadh leads the business.", points: ["Business strategy", "Technology oversight", "Client focus"], note: "" }, { title: "Operating Model", summary: "The company operates online with a distributed delivery approach.", points: ["Remote operations", "Global clients", "Flexible support"], note: "" }], status: "" },
        { id: "our-story", title: "OUR STORY", summary: "The company story focuses on practical innovation and meaningful technology delivery.", subtopics: [{ title: "Origin Story", summary: "The company was created to deliver reliable AI and software solutions.", points: ["Digital transformation", "Product innovation", "Client-first work"], note: "" }, { title: "Long-Term Focus", summary: "The aim is to build sustainable digital capabilities for business growth.", points: ["Innovation", "Reliability", "Global reach"], note: "" }, { title: "Values", summary: "The team works with honesty, quality and collaboration.", points: ["Quality", "Integrity", "Customer success"], note: "" }], status: "" },
        { id: "mission", title: "MISSION", summary: "To empower businesses through innovative, reliable and intelligent technology solutions.", subtopics: [{ title: "Mission", summary: "Build useful tools that improve operations, service and growth.", points: ["Reliable systems", "Modern technology", "Practical delivery"], note: "" }, { title: "Vision", summary: "To become a globally recognized AI and software technology company.", points: ["Global expansion", "World-class products", "Strategic growth"], note: "" }, { title: "Future Goals", summary: "Continue expanding the product and service portfolio.", points: ["AI products", "Global customers", "Long-term development"], note: "" }], status: "" },
        { id: "leadership", title: "LEADERSHIP", summary: "The founder and leadership team directs the company strategy and delivery model.", subtopics: [{ title: "Founder and CEO", summary: "Respected M.I. Muhammadh leads the company’s direction.", points: ["Product strategy", "Technology planning", "Client relationship management"], note: "" }, { title: "Operating Principles", summary: "The company continues to learn, improve and deliver with integrity.", points: ["Continuous learning", "Customer success", "Quality focus"], note: "" }, { title: "Research Direction", summary: "The company works across AI, automation and cloud systems.", points: ["AI", "Machine learning", "Cloud computing"], note: "" }], status: "" },
        { id: "core-values", title: "CORE VALUES", summary: "The company’s core values guide the work and decisions.", subtopics: [{ title: "Innovation", summary: "The company develops modern solutions with future-ready thinking.", points: ["Creative product design", "Tech-led business solutions", "Strategic growth"], note: "" }, { title: "Quality", summary: "Every project is treated with professionalism, detail and care.", points: ["Reliable delivery", "Clear communication", "Strong execution"], note: "" }, { title: "Integrity", summary: "Transparent work and honest communication remain central to the business.", points: ["Honest estimates", "Clear scope", "No misleading claims"], note: "" }], status: "" }
      ]
    },
    products: {
      title: "PRODUCTS",
      intro: "Browse reusable product solutions for AI, business management and other operational needs.",
      categories: [{ id: "catalogue-overview", title: "CATALOGUE OVERVIEW", summary: "The product catalogue shows reusable solutions that can be configured and delivered to many clients.", subtopics: [{ title: "Reusable products", summary: "Products can be built once and reused across clients.", points: ["CORTEX CORE AI", "Business suites", "Automation platforms"], note: "" }], status: "" }, { id: "product-portfolio", title: "PRODUCT PORTFOLIO", summary: "Product categories include AI products, business systems and automation platforms.", subtopics: [{ title: "Supported areas", summary: "The product catalogue covers AI, business operations and software systems.", points: ["Assistants", "Chatbots", "Business management"], note: "" }], status: "" }]
    },
    services: {
      title: "SERVICES",
      intro: "Browse professional services for custom AI development, application delivery and ongoing support.",
      categories: [{ id: "service-overview", title: "SERVICE OVERVIEW", summary: "The service catalogue shows custom work that is created for a specific client or project.", subtopics: [{ title: "Custom services", summary: "Services include development, integration, design and support.", points: ["AI development", "Website development", "Maintenance and consulting"], note: "" }], status: "" }, { id: "delivery-model", title: "DELIVERY MODEL", summary: "Projects move from consultation through development, testing and support.", subtopics: [{ title: "Collaboration", summary: "The company supports a consultative delivery approach with clear milestones.", points: ["Planning", "Delivery", "Support"], note: "" }], status: "" }]
    },
    pricing: {
      title: "PRICING",
      intro: "Review starting prices for products and services, with custom quotation support.",
      categories: [{ id: "pricing-overview", title: "PRICING OVERVIEW", summary: "Pricing remains flexible for scope, integrations, delivery and support needs.", subtopics: [{ title: "Starting estimates", summary: "All listed prices are starting estimates.", points: ["30% advance", "Before final delivery", "Custom scope adjustments"], note: "" }], status: "" }, { id: "payment-info", title: "PAYMENT INFORMATION", summary: "Payment terms and options are outlined before work begins.", subtopics: [{ title: "Advance and delivery", summary: "The advance is 30% and the balance is due before final delivery.", points: ["30% advance", "Remaining balance before final delivery", "Instalments not currently available"], note: "" }], status: "" }]
    },
    contact: {
      title: "CONTACT",
      intro: "Connect with MI CORTEX X by email, WhatsApp or Telegram for project inquiries and support.",
      categories: [{ id: "contact-info", title: "CONTACT INFORMATION", summary: "Professional contact details for projects, quotations and support.", subtopics: [{ title: "Primary email", summary: "Use the primary address for project and quotation requests.", points: [company.email], note: "" }, { title: "Support email", summary: "Use the support address for technical follow-up and support.", points: [company.supportEmail], note: "" }, { title: "Sales email", summary: "Use the sales address for new business and quotation requests.", points: [company.salesEmail], note: "" }], status: "" }, { id: "whatsapp", title: "WHATSAPP", summary: "Start a direct conversation with the team.", subtopics: [{ title: "WhatsApp", summary: "Send a quick message for project support and quotation requests.", points: ["+94 75 639 0621"], note: "" }], status: "" }, { id: "telegram", title: "TELEGRAM", summary: "Connect through Telegram for project updates or quick questions.", subtopics: [{ title: "Telegram", summary: "Use the official Telegram contact for quick communication.", points: [company.telegram], note: "" }], status: "" }, { id: "office", title: "OFFICE", summary: "The business is operated online from Colombo, Sri Lanka.", subtopics: [{ title: "Office", summary: "Online operations, Colombo, Sri Lanka.", points: [company.office], note: "" }, { title: "Business hours", summary: "The team is available Monday to Saturday, 24 hours.", points: ["Monday to Saturday — 24 hours", "Sunday — Closed"], note: "" }], status: "" }, { id: "inquiry-form", title: "INQUIRY FORM", summary: "Share the project details and a member of the team will contact you.", subtopics: [{ title: "Project inquiry", summary: "The form opens your email client because a dedicated backend is not connected yet.", points: ["Full Name", "Email", "Project requirements", "Preferred deadline"], note: "" }], status: "" }]
    }
  };

  const catalogueData = {
    products: [
      { id: "cortex-core-ai", name: "CORTEX CORE AI", category: "AI Products", description: "A next-generation AI platform designed to automate business operations, provide intelligent customer support, generate content and integrate with websites, mobile applications and enterprise systems.", priceLkr: 45000, prefix: "Starting from", billingPeriod: "", status: "Development", features: ["AI platform", "Business automation", "Website and app integration"], deliveryTime: "7–30 days", supportPeriod: "30 days", route: "#/products/cortex-core-ai", type: "product", note: "Free plan available when released." },
      { id: "mi-business-management-suite", name: "MI Business Management Suite", category: "Business Management Products", description: "A complete business management platform including CRM, HRM, inventory, POS, ERP and analytics.", priceLkr: 80000, prefix: "Starting from", billingPeriod: "", status: "Upcoming", features: ["CRM", "HRM", "Inventory and POS"], deliveryTime: "Custom", supportPeriod: "60 days", route: "#/products/business-suite", type: "product", note: "Professional setup and configuration available." }
    ],
    services: [
      { id: "ai-development", name: "AI Development", category: "AI Development", description: "Custom AI solutions for automation, integrations and intelligent business workflows.", priceLkr: 60000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["AI models", "Automation", "AI integration"], deliveryTime: "7–30 days", supportPeriod: "30 days", route: "#/services/ai-development", type: "service" },
      { id: "ai-chatbot-development", name: "AI Chatbot Development", category: "AI Development", description: "Professional chatbot development for customer support, onboarding and business communication.", priceLkr: 45000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["AI integration", "Business chatbot", "Multilingual support"], deliveryTime: "5–14 days", supportPeriod: "30 days", route: "#/services/ai-chatbot-development", type: "service" },
      { id: "ai-automation", name: "AI Automation", category: "Automation", description: "Workflow automation and AI agent development for modern business operations.", priceLkr: 65000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Workflow automation", "AI agents", "Business automation"], deliveryTime: "7–21 days", supportPeriod: "30 days", route: "#/services/ai-automation", type: "service" },
      { id: "website-development", name: "Website Development", category: "Website Development", description: "Responsive and SEO-ready website development for modern businesses.", priceLkr: 15000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Responsive design", "SEO-ready structure", "Admin options"], deliveryTime: "3–14 days", supportPeriod: "30 days", route: "#/services/website-development", type: "service" },
      { id: "web-application-development", name: "Web Application Development", category: "Web Application Development", description: "Secure and scalable web application development for business platforms.", priceLkr: 50000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Secure login", "Dashboard", "Database"], deliveryTime: "7–30 days", supportPeriod: "30 days", route: "#/services/web-application-development", type: "service" },
      { id: "mobile-app-development", name: "Mobile App Development", category: "Mobile App Development", description: "Android, iOS and cross-platform development for modern mobile experiences.", priceLkr: 85000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Android", "iOS", "Cross-platform"], deliveryTime: "14–45 days", supportPeriod: "30 days", route: "#/services/mobile-app-development", type: "service" },
      { id: "desktop-software-development", name: "Desktop Software Development", category: "Desktop Software Development", description: "Windows and Linux desktop software with secure database support.", priceLkr: 70000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Windows", "Linux", "Database support"], deliveryTime: "10–30 days", supportPeriod: "30 days", route: "#/services/desktop-software-development", type: "service" },
      { id: "enterprise-software", name: "Enterprise Software", category: "Enterprise Software Development", description: "Enterprise-grade software for ERP, CRM, HRM and POS requirements.", priceLkr: 250000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["ERP", "CRM", "HRM and POS"], deliveryTime: "30–90 days", supportPeriod: "90 days", route: "#/services/enterprise-software", type: "service" },
      { id: "api-development", name: "API Development", category: "API Development", description: "REST and GraphQL API development and secure interface delivery.", priceLkr: 30000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["REST", "GraphQL", "Secure APIs"], deliveryTime: "3–10 days", supportPeriod: "30 days", route: "#/services/api-development", type: "service" },
      { id: "api-integration", name: "API Integration", category: "API Integration", description: "Integration with payment services, AI providers and third-party platforms.", priceLkr: 20000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Payment APIs", "AI APIs", "Third-party integrations"], deliveryTime: "2–7 days", supportPeriod: "30 days", route: "#/services/api-integration", type: "service" },
      { id: "cloud-solutions", name: "Cloud Solutions", category: "Cloud and Hosting", description: "Cloud setup and hosting configuration across AWS, Azure and Google Cloud.", priceLkr: 30000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["AWS", "Azure", "Google Cloud"], deliveryTime: "2–10 days", supportPeriod: "30 days", route: "#/services/cloud-solutions", type: "service" },
      { id: "ui-ux-design", name: "UI/UX Design", category: "UI/UX Design", description: "Modern UI and UX design with responsive layouts and interactive prototypes.", priceLkr: 15000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Modern UI", "Responsive design", "Prototype"], deliveryTime: "3–10 days", supportPeriod: "14 days", route: "#/services/ui-ux-design", type: "service" },
      { id: "software-maintenance", name: "Software Maintenance", category: "Maintenance", description: "Ongoing maintenance, bug fixes, updates and monitoring for live systems.", priceLkr: 7500, prefix: "Starting from", billingPeriod: "per month", status: "Available", features: ["Bug fixes", "Updates", "Monitoring"], deliveryTime: "Ongoing", supportPeriod: "Monthly", route: "#/services/software-maintenance", type: "service" },
      { id: "technical-consulting", name: "Technical Consulting", category: "Consultation", description: "Architecture review, planning guidance and technical consultation for your project.", priceLkr: 5000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Technology planning", "Architecture advice", "Project guidance"], deliveryTime: "Same day when available", supportPeriod: "Consultation only", route: "#/services/technical-consulting", type: "service" },
      { id: "custom-software-development", name: "Custom Software Development", category: "Custom Software Development", description: "Fully customized software built around your business process and requirements.", priceLkr: 100000, prefix: "Starting from", billingPeriod: "", status: "Available", features: ["Fully customized solutions", "Scalable architecture", "Project-specific delivery"], deliveryTime: "14–90 days", supportPeriod: "60 days", route: "#/services/custom-software-development", type: "service" }
    ]
  };

  const validPages = ["overview", ...Object.keys(pageData)];
  const esc = (value) => String(value ?? "").replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  const priceFormatter = new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 });
  const state = { currency: "USD", exchangeRate: null, exchangeRateUpdatedAt: null, rateLoading: false, rateError: "", ratePromise: null, filteredType: "all", selectedGroup: "all", search: "", sort: "name", pageSize: 8, visibleCount: 8, modalItem: null, modalReference: null };

  function restoreCachedExchangeRate() {
    try {
      const cachedRate = Number(localStorage.getItem("mcx-rate-value") || "0");
      const cachedTime = Number(localStorage.getItem("mcx-rate-timestamp") || "0");
      const ageHours = (Date.now() - cachedTime) / 3600000;

      if (
        Number.isFinite(cachedRate) &&
        cachedRate > 0 &&
        cachedTime > 0 &&
        ageHours <= 12
      ) {
        state.exchangeRate = cachedRate;
        state.exchangeRateUpdatedAt = new Date(
          cachedTime
        ).toLocaleString("en-LK", {
          dateStyle: "medium",
          timeStyle: "short"
        });
      }
    } catch (error) {
      console.warn("Exchange-rate cache could not be restored.", error);
    }
  }


  function hashState() { const raw = location.hash.replace(/^#/, "") || "overview"; const [pageRaw = "overview", category = "", subtopic = ""] = raw.split("/"); const page = validPages.includes(pageRaw) ? pageRaw : "overview"; return { page, category, subtopic }; }
  function setHash(page, category = "", subtopic = "") { const next = `#${page}${category ? `/${category}` : ""}${subtopic ? `/${subtopic}` : ""}`; if (location.hash === next) route(); else location.hash = next; }
  function getPageTitle(page) { return pageData[page]?.title || "MI CORTEX X"; }
  function categoryById(page, id) { return pageData[page]?.categories.find((item) => item.id === id) || null; }
  function subtopicId(title, index) { return String(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + (index + 1); }
  function getCatalogueItems(page) { if (page === "products") return catalogueData.products; if (page === "services") return catalogueData.services; if (page === "pricing") return [...catalogueData.products, ...catalogueData.services]; return []; }
  function getCatalogueItem(page, slug) { return getCatalogueItems(page).find((item) => item.id === slug) || null; }
  function groupOptions(page) { const groups = Array.from(new Set(getCatalogueItems(page).map((item) => item.category))).sort((a, b) => a.localeCompare(b)); return groups; }
  const usdPriceFormatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function formatLkrPrice(value) {
    return `LKR ${priceFormatter.format(value)}`;
  }

  function formatUsdPrice(value) {
    if (
      !Number.isFinite(state.exchangeRate) ||
      state.exchangeRate <= 0
    ) {
      return state.rateError
        ? "USD temporarily unavailable"
        : "Calculating USD...";
    }

    const usdValue = Number(value) * state.exchangeRate;

    return `USD $${usdValue.toFixed(2)}`;
  }

  function getPriceLabel(item) {
    const prefix = item.prefix || "Starting from";
    const usdPrice = formatUsdPrice(item.priceLkr);
    const lkrPrice = formatLkrPrice(item.priceLkr);
    const billing = item.billingPeriod
      ? ` / ${item.billingPeriod}`
      : "";

    return `${prefix}\n${usdPrice} (\u2248 ${lkrPrice})${billing}`;
  }

  function formatPriceForModal(item) {
    const usdPrice = formatUsdPrice(item.priceLkr);
    const lkrPrice = formatLkrPrice(item.priceLkr);
    const billing = item.billingPeriod
      ? ` / ${item.billingPeriod}`
      : "";

    return `${usdPrice} (\u2248 ${lkrPrice})${billing}`;
  }

  function loadExchangeRate(force = false) {
    const rateKey = "mcx-live-lkr-usd-rate";
    const timestampKey = "mcx-live-lkr-usd-timestamp";
    const cacheLifetime = 12 * 60 * 60 * 1000;

    function updateStatus(message, busy) {
      document
        .querySelectorAll(
          "[data-mcx-rate-status], .mcx-rate-status"
        )
        .forEach((element) => {
          element.textContent = message;
          element.setAttribute(
            "aria-busy",
            busy ? "true" : "false"
          );
        });
    }

    function refreshCurrentCatalogue() {
      const currentPage = hashState().page;

      if (
        ["products", "services", "pricing"].includes(
          currentPage
        )
      ) {
        route(false);
      }
    }

    if (state.ratePromise) {
      return state.ratePromise;
    }

    if (!force) {
      try {
        const cachedRate = Number(
          localStorage.getItem(rateKey) || "0"
        );

        const cachedTime = Number(
          localStorage.getItem(timestampKey) || "0"
        );

        if (
          Number.isFinite(cachedRate) &&
          cachedRate > 0 &&
          cachedRate < 1 &&
          cachedTime > 0 &&
          Date.now() - cachedTime <= cacheLifetime
        ) {
          state.exchangeRate = cachedRate;
          state.exchangeRateUpdatedAt = new Date(
            cachedTime
          ).toLocaleString("en-LK", {
            dateStyle: "medium",
            timeStyle: "short"
          });

          state.rateError = "";

          updateStatus(
            "USD reference rate updated: " +
              state.exchangeRateUpdatedAt,
            false
          );

          return Promise.resolve(cachedRate);
        }
      } catch (error) {
        console.warn(
          "Cached exchange rate could not be read.",
          error
        );
      }
    }

    if (state.rateAttempted && !force) {
      return Promise.resolve(state.exchangeRate);
    }

    state.rateAttempted = true;
    state.rateLoading = true;
    state.rateError = "";

    updateStatus(
      "Updating live LKR to USD reference rate...",
      true
    );

    const sources = [
      {
        url:
          "https://api.frankfurter.dev/v1/latest" +
          "?base=LKR&symbols=USD",

        read(payload) {
          return Number(
            payload &&
            payload.rates &&
            payload.rates.USD
          );
        }
      },
      {
        url:
          "https://cdn.jsdelivr.net/npm/" +
          "@fawazahmed0/currency-api@latest/" +
          "v1/currencies/lkr.json",

        read(payload) {
          return Number(
            payload &&
            payload.lkr &&
            payload.lkr.usd
          );
        }
      },
      {
        url:
          "https://latest.currency-api.pages.dev/" +
          "v1/currencies/lkr.json",

        read(payload) {
          return Number(
            payload &&
            payload.lkr &&
            payload.lkr.usd
          );
        }
      }
    ];

    function fetchRate(sourceItem) {
      const controller = new AbortController();

      const timeoutId = window.setTimeout(() => {
        controller.abort();
      }, 2200);

      return fetch(sourceItem.url, {
        method: "GET",
        cache: "no-store",
        headers: {
          Accept: "application/json"
        },
        signal: controller.signal
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Exchange-rate request failed: " +
                response.status
            );
          }

          return response.json();
        })
        .then((payload) => {
          const rate = sourceItem.read(payload);

          if (
            !Number.isFinite(rate) ||
            rate <= 0 ||
            rate >= 1
          ) {
            throw new Error(
              "Invalid LKR to USD exchange rate."
            );
          }

          return rate;
        })
        .finally(() => {
          window.clearTimeout(timeoutId);
        });
    }

    state.ratePromise = Promise.any(
      sources.map(fetchRate)
    )
      .then((rate) => {
        const updatedTime = Date.now();

        state.exchangeRate = rate;
        state.exchangeRateUpdatedAt = new Date(
          updatedTime
        ).toLocaleString("en-LK", {
          dateStyle: "medium",
          timeStyle: "short"
        });

        state.rateError = "";

        try {
          localStorage.setItem(
            rateKey,
            String(rate)
          );

          localStorage.setItem(
            timestampKey,
            String(updatedTime)
          );
        } catch (error) {
          console.warn(
            "Exchange-rate cache could not be saved.",
            error
          );
        }

        updateStatus(
          "USD reference rate updated: " +
            state.exchangeRateUpdatedAt,
          false
        );

        return rate;
      })
      .catch((error) => {
        console.error(
          "Live USD conversion failed.",
          error
        );

        state.rateError =
          "Live USD estimate is temporarily unavailable.";

        updateStatus(
          state.rateError +
            " Original LKR prices remain unchanged.",
          false
        );

        return null;
      })
      .finally(() => {
        state.rateLoading = false;
        state.ratePromise = null;

        refreshCurrentCatalogue();
      });

    return state.ratePromise;
  }

  function actionMarkup(page, category) { if (page === "contact") { if (category.id === "email") return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${company.email}">SEND EMAIL</a></div>`; if (category.id === "whatsapp") return `<div class="mcx-action-row"><a class="mcx-action" href="https://wa.me/${company.whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`; if (["contact-info", "support", "send-inquiry", "inquiry-form"].includes(category.id)) return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${company.email}">SEND EMAIL</a><a class="mcx-action secondary" href="https://wa.me/${company.whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`; } if (["products", "services", "pricing"].includes(page)) return `<div class="mcx-action-row"><button type="button" class="mcx-action" data-mcx-route="contact/send-inquiry">REQUEST INFORMATION</button></div>`; return ""; }
  function formMarkup() { return `<form class="mcx-form" data-mcx-contact-form><div class="mcx-field"><label>Full Name<input name="fullName" required autocomplete="name"></label></div><div class="mcx-field"><label>Email Address<input name="email" type="email" required autocomplete="email"></label></div><div class="mcx-field"><label>Phone Number (Optional)<input name="phone" type="tel" autocomplete="tel"></label></div><div class="mcx-field"><label>Country<input name="country" required></label></div><div class="mcx-field"><label>Company Name (Optional)<input name="company"></label></div><div class="mcx-field"><label>Project Type<select name="projectType" required><option value="">Select</option><option>AI Development</option><option>AI Chatbot</option><option>Website</option><option>Web Application</option><option>Mobile Application</option><option>Desktop Software</option><option>Business Software</option><option>API or Integration</option><option>Other Custom Project</option></select></label></div><div class="mcx-field"><label>Estimated Budget (Optional)<input name="budget"></label></div><div class="mcx-field"><label>Preferred Deadline<input name="deadline"></label></div><div class="mcx-field full"><label>Project Description<textarea name="description" required></textarea></label></div><label class="mcx-consent"><input type="checkbox" required> I agree to provide these details for receiving a response.</label><p class="mcx-form-note">Submitting opens your email application because a dedicated form backend is not currently connected.</p><button class="mcx-action" type="submit">PREPARE EMAIL INQUIRY</button></form>`; }
  function renderIndex(page) { const host = document.querySelector(`[data-mcx-category-index="${page}"]`); if (!host) return; if (["products", "services", "pricing"].includes(page)) { renderCatalogueIndex(page); return; } host.innerHTML = `<div class="mcx-index-heading"><span class="mcx-index-kicker">CATEGORY DIRECTORY</span><h2>${esc(getPageTitle(page))} CATEGORIES</h2><p>${esc(pageData[page]?.intro || "Select a category to open its subtopics and complete information.")}</p></div><div class="mcx-category-stack">${pageData[page].categories.map((category) => `<button type="button" class="mcx-category-row" data-mcx-category="${page}/${category.id}"><span class="mcx-category-number mcx-category-icon" aria-hidden="true">${mcxGetCategoryIcon(page, category.id)}</span><span class="mcx-category-copy">${category.status ? `<small>${esc(category.status)}</small>` : ""}<strong>${esc(category.title)}</strong><em>${esc(category.summary)}</em></span><span class="mcx-category-arrow" aria-hidden="true">&#8594;</span></button>`).join("")}</div>`; }
  function renderCategory(page, categoryId, activeSubtopic = "") { if (["products", "services", "pricing"].includes(page)) { const item = getCatalogueItem(page, categoryId); if (item) return renderCatalogueDetail(page, item); } const category = categoryById(page, categoryId); const index = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (!category || !index || !detail) return false; index.hidden = true; detail.hidden = false; detail.innerHTML = `<button type="button" class="mcx-back-button" data-mcx-route="${page}">&#8592; ALL ${esc(getPageTitle(page))} CATEGORIES</button><header class="mcx-category-header">${category.status ? `<span class="mcx-status">${esc(category.status)}</span>` : ""}<h2>${esc(category.title)}</h2><p>${esc(category.summary)}</p></header><div class="mcx-subtopic-stack">${category.subtopics.map((topic, indexValue) => { const id = subtopicId(topic.title, indexValue); const open = activeSubtopic === id; return `<article class="mcx-subtopic-item${open ? " open" : ""}"><button type="button" class="mcx-subtopic-button" data-mcx-subtopic="${page}/${category.id}/${id}" aria-expanded="${open}"><span><strong>${esc(topic.title)}</strong><em>${esc(topic.summary)}</em></span><b aria-hidden="true">${open ? "&#8722;" : "+"}</b></button><div class="mcx-subtopic-content"${open ? "" : " hidden"}>${topic.note ? `<p class="mcx-topic-note">${esc(topic.note)}</p>` : ""}<ul>${topic.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul></div></article>`; }).join("")}</div>${category.id === "inquiry-form" ? formMarkup() : ""}${actionMarkup(page, category)}`; detail.focus({ preventScroll: true }); const form = detail.querySelector("[data-mcx-contact-form]"); if (form) form.addEventListener("submit", submitForm); return true; }
  function submitForm(event) { event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return; const data = new FormData(form); const subject = encodeURIComponent(`MI CORTEX X Project Inquiry - ${data.get("projectType") || "Custom Project"}`); const body = encodeURIComponent([`Full Name: ${data.get("fullName") || ""}`, `Email: ${data.get("email") || ""}`, `Phone: ${data.get("phone") || "Not provided"}`, `Country: ${data.get("country") || ""}`, `Company: ${data.get("company") || "Not provided"}`, `Project Type: ${data.get("projectType") || ""}`, `Estimated Budget: ${data.get("budget") || "Not provided"}`, `Preferred Deadline: ${data.get("deadline") || "Not provided"}`, "", "Project Description:", data.get("description") || ""].join("\n")); location.href = `mailto:${company.email}?subject=${subject}&body=${body}`; }
  function renderCatalogueIndex(page) { const host = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (!host) return; host.hidden = false; if (detail) { detail.hidden = true; detail.innerHTML = ""; } const items = getCatalogueItems(page); const groups = groupOptions(page); const filteredItems = getFilteredItems(items); const visibleItems = filteredItems.slice(0, state.visibleCount); host.innerHTML = `<div class="mcx-catalogue-shell"><div class="mcx-catalogue-toolbar"><div class="mcx-catalogue-header"><span class="mcx-index-kicker">PROFESSIONAL CATALOGUE</span><h2>${esc(page === "products" ? "PRODUCTS" : page === "pricing" ? "PRICING" : "SERVICES")}</h2><p>${esc(page === "products" ? "Reusable product solutions for modern operations." : page === "pricing" ? "Starting estimates for products and services with custom quotation support." : "Custom service solutions tailored to each client project.")}</p></div><div class="mcx-catalogue-segment" role="tablist" aria-label="Catalogue type selector"><button type="button" class="mcx-segment-button ${page === "products" ? "active" : ""}" data-mcx-route="products">PRODUCTS</button><button type="button" class="mcx-segment-button ${page === "services" ? "active" : ""}" data-mcx-route="services">SERVICES</button><button type="button" class="mcx-segment-button ${page === "pricing" ? "active" : ""}" data-mcx-route="pricing">PRICING</button></div><div class="mcx-catalogue-controls"><label class="mcx-control-field"><span class="mcx-control-label">Search</span><input type="search" data-mcx-catalogue-search value="${esc(state.search)}" placeholder="Search by name or keyword" /></label><label class="mcx-control-field"><span class="mcx-control-label">Category</span><select data-mcx-catalogue-group><option value="all">All categories</option>${groups.map((group) => `<option value="${esc(group)}" ${state.selectedGroup === group ? "selected" : ""}>${esc(group)}</option>`).join("")}</select></label><label class="mcx-control-field"><span class="mcx-control-label">Type</span><select data-mcx-catalogue-type><option value="all" ${state.filteredType === "all" ? "selected" : ""}>All</option><option value="product" ${state.filteredType === "product" ? "selected" : ""}>Products</option><option value="service" ${state.filteredType === "service" ? "selected" : ""}>Services</option></select></label><label class="mcx-control-field"><span class="mcx-control-label">Sort</span><select data-mcx-catalogue-sort><option value="name" ${state.sort === "name" ? "selected" : ""}>Sort by name</option><option value="price-low" ${state.sort === "price-low" ? "selected" : ""}>Sort by price low to high</option><option value="price-high" ${state.sort === "price-high" ? "selected" : ""}>Sort by price high to low</option></select></label><button type="button" class="mcx-secondary-button" data-mcx-clear-filters>Clear filters</button></div></div><div class="mcx-catalogue-meta"><div class="mcx-catalogue-count">${esc(`${visibleItems.length} of ${filteredItems.length} listed`)}</div><div class="mcx-rate-status" aria-live="polite">${esc(getRateStatusText())}</div></div><div class="mcx-catalogue-grid">${visibleItems.map((item) => `<article class="mcx-catalogue-card"><div class="mcx-card-top"><span class="mcx-card-type">${item.type === "service" ? "Service" : "Product"}</span><span class="mcx-card-status">${esc(item.status || "Available")}</span></div><h3>${esc(item.name)}</h3><p class="mcx-card-category">${esc(item.category)}</p><p class="mcx-card-description">${esc(item.description)}</p><div class="mcx-card-price">${esc(getPriceLabel(item))}</div><div class="mcx-card-meta">${item.billingPeriod ? `<div><strong>Billing:</strong> ${esc(item.billingPeriod)}</div>` : ""}${item.deliveryTime ? `<div><strong>Delivery:</strong> ${esc(item.deliveryTime)}</div>` : ""}${item.supportPeriod ? `<div><strong>Support:</strong> ${esc(item.supportPeriod)}</div>` : ""}</div><ul class="mcx-card-features">${item.features.map((feature) => `<li>${esc(feature)}</li>`).join("")}</ul><div class="mcx-card-actions"><button type="button" class="mcx-secondary-button" data-mcx-catalogue-detail="${page}/${item.id}">View Details</button><button type="button" class="mcx-action" data-mcx-order-item="${page}/${item.id}">Order / Request Quote</button></div></article>`).join("")}</div>${filteredItems.length > state.visibleCount ? `<div class="mcx-catalogue-footer"><button type="button" class="mcx-secondary-button" data-mcx-load-more>Load More</button></div>` : ""}</div>`; }
  function getFilteredItems(items) { let filtered = items.slice(); const search = state.search.trim().toLowerCase(); if (search) filtered = filtered.filter((item) => [item.name, item.description, item.category, ...(item.features || [])].join(" ").toLowerCase().includes(search)); if (state.selectedGroup !== "all") filtered = filtered.filter((item) => item.category === state.selectedGroup); if (state.filteredType === "product") filtered = filtered.filter((item) => item.type !== "service"); if (state.filteredType === "service") filtered = filtered.filter((item) => item.type === "service"); if (state.sort === "price-low") filtered.sort((a, b) => a.priceLkr - b.priceLkr); else if (state.sort === "price-high") filtered.sort((a, b) => b.priceLkr - a.priceLkr); else filtered.sort((a, b) => a.name.localeCompare(b.name)); return filtered; }
  function renderCatalogueDetail(page, item) { const index = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (!index || !detail) return false; index.hidden = true; detail.hidden = false; detail.innerHTML = `<div class="mcx-detail-panel"><button type="button" class="mcx-back-button" data-mcx-route="${page}">&#8592; BACK TO CATALOGUE</button><div class="mcx-detail-grid"><section class="mcx-detail-main"><span class="mcx-index-kicker">${item.type === "service" ? "SERVICE DETAIL" : "PRODUCT DETAIL"}</span><h2>${esc(item.name)}</h2><p class="mcx-card-category">${esc(item.category)}</p><p>${esc(item.description)}</p><div class="mcx-detail-price">${esc(getPriceLabel(item))}</div><p class="mcx-detail-note">Prices are starting estimates and may change according to project scope, features, integrations, delivery requirements, hosting, third-party charges and ongoing support. Tax and third-party provider fees are not included.</p><div class="mcx-detail-meta">${item.status ? `<div><strong>Status:</strong> ${esc(item.status)}</div>` : ""}${item.deliveryTime ? `<div><strong>Delivery:</strong> ${esc(item.deliveryTime)}</div>` : ""}${item.supportPeriod ? `<div><strong>Support:</strong> ${esc(item.supportPeriod)}</div>` : ""}</div><ul class="mcx-card-features">${item.features.map((feature) => `<li>${esc(feature)}</li>`).join("")}</ul><div class="mcx-card-actions"><button type="button" class="mcx-action" data-mcx-order-item="${page}/${item.id}">Order / Request Quote</button></div></section><aside class="mcx-detail-side"><div class="mcx-detail-card"><h3>Business process</h3><ul><li>Free consultation</li><li>Requirement analysis and quotation</li><li>30% advance payment before development</li><li>Testing, remaining payment and final delivery</li></ul></div><div class="mcx-detail-card"><h3>Payment notice</h3><p>Online payments are being configured. Submit an order request and our team will contact you with an approved payment method.</p><p>Refunds: Full refund before project commencement. No refund after project commencement.</p></div></aside></div></div>`; detail.focus({ preventScroll: true }); return true; }
  function getReferenceNumber() { const date = new Date(); const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`; const suffix = Math.random().toString(36).slice(2, 8).toUpperCase(); return `MCX-${stamp}-${suffix}`; }
  function openOrderModal(page, item) { state.modalItem = item; state.modalReference = getReferenceNumber(); const overlay = document.createElement("div"); overlay.className = "mcx-modal-overlay"; overlay.innerHTML = `<div class="mcx-modal" role="dialog" aria-modal="true" aria-labelledby="mcx-modal-title"><button type="button" class="mcx-modal-close" data-mcx-close-modal aria-label="Close order request">&#10005;</button><h2 id="mcx-modal-title">Order request for ${esc(item.name)}</h2><p class="mcx-modal-intro">${esc(item.type === "service" ? "Service request" : "Product request")}</p><div class="mcx-modal-grid"><div class="mcx-modal-column"><p><strong>Selected item:</strong> ${esc(item.name)}</p><p><strong>Type:</strong> ${esc(item.type === "service" ? "Service" : "Product")}</p><p><strong>Currency:</strong> USD estimate with fixed LKR reference</p><p><strong>Estimated price:</strong> ${esc(formatPriceForModal(item))}</p><p><strong>Reference:</strong> ${esc(state.modalReference)}</p></div><div class="mcx-modal-column"><label class="mcx-modal-field"><span>Customer name</span><input name="customerName" required></label><label class="mcx-modal-field"><span>Email address</span><input name="customerEmail" type="email" required></label><label class="mcx-modal-field"><span>WhatsApp number</span><input name="customerWhatsapp" required></label><label class="mcx-modal-field"><span>Country</span><input name="customerCountry" required></label><label class="mcx-modal-field"><span>Business / company</span><input name="customerCompany"></label></div></div><label class="mcx-modal-field full"><span>Required features</span><textarea name="requiredFeatures" rows="3"></textarea></label><label class="mcx-modal-field full"><span>Project description</span><textarea name="projectDescription" rows="4" required></textarea></label><label class="mcx-modal-field full"><span>Preferred delivery date</span><input name="deliveryDate" type="date"></label><label class="mcx-checkbox"><input type="checkbox" name="agreement" required> I agree to share these details for quotation and support follow-up.</label><div class="mcx-payment-box"><h3>Payment options</h3><ul><li>PayPal — Coming Soon</li><li>PayHere — Coming Soon</li><li>Stripe / Card — Coming Soon</li></ul><p>Online payments are being configured. Submit an order request and our team will contact you with an approved payment method.</p></div><div class="mcx-card-actions"><button type="button" class="mcx-action" data-mcx-send-whatsapp>Send via WhatsApp</button><button type="button" class="mcx-secondary-button" data-mcx-send-email>Send via Email</button></div></div>`; document.body.appendChild(overlay); document.body.classList.add("mcx-modal-open"); setTimeout(() => overlay.querySelector("input, textarea, button").focus(), 40); }
  function closeOrderModal() { document.querySelector(".mcx-modal-overlay")?.remove(); document.body.classList.remove("mcx-modal-open"); }
  function sendOrderRequest(mode) { if (!state.modalItem) return; const overlay = document.querySelector(".mcx-modal-overlay"); if (!overlay) return; const fields = overlay.querySelectorAll("input, textarea"); const data = {}; fields.forEach((field) => { if (field.name) data[field.name] = field.value; }); const reference = state.modalReference || getReferenceNumber(); const item = state.modalItem; const body = [`Reference: ${reference}`, `Customer Name: ${data.customerName || "Not provided"}`, `Selected Item: ${item.name}`, `Type: ${item.type === "service" ? "Service" : "Product"}`, "Display Currency: USD estimate with fixed LKR reference", `Estimated Price: ${formatPriceForModal(item)}`, `Requirements: ${data.requiredFeatures || "Not specified"}`, `Project Description: ${data.projectDescription || "No project description provided."}`, `Preferred Delivery Date: ${data.deliveryDate || "Not provided"}`].join("\n"); if (mode === "whatsapp") { window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer"); } else { window.location.href = `mailto:${company.salesEmail}?subject=${encodeURIComponent(`Quotation Request - ${item.name}`)}&body=${encodeURIComponent(body)}`; } const note = document.createElement("p"); note.className = "mcx-request-status"; note.textContent = mode === "whatsapp" ? "Quotation request prepared for WhatsApp follow-up." : "Quotation request prepared for email follow-up."; overlay.querySelector(".mcx-card-actions").insertAdjacentElement("afterend", note); }
  function route(scroll = true) { const { page, category, subtopic } = hashState(); document.querySelectorAll("[data-mcx-page]").forEach((section) => { const active = section.dataset.mcxPage === page; section.classList.toggle("active", active); section.hidden = !active; }); document.querySelectorAll("[data-mcx-page-link]").forEach((link) => link.classList.toggle("active", link.dataset.mcxPageLink === page)); const index = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (["products", "services", "pricing"].includes(page)) { if (category) { const item = getCatalogueItem(page, category); if (item) { renderCatalogueDetail(page, item); } else { if (index) index.hidden = false; if (detail) { detail.hidden = false; detail.innerHTML = `<div class="mcx-not-found"><h2>Not Found</h2><p>The requested catalogue item is not available yet. Please return to the main catalogue and choose another item.</p><button type="button" class="mcx-action" data-mcx-route="${page}">BACK TO CATALOGUE</button></div>`; } } } else { renderCatalogueIndex(page); } } else if (category && renderCategory(page, category, subtopic)) { } else { if (index) index.hidden = false; if (detail) { detail.hidden = true; detail.innerHTML = ""; } renderIndex(page); } if (scroll) { const activePage = document.querySelector(`[data-mcx-page="${page}"]`); const scrollTarget = detail && !detail.hidden ? detail : activePage; if (scrollTarget) { const fixedNavigation = document.querySelector(".site-header") || document.querySelector("header") || document.querySelector("nav"); let navigationOffset = 22; if (fixedNavigation) { const navigationStyle = window.getComputedStyle(fixedNavigation); if (navigationStyle.position === "fixed" || navigationStyle.position === "sticky") navigationOffset = fixedNavigation.getBoundingClientRect().height + 22; } const targetTop = scrollTarget.getBoundingClientRect().top + window.scrollY - navigationOffset; window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: "smooth" }); } } }
  function init() {
    /* MCX_LIVE_DUAL_PRICE_INIT */
    state.currency = "USD";
    loadExchangeRate(false).catch(() => {});
 restoreCachedExchangeRate(); validPages.forEach(renderIndex); document.addEventListener("click", (event) => { const nav = event.target.closest("[data-mcx-page-link]"); if (nav) { event.preventDefault(); setHash(nav.dataset.mcxPageLink); return; } const category = event.target.closest("[data-mcx-category]"); if (category) { const [page, id] = category.dataset.mcxCategory.split("/"); setHash(page, id); return; } const sub = event.target.closest("[data-mcx-subtopic]"); if (sub) { const [page, cat, id] = sub.dataset.mcxSubtopic.split("/"); const current = hashState(); setHash(page, cat, current.subtopic === id ? "" : id); return; } const routeButton = event.target.closest("[data-mcx-route]"); if (routeButton) { const [page, cat = "", subtopicValue = ""] = routeButton.dataset.mcxRoute.split("/"); setHash(page, cat, subtopicValue); return; } const detailButton = event.target.closest("[data-mcx-catalogue-detail]"); if (detailButton) { const [page, slug] = detailButton.dataset.mcxCatalogueDetail.split("/"); setHash(page, slug); return; } const orderButton = event.target.closest("[data-mcx-order-item]"); if (orderButton) { const [page, slug] = orderButton.dataset.mcxOrderItem.split("/"); const item = getCatalogueItem(page, slug); if (item) openOrderModal(page, { ...item, type: page === "services" ? "service" : "product" }); return; } const loadMore = event.target.closest("[data-mcx-load-more]"); if (loadMore) { state.visibleCount += 8; renderCatalogueIndex(hashState().page); return; } const clearFilters = event.target.closest("[data-mcx-clear-filters]"); if (clearFilters) { state.search = ""; state.selectedGroup = "all"; state.filteredType = "all"; state.sort = "name"; state.visibleCount = 8; renderCatalogueIndex(hashState().page); return; } const closeButton = event.target.closest("[data-mcx-close-modal]"); if (closeButton) { closeOrderModal(); } const sendWhatsApp = event.target.closest("[data-mcx-send-whatsapp]"); if (sendWhatsApp) { sendOrderRequest("whatsapp"); return; } const sendEmail = event.target.closest("[data-mcx-send-email]"); if (sendEmail) { sendOrderRequest("email"); return; } }); document.addEventListener("input", (event) => { const searchInput = event.target.closest("[data-mcx-catalogue-search]"); if (searchInput) { state.search = searchInput.value; if (["products", "services", "pricing"].includes(hashState().page)) { state.visibleCount = 8; renderCatalogueIndex(hashState().page); } } }); document.addEventListener("change", (event) => {
    const groupSelect = event.target.closest(
      "[data-mcx-catalogue-group]"
    );

    const typeSelect = event.target.closest(
      "[data-mcx-catalogue-type]"
    );

    const sortSelect = event.target.closest(
      "[data-mcx-catalogue-sort]"
    );

    if (groupSelect || typeSelect || sortSelect) {
      if (groupSelect) {
        state.selectedGroup = groupSelect.value;
      }

      if (typeSelect) {
        state.filteredType = typeSelect.value;
      }

      if (sortSelect) {
        state.sort = sortSelect.value;
      }

      state.visibleCount = 8;
      renderCatalogueIndex(hashState().page);
    }
  });

  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeOrderModal(); }); window.addEventListener("hashchange", () => route()); route(false); loadExchangeRate(false); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();

(() => {
 "use strict";
 if (window.__miCortexHierarchyInitialized) return;
 window.__miCortexHierarchyInitialized = true;

 const data = {"home":{"title":"HOME","intro":"Explore the main areas of MI CORTEX X. Open a category, then select any subtopic to view its full information.","categories":[{"id":"hero","title":"HERO","summary":"A clear introduction to MI CORTEX X and the company's technology direction.","subtopics":[{"title":"Main Message","summary":"The primary company message presented to every visitor.","points":["MI CORTEX X","Building the Future with Artificial Intelligence","AI products, software and custom digital solutions"],"note":""},{"title":"Explore Products","summary":"A direct route to the complete Products category.","points":["CORTEX CORE AI","AI assistants and chatbots","Web, mobile and desktop software"],"note":""},{"title":"Start a Project","summary":"A direct route to contact and project inquiry options.","points":["Project requirements","Preferred timeline","Quotation request"],"note":""}],"status":""},{"id":"introduction","title":"COMPANY INTRODUCTION","summary":"A concise, verified overview of the company and its purpose.","subtopics":[{"title":"Company Overview","summary":"MI CORTEX X is a Sri Lankan AI and software technology startup founded in 2026.","points":["Based in Colombo, Sri Lanka","Online operating model","Worldwide online service"],"note":""},{"title":"Business Focus","summary":"The company focuses on useful and responsible digital development.","points":["Artificial intelligence","Web and mobile applications","Desktop software, APIs and automation"],"note":""},{"title":"Company Motto","summary":"The official company motto communicates the long-term direction.","points":["Building the Future with Artificial Intelligence."],"note":""}],"status":""},{"id":"featured-products","title":"FEATURED PRODUCTS","summary":"Selected product categories with direct access to more detailed information.","subtopics":[{"title":"CORTEX CORE AI","summary":"The official AI assistant of MI CORTEX X.","points":["Company information","Product and service guidance","Initial project inquiry assistance"],"note":""},{"title":"Custom AI Chatbots","summary":"Knowledge-based chatbots for support and information.","points":["FAQ support","Inquiry collection","Human-support redirection"],"note":""},{"title":"Applications and Business Software","summary":"Custom products for modern digital workflows.","points":["Web applications","Mobile applications","Business management software"],"note":""}],"status":""},{"id":"featured-services","title":"FEATURED SERVICES","summary":"Professional development services from planning through deployment.","subtopics":[{"title":"AI Development","summary":"Custom AI features and supported AI integrations.","points":["Feature planning","Prompt and knowledge preparation","Testing and deployment support"],"note":""},{"title":"Application Development","summary":"Responsive applications for web, mobile and desktop.","points":["Frontend and backend","Databases and authentication","Testing and deployment"],"note":""},{"title":"Custom Software","summary":"Requirement-driven software for real users and workflows.","points":["Discovery","Design and development","Documentation and support options"],"note":""}],"status":""},{"id":"industries","title":"INDUSTRIES","summary":"Potential sectors where solutions can be developed.","subtopics":[{"title":"Digital and Professional","summary":"Solutions for technology and professional service needs.","points":["Technology","Professional services","Small and medium businesses"],"note":""},{"title":"Customer-Facing Industries","summary":"Solutions for customer interactions and transactions.","points":["Retail","Hospitality","E-commerce"],"note":""},{"title":"Specialized Sectors","summary":"Potential solutions subject to requirements and responsible implementation.","points":["Education","Healthcare","Finance","Logistics"],"note":"These are potential service areas, not claims of existing major clients."}],"status":""},{"id":"development-process","title":"DEVELOPMENT PROCESS","summary":"A professional eight-stage path from an idea to a supported product.","subtopics":[{"title":"Discovery and Requirements","summary":"Understand the problem, users and required outcomes.","points":["Discovery","Requirement collection","Feasibility review"],"note":""},{"title":"Planning and Design","summary":"Prepare the technical structure and user experience.","points":["Planning","User flows","Responsive interface design"],"note":""},{"title":"Development and Testing","summary":"Implement approved functionality and verify it carefully.","points":["Development","Validation","Responsive and workflow testing"],"note":""},{"title":"Deployment and Support","summary":"Release the approved product and provide agreed support.","points":["Deployment","Health checks","Maintenance options"],"note":""}],"status":""},{"id":"testimonials","title":"CUSTOMER TESTIMONIALS","summary":"A transparent area reserved for verified customer feedback.","subtopics":[{"title":"Verification Policy","summary":"Only genuine, approved customer feedback should be published.","points":["No invented reviews","No fake company names","Permission before publication"],"note":""},{"title":"Current Status","summary":"Verified public testimonials have not been provided yet.","points":["No placeholder quotes are displayed","The section remains honest and ready for future feedback"],"note":""},{"title":"Submit Feedback","summary":"Existing customers can send feedback through official support channels.","points":["Email","WhatsApp","Project-specific feedback"],"note":""}],"status":"VERIFIED FEEDBACK ONLY"},{"id":"faq","title":"FREQUENTLY ASKED QUESTIONS","summary":"Answers to common questions about the company, products and services.","subtopics":[{"title":"Company Questions","summary":"Essential information about MI CORTEX X.","points":["What is MI CORTEX X?","Where does the company operate?","Does the company work internationally?"],"note":""},{"title":"Product and Service Questions","summary":"Guidance before choosing a product or service.","points":["What can be developed?","Can I request a custom solution?","How is project scope confirmed?"],"note":""},{"title":"Quotation and Support","summary":"How to request pricing and receive help.","points":["How do I request a quotation?","Is an initial consultation available?","How do I contact support?"],"note":""}],"status":""},{"id":"contact-cta","title":"CONTACT CTA","summary":"Clear next steps for product information, quotations and project inquiries.","subtopics":[{"title":"View Products","summary":"Explore every product category and its detailed subtopics.","points":["Current projects","Custom products","Planned and research categories"],"note":""},{"title":"Contact MI CORTEX X","summary":"Use verified contact methods to start a discussion.","points":["Email: micortexx@gmail.com","WhatsApp: +94 75 639 0621","Usually responds within 24 hours"],"note":""}],"status":""}]},"about":{"title":"ABOUT US","intro":"Learn about MI CORTEX X through professional categories and detailed subtopics.","categories":[{"id":"company-overview","title":"COMPANY OVERVIEW","summary":"Verified company details and operating information.","subtopics":[{"title":"Identity","summary":"The official company identity and focus.","points":["Company: MI CORTEX X","Type: Artificial Intelligence and Software Technology Company","Established: 2026"],"note":""},{"title":"Leadership","summary":"Current verified leadership information.","points":["Founder: M.I. Muhammadh","CEO: M.I. Muhammadh","Co-founders: None currently listed"],"note":""},{"title":"Operations","summary":"Where and how the company operates.","points":["Colombo, Sri Lanka","Online headquarters","Worldwide online service","Small startup"],"note":""}],"status":""},{"id":"our-story","title":"OUR STORY","summary":"The honest origin and development direction of MI CORTEX X.","subtopics":[{"title":"Beginning","summary":"MI CORTEX X began in 2026 as an independent technology initiative.","points":["Artificial intelligence","Software engineering","Digital innovation"],"note":""},{"title":"Purpose","summary":"The company was created to turn ideas into useful digital products.","points":["AI systems","Websites and applications","Business solutions"],"note":""},{"title":"Growth Approach","summary":"The company aims to grow through real products and customer value.","points":["No invented investment history","No fake awards or partnerships","Long-term product development"],"note":""}],"status":""},{"id":"mission","title":"MISSION","summary":"The purpose that guides company development.","subtopics":[{"title":"Mission Statement","summary":"To develop innovative, reliable, secure and intelligent software that solves real-world problems.","points":["Artificial intelligence","Modern technology","People and business needs"],"note":""},{"title":"Delivery Principles","summary":"How the mission is applied to projects.","points":["Reliability","Security","Usefulness","Clear communication"],"note":""}],"status":""},{"id":"vision","title":"VISION","summary":"The long-term direction of the company.","subtopics":[{"title":"Vision Statement","summary":"To grow into a globally recognized AI and software technology company.","points":["Original products","Useful digital systems","Scalable solutions"],"note":""},{"title":"Global Direction","summary":"Online delivery supports future international growth.","points":["Worldwide reach","Responsible innovation","Quality and security"],"note":""}],"status":""},{"id":"leadership","title":"LEADERSHIP","summary":"Current company leadership and responsibilities.","subtopics":[{"title":"Founder and CEO","summary":"M.I. Muhammadh is the current founder and CEO.","points":["Company vision","Product direction","Business development"],"note":""},{"title":"Technical Direction","summary":"Leadership currently covers major product and technology decisions.","points":["Software development","AI innovation","Future team development"],"note":""},{"title":"Privacy Approach","summary":"Only relevant professional details are displayed.","points":["No unnecessary personal information","Verified role information only"],"note":""}],"status":""},{"id":"core-values","title":"CORE VALUES","summary":"Principles used for products, services and communication.","subtopics":[{"title":"Trust and Integrity","summary":"Honest company information and responsible decisions.","points":["Integrity","Trust","Professionalism"],"note":""},{"title":"Quality and Security","summary":"Build products carefully and protect user interests.","points":["Quality","Security","Responsible technology development"],"note":""},{"title":"Growth and Customers","summary":"Improve continuously while focusing on real customer value.","points":["Innovation","Customer satisfaction","Continuous improvement"],"note":""}],"status":""},{"id":"technologies","title":"TECHNOLOGIES","summary":"Technologies selected according to each project's needs.","subtopics":[{"title":"Programming and Frontend","summary":"Core development technologies.","points":["Python","JavaScript","HTML","CSS"],"note":""},{"title":"Backend and Data","summary":"Suitable runtime and data technologies.","points":["Flask","Node.js","Firebase","SQLite"],"note":""},{"title":"Deployment and Version Control","summary":"Tools used for development and deployment.","points":["Vercel","Git","GitHub"],"note":""},{"title":"AI Services","summary":"Supported AI services where configured.","points":["OpenAI-compatible services","Google Gemini where configured","Groq-supported models where configured"],"note":"Not every technology is used in every project."}],"status":""},{"id":"research","title":"RESEARCH","summary":"Research and development interests for future products.","subtopics":[{"title":"Intelligent Assistance","summary":"Human-centered AI research areas.","points":["AI assistants","AI agents","Knowledge systems"],"note":""},{"title":"Automation and Productivity","summary":"Systems that can reduce repetitive work.","points":["Business automation","Productivity tools","Intelligent software"],"note":""},{"title":"Secure Scalable Platforms","summary":"Technical research goals.","points":["Secure AI integration","Scalable web platforms","Responsible tool integrations"],"note":""}],"status":"RESEARCH AND DEVELOPMENT"},{"id":"timeline","title":"TIMELINE","summary":"Verified company stages without invented achievements.","subtopics":[{"title":"2026","summary":"The company and initial product concepts were established.","points":["MI CORTEX X established","Initial website developed","AI product concepts prepared"],"note":""},{"title":"Current Stage","summary":"Active development and service preparation.","points":["Developing products","Strengthening the website","Preparing customer-focused services"],"note":""},{"title":"Next and Future Stages","summary":"Planned growth based on real progress.","points":["Launch original products","Attract paying customers","Build a professional team","Expand internationally"],"note":""}],"status":""},{"id":"future-goals","title":"FUTURE GOALS","summary":"Long-term product, customer and company goals.","subtopics":[{"title":"Products","summary":"Develop original and subscription-based products.","points":["AI products","Software products","SaaS platforms"],"note":""},{"title":"Customers and Team","summary":"Build sustainable operations.","points":["Local and international customers","Skilled professional team","Improved service delivery"],"note":""},{"title":"Global Brand","summary":"Grow a trusted international technology brand.","points":["Research and development","International markets","Responsible innovation"],"note":""}],"status":""}]},"products":{"title":"PRODUCTS","intro":"Open a product category, then select a subtopic to view use cases, features, users and availability.","categories":[{"id":"cortex-core-ai","title":"CORTEX CORE AI","summary":"Official AI assistant of MI CORTEX X.","subtopics":[{"title":"Overview","summary":"Official AI assistant of MI CORTEX X.","points":["Developer: MI CORTEX X","Availability: Current project; functions depend on the deployed version."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Company information","Product and service guidance","Initial project inquiry assistance"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Company information","Product and service guidance","Initial project inquiry assistance","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Website visitors","Potential customers","Existing customers"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Current project; functions depend on the deployed version."],"note":""}],"status":"CURRENT PROJECT; FUNCTIONS DEPEND ON THE DEPLOYED VERSION."},{"id":"ai-products","title":"AI PRODUCTS","summary":"Custom and planned artificial intelligence product categories.","subtopics":[{"title":"Overview","summary":"Custom and planned artificial intelligence product categories.","points":["Developer: MI CORTEX X","Availability: Custom or planned according to requirements."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["AI productivity tools","AI document assistants","AI customer-support and sales tools"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["AI productivity tools","AI document assistants","AI customer-support and sales tools","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Individuals","Startups","Businesses"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom or planned according to requirements."],"note":""}],"status":"CUSTOM OR PLANNED ACCORDING TO REQUIREMENTS."},{"id":"ai-assistants","title":"AI ASSISTANTS","summary":"Digital assistants for controlled information and workflow guidance.","subtopics":[{"title":"Overview","summary":"Digital assistants for controlled information and workflow guidance.","points":["Developer: MI CORTEX X","Availability: Custom development."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Website assistants","Knowledge assistants","Business and education assistants"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Website assistants","Knowledge assistants","Business and education assistants","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Businesses","Organizations","Education services"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development."],"note":""}],"status":"CUSTOM DEVELOPMENT."},{"id":"ai-chatbots","title":"AI CHATBOTS","summary":"Knowledge-based chatbots for customer information and support.","subtopics":[{"title":"Overview","summary":"Knowledge-based chatbots for customer information and support.","points":["Developer: MI CORTEX X","Availability: Custom development."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["FAQ and company knowledge","Inquiry collection","Product and service recommendations"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["FAQ and company knowledge","Inquiry collection","Product and service recommendations","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Companies","Support teams","Online services"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development."],"note":""}],"status":"CUSTOM DEVELOPMENT."},{"id":"ai-agents","title":"AI AGENTS","summary":"Research category for structured and approved task assistance.","subtopics":[{"title":"Overview","summary":"Research category for structured and approved task assistance.","points":["Developer: MI CORTEX X","Availability: Research and upcoming category."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Structured task completion","Workflow automation","Controlled tool integrations"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Structured task completion","Workflow automation","Controlled tool integrations","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Future business systems","Research projects"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Research and upcoming category."],"note":""}],"status":"RESEARCH AND UPCOMING CATEGORY."},{"id":"web-applications","title":"WEB APPLICATIONS","summary":"Responsive online platforms for business and customer workflows.","subtopics":[{"title":"Overview","summary":"Responsive online platforms for business and customer workflows.","points":["Developer: MI CORTEX X","Availability: Custom development."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Admin dashboards","Customer portals","Booking and management systems"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Admin dashboards","Customer portals","Booking and management systems","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Businesses","Organizations","Service providers"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development."],"note":""}],"status":"CUSTOM DEVELOPMENT."},{"id":"mobile-applications","title":"MOBILE APPLICATIONS","summary":"Mobile products designed for real user and business needs.","subtopics":[{"title":"Overview","summary":"Mobile products designed for real user and business needs.","points":["Developer: MI CORTEX X","Availability: Custom development; store publication is not claimed unless completed."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Business and booking apps","Customer-service apps","Educational and e-commerce apps"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Business and booking apps","Customer-service apps","Educational and e-commerce apps","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Businesses","Startups","Education services"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development; store publication is not claimed unless completed."],"note":""}],"status":"CUSTOM DEVELOPMENT; STORE PUBLICATION IS NOT CLAIMED UNLESS COMPLETED."},{"id":"desktop-software","title":"DESKTOP SOFTWARE","summary":"Windows and offline software for local business workflows.","subtopics":[{"title":"Overview","summary":"Windows and offline software for local business workflows.","points":["Developer: MI CORTEX X","Availability: Custom development."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Inventory and billing tools","Administrative applications","Offline data systems"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Inventory and billing tools","Administrative applications","Offline data systems","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Small businesses","Administrative teams","Offline operations"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development."],"note":""}],"status":"CUSTOM DEVELOPMENT."},{"id":"enterprise-software","title":"ENTERPRISE SOFTWARE","summary":"Requirement-driven organizational systems.","subtopics":[{"title":"Overview","summary":"Requirement-driven organizational systems.","points":["Developer: MI CORTEX X","Availability: Capabilities depend on detailed requirements."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Role-based systems","Department workflows","Reports and internal portals"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Role-based systems","Department workflows","Reports and internal portals","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Organizations","Growing businesses","Multi-user teams"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Capabilities depend on detailed requirements."],"note":""}],"status":"CAPABILITIES DEPEND ON DETAILED REQUIREMENTS."},{"id":"saas-platforms","title":"SAAS PLATFORMS","summary":"Cloud software designed for recurring subscription use.","subtopics":[{"title":"Overview","summary":"Cloud software designed for recurring subscription use.","points":["Developer: MI CORTEX X","Availability: Planned or custom; unreleased products are marked upcoming."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["AI chatbot platform","Booking or management platform","Productivity and support platform"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["AI chatbot platform","Booking or management platform","Productivity and support platform","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Businesses","Service providers","Future subscribers"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Planned or custom; unreleased products are marked upcoming."],"note":""}],"status":"PLANNED OR CUSTOM; UNRELEASED PRODUCTS ARE MARKED UPCOMING."},{"id":"apis","title":"APIS","summary":"Custom interfaces connecting applications, data and supported services.","subtopics":[{"title":"Overview","summary":"Custom interfaces connecting applications, data and supported services.","points":["Developer: MI CORTEX X","Availability: Custom development."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["REST APIs","Authentication APIs","AI and third-party integrations"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["REST APIs","Authentication APIs","AI and third-party integrations","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Developers","Businesses","Platform owners"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development."],"note":""}],"status":"CUSTOM DEVELOPMENT."},{"id":"automation","title":"AI AUTOMATION TOOLS","summary":"Controlled automation for repetitive and information-based workflows.","subtopics":[{"title":"Overview","summary":"Controlled automation for repetitive and information-based workflows.","points":["Developer: MI CORTEX X","Availability: Custom development."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["Customer-response automation","Document and data processing","Notifications and lead collection"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["Customer-response automation","Document and data processing","Notifications and lead collection","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Businesses","Support teams","Operations teams"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development."],"note":""}],"status":"CUSTOM DEVELOPMENT."},{"id":"business-solutions","title":"BUSINESS SOLUTIONS","summary":"Software designed around business management needs.","subtopics":[{"title":"Overview","summary":"Software designed around business management needs.","points":["Developer: MI CORTEX X","Availability: Custom development."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["CRM and customer portals","Inventory and appointment systems","Billing, employee and reporting systems"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["CRM and customer portals","Inventory and appointment systems","Billing, employee and reporting systems","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Small and medium businesses","Service organizations","Operations teams"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Custom development."],"note":""}],"status":"CUSTOM DEVELOPMENT."},{"id":"upcoming-products","title":"UPCOMING PRODUCTS","summary":"Planned product concepts and research directions.","subtopics":[{"title":"Overview","summary":"Planned product concepts and research directions.","points":["Developer: MI CORTEX X","Availability: Planned, in research, in development or coming soon; no fake dates."],"note":""},{"title":"Use Cases","summary":"Ways this product category may be used.","points":["AI productivity tools","AI agents and enterprise AI","Automation and subscription-based SaaS"],"note":""},{"title":"Key Features","summary":"Features are selected according to the approved requirements.","points":["AI productivity tools","AI agents and enterprise AI","Automation and subscription-based SaaS","Responsive and professional interface","Testing and controlled deployment"],"note":""},{"title":"Intended Users","summary":"Potential users for this category.","points":["Future users","Early product inquiries","Research partners"],"note":""},{"title":"Availability and Inquiry","summary":"Current availability and the next step.","points":["Request information through Contact","Final capabilities depend on project requirements","Planned, in research, in development or coming soon; no fake dates."],"note":""}],"status":"PLANNED, IN RESEARCH, IN DEVELOPMENT OR COMING SOON; NO FAKE DATES."}]},"services":{"title":"SERVICES","intro":"Open a service category, then explore included work, suitable customers and delivery stages.","categories":[{"id":"ai-development","title":"AI DEVELOPMENT","summary":"Professional ai development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides ai development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["AI feature planning","Supported AI API integration","Knowledge-base preparation","Testing and deployment support"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"chatbot-development","title":"AI CHATBOT DEVELOPMENT","summary":"Professional ai chatbot development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides ai chatbot development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Company and support chatbots","FAQ and knowledge integration","Lead collection","Human-support redirection"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"automation","title":"AI AUTOMATION","summary":"Professional ai automation tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides ai automation according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Workflow analysis","API-based automation","Data processing","Testing and monitoring"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"website-development","title":"WEBSITE DEVELOPMENT","summary":"Professional website development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides website development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Company and business websites","Responsive design","Contact forms and basic SEO","Deployment"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"web-apps","title":"WEB APPLICATION DEVELOPMENT","summary":"Professional web application development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides web application development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Frontend and backend","Authentication and databases","Dashboards, portals and APIs","Deployment"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"mobile-apps","title":"MOBILE APP DEVELOPMENT","summary":"Professional mobile app development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides mobile app development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Mobile UI design","Backend integration","Authentication and notifications where supported","Testing and deployment assistance"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"desktop-software","title":"DESKTOP SOFTWARE DEVELOPMENT","summary":"Professional desktop software development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides desktop software development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Windows applications","Offline workflows","Local databases","Administrative tools"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"enterprise-solutions","title":"ENTERPRISE SOFTWARE DEVELOPMENT","summary":"Professional enterprise software development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides enterprise software development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Requirement analysis","Roles and department workflows","Dashboards and reports","Integrations and maintenance options"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"cloud","title":"CLOUD SOLUTIONS","summary":"Professional cloud solutions tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides cloud solutions according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Website and application deployment","Environment configuration","Domain connection","Health checks and troubleshooting"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"api-integration","title":"API DEVELOPMENT AND INTEGRATION","summary":"Professional api development and integration tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides api development and integration according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["REST API design","Authentication and validation","AI, email and notification integrations","Documentation and testing"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"ui-ux","title":"UI/UX DESIGN","summary":"Professional ui/ux design tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides ui/ux design according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["User-flow planning","Wireframes and visual design","Responsive layouts","Accessibility and mobile usability"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"maintenance","title":"SOFTWARE MAINTENANCE","summary":"Professional software maintenance tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides software maintenance according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Bug investigation","Approved updates","Performance and security improvements","Deployment and technical assistance"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"technical-consulting","title":"TECHNICAL CONSULTING","summary":"Professional technical consulting tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides technical consulting according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Product planning","Technology selection","Architecture guidance","Development roadmaps"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""},{"id":"custom-software","title":"CUSTOM SOFTWARE DEVELOPMENT","summary":"Professional custom software development tailored to real project requirements.","subtopics":[{"title":"Service Overview","summary":"MI CORTEX X provides custom software development according to approved requirements.","points":["Custom project planning","Clear scope and limitations","Professional delivery"],"note":""},{"title":"What Is Included","summary":"Core activities available within this service.","points":["Discovery and requirements","Interface design and development","Testing and deployment","Documentation and support options"],"note":""},{"title":"Suitable Customers","summary":"Customers who may benefit from this service.","points":["Individuals and startups","Small and medium businesses","Organizations with defined requirements"],"note":""},{"title":"Development Process","summary":"The project follows a structured delivery process.","points":["Discovery","Requirements","Planning and design","Development","Testing","Deployment","Support options"],"note":""},{"title":"Request a Quote","summary":"Send the real project requirements for a custom quotation.","points":["Project type and features","Expected users and timeline","Required integrations and support"],"note":""}],"status":""}]},"pricing":{"title":"PRICING","intro":"Every option uses custom quotations based on real project requirements.","categories":[{"id":"website-packages","title":"WEBSITE PACKAGES","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Starter Website","Business Website","Advanced Website"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"ai-packages","title":"AI PACKAGES","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["AI Chatbot Package","AI Assistant Package","AI Automation Package","Custom AI Solution"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"enterprise","title":"ENTERPRISE PACKAGES","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Department and user requirements","Permissions and security needs","Integrations and deployment environment"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"maintenance","title":"MAINTENANCE PLANS","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Basic Maintenance","Standard Maintenance","Advanced Maintenance"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"consultation","title":"FREE CONSULTATION","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Project idea","Required features","Expected users","Preferred timeline","Optional budget range"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"custom-solutions","title":"CUSTOM SOLUTIONS","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Project scope","Design complexity","Integrations","AI usage","Hosting and maintenance"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"payment-methods","title":"PAYMENT METHODS","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Bank transfer where confirmed","Approved online payment","Milestone-based project payments"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"faq","title":"PRICING FAQ","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Why exact prices are not displayed","What affects project cost","External API costs","Stage payments and requirement changes"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"},{"id":"request-quote","title":"REQUEST A QUOTE","summary":"Final pricing is prepared from the actual project scope and confirmed in an official quotation.","subtopics":[{"title":"Overview","summary":"No fake fixed price is displayed.","points":["Price label: CUSTOM QUOTE","Quotation based on real requirements"],"note":""},{"title":"Available Options","summary":"Relevant options or quotation factors.","points":["Project type","Required features","Expected users","Preferred deadline","Optional budget range"],"note":""},{"title":"What Affects Cost","summary":"Important pricing factors.","points":["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance","External API costs"],"note":""},{"title":"Next Step","summary":"Send the project information to request a quotation.","points":["Use Contact","Provide clear requirements","Discuss suitable milestones"],"note":""}],"status":"CUSTOM QUOTE"}]},"contact":{"title":"CONTACT","intro":"Choose a contact category and open the relevant method or information.","categories":[{"id":"contact-info","title":"CONTACT INFORMATION","summary":"Official business and communication details.","subtopics":[{"title":"Website and Email","summary":"Verified online contact details.","points":["Website: https://mi-cortex-x.vercel.app/","Email: micortexx@gmail.com"],"note":""},{"title":"Phone and WhatsApp","summary":"Official contact number.","points":["Phone: +94 75 639 0621","WhatsApp: +94 75 639 0621"],"note":""},{"title":"Location and Hours","summary":"Current operating information.","points":["Colombo, Sri Lanka Online Operations","Monday to Sunday, 9:00 AM to 9:00 PM","Sri Lanka time","Usually within 24 hours"],"note":""}],"status":""},{"id":"inquiry-form","title":"INQUIRY FORM","summary":"Prepare a detailed project inquiry using the website form.","subtopics":[{"title":"Required Information","summary":"Information needed for a useful response.","points":["Full name and email","Country and project type","Project description"],"note":""},{"title":"Optional Information","summary":"Useful extra details.","points":["Phone number","Company name","Budget range","Preferred deadline"],"note":""},{"title":"Form Limitation","summary":"Current submission method.","points":["The visitor's email application opens","A dedicated form backend is not currently connected"],"note":""}],"status":""},{"id":"whatsapp","title":"WHATSAPP","summary":"Open the verified WhatsApp contact safely.","subtopics":[{"title":"Official Number","summary":"The official WhatsApp number.","points":["+94 75 639 0621"],"note":""},{"title":"Suggested Message","summary":"Information to include.","points":["Your name","Project or support subject","Clear requirements"],"note":""}],"status":""},{"id":"telegram","title":"TELEGRAM","summary":"Telegram support requires a verified official link.","subtopics":[{"title":"Current Status","summary":"No invalid Telegram username link is displayed.","points":["Contact MI CORTEX X using the official phone number","Confirm the correct Telegram link before use"],"note":""}],"status":""},{"id":"email","title":"EMAIL","summary":"Send an official email inquiry.","subtopics":[{"title":"Official Email","summary":"Verified email address.","points":["micortexx@gmail.com"],"note":""},{"title":"Best Email Content","summary":"Details that improve the response.","points":["Clear subject","Project type","Requirements and timeline"],"note":""}],"status":""},{"id":"office","title":"OFFICE","summary":"Current operating address information.","subtopics":[{"title":"Operating Location","summary":"The company currently operates online.","points":["Colombo, Sri Lanka Online Operations","No unverified street office is displayed"],"note":""}],"status":""},{"id":"business-hours","title":"BUSINESS HOURS","summary":"General business communication hours.","subtopics":[{"title":"Schedule","summary":"Current hours.","points":["Monday to Sunday","9:00 AM to 9:00 PM","Sri Lanka time"],"note":""},{"title":"Response Time","summary":"Typical response target.","points":["Usually within 24 hours"],"note":""}],"status":""},{"id":"support","title":"CUSTOMER SUPPORT","summary":"Support methods and information customers should provide.","subtopics":[{"title":"Support Methods","summary":"Current support channels.","points":["Email","WhatsApp"],"note":""},{"title":"Provide These Details","summary":"Information needed for investigation.","points":["Product or service name","Clear issue description","Screenshots","Browser or device information","Steps to reproduce"],"note":""},{"title":"Coverage","summary":"Support terms.","points":["Depends on the project agreement or maintenance plan"],"note":""}],"status":""},{"id":"social-media","title":"SOCIAL MEDIA","summary":"Official social profiles will be shown after verification.","subtopics":[{"title":"Current Status","summary":"No fake social-media links are displayed.","points":["COMING SOON"],"note":""}],"status":""},{"id":"send-inquiry","title":"SEND AN INQUIRY","summary":"Start a product, service, quotation or partnership inquiry.","subtopics":[{"title":"Accepted Inquiries","summary":"Appropriate inquiry categories.","points":["Custom projects","AI development","Websites and applications","Software systems","Quotations","Partnerships","Product information"],"note":""},{"title":"Recommended Details","summary":"Information to include.","points":["Name and country","Project type","Main requirements","Timeline","Optional budget range"],"note":""}],"status":""}]}};
 const validPages = Object.keys(data);
 const routablePages = ["overview", ...validPages];
 const email = "micortexx@gmail.com";
 const whatsapp = "94756390621";
 const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));

 function hashState() {
 const raw = location.hash.replace(/^#/, "") || "overview";
 const [pageRaw, category = "", subtopic = ""] = raw.split("/");
 const page = routablePages.includes(pageRaw) ? pageRaw : "overview";
 return { page, category, subtopic };
 }

 function setHash(page, category = "", subtopic = "") {
 const next = `#${page}${category ? `/${category}` : ""}${subtopic ? `/${subtopic}` : ""}`;
 if (location.hash === next) route(); else location.hash = next;
 }

 function categoryById(page, id) {
 return data[page]?.categories.find(item => item.id === id) || null;
 }

 function subtopicId(title, index) {
 return `${title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}-${index+1}`;
 }

 function actionMarkup(page, category) {
 if (page === "contact") {
 if (category.id === "email") return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${email}">SEND EMAIL</a></div>`;
 if (category.id === "whatsapp") return `<div class="mcx-action-row"><a class="mcx-action" href="https://wa.me/${whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`;
 if (["contact-info","support","send-inquiry","inquiry-form"].includes(category.id)) return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${email}">SEND EMAIL</a><a class="mcx-action secondary" href="https://wa.me/${whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`;
 }
 if (["products","services","pricing"].includes(page)) return `<div class="mcx-action-row"><button type="button" class="mcx-action" data-mcx-route="contact/send-inquiry">REQUEST INFORMATION</button></div>`;
 return "";
 }

 function formMarkup() {
 return `<form class="mcx-form" data-mcx-contact-form><div class="mcx-field"><label>Full Name<input name="fullName" required autocomplete="name"></label></div><div class="mcx-field"><label>Email Address<input name="email" type="email" required autocomplete="email"></label></div><div class="mcx-field"><label>Phone Number (Optional)<input name="phone" type="tel" autocomplete="tel"></label></div><div class="mcx-field"><label>Country<input name="country" required></label></div><div class="mcx-field"><label>Company Name (Optional)<input name="company"></label></div><div class="mcx-field"><label>Project Type<select name="projectType" required><option value="">Select</option><option>AI Development</option><option>AI Chatbot</option><option>Website</option><option>Web Application</option><option>Mobile Application</option><option>Desktop Software</option><option>Business Software</option><option>API or Integration</option><option>Other Custom Project</option></select></label></div><div class="mcx-field"><label>Estimated Budget (Optional)<input name="budget"></label></div><div class="mcx-field"><label>Preferred Deadline<input name="deadline"></label></div><div class="mcx-field full"><label>Project Description<textarea name="description" required></textarea></label></div><label class="mcx-consent"><input type="checkbox" required> I agree to provide these details for receiving a response.</label><p class="mcx-form-note">Submitting opens your email application because a dedicated form backend is not currently connected.</p><button class="mcx-action" type="submit">PREPARE EMAIL INQUIRY</button></form>`;
 }

 function renderIndex(page) {
 const host = document.querySelector(`[data-mcx-category-index="${page}"]`);
 if (!host) return;
 host.innerHTML = `<div class="mcx-index-heading"><span class="mcx-index-kicker">CATEGORY DIRECTORY</span><h2>${esc(data[page].title)} CATEGORIES</h2><p>Select a category to open its subtopics and complete information.</p></div><div class="mcx-category-stack">${data[page].categories.map((category,index)=>`<button type="button" class="mcx-category-row" data-mcx-category="${page}/${category.id}"><span class="mcx-category-number mcx-category-icon" aria-hidden="true">${mcxGetCategoryIcon(page, category.id)}</span><span class="mcx-category-copy">${category.status?`<small>${esc(category.status)}</small>`:""}<strong>${esc(category.title)}</strong><em>${esc(category.summary)}</em></span><span class="mcx-category-arrow" aria-hidden="true">&#8594;</span></button>`).join("")}</div>`;
 }

 function renderCategory(page, categoryId, activeSubtopic = "") {
 const category = categoryById(page, categoryId);
 const index = document.querySelector(`[data-mcx-category-index="${page}"]`);
 const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`);
 if (!category || !index || !detail) return false;
 index.hidden = true;
 detail.hidden = false;
 detail.innerHTML = `<button type="button" class="mcx-back-button" data-mcx-route="${page}">Â  ALL ${esc(data[page].title)} CATEGORIES</button><header class="mcx-category-header">${category.status?`<span class="mcx-status">${esc(category.status)}</span>`:""}<h2>${esc(category.title)}</h2><p>${esc(category.summary)}</p></header><div class="mcx-subtopic-stack">${category.subtopics.map((topic,index)=>{const id=subtopicId(topic.title,index),open=activeSubtopic===id;return `<article class="mcx-subtopic-item${open?" open":""}"><button type="button" class="mcx-subtopic-button" data-mcx-subtopic="${page}/${category.id}/${id}" aria-expanded="${open}"><span><strong>${esc(topic.title)}</strong><em>${esc(topic.summary)}</em></span><b aria-hidden="true">${open?";":"+"}</b></button><div class="mcx-subtopic-content"${open?"":" hidden"}>${topic.note?`<p class="mcx-topic-note">${esc(topic.note)}</p>`:""}<ul>${topic.points.map(point=>`<li>${esc(point)}</li>`).join("")}</ul></div></article>`}).join("")}</div>${category.id==="inquiry-form"?formMarkup():""}${actionMarkup(page,category)}`;
 detail.focus({preventScroll:true});
 const form = detail.querySelector("[data-mcx-contact-form]");
 if (form) form.addEventListener("submit", submitForm);
 return true;
 }

 function submitForm(event) {
 event.preventDefault();
 const form = event.currentTarget;
 if (!form.reportValidity()) return;
 const d = new FormData(form);
 const subject = encodeURIComponent(`MI CORTEX X Project Inquiry - ${d.get("projectType") || "Custom Project"}`);
 const body = encodeURIComponent([`Full Name: ${d.get("fullName") || ""}`,`Email: ${d.get("email") || ""}`,`Phone: ${d.get("phone") || "Not provided"}`,`Country: ${d.get("country") || ""}`,`Company: ${d.get("company") || "Not provided"}`,`Project Type: ${d.get("projectType") || ""}`,`Estimated Budget: ${d.get("budget") || "Not provided"}`,`Preferred Deadline: ${d.get("deadline") || "Not provided"}`,"","Project Description:",d.get("description") || ""].join("\n"));
 location.href = `mailto:${email}?subject=${subject}&body=${body}`;
 }

 function route(scroll = true) {
 const {page, category, subtopic} = hashState();
 document.querySelectorAll("[data-mcx-page]").forEach(section => {
 const active = section.dataset.mcxPage === page;
 section.classList.toggle("active", active);
 section.hidden = !active;
 });
 document.querySelectorAll("[data-mcx-page-link]").forEach(link => link.classList.toggle("active", link.dataset.mcxPageLink === page));
 const index = document.querySelector(`[data-mcx-category-index="${page}"]`);
 const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`);
 if (category && renderCategory(page, category, subtopic)) {}
 else { if(index) index.hidden=false; if(detail){detail.hidden=true;detail.innerHTML="";} }
 if (scroll) {
 /*
 Keep the front page in the website, but do not scroll to it.

 Main navigation:
 HOME -> beginning of the HOME content page
 ABOUT -> beginning of the ABOUT US content page
 PRODUCTS -> beginning of the PRODUCTS content page
 SERVICES -> beginning of the SERVICES content page
 PRICING -> beginning of the PRICING content page
 CONTACT -> beginning of the CONTACT content page

 Category or subtopic:
 Scroll to the opened category detail area.
 */

 const activePage = document.querySelector(
 `[data-mcx-page="${page}"]`
 );

 const scrollTarget =
 category && detail && !detail.hidden
 ? detail
 : activePage;

 if (scrollTarget) {
 const fixedNavigation =
 document.querySelector(".site-header") ||
 document.querySelector("header") ||
 document.querySelector("nav");

 let navigationOffset = 22;

 if (fixedNavigation) {
 const navigationStyle =
 window.getComputedStyle(fixedNavigation);

 if (
 navigationStyle.position === "fixed" ||
 navigationStyle.position === "sticky"
 ) {
 navigationOffset =
 fixedNavigation.getBoundingClientRect().height + 22;
 }
 }

 const targetTop =
 scrollTarget.getBoundingClientRect().top +
 window.scrollY -
 navigationOffset;

 window.scrollTo({
 top: Math.max(0, targetTop),
 left: 0,
 behavior: "smooth"
 });
 }
 }
 }

 function init() {
 validPages.forEach(renderIndex);
 document.addEventListener("click", event => {
 const nav = event.target.closest("[data-mcx-page-link]");
 if (nav) { event.preventDefault(); setHash(nav.dataset.mcxPageLink); return; }
 const category = event.target.closest("[data-mcx-category]");
 if (category) { const [page,id]=category.dataset.mcxCategory.split("/"); setHash(page,id); return; }
 const sub = event.target.closest("[data-mcx-subtopic]");
 if (sub) { const [page,cat,id]=sub.dataset.mcxSubtopic.split("/"); const current=hashState(); setHash(page,cat,current.subtopic===id?"":id); return; }
 const routeButton = event.target.closest("[data-mcx-route]");
 if (routeButton) { const [page,cat="",sub=""] = routeButton.dataset.mcxRoute.split("/"); setHash(page,cat,sub); }
 });
 addEventListener("hashchange", () => route());
 route(false);
 }

 if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once:true}); else init();
})();
/* MI_CORTEX_PRO_CATEGORY_SYSTEM_END */


/* MI_SEMICOLON_TO_MINUS_ICON_START */

(function () {
    "use strict";

    if (window.__mcxSemicolonMinusIconInstalled) {
        return;
    }

    window.__mcxSemicolonMinusIconInstalled = true;

    function replaceSemicolonIcons() {
        document.querySelectorAll(
            "button, span, i, b, [role='button']"
        ).forEach(function (element) {
            if (element.children.length !== 0) {
                return;
            }

            if (element.textContent.trim() !== ";") {
                return;
            }

            element.textContent = "−";
            element.setAttribute("aria-label", "Collapse");
            element.classList.add("mcx-real-minus-icon");
        });
    }

    function refreshIcons() {
        window.setTimeout(replaceSemicolonIcons, 0);
        window.setTimeout(replaceSemicolonIcons, 120);
        window.setTimeout(replaceSemicolonIcons, 400);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            refreshIcons,
            { once: true }
        );
    } else {
        refreshIcons();
    }

    window.addEventListener("load", refreshIcons);
    window.addEventListener("hashchange", refreshIcons);

    document.addEventListener("click", function () {
        refreshIcons();
    });
})();

/* MI_SEMICOLON_TO_MINUS_ICON_END */


