import { presidentName, academicYear, type Translation } from "./en";

export const zhCN: Translation = {
  meta: {
    home: {
      title: "WELCOM’ ：Télécom SudParis 与 IMT Business-School 的 BDI",
      description:
        "WELCOM，帮助国际学生在 Télécom SudParis 与 IMT-BS（埃夫里校区）安顿下来的蜂巢。",
    },
    guides: { title: "指南 | WELCOM’" },
    team: { title: "我们的团队 | WELCOM’" },
    events: { title: "活动 | WELCOM’" },
    contact: { title: "联系我们 | WELCOM’" },
  },
  nav: {
    home: "首页",
    guides: "指南",
    team: "团队",
    events: "活动",
    contact: "联系",
    brandHome: "Welcom’ 首页",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    primary: "主导航",
    language: "选择你的语言",
  },
  hero: {
    titleLead: "Welcom’ 来到",
    titleAccent: "Évry.",
    lede: "刚刚抵达，或即将抵达？我们是帮助国际学生在 {INT} 安顿生活的学生社团，你所需要的一切都在这里！欢迎随时与我们联系！",
    ctaTeam: "认识团队",
    ctaGuides: "查看指南",
  },
  about: {
    eyebrow: "认识蜂巢",
    h2: "由学生运营的 {INT} 迎新委员会。",
    lede: "搬到一个新的国家既令人兴奋，也可能让人有些不知所措。这正是 Welcom’ 出场的时刻。我们是 Télécom SudParis 与 IMT-BS 的学生社团，致力于让国际学生从第一天起就有家的感觉。",
    checklist: [
      "帮助你安顿下来，了解法国的日常生活",
      "全年举办活动，让你结识朋友、融入大家",
      "带你走完各种手续和实际事务",
      "让你在 INT 的时光真正难忘",
    ],
    closing:
      "无论你需要帮忙、想参加活动，还是只想和友善的人聊聊天，Welcom’ 都在这里等你。",
    orgaAlt: `${academicYear} 年度 Welcom’ 团队，每位成员都化身为一只小蜜蜂，并标注其职务：主席、财务、秘书、宣传、活动等等`,
    orgaCaption: `拥有所有蜜蜂的 ${academicYear} 蜂巢！`,
  },
  president: {
    photoAlt: `Welcom’ 主席 ${presidentName}`,
    eyebrow: "主席寄语",
    p1: "你好，欢迎来到 Télécom SudParis 与 IMT Business School 校区，熟悉的人都叫它“{INT}”！我代表全体成员，非常高兴你选择加入这个大家庭。",
    p2: "Welcom’ 会带你领略我们所拥有的{Evry-thing}，从校园一直到巴黎和法国其他地方，并在你遇到任何陌生事物时陪伴你，从法国的风俗到行政手续。",
    p3: "我们的目标很简单：大家一起开心，让我们的家也成为你的家，让你在这里的时光难忘。希望很快见到你。",
    sign: presidentName,
  },
  events: {
    eyebrow: "全年不停",
    h2: "蜂巢里，从来不无聊。",
    lede: "我们全年举办各种活动，让国际学生结交朋友，尽情体验 INT 的校园生活。",
    items: {
      bbq: {
        title: "迎新烧烤",
        body: "用美食、好友和轻松结识新人的方式开启新的一年。烧烤会就是你在 {INT} 这一年的起点。",
      },
      trip: {
        title: "年度旅行",
        body: "每年我们都会一起到欧洲的新地方走走。去年是阿姆斯特丹，今年又有一处新天地等着我们并肩去发现。",
      },
      absinthe: {
        title: "{AbsINThe} 之夜",
        body: "我们与校内酒吧 {AbsINThe} 合作，全年举办主题之夜、游戏和轻松的夜晚聚会。",
      },
      cultural: {
        title: "文化聚会",
        body: "从 {Global Village} 到随意的小聚，蜂巢里几乎总有事情在发生。",
      },
    },
    photoCaption1: "{Global Village}",
    photoCaption2: "情人节（派对）",
    photoAlt1: "学生在 Global Village 欢庆各国文化",
    photoAlt2: "校园里的情人节派对",
  },
  partners: {
    eyebrow: "鼎力支持",
    h2: "让蜂巢运转的伙伴们。",
    logoAlt: "{name} 标志",
    items: {
      tsp: "我们的本校，一所专注于数字技术、电信和计算机科学的工程师学校。",
      imtbs:
        "Institut Mines-Télécom Business School，与我们同处一个校区的合作院校，专注管理与商科。",
      sg: "一家法国银行，帮助我们的学生开立账户、安顿好财务。",
    },
  },
  contactBand: {
    title: "来打个招呼吧。",
    lede: "无论是抵达之前，还是到了之后有任何疑问，随时联系我们，我们很想认识你。",
    foyer: "我们也在 {Foyer} 的 Welcom’ 办公室为你提供服务。",
    foyerBtn: "Foyer 地图",
    foyerAlert: "Foyer 地图即将推出！🗺️🐝",
    instagram: "Instagram 上的 @welcom_int",
    bises: "送上甜甜的吻，也就是 <em>bises mielleuses</em>！🍯🐝",
  },
  contactPage: {
    heroTitle: "联系我们。",
    heroLede: "无论是关于到达、校园生活的问题，还是只想打个招呼，我们洗耳恭听。给我们留言，我们会嗡嗡地飞来回复你！",
    formTitle: "给我们留言",
    formName: "你的名字",
    formNamePlaceholder: "例：Alex Dupont",
    formEmail: "你的邮箱",
    formEmailPlaceholder: "例：alex@example.com",
    formTopic: "关于什么？",
    formTopicOptions: {
      general: "一般问题",
      preArrival: "到达之前",
      onCampus: "我已经在校园了",
      events: "活动相关",
      partnership: "合作 / 赞助",
      other: "其他",
    },
    formMessage: "你的留言",
    formMessagePlaceholder: "告诉我们你在想什么……",
    formSend: "放飞小蜜蜂！🐝",
    formNote: "这将打开你的邮件应用，消息已预先填好。",
    directTitle: "或者直接联系我们",
    directEmail: "邮箱",
    directInstagram: "Instagram",
    directAddress: "地址",
    directAddressValue: "9 Rue Charles Fourier,\n91011 Évry-Courcouronnes",
    directFoyer: "你也可以亲自到 {Foyer} 找我们。",
    teamTitle: "Welcom' 联系方式",
    presidentRole: "Welcom’ 主席",
    respoAccueilRole: "Welcom’ 迎新负责人",
    faqTitle: "常见问题",
    faq: [
      {
        q: "什么时候应该联系 Welcom'？",
        a: "随时！无论你还没到还是已经在校园，我们都随时为你服务。",
      },
      {
        q: "需要会说法语吗？",
        a: "完全不需要。我们会多种语言，你随时可以用英语写信给我们。",
      },
      {
        q: "你们多快回复？",
        a: "我们会尽快回复。",
      },
      {
        q: "可以去 Welcom' 办公室吗？",
        a: "当然！在开放时间来 Foyer 就行。",
      },
      {
        q: "我还不是学生，可以联系你们吗？",
        a: "当然可以。很多准学生提前好几个月就联系我们了。我们喜欢早起的鸟！",
      },
    ],
  },
  eventsPage: {
    heroTitle: "热闹一整年。",
    heroLede:
      "从你的第一次烧烤到{Global Village}，蜂巢几乎每个月都有活动。先来感受一下等着你的精彩吧。",
    featuredEyebrow: "重头戏",
    featuredTitle: "三个值得记在日历上的日子。",
    globalVillage: {
      title: "Global Village",
      body: "我们的招牌之夜。同学们搭建展现自己国家色彩的展位，烹饪传统美食，并分享音乐、舞蹈和故事。在 {Global Village} 期间，来自世界各地的文化汇聚在学校的论坛（forum）。",
      photoAlt: "同学们在 Global Village 上展示各自的文化",
      photoCaption: "{Global Village}",
      aftermovieTitle: "观看 2024 年的活动回顾 🎬",
    },
    valentines: {
      title: "情人节派对",
      body: "单身、恋爱中，或者只是为了 {ritz} 而来：人人都受欢迎。活动内容包括：音乐、游戏和充满情人节色彩的夜晚！",
      photoAlt: "同学们在校园里的情人节派对上",
      photoCaption: "情人节",
    },
    trip: {
      title: "阿姆斯特丹之旅",
      body: "我们一年中第二大的活动，仅次于{Global Village}。整个校区都将在周末前往阿姆斯特丹：餐馆、博物馆、水边夜步，旨在拉近同届学生之间的距离，并带你领略阿姆斯特丹这座城市！",
      photoAlt: "同学们在阿姆斯特丹年度旅行中合影",
      photoCaption: "阿姆斯特丹",
    },
    yearRoundEyebrow: "全年不停",
    yearRoundTitle: "还有更多",
    yearRoundLede:
      "蜂巢全年都热闹非凡。有些活动是我们自己办的，有些只是一起庆祝的好借口。无论哪种，都是认识新朋友的机会。",
    yearRound: {
      bbq: {
        title: "欢迎烧烤",
        body: "美食、好伙伴，还有认识新朋友最轻松的方式。烧烤，就是你在{INT}这一年的起点。",
      },
      absinthe: {
        title: "{AbsINThe} 之夜",
        body: "主题之夜、游戏，还有在校园酒吧里轻松惬意的夜晚，也就是{ACO}，全年不断。",
      },
      stpatrick: {
        title: "圣帕特里克节",
        body: "满眼绿色、欢快的音乐，以蜂巢的方式向爱尔兰文化致以愉快的问候。",
      },
      oktoberfest: {
        title: "慕尼黑啤酒节",
        body: "节日氛围、大长桌和传统美食，一起庆祝著名的啤酒节。",
      },
    },
    suggestBand: {
      eyebrow: "你的文化，你的活动",
      title: "接下来我们庆祝什么？",
      body: "校园里有40多个国籍的学生，每个国家都有值得一起庆祝的事情。排灯节、农历新年、开斋节、嘉年华、一道你思念家乡的菜肴……你也可以向我们提议要举办的活动！",
      cta: "建议一个活动",
    },
    ctaTitle: "别错过下一场。",
    ctaLede:
      "我们将所有活动发布在校园日历上。查看日历，一场都不会错过。",
    ctaMinet: "校园日历",
    calNoEvents: "本周没有活动。",
    calPrevWeek: "上一周",
    calNextWeek: "下一周",
  },
  footer: {
    tagline:
      "我们在 Télécom SudParis 与 IMT-BS（埃夫里）迎接国际学生。",
    credits: `© Association Welcom’ ${academicYear} · 由 {MiNET} 提供托管 · 照片：Club {Déclic}`,
    dev: "由 {name} 开发",
    backToTop: "回到顶部",
    top: "顶部",
  },
  hive: {
    title: "指南",
    peek: "进来看看",
    ariaGrid: "指南分类蜂窝图",
    ariaList: "指南分类列表",
    categories: {
      "getting-here": {
        title: "如何抵达",
        description: "机场、RER D 列车，以及你的第一天",
      },
      housing: {
        title: "住宿",
        description: "Maisel 宿舍、CAF 补助和洗衣",
      },
      "admin-aid": {
        title: "行政与补助",
        description: "居留证（titre de séjour）、OFII 和保险",
      },
      "money-phone": {
        title: "钱与手机",
        description: "法国银行账户、SIM 卡、运营商",
      },
      "getting-around": {
        title: "出行",
        description: "Navigo 月票、巴黎出游、公交",
      },
      "daily-life": {
        title: "日常生活",
        description: "买菜、药房、校园生活",
      },
      studies: {
        title: "学业",
        description: "ECTS 学分、wifi、图书馆和课程",
      },
      "events-buddy": {
        title: "活动与伙伴",
        description: "迎新烧烤、伙伴计划、旅行",
      },
    },
  },
  lexicon: {
    INT: "埃夫里校区的历史名称，如今由 Télécom SudParis 与 IMT-BS 共用。",
    Maisel:
      "Maison des Élèves，校园里的学生宿舍楼，你将住在这里。",
    AbsINThe:
      "深受喜爱、由学生运营的校园酒吧，举办各种主题之夜和轻松的聚会。",
    ACO: "AbsINThe Chill Out, AbsINThe校园酒吧举办的主题之夜的名称。",
    CAF: "Caisse d’Allocations Familiales，向你按月发放住房补助（APL）的法国政府机构。",
    "RER D":
      "把埃夫里与巴黎市中心相连的区域列车线路，约 40 分钟可达。",
    ECTS: "欧洲学分转换系统，你修读课程所需累积的学分。",
    passifs:
      "未通过、需要重修才能毕业的科目或学分欠账。",
    MiNET:
      "负责运营校园超高速光纤网络和 wifi 的学生社团。",
    "Déclic":
      "校园摄影社，记录你所有的学生时刻与活动。",
    GS: "Gymnase des Sports，校园体育馆，可进行篮球、羽毛球及各类活动。",
    "Espace T":
      "Espace Technique，紧邻 foyer 和各学生社团的中心学生活动区。",
    APL: "Aide Personnalisée au Logement，由 CAF 管理的住房补贴计划。",
    "Evry-thing":
      "对 Évry（埃夫里，巴黎以南我们校区所在的城市）的俏皮双关！",
    Foyer:
      "学生社团活动中心 (Foyer) 汇集了校园各学生社团的办公室，位于 U1、U4 教学楼与学校主楼之间。",
    "Global Village":
      "在这场晚会上，同学们搭建展现自己国家色彩的展位，烹饪传统美食并分享他们的文化。",
    ritz:
      "活动期间提供的免费食物的别称，得名于学校的餐厅 Rits，同时也巧妙地致敬了巴黎著名的丽兹酒店（Ritz）。",
    fallback: "一个校园俚语。",
  },
};
