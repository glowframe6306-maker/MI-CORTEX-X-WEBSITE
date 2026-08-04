const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

const COMPANY_KNOWLEDGE = `
COMPANY IDENTITY
- Official company name: MI CORTEX X INC.
- Brand name: MI CORTEX X.
- Company type: Sri Lankan artificial intelligence and software technology company.
- Founded: 2026.
- Operations: Online, based in Colombo, Sri Lanka.
- There is currently no public walk-in office.
- Website: https://mi-cortex-x.vercel.app

EXECUTIVE BOARD
- Owner: M.I. MUHAMMADH.
- Chairman: M.I. MUHAMMADH.
- Chief Executive Officer (CEO): M.I. MUHAMMADH.
- Founder: M.I. MUHAMMADH.
- Full name used in biographies: Mohomed Imran Muhammadh.

CONTACT
- Primary email: micortexx@gmail.com
- Support email: support.micortexx@gmail.com
- Sales email: sales.cortexx@gmail.com
- WhatsApp: +94 75 639 0621
- Telegram: @MICORTEXX
- Normal response time: within 24 hours.
- Business hours: Monday to Saturday, 24 hours. Sunday closed.
- Phone calls are not currently available.

MISSION AND VISION
- Mission: To empower businesses through innovative, reliable and intelligent technology solutions.
- Vision: To become a globally recognized AI and software technology company.

PRODUCTS
1. CORTEX CORE AI
   - Status: Development.
   - Business integration starting price: LKR 45,000.
   - Free plan: intended to be available when released.
   - Description: AI platform for business automation, intelligent customer support, content generation and system integration.
2. MI Business Management Suite
   - Status: Upcoming.
   - Starting price: LKR 80,000.
   - Description: CRM, HRM, inventory, POS, ERP and analytics platform.

SERVICES AND STARTING PRICES
- AI Development: LKR 60,000; delivery 7–30 days; support 30 days.
- AI Chatbot Development: LKR 45,000; delivery 5–14 days; support 30 days.
- AI Automation: LKR 65,000; delivery 7–21 days; support 30 days.
- Website Development: LKR 15,000; delivery 3–14 days; support 30 days.
- Web Application Development: LKR 50,000; delivery 7–30 days; support 30 days.
- Mobile App Development: LKR 85,000; delivery 14–45 days; support 30 days.
- Desktop Software Development: LKR 70,000; delivery 10–30 days; support 30 days.
- Enterprise Software: LKR 250,000; delivery 30–90 days; support 90 days.
- API Development: LKR 30,000; delivery 3–10 days; support 30 days.
- API Integration: LKR 20,000; delivery 2–7 days; support 30 days.
- Cloud Solutions: LKR 30,000; delivery 2–10 days; support 30 days.
- UI/UX Design: LKR 15,000; delivery 3–10 days; support 14 days.
- Software Maintenance: LKR 7,500 per month.
- Technical Consulting: LKR 5,000.
- Custom Software Development: LKR 100,000; delivery 14–90 days; support 60 days.
- All listed prices are starting estimates. Final prices depend on scope, features, integrations, hosting, security and support.

PAYMENTS AND POLICIES
- Normal project advance: 30% after approval.
- Remaining payment: before final delivery.
- Online card payment is not activated yet.
- Full refund may apply before project commencement.
- Completed work and delivered milestones are non-refundable after development begins.
- Do not claim a payment is successful unless a verified payment backend confirms it.

APPOINTMENTS
- Users may request appointments with Owner, Chairman, CEO or Founder.
- Appointment requests must be submitted through the website workflow.
- Do not claim an appointment is confirmed until the company confirms it.

TRUTH RULES
- Never invent company facts, staff, awards, customers, offices, registrations, partnerships, discounts, availability, payment status, order status or legal claims.
- When the knowledge above does not contain the answer, clearly say the information is not currently available and offer support contact.
`;

