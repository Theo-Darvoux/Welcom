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
      "Our flagship cultural event where students showcase their heritage through food, music, dance, and stories, a celebration of the diversity that makes our campus community so rich.",
    fallback: "A campus slang word.",
  },
};

export type Translation = typeof en;
