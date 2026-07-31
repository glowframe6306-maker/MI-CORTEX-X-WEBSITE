"use strict";

const websiteData = {
    about: [
        {
            title: "COMPANY OVERVIEW",
            summary:
                "MI CORTEX X is a Sri Lankan artificial intelligence and software technology company developing intelligent digital products and custom software solutions.",
            details: [
                {
                    title: "COMPANY TYPE",
                    text: "Artificial intelligence products and software technology."
                },
                {
                    title: "ESTABLISHED",
                    text: "Founded in 2026."
                },
                {
                    title: "LOCATION",
                    text: "Colombo, Sri Lanka, operating online."
                },
                {
                    title: "SERVICE AREA",
                    text: "Digital services and technology solutions available worldwide."
                }
            ]
        },
        {
            title: "OUR STORY",
            summary:
                "MI CORTEX X was founded with the goal of making modern artificial intelligence and professional software more useful, accessible and practical.",
            details: [
                {
                    title: "BEGINNING",
                    text: "The company began as an independent technology vision focused on artificial intelligence and software engineering."
                },
                {
                    title: "PURPOSE",
                    text: "To transform ideas into secure, reliable and professional digital products."
                },
                {
                    title: "DEVELOPMENT",
                    text: "The company continues to expand its knowledge, products and technical capabilities."
                },
                {
                    title: "DIRECTION",
                    text: "The long-term direction is global technology development and innovation."
                }
            ]
        },
        {
            title: "MISSION",
            summary:
                "To develop innovative, reliable, secure and intelligent software that helps people and businesses solve real-world problems.",
            details: [
                {
                    title: "INNOVATION",
                    text: "Create useful solutions using modern technologies."
                },
                {
                    title: "RELIABILITY",
                    text: "Build software designed to work consistently and professionally."
                },
                {
                    title: "ACCESSIBILITY",
                    text: "Make advanced technology easier for more people and businesses to use."
                },
                {
                    title: "REAL-WORLD VALUE",
                    text: "Focus on solutions that support productivity, communication and growth."
                }
            ]
        },
        {
            title: "VISION",
            summary:
                "To become a globally recognized artificial intelligence and software technology company.",
            details: [
                {
                    title: "GLOBAL REACH",
                    text: "Serve customers and organizations across international markets."
                },
                {
                    title: "ADVANCED PRODUCTS",
                    text: "Develop original AI systems and scalable software products."
                },
                {
                    title: "TECHNOLOGY LEADERSHIP",
                    text: "Continuously improve engineering, research and innovation."
                },
                {
                    title: "LONG-TERM IMPACT",
                    text: "Create technology that provides meaningful value for future generations."
                }
            ]
        },
        {
            title: "CORE VALUES",
            summary:
                "The company is guided by innovation, integrity, trust, quality, security, professionalism and continuous improvement.",
            details: [
                {
                    title: "INNOVATION",
                    text: "Explore better ideas and smarter technical solutions."
                },
                {
                    title: "INTEGRITY",
                    text: "Communicate honestly and avoid false claims."
                },
                {
                    title: "QUALITY",
                    text: "Maintain professional standards in design and development."
                },
                {
                    title: "CUSTOMER FOCUS",
                    text: "Understand requirements and create suitable solutions."
                }
            ]
        },
        {
            title: "LEADERSHIP",
            summary:
                "MI CORTEX X was founded and is led by M.I. Muhammadh.",
            details: [
                {
                    title: "FOUNDER",
                    text: "M.I. Muhammadh"
                },
                {
                    title: "CEO",
                    text: "M.I. Muhammadh"
                },
                {
                    title: "RESPONSIBILITY",
                    text: "Product vision, company direction, development and innovation."
                },
                {
                    title: "LEADERSHIP GOAL",
                    text: "Build MI CORTEX X into a trusted international technology company."
                }
            ]
        },
        {
            title: "WHY CHOOSE US",
            summary:
                "MI CORTEX X combines customer-focused planning, modern development and flexible technology solutions.",
            details: [
                {
                    title: "CUSTOM DEVELOPMENT",
                    text: "Solutions can be created according to specific project requirements."
                },
                {
                    title: "MODERN TECHNOLOGY",
                    text: "Projects use current web, cloud and artificial intelligence technologies."
                },
                {
                    title: "CLEAR COMMUNICATION",
                    text: "Project requirements and limitations are explained honestly."
                },
                {
                    title: "FUTURE READY",
                    text: "Systems are designed with future improvements and expansion in mind."
                }
            ]
        },
        {
            title: "TECHNOLOGIES WE USE",
            summary:
                "MI CORTEX X uses modern programming, cloud, database and artificial intelligence technologies.",
            details: [
                {
                    title: "PROGRAMMING",
                    text: "Python, JavaScript, HTML and CSS."
                },
                {
                    title: "BACKEND",
                    text: "Flask, Node.js and REST APIs."
                },
                {
                    title: "DATABASES",
                    text: "Firebase and SQLite where suitable."
                },
                {
                    title: "DEPLOYMENT",
                    text: "Vercel, Git and GitHub."
                }
            ]
        },
        {
            title: "COMPANY TIMELINE",
            summary:
                "The company timeline represents the planned development of MI CORTEX X from an emerging startup into a global technology organization.",
            details: [
                {
                    title: "2026",
                    text: "MI CORTEX X established and initial digital products developed."
                },
                {
                    title: "NEXT STAGE",
                    text: "Release AI products and gain real customers."
                },
                {
                    title: "GROWTH STAGE",
                    text: "Build a professional team and expand product development."
                },
                {
                    title: "GLOBAL STAGE",
                    text: "Enter international markets with scalable technology products."
                }
            ]
        },
        {
            title: "RESEARCH AND INNOVATION",
            summary:
                "Research and development will focus on useful artificial intelligence, automation and intelligent software systems.",
            details: [
                {
                    title: "AI AGENTS",
                    text: "Research systems capable of completing structured digital tasks."
                },
                {
                    title: "AUTOMATION",
                    text: "Develop tools that reduce repetitive business work."
                },
                {
                    title: "HUMAN-CENTERED AI",
                    text: "Create technology that is understandable and useful for people."
                },
                {
                    title: "RESPONSIBLE DEVELOPMENT",
                    text: "Consider privacy, safety and reliability during product development."
                }
            ]
        },
        {
            title: "FUTURE GOALS",
            summary:
                "MI CORTEX X aims to release original products, build a skilled team and expand internationally.",
            details: [
                {
                    title: "PRODUCT GROWTH",
                    text: "Develop scalable AI and software products."
                },
                {
                    title: "TEAM GROWTH",
                    text: "Recruit skilled developers, designers and support professionals."
                },
                {
                    title: "MARKET EXPANSION",
                    text: "Reach customers in Asia and other international markets."
                },
                {
                    title: "LONG-TERM VISION",
                    text: "Become a recognized technology and artificial intelligence company."
                }
            ]
        },
        {
            title: "GLOBAL VISION",
            summary:
                "The company intends to provide online technology products and services to users and organizations worldwide.",
            details: [
                {
                    title: "ONLINE DELIVERY",
                    text: "Provide digital services without geographical limitations."
                },
                {
                    title: "INTERNATIONAL CLIENTS",
                    text: "Support customers from multiple countries."
                },
                {
                    title: "SCALABLE PRODUCTS",
                    text: "Create software that can serve growing numbers of users."
                },
                {
                    title: "GLOBAL BRAND",
                    text: "Develop a trusted and recognizable international identity."
                }
            ]
        }
    ],

    products: [
        {
            title: "AI PRODUCTS",
            summary:
                "Artificial intelligence products designed for communication, productivity, automation and business support.",
            details: [
                {
                    title: "AI ASSISTANTS",
                    text: "Interactive assistants that provide information and digital guidance."
                },
                {
                    title: "AI BUSINESS TOOLS",
                    text: "Products that help businesses organize work and communicate efficiently."
                },
                {
                    title: "AI PRODUCTIVITY",
                    text: "Tools for writing, summarizing, planning and managing information."
                },
                {
                    title: "CUSTOM AI",
                    text: "AI functionality developed for specific customer requirements."
                }
            ]
        },
        {
            title: "CORTEX CORE AI",
            summary:
                "CORTEX CORE AI is the official artificial intelligence assistant of MI CORTEX X.",
            details: [
                {
                    title: "COMPANY ASSISTANCE",
                    text: "Provides verified information about MI CORTEX X."
                },
                {
                    title: "CUSTOMER GUIDANCE",
                    text: "Helps visitors identify suitable products and services."
                },
                {
                    title: "GENERAL TECHNOLOGY",
                    text: "Can provide educational answers about software and artificial intelligence."
                },
                {
                    title: "PROJECT INQUIRIES",
                    text: "Guides potential customers through initial project requirements."
                }
            ]
        },
        {
            title: "AI ASSISTANTS",
            summary:
                "Custom digital assistants for websites, businesses, internal teams and customer communication.",
            details: [
                {
                    title: "WEBSITE ASSISTANT",
                    text: "Answers questions and guides website visitors."
                },
                {
                    title: "BUSINESS ASSISTANT",
                    text: "Supports internal tasks and information access."
                },
                {
                    title: "SALES ASSISTANT",
                    text: "Helps customers understand products and services."
                },
                {
                    title: "KNOWLEDGE ASSISTANT",
                    text: "Uses approved company information to provide consistent answers."
                }
            ]
        },
        {
            title: "AI CHATBOTS",
            summary:
                "Professional chatbots for customer support, sales, information and automated communication.",
            details: [
                {
                    title: "CUSTOMER SUPPORT",
                    text: "Responds to common customer questions."
                },
                {
                    title: "LEAD COLLECTION",
                    text: "Collects customer and project details."
                },
                {
                    title: "MULTILINGUAL SUPPORT",
                    text: "Can be configured for suitable supported languages."
                },
                {
                    title: "SYSTEM INTEGRATION",
                    text: "Can connect with approved APIs and business systems."
                }
            ]
        },
        {
            title: "AI AGENTS",
            summary:
                "Planned intelligent agents designed to complete structured tasks under defined permissions.",
            details: [
                {
                    title: "TASK AUTOMATION",
                    text: "Complete repeatable digital workflows."
                },
                {
                    title: "DATA PROCESSING",
                    text: "Organize and process approved information."
                },
                {
                    title: "BUSINESS WORKFLOWS",
                    text: "Assist with multi-step operational tasks."
                },
                {
                    title: "CONTROLLED ACTIONS",
                    text: "Operate only within authorized tools and permissions."
                }
            ]
        },
        {
            title: "WEB APPLICATIONS",
            summary:
                "Interactive web-based systems for customers, staff, administration and business operations.",
            details: [
                {
                    title: "DASHBOARDS",
                    text: "Administrative and business management interfaces."
                },
                {
                    title: "CUSTOMER PORTALS",
                    text: "Secure online areas for customer services."
                },
                {
                    title: "BOOKING SYSTEMS",
                    text: "Online appointments, reservations and scheduling."
                },
                {
                    title: "MANAGEMENT SYSTEMS",
                    text: "Web software for business processes and records."
                }
            ]
        },
        {
            title: "MOBILE APPLICATIONS",
            summary:
                "Mobile application products for Android and supported cross-platform environments.",
            details: [
                {
                    title: "BUSINESS APPS",
                    text: "Applications supporting business services and customer communication."
                },
                {
                    title: "BOOKING APPS",
                    text: "Mobile appointments and service reservations."
                },
                {
                    title: "MARKETPLACE APPS",
                    text: "Digital platforms connecting customers and providers."
                },
                {
                    title: "CUSTOM APPS",
                    text: "Mobile products built according to project requirements."
                }
            ]
        },
        {
            title: "DESKTOP SOFTWARE",
            summary:
                "Desktop applications for administrative work, offline processes and specialized business requirements.",
            details: [
                {
                    title: "WINDOWS SOFTWARE",
                    text: "Desktop tools designed for supported Windows environments."
                },
                {
                    title: "BUSINESS UTILITIES",
                    text: "Tools for daily administrative processes."
                },
                {
                    title: "LOCAL DATABASES",
                    text: "Applications using suitable local storage solutions."
                },
                {
                    title: "CUSTOM WORKFLOWS",
                    text: "Software developed around specific operational requirements."
                }
            ]
        },
        {
            title: "ENTERPRISE SOFTWARE",
            summary:
                "Scalable systems for organizations requiring structured operations, users, permissions and reporting.",
            details: [
                {
                    title: "ROLE MANAGEMENT",
                    text: "Controlled access for different users and departments."
                },
                {
                    title: "BUSINESS DATA",
                    text: "Centralized management of approved organizational information."
                },
                {
                    title: "REPORTING",
                    text: "Dashboards and operational reports."
                },
                {
                    title: "SCALABILITY",
                    text: "Architecture designed for future growth."
                }
            ]
        },
        {
            title: "SAAS PLATFORMS",
            summary:
                "Cloud-based software products available through subscriptions or organizational licences.",
            details: [
                {
                    title: "ONLINE ACCESS",
                    text: "Use supported products through web browsers."
                },
                {
                    title: "SUBSCRIPTIONS",
                    text: "Monthly or annual access plans where available."
                },
                {
                    title: "UPDATES",
                    text: "Centralized software updates and improvements."
                },
                {
                    title: "SCALABLE DELIVERY",
                    text: "Serve multiple customers through a managed platform."
                }
            ]
        },
        {
            title: "APIS",
            summary:
                "Application programming interfaces that allow approved systems to communicate and exchange data.",
            details: [
                {
                    title: "REST APIS",
                    text: "Structured endpoints for web and application integration."
                },
                {
                    title: "AI INTEGRATION",
                    text: "Connect software with supported AI services."
                },
                {
                    title: "BUSINESS INTEGRATION",
                    text: "Exchange data between compatible systems."
                },
                {
                    title: "AUTHENTICATION",
                    text: "Secure access controls where required."
                }
            ]
        },
        {
            title: "AI AUTOMATION TOOLS",
            summary:
                "Automation products designed to reduce repetitive work and improve digital workflows.",
            details: [
                {
                    title: "MESSAGE AUTOMATION",
                    text: "Automated responses and customer communication."
                },
                {
                    title: "DOCUMENT AUTOMATION",
                    text: "Process structured documents and information."
                },
                {
                    title: "WORKFLOW AUTOMATION",
                    text: "Connect defined tasks into repeatable processes."
                },
                {
                    title: "NOTIFICATIONS",
                    text: "Automated alerts based on approved conditions."
                }
            ]
        },
        {
            title: "BUSINESS SOLUTIONS",
            summary:
                "Digital products for customer management, sales, operations, bookings and business administration.",
            details: [
                {
                    title: "CRM",
                    text: "Manage customer communication and leads."
                },
                {
                    title: "INVENTORY",
                    text: "Track products, stock and movement."
                },
                {
                    title: "BOOKING",
                    text: "Manage appointments and reservations."
                },
                {
                    title: "INVOICING",
                    text: "Create and organize customer invoices."
                }
            ]
        },
        {
            title: "UPCOMING PRODUCTS",
            summary:
                "Planned future products include AI productivity tools, agents, automation systems and scalable business platforms.",
            details: [
                {
                    title: "AI PRODUCTIVITY SUITE",
                    text: "A collection of intelligent productivity tools."
                },
                {
                    title: "BUSINESS AUTOMATION PLATFORM",
                    text: "A platform for connecting and automating digital workflows."
                },
                {
                    title: "ENTERPRISE AI",
                    text: "AI systems developed for organizational environments."
                },
                {
                    title: "FUTURE APPLICATIONS",
                    text: "Mobile, web and desktop products currently planned for development."
                }
            ]
        }
    ],

    services: [
        {
            title: "AI DEVELOPMENT",
            summary:
                "Design and development of artificial intelligence features and products for suitable business requirements.",
            details: [
                {
                    title: "PLANNING",
                    text: "Identify the real problem and define suitable AI functionality."
                },
                {
                    title: "MODEL INTEGRATION",
                    text: "Integrate supported artificial intelligence APIs and models."
                },
                {
                    title: "USER EXPERIENCE",
                    text: "Create clear interfaces for interacting with AI."
                },
                {
                    title: "TESTING",
                    text: "Evaluate accuracy, reliability and expected behavior."
                }
            ]
        },
        {
            title: "AI CHATBOT DEVELOPMENT",
            summary:
                "Custom chatbot development for customer support, sales, websites and company information.",
            details: [
                {
                    title: "KNOWLEDGE BASE",
                    text: "Configure verified business information."
                },
                {
                    title: "CUSTOM INTERFACE",
                    text: "Design a chatbot interface matching the company brand."
                },
                {
                    title: "LEAD COLLECTION",
                    text: "Collect approved customer inquiry details."
                },
                {
                    title: "DEPLOYMENT",
                    text: "Deploy the chatbot to supported websites or systems."
                }
            ]
        },
        {
            title: "AI AUTOMATION",
            summary:
                "Automate repetitive digital tasks using clearly defined workflows and approved integrations.",
            details: [
                {
                    title: "PROCESS REVIEW",
                    text: "Identify tasks suitable for automation."
                },
                {
                    title: "WORKFLOW DESIGN",
                    text: "Design safe and understandable automation steps."
                },
                {
                    title: "API CONNECTIONS",
                    text: "Connect compatible services where authorized."
                },
                {
                    title: "MONITORING",
                    text: "Review results and improve reliability."
                }
            ]
        },
        {
            title: "WEBSITE DEVELOPMENT",
            summary:
                "Professional websites for businesses, brands, organizations, portfolios and online services.",
            details: [
                {
                    title: "RESPONSIVE DESIGN",
                    text: "Optimized for desktop, tablet and mobile screens."
                },
                {
                    title: "PROFESSIONAL UI",
                    text: "Clean layouts, typography and visual structure."
                },
                {
                    title: "SEO STRUCTURE",
                    text: "Semantic content and basic search-friendly structure."
                },
                {
                    title: "DEPLOYMENT",
                    text: "Publish the completed website on a suitable hosting platform."
                }
            ]
        },
        {
            title: "WEB APPLICATION DEVELOPMENT",
            summary:
                "Interactive browser-based software for users, customers, employees and administrators.",
            details: [
                {
                    title: "FRONTEND",
                    text: "Responsive interfaces and interactive components."
                },
                {
                    title: "BACKEND",
                    text: "Server logic, APIs and data processing."
                },
                {
                    title: "DATABASE",
                    text: "Suitable storage and structured data management."
                },
                {
                    title: "USER ACCOUNTS",
                    text: "Authentication and permissions where required."
                }
            ]
        },
        {
            title: "MOBILE APP DEVELOPMENT",
            summary:
                "Mobile application development for suitable Android and cross-platform projects.",
            details: [
                {
                    title: "APP DESIGN",
                    text: "Mobile-friendly user interface and interaction design."
                },
                {
                    title: "APPLICATION LOGIC",
                    text: "Features developed according to project requirements."
                },
                {
                    title: "API INTEGRATION",
                    text: "Connect mobile apps with supported online services."
                },
                {
                    title: "TESTING",
                    text: "Test supported devices and expected workflows."
                }
            ]
        },
        {
            title: "DESKTOP SOFTWARE DEVELOPMENT",
            summary:
                "Custom desktop applications for operational, administrative and specialized business tasks.",
            details: [
                {
                    title: "WINDOWS APPLICATIONS",
                    text: "Software designed for supported Windows systems."
                },
                {
                    title: "OFFLINE FEATURES",
                    text: "Suitable functions that can operate without constant internet access."
                },
                {
                    title: "DATA MANAGEMENT",
                    text: "Local or connected data storage."
                },
                {
                    title: "CUSTOM INTERFACES",
                    text: "Interfaces designed around the required workflow."
                }
            ]
        },
        {
            title: "ENTERPRISE SOFTWARE DEVELOPMENT",
            summary:
                "Structured software systems for organizations with multiple users, departments and business processes.",
            details: [
                {
                    title: "REQUIREMENT ANALYSIS",
                    text: "Document organizational needs and workflows."
                },
                {
                    title: "ROLE-BASED ACCESS",
                    text: "Control features based on authorized user roles."
                },
                {
                    title: "REPORTING",
                    text: "Provide dashboards and operational reports."
                },
                {
                    title: "SCALABLE ARCHITECTURE",
                    text: "Plan systems for future growth."
                }
            ]
        },
        {
            title: "API DEVELOPMENT",
            summary:
                "Create structured APIs that allow compatible applications and services to communicate.",
            details: [
                {
                    title: "REST ENDPOINTS",
                    text: "Create organized API routes."
                },
                {
                    title: "VALIDATION",
                    text: "Validate incoming and outgoing data."
                },
                {
                    title: "AUTHENTICATION",
                    text: "Protect authorized endpoints."
                },
                {
                    title: "DOCUMENTATION",
                    text: "Provide useful integration information."
                }
            ]
        },
        {
            title: "API INTEGRATION",
            summary:
                "Connect websites and applications with supported third-party services and APIs.",
            details: [
                {
                    title: "AI PROVIDERS",
                    text: "Integrate supported artificial intelligence services."
                },
                {
                    title: "PAYMENTS",
                    text: "Connect suitable payment services where available."
                },
                {
                    title: "MESSAGING",
                    text: "Integrate approved email, notification or messaging systems."
                },
                {
                    title: "DATA SERVICES",
                    text: "Connect compatible external data sources."
                }
            ]
        },
        {
            title: "CLOUD SOLUTIONS",
            summary:
                "Deployment and configuration of suitable websites, applications and backend systems on supported cloud platforms.",
            details: [
                {
                    title: "DEPLOYMENT",
                    text: "Publish applications to suitable hosting services."
                },
                {
                    title: "ENVIRONMENT VARIABLES",
                    text: "Configure protected deployment settings."
                },
                {
                    title: "DOMAINS",
                    text: "Connect supported custom domain names."
                },
                {
                    title: "MONITORING",
                    text: "Review deployment health and application errors."
                }
            ]
        },
        {
            title: "UI UX DESIGN",
            summary:
                "User interface and user experience planning for clear, modern and professional digital products.",
            details: [
                {
                    title: "USER FLOWS",
                    text: "Plan how users move through the product."
                },
                {
                    title: "WIREFRAMES",
                    text: "Create initial interface structures."
                },
                {
                    title: "VISUAL DESIGN",
                    text: "Develop colors, typography and component styles."
                },
                {
                    title: "RESPONSIVE DESIGN",
                    text: "Adapt interfaces for multiple screen sizes."
                }
            ]
        },
        {
            title: "SOFTWARE MAINTENANCE",
            summary:
                "Ongoing updates, fixes and technical support for compatible software projects.",
            details: [
                {
                    title: "BUG FIXES",
                    text: "Investigate and repair verified software issues."
                },
                {
                    title: "UPDATES",
                    text: "Apply approved content and feature updates."
                },
                {
                    title: "MONITORING",
                    text: "Review application status where included in the agreement."
                },
                {
                    title: "SUPPORT",
                    text: "Provide technical assistance according to the selected plan."
                }
            ]
        },
        {
            title: "TECHNICAL CONSULTING",
            summary:
                "Guidance for selecting technologies, planning products and improving software projects.",
            details: [
                {
                    title: "PROJECT PLANNING",
                    text: "Define scope, priorities and technical requirements."
                },
                {
                    title: "TECHNOLOGY SELECTION",
                    text: "Recommend suitable technologies for the project."
                },
                {
                    title: "ARCHITECTURE REVIEW",
                    text: "Review software structure and future scalability."
                },
                {
                    title: "IMPROVEMENT PLAN",
                    text: "Identify practical next steps for development."
                }
            ]
        },
        {
            title: "CUSTOM SOFTWARE DEVELOPMENT",
            summary:
                "Original software created according to specific customer requirements, workflows and goals.",
            details: [
                {
                    title: "DISCOVERY",
                    text: "Understand the required problem and expected outcome."
                },
                {
                    title: "CUSTOM DESIGN",
                    text: "Design features and interfaces for the project."
                },
                {
                    title: "DEVELOPMENT",
                    text: "Build the approved application or system."
                },
                {
                    title: "DELIVERY",
                    text: "Test, deploy and provide agreed documentation."
                }
            ]
        }
    ],

    pricing: [
        {
            title: "WEBSITE PACKAGES",
            summary:
                "Website pricing depends on the number of pages, design complexity, features, content and deployment requirements.",
            details: [
                {
                    title: "STARTER WEBSITE",
                    text: "Suitable for small businesses, personal brands and simple company websites."
                },
                {
                    title: "BUSINESS WEBSITE",
                    text: "Suitable for professional companies requiring multiple sections and contact features."
                },
                {
                    title: "ADVANCED WEBSITE",
                    text: "Suitable for custom animations, integrations and advanced functionality."
                },
                {
                    title: "PRICING",
                    text: "A custom quotation is provided after reviewing requirements."
                }
            ]
        },
        {
            title: "AI PACKAGES",
            summary:
                "AI project pricing is based on functionality, model usage, data, integrations and expected traffic.",
            details: [
                {
                    title: "AI CHATBOT",
                    text: "Website chatbot using approved company information."
                },
                {
                    title: "AI ASSISTANT",
                    text: "Advanced assistant with custom behavior and integrations."
                },
                {
                    title: "AI AUTOMATION",
                    text: "Automated workflows using supported services."
                },
                {
                    title: "ONGOING COSTS",
                    text: "External AI API and hosting costs may be charged separately."
                }
            ]
        },
        {
            title: "BUSINESS PACKAGES",
            summary:
                "Business packages combine suitable websites, systems, support and automation features.",
            details: [
                {
                    title: "DIGITAL STARTER",
                    text: "Company website and essential contact functions."
                },
                {
                    title: "BUSINESS GROWTH",
                    text: "Website, customer system and selected automation."
                },
                {
                    title: "ADVANCED BUSINESS",
                    text: "Custom web application, dashboards and integrations."
                },
                {
                    title: "CUSTOM QUOTE",
                    text: "Pricing is prepared based on selected components."
                }
            ]
        },
        {
            title: "ENTERPRISE PACKAGES",
            summary:
                "Enterprise pricing is prepared after detailed requirement analysis and project planning.",
            details: [
                {
                    title: "MULTIPLE USERS",
                    text: "Support for user roles and departments."
                },
                {
                    title: "CUSTOM WORKFLOWS",
                    text: "Software designed around organizational operations."
                },
                {
                    title: "INTEGRATIONS",
                    text: "Connection with compatible existing systems."
                },
                {
                    title: "SUPPORT AGREEMENT",
                    text: "Maintenance and support can be included separately."
                }
            ]
        },
        {
            title: "CUSTOM SOLUTIONS",
            summary:
                "Custom projects receive an individual quotation based on scope, features, timeline and technical complexity.",
            details: [
                {
                    title: "PROJECT SCOPE",
                    text: "The complete amount of planned work."
                },
                {
                    title: "FEATURES",
                    text: "Required functions and integrations."
                },
                {
                    title: "TIMELINE",
                    text: "Expected development and delivery schedule."
                },
                {
                    title: "COMPLEXITY",
                    text: "Technical difficulty, security and infrastructure needs."
                }
            ]
        },
        {
            title: "MAINTENANCE PLANS",
            summary:
                "Maintenance plans may include updates, monitoring, bug fixes and technical support.",
            details: [
                {
                    title: "BASIC MAINTENANCE",
                    text: "Small updates and essential checks."
                },
                {
                    title: "STANDARD MAINTENANCE",
                    text: "Regular support, updates and issue investigation."
                },
                {
                    title: "ADVANCED MAINTENANCE",
                    text: "Priority support and broader technical assistance."
                },
                {
                    title: "PLAN TERMS",
                    text: "Exact coverage depends on the maintenance agreement."
                }
            ]
        },
        {
            title: "FREE CONSULTATION",
            summary:
                "An initial consultation can be used to discuss project goals, requirements and possible solutions.",
            details: [
                {
                    title: "PROJECT IDEA",
                    text: "Explain the main problem or product idea."
                },
                {
                    title: "REQUIRED FEATURES",
                    text: "Identify the important features."
                },
                {
                    title: "BUDGET",
                    text: "Share an optional expected budget range."
                },
                {
                    title: "NEXT STEPS",
                    text: "Receive guidance on planning and quotation preparation."
                }
            ]
        },
        {
            title: "REQUEST A QUOTE",
            summary:
                "Request a custom quotation by providing clear information about your project.",
            details: [
                {
                    title: "PROJECT TYPE",
                    text: "Website, AI product, application, software or another solution."
                },
                {
                    title: "DESCRIPTION",
                    text: "Explain the required functions and expected outcome."
                },
                {
                    title: "DEADLINE",
                    text: "Provide the preferred completion date."
                },
                {
                    title: "CONTACT",
                    text: "Send the information through email or WhatsApp."
                }
            ],
            action: "contact"
        },
        {
            title: "PAYMENT METHODS",
            summary:
                "Available payment methods are confirmed during the quotation and project agreement process.",
            details: [
                {
                    title: "BANK TRANSFER",
                    text: "May be available for approved projects."
                },
                {
                    title: "ONLINE PAYMENT",
                    text: "Availability depends on the agreed payment option."
                },
                {
                    title: "PROJECT STAGES",
                    text: "Payments may be divided according to agreed project milestones."
                },
                {
                    title: "CONFIRMATION",
                    text: "Always confirm payment instructions directly with MI CORTEX X."
                }
            ]
        },
        {
            title: "PRICING FAQ",
            summary:
                "Common information about quotations, project prices and additional operating costs.",
            details: [
                {
                    title: "WHY NO FIXED PRICE?",
                    text: "Software projects have different features, timelines and complexity."
                },
                {
                    title: "IS CONSULTATION FREE?",
                    text: "An initial project discussion may be provided without charge."
                },
                {
                    title: "ARE API COSTS INCLUDED?",
                    text: "External services may require separate recurring payments."
                },
                {
                    title: "CAN PRICES CHANGE?",
                    text: "Changes in approved requirements may affect the final project cost."
                }
            ]
        }
    ],

    contact: [
        {
            title: "CONTACT INFORMATION",
            summary:
                "Use the official MI CORTEX X communication methods for projects, quotations, support and business inquiries.",
            details: [
                {
                    title: "EMAIL",
                    text: "micortexx@gmail.com"
                },
                {
                    title: "PHONE",
                    text: "+94 75 639 0621"
                },
                {
                    title: "WHATSAPP",
                    text: "+94 75 639 0621"
                },
                {
                    title: "TELEGRAM",
                    text: "+94 75 639 0621"
                }
            ]
        },
        {
            title: "BUSINESS INQUIRIES",
            summary:
                "Contact MI CORTEX X to discuss software projects, technology products, partnerships and business opportunities.",
            details: [
                {
                    title: "CUSTOM PROJECTS",
                    text: "Discuss websites, applications, AI products and software."
                },
                {
                    title: "PARTNERSHIPS",
                    text: "Send relevant partnership information through official email."
                },
                {
                    title: "PRODUCT QUESTIONS",
                    text: "Request verified information about available products."
                },
                {
                    title: "QUOTATIONS",
                    text: "Provide complete project requirements for an estimate."
                }
            ]
        },
        {
            title: "CUSTOMER SUPPORT",
            summary:
                "Customers can contact MI CORTEX X for technical questions and support related to agreed products or services.",
            details: [
                {
                    title: "SUPPORT CHANNEL",
                    text: "Email or WhatsApp."
                },
                {
                    title: "RESPONSE TIME",
                    text: "Usually within 24 hours."
                },
                {
                    title: "REQUIRED DETAILS",
                    text: "Provide the product, issue description and relevant screenshots."
                },
                {
                    title: "SUPPORT COVERAGE",
                    text: "Coverage depends on the project or maintenance agreement."
                }
            ]
        },
        {
            title: "SEND AN INQUIRY",
            summary:
                "Use the contact form above or send your project information directly by email.",
            details: [
                {
                    title: "NAME",
                    text: "Provide your full name."
                },
                {
                    title: "PROJECT TYPE",
                    text: "Select the required service or product."
                },
                {
                    title: "DESCRIPTION",
                    text: "Explain the important project requirements."
                },
                {
                    title: "CONTACT DETAILS",
                    text: "Provide a valid email address for the response."
                }
            ]
        }
    ]
};

