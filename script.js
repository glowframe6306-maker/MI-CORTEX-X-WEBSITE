
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
  const state = { currency: "LKR", exchangeRate: null, exchangeRateUpdatedAt: null, rateLoading: false, rateError: "", ratePromise: null, filteredType: "all", selectedGroup: "all", search: "", sort: "name", pageSize: 8, visibleCount: 8, modalItem: null, modalReference: null };

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

  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeOrderModal(); }); window.addEventListener("hashchange", () => route()); route(false); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
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


