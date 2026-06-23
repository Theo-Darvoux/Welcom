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
    ctaGuides: "Voir les guides",
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
    lede: "Nous organisons des événements tout au long de l’année pour que les étudiants internationaux puissent se faire des amis et profiter à fond de la vie étudiante à l’{INT}.",
    items: {
      bbq: {
        title: "BBQ de bienvenue",
        body: "Un barbecue simple et convivial pour faire connaissance. C’est le meilleur moyen de lancer votre année à l’{INT} !",
      },
      trip: {
        title: "Voyage annuel",
        body: "Chaque année, on part ensemble découvrir une ville européenne. Après Amsterdam l’an dernier, préparez-vous pour la prochaine destination !",
      },
      absinthe: {
        title: "Soirées {AbsINThe}",
        body: "En partenariat avec le bar de l’école, nous vous proposons des soirées à thème, des jeux et des moments de détente tout au long de l’année.",
      },
      cultural: {
        title: "Rencontres culturelles",
        body: "Du {Global Village} aux soirées plus informelles, il y a toujours une occasion de se retrouver à la ruche.",
      },
    },
    photoCaption1: "{Global Village}",
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
  contactPage: {
    heroTitle: "Contactez-nous.",
    heroLede: "Que vous ayez des questions sur votre arrivée, la vie sur le campus, ou envie de simplement dire bonjour, nous sommes tout ouïe. Envoyez-nous un message et nous vous répondrons vite !",
    formTitle: "Envoyez-nous un message",
    formName: "Votre nom",
    formNamePlaceholder: "ex. Alex Dupont",
    formEmail: "Votre email",
    formEmailPlaceholder: "ex. alex@exemple.com",
    formTopic: "C'est à quel sujet ?",
    formTopicOptions: {
      general: "Question générale",
      preArrival: "Avant mon arrivée",
      onCampus: "Je suis déjà sur le campus",
      events: "Événements et activités",
      partnership: "Partenariat / sponsoring",
      other: "Autre chose",
    },
    formMessage: "Votre message",
    formMessagePlaceholder: "Dites-nous ce qui vous trotte dans la tête…",
    formSend: "Envoyer l'abeille ! 🐝",
    formNote: "Cela ouvrira votre application mail avec le message pré-rempli.",
    directTitle: "Ou contactez-nous directement",
    directEmail: "Email",
    directInstagram: "Instagram",
    directAddress: "Adresse",
    directAddressValue: "9 Rue Charles Fourier,\n91011 Évry-Courcouronnes",
    directFoyer: "Vous pouvez aussi nous trouver en personne au {Foyer}.",
    teamTitle: "Contacts Welcom'",
    presidentRole: "Président de Welcom’",
    respoAccueilRole: "Responsable Accueil de Welcom’",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Quand contacter Welcom' ?",
        a: "À tout moment ! Que vous ne soyez pas encore arrivé ou déjà sur le campus, nous sommes là pour vous aider.",
      },
      {
        q: "Dois-je parler français ?",
        a: "Pas du tout. Nous parlons plusieurs langues, et vous pouvez toujours nous écrire en anglais.",
      },
      {
        q: "En combien de temps répondez-vous ?",
        a: "Nous répondons le plus rapidement possible.",
      },
      {
        q: "Puis-je visiter le bureau Welcom' ?",
        a: "Oui ! Venez au Foyer pendant nos heures d'ouverture.",
      },
      {
        q: "Je ne suis pas encore étudiant. Puis-je quand même vous contacter ?",
        a: "Absolument. Beaucoup de futurs étudiants nous contactent des mois avant d'arriver. On adore les prévoyants !",
      },
    ],
  },
  eventsPage: {
    heroTitle: "Une année pleine de buzz.",
    heroLede:
      "De votre tout premier BBQ jusqu’au {Global Village}, la ruche organise quelque chose presque chaque mois. Voici un avant-goût de ce qui vous attend.",
    featuredEyebrow: "Les incontournables",
    featuredTitle: "Trois dates à entourer sur votre calendrier.",
    globalVillage: {
      title: "Global Village",
      body: "Notre soirée phare. Les étudiants tiennent des stands aux couleurs de leur pays, cuisinent des plats traditionnels et partagent musique, danse et histoires. Les cultures du monde entier sont réunies au forum de l'école au cours du {Global Village}.",
      photoAlt: "Des étudiants célébrant leurs cultures au Global Village",
      photoCaption: "{Global Village}",
      aftermovieTitle: "Regardez l’aftermovie de 2024 🎬",
    },
    valentines: {
      title: "Soirée de la Saint-Valentin",
      body: "Célibataire, en couple, ou juste là pour le {ritz} : tout le monde est invité. Au programme, de la musique, des jeux et une soirée aux couleurs de la Saint-Valentin !",
      photoAlt: "Des étudiants à une soirée de la Saint-Valentin sur le campus",
      photoCaption: "Saint-Valentin",
    },
    trip: {
      title: "Le voyage à Amsterdam",
      body: "Notre deuxième plus gros événement de l’année, juste derrière le {Global Village}. Tout le campus débarque à Amsterdam le temps d’un week-end : restaurants, musées, balades nocturnes au bord de l’eau, pour rapprocher les étudiants de la promo et vous faire découvrir la ville d'Amsterdam !",
      photoAlt: "Des étudiants réunis lors du voyage annuel à Amsterdam",
      photoCaption: "Amsterdam",
    },
    yearRoundEyebrow: "Toute l’année",
    yearRoundTitle: "Et plein d’autres moments",
    yearRoundLede:
      "La ruche s’active toute l’année. Que ce soit pour nos événements ou simplement pour se retrouver, c'est toujours le moment idéal pour faire de nouvelles rencontres.",
    yearRound: {
      bbq: {
        title: "BBQ de bienvenue",
        body: "Un barbecue simple et convivial pour faire connaissance. C’est le meilleur moyen de lancer votre année à l’{INT} !",
      },
      absinthe: {
        title: "Soirées {AbsINThe}",
        body: "Des soirées à thème, des jeux et des moments chill au bar de l’école, les {ACO}, tout au long de l’année.",
      },
      stpatrick: {
        title: "Saint-Patrick",
        body: "Du vert, de la musique et une ambiance festive pour célébrer la culture irlandaise à notre façon.",
      },
      oktoberfest: {
        title: "Oktoberfest",
        body: "Une ambiance festive, de grandes tablées et des spécialités à partager pour célébrer la célèbre fête de la bière.",
      },
    },
    suggestBand: {
      eyebrow: "Ta culture, ton événement",
      title: "Qu'est-ce qu'on célèbre ensuite ?",
      body: "Plus de 40 nationalités se croisent sur ce campus, et chacune a quelque chose qui mérite d'être fêté ensemble. Diwali, Nouvel An lunaire, Aïd, Carnaval, un plat qui te manque de chez toi... Toi aussi tu peux nous proposer des évènements à organiser !",
      cta: "Proposer un événement",
    },
    ctaTitle: "Ne ratez pas la prochaine.",
    ctaLede:
      "Tous nos événements sont publiés sur le calendrier du campus. Consultez-le et ne ratez plus rien.",
    ctaMinet: "Calendrier du campus",
    calNoEvents: "Aucun événement cette semaine.",
    calPrevWeek: "Semaine précédente",
    calNextWeek: "Semaine suivante",
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
    ACO: "AbsINThe Chill Out, le nom des soirées à thème organisées au bar étudiant AbsINThe.",
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
    "Global Village":
      "Une soirée où les étudiants tiennent des stands aux couleurs de leur pays, cuisinent leurs spécialités et partagent leur culture au forum de l'école.",
    ritz:
      "Nom donné à la nourriture gratuite proposée lors des événements. Il tire son nom du Rits, le restaurant de l'école, et fait un clin d'œil au Ritz, le célèbre palace parisien.",
    fallback: "Un mot d’argot du campus.",
  },
};