const pageSections = Array.from(
    document.querySelectorAll("[data-page-section]")
);

const pageButtons = Array.from(
    document.querySelectorAll("[data-page]")
);

const pageLinks = Array.from(
    document.querySelectorAll("[data-page-link]")
);

const navigationButtons = Array.from(
    document.querySelectorAll(".nav-button")
);

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mainNavigation = document.getElementById("mainNavigation");

function normalizePageName(pageName) {
    const availablePages = [
        "home",
        "about",
        "products",
        "services",
        "pricing",
        "contact"
    ];

    return availablePages.includes(pageName) ? pageName : "home";
}

function closeMobileMenu() {
    if (!mainNavigation || !mobileMenuButton) {
        return;
    }

    mainNavigation.classList.remove("open");
    mobileMenuButton.setAttribute("aria-expanded", "false");
}

function openPage(pageName, updateHash = true) {
    const selectedPage = normalizePageName(pageName);

    pageSections.forEach((section) => {
        section.classList.toggle(
            "active",
            section.dataset.pageSection === selectedPage
        );
    });

    navigationButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.page === selectedPage
        );
    });

    closeMobileMenu();

    if (updateHash) {
        history.replaceState(null, "", `#${selectedPage}`);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    requestAnimationFrame(observeRevealElements);
}

