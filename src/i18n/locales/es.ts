import { presidentName, academicYear, type Translation } from "./en";

export const es: Translation = {
  meta: {
    home: {
      title: "WELCOM’ : BDI de Télécom SudParis e IMT Business-School",
      description:
        "WELCOM, la colmena que ayuda a los estudiantes internacionales a instalarse en Télécom SudParis e IMT-BS, campus de Évry.",
    },
    guides: { title: "Guías | WELCOM’" },
    team: { title: "Nuestro equipo | WELCOM’" },
    events: { title: "Eventos | WELCOM’" },
    contact: { title: "Contacto | WELCOM’" },
  },
  nav: {
    home: "Inicio",
    guides: "Guías",
    team: "Equipo",
    events: "Eventos",
    contact: "Contacto",
    brandHome: "Inicio de Welcom’",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    primary: "Navegación principal",
    language: "Elige tu idioma",
  },
  hero: {
    titleLead: "Welcom’ a",
    titleAccent: "Évry.",
    lede: "¿Acabas de llegar o estás a punto? Somos el club estudiantil que ayuda a los estudiantes internacionales a instalarse en {INT}, ¡y todo lo que necesitas está aquí! ¡No dudes en contactarnos!",
    ctaTeam: "Conoce al equipo",
    ctaGuides: "Ver las guías",
  },
  about: {
    eyebrow: "Conoce la colmena",
    h2: "El comité de bienvenida estudiantil de {INT}.",
    lede: "Mudarse a un nuevo país es emocionante, y quizá un poco abrumador. Ahí es donde entra Welcom’. Somos la asociación estudiantil de Télécom SudParis e IMT-BS dedicada a ayudar a los estudiantes internacionales a sentirse como en casa desde el primer día.",
    checklist: [
      "Ayudarte a instalarte y a entender la vida cotidiana en Francia",
      "Organizar eventos todo el año para que conozcas gente y hagas amigos",
      "Acompañarte con el papeleo y lo práctico",
      "Hacer que tu paso por INT sea realmente inolvidable",
    ],
    closing:
      "Ya sea que necesites una mano, quieras unirte a un evento o simplemente hablar con gente amable, Welcom’ está aquí para ti.",
    orgaAlt: `El equipo de Welcom’ ${academicYear}, cada miembro representado como una abeja con su rol: presidente, tesorero, secretario, comunicación, eventos y más`,
    orgaCaption: `¡La colmena ${academicYear} con todas sus abejas!`,
  },
  president: {
    photoAlt: `${presidentName}, presidente de Welcom’`,
    eyebrow: "Unas palabras del presidente",
    p1: "¡Hola, y bienvenido al campus de Télécom SudParis e IMT Business School, conocido como «{INT}» entre los que están al tanto! En nombre de todo el equipo, me alegra muchísimo que hayas decidido unirte a esta gran familia.",
    p2: "Welcom’ está aquí para mostrarte {Evry-thing} lo que tenemos para ofrecer, desde nuestro campus hasta París y el resto de Francia, y para acompañarte en todo lo que te resulte desconocido, desde las costumbres francesas hasta los trámites administrativos.",
    p3: "Nuestro objetivo es sencillo: divertirnos todos juntos, hacer de nuestra casa también la tuya y hacer que tu estancia aquí sea inolvidable. Espero verte pronto.",
    sign: presidentName,
  },
  events: {
    eyebrow: "Todo el año",
    h2: "En la colmena nunca te aburres.",
    lede: "Organizamos eventos durante todo el año para que los estudiantes internacionales hagan amigos y vivan al máximo la vida estudiantil en INT.",
    items: {
      bbq: {
        title: "BBQ de bienvenida",
        body: "Empieza el año con buena comida, buena compañía y una forma fácil de conocer gente. El BBQ es donde comienza tu año en {INT}.",
      },
      trip: {
        title: "Viaje anual",
        body: "Cada año viajamos juntos a un lugar nuevo de Europa. El año pasado fue Ámsterdam, y este año tenemos un nuevo destino por descubrir, codo con codo.",
      },
      absinthe: {
        title: "Noches en {AbsINThe}",
        body: "Nos unimos a {AbsINThe}, el bar de la escuela, para noches temáticas, juegos y veladas relajadas durante todo el año.",
      },
      cultural: {
        title: "Encuentros culturales",
        body: "Desde el {Global Village} hasta quedadas informales, casi siempre hay algo en la colmena.",
      },
    },
    photoCaption1: "{Global Village}",
    photoCaption2: "San Valentín (fiesta)",
    photoAlt1: "Estudiantes celebrando las culturas en el Global Village",
    photoAlt2: "Una fiesta de San Valentín en el campus",
  },
  partners: {
    eyebrow: "Con el apoyo de",
    h2: "Socios que hacen funcionar la colmena.",
    logoAlt: "Logo de {name}",
    items: {
      tsp: "Nuestra escuela, una escuela de ingeniería especializada en tecnologías digitales, telecomunicaciones e informática.",
      imtbs:
        "Institut Mines-Télécom Business School, nuestro socio en el mismo campus para gestión y negocios.",
      sg: "Un banco francés que ayuda a nuestros estudiantes a abrir una cuenta y a manejarse económicamente.",
    },
  },
  contactBand: {
    title: "Ven a saludar.",
    lede: "¿Preguntas antes de llegar, o ya estando aquí? Escríbenos cuando quieras, nos encantaría conocerte.",
    foyer: "También estamos disponibles en la sala Welcom’, en el {Foyer}.",
    foyerBtn: "Mapa del Foyer",
    foyerAlert: "¡El mapa del Foyer estará disponible pronto! 🗺️🐝",
    instagram: "@welcom_int en Instagram",
    bises: "¡Besos de miel, o <em>bises mielleuses</em>! 🍯🐝",
  },
  footer: {
    tagline:
      "Damos la bienvenida a los estudiantes internacionales en Télécom SudParis e IMT-BS, Évry.",
    credits: `© Association Welcom’ ${academicYear} · alojado por {MiNET} · fotos: Club {Déclic}`,
    dev: "Desarrollado por {name}",
    backToTop: "Volver arriba",
    top: "Arriba",
  },
  hive: {
    title: "GUÍAS",
    peek: "Echa un vistazo",
    ariaGrid: "Categorías de guías en panal",
    ariaList: "Lista de categorías de guías",
    categories: {
      "getting-here": {
        title: "Cómo llegar",
        description: "Aeropuertos, tren RER D y tu primer día",
      },
      housing: {
        title: "Alojamiento",
        description: "Residencia Maisel, ayuda de la CAF y lavandería",
      },
      "admin-aid": {
        title: "Trámites y ayudas",
        description: "Titre de séjour, OFII y seguro",
      },
      "money-phone": {
        title: "Dinero y teléfono",
        description: "Cuentas bancarias francesas, tarjetas SIM, operadores",
      },
      "getting-around": {
        title: "Moverse",
        description: "Abono Navigo, salidas a París, autobuses",
      },
      "daily-life": {
        title: "Vida diaria",
        description: "Compras, farmacias, vida de campus",
      },
      studies: {
        title: "Estudios",
        description: "ECTS, wifi, biblioteca y cursos",
      },
      "events-buddy": {
        title: "Eventos y padrino",
        description: "BBQ de bienvenida, programa de apadrinamiento, viajes",
      },
    },
  },
  lexicon: {
    INT: "El nombre histórico del campus de Évry, ahora compartido por Télécom SudParis e IMT-BS.",
    Maisel:
      "La Maison des Élèves, los bloques de la residencia estudiantil del campus donde vivirás.",
    AbsINThe:
      "El querido bar estudiantil del campus, sede de noches temáticas y veladas relajadas.",
    CAF: "Caisse d’Allocations Familiales, la agencia pública francesa que te paga una ayuda mensual al alojamiento (APL).",
    "RER D":
      "La línea de tren regional que conecta Évry con el centro de París en 40 minutos.",
    ECTS: "Sistema Europeo de Transferencia de Créditos, los créditos académicos que necesitas para validar tus asignaturas.",
    passifs:
      "Asignaturas pendientes o módulos que suspendiste y debes recuperar para graduarte.",
    MiNET:
      "La asociación estudiantil que gestiona la red de fibra ultrarrápida y el wifi del campus.",
    "Déclic":
      "El club de fotografía del campus, que documenta todos tus momentos y eventos estudiantiles.",
    GS: "Gymnase des Sports, el polideportivo del campus para baloncesto, bádminton y eventos.",
    "Espace T":
      "Espace Technique, la zona estudiantil central junto al foyer y las asociaciones.",
    APL: "Aide Personnalisée au Logement, la ayuda al alojamiento gestionada por la CAF.",
    "Evry-thing":
      "¡Un juego de palabras travieso con Évry, la ciudad al sur de París donde está nuestro campus!",
    Foyer:
      "El centro de estudiantes (foyer) alberga las oficinas de las asociaciones estudiantiles del campus. Está situado entre los edificios U1, U4 y la escuela.",
    "Global Village":
      "Nuestro evento cultural estrella, donde los estudiantes muestran su patrimonio a través de la comida, la música, la danza y las historias, una celebración de la diversidad que enriquece nuestra comunidad de campus.",
    fallback: "Una palabra del argot del campus.",
  },
};