const ACTIONS = {
  products: { label: "VIEW PRODUCTS", action: "route", value: "#/products" },
  services: { label: "VIEW SERVICES", action: "route", value: "#/services" },
  pricing: { label: "VIEW PRICING", action: "route", value: "#/pricing" },
  about: { label: "ABOUT COMPANY", action: "route", value: "#/about" },
  executive: { label: "EXECUTIVE BOARD", action: "route", value: "#/about/executive-board" },
  contact: { label: "CONTACT PAGE", action: "route", value: "#/contact" },
  support: { label: "INFORMATION CENTER", action: "hub", value: "support" },
  quote: { label: "REQUEST QUOTE", action: "quote", value: "" },
  recommend: { label: "GET RECOMMENDATION", action: "recommend", value: "" },
  appointment: { label: "BOOK APPOINTMENT", action: "appointment", value: "" },
  whatsapp: {
    label: "WHATSAPP",
    action: "url",
    value: "https://wa.me/94756390621?text=Hello%20%F0%9F%91%8B"
  },
  telegram: {
    label: "TELEGRAM",
    action: "url",
    value: "https://t.me/MICORTEXX"
  },
  email: {
    label: "EMAIL SUPPORT",
    action: "url",
    value: "mailto:support.micortexx@gmail.com"
  }
};

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function sanitizeHistory(value) {
  if (!Array.isArray(value)) return [];
  return value
    .slice(-12)
    .filter(item =>
      item &&
      (item.role === "user" || item.role === "assistant") &&
      typeof item.content === "string"
    )
    .map(item => ({
      role: item.role,
      content: item.content.slice(0, 1800)
    }));
}

function sanitizeActions(keys) {
  if (!Array.isArray(keys)) return [];
  return keys
    .slice(0, 5)
    .map(key => ACTIONS[key])
    .filter(Boolean);
}

function extractJson(text) {
  try {
    return JSON.parse(text);
  }
  catch {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(text.slice(start, end + 1));
    }
    throw new Error("The model did not return valid JSON.");
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return sendJson(res, 503, {
      error: "GROQ_API_KEY is not configured in Vercel Environment Variables."
    });
  }

  const body = typeof req.body === "string"
    ? (() => {
        try { return JSON.parse(req.body); }
        catch { return {}; }
      })()
    : (req.body || {});

  const message = typeof body.message === "string"
    ? body.message.trim()
    : "";

  if (!message) {
    return sendJson(res, 400, { error: "A message is required." });
  }

  if (message.length > 1800) {
    return sendJson(res, 400, { error: "The message is too long." });
  }

  const history = sanitizeHistory(body.history);

  const systemPrompt = `
You are CORTEX CORE AI, the official company-only assistant of MI CORTEX X.

Your job is to understand the user's real meaning even when they use:
- Sinhala
- English
- Singlish
- mixed Sinhala and English
- missing punctuation
- informal grammar
- small spelling mistakes
- short follow-up questions and pronouns

Think carefully before answering. Use the conversation history to understand follow-up questions.

STRICT SCOPE:
- Answer only questions related to MI CORTEX X, its verified company information, executives, products, services, prices, support, contact, payments, policies, quotations and appointments.
- For unrelated questions, politely say you can only help with MI CORTEX X.
- Use only the verified knowledge below.
- Never guess or invent.
- If the question is unclear, ask one precise clarification question instead of giving an unrelated answer.
- Reply in the user's language style. For Singlish, a natural Sinhala/Singlish mixed answer is acceptable.
- Keep the answer professional, direct and useful.
- Prices must be described as starting prices unless explicitly fixed.
- Never claim an order, payment, support ticket or appointment is confirmed without a connected verified system.

Return ONLY a JSON object:
{
  "answer": "accurate answer",
  "intent": "short_intent_name",
  "actionKeys": ["products", "services"],
  "suggestions": ["short follow-up question", "another follow-up question"]
}

Allowed actionKeys:
products, services, pricing, about, executive, contact, support, quote, recommend, appointment, whatsapp, telegram, email

VERIFIED COMPANY KNOWLEDGE:
${COMPANY_KNOWLEDGE}
`;

  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  try {
    const upstream = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        temperature: 0.1,
        max_completion_tokens: 700,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          ...history,
          { role: "user", content: message }
        ]
      })
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      const detail =
        data?.error?.message ||
        data?.message ||
        `Groq request failed with status ${upstream.status}.`;

      return sendJson(res, 502, { error: detail });
    }

    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim()) {
      return sendJson(res, 502, { error: "The AI provider returned an empty answer." });
    }

    const parsed = extractJson(content);
    const answer = typeof parsed.answer === "string"
      ? parsed.answer.trim()
      : "";

    if (!answer) {
      return sendJson(res, 502, { error: "The AI provider returned an invalid answer." });
    }

    return sendJson(res, 200, {
      answer: answer.slice(0, 5000),
      intent: typeof parsed.intent === "string" ? parsed.intent.slice(0, 80) : "company_question",
      actions: sanitizeActions(parsed.actionKeys),
      suggestions: Array.isArray(parsed.suggestions)
        ? parsed.suggestions.slice(0, 5).map(value => String(value).slice(0, 120))
        : []
    });
  }
  catch (error) {
    console.error("company-ai error:", error);
    return sendJson(res, 500, {
      error: "The secure company AI service encountered an error."
    });
  }
}
