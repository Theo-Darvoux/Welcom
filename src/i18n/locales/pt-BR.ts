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
    ctaGuides: "Ver os guias",
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
        body: "Do {Global Village} a encontros descontraídos, quase sempre tem algo acontecendo na colmeia.",
      },
    },
    photoCaption1: "{Global Village}",
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
  contactPage: {
    heroTitle: "Fale com a gente.",
    heroLede: "Tem perguntas sobre sua chegada, a vida no campus, ou só quer dar um oi? Somos todo ouvidos. Mande uma mensagem e a gente responde voando!",
    formTitle: "Envie uma mensagem",
    formName: "Seu nome",
    formNamePlaceholder: "ex. Alex Dupont",
    formEmail: "Seu email",
    formEmailPlaceholder: "ex. alex@exemplo.com",
    formTopic: "Sobre o quê?",
    formTopicOptions: {
      general: "Pergunta geral",
      preArrival: "Antes de chegar",
      onCampus: "Já estou no campus",
      events: "Eventos e atividades",
      partnership: "Parceria / patrocínio",
      other: "Outra coisa",
    },
    formMessage: "Sua mensagem",
    formMessagePlaceholder: "Conte pra gente o que tá pensando…",
    formSend: "Soltar a abelha! 🐝",
    formNote: "Isso vai abrir seu app de email com a mensagem pré-preenchida.",
    directTitle: "Ou fale direto com a gente",
    directEmail: "Email",
    directInstagram: "Instagram",
    directAddress: "Endereço",
    directAddressValue: "9 Rue Charles Fourier,\n91011 Évry-Courcouronnes",
    directFoyer: "Você também pode nos encontrar pessoalmente no {Foyer}.",
    teamTitle: "Contatos da Welcom'",
    presidentRole: "Presidente da Welcom’",
    respoAccueilRole: "Responsável pela Acolhida da Welcom’",
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Quando devo entrar em contato com a Welcom'?",
        a: "A qualquer momento! Tanto se você ainda não chegou quanto se já está no campus, estamos aqui pra ajudar.",
      },
      {
        q: "Preciso falar francês?",
        a: "De jeito nenhum. Nós falamos vários idiomas, e você sempre pode nos escrever em inglês.",
      },
      {
        q: "Em quanto tempo vocês respondem?",
        a: "Respondemos o mais rápido possível.",
      },
      {
        q: "Posso visitar o escritório da Welcom'?",
        a: "Sim! Passe no Foyer durante nosso horário de funcionamento.",
      },
      {
        q: "Ainda não sou estudante. Posso entrar em contato?",
        a: "Com certeza. Muitos futuros estudantes falam com a gente meses antes de chegar. Adoramos gente previdente!",
      },
    ],
  },
  eventsPage: {
    heroTitle: "Um ano cheio de zumbido.",
    heroLede:
      "Do seu primeiro churrasco até o {Global Village}, a colmeia organiza algo quase todo mês. Aqui vai uma amostra do que espera por você.",
    featuredEyebrow: "Os imperdíveis",
    featuredTitle: "Três datas para marcar no calendário.",
    globalVillage: {
      title: "Global Village",
      body: "Nossa noite mais especial. Os estudantes montam estandes com as cores de seus países, preparam pratos tradicionais e compartilham música, dança e histórias. Culturas de todo o mundo se reúnem no fórum da escola durante o {Global Village}.",
      photoAlt: "Estudantes celebrando suas culturas no Global Village",
      photoCaption: "{Global Village}",
      aftermovieTitle: "Assista ao aftermovie de 2024 🎬",
    },
    valentines: {
      title: "Festa de Dia dos Namorados",
      body: "Solteiro, em um relacionamento ou apenas aqui pelo {ritz}: todo mundo está convidado. Na programação: música, jogos e uma noite com as cores do Dia dos Namorados!",
      photoAlt: "Estudantes em uma festa de Dia dos Namorados no campus",
      photoCaption: "Dia dos Namorados",
    },
    trip: {
      title: "A viagem a Amsterdã",
      body: "Nosso segundo maior evento do ano, logo atrás do {Global Village}. Todo o campus desembarca em Amsterdã durante um fim de semana: restaurantes, museus, caminhadas noturnas à beira da água, para aproximar os estudantes da turma e fazer você descobrir a cidade de Amsterdã!",
      photoAlt: "Estudantes juntos na viagem anual a Amsterdã",
      photoCaption: "Amsterdã",
    },
    yearRoundEyebrow: "O ano todo",
    yearRoundTitle: "E muito mais",
    yearRoundLede:
      "A colmeia não para o ano todo. Alguns eventos são nossos, outros são apenas boas desculpas para celebrar juntos. De qualquer forma, são uma chance de conhecer gente.",
    yearRound: {
      bbq: {
        title: "Churrasco de boas-vindas",
        body: "Boa comida, ótima companhia e o jeito mais fácil de conhecer gente. O churrasco é onde começa o seu ano no {INT}.",
      },
      absinthe: {
        title: "Noites {AbsINThe}",
        body: "Noites temáticas, jogos e momentos descontraídos no bar da escola, os {ACO}, o ano inteiro.",
      },
      stpatrick: {
        title: "Dia de São Patrício",
        body: "Verde por toda parte, música animada e uma homenagem alegre à cultura irlandesa, do jeito da colmeia.",
      },
      oktoberfest: {
        title: "Oktoberfest",
        body: "Clima festivo, grandes mesas e especialidades tradicionais para celebrar a famosa festa da cerveja.",
      },
    },
    suggestBand: {
      eyebrow: "Sua cultura, seu evento",
      title: "O que vamos celebrar a seguir?",
      body: "Mais de 40 nacionalidades chamam este campus de lar, e cada uma tem algo que vale a pena celebrar juntos. Diwali, Ano Novo Lunar, Eid, Carnaval, um prato que você sente falta de casa... Você também pode nos propor eventos para organizar!",
      cta: "Sugerir um evento",
    },
    ctaTitle: "Não perca a próxima.",
    ctaLede:
      "Publicamos todos os eventos no calendário do campus. Consulte-o e não perca nada.",
    ctaMinet: "Calendário do campus",
    calNoEvents: "Sem eventos esta semana.",
    calPrevWeek: "Semana anterior",
    calNextWeek: "Próxima semana",
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
    ACO: "AbsINThe Chill Out, o nome das noites temáticas realizadas no bar AbsINThe do campus.",
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
    "Global Village":
      "Uma noite onde os estudantes montam estandes com as cores de seus países, cozinham especialidades tradicionais e compartilham suas culturas no fórum da escola.",
    ritz:
      "Nome dado à comida gratuita oferecida durante os eventos, batizado em homenagem ao restaurante da escola, o Rits, com uma piscadela para o famoso hotel parisiense Ritz.",
    fallback: "Uma gíria do campus.",
  },
};