function createTopicButton(categoryName, topic, index) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "topic-button";
    button.textContent = topic.title;
    button.dataset.category = categoryName;
    button.dataset.topicIndex = String(index);

    button.addEventListener("click", () => {
        selectTopic(categoryName, index);
    });

    return button;
}

function createTopicArticle(categoryName, topic, index) {
    const article = document.createElement("article");
    article.className = "topic-article";

    const number = document.createElement("span");
    number.className = "topic-article-number";
    number.textContent = `${categoryName.toUpperCase()} / ${String(index + 1).padStart(2, "0")}`;

    const title = document.createElement("h2");
    title.textContent = topic.title;

    const summary = document.createElement("p");
    summary.className = "topic-summary";
    summary.textContent = topic.summary;

    const detailGrid = document.createElement("div");
    detailGrid.className = "topic-detail-grid";

    topic.details.forEach((detail) => {
        const card = document.createElement("article");
        card.className = "topic-detail-card";

        const detailTitle = document.createElement("h3");
        detailTitle.textContent = detail.title;

        const detailText = document.createElement("p");
        detailText.textContent = detail.text;

        card.append(detailTitle, detailText);
        detailGrid.appendChild(card);
    });

    article.append(number, title, summary, detailGrid);

    if (topic.action) {
        const actionButton = document.createElement("button");

        actionButton.type = "button";
        actionButton.className = "topic-action";
        actionButton.textContent = "CONTACT MI CORTEX X";
        actionButton.addEventListener("click", () => {
            openPage(topic.action);
        });

        article.appendChild(actionButton);
    }

    return article;
}

