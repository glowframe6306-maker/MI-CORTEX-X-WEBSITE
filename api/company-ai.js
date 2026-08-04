const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

const COMPANY_KNOWLEDGE = `
OFFICIAL IDENTITY
- Official company name: MI CORTEX X INC.
- Brand: MI CORTEX X.
- Type: Sri Lankan artificial intelligence and software technology company.
- Founded: 2026.
- Operations: Online, based in Colombo, Sri Lanka.
- No public walk-in office is currently available.
- Website: https://mi-cortex-x.vercel.app

EXECUTIVE BOARD
- Owner: M.I. MUHAMMADH.
- Chairman: M.I. MUHAMMADH.
- Chief Executive Officer (CEO): M.I. MUHAMMADH.
- Founder: M.I. MUHAMMADH.
- Full biography name: Mohomed Imran Muhammadh.

CONTACT
- Primary email: micortexx@gmail.com
- Support email: support.micortexx@gmail.com
- Sales email: sales.cortexx@gmail.com
- WhatsApp: +94 75 639 0621
- Telegram: @MICORTEXX
- Normal response time: within 24 hours.
- Business hours: Monday to Saturday, 24 hours. Sunday closed.
- Phone calls are not currently available.

MISSION
To empower businesses through innovative, reliable and intelligent technology solutions.

VISION
To become a globally recognized AI and software technology company.

PRODUCT DATABASE
1. CORTEX CORE AI
   Status: Development.
   Starting price for business integration: LKR 45,000.
   Free plan: intended when released.
   Purpose: business automation, intelligent customer support, content generation and system integration.
2. MI Business Management Suite
   Status: Upcoming.
   Starting price: LKR 80,000.
   Purpose: CRM, HRM, inventory, POS, ERP and analytics.

SERVICE AND PRICING DATABASE
- AI Development: starting LKR 60,000; delivery 7–30 days; support 30 days.
- AI Chatbot Development: starting LKR 45,000; delivery 5–14 days; support 30 days.
- AI Automation: starting LKR 65,000; delivery 7–21 days; support 30 days.
- Website Development: starting LKR 15,000; delivery 3–14 days; support 30 days.
- Web Application Development: starting LKR 50,000; delivery 7–30 days; support 30 days.
- Mobile App Development: starting LKR 85,000; delivery 14–45 days; support 30 days.
- Desktop Software Development: starting LKR 70,000; delivery 10–30 days; support 30 days.
- Enterprise Software: starting LKR 250,000; delivery 30–90 days; support 90 days.
- API Development: starting LKR 30,000; delivery 3–10 days; support 30 days.
- API Integration: starting LKR 20,000; delivery 2–7 days; support 30 days.
- Cloud Solutions: starting LKR 30,000; delivery 2–10 days; support 30 days.
- UI/UX Design: starting LKR 15,000; delivery 3–10 days; support 14 days.
- Software Maintenance: starting LKR 7,500 per month.
- Technical Consulting: starting LKR 5,000.
- Custom Software Development: starting LKR 100,000; delivery 14–90 days; support 60 days.
- Every listed amount is a starting estimate, not a guaranteed final price.

PAYMENT AND REFUND
- Normal advance: 30% after project approval.
- Remaining amount: before final delivery.
- Online card payment is not activated yet.
- Full refund may apply before project commencement.
- Completed work and delivered milestones are non-refundable after development begins.

APPOINTMENTS
- Appointment requests are available for Owner, Chairman, CEO and Founder.
- Never claim an appointment is confirmed until the company confirms it.

TRUTH RULES
- Never invent company facts, employees, customers, registrations, awards, offices, partnerships, discounts, live availability, payment status, order status, ticket status or legal claims.
- If verified knowledge does not contain an answer, say it is not currently available.
- Analyze files and images only for MI CORTEX X business purposes.
`;

const ACTIONS = {
  products: { label: "VIEW PRODUCTS", action: "route", value: "#/products" },
  services: { label: "VIEW SERVICES", action: "route", value: "#/services" },
  pricing: { label: "VIEW PRICING", action: "route", value: "#/pricing" },
  executive: { label: "EXECUTIVE BOARD", action: "route", value: "#/about/executive-board" },
  support: { label: "INFORMATION CENTER", action: "hub", value: "support" },
  quote: { label: "REQUEST QUOTE", action: "quote", value: "" },
  recommend: { label: "GET RECOMMENDATION", action: "recommend", value: "" },
  whatsapp: { label: "WHATSAPP", action: "url", value: "https://wa.me/94756390621?text=Hello%20%F0%9F%91%8B" },
  telegram: { label: "TELEGRAM", action: "url", value: "https://t.me/MICORTEXX" },
  email: { label: "EMAIL SUPPORT", action: "url", value: "mailto:support.micortexx@gmail.com" }
};

