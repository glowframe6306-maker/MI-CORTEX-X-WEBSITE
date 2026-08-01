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
  if (window.__miCortexProCategories) return;
  window.__miCortexProCategories = true;
  const email="micortexx@gmail.com", phone="+94756390621", whatsapp="94756390621";
  const S=(title,items)=>({title,items});
  const T=(id,label,title,description,sections,status="")=>({id,label,title,description,sections,status});
  const about=[
    T("company-overview","COMPANY OVERVIEW","COMPANY OVERVIEW","MI CORTEX X is an artificial intelligence and software technology startup based in Sri Lanka and operating online. The company develops intelligent digital products and provides custom technology services for individuals, startups, businesses and organizations.",[S("VERIFIED COMPANY INFORMATION",["Founded: 2026","Founder: M.I. Muhammadh","CEO: M.I. Muhammadh","Location: Colombo, Sri Lanka","Headquarters: Online","Service Area: Worldwide","Company Size: Small startup","Registration status is not presented as confirmed."])]),
    T("our-story","OUR STORY","OUR STORY","MI CORTEX X began in 2026 as an independent technology initiative focused on artificial intelligence, software engineering, digital innovation and long-term product development.",[S("OUR DIRECTION",["Turn ideas into practical AI systems","Build useful websites and applications","Develop responsible business solutions","Grow honestly without invented investment history, clients, awards or partnerships"])]),
    T("mission","MISSION","OUR MISSION","To develop innovative, reliable, secure and intelligent software that helps people and businesses solve real-world problems through artificial intelligence and modern technology.",[S("MISSION PRIORITIES",["Useful innovation","Reliable engineering","Security-conscious development","Real-world problem solving","Accessible modern technology"])]),
    T("vision","VISION","OUR VISION","To grow into a globally recognized artificial intelligence and software technology company that creates original, useful and scalable digital products.",[S("VISION FOCUS",["Original products","International scalability","Reliable technology","Responsible development","Long-term global trust"])]),
    T("core-values","CORE VALUES","CORE VALUES","These principles guide product decisions, customer communication and future company development.",[S("OUR VALUES",["Innovation","Integrity","Trust","Quality","Security","Professionalism","Customer Satisfaction","Continuous Improvement","Responsible Technology Development"])]),
    T("leadership","LEADERSHIP","LEADERSHIP","MI CORTEX X is currently led by its founder and CEO, M.I. Muhammadh. Unnecessary personal information is not displayed.",[S("CURRENT LEADERSHIP",["Founder: M.I. Muhammadh","CEO: M.I. Muhammadh"]),S("RESPONSIBILITIES",["Company vision","Product direction","Software development","AI innovation","Business development","Future team development"])]),
    T("why-choose-us","WHY CHOOSE US","WHY CHOOSE MI CORTEX X","Our work is planned around real requirements, honest information and responsible technology development.",[S("KEY DIFFERENCES",["Custom solutions based on real requirements","Modern AI and software technologies","Clear and honest communication","Responsive and professional interfaces","Online worldwide availability","Flexible project planning","Long-term product vision","Customer privacy and responsible development"])]),
    T("technologies","TECHNOLOGIES WE USE","TECHNOLOGIES WE USE","Technology is selected according to each project. Not every technology is used in every solution.",[S("PROGRAMMING LANGUAGES",["Python","JavaScript","HTML","CSS"]),S("BACKEND AND RUNTIME",["Flask","Node.js"]),S("DATABASES",["Firebase","SQLite"]),S("CLOUD AND DEPLOYMENT",["Vercel"]),S("DEVELOPMENT",["Git","GitHub"]),S("AI SERVICES",["Supported AI APIs","OpenAI-compatible services","Google Gemini where configured","Groq-supported models where configured"])]),
    T("timeline","COMPANY TIMELINE","COMPANY TIMELINE","The timeline reflects verified development stages rather than invented achievements.",[S("2026",["MI CORTEX X was established","Initial website and AI product concepts were developed"]),S("CURRENT STAGE",["Developing products","Strengthening the company website","Preparing customer-focused services"]),S("NEXT STAGE",["Launch original products","Attract paying customers","Improve service delivery"]),S("FUTURE STAGE",["Build a professional team","Expand into international markets"])]),
    T("research","RESEARCH AND INNOVATION","RESEARCH AND INNOVATION","These areas represent research and development interests, not completed public products unless separately confirmed.",[S("RESEARCH INTERESTS",["AI assistants","AI agents","Business automation","Human-centered AI","Intelligent software","Productivity tools","Secure AI integration","Scalable web platforms"])],"RESEARCH AND DEVELOPMENT"),
    T("future-goals","FUTURE GOALS","FUTURE GOALS","MI CORTEX X is developing toward sustainable products, professional services and international technology delivery.",[S("PLANNED GOALS",["Release original AI and software products","Gain paying local and international customers","Build a skilled professional team","Expand research and development","Develop subscription-based products","Enter international technology markets","Build a trusted global brand"])]),
    T("global-vision","GLOBAL VISION","GLOBAL VISION","MI CORTEX X plans to use online technology delivery to serve customers beyond Sri Lanka.",[S("INTERNATIONAL DIRECTION",["Create scalable international products","Maintain quality and security","Prioritize usefulness","Apply responsible innovation","Serve customers through online delivery"])])
  ];
  const products=[
    T("cortex-core-ai","CORTEX CORE AI","CORTEX CORE AI","CORTEX CORE AI is designed as the official AI assistant of MI CORTEX X for company information, product guidance, service recommendations and initial project inquiries.",[S("POSSIBLE FUNCTIONS",["Company information","Product guidance","Service recommendations","Customer support guidance","General AI and technology information","Project inquiry assistance","Contact direction"]),S("AVAILABILITY",["Status depends on the current deployed project","No unimplemented advanced functions are claimed"])],"CURRENT PROJECT"),
    T("ai-products","AI PRODUCTS","AI PRODUCTS","AI products can be developed as custom solutions or future MI CORTEX X products according to real requirements.",[S("POTENTIAL CATEGORIES",["AI productivity tools","AI document assistants","AI customer-support tools","AI sales assistants","AI business tools","Custom AI solutions"])],"CUSTOM OR PLANNED"),
    T("ai-assistants","AI ASSISTANTS","AI ASSISTANTS","AI assistants can provide controlled information, recommendations and workflow support through suitable interfaces.",[S("POSSIBLE SOLUTIONS",["Website assistants","Customer information assistants","Internal business assistants","Knowledge assistants","Sales guidance assistants","Education assistants"])],"CUSTOM DEVELOPMENT"),
    T("ai-chatbots","AI CHATBOTS","AI CHATBOTS","Custom chatbots can be configured using approved company information and supported AI services.",[S("POSSIBLE FEATURES",["Company knowledge base","Frequently asked questions","Customer inquiry collection","Product recommendations","Service recommendations","Multilingual configuration where supported","Website integration","Human-support redirection"])],"CUSTOM DEVELOPMENT"),
    T("ai-agents","AI AGENTS","AI AGENTS","AI agents are a research and upcoming product category focused on structured and approved task assistance.",[S("POSSIBLE FUTURE FUNCTIONS",["Structured task completion","Approved workflow automation","Data organization","Business-process assistance","Controlled tool integrations"])],"RESEARCH / UPCOMING"),
    T("web-applications","WEB APPLICATIONS","WEB APPLICATIONS","Custom web applications can provide secure, responsive online tools for users and organizations.",[S("POSSIBLE PRODUCTS",["Admin dashboards","Customer portals","Booking systems","Management systems","Online examination systems","E-commerce systems","Business platforms","Custom web tools"])],"CUSTOM DEVELOPMENT"),
    T("mobile-applications","MOBILE APPLICATIONS","MOBILE APPLICATIONS","Mobile applications can be designed around real customer, business or educational workflows.",[S("POSSIBLE PRODUCTS",["Business apps","Booking apps","Customer-service apps","Delivery platforms","Educational apps","E-commerce apps","Custom Android or cross-platform apps"]),S("LIMITATION",["App Store or Google Play publication is not claimed unless completed"])],"CUSTOM DEVELOPMENT"),
    T("desktop-software","DESKTOP SOFTWARE","DESKTOP SOFTWARE","Desktop software can support local, offline or business-specific Windows workflows.",[S("POSSIBLE PRODUCTS",["Windows business tools","Inventory software","Administrative applications","Offline data systems","Billing tools","Custom desktop utilities"])],"CUSTOM DEVELOPMENT"),
    T("enterprise-software","ENTERPRISE SOFTWARE","ENTERPRISE SOFTWARE","Enterprise software can be planned for organizations with multiple roles, departments, reports and workflows.",[S("POTENTIAL SOLUTIONS",["Role-based systems","Department workflows","Reporting dashboards","Business-data systems","Internal portals","Custom enterprise platforms"]),S("LIMITATION",["Final capabilities depend on detailed requirements"])],"REQUIREMENT-BASED"),
    T("saas-platforms","SAAS PLATFORMS","SAAS PLATFORMS","Software as a Service provides cloud-based software through recurring subscriptions.",[S("POTENTIAL FUTURE PRODUCTS",["AI chatbot platform","Booking platform","Business-management platform","AI productivity suite","Customer-support platform","Automation platform"])],"UPCOMING"),
    T("apis","APIS","APIS","Custom APIs can connect applications, services, databases and approved third-party platforms.",[S("POSSIBLE API SOLUTIONS",["Custom REST APIs","AI integration APIs","Authentication APIs","Business-data APIs","Notification integrations","Third-party integrations"])],"CUSTOM DEVELOPMENT"),
    T("ai-automation-tools","AI AUTOMATION TOOLS","AI AUTOMATION TOOLS","Automation tools can reduce repetitive manual work through controlled workflows and supported integrations.",[S("POSSIBLE TOOLS",["Customer-response automation","Email workflow automation","Document processing","Lead collection","Notification automation","Business workflow automation"])],"CUSTOM DEVELOPMENT"),
    T("business-solutions","BUSINESS SOLUTIONS","BUSINESS SOLUTIONS","Business systems can be designed around customer, employee, sales, appointment and operational workflows.",[S("POTENTIAL PRODUCTS",["CRM systems","Inventory systems","Appointment systems","Billing and invoicing systems","Employee-management systems","Customer portals","Reporting dashboards","Custom management systems"])],"CUSTOM DEVELOPMENT"),
    T("upcoming-products","UPCOMING PRODUCTS","UPCOMING PRODUCTS","These concepts represent planned or research product directions. No fake release dates are displayed.",[S("PLANNED CONCEPTS",["AI productivity tools","AI agents","Enterprise AI systems","Business automation platforms","Mobile applications","Subscription-based SaaS products","Intelligent business assistants"]),S("STATUS LABELS",["Planned","In Research","In Development","Coming Soon"])],"PLANNED / RESEARCH")
  ];
  const services=[
    ["ai-development","AI DEVELOPMENT",["AI feature planning","Supported AI API integration","Custom prompts and behavior","Knowledge-base preparation","User interface development","Testing and improvement","Deployment support"]],
    ["ai-chatbot-development","AI CHATBOT DEVELOPMENT",["Company chatbot","Customer-support chatbot","Sales assistant","FAQ assistant","Knowledge-base integration","Lead collection","Human-support redirection","Website deployment"]],
    ["ai-automation","AI AUTOMATION",["Workflow analysis","Repetitive-task identification","API-based automation","Notifications","Data processing","Business-process automation","Testing and monitoring"]],
    ["website-development","WEBSITE DEVELOPMENT",["Business websites","Company websites","Portfolio websites","Landing pages","E-commerce websites where required","Responsive design","Contact forms","Basic SEO structure","Deployment"]],
    ["web-application-development","WEB APPLICATION DEVELOPMENT",["Frontend development","Backend development","Authentication","Databases","Dashboards","Customer portals","APIs","Deployment"]],
    ["mobile-app-development","MOBILE APP DEVELOPMENT",["Android and suitable cross-platform apps","Mobile UI design","Backend integration","Authentication","Notifications where supported","Testing","Deployment assistance"]],
    ["desktop-software-development","DESKTOP SOFTWARE DEVELOPMENT",["Windows applications","Offline workflows","Local databases","Administrative tools","Business utilities","Custom interfaces"]],
    ["enterprise-software-development","ENTERPRISE SOFTWARE DEVELOPMENT",["Requirement analysis","User roles","Department workflows","Dashboards","Reports","Integrations","Scalable planning","Maintenance options"]],
    ["api-development","API DEVELOPMENT",["REST API design","Data validation","Authentication","Error handling","Documentation","Testing"]],
    ["api-integration","API INTEGRATION",["AI services","Payment services where supported","Email systems","Notifications","Databases","Cloud services","Third-party platforms"]],
    ["cloud-solutions","CLOUD SOLUTIONS",["Website deployment","Web application deployment","Environment configuration","Domain connection","Serverless deployment","Health checks","Basic troubleshooting"]],
    ["ui-ux-design","UI/UX DESIGN",["User-flow planning","Wireframes","Responsive layouts","Visual design","Component consistency","Accessibility considerations","Mobile usability"]],
    ["software-maintenance","SOFTWARE MAINTENANCE",["Bug investigation","Approved updates","Security-related improvements","Performance checks","Deployment support","Technical assistance"]],
    ["technical-consulting","TECHNICAL CONSULTING",["Product planning","Technology selection","Architecture guidance","Feature prioritization","Deployment recommendations","Development roadmaps"]],
    ["custom-software-development","CUSTOM SOFTWARE DEVELOPMENT",["Discovery","Requirement collection","Planning","Interface design","Development","Testing","Deployment","Documentation","Support options"]]
  ].map(([id,label,items])=>T(id,label,label,`Professional ${label.toLowerCase()} planned around real requirements, suitable technology and clear delivery stages.`,[S("WHAT IS INCLUDED",items),S("DEVELOPMENT PROCESS",["Discovery","Requirements","Planning","Development","Testing","Deployment","Support options"])]));
  const pricing=[
    T("website-packages","WEBSITE PACKAGES","WEBSITE PACKAGES","Website quotations are prepared according to scope, page structure, design, integrations and functionality.",[S("STARTER WEBSITE — CUSTOM QUOTE",["Small companies","Personal brands","Simple informational websites"]),S("BUSINESS WEBSITE — CUSTOM QUOTE",["Multiple professional pages","Contact tools","Strong company presentation"]),S("ADVANCED WEBSITE — CUSTOM QUOTE",["Custom interfaces","Advanced animations","Integrations","Authentication","Special functionality"])]),
    T("ai-packages","AI PACKAGES","AI PACKAGES","AI pricing depends on the selected provider, usage, knowledge content, integrations and interface requirements.",[S("PACKAGE TYPES",["AI Chatbot Package — Custom Quote","AI Assistant Package — Custom Quote","AI Automation Package — Custom Quote","Custom AI Solution — Custom Quote"]),S("IMPORTANT",["AI-provider and API usage costs may be separate"])]),
    T("business-packages","BUSINESS PACKAGES","BUSINESS PACKAGES","Business package quotations are based on real workflows, users, data and integration requirements.",[S("OPTIONS",["Digital Starter — Custom Quote","Business Growth — Custom Quote","Advanced Business System — Custom Quote","Custom Business Solution — Custom Quote"])]),
    T("enterprise-packages","ENTERPRISE PACKAGES","ENTERPRISE PACKAGES","Enterprise quotations require a detailed technical and operational review.",[S("QUOTATION REQUIREMENTS",["Detailed requirements","User numbers","Departments","Permissions","Security needs","Integrations","Deployment environment","Support agreement"])]),
    T("custom-solutions","CUSTOM SOLUTIONS","CUSTOM SOLUTIONS","Every custom quotation is based on real project requirements rather than a generic fixed price.",[S("PRICING FACTORS",["Project scope","Required features","Design complexity","Integrations","AI usage","Timeline","Hosting","Maintenance requirements","External API costs"])]),
    T("maintenance-plans","MAINTENANCE PLANS","MAINTENANCE PLANS","Maintenance coverage and cost depend on the software, technical condition and support agreement.",[S("PLAN TYPES",["Basic Maintenance — Custom Quote","Standard Maintenance — Custom Quote","Advanced Maintenance — Custom Quote"])]),
    T("free-consultation","FREE CONSULTATION","INITIAL PROJECT CONSULTATION","Customers may discuss the initial project direction before a full quotation is prepared.",[S("DISCUSSION TOPICS",["Project idea","Required features","Expected users","Preferred timeline","Optional budget range","Suitable next steps"])]),
    T("request-quote","REQUEST A QUOTE","REQUEST A QUOTE","Send clear project information to receive a quotation based on the actual requirements.",[S("INCLUDE",["Project type","Required features","Expected users","Preferred deadline","Integrations","Optional budget range","Support requirements"])]),
    T("payment-methods","PAYMENT METHODS","PAYMENT METHODS","Available payment methods and payment stages will be confirmed in the official quotation or project agreement.",[S("POTENTIAL METHODS",["Bank transfer","Approved online payment","Milestone-based project payments"]),S("IMPORTANT",["No unverified bank-account information is displayed"])]),
    T("pricing-faq","PRICING FAQ","PRICING FAQ","Pricing is prepared according to actual technical and business requirements.",[S("COMMON QUESTIONS",["Why are exact prices not displayed? Each project differs.","What affects cost? Scope, features, design, integrations, timeline and support.","Are external API costs included? They may be separate.","Can payment be staged? Milestone payments may be available.","Is an initial consultation available? Yes.","Can requirements change the final price? Yes.","How do I request a quotation? Use Contact."])])
  ];
  const contact=[
    T("contact-information","CONTACT INFORMATION","CONTACT INFORMATION","Official MI CORTEX X contact information.",[S("DETAILS",["Website: https://mi-cortex-x.vercel.app/","Email: micortexx@gmail.com","Phone: +94 75 639 0621","WhatsApp: +94 75 639 0621","Telegram: confirm the correct official link","Location: Colombo, Sri Lanka","Headquarters: Online","Business Hours: Monday to Sunday, 9:00 AM to 9:00 PM, Sri Lanka time","Response Time: Usually within 24 hours"])]),
    T("contact-form","CONTACT FORM","PROJECT INQUIRY FORM","Complete the form to prepare an email inquiry. A dedicated form backend is not currently connected.",[]),
    T("email","EMAIL","EMAIL","Send product, service, project, quotation or support inquiries by email.",[S("OFFICIAL EMAIL",[email])]),
    T("phone","PHONE","PHONE","Use the official phone number for suitable business communication.",[S("OFFICIAL PHONE",["+94 75 639 0621"])]),
    T("whatsapp","WHATSAPP","WHATSAPP","Contact MI CORTEX X through the official WhatsApp number.",[S("OFFICIAL WHATSAPP",["+94 75 639 0621"])]),
    T("telegram","TELEGRAM","TELEGRAM","Telegram support is available through the official phone number. Contact MI CORTEX X to confirm the correct Telegram link.",[S("IMPORTANT",["No fake or unverified Telegram username link is displayed"])]),
    T("office-address","OFFICE ADDRESS","OFFICE ADDRESS","MI CORTEX X currently operates online from Colombo, Sri Lanka.",[S("OPERATING LOCATION",["Colombo, Sri Lanka — Online Operations","No unverified physical street office is displayed"])]),
    T("business-hours","BUSINESS HOURS","BUSINESS HOURS","Business communication is generally available throughout the week.",[S("HOURS",["Monday to Sunday","9:00 AM to 9:00 PM","Sri Lanka time","Usually within 24 hours"])]),
    T("social-media","SOCIAL MEDIA","SOCIAL MEDIA","Official social-media profiles will be added after verification.",[S("STATUS",["Coming Soon","No fake social-media links are displayed"])],"COMING SOON"),
    T("customer-support","CUSTOMER SUPPORT","CUSTOMER SUPPORT","Support is currently available through email and WhatsApp. Coverage depends on the project agreement or maintenance plan.",[S("SUPPORT METHODS",["Email","WhatsApp"]),S("PROVIDE",["Product or service name","Clear issue description","Relevant screenshots","Browser or device information","Steps that reproduce the issue"]),S("RESPONSE",["Usually within 24 hours"])]),
    T("business-inquiries","BUSINESS INQUIRIES","BUSINESS INQUIRIES","MI CORTEX X accepts appropriate business and project inquiries.",[S("INQUIRY TYPES",["Custom projects","AI development","Websites","Applications","Software systems","Quotations","Partnerships","Product information"])]),
    T("send-inquiry","SEND AN INQUIRY","SEND AN INQUIRY","Use email or WhatsApp to send a clear inquiry about your project, quotation or support request.",[S("RECOMMENDED INFORMATION",["Your name","Country","Project type","Main requirements","Preferred timeline","Optional budget range","Preferred contact method"])])
  ];
  const collections={about,products,services,pricing,contact};
  const process={Discovery:"The project idea, goals, intended users and main problem are reviewed.",Requirements:"Required features, content, workflows, integrations and limitations are documented.",Planning:"The structure, technology, stages and suitable project approach are prepared.",Design:"Responsive interfaces, user flows and component behavior are designed.",Development:"Approved frontend, backend, database, API or AI functionality is implemented.",Testing:"Core workflows, responsiveness, validation, errors and usability are reviewed.",Deployment:"The approved product is configured and deployed to a suitable environment.",Support:"Support, maintenance and approved improvements follow the agreement."};
  const esc=v=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const details=t=>t.sections.map(s=>`<section class="mcx-detail-card"><h3>${esc(s.title)}</h3><ul>${s.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul></section>`).join("");
  function form(){return `<form class="mcx-form" data-mcx-contact-form><div class="mcx-field"><label>Full Name<input name="fullName" required autocomplete="name"></label></div><div class="mcx-field"><label>Email Address<input name="email" type="email" required autocomplete="email"></label></div><div class="mcx-field"><label>Phone Number (Optional)<input name="phone" type="tel" autocomplete="tel"></label></div><div class="mcx-field"><label>Country<input name="country" required></label></div><div class="mcx-field"><label>Company Name (Optional)<input name="company"></label></div><div class="mcx-field"><label>Project Type<select name="projectType" required><option value="">Select</option><option>AI Development</option><option>AI Chatbot</option><option>Website</option><option>Web Application</option><option>Mobile Application</option><option>Desktop Software</option><option>Business Software</option><option>API or Integration</option><option>Other Custom Project</option></select></label></div><div class="mcx-field"><label>Estimated Budget (Optional)<input name="budget"></label></div><div class="mcx-field"><label>Preferred Deadline<input name="deadline"></label></div><div class="mcx-field full"><label>Project Description<textarea name="description" required></textarea></label></div><label class="mcx-consent"><input type="checkbox" required> I agree to provide these details for receiving a response.</label><p class="mcx-form-note">Submitting opens your email application because a dedicated form backend is not currently connected.</p><button class="mcx-action" type="submit">PREPARE EMAIL INQUIRY</button></form>`}
  function actions(page,id){if(page==="contact"){if(id==="email")return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${email}">SEND EMAIL</a></div>`;if(id==="phone")return `<div class="mcx-action-row"><a class="mcx-action" href="tel:${phone}">CALL MI CORTEX X</a></div>`;if(id==="whatsapp")return `<div class="mcx-action-row"><a class="mcx-action" href="https://wa.me/${whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`;if(["contact-information","customer-support","business-inquiries","send-inquiry"].includes(id))return `<div class="mcx-action-row"><a class="mcx-action" href="mailto:${email}">SEND EMAIL</a><a class="mcx-action secondary" href="https://wa.me/${whatsapp}" target="_blank" rel="noopener noreferrer">OPEN WHATSAPP</a></div>`;return ""}if(["products","services","pricing"].includes(page))return `<div class="mcx-action-row"><button class="mcx-action" data-mcx-open-topic="contact:send-inquiry">REQUEST INFORMATION</button></div>`;return ""}
  function render(page,id){const list=collections[page]||[],topic=list.find(t=>t.id===id)||list[0],panel=document.querySelector(`[data-mcx-topic-panel="${page}"]`);if(!topic||!panel)return;panel.innerHTML=`${topic.status?`<span class="mcx-status">${esc(topic.status)}</span>`:""}<h2>${esc(topic.title)}</h2><p>${esc(topic.description)}</p>${page==="contact"&&topic.id==="contact-form"?form():""}<div class="mcx-detail-grid">${details(topic)}</div>${actions(page,topic.id)}`;panel.dataset.activeTopic=topic.id;document.querySelectorAll(`[data-mcx-topic-nav="${page}"] .mcx-topic-button`).forEach(b=>b.classList.toggle("active",b.dataset.topicId===topic.id));panel.focus({preventScroll:true});const f=panel.querySelector("[data-mcx-contact-form]");if(f)f.addEventListener("submit",submitForm)}
  function buildNav(page){const nav=document.querySelector(`[data-mcx-topic-nav="${page}"]`),list=collections[page];if(!nav||!list)return;nav.innerHTML=list.map((t,i)=>`<button type="button" class="mcx-topic-button${i===0?" active":""}" data-topic-id="${esc(t.id)}">${esc(t.label)}</button>`).join("");render(page,list[0].id)}
  function submitForm(e){e.preventDefault();if(!e.currentTarget.reportValidity())return;const d=new FormData(e.currentTarget),subject=encodeURIComponent(`MI CORTEX X Project Inquiry - ${d.get("projectType")||"Custom Project"}`),body=encodeURIComponent([`Full Name: ${d.get("fullName")||""}`,`Email: ${d.get("email")||""}`,`Phone: ${d.get("phone")||"Not provided"}`,`Country: ${d.get("country")||""}`,`Company: ${d.get("company")||"Not provided"}`,`Project Type: ${d.get("projectType")||""}`,`Estimated Budget: ${d.get("budget")||"Not provided"}`,`Preferred Deadline: ${d.get("deadline")||"Not provided"}`,"","Project Description:",d.get("description")||""].join("\n"));location.href=`mailto:${email}?subject=${subject}&body=${body}`}
  function route(update=true){let raw=location.hash.replace(/^#/,"")||"home",[page,topic=""]=raw.split("/");if(!["home","about","products","services","pricing","contact"].includes(page))page="home";document.querySelectorAll("[data-mcx-page]").forEach(s=>{const on=s.dataset.mcxPage===page;s.classList.toggle("active",on);s.hidden=!on});document.querySelectorAll("[data-mcx-page-link]").forEach(a=>a.classList.toggle("active",a.dataset.mcxPageLink===page));if(page!=="home")render(page,topic);if(update)scrollTo({top:0,behavior:"smooth"})}
  function open(page,topic=""){const hash=`#${page}${topic?`/${topic}`:""}`;if(location.hash===hash)route();else location.hash=hash}
  function init(){Object.keys(collections).forEach(buildNav);const pg=document.querySelector("[data-mcx-process-grid]");if(pg){pg.innerHTML=Object.keys(process).map((n,i)=>`<button type="button" data-process="${n}" class="${i===0?"active":""}"><strong>${n}</strong></button>`).join("");document.querySelector("[data-mcx-process-output]").textContent=process.Discovery}const faq=document.querySelector("[data-mcx-home-faq]");if(faq)faq.innerHTML=[["What is MI CORTEX X?","A Sri Lankan AI and software technology startup founded in 2026."],["What products are developed?","AI assistants, chatbots, web and mobile applications, desktop software, APIs, SaaS concepts and business systems."],["What services are available?","AI development, websites, applications, automation, APIs, deployment, UI/UX, maintenance and consulting."],["Does MI CORTEX X work internationally?","Yes. Services can be delivered worldwide online."],["Can I request a custom product?","Yes, subject to requirements and technical feasibility."],["How can I request a quotation?","Use the Contact category and send project details."],["Is an initial consultation available?","Yes, for initial project discussion."],["How can I contact support?","Through email or WhatsApp." ]].map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("");document.addEventListener("click",e=>{const t=e.target.closest("[data-topic-id]");if(t){const p=t.closest("[data-mcx-topic-nav]").dataset.mcxTopicNav;open(p,t.dataset.topicId);return}const ot=e.target.closest("[data-mcx-open-topic]");if(ot){const [p,id]=ot.dataset.mcxOpenTopic.split(":");open(p,id);return}const op=e.target.closest("[data-mcx-open-page]");if(op){open(op.dataset.mcxOpenPage);return}const pb=e.target.closest("[data-process]");if(pb){document.querySelectorAll("[data-process]").forEach(b=>b.classList.toggle("active",b===pb));document.querySelector("[data-mcx-process-output]").textContent=process[pb.dataset.process]}});addEventListener("hashchange",()=>route());route(false)}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
/* MI_CORTEX_PRO_CATEGORY_SYSTEM_END */