function selectTopic(categoryName, index) {
    const category = websiteData[categoryName];
    const topic = category?.[index];

    if (!topic) {
        return;
    }

    const navigation = document.querySelector(
        `[data-topic-navigation="${categoryName}"]`
    );

    const display = document.querySelector(
        `[data-topic-display="${categoryName}"]`
    );

    if (!navigation || !display) {
        return;
    }

    navigation.querySelectorAll(".topic-button").forEach((button) => {
        button.classList.toggle(
            "active",
            Number(button.dataset.topicIndex) === index
        );
    });

    display.replaceChildren(
        createTopicArticle(categoryName, topic, index)
    );

    if (window.innerWidth <= 850) {
        display.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function initializeTopicCategories() {
    Object.entries(websiteData).forEach(([categoryName, topics]) => {
        const navigation = document.querySelector(
            `[data-topic-navigation="${categoryName}"]`
        );

        if (!navigation) {
            return;
        }

        const fragment = document.createDocumentFragment();

        topics.forEach((topic, index) => {
            fragment.appendChild(
                createTopicButton(categoryName, topic, index)
            );
        });

        navigation.replaceChildren(fragment);
        selectTopic(categoryName, 0);
    });
}

function initializePageButtons() {
    [...pageButtons, ...pageLinks].forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const selectedPage =
                button.dataset.page ||
                button.dataset.pageLink ||
                "home";

            openPage(selectedPage);
        });
    });
}

