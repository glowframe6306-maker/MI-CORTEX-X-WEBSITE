
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
 const welcomeStage = welcomeScreen? welcomeScreen.querySelector('.welcome-stage'): null;
 const title = welcomeScreen? welcomeScreen.querySelector('.welcome-title'): null;
 const robot = welcomeScreen? welcomeScreen.querySelector('.intro-robot'): null;
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

 if (options.removeWelcomeScreen!== false) {
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
 if (!welcomeScreen ||!welcomeStage ||!title || hasStarted) {
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
 }, reducedMotion? 500: 1400);
 }, 5200);

 fallbackTimer = window.setTimeout(function () {
 removeIntro();
 }, reducedMotion? 7000: 11000);
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
 businessHours: "Monday to Saturday   24 hours",
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
 { id: "leadership", title: "LEADERSHIP", summary: "The founder and leadership team directs the company strategy and delivery model.", subtopics: [{ title: "Founder and CEO", summary: "Respected M.I. Muhammadh leads the companyâ€™s direction.", points: ["Product strategy", "Technology planning", "Client relationship management"], note: "" }, { title: "Operating Principles", summary: "The company continues to learn, improve and deliver with integrity.", points: ["Continuous learning", "Customer success", "Quality focus"], note: "" }, { title: "Research Direction", summary: "The company works across AI, automation and cloud systems.", points: ["AI", "Machine learning", "Cloud computing"], note: "" }], status: "" },
 {
 id: "executive-board",
 title: "EXECUTIVE BOARD",
 summary: "Official executive positions and leadership responsibilities of MI CORTEX X INC.",
 subtopics: [
 {
 title: "Owner",
 summary: "OWNER OF MI CORTEX X INC.",
 points: [
 "OWNER OF MI CORTEX X INC.",
 "M.I. MUHAMMADH"
 ],
 note: "Mohomed Imran Muhammadh is the Owner of MI CORTEX X INC., a Sri Lankan artificial intelligence and software technology company established in 2026. As the owner, he is responsible for defining the company's long-term vision, corporate strategy, business direction and overall growth. He oversees the development of innovative products and technology services while ensuring that every solution delivered by the company reflects high standards of quality, reliability, security and customer satisfaction. With a strong passion for artificial intelligence, software engineering and technological innovation, he is dedicated to transforming ideas into practical digital solutions that create real value for businesses, organizations and individuals. His long-term objective is to establish MI CORTEX X INC. as a globally recognized technology company known for innovation, excellence, professionalism and trust."
 },
 {
 title: "Chairman",
 summary: "CHAIRMAN OF MI CORTEX X INC.",
 points: [
 "CHAIRMAN OF MI CORTEX X INC.",
 "M.I. MUHAMMADH"
 ],
 note: "As the Chairman of MI CORTEX X INC., Mohomed Imran Muhammadh provides strategic leadership and corporate governance while guiding the company's long-term vision and future expansion. He is responsible for overseeing major business decisions, setting organizational objectives and ensuring that every area of the company operates in alignment with its mission and values. His leadership emphasizes continuous innovation, responsible technology, sustainable business growth and operational excellence. By promoting modern business practices and forward-thinking strategies, he aims to position MI CORTEX X INC. as a respected technology company capable of competing successfully in both local and international markets."
 },
 {
 title: "Chief Executive Officer (CEO)",
 summary: "CHIEF EXECUTIVE OFFICER (CEO) OF MI CORTEX X INC.",
 points: [
 "CHIEF EXECUTIVE OFFICER (CEO) OF MI CORTEX X INC.",
 "M.I. MUHAMMADH"
 ],
 note: "Mohomed Imran Muhammadh serves as the Chief Executive Officer (CEO) of MI CORTEX X INC., leading the company's day-to-day operations, product development, software engineering initiatives and technological innovation. He oversees project planning, business development, research activities, customer engagement and the successful delivery of digital solutions across multiple industries. Driven by a passion for artificial intelligence and emerging technologies, he is committed to developing secure, scalable, reliable and high-quality software products that help businesses improve efficiency, increase productivity and embrace digital transformation. Under his leadership, the company continues to pursue excellence through innovation, professionalism and customer-focused solutions."
 },
 {
 title: "Founder",
 summary: "FOUNDER OF MI CORTEX X INC.",
 points: [
 "FOUNDER OF MI CORTEX X INC.",
 "M.I. MUHAMMADH"
 ],
 note: "Mohomed Imran Muhammadh is the Founder of MI CORTEX X INC., establishing the company in 2026 with a vision of creating advanced artificial intelligence solutions, innovative software products and modern digital services for clients around the world. Inspired by the transformative power of technology, he founded the company to develop intelligent platforms that simplify business operations, improve decision-making and support digital growth across multiple industries. Since its establishment, his vision has remained focused on continuous innovation, research, product excellence and long-term global expansion. He is committed to building MI CORTEX X INC. into an internationally recognized technology brand respected for delivering reliable software, intelligent automation and world-class digital solutions while maintaining high standards of integrity, quality and customer satisfaction."
 }
 ],
 status: ""
 },
 { id: "core-values", title: "CORE VALUES", summary: "The companyâ€™s core values guide the work and decisions.", subtopics: [{ title: "Innovation", summary: "The company develops modern solutions with future-ready thinking.", points: ["Creative product design", "Tech-led business solutions", "Strategic growth"], note: "" }, { title: "Quality", summary: "Every project is treated with professionalism, detail and care.", points: ["Reliable delivery", "Clear communication", "Strong execution"], note: "" }, { title: "Integrity", summary: "Transparent work and honest communication remain central to the business.", points: ["Honest estimates", "Clear scope", "No misleading claims"], note: "" }], status: "" }
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
 premium: { title: "PREMIUM", intro: "Advanced premium solutions for enterprise, automation, infrastructure and professional requirements.", categories: [] },
 contact: {
 title: "CONTACT",
 intro: "Connect with MI CORTEX X by email, WhatsApp or Telegram for project inquiries and support.",
 categories: [{ id: "contact-info", title: "CONTACT INFORMATION", summary: "Professional contact details for projects, quotations and support.", subtopics: [{ title: "Primary email", summary: "Use the primary address for project and quotation requests.", points: [company.email], note: "" }, { title: "Support email", summary: "Use the support address for technical follow-up and support.", points: [company.supportEmail], note: "" }, { title: "Sales email", summary: "Use the sales address for new business and quotation requests.", points: [company.salesEmail], note: "" }], status: "" }, { id: "whatsapp", title: "WHATSAPP", summary: "Start a direct conversation with the team.", subtopics: [{ title: "WhatsApp", summary: "Send a quick message for project support and quotation requests.", points: ["+94 75 639 0621"], note: "" }], status: "" }, { id: "telegram", title: "TELEGRAM", summary: "Connect through Telegram for project updates or quick questions.", subtopics: [{ title: "Telegram", summary: "Use the official Telegram contact for quick communication.", points: [company.telegram], note: "" }], status: "" }, { id: "office", title: "OFFICE", summary: "The business is operated online from Colombo, Sri Lanka.", subtopics: [{ title: "Office", summary: "Online operations, Colombo, Sri Lanka.", points: [company.office], note: "" }, { title: "Business hours", summary: "The team is available Monday to Saturday, 24 hours.", points: ["Monday to Saturday   24 hours", "Sunday   Closed"], note: "" }], status: "" }, { id: "inquiry-form", title: "INQUIRY FORM", summary: "Share the project details and a member of the team will contact you.", subtopics: [{ title: "Project inquiry", summary: "The form opens your email client because a dedicated backend is not connected yet.", points: ["Full Name", "Email", "Project requirements", "Preferred deadline"], note: "" }], status: "" }]
 }
 };

 const catalogueData = {
 premium: [
 {
 "id": "premium-ai-agent-development",
 "name": "AI Agent Development",
 "category": "Premium AI Solutions",
 "description": "Premium AI Agent Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-agent-development",
 "type": "service"
 },
 {
 "id": "premium-autonomous-ai-systems",
 "name": "Autonomous AI Systems",
 "category": "Premium AI Solutions",
 "description": "Premium Autonomous AI Systems solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/autonomous-ai-systems",
 "type": "service"
 },
 {
 "id": "premium-multi-agent-ai-systems",
 "name": "Multi-Agent AI Systems",
 "category": "Premium AI Solutions",
 "description": "Premium Multi-Agent AI Systems solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 220000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/multi-agent-ai-systems",
 "type": "service"
 },
 {
 "id": "premium-voice-ai-receptionist",
 "name": "Voice AI Receptionist",
 "category": "Premium AI Solutions",
 "description": "Premium Voice AI Receptionist solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 85000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/voice-ai-receptionist",
 "type": "service"
 },
 {
 "id": "premium-ai-call-center",
 "name": "AI Call Center",
 "category": "Premium AI Solutions",
 "description": "Premium AI Call Center solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-call-center",
 "type": "service"
 },
 {
 "id": "premium-ai-sales-agent",
 "name": "AI Sales Agent",
 "category": "Premium AI Solutions",
 "description": "Premium AI Sales Agent solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-sales-agent",
 "type": "service"
 },
 {
 "id": "premium-ai-coding-assistant",
 "name": "AI Coding Assistant",
 "category": "Premium AI Solutions",
 "description": "Premium AI Coding Assistant solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-coding-assistant",
 "type": "service"
 },
 {
 "id": "premium-ai-document-processing",
 "name": "AI Document Processing",
 "category": "Premium AI Solutions",
 "description": "Premium AI Document Processing solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-document-processing",
 "type": "service"
 },
 {
 "id": "premium-ai-workflow-automation",
 "name": "AI Workflow Automation",
 "category": "Premium AI Solutions",
 "description": "Premium AI Workflow Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-workflow-automation",
 "type": "service"
 },
 {
 "id": "premium-ai-business-intelligence",
 "name": "AI Business Intelligence",
 "category": "Premium AI Solutions",
 "description": "Premium AI Business Intelligence solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 95000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-business-intelligence",
 "type": "service"
 },
 {
 "id": "premium-ai-analytics-platform",
 "name": "AI Analytics Platform",
 "category": "Premium AI Solutions",
 "description": "Premium AI Analytics Platform solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-analytics-platform",
 "type": "service"
 },
 {
 "id": "premium-ai-knowledge-base",
 "name": "AI Knowledge Base",
 "category": "Premium AI Solutions",
 "description": "Premium AI Knowledge Base solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-knowledge-base",
 "type": "service"
 },
 {
 "id": "premium-ai-search-engine",
 "name": "AI Search Engine",
 "category": "Premium AI Solutions",
 "description": "Premium AI Search Engine solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-search-engine",
 "type": "service"
 },
 {
 "id": "premium-ai-recommendation-system",
 "name": "AI Recommendation System",
 "category": "Premium AI Solutions",
 "description": "Premium AI Recommendation System solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-recommendation-system",
 "type": "service"
 },
 {
 "id": "premium-ai-medical-assistant",
 "name": "AI Medical Assistant",
 "category": "Premium AI Solutions",
 "description": "Premium AI Medical Assistant solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-medical-assistant",
 "type": "service"
 },
 {
 "id": "premium-ai-legal-assistant",
 "name": "AI Legal Assistant",
 "category": "Premium AI Solutions",
 "description": "Premium AI Legal Assistant solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-legal-assistant",
 "type": "service"
 },
 {
 "id": "premium-ai-finance-assistant",
 "name": "AI Finance Assistant",
 "category": "Premium AI Solutions",
 "description": "Premium AI Finance Assistant solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 160000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-finance-assistant",
 "type": "service"
 },
 {
 "id": "premium-ai-hr-assistant",
 "name": "AI HR Assistant",
 "category": "Premium AI Solutions",
 "description": "Premium AI HR Assistant solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-hr-assistant",
 "type": "service"
 },
 {
 "id": "premium-ai-recruitment-system",
 "name": "AI Recruitment System",
 "category": "Premium AI Solutions",
 "description": "Premium AI Recruitment System solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-recruitment-system",
 "type": "service"
 },
 {
 "id": "premium-ai-education-platform",
 "name": "AI Education Platform",
 "category": "Premium AI Solutions",
 "description": "Premium AI Education Platform solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-education-platform",
 "type": "service"
 },
 {
 "id": "premium-saas-development",
 "name": "SaaS Development",
 "category": "Enterprise Platforms",
 "description": "Premium SaaS Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/saas-development",
 "type": "service"
 },
 {
 "id": "premium-crm-development",
 "name": "CRM Development",
 "category": "Enterprise Platforms",
 "description": "Premium CRM Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/crm-development",
 "type": "service"
 },
 {
 "id": "premium-erp-development",
 "name": "ERP Development",
 "category": "Enterprise Platforms",
 "description": "Premium ERP Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 300000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/erp-development",
 "type": "service"
 },
 {
 "id": "premium-hrm-development",
 "name": "HRM Development",
 "category": "Enterprise Platforms",
 "description": "Premium HRM Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/hrm-development",
 "type": "service"
 },
 {
 "id": "premium-pos-development",
 "name": "POS Development",
 "category": "Enterprise Platforms",
 "description": "Premium POS Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/pos-development",
 "type": "service"
 },
 {
 "id": "premium-inventory-software",
 "name": "Inventory Software",
 "category": "Enterprise Platforms",
 "description": "Premium Inventory Software solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/inventory-software",
 "type": "service"
 },
 {
 "id": "premium-accounting-software",
 "name": "Accounting Software",
 "category": "Premium Solutions",
 "description": "Premium Accounting Software solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/accounting-software",
 "type": "service"
 },
 {
 "id": "premium-hospital-erp",
 "name": "Hospital ERP",
 "category": "Enterprise Platforms",
 "description": "Premium Hospital ERP solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 450000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/hospital-erp",
 "type": "service"
 },
 {
 "id": "premium-school-erp",
 "name": "School ERP",
 "category": "Enterprise Platforms",
 "description": "Premium School ERP solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/school-erp",
 "type": "service"
 },
 {
 "id": "premium-hotel-erp",
 "name": "Hotel ERP",
 "category": "Enterprise Platforms",
 "description": "Premium Hotel ERP solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 250000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/hotel-erp",
 "type": "service"
 },
 {
 "id": "premium-custom-web-portal",
 "name": "Custom Web Portal",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Custom Web Portal solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/custom-web-portal",
 "type": "service"
 },
 {
 "id": "premium-client-portal",
 "name": "Client Portal",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Client Portal solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/client-portal",
 "type": "service"
 },
 {
 "id": "premium-employee-portal",
 "name": "Employee Portal",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Employee Portal solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/employee-portal",
 "type": "service"
 },
 {
 "id": "premium-vendor-portal",
 "name": "Vendor Portal",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Vendor Portal solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/vendor-portal",
 "type": "service"
 },
 {
 "id": "premium-supplier-portal",
 "name": "Supplier Portal",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Supplier Portal solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/supplier-portal",
 "type": "service"
 },
 {
 "id": "premium-customer-dashboard",
 "name": "Customer Dashboard",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Customer Dashboard solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/customer-dashboard",
 "type": "service"
 },
 {
 "id": "premium-admin-dashboard",
 "name": "Admin Dashboard",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Admin Dashboard solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/admin-dashboard",
 "type": "service"
 },
 {
 "id": "premium-executive-dashboard",
 "name": "Executive Dashboard",
 "category": "Premium Portals and Dashboards",
 "description": "Premium Executive Dashboard solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/executive-dashboard",
 "type": "service"
 },
 {
 "id": "premium-payment-gateway-integration",
 "name": "Payment Gateway Integration",
 "category": "Business Automation",
 "description": "Premium Payment Gateway Integration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/payment-gateway-integration",
 "type": "service"
 },
 {
 "id": "premium-subscription-billing-system",
 "name": "Subscription Billing System",
 "category": "Business Automation",
 "description": "Premium Subscription Billing System solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/subscription-billing-system",
 "type": "service"
 },
 {
 "id": "premium-invoice-automation",
 "name": "Invoice Automation",
 "category": "Business Automation",
 "description": "Premium Invoice Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/invoice-automation",
 "type": "service"
 },
 {
 "id": "premium-digital-signature-system",
 "name": "Digital Signature System",
 "category": "Business Automation",
 "description": "Premium Digital Signature System solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/digital-signature-system",
 "type": "service"
 },
 {
 "id": "premium-e-commerce-automation",
 "name": "E-Commerce Automation",
 "category": "Business Automation",
 "description": "Premium E-Commerce Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/e-commerce-automation",
 "type": "service"
 },
 {
 "id": "premium-warehouse-automation",
 "name": "Warehouse Automation",
 "category": "Business Automation",
 "description": "Premium Warehouse Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/warehouse-automation",
 "type": "service"
 },
 {
 "id": "premium-cloud-infrastructure",
 "name": "Cloud Infrastructure",
 "category": "Cloud and Deployment",
 "description": "Premium Cloud Infrastructure solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/cloud-infrastructure",
 "type": "service"
 },
 {
 "id": "premium-aws-deployment",
 "name": "AWS Deployment",
 "category": "Cloud and Deployment",
 "description": "Premium AWS Deployment solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/aws-deployment",
 "type": "service"
 },
 {
 "id": "premium-microsoft-azure-deployment",
 "name": "Microsoft Azure Deployment",
 "category": "Cloud and Deployment",
 "description": "Premium Microsoft Azure Deployment solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/microsoft-azure-deployment",
 "type": "service"
 },
 {
 "id": "premium-google-cloud-deployment",
 "name": "Google Cloud Deployment",
 "category": "Cloud and Deployment",
 "description": "Premium Google Cloud Deployment solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/google-cloud-deployment",
 "type": "service"
 },
 {
 "id": "premium-docker-deployment",
 "name": "Docker Deployment",
 "category": "Cloud and Deployment",
 "description": "Premium Docker Deployment solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/docker-deployment",
 "type": "service"
 },
 {
 "id": "premium-kubernetes-deployment",
 "name": "Kubernetes Deployment",
 "category": "Cloud and Deployment",
 "description": "Premium Kubernetes Deployment solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/kubernetes-deployment",
 "type": "service"
 },
 {
 "id": "premium-database-optimization",
 "name": "Database Optimization",
 "category": "Database and Infrastructure",
 "description": "Premium Database Optimization solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/database-optimization",
 "type": "service"
 },
 {
 "id": "premium-database-clustering",
 "name": "Database Clustering",
 "category": "Database and Infrastructure",
 "description": "Premium Database Clustering solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/database-clustering",
 "type": "service"
 },
 {
 "id": "premium-high-availability-setup",
 "name": "High Availability Setup",
 "category": "Database and Infrastructure",
 "description": "Premium High Availability Setup solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/high-availability-setup",
 "type": "service"
 },
 {
 "id": "premium-load-balancer-setup",
 "name": "Load Balancer Setup",
 "category": "Database and Infrastructure",
 "description": "Premium Load Balancer Setup solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/load-balancer-setup",
 "type": "service"
 },
 {
 "id": "premium-cdn-configuration",
 "name": "CDN Configuration",
 "category": "Database and Infrastructure",
 "description": "Premium CDN Configuration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/cdn-configuration",
 "type": "service"
 },
 {
 "id": "premium-cyber-security-audit",
 "name": "Cyber Security Audit",
 "category": "Cyber Security",
 "description": "Premium Cyber Security Audit solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/cyber-security-audit",
 "type": "service"
 },
 {
 "id": "premium-iso-27001-consultation",
 "name": "ISO 27001 Consultation",
 "category": "Cyber Security",
 "description": "Premium ISO 27001 Consultation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/iso-27001-consultation",
 "type": "service"
 },
 {
 "id": "premium-penetration-testing",
 "name": "Penetration Testing",
 "category": "Cyber Security",
 "description": "Premium Penetration Testing solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/penetration-testing",
 "type": "service"
 },
 {
 "id": "premium-soc-setup",
 "name": "SOC Setup",
 "category": "Cyber Security",
 "description": "Premium SOC Setup solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/soc-setup",
 "type": "service"
 },
 {
 "id": "premium-security-monitoring",
 "name": "Security Monitoring",
 "category": "Cyber Security",
 "description": "Premium Security Monitoring solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/security-monitoring",
 "type": "service"
 },
 {
 "id": "premium-disaster-recovery",
 "name": "Disaster Recovery",
 "category": "Cyber Security",
 "description": "Premium Disaster Recovery solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/disaster-recovery",
 "type": "service"
 },
 {
 "id": "premium-iot-solutions",
 "name": "IoT Solutions",
 "category": "IoT Solutions",
 "description": "Premium IoT Solutions solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/iot-solutions",
 "type": "service"
 },
 {
 "id": "premium-smart-home-systems",
 "name": "Smart Home Systems",
 "category": "IoT Solutions",
 "description": "Premium Smart Home Systems solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/smart-home-systems",
 "type": "service"
 },
 {
 "id": "premium-smart-office-systems",
 "name": "Smart Office Systems",
 "category": "IoT Solutions",
 "description": "Premium Smart Office Systems solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/smart-office-systems",
 "type": "service"
 },
 {
 "id": "premium-gps-tracking-system",
 "name": "GPS Tracking System",
 "category": "IoT Solutions",
 "description": "Premium GPS Tracking System solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 85000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/gps-tracking-system",
 "type": "service"
 },
 {
 "id": "premium-fleet-tracking-system",
 "name": "Fleet Tracking System",
 "category": "IoT Solutions",
 "description": "Premium Fleet Tracking System solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/fleet-tracking-system",
 "type": "service"
 },
 {
 "id": "premium-rfid-management",
 "name": "RFID Management",
 "category": "IoT Solutions",
 "description": "Premium RFID Management solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/rfid-management",
 "type": "service"
 },
 {
 "id": "premium-blockchain-development",
 "name": "Blockchain Development",
 "category": "Blockchain Solutions",
 "description": "Premium Blockchain Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 300000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/blockchain-development",
 "type": "service"
 },
 {
 "id": "premium-nft-marketplace",
 "name": "NFT Marketplace",
 "category": "Blockchain Solutions",
 "description": "Premium NFT Marketplace solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 350000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/nft-marketplace",
 "type": "service"
 },
 {
 "id": "premium-crypto-wallet",
 "name": "Crypto Wallet",
 "category": "Blockchain Solutions",
 "description": "Premium Crypto Wallet solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 280000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/crypto-wallet",
 "type": "service"
 },
 {
 "id": "premium-smart-contract-development",
 "name": "Smart Contract Development",
 "category": "Blockchain Solutions",
 "description": "Premium Smart Contract Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/smart-contract-development",
 "type": "service"
 },
 {
 "id": "premium-desktop-software",
 "name": "Desktop Software",
 "category": "Desktop Software",
 "description": "Premium Desktop Software solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/desktop-software",
 "type": "service"
 },
 {
 "id": "premium-windows-software",
 "name": "Windows Software",
 "category": "Desktop Software",
 "description": "Premium Windows Software solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/windows-software",
 "type": "service"
 },
 {
 "id": "premium-mac-software",
 "name": "Mac Software",
 "category": "Desktop Software",
 "description": "Premium Mac Software solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/mac-software",
 "type": "service"
 },
 {
 "id": "premium-linux-software",
 "name": "Linux Software",
 "category": "Desktop Software",
 "description": "Premium Linux Software solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/linux-software",
 "type": "service"
 },
 {
 "id": "premium-browser-extension-development",
 "name": "Browser Extension Development",
 "category": "Browser Extensions",
 "description": "Premium Browser Extension Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/browser-extension-development",
 "type": "service"
 },
 {
 "id": "premium-chrome-extension",
 "name": "Chrome Extension",
 "category": "Browser Extensions",
 "description": "Premium Chrome Extension solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/chrome-extension",
 "type": "service"
 },
 {
 "id": "premium-edge-extension",
 "name": "Edge Extension",
 "category": "Browser Extensions",
 "description": "Premium Edge Extension solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/edge-extension",
 "type": "service"
 },
 {
 "id": "premium-firefox-extension",
 "name": "Firefox Extension",
 "category": "Browser Extensions",
 "description": "Premium Firefox Extension solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/firefox-extension",
 "type": "service"
 },
 {
 "id": "premium-api-development",
 "name": "API Development",
 "category": "API and Integrations",
 "description": "Premium API Development solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/api-development",
 "type": "service"
 },
 {
 "id": "premium-rest-api",
 "name": "REST API",
 "category": "API and Integrations",
 "description": "Premium REST API solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/rest-api",
 "type": "service"
 },
 {
 "id": "premium-graphql-api",
 "name": "GraphQL API",
 "category": "API and Integrations",
 "description": "Premium GraphQL API solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/graphql-api",
 "type": "service"
 },
 {
 "id": "premium-webhook-integration",
 "name": "Webhook Integration",
 "category": "API and Integrations",
 "description": "Premium Webhook Integration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/webhook-integration",
 "type": "service"
 },
 {
 "id": "premium-third-party-integration",
 "name": "Third Party Integration",
 "category": "API and Integrations",
 "description": "Premium Third Party Integration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/third-party-integration",
 "type": "service"
 },
 {
 "id": "premium-automation-systems",
 "name": "Automation Systems",
 "category": "Automation Solutions",
 "description": "Premium Automation Systems solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/automation-systems",
 "type": "service"
 },
 {
 "id": "premium-whatsapp-automation",
 "name": "WhatsApp Automation",
 "category": "Automation Solutions",
 "description": "Premium WhatsApp Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/whatsapp-automation",
 "type": "service"
 },
 {
 "id": "premium-telegram-automation",
 "name": "Telegram Automation",
 "category": "Automation Solutions",
 "description": "Premium Telegram Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/telegram-automation",
 "type": "service"
 },
 {
 "id": "premium-discord-automation",
 "name": "Discord Automation",
 "category": "Automation Solutions",
 "description": "Premium Discord Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/discord-automation",
 "type": "service"
 },
 {
 "id": "premium-email-automation",
 "name": "Email Automation",
 "category": "Automation Solutions",
 "description": "Premium Email Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/email-automation",
 "type": "service"
 },
 {
 "id": "premium-sms-automation",
 "name": "SMS Automation",
 "category": "Automation Solutions",
 "description": "Premium SMS Automation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/sms-automation",
 "type": "service"
 },
 {
 "id": "premium-digital-marketing",
 "name": "Digital Marketing",
 "category": "Digital Growth",
 "description": "Premium Digital Marketing solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/digital-marketing",
 "type": "service"
 },
 {
 "id": "premium-seo",
 "name": "SEO",
 "category": "Digital Growth",
 "description": "Premium SEO solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/seo",
 "type": "service"
 },
 {
 "id": "premium-google-ads",
 "name": "Google Ads",
 "category": "Digital Growth",
 "description": "Premium Google Ads solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/google-ads",
 "type": "service"
 },
 {
 "id": "premium-meta-ads",
 "name": "Meta Ads",
 "category": "Digital Growth",
 "description": "Premium Meta Ads solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/meta-ads",
 "type": "service"
 },
 {
 "id": "premium-social-media-management",
 "name": "Social Media Management",
 "category": "Cyber Security",
 "description": "Premium Social Media Management solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/social-media-management",
 "type": "service"
 },
 {
 "id": "premium-content-writing",
 "name": "Content Writing",
 "category": "Digital Growth",
 "description": "Premium Content Writing solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/content-writing",
 "type": "service"
 },
 {
 "id": "premium-copywriting",
 "name": "Copywriting",
 "category": "Digital Growth",
 "description": "Premium Copywriting solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/copywriting",
 "type": "service"
 },
 {
 "id": "premium-ui-ux-design",
 "name": "UI/UX Design",
 "category": "Design and Creative",
 "description": "Premium UI/UX Design solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ui-ux-design",
 "type": "service"
 },
 {
 "id": "premium-brand-identity",
 "name": "Brand Identity",
 "category": "Design and Creative",
 "description": "Premium Brand Identity solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/brand-identity",
 "type": "service"
 },
 {
 "id": "premium-logo-design",
 "name": "Logo Design",
 "category": "Design and Creative",
 "description": "Premium Logo Design solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/logo-design",
 "type": "service"
 },
 {
 "id": "premium-motion-graphics",
 "name": "Motion Graphics",
 "category": "Design and Creative",
 "description": "Premium Motion Graphics solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/motion-graphics",
 "type": "service"
 },
 {
 "id": "premium-video-editing",
 "name": "Video Editing",
 "category": "Design and Creative",
 "description": "Premium Video Editing solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/video-editing",
 "type": "service"
 },
 {
 "id": "premium-3d-product-design",
 "name": "3D Product Design",
 "category": "Design and Creative",
 "description": "Premium 3D Product Design solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/3d-product-design",
 "type": "service"
 },
 {
 "id": "premium-domain-registration",
 "name": "Domain Registration",
 "category": "Hosting and Maintenance",
 "description": "Premium Domain Registration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 4000,
 "prefix": "Starting from",
 "billingPeriod": "/ Year",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/domain-registration",
 "type": "service"
 },
 {
 "id": "premium-web-hosting",
 "name": "Web Hosting",
 "category": "Hosting and Maintenance",
 "description": "Premium Web Hosting solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "/ Year",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/web-hosting",
 "type": "service"
 },
 {
 "id": "premium-cloud-hosting",
 "name": "Cloud Hosting",
 "category": "Cloud and Deployment",
 "description": "Premium Cloud Hosting solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "/ Year",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/cloud-hosting",
 "type": "service"
 },
 {
 "id": "premium-business-email",
 "name": "Business Email",
 "category": "Hosting and Maintenance",
 "description": "Premium Business Email solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/business-email",
 "type": "service"
 },
 {
 "id": "premium-ssl-certificate",
 "name": "SSL Certificate",
 "category": "Hosting and Maintenance",
 "description": "Premium SSL Certificate solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ssl-certificate",
 "type": "service"
 },
 {
 "id": "premium-website-migration",
 "name": "Website Migration",
 "category": "Hosting and Maintenance",
 "description": "Premium Website Migration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/website-migration",
 "type": "service"
 },
 {
 "id": "premium-website-maintenance",
 "name": "Website Maintenance",
 "category": "Hosting and Maintenance",
 "description": "Premium Website Maintenance solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 7500,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/website-maintenance",
 "type": "service"
 },
 {
 "id": "premium-app-maintenance",
 "name": "App Maintenance",
 "category": "Hosting and Maintenance",
 "description": "Premium App Maintenance solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "/ Month",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/app-maintenance",
 "type": "service"
 },
 {
 "id": "premium-remote-it-support",
 "name": "Remote IT Support",
 "category": "IT and DevOps",
 "description": "Premium Remote IT Support solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 2500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/remote-it-support",
 "type": "service"
 },
 {
 "id": "premium-server-administration",
 "name": "Server Administration",
 "category": "IT and DevOps",
 "description": "Premium Server Administration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/server-administration",
 "type": "service"
 },
 {
 "id": "premium-linux-administration",
 "name": "Linux Administration",
 "category": "IT and DevOps",
 "description": "Premium Linux Administration solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/linux-administration",
 "type": "service"
 },
 {
 "id": "premium-windows-server-management",
 "name": "Windows Server Management",
 "category": "IT and DevOps",
 "description": "Premium Windows Server Management solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/windows-server-management",
 "type": "service"
 },
 {
 "id": "premium-devops-services",
 "name": "DevOps Services",
 "category": "IT and DevOps",
 "description": "Premium DevOps Services solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/devops-services",
 "type": "service"
 },
 {
 "id": "premium-ci-cd-pipeline-setup",
 "name": "CI/CD Pipeline Setup",
 "category": "IT and DevOps",
 "description": "Premium CI/CD Pipeline Setup solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ci-cd-pipeline-setup",
 "type": "service"
 },
 {
 "id": "premium-github-management",
 "name": "GitHub Management",
 "category": "IT and DevOps",
 "description": "Premium GitHub Management solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/github-management",
 "type": "service"
 },
 {
 "id": "premium-consultation-services",
 "name": "Consultation Services",
 "category": "Consultation",
 "description": "Premium Consultation Services solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/consultation-services",
 "type": "service"
 },
 {
 "id": "premium-ai-consultation",
 "name": "AI Consultation",
 "category": "Premium AI Solutions",
 "description": "Premium AI Consultation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 7500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/ai-consultation",
 "type": "service"
 },
 {
 "id": "premium-software-consultation",
 "name": "Software Consultation",
 "category": "Consultation",
 "description": "Premium Software Consultation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 7500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/software-consultation",
 "type": "service"
 },
 {
 "id": "premium-startup-consultation",
 "name": "Startup Consultation",
 "category": "Consultation",
 "description": "Premium Startup Consultation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/startup-consultation",
 "type": "service"
 },
 {
 "id": "premium-digital-transformation-consultation",
 "name": "Digital Transformation Consultation",
 "category": "Consultation",
 "description": "Premium Digital Transformation Consultation solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/digital-transformation-consultation",
 "type": "service"
 },
 {
 "id": "premium-technology-roadmap-planning",
 "name": "Technology Roadmap Planning",
 "category": "Consultation",
 "description": "Premium Technology Roadmap Planning solution from MI CORTEX X, configured according to business scope, integrations, delivery requirements and support needs.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Premium implementation",
 "Custom configuration",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/premium/technology-roadmap-planning",
 "type": "service"
 }
],
 "products": [
 {
 "id": "cortex-core-ai",
 "name": "CORTEX CORE AI",
 "category": "AI Products",
 "description": "A next-generation AI platform designed to automate business operations, provide intelligent customer support, generate content and integrate with websites, mobile applications and enterprise systems.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Development",
 "features": [
 "AI platform",
 "Business automation",
 "Website and app integration"
 ],
 "deliveryTime": "7-30 days",
 "supportPeriod": "30 days",
 "route": "#/products/cortex-core-ai",
 "type": "product",
 "note": "Free plan available when released."
 },
 {
 "id": "mi-business-management-suite",
 "name": "MI Business Management Suite",
 "category": "Business Management Products",
 "description": "A complete business management platform including CRM, HRM, inventory, POS, ERP and analytics.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Upcoming",
 "features": [
 "CRM",
 "HRM",
 "Inventory and POS"
 ],
 "deliveryTime": "Custom",
 "supportPeriod": "60 days",
 "route": "#/products/mi-business-management-suite",
 "type": "product",
 "note": "Professional setup and configuration available."
 },
 {
 "id": "ai-chatbot",
 "name": "AI Chatbot",
 "category": "AI Chatbots",
 "description": "A reusable AI Chatbot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-chatbot",
 "type": "product"
 },
 {
 "id": "business-ai-chatbot",
 "name": "Business AI Chatbot",
 "category": "AI Chatbots",
 "description": "A reusable Business AI Chatbot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/business-ai-chatbot",
 "type": "product"
 },
 {
 "id": "customer-support-ai",
 "name": "Customer Support AI",
 "category": "AI Products",
 "description": "A reusable Customer Support AI solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/customer-support-ai",
 "type": "product"
 },
 {
 "id": "website-ai-assistant",
 "name": "Website AI Assistant",
 "category": "AI Assistants",
 "description": "A reusable Website AI Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/website-ai-assistant",
 "type": "product"
 },
 {
 "id": "whatsapp-ai-bot",
 "name": "WhatsApp AI Bot",
 "category": "AI Chatbots",
 "description": "A reusable WhatsApp AI Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/whatsapp-ai-bot",
 "type": "product"
 },
 {
 "id": "telegram-ai-bot",
 "name": "Telegram AI Bot",
 "category": "AI Chatbots",
 "description": "A reusable Telegram AI Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/telegram-ai-bot",
 "type": "product"
 },
 {
 "id": "facebook-messenger-bot",
 "name": "Facebook Messenger Bot",
 "category": "Business Management Products",
 "description": "A reusable Facebook Messenger Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/facebook-messenger-bot",
 "type": "product"
 },
 {
 "id": "instagram-ai-bot",
 "name": "Instagram AI Bot",
 "category": "AI Chatbots",
 "description": "A reusable Instagram AI Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/instagram-ai-bot",
 "type": "product"
 },
 {
 "id": "discord-ai-bot",
 "name": "Discord AI Bot",
 "category": "AI Chatbots",
 "description": "A reusable Discord AI Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/discord-ai-bot",
 "type": "product"
 },
 {
 "id": "slack-ai-bot",
 "name": "Slack AI Bot",
 "category": "AI Chatbots",
 "description": "A reusable Slack AI Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/slack-ai-bot",
 "type": "product"
 },
 {
 "id": "ai-faq-bot",
 "name": "AI FAQ Bot",
 "category": "AI Chatbots",
 "description": "A reusable AI FAQ Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-faq-bot",
 "type": "product"
 },
 {
 "id": "ai-sales-assistant",
 "name": "AI Sales Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Sales Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-sales-assistant",
 "type": "product"
 },
 {
 "id": "ai-lead-generation-bot",
 "name": "AI Lead Generation Bot",
 "category": "AI Chatbots",
 "description": "A reusable AI Lead Generation Bot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-lead-generation-bot",
 "type": "product"
 },
 {
 "id": "ai-booking-assistant",
 "name": "AI Booking Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Booking Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-booking-assistant",
 "type": "product"
 },
 {
 "id": "ai-appointment-system",
 "name": "AI Appointment System",
 "category": "AI Products",
 "description": "A reusable AI Appointment System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-appointment-system",
 "type": "product"
 },
 {
 "id": "ai-receptionist",
 "name": "AI Receptionist",
 "category": "AI Products",
 "description": "A reusable AI Receptionist solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-receptionist",
 "type": "product"
 },
 {
 "id": "ai-voice-assistant",
 "name": "AI Voice Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Voice Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 95000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-voice-assistant",
 "type": "product"
 },
 {
 "id": "ai-voice-chatbot",
 "name": "AI Voice Chatbot",
 "category": "AI Chatbots",
 "description": "A reusable AI Voice Chatbot solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-voice-chatbot",
 "type": "product"
 },
 {
 "id": "ai-pdf-chat",
 "name": "AI PDF Chat",
 "category": "AI Products",
 "description": "A reusable AI PDF Chat solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-pdf-chat",
 "type": "product"
 },
 {
 "id": "ai-document-analyzer",
 "name": "AI Document Analyzer",
 "category": "AI Products",
 "description": "A reusable AI Document Analyzer solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-document-analyzer",
 "type": "product"
 },
 {
 "id": "ai-resume-builder",
 "name": "AI Resume Builder",
 "category": "AI Products",
 "description": "A reusable AI Resume Builder solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-resume-builder",
 "type": "product"
 },
 {
 "id": "ai-cv-analyzer",
 "name": "AI CV Analyzer",
 "category": "AI Products",
 "description": "A reusable AI CV Analyzer solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-cv-analyzer",
 "type": "product"
 },
 {
 "id": "ai-email-writer",
 "name": "AI Email Writer",
 "category": "AI Products",
 "description": "A reusable AI Email Writer solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-email-writer",
 "type": "product"
 },
 {
 "id": "ai-content-writer",
 "name": "AI Content Writer",
 "category": "AI Products",
 "description": "A reusable AI Content Writer solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-content-writer",
 "type": "product"
 },
 {
 "id": "ai-blog-generator",
 "name": "AI Blog Generator",
 "category": "AI Products",
 "description": "A reusable AI Blog Generator solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-blog-generator",
 "type": "product"
 },
 {
 "id": "ai-news-generator",
 "name": "AI News Generator",
 "category": "AI Products",
 "description": "A reusable AI News Generator solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-news-generator",
 "type": "product"
 },
 {
 "id": "ai-image-generator",
 "name": "AI Image Generator",
 "category": "AI Products",
 "description": "A reusable AI Image Generator solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-image-generator",
 "type": "product"
 },
 {
 "id": "ai-image-caption-generator",
 "name": "AI Image Caption Generator",
 "category": "AI Products",
 "description": "A reusable AI Image Caption Generator solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-image-caption-generator",
 "type": "product"
 },
 {
 "id": "ai-ocr-system",
 "name": "AI OCR System",
 "category": "AI Products",
 "description": "A reusable AI OCR System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-ocr-system",
 "type": "product"
 },
 {
 "id": "ai-translator",
 "name": "AI Translator",
 "category": "AI Products",
 "description": "A reusable AI Translator solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-translator",
 "type": "product"
 },
 {
 "id": "ai-grammar-checker",
 "name": "AI Grammar Checker",
 "category": "AI Products",
 "description": "A reusable AI Grammar Checker solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-grammar-checker",
 "type": "product"
 },
 {
 "id": "ai-code-assistant",
 "name": "AI Code Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Code Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-code-assistant",
 "type": "product"
 },
 {
 "id": "ai-programming-tutor",
 "name": "AI Programming Tutor",
 "category": "AI Products",
 "description": "A reusable AI Programming Tutor solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-programming-tutor",
 "type": "product"
 },
 {
 "id": "ai-school-assistant",
 "name": "AI School Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI School Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-school-assistant",
 "type": "product"
 },
 {
 "id": "ai-hospital-assistant",
 "name": "AI Hospital Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Hospital Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-hospital-assistant",
 "type": "product"
 },
 {
 "id": "ai-hotel-assistant",
 "name": "AI Hotel Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Hotel Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-hotel-assistant",
 "type": "product"
 },
 {
 "id": "ai-restaurant-assistant",
 "name": "AI Restaurant Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Restaurant Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-restaurant-assistant",
 "type": "product"
 },
 {
 "id": "ai-property-assistant",
 "name": "AI Property Assistant",
 "category": "AI Assistants",
 "description": "A reusable AI Property Assistant solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/ai-property-assistant",
 "type": "product"
 },
 {
 "id": "pos-point-of-sale-system",
 "name": "POS (Point of Sale) System",
 "category": "POS Products",
 "description": "A reusable POS (Point of Sale) System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/pos-point-of-sale-system",
 "type": "product"
 },
 {
 "id": "restaurant-pos-system",
 "name": "Restaurant POS System",
 "category": "POS Products",
 "description": "A reusable Restaurant POS System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/restaurant-pos-system",
 "type": "product"
 },
 {
 "id": "retail-pos-system",
 "name": "Retail POS System",
 "category": "AI Products",
 "description": "A reusable Retail POS System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/retail-pos-system",
 "type": "product"
 },
 {
 "id": "pharmacy-pos-system",
 "name": "Pharmacy POS System",
 "category": "POS Products",
 "description": "A reusable Pharmacy POS System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/pharmacy-pos-system",
 "type": "product"
 },
 {
 "id": "supermarket-pos-system",
 "name": "Supermarket POS System",
 "category": "POS Products",
 "description": "A reusable Supermarket POS System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/supermarket-pos-system",
 "type": "product"
 },
 {
 "id": "inventory-management-system",
 "name": "Inventory Management System",
 "category": "Inventory Products",
 "description": "A reusable Inventory Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/inventory-management-system",
 "type": "product"
 },
 {
 "id": "stock-management-system",
 "name": "Stock Management System",
 "category": "Inventory Products",
 "description": "A reusable Stock Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/stock-management-system",
 "type": "product"
 },
 {
 "id": "warehouse-management-system",
 "name": "Warehouse Management System",
 "category": "Inventory Products",
 "description": "A reusable Warehouse Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 85000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/warehouse-management-system",
 "type": "product"
 },
 {
 "id": "asset-management-system",
 "name": "Asset Management System",
 "category": "Business Management Products",
 "description": "A reusable Asset Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/asset-management-system",
 "type": "product"
 },
 {
 "id": "purchase-management-system",
 "name": "Purchase Management System",
 "category": "Business Management Products",
 "description": "A reusable Purchase Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/purchase-management-system",
 "type": "product"
 },
 {
 "id": "sales-management-system",
 "name": "Sales Management System",
 "category": "Business Management Products",
 "description": "A reusable Sales Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/sales-management-system",
 "type": "product"
 },
 {
 "id": "supplier-management-system",
 "name": "Supplier Management System",
 "category": "Business Management Products",
 "description": "A reusable Supplier Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/supplier-management-system",
 "type": "product"
 },
 {
 "id": "customer-management-system",
 "name": "Customer Management System",
 "category": "Business Management Products",
 "description": "A reusable Customer Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/customer-management-system",
 "type": "product"
 },
 {
 "id": "crm-customer-relationship-management",
 "name": "CRM (Customer Relationship Management)",
 "category": "CRM Products",
 "description": "A reusable CRM (Customer Relationship Management) solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/crm-customer-relationship-management",
 "type": "product"
 },
 {
 "id": "erp-enterprise-resource-planning",
 "name": "ERP (Enterprise Resource Planning)",
 "category": "ERP Products",
 "description": "A reusable ERP (Enterprise Resource Planning) solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 250000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/erp-enterprise-resource-planning",
 "type": "product"
 },
 {
 "id": "billing-invoice-system",
 "name": "Billing & Invoice System",
 "category": "Business Management Products",
 "description": "A reusable Billing & Invoice System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/billing-invoice-system",
 "type": "product"
 },
 {
 "id": "quotation-management-system",
 "name": "Quotation Management System",
 "category": "Business Management Products",
 "description": "A reusable Quotation Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/quotation-management-system",
 "type": "product"
 },
 {
 "id": "expense-tracking-system",
 "name": "Expense Tracking System",
 "category": "Business Management Products",
 "description": "A reusable Expense Tracking System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/expense-tracking-system",
 "type": "product"
 },
 {
 "id": "finance-management-system",
 "name": "Finance Management System",
 "category": "Business Management Products",
 "description": "A reusable Finance Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/finance-management-system",
 "type": "product"
 },
 {
 "id": "payroll-management-system",
 "name": "Payroll Management System",
 "category": "Business Management Products",
 "description": "A reusable Payroll Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/payroll-management-system",
 "type": "product"
 },
 {
 "id": "hr-management-system",
 "name": "HR Management System",
 "category": "HRM Products",
 "description": "A reusable HR Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/hr-management-system",
 "type": "product"
 },
 {
 "id": "employee-management-system",
 "name": "Employee Management System",
 "category": "Business Management Products",
 "description": "A reusable Employee Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/employee-management-system",
 "type": "product"
 },
 {
 "id": "attendance-management-system",
 "name": "Attendance Management System",
 "category": "Business Management Products",
 "description": "A reusable Attendance Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/attendance-management-system",
 "type": "product"
 },
 {
 "id": "biometric-attendance-system",
 "name": "Biometric Attendance System",
 "category": "Business Management Products",
 "description": "A reusable Biometric Attendance System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/biometric-attendance-system",
 "type": "product"
 },
 {
 "id": "leave-management-system",
 "name": "Leave Management System",
 "category": "Business Management Products",
 "description": "A reusable Leave Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/leave-management-system",
 "type": "product"
 },
 {
 "id": "recruitment-management-system",
 "name": "Recruitment Management System",
 "category": "Business Management Products",
 "description": "A reusable Recruitment Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/recruitment-management-system",
 "type": "product"
 },
 {
 "id": "performance-evaluation-system",
 "name": "Performance Evaluation System",
 "category": "Business Management Products",
 "description": "A reusable Performance Evaluation System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/performance-evaluation-system",
 "type": "product"
 },
 {
 "id": "school-management-system",
 "name": "School Management System",
 "category": "Education Systems",
 "description": "A reusable School Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/school-management-system",
 "type": "product"
 },
 {
 "id": "student-information-system",
 "name": "Student Information System",
 "category": "Education Systems",
 "description": "A reusable Student Information System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/student-information-system",
 "type": "product"
 },
 {
 "id": "learning-management-system-lms",
 "name": "Learning Management System (LMS)",
 "category": "Education Systems",
 "description": "A reusable Learning Management System (LMS) solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/learning-management-system-lms",
 "type": "product"
 },
 {
 "id": "exam-management-system",
 "name": "Exam Management System",
 "category": "Education Systems",
 "description": "A reusable Exam Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/exam-management-system",
 "type": "product"
 },
 {
 "id": "library-management-system",
 "name": "Library Management System",
 "category": "Education Systems",
 "description": "A reusable Library Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/library-management-system",
 "type": "product"
 },
 {
 "id": "hostel-management-system",
 "name": "Hostel Management System",
 "category": "Business Management Products",
 "description": "A reusable Hostel Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/hostel-management-system",
 "type": "product"
 },
 {
 "id": "fee-management-system",
 "name": "Fee Management System",
 "category": "Business Management Products",
 "description": "A reusable Fee Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/fee-management-system",
 "type": "product"
 },
 {
 "id": "online-admission-system",
 "name": "Online Admission System",
 "category": "Business Management Products",
 "description": "A reusable Online Admission System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/online-admission-system",
 "type": "product"
 },
 {
 "id": "hospital-management-system",
 "name": "Hospital Management System",
 "category": "Healthcare Systems",
 "description": "A reusable Hospital Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/hospital-management-system",
 "type": "product"
 },
 {
 "id": "clinic-management-system",
 "name": "Clinic Management System",
 "category": "Healthcare Systems",
 "description": "A reusable Clinic Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/clinic-management-system",
 "type": "product"
 },
 {
 "id": "patient-management-system",
 "name": "Patient Management System",
 "category": "Healthcare Systems",
 "description": "A reusable Patient Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 85000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/patient-management-system",
 "type": "product"
 },
 {
 "id": "doctor-appointment-system",
 "name": "Doctor Appointment System",
 "category": "Healthcare Systems",
 "description": "A reusable Doctor Appointment System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/doctor-appointment-system",
 "type": "product"
 },
 {
 "id": "laboratory-management-system",
 "name": "Laboratory Management System",
 "category": "Healthcare Systems",
 "description": "A reusable Laboratory Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/laboratory-management-system",
 "type": "product"
 },
 {
 "id": "medical-record-system",
 "name": "Medical Record System",
 "category": "Healthcare Systems",
 "description": "A reusable Medical Record System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/medical-record-system",
 "type": "product"
 },
 {
 "id": "pharmacy-management-system",
 "name": "Pharmacy Management System",
 "category": "Healthcare Systems",
 "description": "A reusable Pharmacy Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 85000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/pharmacy-management-system",
 "type": "product"
 },
 {
 "id": "hotel-management-system",
 "name": "Hotel Management System",
 "category": "Hospitality Systems",
 "description": "A reusable Hotel Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 130000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/hotel-management-system",
 "type": "product"
 },
 {
 "id": "room-booking-system",
 "name": "Room Booking System",
 "category": "Hospitality Systems",
 "description": "A reusable Room Booking System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/room-booking-system",
 "type": "product"
 },
 {
 "id": "restaurant-management-system",
 "name": "Restaurant Management System",
 "category": "Hospitality Systems",
 "description": "A reusable Restaurant Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 85000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/restaurant-management-system",
 "type": "product"
 },
 {
 "id": "resort-management-system",
 "name": "Resort Management System",
 "category": "Hospitality Systems",
 "description": "A reusable Resort Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/resort-management-system",
 "type": "product"
 },
 {
 "id": "vehicle-management-system",
 "name": "Vehicle Management System",
 "category": "Business Management Products",
 "description": "A reusable Vehicle Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/vehicle-management-system",
 "type": "product"
 },
 {
 "id": "fleet-management-system",
 "name": "Fleet Management System",
 "category": "Business Management Products",
 "description": "A reusable Fleet Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/fleet-management-system",
 "type": "product"
 },
 {
 "id": "vehicle-rental-management-system",
 "name": "Vehicle Rental Management System",
 "category": "Business Management Products",
 "description": "A reusable Vehicle Rental Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/vehicle-rental-management-system",
 "type": "product"
 },
 {
 "id": "garage-management-system",
 "name": "Garage Management System",
 "category": "Business Management Products",
 "description": "A reusable Garage Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/garage-management-system",
 "type": "product"
 },
 {
 "id": "real-estate-management-system",
 "name": "Real Estate Management System",
 "category": "Business Management Products",
 "description": "A reusable Real Estate Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/real-estate-management-system",
 "type": "product"
 },
 {
 "id": "property-management-system",
 "name": "Property Management System",
 "category": "Business Management Products",
 "description": "A reusable Property Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 95000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/property-management-system",
 "type": "product"
 },
 {
 "id": "project-management-system",
 "name": "Project Management System",
 "category": "Business Management Products",
 "description": "A reusable Project Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/project-management-system",
 "type": "product"
 },
 {
 "id": "task-management-system",
 "name": "Task Management System",
 "category": "Business Management Products",
 "description": "A reusable Task Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/task-management-system",
 "type": "product"
 },
 {
 "id": "help-desk-ticket-system",
 "name": "Help Desk / Ticket System",
 "category": "Business Management Products",
 "description": "A reusable Help Desk / Ticket System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/help-desk-ticket-system",
 "type": "product"
 },
 {
 "id": "complaint-management-system",
 "name": "Complaint Management System",
 "category": "AI Products",
 "description": "A reusable Complaint Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/complaint-management-system",
 "type": "product"
 },
 {
 "id": "visitor-management-system",
 "name": "Visitor Management System",
 "category": "Business Management Products",
 "description": "A reusable Visitor Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/visitor-management-system",
 "type": "product"
 },
 {
 "id": "document-management-system",
 "name": "Document Management System",
 "category": "Business Management Products",
 "description": "A reusable Document Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/document-management-system",
 "type": "product"
 },
 {
 "id": "file-management-system",
 "name": "File Management System",
 "category": "Business Management Products",
 "description": "A reusable File Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/file-management-system",
 "type": "product"
 },
 {
 "id": "knowledge-base-system",
 "name": "Knowledge Base System",
 "category": "Business Management Products",
 "description": "A reusable Knowledge Base System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/knowledge-base-system",
 "type": "product"
 },
 {
 "id": "membership-management-system",
 "name": "Membership Management System",
 "category": "Business Management Products",
 "description": "A reusable Membership Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/membership-management-system",
 "type": "product"
 },
 {
 "id": "gym-management-system",
 "name": "Gym Management System",
 "category": "Business Management Products",
 "description": "A reusable Gym Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/gym-management-system",
 "type": "product"
 },
 {
 "id": "event-management-system",
 "name": "Event Management System",
 "category": "Business Management Products",
 "description": "A reusable Event Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/event-management-system",
 "type": "product"
 },
 {
 "id": "wedding-management-system",
 "name": "Wedding Management System",
 "category": "Business Management Products",
 "description": "A reusable Wedding Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/wedding-management-system",
 "type": "product"
 },
 {
 "id": "online-booking-system",
 "name": "Online Booking System",
 "category": "Business Management Products",
 "description": "A reusable Online Booking System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/online-booking-system",
 "type": "product"
 },
 {
 "id": "appointment-scheduling-system",
 "name": "Appointment Scheduling System",
 "category": "Mobile Products",
 "description": "A reusable Appointment Scheduling System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/appointment-scheduling-system",
 "type": "product"
 },
 {
 "id": "queue-management-system",
 "name": "Queue Management System",
 "category": "Business Management Products",
 "description": "A reusable Queue Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/queue-management-system",
 "type": "product"
 },
 {
 "id": "qr-code-management-system",
 "name": "QR Code Management System",
 "category": "Business Management Products",
 "description": "A reusable QR Code Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/qr-code-management-system",
 "type": "product"
 },
 {
 "id": "barcode-management-system",
 "name": "Barcode Management System",
 "category": "Business Management Products",
 "description": "A reusable Barcode Management System solution from MI CORTEX X that can be configured for business or organizational requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Reusable solution",
 "Professional configuration",
 "Business-ready delivery"
 ],
 "deliveryTime": "Configuration based",
 "supportPeriod": "30 days",
 "route": "#/products/barcode-management-system",
 "type": "product"
 }
 ],
 "services": [
 {
 "id": "custom-ai-platform",
 "name": "Custom AI Platform",
 "category": "AI Development",
 "description": "Professional Custom AI Platform service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 150000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/custom-ai-platform",
 "type": "service"
 },
 {
 "id": "enterprise-ai-solution",
 "name": "Enterprise AI Solution",
 "category": "AI Development",
 "description": "Professional Enterprise AI Solution service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 300000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/enterprise-ai-solution",
 "type": "service"
 },
 {
 "id": "landing-page",
 "name": "Landing Page",
 "category": "Website Development",
 "description": "Professional Landing Page service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/landing-page",
 "type": "service"
 },
 {
 "id": "one-page-website",
 "name": "One Page Website",
 "category": "Website Development",
 "description": "Professional One Page Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/one-page-website",
 "type": "service"
 },
 {
 "id": "personal-website",
 "name": "Personal Website",
 "category": "Website Development",
 "description": "Professional Personal Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/personal-website",
 "type": "service"
 },
 {
 "id": "portfolio-website",
 "name": "Portfolio Website",
 "category": "Website Development",
 "description": "Professional Portfolio Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/portfolio-website",
 "type": "service"
 },
 {
 "id": "resume-cv-website",
 "name": "Resume / CV Website",
 "category": "Website Development",
 "description": "Professional Resume / CV Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/resume-cv-website",
 "type": "service"
 },
 {
 "id": "business-website",
 "name": "Business Website",
 "category": "Website Development",
 "description": "Professional Business Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/business-website",
 "type": "service"
 },
 {
 "id": "company-website",
 "name": "Company Website",
 "category": "Website Development",
 "description": "Professional Company Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/company-website",
 "type": "service"
 },
 {
 "id": "corporate-website",
 "name": "Corporate Website",
 "category": "Website Development",
 "description": "Professional Corporate Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/corporate-website",
 "type": "service"
 },
 {
 "id": "startup-website",
 "name": "Startup Website",
 "category": "Website Development",
 "description": "Professional Startup Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/startup-website",
 "type": "service"
 },
 {
 "id": "agency-website",
 "name": "Agency Website",
 "category": "Website Development",
 "description": "Professional Agency Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/agency-website",
 "type": "service"
 },
 {
 "id": "blog-website",
 "name": "Blog Website",
 "category": "Website Development",
 "description": "Professional Blog Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/blog-website",
 "type": "service"
 },
 {
 "id": "news-website",
 "name": "News Website",
 "category": "Website Development",
 "description": "Professional News Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/news-website",
 "type": "service"
 },
 {
 "id": "magazine-website",
 "name": "Magazine Website",
 "category": "Website Development",
 "description": "Professional Magazine Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/magazine-website",
 "type": "service"
 },
 {
 "id": "school-website",
 "name": "School Website",
 "category": "Website Development",
 "description": "Professional School Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/school-website",
 "type": "service"
 },
 {
 "id": "university-website",
 "name": "University Website",
 "category": "Website Development",
 "description": "Professional University Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/university-website",
 "type": "service"
 },
 {
 "id": "tuition-class-website",
 "name": "Tuition Class Website",
 "category": "Website Development",
 "description": "Professional Tuition Class Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/tuition-class-website",
 "type": "service"
 },
 {
 "id": "lms-website",
 "name": "LMS Website",
 "category": "Website Development",
 "description": "Professional LMS Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/lms-website",
 "type": "service"
 },
 {
 "id": "e-learning-website",
 "name": "E-Learning Website",
 "category": "Website Development",
 "description": "Professional E-Learning Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/e-learning-website",
 "type": "service"
 },
 {
 "id": "hospital-website",
 "name": "Hospital Website",
 "category": "Website Development",
 "description": "Professional Hospital Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/hospital-website",
 "type": "service"
 },
 {
 "id": "clinic-website",
 "name": "Clinic Website",
 "category": "Website Development",
 "description": "Professional Clinic Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/clinic-website",
 "type": "service"
 },
 {
 "id": "doctor-website",
 "name": "Doctor Website",
 "category": "Website Development",
 "description": "Professional Doctor Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/doctor-website",
 "type": "service"
 },
 {
 "id": "pharmacy-website",
 "name": "Pharmacy Website",
 "category": "Website Development",
 "description": "Professional Pharmacy Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/pharmacy-website",
 "type": "service"
 },
 {
 "id": "hotel-website",
 "name": "Hotel Website",
 "category": "Website Development",
 "description": "Professional Hotel Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/hotel-website",
 "type": "service"
 },
 {
 "id": "villa-website",
 "name": "Villa Website",
 "category": "Website Development",
 "description": "Professional Villa Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/villa-website",
 "type": "service"
 },
 {
 "id": "restaurant-website",
 "name": "Restaurant Website",
 "category": "Website Development",
 "description": "Professional Restaurant Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/restaurant-website",
 "type": "service"
 },
 {
 "id": "cafe-website",
 "name": "Cafe Website",
 "category": "Website Development",
 "description": "Professional Cafe Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cafe-website",
 "type": "service"
 },
 {
 "id": "travel-agency-website",
 "name": "Travel Agency Website",
 "category": "Website Development",
 "description": "Professional Travel Agency Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/travel-agency-website",
 "type": "service"
 },
 {
 "id": "tour-booking-website",
 "name": "Tour Booking Website",
 "category": "Website Development",
 "description": "Professional Tour Booking Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/tour-booking-website",
 "type": "service"
 },
 {
 "id": "real-estate-website",
 "name": "Real Estate Website",
 "category": "Website Development",
 "description": "Professional Real Estate Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/real-estate-website",
 "type": "service"
 },
 {
 "id": "property-listing-website",
 "name": "Property Listing Website",
 "category": "Website Development",
 "description": "Professional Property Listing Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/property-listing-website",
 "type": "service"
 },
 {
 "id": "car-sales-website",
 "name": "Car Sales Website",
 "category": "Website Development",
 "description": "Professional Car Sales Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/car-sales-website",
 "type": "service"
 },
 {
 "id": "vehicle-rental-website",
 "name": "Vehicle Rental Website",
 "category": "Website Development",
 "description": "Professional Vehicle Rental Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 65000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/vehicle-rental-website",
 "type": "service"
 },
 {
 "id": "job-portal-website",
 "name": "Job Portal Website",
 "category": "Website Development",
 "description": "Professional Job Portal Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/job-portal-website",
 "type": "service"
 },
 {
 "id": "freelance-marketplace-website",
 "name": "Freelance Marketplace Website",
 "category": "Website Development",
 "description": "Professional Freelance Marketplace Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/freelance-marketplace-website",
 "type": "service"
 },
 {
 "id": "e-commerce-website",
 "name": "E-Commerce Website",
 "category": "Website Development",
 "description": "Professional E-Commerce Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/e-commerce-website",
 "type": "service"
 },
 {
 "id": "online-store",
 "name": "Online Store",
 "category": "Website Development Services",
 "description": "Professional Online Store service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/online-store",
 "type": "service"
 },
 {
 "id": "fashion-store-website",
 "name": "Fashion Store Website",
 "category": "Website Development",
 "description": "Professional Fashion Store Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 70000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/fashion-store-website",
 "type": "service"
 },
 {
 "id": "jewelry-store-website",
 "name": "Jewelry Store Website",
 "category": "Website Development",
 "description": "Professional Jewelry Store Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/jewelry-store-website",
 "type": "service"
 },
 {
 "id": "electronics-store-website",
 "name": "Electronics Store Website",
 "category": "Website Development",
 "description": "Professional Electronics Store Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/electronics-store-website",
 "type": "service"
 },
 {
 "id": "multi-vendor-marketplace",
 "name": "Multi Vendor Marketplace",
 "category": "Website Development Services",
 "description": "Professional Multi Vendor Marketplace service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 150000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/multi-vendor-marketplace",
 "type": "service"
 },
 {
 "id": "ngo-website",
 "name": "NGO Website",
 "category": "Website Development",
 "description": "Professional NGO Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ngo-website",
 "type": "service"
 },
 {
 "id": "charity-website",
 "name": "Charity Website",
 "category": "Website Development",
 "description": "Professional Charity Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/charity-website",
 "type": "service"
 },
 {
 "id": "church-mosque-website",
 "name": "Church / Mosque Website",
 "category": "Website Development",
 "description": "Professional Church / Mosque Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/church-mosque-website",
 "type": "service"
 },
 {
 "id": "government-information-website",
 "name": "Government Information Website",
 "category": "Website Development",
 "description": "Professional Government Information Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/government-information-website",
 "type": "service"
 },
 {
 "id": "event-website",
 "name": "Event Website",
 "category": "Website Development",
 "description": "Professional Event Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/event-website",
 "type": "service"
 },
 {
 "id": "wedding-website",
 "name": "Wedding Website",
 "category": "Website Development",
 "description": "Professional Wedding Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/wedding-website",
 "type": "service"
 },
 {
 "id": "sports-club-website",
 "name": "Sports Club Website",
 "category": "Website Development",
 "description": "Professional Sports Club Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/sports-club-website",
 "type": "service"
 },
 {
 "id": "gym-website",
 "name": "Gym Website",
 "category": "Website Development",
 "description": "Professional Gym Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/gym-website",
 "type": "service"
 },
 {
 "id": "fitness-website",
 "name": "Fitness Website",
 "category": "Website Development",
 "description": "Professional Fitness Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/fitness-website",
 "type": "service"
 },
 {
 "id": "photography-website",
 "name": "Photography Website",
 "category": "Website Development",
 "description": "Professional Photography Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/photography-website",
 "type": "service"
 },
 {
 "id": "music-website",
 "name": "Music Website",
 "category": "Website Development",
 "description": "Professional Music Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/music-website",
 "type": "service"
 },
 {
 "id": "streaming-website",
 "name": "Streaming Website",
 "category": "Website Development",
 "description": "Professional Streaming Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/streaming-website",
 "type": "service"
 },
 {
 "id": "video-sharing-website",
 "name": "Video Sharing Website",
 "category": "Website Development",
 "description": "Professional Video Sharing Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 150000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/video-sharing-website",
 "type": "service"
 },
 {
 "id": "forum-website",
 "name": "Forum Website",
 "category": "Website Development",
 "description": "Professional Forum Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/forum-website",
 "type": "service"
 },
 {
 "id": "community-website",
 "name": "Community Website",
 "category": "Website Development",
 "description": "Professional Community Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/community-website",
 "type": "service"
 },
 {
 "id": "wiki-website",
 "name": "Wiki Website",
 "category": "Website Development",
 "description": "Professional Wiki Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/wiki-website",
 "type": "service"
 },
 {
 "id": "membership-website",
 "name": "Membership Website",
 "category": "Website Development",
 "description": "Professional Membership Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 75000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/membership-website",
 "type": "service"
 },
 {
 "id": "subscription-website",
 "name": "Subscription Website",
 "category": "Website Development",
 "description": "Professional Subscription Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/subscription-website",
 "type": "service"
 },
 {
 "id": "booking-website",
 "name": "Booking Website",
 "category": "Website Development",
 "description": "Professional Booking Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/booking-website",
 "type": "service"
 },
 {
 "id": "appointment-website",
 "name": "Appointment Website",
 "category": "Website Development",
 "description": "Professional Appointment Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 55000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/appointment-website",
 "type": "service"
 },
 {
 "id": "custom-website",
 "name": "Custom Website",
 "category": "Website Development",
 "description": "Professional Custom Website service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/custom-website",
 "type": "service"
 },
 {
 "id": "website-redesign",
 "name": "Website Redesign",
 "category": "Website Development",
 "description": "Professional Website Redesign service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-redesign",
 "type": "service"
 },
 {
 "id": "website-bug-fix",
 "name": "Website Bug Fix",
 "category": "Website Development",
 "description": "Professional Website Bug Fix service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-bug-fix",
 "type": "service"
 },
 {
 "id": "website-speed-optimization",
 "name": "Website Speed Optimization",
 "category": "Website Development",
 "description": "Professional Website Speed Optimization service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-speed-optimization",
 "type": "service"
 },
 {
 "id": "seo-optimization",
 "name": "SEO Optimization",
 "category": "SEO",
 "description": "Professional SEO Optimization service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/seo-optimization",
 "type": "service"
 },
 {
 "id": "domain-hosting-setup",
 "name": "Domain & Hosting Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Domain & Hosting Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/domain-hosting-setup",
 "type": "service"
 },
 {
 "id": "ssl-installation",
 "name": "SSL Installation",
 "category": "Cloud and Hosting",
 "description": "Professional SSL Installation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ssl-installation",
 "type": "service"
 },
 {
 "id": "android-app-development",
 "name": "Android App Development",
 "category": "Mobile App Development",
 "description": "Professional Android App Development service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 85000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/android-app-development",
 "type": "service"
 },
 {
 "id": "ios-app-development",
 "name": "iOS App Development",
 "category": "Mobile App Development",
 "description": "Professional iOS App Development service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ios-app-development",
 "type": "service"
 },
 {
 "id": "cross-platform-app",
 "name": "Cross Platform App",
 "category": "Mobile App Development",
 "description": "Professional Cross Platform App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cross-platform-app",
 "type": "service"
 },
 {
 "id": "hybrid-mobile-app",
 "name": "Hybrid Mobile App",
 "category": "Mobile App Development",
 "description": "Professional Hybrid Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/hybrid-mobile-app",
 "type": "service"
 },
 {
 "id": "native-android-app",
 "name": "Native Android App",
 "category": "Mobile App Development",
 "description": "Professional Native Android App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 95000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/native-android-app",
 "type": "service"
 },
 {
 "id": "native-iphone-app",
 "name": "Native iPhone App",
 "category": "Mobile App Development",
 "description": "Professional Native iPhone App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 125000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/native-iphone-app",
 "type": "service"
 },
 {
 "id": "business-mobile-app",
 "name": "Business Mobile App",
 "category": "Mobile App Development",
 "description": "Professional Business Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/business-mobile-app",
 "type": "service"
 },
 {
 "id": "company-mobile-app",
 "name": "Company Mobile App",
 "category": "Mobile App Development",
 "description": "Professional Company Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/company-mobile-app",
 "type": "service"
 },
 {
 "id": "corporate-mobile-app",
 "name": "Corporate Mobile App",
 "category": "Mobile App Development",
 "description": "Professional Corporate Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/corporate-mobile-app",
 "type": "service"
 },
 {
 "id": "portfolio-app",
 "name": "Portfolio App",
 "category": "Mobile App Development",
 "description": "Professional Portfolio App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 45000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/portfolio-app",
 "type": "service"
 },
 {
 "id": "personal-mobile-app",
 "name": "Personal Mobile App",
 "category": "Mobile App Development",
 "description": "Professional Personal Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/personal-mobile-app",
 "type": "service"
 },
 {
 "id": "e-commerce-mobile-app",
 "name": "E-Commerce Mobile App",
 "category": "Mobile App Development",
 "description": "Professional E-Commerce Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/e-commerce-mobile-app",
 "type": "service"
 },
 {
 "id": "online-shopping-app",
 "name": "Online Shopping App",
 "category": "Mobile App Development",
 "description": "Professional Online Shopping App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 130000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/online-shopping-app",
 "type": "service"
 },
 {
 "id": "marketplace-app",
 "name": "Marketplace App",
 "category": "Mobile App Development",
 "description": "Professional Marketplace App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/marketplace-app",
 "type": "service"
 },
 {
 "id": "food-ordering-app",
 "name": "Food Ordering App",
 "category": "Mobile App Development",
 "description": "Professional Food Ordering App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/food-ordering-app",
 "type": "service"
 },
 {
 "id": "restaurant-app",
 "name": "Restaurant App",
 "category": "Mobile App Development",
 "description": "Professional Restaurant App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/restaurant-app",
 "type": "service"
 },
 {
 "id": "cafe-ordering-app",
 "name": "Cafe Ordering App",
 "category": "Mobile App Development",
 "description": "Professional Cafe Ordering App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cafe-ordering-app",
 "type": "service"
 },
 {
 "id": "hotel-booking-app",
 "name": "Hotel Booking App",
 "category": "Mobile App Development",
 "description": "Professional Hotel Booking App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 130000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/hotel-booking-app",
 "type": "service"
 },
 {
 "id": "travel-booking-app",
 "name": "Travel Booking App",
 "category": "Mobile App Development",
 "description": "Professional Travel Booking App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/travel-booking-app",
 "type": "service"
 },
 {
 "id": "tour-guide-app",
 "name": "Tour Guide App",
 "category": "Mobile App Development",
 "description": "Professional Tour Guide App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 95000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/tour-guide-app",
 "type": "service"
 },
 {
 "id": "taxi-booking-app",
 "name": "Taxi Booking App",
 "category": "Mobile App Development",
 "description": "Professional Taxi Booking App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/taxi-booking-app",
 "type": "service"
 },
 {
 "id": "vehicle-rental-app",
 "name": "Vehicle Rental App",
 "category": "Mobile App Development",
 "description": "Professional Vehicle Rental App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 130000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/vehicle-rental-app",
 "type": "service"
 },
 {
 "id": "delivery-app",
 "name": "Delivery App",
 "category": "Mobile App Development",
 "description": "Professional Delivery App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 150000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/delivery-app",
 "type": "service"
 },
 {
 "id": "courier-tracking-app",
 "name": "Courier Tracking App",
 "category": "Mobile App Development",
 "description": "Professional Courier Tracking App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/courier-tracking-app",
 "type": "service"
 },
 {
 "id": "parcel-delivery-app",
 "name": "Parcel Delivery App",
 "category": "Mobile App Development",
 "description": "Professional Parcel Delivery App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/parcel-delivery-app",
 "type": "service"
 },
 {
 "id": "school-app",
 "name": "School App",
 "category": "Mobile App Development",
 "description": "Professional School App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/school-app",
 "type": "service"
 },
 {
 "id": "university-app",
 "name": "University App",
 "category": "Mobile App Development",
 "description": "Professional University App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/university-app",
 "type": "service"
 },
 {
 "id": "learning-app",
 "name": "Learning App",
 "category": "Mobile App Development",
 "description": "Professional Learning App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/learning-app",
 "type": "service"
 },
 {
 "id": "online-course-app",
 "name": "Online Course App",
 "category": "Mobile App Development",
 "description": "Professional Online Course App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 130000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/online-course-app",
 "type": "service"
 },
 {
 "id": "exam-preparation-app",
 "name": "Exam Preparation App",
 "category": "Mobile App Development",
 "description": "Professional Exam Preparation App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/exam-preparation-app",
 "type": "service"
 },
 {
 "id": "student-management-app",
 "name": "Student Management App",
 "category": "Mobile App Development",
 "description": "Professional Student Management App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/student-management-app",
 "type": "service"
 },
 {
 "id": "hospital-app",
 "name": "Hospital App",
 "category": "Mobile App Development",
 "description": "Professional Hospital App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/hospital-app",
 "type": "service"
 },
 {
 "id": "clinic-app",
 "name": "Clinic App",
 "category": "Mobile App Development",
 "description": "Professional Clinic App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 95000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/clinic-app",
 "type": "service"
 },
 {
 "id": "doctor-appointment-app",
 "name": "Doctor Appointment App",
 "category": "Mobile App Development",
 "description": "Professional Doctor Appointment App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/doctor-appointment-app",
 "type": "service"
 },
 {
 "id": "medical-store-app",
 "name": "Medical Store App",
 "category": "Mobile App Development",
 "description": "Professional Medical Store App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/medical-store-app",
 "type": "service"
 },
 {
 "id": "pharmacy-app",
 "name": "Pharmacy App",
 "category": "Mobile App Development",
 "description": "Professional Pharmacy App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/pharmacy-app",
 "type": "service"
 },
 {
 "id": "chat-application",
 "name": "Chat Application",
 "category": "Mobile App Development",
 "description": "Professional Chat Application service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/chat-application",
 "type": "service"
 },
 {
 "id": "social-media-app",
 "name": "Social Media App",
 "category": "Mobile App Development",
 "description": "Professional Social Media App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 220000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/social-media-app",
 "type": "service"
 },
 {
 "id": "community-app",
 "name": "Community App",
 "category": "Mobile App Development",
 "description": "Professional Community App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 130000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/community-app",
 "type": "service"
 },
 {
 "id": "forum-app",
 "name": "Forum App",
 "category": "Mobile App Development",
 "description": "Professional Forum App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/forum-app",
 "type": "service"
 },
 {
 "id": "news-app",
 "name": "News App",
 "category": "Mobile App Development",
 "description": "Professional News App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/news-app",
 "type": "service"
 },
 {
 "id": "blog-app",
 "name": "Blog App",
 "category": "Mobile App Development",
 "description": "Professional Blog App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/blog-app",
 "type": "service"
 },
 {
 "id": "media-streaming-app",
 "name": "Media Streaming App",
 "category": "Mobile App Development",
 "description": "Professional Media Streaming App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 200000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/media-streaming-app",
 "type": "service"
 },
 {
 "id": "music-streaming-app",
 "name": "Music Streaming App",
 "category": "Mobile App Development",
 "description": "Professional Music Streaming App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 220000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/music-streaming-app",
 "type": "service"
 },
 {
 "id": "video-streaming-app",
 "name": "Video Streaming App",
 "category": "Mobile App Development",
 "description": "Professional Video Streaming App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 250000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/video-streaming-app",
 "type": "service"
 },
 {
 "id": "real-estate-app",
 "name": "Real Estate App",
 "category": "Mobile App Development",
 "description": "Professional Real Estate App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/real-estate-app",
 "type": "service"
 },
 {
 "id": "property-listing-app",
 "name": "Property Listing App",
 "category": "Mobile App Development",
 "description": "Professional Property Listing App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 150000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/property-listing-app",
 "type": "service"
 },
 {
 "id": "job-portal-app",
 "name": "Job Portal App",
 "category": "Mobile App Development",
 "description": "Professional Job Portal App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/job-portal-app",
 "type": "service"
 },
 {
 "id": "freelancer-app",
 "name": "Freelancer App",
 "category": "Mobile App Development",
 "description": "Professional Freelancer App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/freelancer-app",
 "type": "service"
 },
 {
 "id": "ai-chatbot-mobile-app",
 "name": "AI Chatbot Mobile App",
 "category": "AI Development",
 "description": "Professional AI Chatbot Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ai-chatbot-mobile-app",
 "type": "service"
 },
 {
 "id": "ai-assistant-app",
 "name": "AI Assistant App",
 "category": "AI Development",
 "description": "Professional AI Assistant App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 170000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ai-assistant-app",
 "type": "service"
 },
 {
 "id": "ai-voice-assistant-app",
 "name": "AI Voice Assistant App",
 "category": "AI Development",
 "description": "Professional AI Voice Assistant App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 200000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ai-voice-assistant-app",
 "type": "service"
 },
 {
 "id": "ai-image-generator-app",
 "name": "AI Image Generator App",
 "category": "Mobile App Development",
 "description": "Professional AI Image Generator App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 180000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ai-image-generator-app",
 "type": "service"
 },
 {
 "id": "ai-translator-app",
 "name": "AI Translator App",
 "category": "Mobile App Development",
 "description": "Professional AI Translator App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 140000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ai-translator-app",
 "type": "service"
 },
 {
 "id": "qr-scanner-app",
 "name": "QR Scanner App",
 "category": "Mobile App Development",
 "description": "Professional QR Scanner App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/qr-scanner-app",
 "type": "service"
 },
 {
 "id": "barcode-scanner-app",
 "name": "Barcode Scanner App",
 "category": "Mobile App Development",
 "description": "Professional Barcode Scanner App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/barcode-scanner-app",
 "type": "service"
 },
 {
 "id": "attendance-app",
 "name": "Attendance App",
 "category": "Mobile App Development",
 "description": "Professional Attendance App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 80000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/attendance-app",
 "type": "service"
 },
 {
 "id": "inventory-app",
 "name": "Inventory App",
 "category": "Mobile App Development",
 "description": "Professional Inventory App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/inventory-app",
 "type": "service"
 },
 {
 "id": "pos-mobile-app",
 "name": "POS Mobile App",
 "category": "Mobile App Development",
 "description": "Professional POS Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/pos-mobile-app",
 "type": "service"
 },
 {
 "id": "crm-mobile-app",
 "name": "CRM Mobile App",
 "category": "Mobile App Development",
 "description": "Professional CRM Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 150000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/crm-mobile-app",
 "type": "service"
 },
 {
 "id": "erp-mobile-app",
 "name": "ERP Mobile App",
 "category": "Mobile App Development",
 "description": "Professional ERP Mobile App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 220000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/erp-mobile-app",
 "type": "service"
 },
 {
 "id": "fitness-app",
 "name": "Fitness App",
 "category": "Mobile App Development",
 "description": "Professional Fitness App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 110000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/fitness-app",
 "type": "service"
 },
 {
 "id": "gym-app",
 "name": "Gym App",
 "category": "Mobile App Development",
 "description": "Professional Gym App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/gym-app",
 "type": "service"
 },
 {
 "id": "event-management-app",
 "name": "Event Management App",
 "category": "Mobile App Development",
 "description": "Professional Event Management App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 120000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/event-management-app",
 "type": "service"
 },
 {
 "id": "appointment-booking-app",
 "name": "Appointment Booking App",
 "category": "Mobile App Development",
 "description": "Professional Appointment Booking App service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/appointment-booking-app",
 "type": "service"
 },
 {
 "id": "custom-mobile-application",
 "name": "Custom Mobile Application",
 "category": "Mobile App Development",
 "description": "Professional Custom Mobile Application service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 90000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/custom-mobile-application",
 "type": "service"
 },
 {
 "id": "desktop-software-development",
 "name": "Desktop Software Development",
 "category": "Desktop Software Development",
 "description": "Professional Desktop Software Development service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/desktop-software-development",
 "type": "service"
 },
 {
 "id": "custom-business-software",
 "name": "Custom Business Software",
 "category": "Desktop Software & Business Management Systems",
 "description": "Professional Custom Business Software service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/custom-business-software",
 "type": "service"
 },
 {
 "id": "enterprise-software-solution",
 "name": "Enterprise Software Solution",
 "category": "Enterprise Software Development",
 "description": "Professional Enterprise Software Solution service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 300000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/enterprise-software-solution",
 "type": "service"
 },
 {
 "id": "premium-logo-design",
 "name": "Premium Logo Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Premium Logo Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/premium-logo-design",
 "type": "service"
 },
 {
 "id": "luxury-logo-design",
 "name": "Luxury Logo Design",
 "category": "UI/UX Design",
 "description": "Professional Luxury Logo Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/luxury-logo-design",
 "type": "service"
 },
 {
 "id": "brand-identity-design",
 "name": "Brand Identity Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Brand Identity Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/brand-identity-design",
 "type": "service"
 },
 {
 "id": "business-card-design",
 "name": "Business Card Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Business Card Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/business-card-design",
 "type": "service"
 },
 {
 "id": "letterhead-design",
 "name": "Letterhead Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Letterhead Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/letterhead-design",
 "type": "service"
 },
 {
 "id": "envelope-design",
 "name": "Envelope Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Envelope Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/envelope-design",
 "type": "service"
 },
 {
 "id": "company-profile-design",
 "name": "Company Profile Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Company Profile Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/company-profile-design",
 "type": "service"
 },
 {
 "id": "brand-guidelines",
 "name": "Brand Guidelines",
 "category": "UI/UX Design",
 "description": "Professional Brand Guidelines service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/brand-guidelines",
 "type": "service"
 },
 {
 "id": "corporate-identity-package",
 "name": "Corporate Identity Package",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Corporate Identity Package service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/corporate-identity-package",
 "type": "service"
 },
 {
 "id": "flyer-design",
 "name": "Flyer Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Flyer Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/flyer-design",
 "type": "service"
 },
 {
 "id": "brochure-design",
 "name": "Brochure Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Brochure Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/brochure-design",
 "type": "service"
 },
 {
 "id": "tri-fold-brochure",
 "name": "Tri-Fold Brochure",
 "category": "Graphic Design and Branding",
 "description": "Professional Tri-Fold Brochure service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/tri-fold-brochure",
 "type": "service"
 },
 {
 "id": "bi-fold-brochure",
 "name": "Bi-Fold Brochure",
 "category": "Graphic Design and Branding",
 "description": "Professional Bi-Fold Brochure service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/bi-fold-brochure",
 "type": "service"
 },
 {
 "id": "poster-design",
 "name": "Poster Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Poster Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/poster-design",
 "type": "service"
 },
 {
 "id": "banner-design",
 "name": "Banner Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Banner Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/banner-design",
 "type": "service"
 },
 {
 "id": "roll-up-banner-design",
 "name": "Roll-Up Banner Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Roll-Up Banner Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/roll-up-banner-design",
 "type": "service"
 },
 {
 "id": "billboard-design",
 "name": "Billboard Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Billboard Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/billboard-design",
 "type": "service"
 },
 {
 "id": "standee-design",
 "name": "Standee Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Standee Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/standee-design",
 "type": "service"
 },
 {
 "id": "menu-card-design",
 "name": "Menu Card Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Menu Card Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/menu-card-design",
 "type": "service"
 },
 {
 "id": "price-list-design",
 "name": "Price List Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Price List Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/price-list-design",
 "type": "service"
 },
 {
 "id": "product-catalog-design",
 "name": "Product Catalog Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Product Catalog Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/product-catalog-design",
 "type": "service"
 },
 {
 "id": "social-media-post-design",
 "name": "Social Media Post Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Social Media Post Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 800,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/social-media-post-design",
 "type": "service"
 },
 {
 "id": "facebook-post-design",
 "name": "Facebook Post Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Facebook Post Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 800,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/facebook-post-design",
 "type": "service"
 },
 {
 "id": "instagram-post-design",
 "name": "Instagram Post Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Instagram Post Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 800,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/instagram-post-design",
 "type": "service"
 },
 {
 "id": "linkedin-post-design",
 "name": "LinkedIn Post Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional LinkedIn Post Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 900,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/linkedin-post-design",
 "type": "service"
 },
 {
 "id": "x-twitter-banner",
 "name": "X (Twitter) Banner",
 "category": "Graphic Design and Branding",
 "description": "Professional X (Twitter) Banner service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 1500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/x-twitter-banner",
 "type": "service"
 },
 {
 "id": "facebook-cover-design",
 "name": "Facebook Cover Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Facebook Cover Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 1800,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/facebook-cover-design",
 "type": "service"
 },
 {
 "id": "youtube-banner-design",
 "name": "YouTube Banner Design",
 "category": "Graphic Design and Branding",
 "description": "Professional YouTube Banner Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/youtube-banner-design",
 "type": "service"
 },
 {
 "id": "youtube-thumbnail",
 "name": "YouTube Thumbnail",
 "category": "Graphic Design & Branding Services",
 "description": "Professional YouTube Thumbnail service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 700,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/youtube-thumbnail",
 "type": "service"
 },
 {
 "id": "instagram-story-design",
 "name": "Instagram Story Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Instagram Story Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 700,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/instagram-story-design",
 "type": "service"
 },
 {
 "id": "whatsapp-status-design",
 "name": "WhatsApp Status Design",
 "category": "Mobile App Development",
 "description": "Professional WhatsApp Status Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 600,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/whatsapp-status-design",
 "type": "service"
 },
 {
 "id": "social-media-package-10-posts",
 "name": "Social Media Package (10 Posts)",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Social Media Package (10 Posts) service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 7500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/social-media-package-10-posts",
 "type": "service"
 },
 {
 "id": "social-media-package-20-posts",
 "name": "Social Media Package (20 Posts)",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Social Media Package (20 Posts) service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 14000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/social-media-package-20-posts",
 "type": "service"
 },
 {
 "id": "monthly-social-media-design",
 "name": "Monthly Social Media Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Monthly Social Media Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/monthly-social-media-design",
 "type": "service"
 },
 {
 "id": "presentation-design",
 "name": "Presentation Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Presentation Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/presentation-design",
 "type": "service"
 },
 {
 "id": "pitch-deck-design",
 "name": "Pitch Deck Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Pitch Deck Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/pitch-deck-design",
 "type": "service"
 },
 {
 "id": "company-presentation",
 "name": "Company Presentation",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Company Presentation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/company-presentation",
 "type": "service"
 },
 {
 "id": "annual-report-design",
 "name": "Annual Report Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Annual Report Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/annual-report-design",
 "type": "service"
 },
 {
 "id": "photo-editing",
 "name": "Photo Editing",
 "category": "Graphic Design and Branding",
 "description": "Professional Photo Editing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/photo-editing",
 "type": "service"
 },
 {
 "id": "photo-retouching",
 "name": "Photo Retouching",
 "category": "Graphic Design and Branding",
 "description": "Professional Photo Retouching service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 700,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/photo-retouching",
 "type": "service"
 },
 {
 "id": "background-removal",
 "name": "Background Removal",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Background Removal service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 300,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/background-removal",
 "type": "service"
 },
 {
 "id": "image-enhancement",
 "name": "Image Enhancement",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Image Enhancement service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/image-enhancement",
 "type": "service"
 },
 {
 "id": "ai-image-editing",
 "name": "AI Image Editing",
 "category": "Graphic Design & Branding Services",
 "description": "Professional AI Image Editing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 800,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ai-image-editing",
 "type": "service"
 },
 {
 "id": "youtube-video-editing",
 "name": "YouTube Video Editing",
 "category": "Video and Motion Design",
 "description": "Professional YouTube Video Editing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/youtube-video-editing",
 "type": "service"
 },
 {
 "id": "short-video-editing",
 "name": "Short Video Editing",
 "category": "Video and Motion Design",
 "description": "Professional Short Video Editing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/short-video-editing",
 "type": "service"
 },
 {
 "id": "instagram-reel-editing",
 "name": "Instagram Reel Editing",
 "category": "Video and Motion Design",
 "description": "Professional Instagram Reel Editing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/instagram-reel-editing",
 "type": "service"
 },
 {
 "id": "tiktok-video-editing",
 "name": "TikTok Video Editing",
 "category": "Video and Motion Design",
 "description": "Professional TikTok Video Editing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/tiktok-video-editing",
 "type": "service"
 },
 {
 "id": "promotional-video",
 "name": "Promotional Video",
 "category": "Video and Motion Design",
 "description": "Professional Promotional Video service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/promotional-video",
 "type": "service"
 },
 {
 "id": "corporate-video-editing",
 "name": "Corporate Video Editing",
 "category": "Video and Motion Design",
 "description": "Professional Corporate Video Editing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/corporate-video-editing",
 "type": "service"
 },
 {
 "id": "intro-animation",
 "name": "Intro Animation",
 "category": "Video and Motion Design",
 "description": "Professional Intro Animation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/intro-animation",
 "type": "service"
 },
 {
 "id": "outro-animation",
 "name": "Outro Animation",
 "category": "Video and Motion Design",
 "description": "Professional Outro Animation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/outro-animation",
 "type": "service"
 },
 {
 "id": "logo-animation",
 "name": "Logo Animation",
 "category": "Graphic Design and Branding",
 "description": "Professional Logo Animation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/logo-animation",
 "type": "service"
 },
 {
 "id": "ui-design",
 "name": "UI Design",
 "category": "UI/UX Design",
 "description": "Professional UI Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ui-design",
 "type": "service"
 },
 {
 "id": "ux-design",
 "name": "UX Design",
 "category": "UI/UX Design",
 "description": "Professional UX Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ux-design",
 "type": "service"
 },
 {
 "id": "mobile-app-ui-design",
 "name": "Mobile App UI Design",
 "category": "Mobile App Development",
 "description": "Professional Mobile App UI Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/mobile-app-ui-design",
 "type": "service"
 },
 {
 "id": "website-ui-design",
 "name": "Website UI Design",
 "category": "Website Development",
 "description": "Professional Website UI Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-ui-design",
 "type": "service"
 },
 {
 "id": "dashboard-ui-design",
 "name": "Dashboard UI Design",
 "category": "UI/UX Design",
 "description": "Professional Dashboard UI Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/dashboard-ui-design",
 "type": "service"
 },
 {
 "id": "wireframe-design",
 "name": "Wireframe Design",
 "category": "UI/UX Design",
 "description": "Professional Wireframe Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/wireframe-design",
 "type": "service"
 },
 {
 "id": "prototype-design",
 "name": "Prototype Design",
 "category": "UI/UX Design",
 "description": "Professional Prototype Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/prototype-design",
 "type": "service"
 },
 {
 "id": "certificate-design",
 "name": "Certificate Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Certificate Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/certificate-design",
 "type": "service"
 },
 {
 "id": "invitation-card-design",
 "name": "Invitation Card Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Invitation Card Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/invitation-card-design",
 "type": "service"
 },
 {
 "id": "wedding-card-design",
 "name": "Wedding Card Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Wedding Card Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/wedding-card-design",
 "type": "service"
 },
 {
 "id": "id-card-design",
 "name": "ID Card Design",
 "category": "Graphic Design and Branding",
 "description": "Professional ID Card Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/id-card-design",
 "type": "service"
 },
 {
 "id": "calendar-design",
 "name": "Calendar Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Calendar Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/calendar-design",
 "type": "service"
 },
 {
 "id": "sticker-design",
 "name": "Sticker Design",
 "category": "Graphic Design & Branding Services",
 "description": "Professional Sticker Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/sticker-design",
 "type": "service"
 },
 {
 "id": "packaging-design",
 "name": "Packaging Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Packaging Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/packaging-design",
 "type": "service"
 },
 {
 "id": "label-design",
 "name": "Label Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Label Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/label-design",
 "type": "service"
 },
 {
 "id": "t-shirt-design",
 "name": "T-Shirt Design",
 "category": "Graphic Design and Branding",
 "description": "Professional T-Shirt Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/t-shirt-design",
 "type": "service"
 },
 {
 "id": "mug-design",
 "name": "Mug Design",
 "category": "Graphic Design and Branding",
 "description": "Professional Mug Design service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/mug-design",
 "type": "service"
 },
 {
 "id": "domain-transfer",
 "name": "Domain Transfer",
 "category": "Cloud and Hosting",
 "description": "Professional Domain Transfer service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/domain-transfer",
 "type": "service"
 },
 {
 "id": "dns-configuration",
 "name": "DNS Configuration",
 "category": "Cloud and Hosting",
 "description": "Professional DNS Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/dns-configuration",
 "type": "service"
 },
 {
 "id": "subdomain-setup",
 "name": "Subdomain Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Subdomain Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 1500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/subdomain-setup",
 "type": "service"
 },
 {
 "id": "shared-hosting-setup",
 "name": "Shared Hosting Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Shared Hosting Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/shared-hosting-setup",
 "type": "service"
 },
 {
 "id": "cloud-hosting-setup",
 "name": "Cloud Hosting Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Cloud Hosting Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cloud-hosting-setup",
 "type": "service"
 },
 {
 "id": "vps-server-setup",
 "name": "VPS Server Setup",
 "category": "Cloud and Hosting",
 "description": "Professional VPS Server Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/vps-server-setup",
 "type": "service"
 },
 {
 "id": "dedicated-server-setup",
 "name": "Dedicated Server Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Dedicated Server Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/dedicated-server-setup",
 "type": "service"
 },
 {
 "id": "website-backup-restore",
 "name": "Website Backup & Restore",
 "category": "Website Development",
 "description": "Professional Website Backup & Restore service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-backup-restore",
 "type": "service"
 },
 {
 "id": "ssl-certificate-installation",
 "name": "SSL Certificate Installation",
 "category": "Cloud and Hosting",
 "description": "Professional SSL Certificate Installation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ssl-certificate-installation",
 "type": "service"
 },
 {
 "id": "email-hosting-setup",
 "name": "Email Hosting Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Email Hosting Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/email-hosting-setup",
 "type": "service"
 },
 {
 "id": "business-email-configuration",
 "name": "Business Email Configuration",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Business Email Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/business-email-configuration",
 "type": "service"
 },
 {
 "id": "google-workspace-setup",
 "name": "Google Workspace Setup",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Google Workspace Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/google-workspace-setup",
 "type": "service"
 },
 {
 "id": "microsoft-365-setup",
 "name": "Microsoft 365 Setup",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Microsoft 365 Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/microsoft-365-setup",
 "type": "service"
 },
 {
 "id": "firebase-setup",
 "name": "Firebase Setup",
 "category": "Database Services",
 "description": "Professional Firebase Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/firebase-setup",
 "type": "service"
 },
 {
 "id": "supabase-setup",
 "name": "Supabase Setup",
 "category": "Database Services",
 "description": "Professional Supabase Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/supabase-setup",
 "type": "service"
 },
 {
 "id": "mongodb-database-setup",
 "name": "MongoDB Database Setup",
 "category": "Database Services",
 "description": "Professional MongoDB Database Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/mongodb-database-setup",
 "type": "service"
 },
 {
 "id": "mysql-database-setup",
 "name": "MySQL Database Setup",
 "category": "Database Services",
 "description": "Professional MySQL Database Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/mysql-database-setup",
 "type": "service"
 },
 {
 "id": "postgresql-database-setup",
 "name": "PostgreSQL Database Setup",
 "category": "Database Services",
 "description": "Professional PostgreSQL Database Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 7000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/postgresql-database-setup",
 "type": "service"
 },
 {
 "id": "sqlite-database-setup",
 "name": "SQLite Database Setup",
 "category": "Database Services",
 "description": "Professional SQLite Database Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/sqlite-database-setup",
 "type": "service"
 },
 {
 "id": "database-migration",
 "name": "Database Migration",
 "category": "Database Services",
 "description": "Professional Database Migration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/database-migration",
 "type": "service"
 },
 {
 "id": "rest-api-development",
 "name": "REST API Development",
 "category": "API Development",
 "description": "Professional REST API Development service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/rest-api-development",
 "type": "service"
 },
 {
 "id": "graphql-api-development",
 "name": "GraphQL API Development",
 "category": "API Development",
 "description": "Professional GraphQL API Development service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/graphql-api-development",
 "type": "service"
 },
 {
 "id": "custom-api-development",
 "name": "Custom API Development",
 "category": "API Development",
 "description": "Professional Custom API Development service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/custom-api-development",
 "type": "service"
 },
 {
 "id": "third-party-api-integration",
 "name": "Third-Party API Integration",
 "category": "API Integration",
 "description": "Professional Third-Party API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/third-party-api-integration",
 "type": "service"
 },
 {
 "id": "sms-api-integration",
 "name": "SMS API Integration",
 "category": "API Integration",
 "description": "Professional SMS API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/sms-api-integration",
 "type": "service"
 },
 {
 "id": "email-api-integration",
 "name": "Email API Integration",
 "category": "API Integration",
 "description": "Professional Email API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/email-api-integration",
 "type": "service"
 },
 {
 "id": "google-maps-api-integration",
 "name": "Google Maps API Integration",
 "category": "API Integration",
 "description": "Professional Google Maps API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/google-maps-api-integration",
 "type": "service"
 },
 {
 "id": "openai-ai-api-integration",
 "name": "OpenAI / AI API Integration",
 "category": "API Integration",
 "description": "Professional OpenAI / AI API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/openai-ai-api-integration",
 "type": "service"
 },
 {
 "id": "whatsapp-api-integration",
 "name": "WhatsApp API Integration",
 "category": "Mobile App Development",
 "description": "Professional WhatsApp API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/whatsapp-api-integration",
 "type": "service"
 },
 {
 "id": "telegram-api-integration",
 "name": "Telegram API Integration",
 "category": "API Integration",
 "description": "Professional Telegram API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/telegram-api-integration",
 "type": "service"
 },
 {
 "id": "facebook-api-integration",
 "name": "Facebook API Integration",
 "category": "API Integration",
 "description": "Professional Facebook API Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/facebook-api-integration",
 "type": "service"
 },
 {
 "id": "stripe-integration",
 "name": "Stripe Integration",
 "category": "API Integration",
 "description": "Professional Stripe Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/stripe-integration",
 "type": "service"
 },
 {
 "id": "paypal-integration",
 "name": "PayPal Integration",
 "category": "API Integration",
 "description": "Professional PayPal Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/paypal-integration",
 "type": "service"
 },
 {
 "id": "admin-dashboard-development",
 "name": "Admin Dashboard Development",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Admin Dashboard Development service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/admin-dashboard-development",
 "type": "service"
 },
 {
 "id": "analytics-dashboard",
 "name": "Analytics Dashboard",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Analytics Dashboard service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/analytics-dashboard",
 "type": "service"
 },
 {
 "id": "reporting-dashboard",
 "name": "Reporting Dashboard",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Reporting Dashboard service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/reporting-dashboard",
 "type": "service"
 },
 {
 "id": "workflow-automation",
 "name": "Workflow Automation",
 "category": "Automation",
 "description": "Professional Workflow Automation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/workflow-automation",
 "type": "service"
 },
 {
 "id": "business-process-automation",
 "name": "Business Process Automation",
 "category": "Automation",
 "description": "Professional Business Process Automation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/business-process-automation",
 "type": "service"
 },
 {
 "id": "notification-system",
 "name": "Notification System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Notification System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/notification-system",
 "type": "service"
 },
 {
 "id": "otp-verification-system",
 "name": "OTP Verification System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional OTP Verification System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/otp-verification-system",
 "type": "service"
 },
 {
 "id": "authentication-system",
 "name": "Authentication System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Authentication System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/authentication-system",
 "type": "service"
 },
 {
 "id": "role-based-access-control-rbac",
 "name": "Role-Based Access Control (RBAC)",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Role-Based Access Control (RBAC) service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/role-based-access-control-rbac",
 "type": "service"
 },
 {
 "id": "linux-server-configuration",
 "name": "Linux Server Configuration",
 "category": "UI/UX Design",
 "description": "Professional Linux Server Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/linux-server-configuration",
 "type": "service"
 },
 {
 "id": "ubuntu-server-setup",
 "name": "Ubuntu Server Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Ubuntu Server Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ubuntu-server-setup",
 "type": "service"
 },
 {
 "id": "nginx-server-configuration",
 "name": "Nginx Server Configuration",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Nginx Server Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/nginx-server-configuration",
 "type": "service"
 },
 {
 "id": "apache-server-configuration",
 "name": "Apache Server Configuration",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Apache Server Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/apache-server-configuration",
 "type": "service"
 },
 {
 "id": "docker-setup",
 "name": "Docker Setup",
 "category": "DevOps",
 "description": "Professional Docker Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/docker-setup",
 "type": "service"
 },
 {
 "id": "docker-compose-configuration",
 "name": "Docker Compose Configuration",
 "category": "DevOps",
 "description": "Professional Docker Compose Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/docker-compose-configuration",
 "type": "service"
 },
 {
 "id": "github-actions-setup",
 "name": "GitHub Actions Setup",
 "category": "DevOps",
 "description": "Professional GitHub Actions Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/github-actions-setup",
 "type": "service"
 },
 {
 "id": "gitlab-ci-setup",
 "name": "GitLab CI Setup",
 "category": "DevOps",
 "description": "Professional GitLab CI Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/gitlab-ci-setup",
 "type": "service"
 },
 {
 "id": "cloud-storage-integration",
 "name": "Cloud Storage Integration",
 "category": "API Integration",
 "description": "Professional Cloud Storage Integration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cloud-storage-integration",
 "type": "service"
 },
 {
 "id": "file-upload-system",
 "name": "File Upload System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional File Upload System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/file-upload-system",
 "type": "service"
 },
 {
 "id": "media-storage-system",
 "name": "Media Storage System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Media Storage System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/media-storage-system",
 "type": "service"
 },
 {
 "id": "real-time-chat-system",
 "name": "Real-Time Chat System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Real-Time Chat System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 35000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/real-time-chat-system",
 "type": "service"
 },
 {
 "id": "push-notification-system",
 "name": "Push Notification System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Push Notification System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/push-notification-system",
 "type": "service"
 },
 {
 "id": "live-tracking-system",
 "name": "Live Tracking System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Live Tracking System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 30000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/live-tracking-system",
 "type": "service"
 },
 {
 "id": "qr-code-generator-system",
 "name": "QR Code Generator System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional QR Code Generator System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/qr-code-generator-system",
 "type": "service"
 },
 {
 "id": "barcode-generator-system",
 "name": "Barcode Generator System",
 "category": "Cloud, Hosting, Api & Automation Services",
 "description": "Professional Barcode Generator System service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/barcode-generator-system",
 "type": "service"
 },
 {
 "id": "custom-automation-solution",
 "name": "Custom Automation Solution",
 "category": "Automation",
 "description": "Professional Custom Automation Solution service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/custom-automation-solution",
 "type": "service"
 },
 {
 "id": "cloud-infrastructure-setup",
 "name": "Cloud Infrastructure Setup",
 "category": "Cloud and Hosting",
 "description": "Professional Cloud Infrastructure Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 50000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cloud-infrastructure-setup",
 "type": "service"
 },
 {
 "id": "enterprise-devops-solution",
 "name": "Enterprise DevOps Solution",
 "category": "DevOps",
 "description": "Professional Enterprise DevOps Solution service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 100000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/enterprise-devops-solution",
 "type": "service"
 },
 {
 "id": "website-security-audit",
 "name": "Website Security Audit",
 "category": "Website Development",
 "description": "Professional Website Security Audit service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-security-audit",
 "type": "service"
 },
 {
 "id": "web-application-security-audit",
 "name": "Web Application Security Audit",
 "category": "Web Application Development",
 "description": "Professional Web Application Security Audit service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/web-application-security-audit",
 "type": "service"
 },
 {
 "id": "network-security-audit",
 "name": "Network Security Audit",
 "category": "Cyber Security",
 "description": "Professional Network Security Audit service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/network-security-audit",
 "type": "service"
 },
 {
 "id": "cyber-security-consultation",
 "name": "Cyber Security Consultation",
 "category": "Cyber Security",
 "description": "Professional Cyber Security Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cyber-security-consultation",
 "type": "service"
 },
 {
 "id": "security-hardening",
 "name": "Security Hardening",
 "category": "Cyber Security",
 "description": "Professional Security Hardening service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/security-hardening",
 "type": "service"
 },
 {
 "id": "penetration-testing-basic",
 "name": "Penetration Testing (Basic)",
 "category": "Cyber Security",
 "description": "Professional Penetration Testing (Basic) service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/penetration-testing-basic",
 "type": "service"
 },
 {
 "id": "penetration-testing-advanced",
 "name": "Penetration Testing (Advanced)",
 "category": "Cyber Security",
 "description": "Professional Penetration Testing (Advanced) service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 40000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/penetration-testing-advanced",
 "type": "service"
 },
 {
 "id": "vulnerability-assessment",
 "name": "Vulnerability Assessment",
 "category": "Cyber Security",
 "description": "Professional Vulnerability Assessment service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/vulnerability-assessment",
 "type": "service"
 },
 {
 "id": "malware-removal",
 "name": "Malware Removal",
 "category": "Cyber Security",
 "description": "Professional Malware Removal service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/malware-removal",
 "type": "service"
 },
 {
 "id": "virus-removal",
 "name": "Virus Removal",
 "category": "Cyber Security",
 "description": "Professional Virus Removal service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/virus-removal",
 "type": "service"
 },
 {
 "id": "website-hack-recovery",
 "name": "Website Hack Recovery",
 "category": "Website Development",
 "description": "Professional Website Hack Recovery service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-hack-recovery",
 "type": "service"
 },
 {
 "id": "server-security-configuration",
 "name": "Server Security Configuration",
 "category": "Cyber Security",
 "description": "Professional Server Security Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/server-security-configuration",
 "type": "service"
 },
 {
 "id": "firewall-configuration",
 "name": "Firewall Configuration",
 "category": "Cyber Security",
 "description": "Professional Firewall Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/firewall-configuration",
 "type": "service"
 },
 {
 "id": "ssl-security-configuration",
 "name": "SSL Security Configuration",
 "category": "Cloud and Hosting",
 "description": "Professional SSL Security Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/ssl-security-configuration",
 "type": "service"
 },
 {
 "id": "backup-disaster-recovery",
 "name": "Backup & Disaster Recovery",
 "category": "Cyber Security",
 "description": "Professional Backup & Disaster Recovery service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/backup-disaster-recovery",
 "type": "service"
 },
 {
 "id": "data-encryption-setup",
 "name": "Data Encryption Setup",
 "category": "Cyber Security",
 "description": "Professional Data Encryption Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/data-encryption-setup",
 "type": "service"
 },
 {
 "id": "basic-seo-setup",
 "name": "Basic SEO Setup",
 "category": "SEO",
 "description": "Professional Basic SEO Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/basic-seo-setup",
 "type": "service"
 },
 {
 "id": "advanced-seo-optimization",
 "name": "Advanced SEO Optimization",
 "category": "SEO",
 "description": "Professional Advanced SEO Optimization service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 25000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/advanced-seo-optimization",
 "type": "service"
 },
 {
 "id": "technical-seo",
 "name": "Technical SEO",
 "category": "SEO",
 "description": "Professional Technical SEO service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 20000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/technical-seo",
 "type": "service"
 },
 {
 "id": "on-page-seo",
 "name": "On-Page SEO",
 "category": "SEO",
 "description": "Professional On-Page SEO service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/on-page-seo",
 "type": "service"
 },
 {
 "id": "off-page-seo",
 "name": "Off-Page SEO",
 "category": "SEO",
 "description": "Professional Off-Page SEO service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 18000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/off-page-seo",
 "type": "service"
 },
 {
 "id": "local-seo",
 "name": "Local SEO",
 "category": "SEO",
 "description": "Professional Local SEO service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/local-seo",
 "type": "service"
 },
 {
 "id": "google-search-console-setup",
 "name": "Google Search Console Setup",
 "category": "SEO",
 "description": "Professional Google Search Console Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/google-search-console-setup",
 "type": "service"
 },
 {
 "id": "google-analytics-setup",
 "name": "Google Analytics Setup",
 "category": "SEO",
 "description": "Professional Google Analytics Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/google-analytics-setup",
 "type": "service"
 },
 {
 "id": "google-business-profile-setup",
 "name": "Google Business Profile Setup",
 "category": "Seo Services",
 "description": "Professional Google Business Profile Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/google-business-profile-setup",
 "type": "service"
 },
 {
 "id": "keyword-research",
 "name": "Keyword Research",
 "category": "SEO",
 "description": "Professional Keyword Research service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/keyword-research",
 "type": "service"
 },
 {
 "id": "seo-content-optimization",
 "name": "SEO Content Optimization",
 "category": "SEO",
 "description": "Professional SEO Content Optimization service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/seo-content-optimization",
 "type": "service"
 },
 {
 "id": "monthly-seo-package",
 "name": "Monthly SEO Package",
 "category": "SEO",
 "description": "Professional Monthly SEO Package service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/monthly-seo-package",
 "type": "service"
 },
 {
 "id": "digital-marketing-consultation",
 "name": "Digital Marketing Consultation",
 "category": "Digital Marketing",
 "description": "Professional Digital Marketing Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/digital-marketing-consultation",
 "type": "service"
 },
 {
 "id": "facebook-marketing-setup",
 "name": "Facebook Marketing Setup",
 "category": "Digital Marketing",
 "description": "Professional Facebook Marketing Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/facebook-marketing-setup",
 "type": "service"
 },
 {
 "id": "instagram-marketing-setup",
 "name": "Instagram Marketing Setup",
 "category": "Digital Marketing",
 "description": "Professional Instagram Marketing Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/instagram-marketing-setup",
 "type": "service"
 },
 {
 "id": "tiktok-marketing-setup",
 "name": "TikTok Marketing Setup",
 "category": "Digital Marketing",
 "description": "Professional TikTok Marketing Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/tiktok-marketing-setup",
 "type": "service"
 },
 {
 "id": "linkedin-marketing-setup",
 "name": "LinkedIn Marketing Setup",
 "category": "Digital Marketing",
 "description": "Professional LinkedIn Marketing Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/linkedin-marketing-setup",
 "type": "service"
 },
 {
 "id": "youtube-channel-setup",
 "name": "YouTube Channel Setup",
 "category": "Digital Marketing",
 "description": "Professional YouTube Channel Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/youtube-channel-setup",
 "type": "service"
 },
 {
 "id": "email-marketing-setup",
 "name": "Email Marketing Setup",
 "category": "Digital Marketing",
 "description": "Professional Email Marketing Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/email-marketing-setup",
 "type": "service"
 },
 {
 "id": "sms-marketing-setup",
 "name": "SMS Marketing Setup",
 "category": "Digital Marketing",
 "description": "Professional SMS Marketing Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/sms-marketing-setup",
 "type": "service"
 },
 {
 "id": "google-ads-setup",
 "name": "Google Ads Setup",
 "category": "Digital Marketing",
 "description": "Professional Google Ads Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/google-ads-setup",
 "type": "service"
 },
 {
 "id": "facebook-ads-setup",
 "name": "Facebook Ads Setup",
 "category": "Digital Marketing",
 "description": "Professional Facebook Ads Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/facebook-ads-setup",
 "type": "service"
 },
 {
 "id": "meta-ads-management",
 "name": "Meta Ads Management",
 "category": "Digital Marketing",
 "description": "Professional Meta Ads Management service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/meta-ads-management",
 "type": "service"
 },
 {
 "id": "google-ads-management",
 "name": "Google Ads Management",
 "category": "Digital Marketing",
 "description": "Professional Google Ads Management service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/google-ads-management",
 "type": "service"
 },
 {
 "id": "content-marketing",
 "name": "Content Marketing",
 "category": "Digital Marketing",
 "description": "Professional Content Marketing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 15000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/content-marketing",
 "type": "service"
 },
 {
 "id": "on-site-it-support",
 "name": "On-Site IT Support",
 "category": "IT Support",
 "description": "Professional On-Site IT Support service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/on-site-it-support",
 "type": "service"
 },
 {
 "id": "pc-health-check",
 "name": "PC Health Check",
 "category": "IT Support",
 "description": "Professional PC Health Check service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/pc-health-check",
 "type": "service"
 },
 {
 "id": "windows-installation",
 "name": "Windows Installation",
 "category": "IT Support",
 "description": "Professional Windows Installation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/windows-installation",
 "type": "service"
 },
 {
 "id": "linux-installation",
 "name": "Linux Installation",
 "category": "UI/UX Design",
 "description": "Professional Linux Installation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/linux-installation",
 "type": "service"
 },
 {
 "id": "software-installation",
 "name": "Software Installation",
 "category": "It Support",
 "description": "Professional Software Installation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 1000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/software-installation",
 "type": "service"
 },
 {
 "id": "driver-installation",
 "name": "Driver Installation",
 "category": "IT Support",
 "description": "Professional Driver Installation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 1500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/driver-installation",
 "type": "service"
 },
 {
 "id": "pc-optimization",
 "name": "PC Optimization",
 "category": "IT Support",
 "description": "Professional PC Optimization service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/pc-optimization",
 "type": "service"
 },
 {
 "id": "laptop-optimization",
 "name": "Laptop Optimization",
 "category": "It Support",
 "description": "Professional Laptop Optimization service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/laptop-optimization",
 "type": "service"
 },
 {
 "id": "network-troubleshooting",
 "name": "Network Troubleshooting",
 "category": "IT Support",
 "description": "Professional Network Troubleshooting service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 4000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/network-troubleshooting",
 "type": "service"
 },
 {
 "id": "wi-fi-configuration",
 "name": "Wi-Fi Configuration",
 "category": "IT Support",
 "description": "Professional Wi-Fi Configuration service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/wi-fi-configuration",
 "type": "service"
 },
 {
 "id": "printer-setup",
 "name": "Printer Setup",
 "category": "IT Support",
 "description": "Professional Printer Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/printer-setup",
 "type": "service"
 },
 {
 "id": "nas-setup",
 "name": "NAS Setup",
 "category": "IT Support",
 "description": "Professional NAS Setup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/nas-setup",
 "type": "service"
 },
 {
 "id": "data-backup",
 "name": "Data Backup",
 "category": "It Support",
 "description": "Professional Data Backup service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/data-backup",
 "type": "service"
 },
 {
 "id": "data-recovery",
 "name": "Data Recovery",
 "category": "IT Support",
 "description": "Professional Data Recovery service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/data-recovery",
 "type": "service"
 },
 {
 "id": "e-commerce-maintenance",
 "name": "E-Commerce Maintenance",
 "category": "Maintenance",
 "description": "Professional E-Commerce Maintenance service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/e-commerce-maintenance",
 "type": "service"
 },
 {
 "id": "mobile-app-maintenance",
 "name": "Mobile App Maintenance",
 "category": "Mobile App Development",
 "description": "Professional Mobile App Maintenance service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/mobile-app-maintenance",
 "type": "service"
 },
 {
 "id": "software-maintenance",
 "name": "Software Maintenance",
 "category": "Maintenance",
 "description": "Professional Software Maintenance service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/software-maintenance",
 "type": "service"
 },
 {
 "id": "cloud-server-maintenance",
 "name": "Cloud Server Maintenance",
 "category": "Cloud and Hosting",
 "description": "Professional Cloud Server Maintenance service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 12000,
 "prefix": "Starting from",
 "billingPeriod": "per month",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cloud-server-maintenance",
 "type": "service"
 },
 {
 "id": "bug-fixing",
 "name": "Bug Fixing",
 "category": "Maintenance",
 "description": "Professional Bug Fixing service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 3000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/bug-fixing",
 "type": "service"
 },
 {
 "id": "performance-optimization",
 "name": "Performance Optimization",
 "category": "Maintenance",
 "description": "Professional Performance Optimization service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/performance-optimization",
 "type": "service"
 },
 {
 "id": "database-maintenance",
 "name": "Database Maintenance",
 "category": "Maintenance",
 "description": "Professional Database Maintenance service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 6000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/database-maintenance",
 "type": "service"
 },
 {
 "id": "api-maintenance",
 "name": "API Maintenance",
 "category": "API Development",
 "description": "Professional API Maintenance service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/api-maintenance",
 "type": "service"
 },
 {
 "id": "content-updates",
 "name": "Content Updates",
 "category": "Maintenance",
 "description": "Professional Content Updates service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 2500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/content-updates",
 "type": "service"
 },
 {
 "id": "monthly-technical-support",
 "name": "Monthly Technical Support",
 "category": "Maintenance",
 "description": "Professional Monthly Technical Support service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 10000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/monthly-technical-support",
 "type": "service"
 },
 {
 "id": "annual-maintenance-contract-amc",
 "name": "Annual Maintenance Contract (AMC)",
 "category": "Maintenance",
 "description": "Professional Annual Maintenance Contract (AMC) service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 60000,
 "prefix": "Starting from",
 "billingPeriod": "per year",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/annual-maintenance-contract-amc",
 "type": "service"
 },
 {
 "id": "business-it-consultation",
 "name": "Business IT Consultation",
 "category": "Consultation",
 "description": "Professional Business IT Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/business-it-consultation",
 "type": "service"
 },
 {
 "id": "software-project-consultation",
 "name": "Software Project Consultation",
 "category": "Consultation",
 "description": "Professional Software Project Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 7500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/software-project-consultation",
 "type": "service"
 },
 {
 "id": "website-planning-consultation",
 "name": "Website Planning Consultation",
 "category": "Website Development",
 "description": "Professional Website Planning Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/website-planning-consultation",
 "type": "service"
 },
 {
 "id": "mobile-app-consultation",
 "name": "Mobile App Consultation",
 "category": "Mobile App Development",
 "description": "Professional Mobile App Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 5000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/mobile-app-consultation",
 "type": "service"
 },
 {
 "id": "cloud-consultation",
 "name": "Cloud Consultation",
 "category": "Cloud and Hosting",
 "description": "Professional Cloud Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 7500,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cloud-consultation",
 "type": "service"
 },
 {
 "id": "cyber-security-consultation-2",
 "name": "Cyber Security Consultation",
 "category": "Cyber Security",
 "description": "Professional Cyber Security Consultation service tailored to the customer's scope, features, integrations and delivery requirements.",
 "priceLkr": 8000,
 "prefix": "Starting from",
 "billingPeriod": "",
 "status": "Available",
 "features": [
 "Custom requirements",
 "Professional implementation",
 "Quotation-based delivery"
 ],
 "deliveryTime": "Based on scope",
 "supportPeriod": "As quoted",
 "route": "#/services/cyber-security-consultation-2",
 "type": "service"
 }
 ],
 premium: [
 {"id":"ai-agent-development","name":"AI Agent Development","category":"AI Premium Solutions","description":"Premium AI Agent Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-agent-development","type":"service"},
 {"id":"autonomous-ai-systems","name":"Autonomous AI Systems","category":"AI Premium Solutions","description":"Premium Autonomous AI Systems solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":180000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/autonomous-ai-systems","type":"service"},
 {"id":"multi-agent-ai-systems","name":"Multi-Agent AI Systems","category":"AI Premium Solutions","description":"Premium Multi-Agent AI Systems solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":220000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/multi-agent-ai-systems","type":"service"},
 {"id":"voice-ai-receptionist","name":"Voice AI Receptionist","category":"AI Premium Solutions","description":"Premium Voice AI Receptionist solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":85000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/voice-ai-receptionist","type":"service"},
 {"id":"ai-call-center","name":"AI Call Center","category":"AI Premium Solutions","description":"Premium AI Call Center solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":180000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-call-center","type":"service"},
 {"id":"ai-sales-agent","name":"AI Sales Agent","category":"AI Premium Solutions","description":"Premium AI Sales Agent solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":90000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-sales-agent","type":"service"},
 {"id":"ai-coding-assistant","name":"AI Coding Assistant","category":"AI Premium Solutions","description":"Premium AI Coding Assistant solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-coding-assistant","type":"service"},
 {"id":"ai-document-processing","name":"AI Document Processing","category":"AI Premium Solutions","description":"Premium AI Document Processing solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":80000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-document-processing","type":"service"},
 {"id":"ai-workflow-automation","name":"AI Workflow Automation","category":"AI Premium Solutions","description":"Premium AI Workflow Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":65000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-workflow-automation","type":"service"},
 {"id":"ai-business-intelligence","name":"AI Business Intelligence","category":"AI Premium Solutions","description":"Premium AI Business Intelligence solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":95000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-business-intelligence","type":"service"},
 {"id":"ai-analytics-platform","name":"AI Analytics Platform","category":"AI Premium Solutions","description":"Premium AI Analytics Platform solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-analytics-platform","type":"service"},
 {"id":"ai-knowledge-base","name":"AI Knowledge Base","category":"AI Premium Solutions","description":"Premium AI Knowledge Base solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":60000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-knowledge-base","type":"service"},
 {"id":"ai-search-engine","name":"AI Search Engine","category":"AI Premium Solutions","description":"Premium AI Search Engine solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":100000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-search-engine","type":"service"},
 {"id":"ai-recommendation-system","name":"AI Recommendation System","category":"AI Premium Solutions","description":"Premium AI Recommendation System solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":90000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-recommendation-system","type":"service"},
 {"id":"ai-medical-assistant","name":"AI Medical Assistant","category":"AI Premium Solutions","description":"Premium AI Medical Assistant solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":180000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-medical-assistant","type":"service"},
 {"id":"ai-legal-assistant","name":"AI Legal Assistant","category":"AI Premium Solutions","description":"Premium AI Legal Assistant solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":180000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-legal-assistant","type":"service"},
 {"id":"ai-finance-assistant","name":"AI Finance Assistant","category":"AI Premium Solutions","description":"Premium AI Finance Assistant solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":160000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-finance-assistant","type":"service"},
 {"id":"ai-hr-assistant","name":"AI HR Assistant","category":"AI Premium Solutions","description":"Premium AI HR Assistant solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":100000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-hr-assistant","type":"service"},
 {"id":"ai-recruitment-system","name":"AI Recruitment System","category":"AI Premium Solutions","description":"Premium AI Recruitment System solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-recruitment-system","type":"service"},
 {"id":"ai-education-platform","name":"AI Education Platform","category":"AI Premium Solutions","description":"Premium AI Education Platform solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":140000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-education-platform","type":"service"},
 {"id":"saas-development","name":"SaaS Development","category":"SaaS and Enterprise","description":"Premium SaaS Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":180000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/saas-development","type":"service"},
 {"id":"crm-development","name":"CRM Development","category":"SaaS and Enterprise","description":"Premium CRM Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/crm-development","type":"service"},
 {"id":"erp-development","name":"ERP Development","category":"SaaS and Enterprise","description":"Premium ERP Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":300000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/erp-development","type":"service"},
 {"id":"hrm-development","name":"HRM Development","category":"SaaS and Enterprise","description":"Premium HRM Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":100000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/hrm-development","type":"service"},
 {"id":"pos-development","name":"POS Development","category":"SaaS and Enterprise","description":"Premium POS Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":80000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/pos-development","type":"service"},
 {"id":"inventory-software","name":"Inventory Software","category":"SaaS and Enterprise","description":"Premium Inventory Software solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":75000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/inventory-software","type":"service"},
 {"id":"accounting-software","name":"Accounting Software","category":"Premium Solutions","description":"Premium Accounting Software solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":100000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/accounting-software","type":"service"},
 {"id":"hospital-erp","name":"Hospital ERP","category":"SaaS and Enterprise","description":"Premium Hospital ERP solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":450000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/hospital-erp","type":"service"},
 {"id":"school-erp","name":"School ERP","category":"SaaS and Enterprise","description":"Premium School ERP solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":180000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/school-erp","type":"service"},
 {"id":"hotel-erp","name":"Hotel ERP","category":"SaaS and Enterprise","description":"Premium Hotel ERP solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":250000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/hotel-erp","type":"service"},
 {"id":"custom-web-portal","name":"Custom Web Portal","category":"Portals and Dashboards","description":"Premium Custom Web Portal solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":80000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/custom-web-portal","type":"service"},
 {"id":"client-portal","name":"Client Portal","category":"Portals and Dashboards","description":"Premium Client Portal solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":60000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/client-portal","type":"service"},
 {"id":"employee-portal","name":"Employee Portal","category":"Portals and Dashboards","description":"Premium Employee Portal solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":70000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/employee-portal","type":"service"},
 {"id":"vendor-portal","name":"Vendor Portal","category":"Portals and Dashboards","description":"Premium Vendor Portal solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":70000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/vendor-portal","type":"service"},
 {"id":"supplier-portal","name":"Supplier Portal","category":"Portals and Dashboards","description":"Premium Supplier Portal solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":70000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/supplier-portal","type":"service"},
 {"id":"customer-dashboard","name":"Customer Dashboard","category":"Portals and Dashboards","description":"Premium Customer Dashboard solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":45000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/customer-dashboard","type":"service"},
 {"id":"admin-dashboard","name":"Admin Dashboard","category":"Portals and Dashboards","description":"Premium Admin Dashboard solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":35000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/admin-dashboard","type":"service"},
 {"id":"executive-dashboard","name":"Executive Dashboard","category":"Portals and Dashboards","description":"Premium Executive Dashboard solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":60000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/executive-dashboard","type":"service"},
 {"id":"payment-gateway-integration","name":"Payment Gateway Integration","category":"Payments and Automation","description":"Premium Payment Gateway Integration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":18000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/payment-gateway-integration","type":"service"},
 {"id":"subscription-billing-system","name":"Subscription Billing System","category":"Payments and Automation","description":"Premium Subscription Billing System solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":55000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/subscription-billing-system","type":"service"},
 {"id":"invoice-automation","name":"Invoice Automation","category":"Payments and Automation","description":"Premium Invoice Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":40000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/invoice-automation","type":"service"},
 {"id":"digital-signature-system","name":"Digital Signature System","category":"Payments and Automation","description":"Premium Digital Signature System solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":50000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/digital-signature-system","type":"service"},
 {"id":"e-commerce-automation","name":"E-Commerce Automation","category":"Payments and Automation","description":"Premium E-Commerce Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":60000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/e-commerce-automation","type":"service"},
 {"id":"warehouse-automation","name":"Warehouse Automation","category":"Payments and Automation","description":"Premium Warehouse Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":80000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/warehouse-automation","type":"service"},
 {"id":"cloud-infrastructure","name":"Cloud Infrastructure","category":"Cloud and DevOps","description":"Premium Cloud Infrastructure solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":60000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/cloud-infrastructure","type":"service"},
 {"id":"aws-deployment","name":"AWS Deployment","category":"Cloud and DevOps","description":"Premium AWS Deployment solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/aws-deployment","type":"service"},
 {"id":"microsoft-azure-deployment","name":"Microsoft Azure Deployment","category":"Cloud and DevOps","description":"Premium Microsoft Azure Deployment solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/microsoft-azure-deployment","type":"service"},
 {"id":"google-cloud-deployment","name":"Google Cloud Deployment","category":"Cloud and DevOps","description":"Premium Google Cloud Deployment solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/google-cloud-deployment","type":"service"},
 {"id":"docker-deployment","name":"Docker Deployment","category":"Cloud and DevOps","description":"Premium Docker Deployment solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":20000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/docker-deployment","type":"service"},
 {"id":"kubernetes-deployment","name":"Kubernetes Deployment","category":"Cloud and DevOps","description":"Premium Kubernetes Deployment solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":45000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/kubernetes-deployment","type":"service"},
 {"id":"database-optimization","name":"Database Optimization","category":"Database and Infrastructure","description":"Premium Database Optimization solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":18000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/database-optimization","type":"service"},
 {"id":"database-clustering","name":"Database Clustering","category":"Database and Infrastructure","description":"Premium Database Clustering solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":60000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/database-clustering","type":"service"},
 {"id":"high-availability-setup","name":"High Availability Setup","category":"Database and Infrastructure","description":"Premium High Availability Setup solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":80000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/high-availability-setup","type":"service"},
 {"id":"load-balancer-setup","name":"Load Balancer Setup","category":"Database and Infrastructure","description":"Premium Load Balancer Setup solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":35000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/load-balancer-setup","type":"service"},
 {"id":"cdn-configuration","name":"CDN Configuration","category":"Database and Infrastructure","description":"Premium CDN Configuration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":12000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/cdn-configuration","type":"service"},
 {"id":"cyber-security-audit","name":"Cyber Security Audit","category":"Cyber Security","description":"Premium Cyber Security Audit solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":25000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/cyber-security-audit","type":"service"},
 {"id":"iso-27001-consultation","name":"ISO 27001 Consultation","category":"Consultation","description":"Premium ISO 27001 Consultation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":40000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/iso-27001-consultation","type":"service"},
 {"id":"penetration-testing","name":"Penetration Testing","category":"Cyber Security","description":"Premium Penetration Testing solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":35000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/penetration-testing","type":"service"},
 {"id":"soc-setup","name":"SOC Setup","category":"Cyber Security","description":"Premium SOC Setup solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":180000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/soc-setup","type":"service"},
 {"id":"security-monitoring","name":"Security Monitoring","category":"Cyber Security","description":"Premium Security Monitoring solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":12000,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/security-monitoring","type":"service"},
 {"id":"disaster-recovery","name":"Disaster Recovery","category":"Cyber Security","description":"Premium Disaster Recovery solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":45000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/disaster-recovery","type":"service"},
 {"id":"iot-solutions","name":"IoT Solutions","category":"IoT and Smart Systems","description":"Premium IoT Solutions solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/iot-solutions","type":"service"},
 {"id":"smart-home-systems","name":"Smart Home Systems","category":"IoT and Smart Systems","description":"Premium Smart Home Systems solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":90000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/smart-home-systems","type":"service"},
 {"id":"smart-office-systems","name":"Smart Office Systems","category":"IoT and Smart Systems","description":"Premium Smart Office Systems solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/smart-office-systems","type":"service"},
 {"id":"gps-tracking-system","name":"GPS Tracking System","category":"IoT and Smart Systems","description":"Premium GPS Tracking System solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":85000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/gps-tracking-system","type":"service"},
 {"id":"fleet-tracking-system","name":"Fleet Tracking System","category":"IoT and Smart Systems","description":"Premium Fleet Tracking System solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":140000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/fleet-tracking-system","type":"service"},
 {"id":"rfid-management","name":"RFID Management","category":"IoT and Smart Systems","description":"Premium RFID Management solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":80000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/rfid-management","type":"service"},
 {"id":"blockchain-development","name":"Blockchain Development","category":"Blockchain","description":"Premium Blockchain Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":300000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/blockchain-development","type":"service"},
 {"id":"nft-marketplace","name":"NFT Marketplace","category":"Blockchain","description":"Premium NFT Marketplace solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":350000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/nft-marketplace","type":"service"},
 {"id":"crypto-wallet","name":"Crypto Wallet","category":"Blockchain","description":"Premium Crypto Wallet solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":280000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/crypto-wallet","type":"service"},
 {"id":"smart-contract-development","name":"Smart Contract Development","category":"Blockchain","description":"Premium Smart Contract Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":120000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/smart-contract-development","type":"service"},
 {"id":"desktop-software","name":"Desktop Software","category":"Desktop and Extensions","description":"Premium Desktop Software solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":70000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/desktop-software","type":"service"},
 {"id":"windows-software","name":"Windows Software","category":"Desktop and Extensions","description":"Premium Windows Software solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":70000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/windows-software","type":"service"},
 {"id":"mac-software","name":"Mac Software","category":"Desktop and Extensions","description":"Premium Mac Software solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":90000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/mac-software","type":"service"},
 {"id":"linux-software","name":"Linux Software","category":"Desktop and Extensions","description":"Premium Linux Software solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":80000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/linux-software","type":"service"},
 {"id":"browser-extension-development","name":"Browser Extension Development","category":"Desktop and Extensions","description":"Premium Browser Extension Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/browser-extension-development","type":"service"},
 {"id":"chrome-extension","name":"Chrome Extension","category":"Desktop and Extensions","description":"Premium Chrome Extension solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/chrome-extension","type":"service"},
 {"id":"edge-extension","name":"Edge Extension","category":"Desktop and Extensions","description":"Premium Edge Extension solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/edge-extension","type":"service"},
 {"id":"firefox-extension","name":"Firefox Extension","category":"Desktop and Extensions","description":"Premium Firefox Extension solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/firefox-extension","type":"service"},
 {"id":"api-development","name":"API Development","category":"API and Integrations","description":"Premium API Development solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":30000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/api-development","type":"service"},
 {"id":"rest-api","name":"REST API","category":"API and Integrations","description":"Premium REST API solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":25000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/rest-api","type":"service"},
 {"id":"graphql-api","name":"GraphQL API","category":"API and Integrations","description":"Premium GraphQL API solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":35000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/graphql-api","type":"service"},
 {"id":"webhook-integration","name":"Webhook Integration","category":"API and Integrations","description":"Premium Webhook Integration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/webhook-integration","type":"service"},
 {"id":"third-party-integration","name":"Third Party Integration","category":"API and Integrations","description":"Premium Third Party Integration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":20000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/third-party-integration","type":"service"},
 {"id":"automation-systems","name":"Automation Systems","category":"Automation","description":"Premium Automation Systems solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":45000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/automation-systems","type":"service"},
 {"id":"whatsapp-automation","name":"WhatsApp Automation","category":"Automation","description":"Premium WhatsApp Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":35000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/whatsapp-automation","type":"service"},
 {"id":"telegram-automation","name":"Telegram Automation","category":"Automation","description":"Premium Telegram Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":25000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/telegram-automation","type":"service"},
 {"id":"discord-automation","name":"Discord Automation","category":"Automation","description":"Premium Discord Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":25000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/discord-automation","type":"service"},
 {"id":"email-automation","name":"Email Automation","category":"Automation","description":"Premium Email Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":18000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/email-automation","type":"service"},
 {"id":"sms-automation","name":"SMS Automation","category":"Automation","description":"Premium SMS Automation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":20000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/sms-automation","type":"service"},
 {"id":"digital-marketing","name":"Digital Marketing","category":"Marketing and Content","description":"Premium Digital Marketing solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/digital-marketing","type":"service"},
 {"id":"seo","name":"SEO","category":"Marketing and Content","description":"Premium SEO solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/seo","type":"service"},
 {"id":"google-ads","name":"Google Ads","category":"Marketing and Content","description":"Premium Google Ads solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/google-ads","type":"service"},
 {"id":"meta-ads","name":"Meta Ads","category":"Marketing and Content","description":"Premium Meta Ads solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/meta-ads","type":"service"},
 {"id":"social-media-management","name":"Social Media Management","category":"Cyber Security","description":"Premium Social Media Management solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":18000,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/social-media-management","type":"service"},
 {"id":"content-writing","name":"Content Writing","category":"Marketing and Content","description":"Premium Content Writing solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":2000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/content-writing","type":"service"},
 {"id":"copywriting","name":"Copywriting","category":"Marketing and Content","description":"Premium Copywriting solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":3000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/copywriting","type":"service"},
 {"id":"ui-ux-design","name":"UI/UX Design","category":"Design and Media","description":"Premium UI/UX Design solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ui-ux-design","type":"service"},
 {"id":"brand-identity","name":"Brand Identity","category":"Design and Media","description":"Premium Brand Identity solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":20000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/brand-identity","type":"service"},
 {"id":"logo-design","name":"Logo Design","category":"Design and Media","description":"Premium Logo Design solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":6000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/logo-design","type":"service"},
 {"id":"motion-graphics","name":"Motion Graphics","category":"Design and Media","description":"Premium Motion Graphics solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":8000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/motion-graphics","type":"service"},
 {"id":"video-editing","name":"Video Editing","category":"Design and Media","description":"Premium Video Editing solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":3500,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/video-editing","type":"service"},
 {"id":"3d-product-design","name":"3D Product Design","category":"Design and Media","description":"Premium 3D Product Design solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":20000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/3d-product-design","type":"service"},
 {"id":"domain-registration","name":"Domain Registration","category":"Hosting and Web Operations","description":"Premium Domain Registration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":4000,"prefix":"Starting from","billingPeriod":"per year","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/domain-registration","type":"service"},
 {"id":"web-hosting","name":"Web Hosting","category":"Hosting and Web Operations","description":"Premium Web Hosting solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":8000,"prefix":"Starting from","billingPeriod":"per year","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/web-hosting","type":"service"},
 {"id":"cloud-hosting","name":"Cloud Hosting","category":"Cloud and DevOps","description":"Premium Cloud Hosting solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"per year","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/cloud-hosting","type":"service"},
 {"id":"business-email","name":"Business Email","category":"Hosting and Web Operations","description":"Premium Business Email solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":5000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/business-email","type":"service"},
 {"id":"ssl-certificate","name":"SSL Certificate","category":"Hosting and Web Operations","description":"Premium SSL Certificate solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":3000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ssl-certificate","type":"service"},
 {"id":"website-migration","name":"Website Migration","category":"Hosting and Web Operations","description":"Premium Website Migration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":8000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/website-migration","type":"service"},
 {"id":"website-maintenance","name":"Website Maintenance","category":"Hosting and Web Operations","description":"Premium Website Maintenance solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":7500,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/website-maintenance","type":"service"},
 {"id":"app-maintenance","name":"App Maintenance","category":"Hosting and Web Operations","description":"Premium App Maintenance solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":10000,"prefix":"Starting from","billingPeriod":"per month","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/app-maintenance","type":"service"},
 {"id":"remote-it-support","name":"Remote IT Support","category":"IT Support","description":"Premium Remote IT Support solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":2500,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/remote-it-support","type":"service"},
 {"id":"server-administration","name":"Server Administration","category":"IT Support","description":"Premium Server Administration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/server-administration","type":"service"},
 {"id":"linux-administration","name":"Linux Administration","category":"IT Support","description":"Premium Linux Administration solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":12000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/linux-administration","type":"service"},
 {"id":"windows-server-management","name":"Windows Server Management","category":"IT Support","description":"Premium Windows Server Management solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":12000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/windows-server-management","type":"service"},
 {"id":"devops-services","name":"DevOps Services","category":"Cloud and DevOps","description":"Premium DevOps Services solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":40000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/devops-services","type":"service"},
 {"id":"ci-cd-pipeline-setup","name":"CI/CD Pipeline Setup","category":"Cloud and DevOps","description":"Premium CI/CD Pipeline Setup solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":25000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ci-cd-pipeline-setup","type":"service"},
 {"id":"github-management","name":"GitHub Management","category":"Cloud and DevOps","description":"Premium GitHub Management solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":8000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/github-management","type":"service"},
 {"id":"consultation-services","name":"Consultation Services","category":"Consultation","description":"Premium Consultation Services solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":5000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/consultation-services","type":"service"},
 {"id":"ai-consultation","name":"AI Consultation","category":"AI Premium Solutions","description":"Premium AI Consultation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":7500,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/ai-consultation","type":"service"},
 {"id":"software-consultation","name":"Software Consultation","category":"Consultation","description":"Premium Software Consultation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":7500,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/software-consultation","type":"service"},
 {"id":"startup-consultation","name":"Startup Consultation","category":"Consultation","description":"Premium Startup Consultation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":10000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/startup-consultation","type":"service"},
 {"id":"digital-transformation-consultation","name":"Digital Transformation Consultation","category":"Consultation","description":"Premium Digital Transformation Consultation solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":15000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/digital-transformation-consultation","type":"service"},
 {"id":"technology-roadmap-planning","name":"Technology Roadmap Planning","category":"Consultation","description":"Premium Technology Roadmap Planning solution from MI CORTEX X, tailored for advanced business, enterprise or professional requirements.","priceLkr":20000,"prefix":"Starting from","billingPeriod":"","status":"Premium","features":["Premium implementation","Professional configuration","Quotation-based delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/technology-roadmap-planning","type":"service"},
 {"id":"canva-pro-1-year","name":"CANVA PRO - 1 YEAR","category":"Design and Assets","description":"CANVA PRO access for one year with professional design tools, premium templates and creative assets for personal or business projects.","priceLkr":150,"prefix":"Price","billingPeriod":"1 year","status":"Premium","features":["CANVA PRO design tools","Premium templates and creative assets","Custom delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/canva-pro-1-year","type":"product"},
 {"id":"canva-pro-lifetime","name":"CANVA PRO - LIFETIME","category":"Design and Assets","description":"CANVA PRO lifetime access option with professional design tools, premium templates and creative assets for personal or business projects.","priceLkr":300,"prefix":"Price","billingPeriod":"Lifetime","status":"Premium","features":["CANVA PRO design tools","Premium templates and creative assets","Custom delivery"],"deliveryTime":"Custom","supportPeriod":"According to agreement","route":"#/premium/canva-pro-lifetime","type":"product"}
 ]
};


 pageData.premium = {
 title: "PREMIUM",
 intro: "Explore advanced, enterprise-ready and specialist technology solutions from MI CORTEX X.",
 categories: []
 };

 const validPages = ["overview",...Object.keys(pageData), "premium"];
 const esc = (value) => String(value?? "").replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
 const priceFormatter = new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 });
 const state = { currency: "LKR", exchangeRate: null, exchangeRateUpdatedAt: null, rateLoading: false, rateError: "", ratePromise: null, filteredType: "all", selectedGroup: "all", search: "", sort: "price-low", pageSize: 8, visibleCount: 8, modalItem: null, modalReference: null };

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


 function hashState() { const raw = location.hash.replace(/^#\/?/, "") || "overview"; const [pageRaw = "overview", category = "", subtopic = ""] = raw.split("/"); const page = validPages.includes(pageRaw)? pageRaw: "overview"; return { page, category, subtopic }; }
 function setHash(page, category = "", subtopic = "") { const next = `#/${page}${category? `/${category}`: ""}${subtopic? `/${subtopic}`: ""}`; if (location.hash === next) route(); else location.hash = next; }
 function getPageTitle(page) { return pageData[page]?.title || "MI CORTEX X"; }
 function categoryById(page, id) { return pageData[page]?.categories.find((item) => item.id === id) || null; }
 function subtopicId(title, index) { return String(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + (index + 1); }
 function getCatalogueItems(page) {
 if (page === "products") return catalogueData.products || [];
 if (page === "services") return catalogueData.services || [];
 if (page === "premium") return (catalogueData.premium || []).map((item) => ({ ...item, status: "👑 PREMIUM" }));
 if (page === "pricing") return [...(catalogueData.products || []),...(catalogueData.services || [])];
 return [];
 }
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
 "[data-mcx-rate-status],.mcx-rate-status"
 )
.forEach((element) => {
 element.textContent = message;
 element.setAttribute(
 "aria-busy",
 busy? "true": "false"
 );
 });
 }

 function refreshCurrentCatalogue() {
 const currentPage = hashState().page;

 if (
 ["products", "services", "pricing", "premium"].includes(
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

 if (state.rateAttempted &&!force) {
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

 function actionMarkup(page, category) { if (page === "contact") { if (category.id === "email") return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${company.email}">SEND EMAIL</a></div>`; if (category.id === "whatsapp") return `<div class="mcx-action-row"><a class="mcx-action" href="https://wa.me/${company.whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`; if (["contact-info", "support", "send-inquiry", "inquiry-form"].includes(category.id)) return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${company.email}">SEND EMAIL</a><a class="mcx-action secondary" href="https://wa.me/${company.whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`; } if (["products", "services", "pricing", "premium"].includes(page)) return `<div class="mcx-action-row"><button type="button" class="mcx-action" data-mcx-route="contact/send-inquiry">REQUEST INFORMATION</button></div>`; return ""; }
 function formMarkup() { return `<form class="mcx-form" data-mcx-contact-form><div class="mcx-field"><label>Full Name<input name="fullName" required autocomplete="name"></label></div><div class="mcx-field"><label>Email Address<input name="email" type="email" required autocomplete="email"></label></div><div class="mcx-field"><label>Phone Number (Optional)<input name="phone" type="tel" autocomplete="tel"></label></div><div class="mcx-field"><label>Country<input name="country" required></label></div><div class="mcx-field"><label>Company Name (Optional)<input name="company"></label></div><div class="mcx-field"><label>Project Type<select name="projectType" required><option value="">Select</option><option>AI Development</option><option>AI Chatbot</option><option>Website</option><option>Web Application</option><option>Mobile Application</option><option>Desktop Software</option><option>Business Software</option><option>API or Integration</option><option>Other Custom Project</option></select></label></div><div class="mcx-field"><label>Estimated Budget (Optional)<input name="budget"></label></div><div class="mcx-field"><label>Preferred Deadline<input name="deadline"></label></div><div class="mcx-field full"><label>Project Description<textarea name="description" required></textarea></label></div><label class="mcx-consent"><input type="checkbox" required> I agree to provide these details for receiving a response.</label><p class="mcx-form-note">Submitting opens your email application because a dedicated form backend is not currently connected.</p><button class="mcx-action" type="submit">PREPARE EMAIL INQUIRY</button></form>`; }

 function ensurePremiumPageHost() {
 if (document.querySelector('[data-mcx-page="premium"]')) {
 return;
 }

 const pricingPage = document.querySelector(
 '[data-mcx-page="pricing"]'
 );

 if (!pricingPage ||!pricingPage.parentNode) {
 throw new Error(
 "Pricing page host was not found for PREMIUM cloning."
 );
 }

 const premiumPage = pricingPage.cloneNode(true);

 premiumPage.dataset.mcxPage = "premium";
 premiumPage.classList.remove("active");
 premiumPage.hidden = true;

 const allElements = [
 premiumPage,
...premiumPage.querySelectorAll("*")
 ];

 allElements.forEach((element) => {
 Array.from(element.attributes || []).forEach((attribute) => {
 if (
 attribute.value &&
 attribute.value.toLowerCase().includes("pricing")
 ) {
 element.setAttribute(
 attribute.name,
 attribute.value.replace(/pricing/gi, "premium")
 );
 }
 });
 });

 const indexHost = premiumPage.querySelector(
 '[data-mcx-category-index="premium"]'
 );

 const detailHost = premiumPage.querySelector(
 '[data-mcx-category-detail="premium"]'
 );

 if (!indexHost ||!detailHost) {
 throw new Error(
 "PREMIUM catalogue hosts could not be created."
 );
 }

 indexHost.innerHTML = "";
 indexHost.hidden = false;

 detailHost.innerHTML = "";
 detailHost.hidden = true;

 pricingPage.insertAdjacentElement(
 "afterend",
 premiumPage
 );
 }

 function getCatalogueHeading(page) {
 if (page === "products") return "PRODUCTS";
 if (page === "services") return "SERVICES";
 if (page === "pricing") return "PRICING";
 if (page === "premium") return "PREMIUM";
 return "CATALOGUE";
 }

 function getCatalogueIntro(page) {
 if (page === "products") {
 return "Reusable product solutions for modern operations.";
 }

/* Create static category sections for pages that have category data.
   This ensures the navigation can scroll to existing sections instead
   of rendering duplicate detail panels under the nav. */
function createStaticCategorySections() {
	try {
		Object.keys(pageData).forEach(function (page) {
			var container = document.querySelector(`[data-mcx-page="${page}"] .mcx-page-wrap`);
			if (!container) return;

			var existingShell = container.querySelector('.mcx-static-categories');
			if (existingShell) return; // already created

			var shell = document.createElement('div');
			shell.className = 'mcx-static-categories';

			pageData[page].categories.forEach(function (category) {
				var sec = document.createElement('section');
				sec.className = 'mcx-' + page + '-' + category.id + ' mcx-static-category';
				sec.id = 'mcx-' + page + '-' + category.id;
				var html = '';
				html += `<header class="mcx-static-header"><h2>${esc(category.title)}</h2><p>${esc(category.summary)}</p></header>`;
				html += '<div class="mcx-static-subtopics">';
				category.subtopics.forEach(function (topic, idx) {
					html += `<article class="mcx-static-subtopic"><h3>${esc(topic.title)}</h3><p>${esc(topic.summary)}</p><ul>`;
					topic.points && topic.points.forEach(function (pt) { html += `<li>${esc(pt)}</li>`; });
					html += '</ul>' + (topic.note? `<p class="mcx-topic-note">${esc(topic.note)}</p>`: '') + '</article>';
				});
				html += '</div>';
				sec.innerHTML = html;
				shell.appendChild(sec);
			});

			container.appendChild(shell);
		});
	} catch (err) {
		console.warn('createStaticCategorySections failed:', err);
	}
}
// expose for external callers (capture handler / DOM listeners outside the IIFE)
try { window.createStaticCategorySections = createStaticCategorySections; } catch (e) { /* ignore */ }

 if (page === "services") {
 return "Custom service solutions tailored to each client project.";
 }

 if (page === "pricing") {
 return "Starting estimates for products and services with custom quotation support.";
 }

 if (page === "premium") {
 return "Advanced AI, enterprise software, cloud, security, automation and specialist technology solutions.";
 }

 return "Explore MI CORTEX X technology solutions.";
 }

 function renderIndex(page) { const host = document.querySelector(`[data-mcx-category-index="${page}"]`); if (!host) return; if (["products", "services", "pricing", "premium"].includes(page)) { renderCatalogueIndex(page); return; } host.innerHTML = `<div class="mcx-index-heading"><span class="mcx-index-kicker">CATEGORY DIRECTORY</span><h2>${esc(getPageTitle(page))} CATEGORIES</h2><p>${esc(pageData[page]?.intro || "Select a category to open its subtopics and complete information.")}</p></div><div class="mcx-category-stack">${pageData[page].categories.map((category) => `<button type="button" class="mcx-category-row" data-mcx-category="${page}/${category.id}"><span class="mcx-category-number mcx-category-icon" aria-hidden="true">${mcxGetCategoryIcon(page, category.id)}</span><span class="mcx-category-copy">${category.status? `<small>${esc(category.status)}</small>`: ""}<strong>${esc(category.title)}</strong><em>${esc(category.summary)}</em></span><span class="mcx-category-arrow" aria-hidden="true">&#8594;</span></button>`).join("")}</div>`; }
 function renderCategory(page, categoryId, activeSubtopic = "") { if (["products", "services", "pricing", "premium"].includes(page)) { const item = getCatalogueItem(page, categoryId); if (item) return renderCatalogueDetail(page, item); } const category = categoryById(page, categoryId); const index = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (!category ||!index ||!detail) return false; index.hidden = true; detail.hidden = false; detail.innerHTML = `<button type="button" class="mcx-back-button" data-mcx-route="${page}">&#8592; ALL ${esc(getPageTitle(page))} CATEGORIES</button><header class="mcx-category-header">${category.status? `<span class="mcx-status">${esc(category.status)}</span>`: ""}<h2>${esc(category.title)}</h2><p>${esc(category.summary)}</p></header><div class="mcx-subtopic-stack">${category.subtopics.map((topic, indexValue) => { const id = subtopicId(topic.title, indexValue); const open = activeSubtopic === id; return `<article class="mcx-subtopic-item${open? " open": ""}"><button type="button" class="mcx-subtopic-button" data-mcx-subtopic="${page}/${category.id}/${id}" aria-expanded="${open}"><span><strong>${esc(topic.title)}</strong><em>${esc(topic.summary)}</em></span><b aria-hidden="true">${open? "&#8722;": "+"}</b></button><div class="mcx-subtopic-content"${open? "": " hidden"}>${category.id === "executive-board"? `<ul>${topic.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>${topic.note? `<p class="mcx-topic-note">${esc(topic.note)}</p>`: ""}`: `${topic.note? `<p class="mcx-topic-note">${esc(topic.note)}</p>`: ""}<ul>${topic.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ul>`}</div></article>`; }).join("")}</div>${category.id === "inquiry-form"? formMarkup(): ""}${actionMarkup(page, category)}`; detail.focus({ preventScroll: true }); const form = detail.querySelector("[data-mcx-contact-form]"); if (form) form.addEventListener("submit", submitForm); return true; }
 function submitForm(event) { event.preventDefault(); const form = event.currentTarget; if (!form.reportValidity()) return; const data = new FormData(form); const subject = encodeURIComponent(`MI CORTEX X Project Inquiry - ${data.get("projectType") || "Custom Project"}`); const body = encodeURIComponent([`Full Name: ${data.get("fullName") || ""}`, `Email: ${data.get("email") || ""}`, `Phone: ${data.get("phone") || "Not provided"}`, `Country: ${data.get("country") || ""}`, `Company: ${data.get("company") || "Not provided"}`, `Project Type: ${data.get("projectType") || ""}`, `Estimated Budget: ${data.get("budget") || "Not provided"}`, `Preferred Deadline: ${data.get("deadline") || "Not provided"}`, "", "Project Description:", data.get("description") || ""].join("\n")); location.href = `mailto:${company.email}?subject=${subject}&body=${body}`; }

 /* MCX_RATE_STATUS_FIX_START */
 function getRateStatusText() {
 if (state.rateLoading) {
 return "Updating live LKR to USD reference rate...";
 }

 if (state.rateError) {
 return state.rateError + " Original LKR prices remain unchanged.";
 }

 if (
 Number.isFinite(state.exchangeRate) &&
 state.exchangeRate > 0 &&
 state.exchangeRateUpdatedAt
 ) {
 return "USD reference rate updated: " + state.exchangeRateUpdatedAt;
 }

 if (Number.isFinite(state.exchangeRate) && state.exchangeRate > 0) {
 return "USD estimate available. Original LKR prices remain unchanged.";
 }

 return "Original LKR prices remain unchanged.";
 }
 /* MCX_RATE_STATUS_FIX_END */

 function renderCatalogueIndex(page) { const host = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (!host) return; host.hidden = false; if (detail) { detail.hidden = true; detail.innerHTML = ""; } const items = getCatalogueItems(page); const groups = groupOptions(page); const filteredItems = getFilteredItems(items); const visibleItems = filteredItems.slice(0, state.visibleCount); host.innerHTML = `<div class="mcx-catalogue-shell"><div class="mcx-catalogue-toolbar"><div class="mcx-catalogue-header"><span class="mcx-index-kicker">PROFESSIONAL CATALOGUE</span><h2>${esc(page === "products"? "PRODUCTS": page === "pricing"? "PRICING": page === "premium"? "PREMIUM": "SERVICES")}</h2><p>${esc(page === "products"? "Reusable product solutions for modern operations.": page === "pricing"? "Starting estimates for products and services with custom quotation support.": page === "premium"? "Advanced premium solutions for enterprise and professional requirements.": "Custom service solutions tailored to each client project.")}</p></div><div class="mcx-catalogue-segment" role="tablist" aria-label="Catalogue type selector"><button type="button" class="mcx-segment-button ${page === "products"? "active": ""}" data-mcx-route="products">PRODUCTS</button><button type="button" class="mcx-segment-button ${page === "services"? "active": ""}" data-mcx-route="services">SERVICES</button><button type="button" class="mcx-segment-button ${page === "pricing"? "active": ""}" data-mcx-route="pricing">PRICING</button><button type="button" class="mcx-segment-button ${page === "premium"? "active": ""}" data-mcx-route="premium">PREMIUM</button></div><div class="mcx-catalogue-controls"><label class="mcx-control-field"><span class="mcx-control-label">Search</span><input type="search" data-mcx-catalogue-search value="${esc(state.search)}" placeholder="Search by name or keyword" /></label><label class="mcx-control-field"><span class="mcx-control-label">Category</span><select data-mcx-catalogue-group><option value="all">All categories</option>${groups.map((group) => `<option value="${esc(group)}" ${state.selectedGroup === group? "selected": ""}>${esc(group)}</option>`).join("")}</select></label><label class="mcx-control-field"><span class="mcx-control-label">Type</span><select data-mcx-catalogue-type><option value="all" ${state.filteredType === "all"? "selected": ""}>All</option><option value="product" ${state.filteredType === "product"? "selected": ""}>Products</option><option value="service" ${state.filteredType === "service"? "selected": ""}>Services</option></select></label><label class="mcx-control-field"><span class="mcx-control-label">Sort</span><select data-mcx-catalogue-sort><option value="name" ${state.sort === "name"? "selected": ""}>Sort by name</option><option value="price-low" ${state.sort === "price-low"? "selected": ""}>Sort by price low to high</option><option value="price-high" ${state.sort === "price-high"? "selected": ""}>Sort by price high to low</option></select></label><button type="button" class="mcx-secondary-button" data-mcx-clear-filters>Clear filters</button></div></div><div class="mcx-catalogue-meta"><div class="mcx-catalogue-count">${esc(`${visibleItems.length} of ${filteredItems.length} listed`)}</div></div><div class="mcx-catalogue-grid">${visibleItems.map((item) => `<article class="mcx-catalogue-card"><div class="mcx-card-top"><span class="mcx-card-type">${item.type === "service"? "Service": "Product"}</span><span class="mcx-card-status">${esc(item.status || "Available")}</span></div><h3>${esc(item.name)}</h3><p class="mcx-card-category">${esc(item.category)}</p><p class="mcx-card-description">${esc(item.description)}</p><div class="mcx-card-price">${esc(getPriceLabel(item))}</div><div class="mcx-card-meta">${item.billingPeriod? `<div><strong>Billing:</strong> ${esc(item.billingPeriod)}</div>`: ""}${item.deliveryTime? `<div><strong>Delivery:</strong> ${esc(item.deliveryTime)}</div>`: ""}${item.supportPeriod? `<div><strong>Support:</strong> ${esc(item.supportPeriod)}</div>`: ""}</div><ul class="mcx-card-features">${item.features.map((feature) => `<li>${esc(feature)}</li>`).join("")}</ul><div class="mcx-card-actions"><button type="button" class="mcx-secondary-button" data-mcx-catalogue-detail="${page}/${item.id}">View Details</button><button type="button" class="mcx-action" data-mcx-order-item="${page}/${item.id}">Order / Request Quote</button></div></article>`).join("")}</div>${filteredItems.length > state.visibleCount? `<div class="mcx-catalogue-footer"><button type="button" class="mcx-secondary-button" data-mcx-load-more>Load More</button></div>`: ""}</div>`; }
 function getFilteredItems(items) { let filtered = items.slice(); const search = state.search.trim().toLowerCase(); if (search) filtered = filtered.filter((item) => [item.name, item.description, item.category,...(item.features || [])].join(" ").toLowerCase().includes(search)); if (state.selectedGroup!== "all") filtered = filtered.filter((item) => item.category === state.selectedGroup); if (state.filteredType === "product") filtered = filtered.filter((item) => item.type!== "service"); if (state.filteredType === "service") filtered = filtered.filter((item) => item.type === "service"); if (state.sort === "price-low") filtered.sort((a, b) => a.priceLkr - b.priceLkr); else if (state.sort === "price-high") filtered.sort((a, b) => b.priceLkr - a.priceLkr); else filtered.sort((a, b) => a.name.localeCompare(b.name)); return filtered; }
 function renderCatalogueDetail(page, item) { const index = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (!index ||!detail) return false; index.hidden = true; detail.hidden = false; detail.innerHTML = `<div class="mcx-detail-panel"><button type="button" class="mcx-back-button" data-mcx-route="${page}">&#8592; BACK TO CATALOGUE</button><div class="mcx-detail-grid"><section class="mcx-detail-main"><span class="mcx-index-kicker">${item.type === "service"? "SERVICE DETAIL": "PRODUCT DETAIL"}</span><h2>${esc(item.name)}</h2><p class="mcx-card-category">${esc(item.category)}</p><p>${esc(item.description)}</p><div class="mcx-detail-price">${esc(getPriceLabel(item))}</div><p class="mcx-detail-note">Prices are starting estimates and may change according to project scope, features, integrations, delivery requirements, hosting, third-party charges and ongoing support. Tax and third-party provider fees are not included.</p><div class="mcx-detail-meta">${item.status? `<div><strong>Status:</strong> ${esc(item.status)}</div>`: ""}${item.deliveryTime? `<div><strong>Delivery:</strong> ${esc(item.deliveryTime)}</div>`: ""}${item.supportPeriod? `<div><strong>Support:</strong> ${esc(item.supportPeriod)}</div>`: ""}</div><ul class="mcx-card-features">${item.features.map((feature) => `<li>${esc(feature)}</li>`).join("")}</ul><div class="mcx-card-actions"><button type="button" class="mcx-action" data-mcx-order-item="${page}/${item.id}">Order / Request Quote</button></div></section><aside class="mcx-detail-side"><div class="mcx-detail-card"><h3>Business process</h3><ul><li>Free consultation</li><li>Requirement analysis and quotation</li><li>30% advance payment before development</li><li>Testing, remaining payment and final delivery</li></ul></div><div class="mcx-detail-card"><h3>Payment notice</h3><p>Online payments are being configured. Submit an order request and our team will contact you with an approved payment method.</p><p>Refunds: Full refund before project commencement. No refund after project commencement.</p></div></aside></div></div>`; detail.focus({ preventScroll: true }); return true; }
 function getReferenceNumber() { const date = new Date(); const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`; const suffix = Math.random().toString(36).slice(2, 8).toUpperCase(); return `MCX-${stamp}-${suffix}`; }
 function openOrderModal(page, item) { state.modalItem = item; state.modalReference = getReferenceNumber(); const overlay = document.createElement("div"); overlay.className = "mcx-modal-overlay"; overlay.innerHTML = `<div class="mcx-modal" role="dialog" aria-modal="true" aria-labelledby="mcx-modal-title"><button type="button" class="mcx-modal-close" data-mcx-close-modal aria-label="Close order request">&#10005;</button><h2 id="mcx-modal-title">Order request for ${esc(item.name)}</h2><p class="mcx-modal-intro">${esc(item.type === "service"? "Service request": "Product request")}</p><div class="mcx-modal-grid"><div class="mcx-modal-column"><p><strong>Selected item:</strong> ${esc(item.name)}</p><p><strong>Type:</strong> ${esc(item.type === "service"? "Service": "Product")}</p><p><strong>Currency:</strong> USD estimate with fixed LKR reference</p><p><strong>Estimated price:</strong> ${esc(formatPriceForModal(item))}</p><p><strong>Reference:</strong> ${esc(state.modalReference)}</p></div><div class="mcx-modal-column"><label class="mcx-modal-field"><span>Customer name</span><input name="customerName" required></label><label class="mcx-modal-field"><span>Email address</span><input name="customerEmail" type="email" required></label><label class="mcx-modal-field"><span>WhatsApp number</span><input name="customerWhatsapp" required></label><label class="mcx-modal-field"><span>Country</span><input name="customerCountry" required></label><label class="mcx-modal-field"><span>Business / company</span><input name="customerCompany"></label></div></div><label class="mcx-modal-field full"><span>Required features</span><textarea name="requiredFeatures" rows="3"></textarea></label><label class="mcx-modal-field full"><span>Project description</span><textarea name="projectDescription" rows="4" required></textarea></label><label class="mcx-modal-field full"><span>Preferred delivery date</span><input name="deliveryDate" type="date"></label><label class="mcx-checkbox"><input type="checkbox" name="agreement" required> I agree to share these details for quotation and support follow-up.</label><div class="mcx-payment-box"><h3>Payment options</h3><ul><li>PayPal   Coming Soon</li><li>PayHere   Coming Soon</li><li>Stripe / Card   Coming Soon</li></ul><p>Online payments are being configured. Submit an order request and our team will contact you with an approved payment method.</p></div><div class="mcx-card-actions"><button type="button" class="mcx-action" data-mcx-send-whatsapp>Send via WhatsApp</button><button type="button" class="mcx-secondary-button" data-mcx-send-email>Send via Email</button></div></div>`; document.body.appendChild(overlay); document.body.classList.add("mcx-modal-open"); setTimeout(() => overlay.querySelector("input, textarea, button").focus(), 40); }
 function closeOrderModal() { document.querySelector(".mcx-modal-overlay")?.remove(); document.body.classList.remove("mcx-modal-open"); }
 function sendOrderRequest(mode) { if (!state.modalItem) return; const overlay = document.querySelector(".mcx-modal-overlay"); if (!overlay) return; const fields = overlay.querySelectorAll("input, textarea"); const data = {}; fields.forEach((field) => { if (field.name) data[field.name] = field.value; }); const reference = state.modalReference || getReferenceNumber(); const item = state.modalItem; const body = [`Reference: ${reference}`, `Customer Name: ${data.customerName || "Not provided"}`, `Selected Item: ${item.name}`, `Type: ${item.type === "service"? "Service": "Product"}`, "Display Currency: USD estimate with fixed LKR reference", `Estimated Price: ${formatPriceForModal(item)}`, `Requirements: ${data.requiredFeatures || "Not specified"}`, `Project Description: ${data.projectDescription || "No project description provided."}`, `Preferred Delivery Date: ${data.deliveryDate || "Not provided"}`].join("\n"); if (mode === "whatsapp") { window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer"); } else { window.location.href = `mailto:${company.salesEmail}?subject=${encodeURIComponent(`Quotation Request - ${item.name}`)}&body=${encodeURIComponent(body)}`; } const note = document.createElement("p"); note.className = "mcx-request-status"; note.textContent = mode === "whatsapp"? "Quotation request prepared for WhatsApp follow-up.": "Quotation request prepared for email follow-up."; overlay.querySelector(".mcx-card-actions").insertAdjacentElement("afterend", note); }
 function route(scroll = true) { const { page, category, subtopic } = hashState(); document.querySelectorAll("[data-mcx-page]").forEach((section) => { const active = section.dataset.mcxPage === page; section.classList.toggle("active", active); section.hidden =!active; }); document.querySelectorAll("[data-mcx-page-link]").forEach((link) => link.classList.toggle("active", link.dataset.mcxPageLink === page)); const index = document.querySelector(`[data-mcx-category-index="${page}"]`); const detail = document.querySelector(`[data-mcx-category-detail="${page}"]`); if (["products", "services", "pricing", "premium"].includes(page)) { if (category) { const item = getCatalogueItem(page, category); if (item) { renderCatalogueDetail(page, item); } else { if (index) index.hidden = false; if (detail) { detail.hidden = false; detail.innerHTML = `<div class="mcx-not-found"><h2>Not Found</h2><p>The requested catalogue item is not available yet. Please return to the main catalogue and choose another item.</p><button type="button" class="mcx-action" data-mcx-route="${page}">BACK TO CATALOGUE</button></div>`; } } } else { renderCatalogueIndex(page); } } else if (category && renderCategory(page, category, subtopic)) { } else { if (index) index.hidden = false; if (detail) { detail.hidden = true; detail.innerHTML = ""; } renderIndex(page); } if (scroll) { const activePage = document.querySelector(`[data-mcx-page="${page}"]`); const scrollTarget = detail &&!detail.hidden? detail: activePage; if (scrollTarget) { const fixedNavigation = document.querySelector(".site-header") || document.querySelector("header") || document.querySelector("nav"); let navigationOffset = 22; if (fixedNavigation) { const navigationStyle = window.getComputedStyle(fixedNavigation); if (navigationStyle.position === "fixed" || navigationStyle.position === "sticky") navigationOffset = fixedNavigation.getBoundingClientRect().height + 22; } const targetTop = scrollTarget.getBoundingClientRect().top + window.scrollY - navigationOffset; window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: "smooth" }); } } }
 function init() {
 ensurePremiumPageHost();
 /* MCX_LIVE_DUAL_PRICE_INIT */
 state.currency = "USD";
 loadExchangeRate(false).catch((error) => { console.warn("Exchange-rate update skipped.", error); });
 restoreCachedExchangeRate(); validPages.forEach(renderIndex); document.addEventListener("click", (event) => { const nav = event.target.closest("[data-mcx-page-link]"); if (nav) { event.preventDefault(); setHash(nav.dataset.mcxPageLink); return; } const category = event.target.closest("[data-mcx-category]"); if (category) { const [page, id] = category.dataset.mcxCategory.split("/"); setHash(page, id); return; } const sub = event.target.closest("[data-mcx-subtopic]"); if (sub) { const [page, cat, id] = sub.dataset.mcxSubtopic.split("/"); const current = hashState(); setHash(page, cat, current.subtopic === id? "": id); return; } const routeButton = event.target.closest("[data-mcx-route]"); if (routeButton) { const [page, cat = "", subtopicValue = ""] = routeButton.dataset.mcxRoute.split("/"); setHash(page, cat, subtopicValue); return; } const detailButton = event.target.closest("[data-mcx-catalogue-detail]"); if (detailButton) { const [page, slug] = detailButton.dataset.mcxCatalogueDetail.split("/"); setHash(page, slug); return; } const orderButton = event.target.closest("[data-mcx-order-item]"); if (orderButton) { const [page, slug] = orderButton.dataset.mcxOrderItem.split("/"); const item = getCatalogueItem(page, slug); if (item) openOrderModal(page, {...item, type: item.type || (page === "products"? "product": "service") }); return; } const loadMore = event.target.closest("[data-mcx-load-more]"); if (loadMore) { state.visibleCount += 8; renderCatalogueIndex(hashState().page); return; } const clearFilters = event.target.closest("[data-mcx-clear-filters]"); if (clearFilters) { state.search = ""; state.selectedGroup = "all"; state.filteredType = "all"; state.sort = "name"; state.visibleCount = 8; renderCatalogueIndex(hashState().page); return; } const closeButton = event.target.closest("[data-mcx-close-modal]"); if (closeButton) { closeOrderModal(); } const sendWhatsApp = event.target.closest("[data-mcx-send-whatsapp]"); if (sendWhatsApp) { sendOrderRequest("whatsapp"); return; } const sendEmail = event.target.closest("[data-mcx-send-email]"); if (sendEmail) { sendOrderRequest("email"); return; } }); document.addEventListener("input", (event) => { const searchInput = event.target.closest("[data-mcx-catalogue-search]"); if (searchInput) { state.search = searchInput.value; if (["products", "services", "pricing", "premium"].includes(hashState().page)) { state.visibleCount = 8; renderCatalogueIndex(hashState().page); } } }); document.addEventListener("change", (event) => {
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

// Ensure static category sections are created after DOM is ready so that
// the navigation capture handler can find them and avoid duplicate rendering.
document.addEventListener("DOMContentLoaded", function () {
	try {
		if (window.createStaticCategorySections) window.createStaticCategorySections();
	} catch (e) {
		console.warn('createStaticCategorySections initialization failed:', e);
	}
}, { once: true });

/* Navigation capture: prefer existing page sections for category clicks
	 This capturing handler prevents the default category-detail rendering
	 when a matching section already exists on the page (by id, class or prefix).
	 It also accepts anchors with hash patterns like "#/page/category". */
document.addEventListener(
	"click",
	function (event) {
		try {
			// normalize extractor: try data-mcx-category first
			var page = null;
			var id = null;

			var categoryEl = event.target.closest
				? event.target.closest("[data-mcx-category]")
				: null;

			if (categoryEl && categoryEl.dataset && categoryEl.dataset.mcxCategory) {
				var parts = categoryEl.dataset.mcxCategory.split("/");
				if (parts && parts.length >= 2) {
					page = parts[0];
					id = parts[1];
				}
			}

			// fallback: anchor href like "#/page/category" or "#page/category"
			if ((!page || !id) && event.target.closest) {
				var anchor = event.target.closest("a[href]");
				if (anchor) {
					var href = String(anchor.getAttribute("href") || "");
					var hash = href.replace(/^.*#/, "");
					hash = hash.replace(/^\/?/, ""); // remove leading slash
					var parts2 = hash.split("/").filter(Boolean);
					if (parts2.length >= 2) {
						page = page || parts2[0];
						id = id || parts2[1];
					}
				}
			}

			if (!page || !id) return;

			// Find an existing section using a set of reasonable selectors
			var existing = null;
			var selectors = [
				'#' + id,
				'[id$="-' + id + '"]',
				'.mcx-' + page + '-' + id,
				'.mcx-' + id,
				'#mcx-' + page + '-' + id,
				'#mcx-' + id,
				'.' + id.replace(/[^a-zA-Z0-9-_]/g, '-'),
				'[data-mcx-section="' + id + '"]',
				'[data-mcx-' + id + ']'
			];

			for (var i = 0; i < selectors.length; i++) {
				try {
					var s = selectors[i];
					if (!s) continue;
					existing = document.querySelector(s);
					if (existing) break;
				} catch (ignore) {
					// ignore invalid selector
				}
			}

			if (!existing) return;

			// Prevent the default category handler from rendering a detail panel
			event.preventDefault();
			event.stopPropagation();
			if (event.stopImmediatePropagation) event.stopImmediatePropagation();

			// Activate the page (without category) and smoothly scroll to the existing section
			setHash(page);
			window.setTimeout(function () {
				var fixedNavigation = document.querySelector('.site-header') || document.querySelector('header') || document.querySelector('nav');
				var navigationOffset = 22;
				if (fixedNavigation) {
					var navigationStyle = window.getComputedStyle(fixedNavigation);
					if (navigationStyle.position === 'fixed' || navigationStyle.position === 'sticky') navigationOffset = fixedNavigation.getBoundingClientRect().height + 22;
				}
				var top = existing.getBoundingClientRect().top + window.scrollY - navigationOffset;
				window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'smooth' });
			}, 80);
		} catch (err) {
			// ignore and fall back to original handlers
		}
	},
	true
);


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
 if (element.children.length!== 0) {
 return;
 }

 if (element.textContent.trim()!== ";") {
 return;
 }

 element.textContent = "-";
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


/* MCX_DEFINITIVE_PREMIUM_OPEN_START */
(function () {
 "use strict";

 const PREMIUM_HASH = "#/premium";

 function isPremiumHash() {
 return /^#\/?premium(?:\/|$)/i.test(window.location.hash);
 }

 function findPremiumTrigger(target) {
 if (!target || typeof target.closest!== "function") {
 return null;
 }

 return target.closest(
 'a[href="#/premium"],' +
 'a[href="#premium"],' +
 '[data-mcx-route="premium"],' +
 '[data-category="premium"],' +
 '[data-page="premium"]'
 );
 }

 function ensurePremiumPage() {
 let page = document.querySelector('[data-mcx-page="premium"]');

 if (page) {
 return page;
 }

 const servicesPage = document.querySelector(
 '[data-mcx-page="services"]'
 );

 if (!servicesPage ||!servicesPage.parentNode) {
 return null;
 }

 page = servicesPage.cloneNode(true);
 page.setAttribute("data-mcx-page", "premium");
 page.hidden = true;
 page.classList.remove("active", "is-active");

 const elements = [page,...page.querySelectorAll("*")];

 elements.forEach((element) => {
 Array.from(element.attributes || []).forEach((attribute) => {
 if (
 typeof attribute.value === "string" &&
 attribute.value.includes("services")
 ) {
 element.setAttribute(
 attribute.name,
 attribute.value.replace(/services/g, "premium")
 );
 }
 });
 });

 const indexHost = page.querySelector(
 '[data-mcx-category-index="premium"]'
 );

 const detailHost = page.querySelector(
 '[data-mcx-category-detail="premium"]'
 );

 if (indexHost) {
 indexHost.hidden = false;
 }

 if (detailHost) {
 detailHost.hidden = true;
 }

 servicesPage.insertAdjacentElement("afterend", page);

 return page;
 }

 function setPremiumActiveState() {
 document
.querySelectorAll("[data-mcx-page]")
.forEach((page) => {
 const premium =
 page.getAttribute("data-mcx-page") === "premium";

 page.hidden =!premium;
 page.classList.toggle("active", premium);
 page.classList.toggle("is-active", premium);
 });

 document
.querySelectorAll(
 'a[href="#/premium"],' +
 'a[href="#premium"],' +
 '[data-mcx-route="premium"]'
 )
.forEach((element) => {
 element.classList.add("active");
 element.setAttribute("aria-current", "page");
 });

 document
.querySelectorAll(
 'nav a:not([href="#/premium"]):not([href="#premium"])'
 )
.forEach((element) => {
 element.classList.remove("active");
 element.removeAttribute("aria-current");
 });
 }

 function renderPremium() {
 if (!isPremiumHash()) {
 return;
 }

 const premiumPage = ensurePremiumPage();

 if (!premiumPage) {
 console.error("PREMIUM page container was not found.");
 return;
 }

 try {
 if (typeof window.renderIndex === "function") {
 window.renderIndex("premium");
 }
 } catch (error) {
 console.error("PREMIUM renderIndex failed:", error);
 }

 try {
 if (typeof window.renderCatalogueIndex === "function") {
 window.renderCatalogueIndex("premium");
 }
 } catch (error) {
 console.error(
 "PREMIUM renderCatalogueIndex failed:",
 error
 );
 }

 setPremiumActiveState();

 const nav =
 document.querySelector("nav") ||
 document.querySelector("header");

 const offset = nav
? nav.getBoundingClientRect().height + 20
: 120;

 const top =
 premiumPage.getBoundingClientRect().top +
 window.scrollY -
 offset;

 window.scrollTo({
 top: Math.max(0, top),
 behavior: "auto"
 });
 }

 function schedulePremiumRender() {
 [0, 50, 150, 350].forEach((delay) => {
 window.setTimeout(renderPremium, delay);
 });
 }

 window.addEventListener(
 "click",
 function (event) {
 const trigger = findPremiumTrigger(event.target);

 if (!trigger) {
 return;
 }

 event.preventDefault();
 event.stopPropagation();
 event.stopImmediatePropagation();

 if (window.location.hash!== PREMIUM_HASH) {
 window.location.hash = PREMIUM_HASH;
 }

 schedulePremiumRender();
 },
 true
 );

 window.addEventListener("hashchange", function () {
 if (isPremiumHash()) {
 schedulePremiumRender();
 }
 });

 function start() {
 ensurePremiumPage();

 if (isPremiumHash()) {
 schedulePremiumRender();
 }
 }

 if (document.readyState === "loading") {
 document.addEventListener("DOMContentLoaded", start, {
 once: true
 });
 } else {
 start();
 }
})();
/* MCX_DEFINITIVE_PREMIUM_OPEN_END */


/* MCX_CURRENT_NAVIGATION_ACTIVE_START */
(function () {
 "use strict";

 const navigationPages = [
 "home",
 "overview",
 "about",
 "products",
 "services",
 "pricing",
 "premium",
 "contact"
 ];

 function getCurrentPage() {
 const hash = window.location.hash
.replace(/^#\/?/, "")
.split("/")[0]
.trim()
.toLowerCase();

 if (!hash) {
 return "home";
 }

 if (hash === "overview") {
 return "home";
 }

 return navigationPages.includes(hash)? hash: "home";
 }

 function getNavigationPage(element) {
 const route =
 element.getAttribute("data-mcx-route") ||
 element.getAttribute("data-route") ||
 element.getAttribute("href") ||
 "";

 const normalized = route
.replace(/^#\/?/, "")
.split("/")[0]
.trim()
.toLowerCase();

 if (normalized === "overview") {
 return "home";
 }

 return normalized;
 }

 function updateActiveNavigation() {
 const currentPage = getCurrentPage();

 const navigationLinks = document.querySelectorAll(
 'nav a,' +
 'header nav a,' +
 '.site-header a,' +
 '.mi-fixed-glass-nav a,' +
 '[data-mcx-navigation] a'
 );

 navigationLinks.forEach((link) => {
 const linkPage = getNavigationPage(link);
 const isCurrent = linkPage === currentPage;

 link.classList.toggle("active", isCurrent);
 link.classList.toggle("is-active", isCurrent);
 link.classList.toggle("current", isCurrent);

 if (isCurrent) {
 link.setAttribute("aria-current", "page");
 } else {
 link.removeAttribute("aria-current");
 }
 });
 }

 window.addEventListener("hashchange", function () {
 window.requestAnimationFrame(updateActiveNavigation);

 window.setTimeout(updateActiveNavigation, 50);
 window.setTimeout(updateActiveNavigation, 200);
 });

 window.addEventListener("popstate", updateActiveNavigation);

 document.addEventListener(
 "click",
 function (event) {
 const link = event.target.closest(
 'nav a,' +
 'header nav a,' +
 '.site-header a,' +
 '.mi-fixed-glass-nav a'
 );

 if (!link) {
 return;
 }

 window.setTimeout(updateActiveNavigation, 0);
 window.setTimeout(updateActiveNavigation, 100);
 },
 true
 );

 function startNavigationState() {
 updateActiveNavigation();

 window.setTimeout(updateActiveNavigation, 100);
 window.setTimeout(updateActiveNavigation, 400);
 }

 if (document.readyState === "loading") {
 document.addEventListener(
 "DOMContentLoaded",
 startNavigationState,
 { once: true }
 );
 } else {
 startNavigationState();
 }
})();
/* MCX_CURRENT_NAVIGATION_ACTIVE_END */

/* MI_REMOVE_INTRO_ROBOT_START */
/* Controlled by MCX V29. */
/* MI_REMOVE_INTRO_ROBOT_END */

/* MI_NEURAL_LOGO_SEQUENCE_START */
/* Controlled by MCX V29. */
/* MI_NEURAL_LOGO_SEQUENCE_END */

/* MCX_V82_ULTRA_BLUR_ZOOM_START */
(function () {
    "use strict";

    var ticking = false;

    function applyUltraBlurZoom() {
        var header = document.querySelector(".site-header");
        if (!header) return;

        header.classList.add("mcx-v82-effect");

        var nav = header.querySelector(".nav");
        if (!nav) return;

        /*
          ULTRA-sensitive:
          Full effect is reached after only 14px of scroll.
        */
        var y = Math.max(window.scrollY || 0, 0);
        var progress = Math.min(y / 14, 1);

        /*
          Start strong and quickly become much larger.
          Scale: 1.00 -> 1.18
          Blur : 58px -> 145px
        */
        var scale = 1 + (0.18 * progress);
        var blur = 58 + (87 * progress);
        var glow = 0.14 + (0.16 * progress);

        nav.style.setProperty("--mcx-v82-scale", scale.toFixed(4));
        nav.style.setProperty("--mcx-v82-blur", blur.toFixed(1) + "px");
        nav.style.setProperty("--mcx-v82-glow", glow.toFixed(3));

        ticking = false;
    }

    function requestEffect() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(applyUltraBlurZoom);
    }

    window.addEventListener("scroll", requestEffect, { passive: true });
    window.addEventListener("resize", requestEffect);

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            applyUltraBlurZoom,
            { once: true }
        );
    } else {
        applyUltraBlurZoom();
    }

    window.addEventListener("load", applyUltraBlurZoom);

    setTimeout(applyUltraBlurZoom, 300);
    setTimeout(applyUltraBlurZoom, 900);
    setTimeout(applyUltraBlurZoom, 1800);
})();
 /* MCX_V82_ULTRA_BLUR_ZOOM_END */

/* MCX_V86_EXACT_FRONT_NAV_HIDE_START */
(function () {
    "use strict";

    var ticking = false;

    function updateNav() {
        var header = document.querySelector(".site-header");
        var frontPage = document.querySelector("#mi-front-page, .mi-front-page");

        if (!header || !frontPage) {
            ticking = false;
            return;
        }

        var rect = frontPage.getBoundingClientRect();

        /*
          EXACT BEHAVIOR:
          - If ANY part of the real front page is still visible -> HIDE nav.
          - Only after the front page has completely scrolled above viewport -> SHOW nav.
          - Scroll back until front page appears again -> HIDE nav immediately.
        */
        var frontPageVisible = rect.bottom > 0 && rect.top < window.innerHeight;

        header.classList.toggle(
            "mcx-v86-front-page-hidden",
            frontPageVisible
        );

        header.classList.toggle(
            "mcx-v86-main-page-visible",
            !frontPageVisible
        );

        ticking = false;
    }

    function requestUpdate() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateNav);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            updateNav,
            { once: true }
        );
    } else {
        updateNav();
    }

    window.addEventListener("load", updateNav);

    /*
      Existing welcome/front-page scripts can finish later.
      Re-check without changing any other behavior.
    */
    setTimeout(updateNav, 250);
    setTimeout(updateNav, 750);
    setTimeout(updateNav, 1500);
    setTimeout(updateNav, 3000);
    setTimeout(updateNav, 6000);
})();
 /* MCX_V86_EXACT_FRONT_NAV_HIDE_END */

/* MCX_V89_DOUBLE_BLUR_ZOOM_START */
(function () {
    "use strict";

    var ticking = false;

    function applyV89Effect() {
        var header = document.querySelector(".site-header");
        if (!header) return;

        header.classList.add("mcx-v89-effect");

        var nav = header.querySelector(".nav");
        if (!nav) return;

        /*
          MUCH MORE SENSITIVE:
          Current-style threshold reduced to only 4px.
          A tiny scroll reaches the full effect.
        */
        var y = Math.max(window.scrollY || 0, 0);
        var progress = Math.min(y / 4, 1);

        /*
          About 2x stronger than V82:
          Zoom max : 1.36x
          Blur max : 232px
        */
        var scale = 1 + (0.36 * progress);
        var blur  = 90 + (142 * progress);
        var glow  = 0.22 + (0.28 * progress);

        nav.style.setProperty("--mcx-v89-scale", scale.toFixed(4));
        nav.style.setProperty("--mcx-v89-blur", blur.toFixed(1) + "px");
        nav.style.setProperty("--mcx-v89-glow", glow.toFixed(3));

        ticking = false;
    }

    function requestEffect() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(applyV89Effect);
    }

    window.addEventListener("scroll", requestEffect, { passive: true });
    window.addEventListener("resize", requestEffect);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyV89Effect, { once: true });
    } else {
        applyV89Effect();
    }

    window.addEventListener("load", applyV89Effect);

    setTimeout(applyV89Effect, 250);
    setTimeout(applyV89Effect, 700);
    setTimeout(applyV89Effect, 1500);
})();
 /* MCX_V89_DOUBLE_BLUR_ZOOM_END */

/* MCX_V91_FULL_CARD_CLICK_FIX_START */
/*
  Make the ENTIRE large directory card clickable.
  HOME / ABOUT / PRODUCTS / SERVICES / PRICING / PREMIUM / CONTACT
*/

(function () {
    "use strict";

    function resolvePage(card) {
        var page =
            card.getAttribute("data-mcx-page-link") ||
            card.getAttribute("data-page") ||
            card.getAttribute("data-target") ||
            "";

        page = page.trim().toLowerCase();

        if (!page) {
            var title = card.querySelector(
                ".mcx-main-directory-title, h2, h3, .title, .mcx-main-directory-copy"
            );

            if (title) {
                var text = (title.textContent || "").trim().toLowerCase();

                var known = [
                    "home",
                    "about",
                    "products",
                    "services",
                    "pricing",
                    "premium",
                    "contact"
                ];

                for (var i = 0; i < known.length; i++) {
                    if (text.indexOf(known[i]) !== -1) {
                        page = known[i];
                        break;
                    }
                }
            }
        }

        return page;
    }

    function openPage(page) {
        if (!page) return;

        var hash = "#" + page;

        if (window.location.hash === hash) {
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        } else {
            window.location.hash = hash;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    document.addEventListener(
        "click",
        function (event) {
            var card = event.target.closest(".mcx-main-directory-card");

            if (!card) return;

            var page = resolvePage(card);

            if (!page) return;

            event.preventDefault();
            event.stopPropagation();

            openPage(page);
        },
        true
    );

    /*
      Improve affordance without changing existing visual design.
    */
    document.querySelectorAll(".mcx-main-directory-card").forEach(function (card) {
        card.style.cursor = "pointer";
    });

})();
 /* MCX_V91_FULL_CARD_CLICK_FIX_END */

/* MCX_V92_BLANK_PAGE_FIX_START */
/*
  FIX ONLY blank content inside HOME / ABOUT / PRODUCTS / SERVICES /
  PRICING / PREMIUM / CONTACT pages.
  Existing navigation, blur, front-page behavior and styling are untouched.
*/
(function () {
    "use strict";

    function revealActivePageContent() {
        var hash = (window.location.hash || "#/overview").replace(/^#\/?/, "");
        var page = (hash.split("/")[0] || "overview").toLowerCase();

        var activePage =
            document.querySelector('[data-mcx-page="' + page + '"]') ||
            document.querySelector(".mcx-main-page.active");

        if (!activePage) return;

        /*
          These pages are rendered while hidden. Their existing .reveal
          elements can therefore stay invisible even after the page opens.
          Make only the CURRENT page's already-existing content visible.
        */
        activePage.querySelectorAll(".reveal").forEach(function (el) {
            el.classList.add("is-visible");
        });

        /*
          If this is the top-level page (not a category/detail route),
          ensure its existing category/index host is visible.
        */
        var parts = hash.split("/").filter(Boolean);
        if (parts.length <= 1) {
            var index = activePage.querySelector(
                '[data-mcx-category-index="' + page + '"]'
            );

            if (index) {
                index.hidden = false;
                index.classList.add("is-visible");
            }

            var detail = activePage.querySelector(
                '[data-mcx-category-detail="' + page + '"]'
            );

            if (detail && !detail.innerHTML.trim()) {
                detail.hidden = true;
            }
        }
    }

    function runAfterRoute() {
        window.requestAnimationFrame(function () {
            revealActivePageContent();

            window.requestAnimationFrame(function () {
                revealActivePageContent();
            });
        });
    }

    window.addEventListener("hashchange", runAfterRoute);
    window.addEventListener("load", runAfterRoute);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runAfterRoute, { once: true });
    } else {
        runAfterRoute();
    }

    [100, 300, 700, 1200].forEach(function (ms) {
        setTimeout(runAfterRoute, ms);
    });
})();
/* MCX_V92_BLANK_PAGE_FIX_END */

/* MCX_CURRENT_ZIP_03_START */
/*
  INTERNAL PAGE CONTENT VISIBILITY FIX
  Scope: only the currently opened top-level internal page.
  Navigation, front-page behavior, blur/zoom, colors, layout and existing
  product/service data are not modified.
*/
(function () {
    "use strict";

    var TOP_LEVEL = {
        home: true,
        about: true,
        products: true,
        services: true,
        pricing: true,
        premium: true,
        contact: true
    };

    function routeName() {
        var raw = (window.location.hash || "").replace(/^#\/?/, "");
        return (raw.split("/")[0] || "").toLowerCase();
    }

    function isTopLevelPage(name) {
        return !!TOP_LEVEL[name];
    }

    function visibleElement(el) {
        if (!el) return false;
        var s = window.getComputedStyle(el);
        var r = el.getBoundingClientRect();
        return s.display !== "none" &&
               s.visibility !== "hidden" &&
               s.opacity !== "0" &&
               (r.width > 0 || r.height > 0);
    }

    function findPageRoot(name) {
        var selectors = [
            '[data-page="' + name + '"]',
            '[data-route="' + name + '"]',
            '[data-section="' + name + '"]',
            '[data-mcx-page="' + name + '"]',
            "#" + name,
            "." + name + "-page",
            ".page-" + name,
            "[id$='-" + name + "']"
        ];

        for (var i = 0; i < selectors.length; i++) {
            try {
                var list = document.querySelectorAll(selectors[i]);
                for (var j = 0; j < list.length; j++) {
                    var el = list[j];

                    /* Never treat the navigation itself as the page root. */
                    if (el.closest &&
                        (el.closest("nav") || el.closest("header"))) {
                        continue;
                    }

                    if (el.tagName === "MAIN" || el.tagName === "SECTION" ||
                        el.classList.contains("page") ||
                        el.classList.contains("content") ||
                        el.classList.contains("page-content") ||
                        visibleElement(el)) {
                        return el;
                    }
                }
            } catch (_) {}
        }

        /* Fallback: use the main content host, never header/nav. */
        var mains = document.querySelectorAll("main, [role='main']");
        for (var k = 0; k < mains.length; k++) {
            if (!mains[k].closest || (!mains[k].closest("nav") && !mains[k].closest("header"))) {
                return mains[k];
            }
        }

        return null;
    }

    function revealOnlyPageContent(root) {
        if (!root) return;

        /*
          Remove only visibility states commonly used by the page-reveal
          animation. We do NOT touch navigation or unrelated UI.
        */
        var revealSelectors = [
            ".reveal",
            ".fade-in",
            ".fadeIn",
            ".page-reveal",
            ".content-reveal",
            ".hidden-content",
            "[data-reveal]"
        ];

        for (var i = 0; i < revealSelectors.length; i++) {
            var nodes = [];
            try { nodes = root.querySelectorAll(revealSelectors[i]); } catch (_) {}

            for (var j = 0; j < nodes.length; j++) {
                var el = nodes[j];

                el.hidden = false;
                el.classList.remove(
                    "hidden",
                    "invisible",
                    "opacity-0",
                    "is-hidden",
                    "is-invisible",
                    "reveal-hidden"
                );

                if (el.style) {
                    if (el.style.display === "none") el.style.removeProperty("display");
                    if (el.style.visibility === "hidden") el.style.removeProperty("visibility");
                    if (el.style.opacity === "0") el.style.removeProperty("opacity");
                }

                el.classList.add("is-visible");
            }
        }

        /* If the page root itself is hidden, reveal that root only. */
        var rs = window.getComputedStyle(root);
        if (root.hidden) root.hidden = false;
        if (rs.visibility === "hidden") root.style.removeProperty("visibility");
        if (rs.display === "none") root.style.removeProperty("display");
        if (rs.opacity === "0") root.style.removeProperty("opacity");
    }

    function fixCurrentPage() {
        var name = routeName();
        if (!isTopLevelPage(name)) return;

        var root = findPageRoot(name);
        if (!root) return;

        revealOnlyPageContent(root);
    }

    function scheduleFix() {
        [0, 50, 150, 350, 700].forEach(function (delay) {
            setTimeout(function () {
                try { fixCurrentPage(); } catch (_) {}
            }, delay);
        });
    }

    window.addEventListener("hashchange", scheduleFix);
    window.addEventListener("load", scheduleFix);
    document.addEventListener("DOMContentLoaded", scheduleFix);

    /* Covers apps that change the route without firing hashchange. */
    setInterval(function () {
        try { fixCurrentPage(); } catch (_) {}
    }, 1000);
})();
/* MCX_CURRENT_ZIP_03_END */

/* MCX_INTERNAL_CONTENT_VISIBILITY_FIX_START */
/*
  EXACT FIX:
  Restore visibility of EXISTING content on internal pages.

  Pages:
  HOME
  ABOUT
  PRODUCTS
  SERVICES
  PRICING
  PREMIUM
  CONTACT

  IMPORTANT:
  Navigation, front page, blur, zoom, colors, layout,
  animations and existing content are NOT modified.
*/
(function () {
    "use strict";

    function fixCurrentPageContent() {
        var hash = window.location.hash || "";
        var route = hash.replace(/^#\/?/, "").split("/")[0].toLowerCase();

        if (!route) return;

        var page =
            document.querySelector('[data-mcx-page="' + route + '"]') ||
            document.querySelector(".mcx-main-page.active");

        if (!page) return;

        /*
          Only reveal EXISTING elements inside the active page.
          No new content is created.
        */
        page.querySelectorAll(".reveal").forEach(function (element) {
            element.classList.add("is-visible");
        });

        page.querySelectorAll("[hidden]").forEach(function (element) {
            if (
                element.children.length > 0 ||
                element.textContent.trim().length > 0
            ) {
                element.hidden = false;
            }
        });
    }

    function runFix() {
        requestAnimationFrame(function () {
            fixCurrentPageContent();

            requestAnimationFrame(function () {
                fixCurrentPageContent();
            });
        });
    }

    window.addEventListener("hashchange", runFix);
    window.addEventListener("load", runFix);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runFix, {
            once: true
        });
    } else {
        runFix();
    }

    [100, 300, 700, 1200].forEach(function (delay) {
        setTimeout(runFix, delay);
    });
})();
/* MCX_INTERNAL_CONTENT_VISIBILITY_FIX_END */
