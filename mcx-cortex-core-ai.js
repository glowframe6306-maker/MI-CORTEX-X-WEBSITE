(() => {
  'use strict';
  if (window.__MCX_AI__) return;
  window.__MCX_AI__ = true;

  const kb = {
    company: 'MI CORTEX X is a Sri Lankan AI and software technology company founded in 2026. It develops intelligent digital products and custom technology solutions for businesses, organizations and individuals worldwide.',
    owner: 'The Owner of MI CORTEX X INC. is M.I. Muhammadh.',
    chairman: 'The Chairman of MI CORTEX X INC. is M.I. Muhammadh.',
    ceo: 'The Chief Executive Officer (CEO) of MI CORTEX X INC. is M.I. Muhammadh.',
    founder: 'The Founder of MI CORTEX X INC. is M.I. Muhammadh.',
    contact: 'Email: micortexx@gmail.com\nSupport: support.micortexx@gmail.com\nSales: sales.cortexx@gmail.com\nWhatsApp: +94 75 639 0621\nTelegram: @MICORTEXX',
    hours: 'Business hours: Monday to Saturday — 24 hours. Sunday — Closed.',
    location: 'MI CORTEX X operates online from Colombo, Sri Lanka. There is currently no public walk-in office.',
    process: 'Project process:\n1. Free consultation\n2. Requirement analysis and quotation\n3. Approval and 30% advance\n4. Development and progress updates\n5. Testing, remaining payment, final delivery and support.',
    payment: 'Online payments are not activated yet. A 30% advance is normally required after project approval. The remaining payment is due before final delivery.',
    products: 'Current products:\n• CORTEX CORE AI — Development — Starting from LKR 45,000 for business integration\n• MI Business Management Suite — Upcoming — Starting from LKR 80,000',
    services: 'Main services include AI Development, AI Chatbot Development, AI Automation, Website Development, Web Application Development, Mobile App Development, Desktop Software Development, Enterprise Software, API Development, API Integration, Cloud Solutions, UI/UX Design, Software Maintenance, Technical Consulting and Custom Software Development.'
  };

  const services = [
    ['ai development','LKR 60,000','7–30 days'],
    ['ai chatbot development','LKR 45,000','5–14 days'],
    ['ai automation','LKR 65,000','7–21 days'],
    ['website development','LKR 15,000','3–14 days'],
    ['web application development','LKR 50,000','7–30 days'],
    ['mobile app development','LKR 85,000','14–45 days'],
    ['desktop software development','LKR 70,000','10–30 days'],
    ['enterprise software','LKR 250,000','30–90 days'],
    ['api development','LKR 30,000','3–10 days'],
    ['api integration','LKR 20,000','2–7 days'],
    ['cloud solutions','LKR 30,000','2–10 days'],
    ['ui ux design','LKR 15,000','3–10 days'],
    ['software maintenance','LKR 7,500 per month','Ongoing'],
    ['technical consulting','LKR 5,000','Same day when available'],
    ['custom software development','LKR 100,000','14–90 days']
  ];

  const normalize = s => String(s || '').toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();

  function answer(text) {
    const q = normalize(text);
    if (!q) return 'Please type your question.';
    if (/^(hi|hello|hey|hii|hiii|ayubowan|vanakkam)\b/.test(q)) return 'Hello 👋 I’m CORTEX CORE AI. Ask me about MI CORTEX X, products, services, prices, support, contact details or appointments.';
    if (q.includes('who are you') || q.includes('your name')) return 'I’m CORTEX CORE AI, the automated company assistant of MI CORTEX X.';
    if (q.includes('owner')) return kb.owner;
    if (q.includes('chairman') || q.includes('chairmen')) return kb.chairman;
    if (q.includes('chief executive') || q.includes('ceo')) return kb.ceo;
    if (q.includes('founder')) return kb.founder;
    if (q.includes('contact') || q.includes('email') || q.includes('whatsapp') || q.includes('telegram')) return kb.contact;
    if (q.includes('hour') || q.includes('open') || q.includes('sunday')) return kb.hours;
    if (q.includes('location') || q.includes('office') || q.includes('address')) return kb.location;
    if (q.includes('payment') || q.includes('advance') || q.includes('refund')) return kb.payment;
    if (q.includes('process') || q.includes('project step')) return kb.process;
    if (q.includes('product')) return kb.products;
    if (q.includes('service')) return kb.services;
    if (q.includes('company') || q.includes('about')) return kb.company;

    const hit = services.find(([name]) => {
      const words = name.split(' ').filter(w => w.length > 2);
      return words.filter(w => q.includes(w)).length >= Math.min(2, words.length);
    });
    if (hit) return `${hit[0].replace(/\b\w/g,c=>c.toUpperCase())}\nStarting price: ${hit[1]}\nEstimated delivery: ${hit[2]}\nFinal pricing depends on scope, features and integrations.`;

    if (q.includes('price') || q.includes('cost') || q.includes('quotation')) return 'Prices are starting estimates and may change according to project scope, features, integrations, hosting and support. A custom quotation and free consultation are available.';
    if (q.includes('appointment') || q.includes('executive')) return 'Use the Executive Board option in the MI CORTEX X contact hub to request an appointment with the Owner, Chairman, CEO or Founder.';

    return 'I do not have a verified answer for that yet. Please contact support.micortexx@gmail.com or WhatsApp +94 75 639 0621.';
  }

  const root = document.createElement('div');
  root.id = 'mcx-ai-chat-root';
  root.innerHTML = `
    <div class="mcx-ai-overlay" hidden>
      <section class="mcx-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="mcx-ai-title">
        <header class="mcx-ai-header"><div><strong id="mcx-ai-title">CORTEX CORE AI</strong><span>Automated company assistant</span></div><button class="mcx-ai-close" type="button" aria-label="Close">&#10005;</button></header>
        <div class="mcx-ai-messages" aria-live="polite"></div>
        <form class="mcx-ai-composer"><textarea rows="1" maxlength="1200" placeholder="Ask about MI CORTEX X..." required></textarea><button type="submit" aria-label="Send">&#10148;</button></form>
      </section>
    </div>`;
  document.body.appendChild(root);

  const overlay = root.querySelector('.mcx-ai-overlay');
  const messages = root.querySelector('.mcx-ai-messages');
  const form = root.querySelector('form');
  const input = root.querySelector('textarea');
  const close = root.querySelector('.mcx-ai-close');
  let opened = false;

  function add(type, text) {
    const row = document.createElement('div');
    row.className = `mcx-ai-message mcx-ai-${type}`;
    const bubble = document.createElement('div');
    bubble.className = 'mcx-ai-bubble';
    bubble.textContent = text;
    row.appendChild(bubble);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
  }

  function openChat() {
    overlay.hidden = false;
    document.body.classList.add('mcx-ai-open');
    if (!opened) {
      opened = true;
      setTimeout(() => add('assistant','Hi 👋'), 150);
      setTimeout(() => add('assistant','I’m CORTEX CORE AI. Ask me anything about MI CORTEX X, its products, services, pricing, support or contact information.'), 550);
    }
    setTimeout(() => input.focus(), 50);
  }

  function closeChat() {
    overlay.hidden = true;
    document.body.classList.remove('mcx-ai-open');
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('button,a,[role="button"]');
    if (!button) return;
    const text = normalize(button.innerText || button.textContent);
    if (!text.includes('chat with cortex core ai')) return;
    event.preventDefault();
    event.stopPropagation();
    openChat();
  }, true);

  close.addEventListener('click', closeChat);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeChat(); });
  document.addEventListener('keydown', e => { if (!overlay.hidden && e.key === 'Escape') closeChat(); });
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
  input.addEventListener('input', () => { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight,130) + 'px'; });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    add('user', q);
    input.value = '';
    input.style.height = 'auto';
    const typing = document.createElement('div');
    typing.className = 'mcx-ai-message mcx-ai-assistant';
    typing.innerHTML = '<div class="mcx-ai-bubble">Typing...</div>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
    setTimeout(() => { typing.remove(); add('assistant', answer(q)); }, Math.min(1000, 350 + q.length * 8));
  });
})();
