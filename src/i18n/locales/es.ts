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
  contactPage: {
    heroTitle: "Escríbenos.",
    heroLede: "¿Tienes preguntas sobre tu llegada, la vida en el campus, o simplemente quieres saludar? Estamos atentos. ¡Mándanos un mensaje y te contestaremos volando!",
    formTitle: "Envíanos un mensaje",
    formName: "Tu nombre",
    formNamePlaceholder: "ej. Alex Dupont",
    formEmail: "Tu email",
    formEmailPlaceholder: "ej. alex@ejemplo.com",
    formTopic: "¿De qué se trata?",
    formTopicOptions: {
      general: "Pregunta general",
      preArrival: "Antes de llegar",
      onCampus: "Ya estoy en el campus",
      events: "Eventos y actividades",
      partnership: "Colaboración / patrocinio",
      other: "Otra cosa",
    },
    formMessage: "Tu mensaje",
    formMessagePlaceholder: "Cuéntanos qué te ronda por la cabeza…",
    formSend: "¡Enviar la abeja! 🐝",
    formNote: "Se abrirá tu aplicación de correo con el mensaje ya redactado.",
    directTitle: "O contáctanos directamente",
    directEmail: "Email",
    directInstagram: "Instagram",
    directAddress: "Dirección",
    directAddressValue: "9 Rue Charles Fourier,\n91011 Évry-Courcouronnes",
    directFoyer: "También puedes encontrarnos en persona en el {Foyer}.",
    teamTitle: "Contactos de Welcom'",
    presidentRole: "Presidente de Welcom’",
    respoAccueilRole: "Responsable de Acogida de Welcom’",
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Cuándo contactar a Welcom'?",
        a: "¡En cualquier momento! Tanto si no has llegado aún como si ya estás en el campus, estamos aquí para ayudarte.",
      },
      {
        q: "¿Necesito hablar francés?",
        a: "Para nada. Hablamos varios idiomas, y siempre puedes escribirnos en inglés.",
      },
      {
        q: "¿Cuánto tardan en responder?",
        a: "Respondemos lo antes posible.",
      },
      {
        q: "¿Puedo visitar la oficina de Welcom'?",
        a: "¡Sí! Ven al Foyer en nuestro horario de apertura.",
      },
      {
        q: "Aún no soy estudiante. ¿Puedo contactarlos?",
        a: "¡Por supuesto! Muchos futuros estudiantes nos escriben meses antes de llegar. ¡Nos encantan los previsores!",
      },
    ],
  },
  eventsPage: {
    heroTitle: "Un año lleno de zumbido.",
    heroLede:
      "Desde tu primer BBQ hasta el {Global Village}, la colmena organiza algo casi todos los meses. Aquí tienes un adelanto de lo que te espera.",
    featuredEyebrow: "Los imprescindibles",
    featuredTitle: "Tres fechas para marcar en tu calendario.",
    globalVillage: {
      title: "Global Village",
      body: "Nuestra noche estrella. Los estudiantes montan stands con los colores de sus países, cocinan platos tradicionales y comparten música, baile e historias. Las culturas de todo el mundo se reúnen en el foro de la escuela durante el {Global Village}.",
      photoAlt: "Estudiantes celebrando sus culturas en el Global Village",
      photoCaption: "{Global Village}",
      aftermovieTitle: "Mira el aftermovie de 2024 🎬",
    },
    valentines: {
      title: "Fiesta de San Valentín",
      body: "Soltero, en pareja o solo por el {ritz}: todo el mundo está invitado. ¡En el programa: música, juegos y una velada con los colores de San Valentín!",
      photoAlt: "Estudiantes en una fiesta de San Valentín en el campus",
      photoCaption: "San Valentín",
    },
    trip: {
      title: "El viaje a Ámsterdam",
      body: "Nuestro segundo evento más grande del año, justo detrás del {Global Village}. Todo el campus desembarca en Ámsterdam durante un fin de semana: restaurantes, museos, paseos nocturnos junto al agua, ¡para unir a los estudiantes de la promoción y haceros descubrir la ciudad de Ámsterdam!",
      photoAlt: "Estudiantes juntos en el viaje anual a Ámsterdam",
      photoCaption: "Ámsterdam",
    },
    yearRoundEyebrow: "Todo el año",
    yearRoundTitle: "Y mucho más",
    yearRoundLede:
      "La colmena no para en todo el año. Algunos eventos son nuestros, otros son simplemente buenas excusas para celebrar juntos. En cualquier caso, son una oportunidad para conocer gente.",
    yearRound: {
      bbq: {
        title: "BBQ de bienvenida",
        body: "Buena comida, buena compañía y la forma más fácil de conocer gente. El BBQ es donde empieza tu año en el {INT}.",
      },
      absinthe: {
        title: "Noches {AbsINThe}",
        body: "Veladas temáticas, juegos y noches relajadas en el bar de la escuela, las {ACO}, durante todo el año.",
      },
      stpatrick: {
        title: "San Patricio",
        body: "Verde por todas partes, música animada y un guiño alegre a la cultura irlandesa, al estilo de la colmena.",
      },
      oktoberfest: {
        title: "Oktoberfest",
        body: "Ambiente festivo, grandes mesas y especialidades tradicionales para celebrar la famosa fiesta de la cerveza.",
      },
    },
    suggestBand: {
      eyebrow: "Tu cultura, tu evento",
      title: "¿Qué celebramos a continuación?",
      body: "Más de 40 nacionalidades llaman hogar a este campus, y cada una tiene algo que vale la pena celebrar juntos. Diwali, Año Nuevo Lunar, Eid, Carnaval, un plato que extrañas de tu tierra... ¡Tú también puedes proponernos eventos para organizar!",
      cta: "Proponer un evento",
    },
    ctaTitle: "No te pierdas la próxima.",
    ctaLede:
      "Publicamos todos nuestros eventos en el calendario del campus. Consúltalo y no te perderás nada.",
    ctaMinet: "Calendario del campus",
    calNoEvents: "Sin eventos esta semana.",
    calPrevWeek: "Semana anterior",
    calNextWeek: "Semana siguiente",
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
    ACO: "AbsINThe Chill Out, el nombre de las noches temáticas organizadas en el bar AbsINThe.",
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
      "Una noche donde los estudiantes montan stands con los colores de sus países, cocinan especialidades y comparten su cultura en el foro.",
    ritz:
      "Nombre que se le da a la comida gratis ofrecida durante los eventos, llamado así por el restaurante de la escuela, el Rits, con un guiño al famoso hotel parisino Ritz.",
    fallback: "Una palabra del argot del campus.",
  },
};
