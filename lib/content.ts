export type Locale = "en" | "cs";

export const assets = {
  heroDesktop: [
    "/figma-assets/hero-desktop-01.png",
    "/figma-assets/hero-desktop-02.png",
    "/figma-assets/hero-desktop-03.png",
  ],
  heroMobile: [
    "/figma-assets/hero-mobile-01.png",
    "/figma-assets/hero-mobile-02.png",
    "/figma-assets/hero-mobile-03.png",
  ],
  hero: [
    "/figma-assets/hero-01.png",
    "/figma-assets/hero-02.png",
    "/figma-assets/hero-03.png",
  ],
  work: [
    "/figma-assets/work-01.png",
    "/figma-assets/work-02.png",
    "/figma-assets/work-03.png",
    "/figma-assets/work-04.png",
    "/figma-assets/work-05.png",
    "/figma-assets/work-06.png",
    "/figma-assets/work-07.png",
    "/figma-assets/work-08.png",
    "/figma-assets/work-09.png",
  ],
  offerIcons: {
    ux: {
      desktop: "/figma-assets/offer-desktop-ux.png",
      mobile: "/figma-assets/offer-desktop-ux.png",
    },
    brand: {
      desktop: "/figma-assets/offer-desktop-brand.png",
      mobile: "/figma-assets/offer-desktop-brand.png",
    },
  },
  profile: "/figma-assets/profile.png",
  logos: [
    { alt: "AWS", src: "/figma-assets/logo-01.png", className: "max-h-6 max-w-[42px] md:max-h-7 md:max-w-[52px]" },
    { alt: "Sitecore", src: "/figma-assets/logo-02.png", className: "max-h-9 max-w-[110px] md:max-h-10 md:max-w-[130px]" },
    { alt: "Nulab", src: "/figma-assets/logo-03.png", className: "max-h-6 max-w-[84px] md:max-h-7 md:max-w-[96px]" },
    { alt: "Gigster", src: "/figma-assets/logo-04.png", className: "max-h-8 max-w-[108px] md:max-h-9 md:max-w-[126px]" },
    { alt: "Volkswagen", src: "/figma-assets/logo-05.png", className: "max-h-9 max-w-[52px] md:max-h-10 md:max-w-[58px]" },
    { alt: "McDrogerie.ch", src: "/figma-assets/logo-06.png", className: "max-h-9 max-w-[132px] md:max-h-10 md:max-w-[162px]" },
    { alt: "Slavia", src: "/figma-assets/logo-07.png", className: "max-h-9 max-w-[108px] md:max-h-10 md:max-w-[128px]" },
    { alt: "Fine Labels", src: "/figma-assets/logo-08.png", className: "max-h-9 max-w-[62px] md:max-h-10 md:max-w-[70px]" },
  ],
};

