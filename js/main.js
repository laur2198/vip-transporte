/* ═══════════════════════════════════════════
   VIP-TRANSPORTE — main.js
   • Multilingual system (RO / DE / EN)
   • Sticky header on scroll
   • Mobile menu
   • AOS (Animate On Scroll) — manual
   • Counter animation
   • Booking form → WhatsApp
═══════════════════════════════════════════ */

'use strict';

/* ── TRANSLATIONS ──────────────────────────── */
const TRANSLATIONS = {
  ro: {
    meta_title: 'VIP-Transporte | Transport Persoane & Colete România - Germania - Austria',
    nav_services: 'Servicii',
    nav_routes: 'Rute',
    nav_why: 'De ce noi',
    nav_how: 'Cum funcționează',
    nav_testimonials: 'Recenzii',
    nav_book: 'Rezervă acum',

    wa_float: 'Scrie acum',
    hero_badge: 'Transport Premium',
    hero_title1: 'Transport',
    hero_title2: 'Persoane & Colete',
    hero_desc: 'Ridicare din ușă în ușă · Prețuri accesibile · Șoferi profesioniști · 24/7',
    hero_cta_wa: 'Rezervă pe WhatsApp',
    hero_cta_call: 'Sună acum',
    trust1: 'Autorizat',
    trust2: '1000+ Clienți',
    trust3: 'Punctualitate 100%',

    services_tag: 'Ce oferim',
    services_title: 'Serviciile noastre',
    services_subtitle: 'Soluții complete de transport pentru persoane și colete',
    svc1_title: 'Transport Persoane',
    svc1_desc: 'Călătorești confortabil în minibusuri moderne, cu aer condiționat. Ridicare din fața casei, dus direct la destinație în Germania sau Austria.',
    svc1_f1: 'Ridicare din ușă în ușă',
    svc1_f2: 'Bagaj inclus',
    svc1_f3: 'Aer condiționat & WiFi',
    svc1_f4: 'Priză USB la fiecare loc',
    svc1_f5: 'Șofer cu experiență',
    from: 'de la',
    per_person: '/persoană',
    book_now: 'Rezervă acum',
    svc2_title: 'Transport Colete',
    svc2_desc: 'Trimite colete în siguranță între România și Germania/Austria. Ambalare sigură, livrare la domiciliu, confirmare în timp real prin WhatsApp.',
    svc2_f1: 'Colectare la domiciliu',
    svc2_f2: 'Livrare la destinatar',
    svc2_f3: 'Confirmare WhatsApp',
    svc2_f4: 'Colete fragile acceptate',
    svc2_f5: 'Prețuri competitive',
    per_kg: '/kg',
    popular: 'Rapid & Sigur',
    send_parcel: 'Trimite colet',

    routes_tag: 'Destinații',
    routes_title: 'Rutele noastre',
    routes_subtitle: 'Acoperim principalele coridoare România ↔ Germania ↔ Austria',
    ro_departure: 'Plecări din România',
    and_more: '+ alte orașe',
    germany: 'Germania',
    austria: 'Austria',
    direct_ride: 'Mers direct',
    routes_note: 'Prețurile sunt per persoană. Prețul exact depinde de locul de ridicare și destinație. Contactați-ne pentru ofertă personalizată.',
    get_price: 'Cere prețul rutei tale',

    why_tag: 'Avantaje',
    why_title: 'De ce VIP-Transporte?',
    why_subtitle: 'Mii de clienți mulțumiți ne recomandă',
    why1_title: 'Ușă în ușă',
    why1_desc: 'Te ridicăm de acasă și te lăsăm la destinație. Fără bătăi de cap cu gara sau autobuzul.',
    why2_title: 'Autorizat & Asigurat',
    why2_desc: 'Funcționăm cu toate autorizațiile legale în Romania, Germania și Austria. Călătorești în deplină siguranță.',
    why3_title: 'Confort Premium',
    why3_desc: 'Minibusuri moderne, locuri spațioase, aer condiționat. O călătorie confortabilă de la primul până la ultimul km.',
    why4_title: 'Punctualitate',
    why4_desc: 'Respectăm orarul stabilit. Știm că timpul tău este prețios și că ai conexiuni de respectat.',
    why5_title: 'Comunicare 24/7',
    why5_desc: 'Disponibili non-stop pe WhatsApp. Orice întrebare, orice oră — suntem acolo pentru tine.',
    why6_title: 'Prețuri corecte',
    why6_desc: 'Fără tarife ascunse. Prețul agreat este prețul final. Bagajul normal este inclus în preț.',

    stat1: 'Clienți transportați',
    stat2: 'Ani de experiență',
    stat3: 'Destinații acoperite',
    stat4: 'Clienți mulțumiți',

    how_tag: 'Simplu & Rapid',
    how_title: 'Cum funcționează?',
    how_subtitle: '3 pași simpli și ești pe drum',
    step1_title: 'Contactează-ne',
    step1_desc: 'Scrie pe WhatsApp sau sună. Spune-ne ruta, data și numărul de persoane / colete.',
    step2_title: 'Confirmăm rezervarea',
    step2_desc: 'Primești confirmarea cu detalii exacte: ora de ridicare, adresa de întâlnire și șoferul.',
    step3_title: 'Călătorești confortabil',
    step3_desc: 'Ne prezentăm la adresa ta la ora stabilită și te ducem direct la destinație. Simplu și sigur.',
    start_booking: 'Începe rezervarea acum',

    testi_tag: 'Recenzii',
    testi_title: 'Ce spun clienții noștri',
    testi1_text: '"Am călătorit de 3 ori cu VIP-Transporte Timișoara → München. Punctuali, mașina curată, șofer amabil. Recomand cu toată inima!"',
    testi2_text: '"Trimit colete regulat acasă în Reșița. Mereu ajung în siguranță, rapid și la prețuri bune. Mulțumesc VIP-Transporte!"',
    testi3_text: '"Super serviciu! Au venit exact la ora stabilită, am ajuns confortabil la Viena. Îi voi folosi și la drum de întoarcere."',

    contact_tag: 'Contact',
    contact_title: 'Rezervă acum',
    contact_subtitle: 'Cel mai rapid mod de rezervare este prin WhatsApp',
    wa_sub: 'Răspundem rapid, 24/7',
    phone_de: 'Telefon Germania',
    phone_ro: 'Telefon România',
    phone_sub: 'Luni–Duminică, 6:00–22:00',
    form_title: 'Cerere rapidă de ofertă',
    form_subtitle: 'Completează formularul și te contactăm pe WhatsApp',
    form_name: 'Numele tău',
    form_from: 'De unde pleci',
    form_to: 'Unde ajungi',
    form_date: 'Data călătoriei',
    form_persons: 'Nr. persoane',
    form_phone: 'Telefon / WhatsApp',
    form_submit: 'Trimite pe WhatsApp',
    form_note: 'Formularul deschide WhatsApp cu datele completate automat.',

    footer_tagline: 'Transport persoane și colete România ↔ Germania ↔ Austria. Calitate, punctualitate și siguranță.',
    footer_services: 'Servicii',
    footer_routes: 'Rute principale',
    footer_contact: 'Contact',
    footer_rights: 'Toate drepturile rezervate.',
    footer_legal: 'Transport autorizat România · Germania · Austria',
  },

  de: {
    meta_title: 'VIP-Transporte | Personentransport Rumänien - Deutschland - Österreich',
    nav_services: 'Leistungen',
    nav_routes: 'Routen',
    nav_why: 'Warum wir',
    nav_how: 'Wie es funktioniert',
    nav_testimonials: 'Bewertungen',
    nav_book: 'Jetzt buchen',

    wa_float: 'Jetzt schreiben',
    hero_badge: 'Premium Transport',
    hero_title1: 'Transport',
    hero_title2: 'Personen & Pakete',
    hero_desc: 'Tür-zu-Tür-Abholung · Günstige Preise · Professionelle Fahrer · 24/7',
    hero_cta_wa: 'Per WhatsApp buchen',
    hero_cta_call: 'Jetzt anrufen',
    trust1: 'Zugelassen',
    trust2: '1000+ Kunden',
    trust3: '100% Pünktlichkeit',

    services_tag: 'Unsere Angebote',
    services_title: 'Unsere Leistungen',
    services_subtitle: 'Komplette Transportlösungen für Personen und Pakete',
    svc1_title: 'Personentransport',
    svc1_desc: 'Reisen Sie komfortabel in modernen Kleinbussen mit Klimaanlage. Abholung vor der Haustür, direkte Fahrt zum Ziel in Deutschland oder Österreich.',
    svc1_f1: 'Tür-zu-Tür-Service',
    svc1_f2: 'Gepäck inklusive',
    svc1_f3: 'Klimaanlage & WLAN',
    svc1_f4: 'USB-Anschluss an jedem Platz',
    svc1_f5: 'Erfahrener Fahrer',
    from: 'ab',
    per_person: '/Person',
    book_now: 'Jetzt buchen',
    svc2_title: 'Pakettransport',
    svc2_desc: 'Senden Sie Pakete sicher zwischen Rumänien und Deutschland/Österreich. Sichere Verpackung, Lieferung nach Hause, Echtzeit-Bestätigung per WhatsApp.',
    svc2_f1: 'Abholung zu Hause',
    svc2_f2: 'Zustellung beim Empfänger',
    svc2_f3: 'WhatsApp-Bestätigung',
    svc2_f4: 'Zerbrechliche Pakete erlaubt',
    svc2_f5: 'Wettbewerbsfähige Preise',
    per_kg: '/kg',
    popular: 'Schnell & Sicher',
    send_parcel: 'Paket senden',

    routes_tag: 'Destinationen',
    routes_title: 'Unsere Routen',
    routes_subtitle: 'Wir bedienen die Hauptkorridore Rumänien ↔ Deutschland ↔ Österreich',
    ro_departure: 'Abfahrten aus Rumänien',
    and_more: '+ weitere Städte',
    germany: 'Deutschland',
    austria: 'Österreich',
    direct_ride: 'Direktfahrt',
    routes_note: 'Preise pro Person. Der genaue Preis hängt vom Abholort und Ziel ab. Kontaktieren Sie uns für ein individuelles Angebot.',
    get_price: 'Preis anfragen',

    why_tag: 'Vorteile',
    why_title: 'Warum VIP-Transporte?',
    why_subtitle: 'Tausende zufriedene Kunden empfehlen uns',
    why1_title: 'Tür zu Tür',
    why1_desc: 'Wir holen Sie von zu Hause ab und bringen Sie ans Ziel. Kein Stress mit Bahnhöfen oder Bussen.',
    why2_title: 'Zugelassen & Versichert',
    why2_desc: 'Wir operieren mit allen gesetzlichen Genehmigungen in Rumänien, Deutschland und Österreich.',
    why3_title: 'Premium-Komfort',
    why3_desc: 'Moderne Kleinbusse, geräumige Sitze, Klimaanlage. Eine komfortable Fahrt vom ersten bis zum letzten km.',
    why4_title: 'Pünktlichkeit',
    why4_desc: 'Wir halten den vereinbarten Zeitplan ein. Wir wissen, dass Ihre Zeit wertvoll ist.',
    why5_title: 'Kommunikation 24/7',
    why5_desc: 'Rund um die Uhr auf WhatsApp erreichbar. Jede Frage, jede Uhrzeit — wir sind für Sie da.',
    why6_title: 'Faire Preise',
    why6_desc: 'Keine versteckten Gebühren. Der vereinbarte Preis ist der Endpreis. Normales Gepäck ist inklusive.',

    stat1: 'Transportierte Kunden',
    stat2: 'Jahre Erfahrung',
    stat3: 'Abgedeckte Ziele',
    stat4: 'Zufriedene Kunden',

    how_tag: 'Einfach & Schnell',
    how_title: 'Wie funktioniert es?',
    how_subtitle: '3 einfache Schritte und Sie sind unterwegs',
    step1_title: 'Kontaktieren Sie uns',
    step1_desc: 'Schreiben Sie auf WhatsApp oder rufen Sie an. Teilen Sie uns Route, Datum und Personenzahl / Pakete mit.',
    step2_title: 'Reservierung bestätigen',
    step2_desc: 'Sie erhalten eine Bestätigung mit genauen Details: Abholzeit, Treffpunkt und Fahrer.',
    step3_title: 'Komfortabel reisen',
    step3_desc: 'Wir erscheinen zur vereinbarten Zeit an Ihrer Adresse und bringen Sie direkt ans Ziel.',
    start_booking: 'Jetzt buchen',

    testi_tag: 'Bewertungen',
    testi_title: 'Was unsere Kunden sagen',
    testi1_text: '"Ich bin 3-mal mit VIP-Transporte Timișoara → München gefahren. Pünktlich, sauberes Auto, freundlicher Fahrer. Sehr empfehlenswert!"',
    testi2_text: '"Ich schicke regelmäßig Pakete nach Hause nach Reșița. Immer sicher, schnell und zu guten Preisen. Danke VIP-Transporte!"',
    testi3_text: '"Super Service! Pünktlich erschienen, komfortabel nach Wien. Ich werde sie auch für die Rückfahrt nutzen."',

    contact_tag: 'Kontakt',
    contact_title: 'Jetzt buchen',
    contact_subtitle: 'Der schnellste Weg zur Buchung ist über WhatsApp',
    wa_sub: 'Schnelle Antwort, 24/7',
    phone_de: 'Telefon Deutschland',
    phone_ro: 'Telefon Rumänien',
    phone_sub: 'Mo–So, 6:00–22:00 Uhr',
    form_title: 'Schnelle Angebotsanfrage',
    form_subtitle: 'Formular ausfüllen und wir melden uns per WhatsApp',
    form_name: 'Ihr Name',
    form_from: 'Abfahrtsort',
    form_to: 'Zielort',
    form_date: 'Reisedatum',
    form_persons: 'Anzahl Personen',
    form_phone: 'Telefon / WhatsApp',
    form_submit: 'Per WhatsApp senden',
    form_note: 'Das Formular öffnet WhatsApp mit automatisch ausgefüllten Daten.',

    footer_tagline: 'Personen- und Pakettransport Rumänien ↔ Deutschland ↔ Österreich. Qualität, Pünktlichkeit und Sicherheit.',
    footer_services: 'Leistungen',
    footer_routes: 'Hauptrouten',
    footer_contact: 'Kontakt',
    footer_rights: 'Alle Rechte vorbehalten.',
    footer_legal: 'Zugelassener Transport Rumänien · Deutschland · Österreich',
  },

  en: {
    meta_title: 'VIP-Transporte | Passenger Transport Romania - Germany - Austria',
    nav_services: 'Services',
    nav_routes: 'Routes',
    nav_why: 'Why us',
    nav_how: 'How it works',
    nav_testimonials: 'Reviews',
    nav_book: 'Book now',

    wa_float: 'Message us',
    hero_badge: 'Premium Transport',
    hero_title1: 'Transport',
    hero_title2: 'Passengers & Parcels',
    hero_desc: 'Door-to-door pickup · Affordable prices · Professional drivers · 24/7',
    hero_cta_wa: 'Book on WhatsApp',
    hero_cta_call: 'Call now',
    trust1: 'Licensed',
    trust2: '1000+ Clients',
    trust3: '100% On-time',

    services_tag: 'What we offer',
    services_title: 'Our Services',
    services_subtitle: 'Complete transport solutions for passengers and parcels',
    svc1_title: 'Passenger Transport',
    svc1_desc: 'Travel comfortably in modern, air-conditioned minibuses. Picked up from your door, taken directly to your destination in Germany or Austria.',
    svc1_f1: 'Door-to-door pickup',
    svc1_f2: 'Luggage included',
    svc1_f3: 'A/C & WiFi',
    svc1_f4: 'USB port at every seat',
    svc1_f5: 'Experienced driver',
    from: 'from',
    per_person: '/person',
    book_now: 'Book now',
    svc2_title: 'Parcel Transport',
    svc2_desc: 'Send parcels safely between Romania and Germany/Austria. Secure packaging, home delivery, real-time confirmation via WhatsApp.',
    svc2_f1: 'Home collection',
    svc2_f2: 'Delivery to recipient',
    svc2_f3: 'WhatsApp confirmation',
    svc2_f4: 'Fragile items accepted',
    svc2_f5: 'Competitive prices',
    per_kg: '/kg',
    popular: 'Fast & Safe',
    send_parcel: 'Send parcel',

    routes_tag: 'Destinations',
    routes_title: 'Our Routes',
    routes_subtitle: 'Covering main corridors Romania ↔ Germany ↔ Austria',
    ro_departure: 'Departures from Romania',
    and_more: '+ more cities',
    germany: 'Germany',
    austria: 'Austria',
    direct_ride: 'Direct ride',
    routes_note: 'Prices are per person. The exact price depends on pickup location and destination. Contact us for a personalized quote.',
    get_price: 'Get your route price',

    why_tag: 'Benefits',
    why_title: 'Why VIP-Transporte?',
    why_subtitle: 'Thousands of satisfied clients recommend us',
    why1_title: 'Door to door',
    why1_desc: 'We pick you up from home and drop you at the destination. No hassle with train stations or buses.',
    why2_title: 'Licensed & Insured',
    why2_desc: 'We operate with all legal authorizations in Romania, Germany and Austria. Travel with complete peace of mind.',
    why3_title: 'Premium Comfort',
    why3_desc: 'Modern minibuses, spacious seats, air conditioning. A comfortable journey from the first to the last km.',
    why4_title: 'Punctuality',
    why4_desc: 'We respect the agreed schedule. We know your time is valuable and that you have connections to make.',
    why5_title: '24/7 Communication',
    why5_desc: 'Available round the clock on WhatsApp. Any question, any hour — we are there for you.',
    why6_title: 'Fair prices',
    why6_desc: 'No hidden fees. The agreed price is the final price. Normal luggage is included in the price.',

    stat1: 'Passengers transported',
    stat2: 'Years of experience',
    stat3: 'Destinations covered',
    stat4: 'Satisfied clients',

    how_tag: 'Simple & Fast',
    how_title: 'How does it work?',
    how_subtitle: '3 simple steps and you are on your way',
    step1_title: 'Contact us',
    step1_desc: 'Message us on WhatsApp or call. Tell us the route, date and number of passengers / parcels.',
    step2_title: 'Confirm booking',
    step2_desc: 'You receive confirmation with exact details: pickup time, meeting address and driver.',
    step3_title: 'Travel comfortably',
    step3_desc: 'We show up at your address at the agreed time and take you directly to the destination.',
    start_booking: 'Start booking now',

    testi_tag: 'Reviews',
    testi_title: 'What our clients say',
    testi1_text: '"I traveled 3 times with VIP-Transporte Timișoara → Munich. Punctual, clean car, friendly driver. Highly recommended!"',
    testi2_text: '"I regularly send parcels home to Reșița. Always arrive safely, quickly and at good prices. Thank you VIP-Transporte!"',
    testi3_text: '"Great service! They arrived exactly on time, traveled comfortably to Vienna. I will use them for the return trip too."',

    contact_tag: 'Contact',
    contact_title: 'Book now',
    contact_subtitle: 'The fastest way to book is via WhatsApp',
    wa_sub: 'Quick response, 24/7',
    phone_de: 'Phone Germany',
    phone_ro: 'Phone Romania',
    phone_sub: 'Mon–Sun, 6:00–22:00',
    form_title: 'Quick quote request',
    form_subtitle: 'Fill in the form and we will contact you on WhatsApp',
    form_name: 'Your name',
    form_from: 'Departure city',
    form_to: 'Destination',
    form_date: 'Travel date',
    form_persons: 'No. of persons',
    form_phone: 'Phone / WhatsApp',
    form_submit: 'Send via WhatsApp',
    form_note: 'The form opens WhatsApp with your data pre-filled.',

    footer_tagline: 'Passenger & parcel transport Romania ↔ Germany ↔ Austria. Quality, punctuality and safety.',
    footer_services: 'Services',
    footer_routes: 'Main routes',
    footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
    footer_legal: 'Licensed transport Romania · Germany · Austria',
  }
};

