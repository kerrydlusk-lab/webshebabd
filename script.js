/* ============================================================
   ওয়েব শেবা - JavaScript Functionality
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initTypewriter();
  applyLanguage(selectedLanguage);
});

// ── Typewriter Effect for Hero Title ──────────────────────
function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;

  const phrases = [
    'আধুনিক ওয়েবসাইট',
    'ই-কমার্স অনলাইন শপ',
    'হাই-কনভার্টিং ল্যান্ডিং পেজ',
    'কাস্টম ওয়েব সল্যুশন'
  ];

  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 2000);
}

// ── Multi-Language Translation System (i18n) ────────────────
let selectedLanguage = localStorage.getItem('websheba_lang') || 'bn';

const i18nData = {
  bn: {
    flag: '🇧🇩',
    code: 'BN',
    typewriter: ['আধুনিক ওয়েবসাইট', 'ই-কমার্স অনলাইন শপ', 'হাই-কনভার্টিং ল্যান্ডিং পেজ', 'কাস্টম ওয়েব সল্যুশন'],
    texts: {
      nav_home: 'প্রথম পাতা',
      nav_about: 'আমাদের সম্পর্কে',
      nav_services: 'আমাদের সার্ভিস',
      nav_faq: 'সাধারণ প্রশ্ন',
      nav_contact_btn: 'যোগাযোগ করুন',
      hero_badge: 'বাংলাদেশের বিশ্বস্ত ওয়েব ডিজাইন এজেন্সি',
      hero_lead: 'আমরা আপনার ব্যবসার জন্য',
      hero_end: 'তৈরি করি।',
      hero_desc: 'আমরা শুধুমাত্র একটি ওয়েবসাইট নয়, আপনার ব্যবসার জন্য একটি শক্তিশালী অনলাইন ভিত্তি তৈরি করি। যা আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যাবে।',
      hero_projects: '২০০+ প্রজেক্ট সম্পন্ন',
      hero_clients: '৫০+ সন্তুষ্ট ক্লায়েন্ট',
      hero_exp: '৩+ বছরের অভিজ্ঞতা',
      btn_work: 'আমাদের কাজ দেখুন',
      btn_contact: 'যোগাযোগ করুন',
      badge_mobile: '১০০% মোবাইল ফ্রেন্ডলি',
      badge_fast: 'সুপারফাস্ট ডেলিভারি',
      badge_rating: '৫.০ স্টার রেটিং ডেভেলপার',
      why_tag: 'কেন ওয়েবসাইট?',
      why_title: 'কেন আপনার ব্যবসার জন্য একটি ওয়েবসাইট দরকার?',
      why_desc: 'আজকের ডিজিটাল যুগে একটি প্রফেশনাল ওয়েবসাইট ছাড়া ব্যবসা করা অনেকটা রাস্তায় সাইনবোর্ড ছাড়া দোকান খোলার মতো।',
      services_tag: 'আমাদের সেবা',
      services_title: 'আপনার ব্যবসার জন্য বিশেষ সল্যুশন',
      services_desc: 'আমরা আপনার ব্যবসার প্রতিটি প্রয়োজনীয়তার জন্য কাস্টম ওয়েব সমাধান প্রদান করি',
      portfolio_tag: 'আমাদের কাজ',
      portfolio_title: 'প্রিমিয়াম রেডি-টু-ইউজ টেমপ্লেট',
      portfolio_desc: 'আমাদের তৈরি সেরা ওয়েবসাইট টেমপ্লেটগুলো দেখুন এবং আপনার পছন্দের ডিজাইন বেছে নিন',
      filter_all: 'সকল টাইপ',
      filter_ecommerce: 'ইকমার্স ওয়েবসাইট',
      filter_landing: 'ল্যান্ডিং পেইজ',
      platforms_tag: 'প্ল্যাটফর্ম',
      platforms_title: 'আমরা যেসব প্ল্যাটফর্মে কাজ করি',
      platforms_desc: 'বিশ্বের সেরা ওয়েব প্ল্যাটফর্মগুলো ব্যবহার করে আমরা আপনার ওয়েবসাইট তৈরি করি',
      pricing_tag: 'মূল্য পরিকল্পনা',
      pricing_title: 'সাধ্যের মধ্যে সমাধান',
      pricing_desc: 'আপনার ব্যবসার জন্য সেরা মূল্য পরিকল্পনা বেছে নিন',
      faq_tag: 'সাধারণ প্রশ্ন',
      faq_title: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
      faq_desc: 'আপনার মনে যে প্রশ্নগুলো আসছে তার উত্তর এখানে পাবেন',
      cta_title: 'আজই আপনার ব্যবসার জন্য একটি ওয়েবসাইট তৈরি করুন এবং অনলাইনে এগিয়ে যান',
      cta_desc: 'হাজারো উদ্যোক্তা ইতোমধ্যে আমাদের সেবা নিয়েছেন। আপনিও শুরু করুন আজই।',
      cta_btn: 'ওয়েবসাইট বানাতে শুরু করুন',
      contact_tag: 'যোগাযোগ',
      contact_title: 'আমাদের সাথে কথা বলুন',
      contact_desc: 'আপনার প্রজেক্ট নিয়ে আলোচনা করতে আজই যোগাযোগ করুন'
    }
  },
  en: {
    flag: '🇬🇧',
    code: 'EN',
    typewriter: ['Modern Websites', 'E-Commerce Stores', 'High-Converting Landing Pages', 'Custom Web Solutions'],
    texts: {
      nav_home: 'Home',
      nav_about: 'About Us',
      nav_services: 'Our Services',
      nav_faq: 'FAQ',
      nav_contact_btn: 'Contact Us',
      hero_badge: "Bangladesh's Trusted Web Design Agency",
      hero_lead: 'We build',
      hero_end: 'for your business.',
      hero_desc: "We don't just build a website, we create a powerful online foundation for your business to elevate your brand.",
      hero_projects: '200+ Projects Completed',
      hero_clients: '50+ Happy Clients',
      hero_exp: '3+ Years Experience',
      btn_work: 'View Our Work',
      btn_contact: 'Contact Us',
      badge_mobile: '100% Mobile Friendly',
      badge_fast: 'Superfast Delivery',
      badge_rating: '5.0 Star Rated Developer',
      why_tag: 'Why a Website?',
      why_title: 'Why Does Your Business Need a Website?',
      why_desc: 'In today’s digital world, running a business without a website is like opening a shop without a signboard.',
      services_tag: 'Our Services',
      services_title: 'Specialized Solutions for Your Business',
      services_desc: 'We provide custom web solutions tailored for every requirement of your business.',
      portfolio_tag: 'Our Work',
      portfolio_title: 'Premium Ready-to-Use Templates',
      portfolio_desc: 'Browse our top website templates and pick your favorite design.',
      filter_all: 'All Types',
      filter_ecommerce: 'E-commerce',
      filter_landing: 'Landing Pages',
      platforms_tag: 'Platforms',
      platforms_title: 'Platforms We Work With',
      platforms_desc: 'We build your website using the world’s leading web technologies.',
      pricing_tag: 'Pricing Plans',
      pricing_title: 'Affordable Solutions',
      pricing_desc: 'Choose the best pricing plan suited for your business.',
      faq_tag: 'FAQ',
      faq_title: 'Frequently Asked Questions',
      faq_desc: 'Find answers to common questions you might have in mind.',
      cta_title: 'Build a Website For Your Business Today & Grow Online',
      cta_desc: 'Thousands of entrepreneurs have built their business with us. Start yours today.',
      cta_btn: 'Start Building Your Website',
      contact_tag: 'Contact',
      contact_title: 'Get In Touch With Us',
      contact_desc: 'Reach out today to discuss your website project.'
    }
  },
  de: {
    flag: '🇩🇪',
    code: 'DE',
    typewriter: ['Moderne Websites', 'E-Commerce Shops', 'Hochkonvertierende Landingpages', 'Maßgeschneiderte Weblösungen'],
    texts: {
      nav_home: 'Startseite',
      nav_about: 'Über uns',
      nav_services: 'Unsere Dienste',
      nav_faq: 'FAQ',
      nav_contact_btn: 'Kontaktieren Sie uns',
      hero_badge: 'Vertrauenswürdige Webdesign-Agentur',
      hero_lead: 'Wir erstellen',
      hero_end: 'für Ihr Unternehmen.',
      hero_desc: 'Wir schaffen ein starkes digitales Fundament für Ihr Unternehmen.',
      hero_projects: '200+ Abgeschlossene Projekte',
      hero_clients: '50+ Zufriedene Kunden',
      hero_exp: '3+ Jahre Erfahrung',
      btn_work: 'Unsere Arbeiten ansehen',
      btn_contact: 'Kontakt aufnehmen',
      badge_mobile: '100% Mobilfreundlich',
      badge_fast: 'Super schnelle Lieferung',
      badge_rating: '5.0 Sterne Entwickler',
      why_tag: 'Warum eine Website?',
      why_title: 'Warum braucht Ihr Unternehmen eine Website?',
      why_desc: 'Ein Geschäft ohne Website ist wie ein Laden ohne Schild.',
      services_tag: 'Unsere Dienste',
      services_title: 'Spezialisierte Lösungen für Ihr Unternehmen',
      services_desc: 'Wir bieten maßgeschneiderte Weblösungen für alle Anforderungen.',
      portfolio_tag: 'Unsere Arbeiten',
      portfolio_title: 'Premium Vorlagen',
      portfolio_desc: 'Durchsuchen Sie unsere besten Website-Vorlagen.',
      filter_all: 'Alle Typen',
      filter_ecommerce: 'E-Commerce',
      filter_landing: 'Landingpages',
      platforms_tag: 'Plattformen',
      platforms_title: 'Plattformen, mit denen wir arbeiten',
      platforms_desc: 'Wir erstellen Ihre Website mit den besten Technologien der Welt.',
      pricing_tag: 'Preise',
      pricing_title: 'Erschwingliche Lösungen',
      pricing_desc: 'Wählen Sie den besten Preisplan für Ihr Unternehmen.',
      faq_tag: 'FAQ',
      faq_title: 'Häufig gestellte Fragen',
      faq_desc: 'Finden Sie Antworten auf Ihre Fragen.',
      cta_title: 'Erstellen Sie noch heute eine Website für Ihr Unternehmen',
      cta_desc: 'Tausende von Unternehmern vertrauen uns bereits.',
      cta_btn: 'Website-Erstellung starten',
      contact_tag: 'Kontakt',
      contact_title: 'Sprechen Sie mit uns',
      contact_desc: 'Nehmen Sie heute Kontakt auf, um Ihr Projekt zu besprechen.'
    }
  }
};

function applyLanguage(lang) {
  const data = i18nData[lang] || i18nData.bn;
  selectedLanguage = lang;
  localStorage.setItem('websheba_lang', lang);

  // Update Header Lang Flag & Code
  const flagEl = document.getElementById('currentLangFlag');
  const codeEl = document.getElementById('currentLangCode');
  if (flagEl) flagEl.textContent = data.flag;
  if (codeEl) codeEl.textContent = data.code;

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data.texts[key]) {
      // Preserve inner icons if any
      const icon = el.querySelector('i');
      if (icon) {
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = ' ' + data.texts[key] + ' ';
          }
        });
      } else {
        el.textContent = data.texts[key];
      }
    }
  });

  // Re-init typewriter with new language phrases
  if (typeof initTypewriterWithPhrases === 'function') {
    initTypewriterWithPhrases(data.typewriter);
  }
}

function selectLang(lang, btn) {
  applyLanguage(lang);
  closeLangModal();
}

function closeLangModal() {
  const modal = document.getElementById('langOverlay');
  if (modal) {
    modal.style.opacity = '0';
    modal.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
}

// ── Hamburger / Mobile Menu ──────────────────────────────
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

// ── Accordion Functionality ──────────────────────────────
function toggleAccordion(element) {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    if (item !== element) {
      item.classList.remove('active');
    }
  });
  element.classList.toggle('active');
}

// ── FAQ Accordion Functionality ──────────────────────────
function toggleFaq(element) {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    if (item !== element) {
      item.classList.remove('open');
    }
  });
  element.classList.toggle('open');
}

// ── Portfolio Filter ─────────────────────────────────────
function filterPortfolio(category, btn) {
  // Update button state
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter cards
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
      card.style.animation = 'fadeIn 0.4s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// ── Scroll to Top & Header Effects ────────────────────────
window.addEventListener('scroll', () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const header = document.getElementById('mainHeader');

  if (window.scrollY > 300) {
    if (scrollTopBtn) scrollTopBtn.classList.add('visible');
  } else {
    if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
  }

  if (window.scrollY > 50) {
    if (header) header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
  } else {
    if (header) header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ── Contact Form Submission ──────────────────────────────
function submitForm(event) {
  event.preventDefault();
  const btn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> পাঠানো হচ্ছে...';
  }

  setTimeout(() => {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> মেসেজ পাঠান';
    }
    if (successMsg) {
      successMsg.style.display = 'block';
    }
    document.getElementById('contactForm').reset();
  }, 1200);
}

// ── Scroll Animations (Intersection Observer) ────────────
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .portfolio-card, .pricing-card, .why-card, .feature-item, .faq-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ── Live Demo Preview Modal ──────────────────────────────
function openDemoModal(title, category, price, demoUrl) {
  const modal = document.getElementById('demoModalOverlay');
  const titleEl = document.getElementById('demoModalTitle');
  const priceEl = document.getElementById('demoModalPrice');
  const storeNameEl = document.getElementById('storeName');
  const bannerTitleEl = document.getElementById('bannerTitle');
  const orderBtn = document.getElementById('demoOrderBtn');
  const iframeEl = document.getElementById('demoIframe');
  const mockupStoreEl = document.querySelector('.mockup-store');

  if (titleEl) titleEl.textContent = title;
  if (priceEl) priceEl.textContent = price;
  if (storeNameEl) storeNameEl.textContent = title;
  if (bannerTitleEl) bannerTitleEl.textContent = title + ' - ২০২৬ কালেকশন';
  if (orderBtn) {
    orderBtn.href = `https://wa.me/8801954150038?text=Hello,%20I%20want%20to%20order%20the%20demo%20template:%20${encodeURIComponent(title)}`;
  }

  if (demoUrl && iframeEl) {
    iframeEl.src = demoUrl;
    iframeEl.style.display = 'block';
    if (mockupStoreEl) mockupStoreEl.style.display = 'none';
  } else if (iframeEl) {
    iframeEl.src = '';
    iframeEl.style.display = 'none';
    if (mockupStoreEl) mockupStoreEl.style.display = 'block';
  }

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDemoModal() {
  const modal = document.getElementById('demoModalOverlay');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

function setDemoDevice(device, btn) {
  const wrapper = document.getElementById('demoIframeWrapper');
  document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (wrapper) {
    wrapper.className = 'demo-iframe-wrapper ' + device;
  }
}

// ── Template Video Overview Modal ────────────────────────
function openVideoModal() {
  const modal = document.getElementById('videoModalOverlay');
  const iframe = document.getElementById('templateVideoPlayer');
  if (iframe && !iframe.src) {
    iframe.src = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1";
  }
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoModalOverlay');
  const iframe = document.getElementById('templateVideoPlayer');
  if (iframe) {
    iframe.src = "";
  }
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}