const ROLE_ACTIONS = {
  ceo: { label: "BOOK CEO APPOINTMENT", action: "appointment", value: "Chief Executive Officer (CEO)" },
  owner: { label: "BOOK OWNER APPOINTMENT", action: "appointment", value: "Owner" },
  chairman: { label: "BOOK CHAIRMAN APPOINTMENT", action: "appointment", value: "Chairman" },
  founder: { label: "BOOK FOUNDER APPOINTMENT", action: "appointment", value: "Founder" }
};

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function sanitizeHistory(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(-30)
    .filter(item => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
    .map(item => ({ role: item.role, content: item.content.slice(0, 2800) }));
}

function sanitizeAttachments(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 4)
    .filter(item => item && typeof item.name === "string" && typeof item.content === "string" && (item.category === "image" || item.category === "document"))
    .map(item => ({
      name: item.name.slice(0, 120),
      type: String(item.type || "").slice(0, 80),
      category: item.category,
      content: item.category === "image" ? item.content.slice(0, 6_000_000) : item.content.slice(0, 50_000)
    }));
}

function normalize(value) {
  return String(value || "").toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ").trim();
}

function inferIntent(message) {
  const q = normalize(message);

  if (/\b(appointment|meeting|book|appoinment|apointment)\b/.test(q)) {
    if (/\b(ceo|chief executive)\b/.test(q)) return { intent: "ceo_appointment", role: "ceo" };
    if (/\bowner\b/.test(q)) return { intent: "owner_appointment", role: "owner" };
    if (/\b(chairman|chairmen)\b/.test(q)) return { intent: "chairman_appointment", role: "chairman" };
    if (/\bfounder\b/.test(q)) return { intent: "founder_appointment", role: "founder" };
    return { intent: "appointment", role: "" };
  }

  if (/\b(price|cost|mila|keeyada|kiyada|quotation|quote)\b/.test(q)) return { intent: "pricing", role: "" };
  if (/\b(product|products)\b/.test(q)) return { intent: "products", role: "" };
  if (/\b(service|services)\b/.test(q)) return { intent: "services", role: "" };
  if (/\b(contact|whatsapp|telegram|email)\b/.test(q)) return { intent: "contact", role: "" };
  if (/\b(support|help|issue|problem|bug)\b/.test(q)) return { intent: "support", role: "" };
  if (/\b(recommend|suggest|suitable|best)\b/.test(q)) return { intent: "recommendation", role: "" };
  return { intent: "company_question", role: "" };
}

function actionsForIntent(inferred) {
  if (inferred.role && ROLE_ACTIONS[inferred.role]) {
    return [ROLE_ACTIONS[inferred.role], ACTIONS.executive];
  }

  switch (inferred.intent) {
    case "appointment":
      return [{ label: "SELECT EXECUTIVE & BOOK APPOINTMENT", action: "appointment", value: "" }];
    case "pricing":
      return [ACTIONS.pricing, ACTIONS.quote];
    case "products":
      return [ACTIONS.products];
    case "services":
      return [ACTIONS.services, ACTIONS.recommend];
    case "contact":
      return [ACTIONS.whatsapp, ACTIONS.telegram, ACTIONS.email];
    case "support":
      return [ACTIONS.support, ACTIONS.whatsapp, ACTIONS.email];
    case "recommendation":
      return [ACTIONS.recommend, ACTIONS.services];
    default:
      return [ACTIONS.products, ACTIONS.services, ACTIONS.support];
  }
}

function suggestionsForIntent(inferred) {
  if (inferred.role) {
    return ["Appointment date rules monawada?", "Executive Board eka pennanna"];
  }
  if (inferred.intent === "pricing") {
    return ["Website ekak hadanna keeyada?", "AI chatbot eke mila keeyada?", "Custom quotation ekak one"];
  }
  return ["Products monawada?", "Services monawada?", "Support contact eka denna"];
}

function buildUserContent(message, attachments) {
  const images = attachments.filter(item => item.category === "image");
  const documents = attachments.filter(item => item.category === "document");

  const documentText = documents.length
    ? "\n\nATTACHED DOCUMENTS:\n" + documents.map(item => `FILE: ${item.name}\n${item.content}`).join("\n\n---\n\n")
    : "";

  const text = message + documentText;

  if (!images.length) return text;

  return [
    { type: "text", text },
    ...images.map(item => ({
      type: "image_url",
      image_url: { url: item.content }
    }))
  ];
}

