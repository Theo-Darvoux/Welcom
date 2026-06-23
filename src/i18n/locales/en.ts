/* English copy: the canonical Translation shape every other locale must match.
   {Term} placeholders resolve to glossary terms (keys in `lexicon`) via <RichText>. */

export const presidentName = "Manuel";

/** Current academic year, single source of truth across locales. */
export const academicYear = "2026-2027";

export const developerName = "Théo DARVOUX";
export const developerLink = "https://github.com/Theo-Darvoux";

export const en = {
  meta: {
    home: {
      title: "WELCOM’ : BDI of Télécom SudParis and IMT Business-School",
      description:
        "WELCOM, the hive that helps international students settle in at Télécom SudParis & IMT-BS, Évry campus.",
    },
    guides: { title: "Guides | WELCOM’" },
    team: { title: "Our Team | WELCOM’" },
    events: { title: "Events | WELCOM’" },
    contact: { title: "Contact | WELCOM’" },
  },
  nav: {
    home: "Home",
    guides: "Guides",
    team: "Team",
    events: "Events",
    contact: "Contact",
    brandHome: "Welcom’ home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primary: "Primary",
    language: "Choose your language",
  },
  hero: {
    titleLead: "Welcom’ to",
    titleAccent: "Évry.",
    lede: "Just arrived, or about to? We’re the student club that helps international students settle into life at {INT}, and everything you need is right here! Feel free to contact us!",
    ctaTeam: "Meet the team",
    ctaGuides: "View guides",
  },
  about: {
    eyebrow: "Meet the hive",
    h2: "The student-run welcome committee at {INT}.",
    lede: "Moving to a new country is exciting, and maybe a little overwhelming. That’s where Welcom’ comes in. We’re the student association at Télécom SudParis and IMT-BS dedicated to helping international students feel at home from day one.",
    checklist: [
      "Help you settle in and understand French daily life",
      "Run events all year so you meet people and make friends",
      "Walk you through paperwork and the practical stuff",
      "Make your time at INT genuinely unforgettable",
    ],
    closing:
      "Whether you need a hand, want to join an event, or just want to talk to friendly people, Welcom’ is here for you.",
    orgaAlt: `The ${academicYear} Welcom’ team, each member shown as a bee with their role: president, treasurer, secretary, communication, events, and more`,
    orgaCaption: `The ${academicYear} hive with all its bees!`,
  },
  president: {
    photoAlt: `${presidentName}, president of Welcom’`,
    eyebrow: "A word from the president",
    p1: "Hello, and welcome to the Télécom SudParis and IMT Business School campus, known as “{INT}” to those in the know! On behalf of the whole team, I’m so glad you’ve chosen to join this big family.",
    p2: "Welcom’ is here to show you {Evry-thing} we have to offer, from our campus all the way to Paris and the rest of France, and to help you through anything unfamiliar along the way, from French customs to administrative papers.",
    p3: "Our goal is simple: to have fun all together, to make our home yours too, and to make your time here unforgettable. Hope to see you soon.",
    sign: presidentName,
  },
  events: {
    eyebrow: "All year round",
    h2: "There's always something buzzing.",
    lede: "We organise events throughout the year so international students can make friends and live student life at INT to the fullest.",
    items: {
      bbq: {
        title: "Welcome BBQ",
        body: "Start the year with good food, great company, and an easy way to meet people. The BBQ is where your year at {INT} begins.",
      },
      trip: {
        title: "Annual trip",
        body: "Every year we travel somewhere new in Europe together. Last year was Amsterdam, and this year we have somewhere new to discover side by side.",
      },
      absinthe: {
        title: "{AbsINThe} nights",
        body: "We team up with {AbsINThe}, the school bar, for themed nights, games, and relaxed evenings throughout the year.",
      },
      cultural: {
        title: "Cultural meetups",
        body: "From the {Global Village} to casual hangouts, there is almost always something happening at the hive.",
      },
    },
    photoCaption1: "{Global Village}",
    photoCaption2: "Valentine's Day (party)",
    photoAlt1: "Students celebrating cultures at the Global Village",
    photoAlt2: "A Valentine's Day party on campus",
  },
  partners: {
    eyebrow: "With the support of",
    h2: "Partners who help the hive run.",
    logoAlt: "{name} logo",
    items: {
      tsp: "Our home school, an engineering school for digital technologies, telecoms, and computer science.",
      imtbs:
        "Institut Mines-Télécom Business School, our partner on the same campus for management and business.",
      sg: "A French bank that helps our students open an account and find their feet financially.",
    },
  },
  contactBand: {
    title: "Come say hi.",
    lede: "Questions before you arrive, or once you’re here? Reach out anytime, we’d love to meet you.",
    foyer: "We are also available in the Welcom’ room, at the {Foyer}.",
    foyerBtn: "Foyer Map",
    foyerAlert: "The Foyer map is coming soon! 🗺️🐝",
    instagram: "@welcom_int on Instagram",
    bises: "Honeyed kisses, or <em>bises mielleuses</em>! 🍯🐝",
  },
  contactPage: {
    heroTitle: "Get in touch.",
    heroLede: "Whether you have questions about arriving, campus life, or just want to say hello, we're all ears. Drop us a message and we'll buzz back!",
    formTitle: "Send us a message",
    formName: "Your name",
    formNamePlaceholder: "e.g. Alex Dupont",
    formEmail: "Your email",
    formEmailPlaceholder: "e.g. alex@example.com",
    formTopic: "What's it about?",
    formTopicOptions: {
      general: "General question",
      preArrival: "Before I arrive",
      onCampus: "I'm already on campus",
      events: "Events & activities",
      partnership: "Partnership / sponsorship",
      other: "Something else",
    },
    formMessage: "Your message",
    formMessagePlaceholder: "Tell us what's on your mind…",
    formSend: "Send the bee! 🐝",
    formNote: "This will open your email app with the message pre-filled.",
    directTitle: "Or reach us directly",
    directEmail: "Email",
    directInstagram: "Instagram",
    directAddress: "Address",
    directAddressValue: "9 Rue Charles Fourier,\n91011 Évry-Courcouronnes",
    directFoyer: "You can also find us in person at the {Foyer}.",
    teamTitle: "Welcom' Contacts",
    presidentRole: "President of Welcom’",
    respoAccueilRole: "Welcome Manager of Welcom’",
    faqTitle: "Common questions",
    faq: [
      {
        q: "When should I contact Welcom'?",
        a: "Anytime! Whether you haven't arrived yet or you're already on campus, we're here to help.",
      },
      {
        q: "Do I need to speak French?",
        a: "Not at all. We speak multiple languages, and you can always write to us in English.",
      },
      {
        q: "How quickly do you reply?",
        a: "We reply as quickly as possible.",
      },
      {
        q: "Can I visit the Welcom' office?",
        a: "Yes! Come to the Foyer during our open hours.",
      },
      {
        q: "I'm not a student yet. Can I still contact you?",
        a: "Absolutely. Many incoming students reach out months before arriving. We love early birds!",
      },
    ],
  },
  eventsPage: {
    heroTitle: "A year of good buzz.",
    heroLede:
      "From your very first BBQ to the {Global Village}, the hive throws something almost every month. Here's a taste of what's waiting for you.",
    featuredEyebrow: "The big ones",
    featuredTitle: "Three dates worth circling on your calendar.",
    globalVillage: {
      title: "Global Village",
      body: "Our flagship evening. Students set up stands in the colors of their countries, cook traditional dishes, and share music, dance, and stories. Cultures from all over the world are gathered at the school forum during the {Global Village}.",
      photoAlt: "Students celebrating their cultures at the Global Village",
      photoCaption: "{Global Village}",
      aftermovieTitle: "Watch the 2024 after movie 🎬",
    },
    valentines: {
      title: "Valentine's party",
      body: "Single, in a relationship, or just here for the {ritz}: everyone is invited. On the agenda: music, games, and a Valentine's Day themed evening!",
      photoAlt: "Students at a Valentine's party on campus",
      photoCaption: "Valentine's party",
    },
    trip: {
      title: "The Amsterdam trip",
      body: "Our second-biggest event of the year, right behind the {Global Village}. The entire campus lands in Amsterdam for a weekend: restaurants, museums, late-night strolls along the water, to bring students in the cohort closer together and let you discover the city of Amsterdam!",
      photoAlt: "Students together on the annual trip to Amsterdam",
      photoCaption: "Amsterdam",
    },
    yearRoundEyebrow: "All year round",
    yearRoundTitle: "And plenty more",
    yearRoundLede:
      "The hive keeps buzzing all year. Some events are ours, some are just good excuses to celebrate together. Either way, they're all a chance to meet people.",
    yearRound: {
      bbq: {
        title: "Welcome BBQ",
        body: "Good food, great company, and the easiest way to meet people. The BBQ is where your year at {INT} begins.",
      },
      absinthe: {
        title: "{AbsINThe} nights",
        body: "Themed evenings, games, and relaxed nights at the school bar, {ACO} for short, all year long.",
      },
      stpatrick: {
        title: "Saint Patrick's Day",
        body: "Green everywhere, lively music, and a cheerful nod to Irish culture, the hive's way.",
      },
      oktoberfest: {
        title: "Oktoberfest",
        body: "A festive atmosphere, big communal tables, and traditional specialties to celebrate the famous beer festival.",
      },
    },
    suggestBand: {
      eyebrow: "Your culture, your event",
      title: "What should we celebrate next?",
      body: "Over 40 nationalities call this campus home, and each one has something worth celebrating together. Diwali, Lunar New Year, Eid, Carnival, a dish you miss from home... You too can suggest events for us to organize!",
      cta: "Suggest an event",
    },
    ctaTitle: "Don't miss the next one.",
    ctaLede:
      "We publish every event on the campus calendar. Check it and you won't miss a thing.",
    ctaMinet: "Campus calendar",
    calNoEvents: "No events this week.",
    calPrevWeek: "Previous week",
    calNextWeek: "Next week",
  },
  footer: {
    tagline:
      "Welcoming international students at Télécom SudParis & IMT-BS, Évry.",
    credits: `© Association Welcom’ ${academicYear} · hosted by {MiNET} · photos: Club {Déclic}`,
    dev: "Developed by {name}",
    backToTop: "Back to top",
    top: "Top",
  },
  hive: {
    title: "GUIDES",
    peek: "Peek inside",
    ariaGrid: "Guides categories honeycomb",
    ariaList: "Guides categories list",
    categories: {
      "getting-here": {
        title: "Getting Here",
        description: "Airports, RER D train, and your first day",
      },
      housing: {
        title: "Housing",
        description: "Maisel residence, CAF aid, and laundry",
      },
      "admin-aid": {
        title: "Admin & Aid",
        description: "Titre de séjour, OFII, and insurance",
      },
      "money-phone": {
        title: "Money & Phone",
        description: "French bank accounts, SIM cards, operators",
      },
      "getting-around": {
        title: "Getting Around",
        description: "Navigo pass, Paris trips, buses",
      },
      "daily-life": {
        title: "Daily Life",
        description: "Groceries, pharmacies, campus life",
      },
      studies: {
        title: "Studies",
        description: "ECTS, wifi, library, and courses",
      },
      "events-buddy": {
        title: "Events & Buddy",
        description: "Welcome BBQ, buddy program, trips",
      },
    },
  },
  lexicon: {
    INT: "The historic name of the Évry campus, now shared by Télécom SudParis & IMT-BS.",
    Maisel:
      "Maison des Élèves, the campus student residence blocks where you will live.",
    AbsINThe:
      "The beloved student-run campus bar, host to theme nights and relaxed evenings.",
    ACO: "AbsINThe Chill Out, the name for the themed evenings hosted at the AbsINThe campus bar.",
    CAF: "Caisse d’Allocations Familiales, the French government agency that pays you monthly housing aid (APL).",
    "RER D":
      "The regional train line connecting Évry to the centre of Paris in 40 minutes.",
    ECTS: "European Credit Transfer System, the academic credits you need to validate your modules.",
    passifs:
      "Academic backlogs or modules you failed and need to retake to graduate.",
    MiNET:
      "The student association that runs the super-fast campus fibre network and wifi.",
    "Déclic":
      "The campus photography club, documenting all your student moments and events.",
    GS: "Gymnase des Sports, the campus sports hall for basketball, badminton, and events.",
    "Espace T":
      "Espace Technique, the central student area next to the foyer and student associations.",
    APL: "Aide Personnalisée au Logement, the housing subsidy programme run by CAF.",
    "Evry-thing":
      "A cheeky pun on Évry, the city south of Paris where our campus is located!",
    Foyer:
      "The student center (foyer) houses the offices of the campus student associations. It is located between buildings U1, U4, and the school.",
    "Global Village":
      "An evening where students set up stands in the colors of their countries, cook traditional specialties, and share their cultures at the school forum.",
    ritz:
      "The name given to the free food offered during events, named after the school's restaurant, the Rits, with a cheeky nod to the famous Parisian hotel, the Ritz.",
    fallback: "A campus slang word.",
  },
};

export type Translation = typeof en;