export const locales = {
  en: {
    locale: "en",
    path: "/",
    alternatePath: "/cs",
    languageLabel: "CZ",
    meta: {
      title: "Jan Michoin - Brand and UX/UI Designer",
      description:
        "Senior brand and UX/UI design partner for strategy, digital products, visual systems, and focused design sprints.",
    },
    nav: {
      items: [
        { label: "Work", href: "#work" },
        { label: "Approach", href: "#approach" },
        { label: "About", href: "#about" },
        { label: "Offers", href: "#offers" },
      ],
      contact: "Contact",
      ariaLabel: "Main navigation",
      mobileAriaLabel: "Mobile navigation",
      toggleLabel: "Toggle menu",
    },
    hero: {
      title: "Bridging strategy, UX and visual design",
      intro: "Branding, UX/UI and digital products",
      introSecondLine: "- without agency overhead or unnecessary complexity.",
      tags: ["UX/UI", "Brand Strategy", "Digital Products", "Visual Systems"],
    },
    work: {
      title: "You will get",
      carouselLabel: "Selected work preview",
      offers: [
        {
          title: "Digital Products & UX Strategy",
          items: ["UX audits", "Research", "Flows & structure", "Testing", "Product thinking"],
          cta: "Explore UX work",
          href: "https://michoin.myportfolio.com/",
        },
        {
          title: "Premium Brands & Visual Direction",
          items: ["Identity systems", "UI design", "Art direction", "Campaign", "Motion & print"],
          cta: "Explore branding work",
          href: "https://michoin.com/",
        },
      ],
    },
    approach: {
      struggleTitle: "Why companies struggle with design collaboration",
      issues: [
        {
          title: "Agencies are expensive and slow",
          body: "Too many people, too many meetings, too much process.",
        },
        {
          title: "Freelancers often lack strategic thinking",
          body: "Nice visuals, weak UX, unclear business impact.",
        },
        {
          title: "Visually weak execution",
          body: "Technically correct but undifferentiated, with no clear brand edge.",
        },
      ],
      partnerTitle: "One senior partner across strategy, UX and visual execution.",
      outcomes: ["Less overhead", "Faster iterations", "Better consistency", "Stronger outcomes"],
      flow: ["understand", "define", "design", "test & refine", "ship"],
    },
    process: {
      title: "How I work",
      workWithTitle: "I typically work with",
      workWith: [
        "SaaS & digital products",
        "Technology companies",
        "Design-driven brands",
        "Cultural & creative projects",
        "Growing teams needing senior design support",
      ],
      availabilityTitle: "Available for",
      availability: [
        "Focused design sprints",
        "Project-based collaborations",
        "Long-term product support",
        "Senior freelance partnerships",
        "Remote design direction",
      ],
    },
    trust: {
      title: "Why clients work with me",
      portraitAlt: "Portrait of Jan Michoin",
      items: [
        "One partner from discovery to execution",
        "Brand + UX combined - fewer handoffs",
        "Enterprise and startup experience",
        "Faster iteration through AI-supported workflows",
        "International collaboration experience",
        "Systems thinking without losing visual quality",
        "Speaks: English, Spanish, Czech",
        "15+ years of experience",
      ],
    },
    offers: {
      title: "Offers",
      idealFor: "Ideal for",
      items: [
        {
          title: "UX Audit Sprint",
          duration: "1-2 weeks",
          details: ["UX analysis", "Friction mapping / Recommendations", "Optional redesign"],
          idealFor: "SaaS products, internal tools, e-commerce and digital platforms.",
          price: "EUR 800-1500",
        },
        {
          title: "Branding Sprint",
          duration: "4 weeks",
          details: ["Positioning / Branding", "Visual direction", "UI design"],
          idealFor: "Startups, technology companies and cultural projects.",
          price: "from EUR 1500-3000",
        },
        {
          title: "Ongoing Partnership",
          duration: "Monthly retainer",
          details: ["Ongoing UX/UI", "Strategic support", "Rapid iterations"],
          idealFor: "Growing teams needing consistent senior design support.",
          price: "from EUR 1200+",
        },
      ],
    },
    contact: {
      title: "Let's discuss your project",
      intro:
        "Whether you need UX clarity, a stronger visual direction or a senior design partner for your team, feel free to reach out.",
      formLabel: "Contact form",
      fields: {
        name: "Your name",
        email: "Your email",
        company: "Your company",
        message: "How can I help you",
      },
      send: "Send",
      sending: "Sending...",
      success: "Thanks, your message has been sent.",
      error: "Something went wrong. Please try again.",
    },
  },
  cs: {
    locale: "cs",
    path: "/cs",
    alternatePath: "/",
    languageLabel: "EN",
    meta: {
      title: "Jan Michoin - brandový a UX/UI designer",
      description:
        "Seniorní partner pro brand, UX/UI, digitální produkty, vizuální systémy a soustředěné design sprinty.",
    },
    nav: {
      items: [
        { label: "Work", href: "#work" },
        { label: "Approach", href: "#approach" },
        { label: "About", href: "#about" },
        { label: "Offers", href: "#offers" },
      ],
      contact: "Contact",
      ariaLabel: "Hlavní navigace",
      mobileAriaLabel: "Mobilní navigace",
      toggleLabel: "Otevřít menu",
    },
    hero: {
      title: "Propojuji strategii, UX a vizuální design",
      intro: "Branding, UX/UI a digitální produkty",
      introSecondLine: "- bez agenturní režie a zbytečné složitosti.",
      tags: ["UX/UI", "Brand strategie", "Digitální produkty", "Vizuální systémy"],
    },
    work: {
      title: "Co získáte",
      carouselLabel: "Vybrané ukázky práce",
      offers: [
        {
          title: "Digitální produkty & UX strategie",
          items: ["UX audit", "uživatelský výzkum", "Flows & informační architektura", "Testing", "vývoj produktu"],
          cta: "Příklady UX projektů",
          href: "https://michoin.myportfolio.com/",
        },
        {
          title: "Prémiové značky & vizuální směr",
          items: ["systém vizuální identity", "UI design", "Art direction", "kampaně", "animace & print"],
          cta: "Příklady branding projektů",
          href: "https://michoin.com/",
        },
      ],
    },
    approach: {
      struggleTitle: "Proč firmám vázne spolupráce na designu",
      issues: [
        {
          title: "Agentury jsou drahé a pomalé",
          body: "Příliš mnoho lidí, schůzek a procesu kolem každého rozhodnutí.",
        },
        {
          title: "Freelanceři často postrádají strategii",
          body: "Pěkné vizuály, ale slabé UX a nejasný dopad na byznys.",
        },
        {
          title: "Výstupy jsou vizuálně slabé",
          body: "Technicky správné, ale zaměnitelné, bez jasné brandové hrany.",
        },
      ],
      partnerTitle: "Jeden seniorní partner pro strategii, UX i vizuální ztvárnění",
      outcomes: ["Méně agenturní režie", "Rychlejší iterace", "Větší konzistence", "Kvalitnější výsledky"],
      flow: ["Porozumění", "definice problémů", "design", "test & iterace", "dodání"],
    },
    process: {
      title: "Jak Pracuji",
      workWithTitle: "Většinou spolupracuji s",
      workWith: [
        "SaaS & digitální produkty",
        "Technologické firmy",
        "Designově orientované značky",
        "Kulturní & kreativní projekty",
        "Rostoucí týmy, které potřebují seniorní design podporu",
      ],
      availabilityTitle: "Jsem k dispozici pro",
      availability: [
        "rychlé design sprinty",
        "Projektové spolupráce",
        "Dlouhodobou produktovou podporu",
        "Seniorní freelance partnerství",
        "Remote design direction",
      ],
    },
    trust: {
      title: "Proč se mnou klienti spolupracují",
      portraitAlt: "Portrét Jana Michoina",
      items: [
        "Jeden partner od discovery po realizaci",
        "Propojení Brandingu + UX",
        "Zkušenosti z korporací i startupů",
        "Rychlejší iterace díky AI-supported workflow",
        "Mezinárodní spolupráce",
        "Systémové myšlení bez ztráty vizuální kvality",
        "Jazyky: angličtina, španělština, čeština",
        "15+ let zkušeností",
      ],
    },
    offers: {
      title: "Nabídka",
      idealFor: "Vhodné pro",
      items: [
        {
          title: "UX Audit Sprint",
          duration: "1-2 týdny",
          details: ["UX analýza", "Mapování problémů / doporučení", "Volitelný redesign"],
          idealFor: "SaaS, interní nástroje, e-commerce a digitální platformy.",
          price: "€800–1500",
        },
        {
          title: "Branding Sprint",
          duration: "4 týdny",
          details: ["Positioning / branding", "Vizuální směr", "UI design"],
          idealFor: "Startupy, technologické firmy a kulturní projekty.",
          price: "from €1500–3000",
        },
        {
          title: "Dlouhodobá spolupráce",
          duration: "Měsíční retainer",
          details: ["Průběžné UX/UI", "Strategická podpora", "Rychlé iterace"],
          idealFor: "Rostoucí týmy, které potřebují konzistentní seniorní design podporu.",
          price: "from €1200+",
        },
      ],
    },
    contact: {
      title: "Pojďme probrat váš projekt",
      intro:
        "Ať už potřebujete vyjasnit UX, posílit vizuální směr nebo seniorního design partnera pro váš tým, ozvěte se.",
      formLabel: "Kontaktní formulář",
      fields: {
        name: "Vaše jméno",
        email: "Váš email",
        company: "Firma",
        message: "S čím vám mohu pomoct",
      },
      send: "Odeslat",
      sending: "Odesílám...",
      success: "Díky, vaše zpráva byla odeslána.",
      error: "Něco se nepovedlo. Zkuste to prosím znovu.",
    },
  },
} as const;

export type PageContent = (typeof locales)[Locale];
