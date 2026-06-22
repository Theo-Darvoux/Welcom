import { presidentName, academicYear, type Translation } from "./en";

export const ptBR: Translation = {
  meta: {
    home: {
      title: "WELCOM’ : BDI de Télécom SudParis e IMT Business-School",
      description:
        "WELCOM, a colmeia que ajuda estudantes internacionais a se instalarem na Télécom SudParis e IMT-BS, campus de Évry.",
    },
    guides: { title: "Guias | WELCOM’" },
    team: { title: "Nossa equipe | WELCOM’" },
    events: { title: "Eventos | WELCOM’" },
    contact: { title: "Contato | WELCOM’" },
  },
  nav: {
    home: "Início",
    guides: "Guias",
    team: "Equipe",
    events: "Eventos",
    contact: "Contato",
    brandHome: "Início Welcom’",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    primary: "Navegação principal",
    language: "Escolha seu idioma",
  },
  hero: {
    titleLead: "Welcom’ a",
    titleAccent: "Évry.",
    lede: "Acabou de chegar, ou está prestes a chegar? Somos o grupo estudantil que ajuda estudantes internacionais a se instalarem na {INT}, e tudo o que você precisa está aqui! Não hesite em nos contatar!",
    ctaTeam: "Conheça a equipe",
    ctaFollow: "Ver os guias",
  },
  about: {
    eyebrow: "Conheça a colmeia",
    h2: "O comitê de boas-vindas estudantil da {INT}.",
    lede: "Mudar para um novo país é empolgante, e talvez um pouco assustador. É aí que entra a Welcom’. Somos a associação estudantil da Télécom SudParis e IMT-BS dedicada a ajudar estudantes internacionais a se sentirem em casa desde o primeiro dia.",
    checklist: [
      "Ajudar você a se instalar e a entender o dia a dia na França",
      "Promover eventos o ano todo para você conhecer gente e fazer amigos",
      "Orientar você na papelada e nas questões práticas",
      "Tornar sua passagem pela INT realmente inesquecível",
    ],
    closing:
      "Seja para pedir uma ajuda, participar de um evento ou simplesmente conversar com gente legal, a Welcom’ está aqui para você.",
    orgaAlt: `A equipe Welcom’ ${academicYear}, cada membro representado como uma abelha com seu papel: presidente, tesoureiro, secretário, comunicação, eventos e muito mais`,
    orgaCaption: `A colmeia ${academicYear} com todas as suas abelhas!`,
  },
  president: {
    photoAlt: `${presidentName}, presidente da Welcom’`,
    eyebrow: "Uma palavra do presidente",
    p1: "Olá, e bem-vindo ao campus da Télécom SudParis e IMT Business School, conhecido como “{INT}” por quem é de casa! Em nome de toda a equipe, fico muito feliz que você tenha escolhido se juntar a esta grande família.",
    p2: "A Welcom’ está aqui para mostrar {Evry-thing} o que temos a oferecer, do nosso campus até Paris e o resto da França, e para ajudar você com tudo o que parecer desconhecido pelo caminho, dos costumes franceses aos papéis administrativos.",
    p3: "Nosso objetivo é simples: nos divertir todos juntos, fazer da nossa casa também a sua e tornar a sua experiência aqui inesquecível. Espero ver você em breve.",
    sign: presidentName,
  },
  events: {
    eyebrow: "O ano todo",
    h2: "Na colmeia, o tédio não tem vez.",
    lede: "Organizamos eventos ao longo do ano para que estudantes internacionais façam amigos e vivam a vida estudantil na INT ao máximo.",
    items: {
      bbq: {
        title: "Churrasco de boas-vindas",
        body: "Comece o ano com boa comida, ótima companhia e um jeito fácil de conhecer gente. O churrasco é onde o seu ano na {INT} começa.",
      },
      trip: {
        title: "Viagem anual",
        body: "Todo ano viajamos juntos para um lugar novo na Europa. Ano passado foi Amsterdã, e este ano temos um novo destino para descobrir lado a lado.",
      },
      absinthe: {
        title: "Noites no {AbsINThe}",
        body: "Fazemos parceria com o {AbsINThe}, o bar da escola, para noites temáticas, jogos e encontros tranquilos ao longo do ano.",
      },
      cultural: {
        title: "Encontros culturais",
        body: "Do Global Village a encontros descontraídos, quase sempre tem algo acontecendo na colmeia.",
      },
    },
    photoCaption1: "Global Village",
    photoCaption2: "Dia dos Namorados (festa)",
    photoAlt1: "Estudantes celebrando as culturas no Global Village",
    photoAlt2: "Uma festa de Dia dos Namorados no campus",
  },
  partners: {
    eyebrow: "Com o apoio de",
    h2: "Parceiros que fazem a colmeia funcionar.",
    logoAlt: "Logo da {name}",
    items: {
      tsp: "Nossa escola, uma escola de engenharia voltada para tecnologias digitais, telecomunicações e computação.",
      imtbs:
        "Institut Mines-Télécom Business School, nossa parceira no mesmo campus para gestão e negócios.",
      sg: "Um banco francês que ajuda nossos estudantes a abrir uma conta e a se organizar financeiramente.",
    },
  },
  contactBand: {
    title: "Venha dizer oi.",
    lede: "Dúvidas antes de chegar, ou já estando aqui? Fale com a gente quando quiser, vamos adorar conhecer você.",
    foyer: "Também estamos disponíveis na sala Welcom’, no {Foyer}.",
    foyerBtn: "Mapa do Foyer",
    foyerAlert: "O mapa do Foyer estará disponível em breve! 🗺️🐝",
    instagram: "@welcom_int no Instagram",
    bises: "Beijos de mel, ou <em>bises mielleuses</em>! 🍯🐝",
  },
  footer: {
    tagline:
      "Acolhendo estudantes internacionais na Télécom SudParis e IMT-BS, Évry.",
    credits: `© Association Welcom’ ${academicYear} · hospedado por {MiNET} · fotos: Club {Déclic}`,
    dev: "Desenvolvido por {name}",
    backToTop: "Voltar ao topo",
    top: "Topo",
  },
  hive: {
    title: "GUIAS",
    peek: "Dar uma espiada",
    ariaGrid: "Categorias de guias em favo de mel",
    ariaList: "Lista de categorias de guias",
    categories: {
      "getting-here": {
        title: "Como chegar",
        description: "Aeroportos, trem RER D e o seu primeiro dia",
      },
      housing: {
        title: "Moradia",
        description: "Residência Maisel, auxílio da CAF e lavanderia",
      },
      "admin-aid": {
        title: "Burocracia e auxílios",
        description: "Titre de séjour, OFII e seguro",
      },
      "money-phone": {
        title: "Dinheiro e telefone",
        description: "Contas bancárias francesas, chips SIM, operadoras",
      },
      "getting-around": {
        title: "Locomoção",
        description: "Passe Navigo, passeios a Paris, ônibus",
      },
      "daily-life": {
        title: "Dia a dia",
        description: "Compras, farmácias, vida no campus",
      },
      studies: {
        title: "Estudos",
        description: "ECTS, wifi, biblioteca e disciplinas",
      },
      "events-buddy": {
        title: "Eventos e padrinho",
        description: "Churrasco de boas-vindas, programa de apadrinhamento, viagens",
      },
    },
  },
  lexicon: {
    INT: "O nome histórico do campus de Évry, hoje compartilhado pela Télécom SudParis e IMT-BS.",
    Maisel:
      "A Maison des Élèves, os blocos da residência estudantil do campus onde você vai morar.",
    AbsINThe:
      "O querido bar estudantil do campus, palco de noites temáticas e encontros tranquilos.",
    CAF: "Caisse d’Allocations Familiales, o órgão público francês que paga um auxílio-moradia mensal (APL).",
    "RER D":
      "A linha de trem regional que liga Évry ao centro de Paris em 40 minutos.",
    ECTS: "Sistema Europeu de Transferência de Créditos, os créditos acadêmicos necessários para validar suas disciplinas.",
    passifs:
      "Pendências acadêmicas ou disciplinas que você reprovou e precisa refazer para se formar.",
    MiNET:
      "A associação estudantil que cuida da rede de fibra ultrarrápida e do wifi do campus.",
    "Déclic":
      "O clube de fotografia do campus, que registra todos os seus momentos e eventos estudantis.",
    GS: "Gymnase des Sports, o ginásio do campus para basquete, badminton e eventos.",
    "Espace T":
      "Espace Technique, a área estudantil central ao lado do foyer e das associações.",
    APL: "Aide Personnalisée au Logement, o auxílio-moradia administrado pela CAF.",
    "Evry-thing":
      "Um trocadilho brincalhão com Évry, a cidade ao sul de Paris onde fica o nosso campus!",
    Foyer:
      "O centro estudantil (foyer) abriga os escritórios das associações estudantis do campus. Está localizado entre os edifícios U1, U4 e a escola.",
    fallback: "Uma gíria do campus.",
  },
};