/* ── STATE ─────────────────────────────────── */
let currentLang = 'ro';

/* ── LANG DETECTION ────────────────────────── */
function detectLang() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang && TRANSLATIONS[urlLang]) return urlLang;
  const saved = localStorage.getItem('vt-lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  const nav = (navigator.language || '').split('-')[0].toLowerCase();
  if (nav === 'de') return 'de';
  if (nav === 'en') return 'en';
  return 'ro';
}

/* ── APPLY TRANSLATIONS ────────────────────── */
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('vt-lang', lang);

  // Update <html lang>
  document.documentElement.lang = lang;

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Attributes
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const key = el.dataset.i18nAttr;
    const attr = el.dataset.i18nTarget || 'content';
    if (t[key] !== undefined) el.setAttribute(attr, t[key]);
  });

  // Update page title
  if (t.meta_title) document.title = t.meta_title;

  // Active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update booking form placeholder texts for current lang
  updateFormPlaceholders(lang);
}

function updateFormPlaceholders(lang) {
  const p = {
    ro: { name: 'Ion Popescu', from: 'ex: Reșița', to: 'ex: München', phone: '+40 7xx xxx xxx' },
    de: { name: 'Max Müller',  from: 'z.B. Timișoara', to: 'z.B. München', phone: '+49 1xx xxx xxxxx' },
    en: { name: 'John Smith',  from: 'e.g. Timișoara', to: 'e.g. Munich', phone: '+49 1xx xxx xxxxx' },
  };
  const lp = p[lang] || p.ro;
  const n = document.getElementById('f-name');
  const f = document.getElementById('f-from');
  const to = document.getElementById('f-to');
  const ph = document.getElementById('f-phone');
  if (n) n.placeholder = lp.name;
  if (f) f.placeholder = lp.from;
  if (to) to.placeholder = lp.to;
  if (ph) ph.placeholder = lp.phone;
}