function writeEvent(res, payload) {
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return sendJson(res, 503, { error: "GROQ_API_KEY is not configured in Vercel Environment Variables." });
  }

  const body = typeof req.body === "string"
    ? (() => { try { return JSON.parse(req.body); } catch { return {}; } })()
    : (req.body || {});

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) return sendJson(res, 400, { error: "A message is required." });
  if (message.length > 2400) return sendJson(res, 400, { error: "The message is too long." });

  const history = sanitizeHistory(body.history);
  const attachments = sanitizeAttachments(body.attachments);
  const conversationSummary = typeof body.conversationSummary === "string" ? body.conversationSummary.slice(0, 6000) : "";
  const inferred = inferIntent(message);
  const hasImages = attachments.some(item => item.category === "image");

  const systemPrompt = `
You are CORTEX CORE AI, the official customer and business assistant of MI CORTEX X.

PRIMARY OBJECTIVE
Provide accurate, polished, professional, and customer-friendly answers about MI CORTEX X. Every response must help the customer understand the answer and identify the most appropriate next step.

LANGUAGE AND UNDERSTANDING
- Understand English, Sinhala, Singlish, and mixed-language questions.
- Correctly infer meaning despite minor spelling mistakes, informal grammar, short messages, and missing punctuation.
- Use the recent conversation and saved summary to understand follow-up questions.
- Reply in the language and style used by the customer, while maintaining a professional business tone.

RESPONSE STANDARD
- Begin with the direct answer. Do not start with unnecessary disclaimers.
- Use short paragraphs and clear bullet points when they improve readability.
- Include only relevant details.
- Explain prices as starting prices and mention that the final quotation depends on requirements.
- For appointment requests, identify the selected executive clearly and explain that the request requires official confirmation.
- When useful, provide a clear next step such as viewing a service, requesting a quotation, contacting support, or booking an appointment.
- Do not use exaggerated claims, casual slang, excessive emojis, or repetitive wording.
- Do not expose internal technical information, API errors, model names, environment variables, fallback systems, or implementation details to customers.

STRICT COMPANY SCOPE
- Answer only about MI CORTEX X, its verified executives, company information, products, services, pricing, contact channels, support, payments, policies, quotations, appointments, and customer business requirements.
- Politely decline unrelated general questions and redirect the customer to MI CORTEX X topics.
- Analyze uploaded files and images only when relevant to MI CORTEX X services or the customer’s business request.

ACCURACY AND TRUST
- Use only the verified company knowledge below.
- Never invent facts, employees, customers, awards, offices, registrations, partnerships, discounts, availability, order status, payment status, support-ticket status, or appointment confirmation.
- When verified information is unavailable, state professionally that the information is not currently available and offer the official Information Center.
- Never claim that a payment, order, project, support ticket, quotation, or appointment has been confirmed without a connected verified system.

RESPONSE EXAMPLES

Customer: "Who is the CEO?"
Professional answer:
"The Chief Executive Officer (CEO) of MI CORTEX X INC. is M.I. MUHAMMADH. The CEO is responsible for the company’s executive leadership, strategic direction, and overall operations."

Customer: "I need an appointment with the CEO."
Professional answer:
"You may submit a formal appointment request for the Chief Executive Officer (CEO). Please complete the required details accurately. The request remains pending until it is officially confirmed by MI CORTEX X."

Customer: "How much is an AI chatbot?"
Professional answer:
"AI Chatbot Development starts from LKR 45,000. The final quotation depends on the required features, integrations, languages, data sources, and support requirements. The usual estimated delivery period is 5–14 days."

Customer: "Hi"
Professional answer:
"Hello. Welcome to CORTEX CORE AI, the official company assistant of MI CORTEX X. I can assist you with company information, products, services, pricing, quotations, support, and appointment requests."

VERIFIED COMPANY KNOWLEDGE
${COMPANY_KNOWLEDGE}

CURRENT CONVERSATION SUMMARY
${conversationSummary || "No saved summary is available."}
`;

  const model = hasImages
    ? (process.env.GROQ_VISION_MODEL || "meta-llama/llama-4-scout-17b-16e-instruct")
    : (process.env.GROQ_MODEL || "llama-3.3-70b-versatile");

  try {
    const upstream = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        temperature: 0.05,
        max_completion_tokens: 1100,
        stream: true,
        messages: [
          { role: "system", content: systemPrompt },
          ...history,
          { role: "user", content: buildUserContent(message, attachments) }
        ]
      })
    });

    if (!upstream.ok) {
      const data = await upstream.json().catch(() => ({}));
      const detail = data?.error?.message || data?.message || `Groq request failed with status ${upstream.status}.`;
      return sendJson(res, 502, { error: detail });
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-store");
    res.setHeader("Connection", "keep-alive");

    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let answer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data:")) continue;

        const raw = trimmed.slice(5).trim();
        if (!raw || raw === "[DONE]") continue;

        try {
          const event = JSON.parse(raw);
          const delta = event?.choices?.[0]?.delta?.content;
          if (typeof delta === "string" && delta) {
            answer += delta;
            writeEvent(res, { type: "delta", text: delta });
          }
        } catch {}
      }
    }

    const summary = [
      conversationSummary,
      `User asked: ${message.slice(0, 400)}`,
      `Assistant answered: ${answer.slice(0, 700)}`
    ].filter(Boolean).join("\n").slice(-6000);

    writeEvent(res, {
      type: "meta",
      intent: inferred.intent,
      actions: actionsForIntent(inferred),
      suggestions: suggestionsForIntent(inferred),
      summary
    });

    res.end();
  } catch (error) {
    console.error("company-ai error:", error);

    if (!res.headersSent) {
      return sendJson(res, 500, { error: "The secure company AI service encountered an error." });
    }

    writeEvent(res, { type: "error", error: "The secure company AI stream encountered an error." });
    res.end();
  }
};
