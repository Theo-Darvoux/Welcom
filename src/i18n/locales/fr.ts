import { presidentName, academicYear, type Translation } from "./en";

export const fr: Translation = {
  meta: {
    home: {
      title: "WELCOM’ : BDI de Télécom SudParis et IMT Business-School",
      description:
        "WELCOM, la ruche qui aide les étudiants internationaux à s’installer à Télécom SudParis & IMT-BS, campus d’Évry.",
    },
    guides: { title: "Guides | WELCOM’" },
    team: { title: "Notre équipe | WELCOM’" },
    events: { title: "Événements | WELCOM’" },
    contact: { title: "Contact | WELCOM’" },
  },
  nav: {
    home: "Accueil",
    guides: "Guides",
    team: "Équipe",
    events: "Événements",
    contact: "Contact",
    brandHome: "Accueil Welcom’",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    primary: "Navigation principale",
    language: "Choisissez votre langue",
  },
  hero: {
    titleLead: "Welcom’ à",
    titleAccent: "Évry.",
    lede: "Tout juste arrivé, ou sur le point de l’être ? Nous sommes le club étudiant qui aide les étudiants internationaux à s’installer à l’{INT}, et tout ce qu’il vous faut se trouve ici ! N’hésitez pas à nous contacter !",
    ctaTeam: "Rencontrer l’équipe",
    ctaFollow: "Voir les guides",
  },
  about: {
    eyebrow: "Découvrez la ruche",
    h2: "Le comité d’accueil étudiant de l’{INT}.",
    lede: "Partir vivre dans un nouveau pays est passionnant, et parfois un peu intimidant. C’est là que Welcom’ entre en jeu. Nous sommes l’association étudiante de Télécom SudParis et IMT-BS dédiée à aider les étudiants internationaux à se sentir chez eux dès le premier jour.",
    checklist: [
      "Vous aider à vous installer et à comprendre la vie quotidienne en France",
      "Organiser des événements toute l’année pour rencontrer du monde et se faire des amis",
      "Vous guider à travers la paperasse et le concret",
      "Rendre votre passage à l’INT vraiment inoubliable",
    ],
    closing:
      "Que vous ayez besoin d’un coup de main, envie de participer à un événement, ou simplement de parler avec des gens sympas, Welcom’ est là pour vous.",
    orgaAlt: `L’équipe Welcom’ ${academicYear}, chaque membre représenté en abeille avec son rôle : président, trésorier, secrétaire, communication, événements, et plus encore`,
    orgaCaption: `La ruche ${academicYear} avec toutes ses abeilles !`,
  },
  president: {
    photoAlt: `${presidentName}, président de Welcom’`,
    eyebrow: "Le mot du président",
    p1: "Bonjour, et bienvenue sur le campus de Télécom SudParis et IMT Business School, surnommé « {INT} » par ceux qui le connaissent ! Au nom de toute l’équipe, je suis ravi que vous ayez choisi de rejoindre cette grande famille.",
    p2: "Welcom’ est là pour vous montrer {Evry-thing} de ce que nous avons à offrir, de notre campus jusqu’à Paris et le reste de la France, et pour vous accompagner dans tout ce qui vous semble inconnu, des coutumes françaises aux papiers administratifs.",
    p3: "Notre objectif est simple : s’amuser tous ensemble, faire de notre maison aussi la vôtre et rendre votre expérience ici inoubliable. À très bientôt, j’espère.",
    sign: presidentName,
  },
  events: {
    eyebrow: "Toute l’année",
    h2: "À la ruche, on ne s’ennuie jamais.",
    lede: "Nous organisons des événements tout au long de l’année pour que les étudiants internationaux puissent se faire des amis et vivre pleinement la vie étudiante à l’INT.",
    items: {
      bbq: {
        title: "BBQ de bienvenue",
        body: "Commencez l’année avec de bons petits plats, une chouette compagnie et une façon facile de rencontrer du monde. Le BBQ, c’est là que commence votre année à l’{INT}.",
      },
      trip: {
        title: "Voyage annuel",
        body: "Chaque année, nous partons découvrir un nouvel endroit en Europe ensemble. L’an dernier c’était Amsterdam, et cette année une nouvelle destination nous attend, côte à côte.",
      },
      absinthe: {
        title: "Soirées {AbsINThe}",
        body: "Nous nous associons à {AbsINThe}, le bar de l’école, pour des soirées à thème, des jeux et des moments détendus tout au long de l’année.",
      },
      cultural: {
        title: "Rencontres culturelles",
        body: "Du Global Village aux retrouvailles décontractées, il se passe presque toujours quelque chose à la ruche.",
      },
    },
    photoCaption1: "Global Village",
    photoCaption2: "Saint-Valentin (soirée)",
    photoAlt1: "Des étudiants célébrant les cultures au Global Village",
    photoAlt2: "Une soirée de la Saint-Valentin sur le campus",
  },
  partners: {
    eyebrow: "Avec le soutien de",
    h2: "Les partenaires qui font tourner la ruche.",
    logoAlt: "Logo {name}",
    items: {
      tsp: "Notre école, une école d’ingénieurs spécialisée dans le numérique, les télécoms et l’informatique.",
      imtbs:
        "Institut Mines-Télécom Business School, notre partenaire sur le même campus pour le management et le commerce.",
      sg: "Une banque française qui aide nos étudiants à ouvrir un compte et à se débrouiller financièrement.",
    },
  },
  contactBand: {
    title: "Venez nous dire bonjour.",
    lede: "Des questions avant d’arriver, ou une fois sur place ? Contactez-nous à tout moment, nous serions ravis de vous rencontrer.",
    foyer: "Nous sommes aussi disponibles dans le local Welcom’, au {Foyer}.",
    foyerBtn: "Carte du Foyer",
    foyerAlert: "La carte du Foyer arrive bientôt ! 🗺️🐝",
    instagram: "@welcom_int sur Instagram",
    bises: "Des <em>bises mielleuses</em> ! 🍯🐝",
  },
  footer: {
    tagline:
      "Nous accueillons les étudiants internationaux à Télécom SudParis & IMT-BS, Évry.",
    credits: `© Association Welcom’ ${academicYear} · hébergé par {MiNET} · photos : Club {Déclic}`,
    dev: "Développé par {name}",
    backToTop: "Retour en haut",
    top: "Haut",
  },
  hive: {
    title: "GUIDES",
    peek: "Jeter un œil",
    ariaGrid: "Catégories de guides en nid d’abeille",
    ariaList: "Liste des catégories de guides",
    categories: {
      "getting-here": {
        title: "Arriver",
        description: "Aéroports, RER D, et votre premier jour",
      },
      housing: {
        title: "Logement",
        description: "Résidence Maisel, aide de la CAF, et laverie",
      },
      "admin-aid": {
        title: "Démarches & Aides",
        description: "Titre de séjour, OFII, et assurance",
      },
      "money-phone": {
        title: "Argent & Téléphone",
        description: "Comptes bancaires français, cartes SIM, opérateurs",
      },
      "getting-around": {
        title: "Se déplacer",
        description: "Pass Navigo, sorties à Paris, bus",
      },
      "daily-life": {
        title: "Vie quotidienne",
        description: "Courses, pharmacies, vie de campus",
      },
      studies: {
        title: "Études",
        description: "ECTS, wifi, bibliothèque, et cours",
      },
      "events-buddy": {
        title: "Événements & Parrain",
        description: "BBQ de bienvenue, programme de parrainage, voyages",
      },
    },
  },
  lexicon: {
    INT: "Le nom historique du campus d’Évry, désormais partagé par Télécom SudParis & IMT-BS.",
    Maisel:
      "La Maison des Élèves, les bâtiments de la résidence étudiante du campus où vous allez vivre.",
    AbsINThe:
      "Le bar étudiant adoré du campus, hôte des soirées à thème et des moments détendus.",
    CAF: "Caisse d’Allocations Familiales, l’organisme public français qui vous verse une aide au logement mensuelle (APL).",
    "RER D":
      "La ligne de train régionale qui relie Évry au centre de Paris en 40 minutes.",
    ECTS: "Système européen de transfert de crédits, les crédits académiques nécessaires pour valider vos modules.",
    passifs:
      "Les dettes académiques ou les modules que vous avez ratés et devez repasser pour être diplômé.",
    MiNET:
      "L’association étudiante qui gère le réseau fibre ultra-rapide et le wifi du campus.",
    "Déclic":
      "Le club photo du campus, qui immortalise tous vos moments et événements étudiants.",
    GS: "Le Gymnase des Sports, la salle de sport du campus pour le basket, le badminton et les événements.",
    "Espace T":
      "Espace Technique, l’espace étudiant central à côté du foyer et des associations étudiantes.",
    APL: "Aide Personnalisée au Logement, l’aide au logement gérée par la CAF.",
    "Evry-thing":
      "Un clin d’œil malicieux à Évry, la ville au sud de Paris où se trouve notre campus !",
    Foyer:
      "Le foyer associatif regroupe les locaux des associations du campus. Il est situé entre les bâtiments U1, U4 et l'école.",
    fallback: "Un mot d’argot du campus.",
  },
};
