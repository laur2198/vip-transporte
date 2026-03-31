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
    approx_dist: '~1.350 km',
    nav_impressum: 'Impressum',
    nav_datenschutz: 'Politica de confidențialitate',
    consent_text: 'Acest site folosește servicii externe (Google Fonts, Font Awesome) care pot prelucra date personale (adresa IP). De asemenea, stocăm preferința de limbă în browserul dvs.',
    consent_accept: 'Accept',
    consent_reject: 'Refuz',
    consent_settings: 'Mai multe detalii',
    imp_title: 'Impressum',
    imp_info: 'Informații conform § 5 TMG',
    imp_company: 'Firmă',
    imp_address: 'Adresă',
    imp_responsible: 'Persoană responsabilă',
    imp_contact: 'Contact',
    imp_phone: 'Telefon',
    imp_email: 'E-mail',
    imp_tax: 'Identificare fiscală',
    imp_tax_desc: 'Număr de identificare TVA conform §27 a UStG',
    imp_dispute: 'Soluționarea litigiilor',
    imp_dispute_text: 'Comisia Europeană pune la dispoziție o platformă de soluționare online a litigiilor (OS):',
    imp_dispute_note: 'Nu suntem obligați și nu suntem dispuși să participăm la o procedură de soluționare a litigiilor în fața unui organism de soluționare a litigiilor de consum.',
    priv_title: 'Politica de confidențialitate',
    priv_intro: 'Protecția datelor dumneavoastră personale este importantă pentru noi. Mai jos vă informăm despre prelucrarea datelor cu caracter personal pe site-ul nostru.',
    priv_responsible_title: 'Persoana responsabilă',
    priv_responsible_text: 'Persoana responsabilă pentru prelucrarea datelor pe acest site este:',
    priv_hosting_title: 'Hosting',
    priv_hosting_text: 'Acest site este un site static. Paginile sunt livrate de serverul de hosting. La accesarea site-ului, serverul înregistrează automat log-uri (fișiere jurnal) ce pot conține: adresa IP, data și ora accesării, pagina accesată, codul de stare HTTP.',
    priv_fonts_title: 'Google Fonts',
    priv_fonts_text: 'Acest site folosește fonturi de la Google Fonts, încărcate de pe serverele Google (fonts.googleapis.com, fonts.gstatic.com). La încărcarea unei pagini, browserul dumneavoastră stabilește o conexiune cu serverele Google, iar adresa IP este transmisă. Mai multe informații:',
    priv_fa_title: 'Font Awesome',
    priv_fa_text: 'Acest site folosește pictograme de la Font Awesome, încărcate de pe CDN-ul Cloudflare (cdnjs.cloudflare.com). La încărcarea unei pagini, browserul stabilește o conexiune cu serverele Cloudflare, iar adresa IP este transmisă.',
    priv_wa_title: 'Integrare WhatsApp',
    priv_wa_text: 'Site-ul nostru conține link-uri și un formular care deschid WhatsApp (wa.me). Când accesați un link WhatsApp, datele sunt transmise către Meta Platforms Ireland Ltd. Aceasta are loc doar după acțiunea dumneavoastră activă (click pe link sau trimitere formular).',
    priv_storage_title: 'Stocare locală (localStorage)',
    priv_storage_text: 'Stocăm preferința dumneavoastră de limbă și consimțământul cookie în localStorage-ul browserului. Aceste date rămân doar pe dispozitivul dumneavoastră și nu sunt transmise către noi.',
    priv_rights_title: 'Drepturile dumneavoastră',
    priv_rights_text: 'Aveți dreptul la informare, corectare, ștergere, restricționare, portabilitatea datelor și dreptul de a vă opune prelucrării. Dacă considerați că prelucrarea datelor încalcă legislația, puteți depune o plângere la autoritatea de supraveghere.',
    priv_changes_title: 'Modificări',
    priv_changes_text: 'Această politică de confidențialitate poate fi actualizată periodic. Vă recomandăm să verificați această pagină regulat.',
    err404_title: 'Pagina nu a fost găsită',
    err404_desc: 'Ne pare rău, pagina pe care o căutați nu există sau a fost mutată.',
    err404_back: 'Înapoi la pagina principală',
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
    approx_dist: '~1.350 km',
    nav_impressum: 'Impressum',
    nav_datenschutz: 'Datenschutz',
    consent_text: 'Diese Website verwendet externe Dienste (Google Fonts, Font Awesome), die personenbezogene Daten (IP-Adresse) verarbeiten können. Außerdem speichern wir Ihre Spracheinstellung in Ihrem Browser.',
    consent_accept: 'Akzeptieren',
    consent_reject: 'Ablehnen',
    consent_settings: 'Mehr erfahren',
    imp_title: 'Impressum',
    imp_info: 'Angaben gemäß § 5 TMG',
    imp_company: 'Unternehmen',
    imp_address: 'Adresse',
    imp_responsible: 'Verantwortliche Person',
    imp_contact: 'Kontakt',
    imp_phone: 'Telefon',
    imp_email: 'E-Mail',
    imp_tax: 'Steuerliche Angaben',
    imp_tax_desc: 'Umsatzsteuer-Identifikationsnummer gemäß §27 a UStG',
    imp_dispute: 'Streitschlichtung',
    imp_dispute_text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
    imp_dispute_note: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    priv_title: 'Datenschutzerklärung',
    priv_intro: 'Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten auf unserer Website.',
    priv_responsible_title: 'Verantwortliche Stelle',
    priv_responsible_text: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
    priv_hosting_title: 'Hosting',
    priv_hosting_text: 'Diese Website ist eine statische Website. Die Seiten werden vom Hosting-Server ausgeliefert. Beim Aufrufen der Website erfasst der Server automatisch Logdateien, die enthalten können: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, HTTP-Statuscode.',
    priv_fonts_title: 'Google Fonts',
    priv_fonts_text: 'Diese Website nutzt Schriftarten von Google Fonts, die von Google-Servern geladen werden (fonts.googleapis.com, fonts.gstatic.com). Beim Laden einer Seite stellt Ihr Browser eine Verbindung zu Google-Servern her, wobei Ihre IP-Adresse übermittelt wird. Weitere Informationen:',
    priv_fa_title: 'Font Awesome',
    priv_fa_text: 'Diese Website nutzt Icons von Font Awesome, die über das Cloudflare-CDN geladen werden (cdnjs.cloudflare.com). Beim Laden einer Seite stellt Ihr Browser eine Verbindung zu Cloudflare-Servern her, wobei Ihre IP-Adresse übermittelt wird.',
    priv_wa_title: 'WhatsApp-Integration',
    priv_wa_text: 'Unsere Website enthält Links und ein Formular, die WhatsApp öffnen (wa.me). Wenn Sie einen WhatsApp-Link aufrufen, werden Daten an Meta Platforms Ireland Ltd. übermittelt. Dies geschieht nur nach Ihrer aktiven Handlung (Klick auf Link oder Formularabsendung).',
    priv_storage_title: 'Lokale Speicherung (localStorage)',
    priv_storage_text: 'Wir speichern Ihre Spracheinstellung und Cookie-Einwilligung im localStorage Ihres Browsers. Diese Daten verbleiben nur auf Ihrem Gerät und werden nicht an uns übermittelt.',
    priv_rights_title: 'Ihre Rechte',
    priv_rights_text: 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Aufsichtsbehörde beschweren.',
    priv_changes_title: 'Änderungen',
    priv_changes_text: 'Diese Datenschutzerklärung kann regelmäßig aktualisiert werden. Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen.',
    err404_title: 'Seite nicht gefunden',
    err404_desc: 'Die gesuchte Seite existiert leider nicht oder wurde verschoben.',
    err404_back: 'Zurück zur Startseite',
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
    approx_dist: '~1,350 km',
    nav_impressum: 'Legal Notice',
    nav_datenschutz: 'Privacy Policy',
    consent_text: 'This website uses external services (Google Fonts, Font Awesome) that may process personal data (IP address). We also store your language preference in your browser.',
    consent_accept: 'Accept',
    consent_reject: 'Reject',
    consent_settings: 'Learn more',
    imp_title: 'Legal Notice',
    imp_info: 'Information according to § 5 TMG',
    imp_company: 'Company',
    imp_address: 'Address',
    imp_responsible: 'Responsible person',
    imp_contact: 'Contact',
    imp_phone: 'Phone',
    imp_email: 'Email',
    imp_tax: 'Tax information',
    imp_tax_desc: 'VAT identification number according to §27 a UStG',
    imp_dispute: 'Dispute resolution',
    imp_dispute_text: 'The European Commission provides a platform for online dispute resolution (OS):',
    imp_dispute_note: 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
    priv_title: 'Privacy Policy',
    priv_intro: 'The protection of your personal data is important to us. Below we inform you about the processing of personal data on our website.',
    priv_responsible_title: 'Responsible party',
    priv_responsible_text: 'The responsible party for data processing on this website is:',
    priv_hosting_title: 'Hosting',
    priv_hosting_text: 'This website is a static website. Pages are delivered by the hosting server. When accessing the website, the server automatically records log files that may contain: IP address, date and time of access, page accessed, HTTP status code.',
    priv_fonts_title: 'Google Fonts',
    priv_fonts_text: 'This website uses fonts from Google Fonts, loaded from Google servers (fonts.googleapis.com, fonts.gstatic.com). When loading a page, your browser establishes a connection to Google servers, and your IP address is transmitted. More information:',
    priv_fa_title: 'Font Awesome',
    priv_fa_text: 'This website uses icons from Font Awesome, loaded from the Cloudflare CDN (cdnjs.cloudflare.com). When loading a page, your browser establishes a connection to Cloudflare servers, and your IP address is transmitted.',
    priv_wa_title: 'WhatsApp Integration',
    priv_wa_text: 'Our website contains links and a form that open WhatsApp (wa.me). When you access a WhatsApp link, data is transmitted to Meta Platforms Ireland Ltd. This only occurs after your active action (clicking a link or submitting a form).',
    priv_storage_title: 'Local Storage (localStorage)',
    priv_storage_text: 'We store your language preference and cookie consent in your browser\'s localStorage. This data remains only on your device and is not transmitted to us.',
    priv_rights_title: 'Your rights',
    priv_rights_text: 'You have the right to information, correction, deletion, restriction, data portability and objection. If you believe that the processing of your data violates data protection law, you can file a complaint with the supervisory authority.',
    priv_changes_title: 'Changes',
    priv_changes_text: 'This privacy policy may be updated periodically. We recommend checking this page regularly.',
    err404_title: 'Page not found',
    err404_desc: 'Sorry, the page you are looking for does not exist or has been moved.',
    err404_back: 'Back to homepage',
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

/* ── COOKIE CONSENT BANNER ────────────────── */
function initConsentBanner() {
  const banner = document.getElementById('consent-banner');
  if (!banner) return;

  const consent = localStorage.getItem('vt-consent');
  if (consent) {
    banner.style.display = 'none';
    return;
  }

  banner.style.display = 'flex';

  const acceptBtn = document.getElementById('consent-accept');
  const rejectBtn = document.getElementById('consent-reject');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('vt-consent', 'accepted');
      banner.style.display = 'none';
    });
  }
  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      localStorage.setItem('vt-consent', 'rejected');
      banner.style.display = 'none';
    });
  }
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
  initConsentBanner();
});
