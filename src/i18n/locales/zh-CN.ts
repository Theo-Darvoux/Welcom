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
      "我们的旗舰文化活动，学生们通过美食、音乐、舞蹈和故事展示各自的文化传承，这是对让我们校园社区如此丰富多彩的多样性的礼赞。",
    fallback: "一个校园俚语。",
  },
};