function initializeMobileMenu() {
    if (!mobileMenuButton || !mainNavigation) {
        return;
    }

    mobileMenuButton.addEventListener("click", () => {
        const isOpen = mainNavigation.classList.toggle("open");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
}

function initializeContactForm() {
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (!contactForm || !formStatus) {
        return;
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const projectType = String(
            formData.get("projectType") || ""
        ).trim();

        const message = String(
            formData.get("message") || ""
        ).trim();

        if (!name || !email || !projectType || !message) {
            formStatus.textContent =
                "Please complete every required field.";

            return;
        }

        const subject = encodeURIComponent(
            `MI CORTEX X Project Inquiry - ${projectType}`
        );

        const body = encodeURIComponent(
            [
                "MI CORTEX X PROJECT INQUIRY",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                `Project Type: ${projectType}`,
                "",
                "Project Description:",
                message
            ].join("\n")
        );

        formStatus.textContent =
            "Your email application is opening.";

        window.location.href =
            `mailto:micortexx@gmail.com?subject=${subject}&body=${body}`;
    });
}

let revealObserver = null;

function observeRevealElements() {
    const revealElements = document.querySelectorAll(
        ".page-section.active .reveal:not(.visible)"
    );

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

        return;
    }

    if (!revealObserver) {
        revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );
    }

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}

function initializeWebsite() {
    initializeTopicCategories();
    initializePageButtons();
    initializeMobileMenu();
    initializeContactForm();

    const initialPage = normalizePageName(
        window.location.hash.replace("#", "")
    );

    openPage(initialPage, false);
    observeRevealElements();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);