/* ── STICKY HEADER ─────────────────────────── */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ── MOBILE MENU ───────────────────────────── */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('mobile-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    nav.setAttribute('aria-hidden', !open);
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
      nav.setAttribute('aria-hidden', true);
    });
  });
}

/* ── SMOOTH SCROLL ─────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      const navH = document.getElementById('desktop-nav')?.offsetHeight || 48;
      const offset = headerH + navH + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── AOS (ANIMATE ON SCROLL) ───────────────── */
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.aosDelay) || 0;
        setTimeout(() => el.classList.add('aos-animate'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ── COUNTER ANIMATION ─────────────────────── */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── BOOKING FORM → WHATSAPP ───────────────── */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById('f-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name    = form.querySelector('#f-name')?.value.trim();
    const from    = form.querySelector('#f-from')?.value.trim();
    const to      = form.querySelector('#f-to')?.value.trim();
    const date    = form.querySelector('#f-date')?.value;
    const persons = form.querySelector('#f-persons')?.value;
    const phone   = form.querySelector('#f-phone')?.value.trim();

    // Basic validation
    const required = [name, from, to, phone];
    if (required.some(v => !v)) {
      highlightErrors(form);
      return;
    }

    // Build WhatsApp message
    const msgs = {
      ro: `Buna ziua! Doresc o rezervare:\n👤 Nume: ${name}\n📍 De la: ${from}\n📍 La: ${to}\n📅 Data: ${date || 'TBD'}\n👥 Persoane: ${persons}\n📱 Telefon: ${phone}`,
      de: `Hallo! Ich möchte buchen:\n👤 Name: ${name}\n📍 Von: ${from}\n📍 Nach: ${to}\n📅 Datum: ${date || 'TBD'}\n👥 Personen: ${persons}\n📱 Telefon: ${phone}`,
      en: `Hello! I would like to book:\n👤 Name: ${name}\n📍 From: ${from}\n📍 To: ${to}\n📅 Date: ${date || 'TBD'}\n👥 Persons: ${persons}\n📱 Phone: ${phone}`,
    };

    const msg = msgs[currentLang] || msgs.ro;
    const waUrl = `https://wa.me/491626842062?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener');
  });
}

function highlightErrors(form) {
  const inputs = form.querySelectorAll('input[required], select[required]');
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#E02020';
      input.addEventListener('input', () => input.style.borderColor = '', { once: true });
    }
  });
}

/* ── ACTIVE NAV LINK ON SCROLL ─────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ── LANG SWITCHER INIT ────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslations(btn.dataset.lang);
    });
  });
}

/* ── INIT ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyTranslations(lang);

  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
  initAOS();
  initCounters();
  initBookingForm();
  initActiveNav();
  initLangSwitcher();
});
