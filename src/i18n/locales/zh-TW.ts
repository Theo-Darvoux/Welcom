import { presidentName, academicYear, type Translation } from "./en";

export const zhTW: Translation = {
  meta: {
    home: {
      title: "WELCOM’ ：Télécom SudParis 與 IMT Business-School 的 BDI",
      description:
        "WELCOM，協助國際學生在 Télécom SudParis 與 IMT-BS（埃夫里校區）安頓下來的蜂巢。",
    },
    guides: { title: "指南 | WELCOM’" },
    team: { title: "我們的團隊 | WELCOM’" },
    events: { title: "活動 | WELCOM’" },
    contact: { title: "聯絡我們 | WELCOM’" },
  },
  nav: {
    home: "首頁",
    guides: "指南",
    team: "團隊",
    events: "活動",
    contact: "聯絡",
    brandHome: "Welcom’ 首頁",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    primary: "主導覽",
    language: "選擇你的語言",
  },
  hero: {
    titleLead: "Welcom’ 來到",
    titleAccent: "Évry.",
    lede: "剛剛抵達，或即將抵達？我們是協助國際學生在 {INT} 安頓生活的學生社團，你所需要的一切都在這裡！歡迎隨時與我們聯絡！",
    ctaTeam: "認識團隊",
    ctaGuides: "查看指南",
  },
  about: {
    eyebrow: "認識蜂巢",
    h2: "由學生營運的 {INT} 迎新委員會。",
    lede: "搬到一個新的國家既令人興奮，也可能讓人有些不知所措。這正是 Welcom’ 登場的時刻。我們是 Télécom SudParis 與 IMT-BS 的學生社團，致力於讓國際學生從第一天起就有家的感覺。",
    checklist: [
      "協助你安頓下來，了解法國的日常生活",
      "全年舉辦活動，讓你結識朋友、融入大家",
      "帶你走完各種手續和實際事務",
      "讓你在 INT 的時光真正難忘",
    ],
    closing:
      "無論你需要幫忙、想參加活動，還是只想和友善的人聊聊天，Welcom’ 都在這裡等你。",
    orgaAlt: `${academicYear} 年度 Welcom’ 團隊，每位成員都化身為一隻小蜜蜂，並標註其職務：主席、財務、祕書、宣傳、活動等等`,
    orgaCaption: `擁有所有蜜蜂的 ${academicYear} 蜂巢！`,
  },
  president: {
    photoAlt: `Welcom’ 主席 ${presidentName}`,
    eyebrow: "主席的話",
    p1: "你好，歡迎來到 Télécom SudParis 與 IMT Business School 校區，熟門熟路的人都叫它「{INT}」！我謹代表全體成員，非常高興你選擇加入這個大家庭。",
    p2: "Welcom’ 會帶你領略我們所擁有的{Evry-thing}，從校園一直到巴黎與法國其他地方，並在你遇到任何陌生事物時陪伴你，從法國的風俗到行政手續。",
    p3: "我們的目標很簡單：大家一起開心，讓我們的家也成為你的家，讓你在這裡的時光難忘。希望很快見到你。",
    sign: presidentName,
  },
  events: {
    eyebrow: "全年不間斷",
    h2: "蜂巢裡，從來不無聊。",
    lede: "我們全年舉辦各種活動，讓國際學生結交朋友，盡情體驗 INT 的校園生活。",
    items: {
      bbq: {
        title: "迎新烤肉",
        body: "用美食、好友和輕鬆結識新人的方式開啟新的一年。烤肉會就是你在 {INT} 這一年的起點。",
      },
      trip: {
        title: "年度旅行",
        body: "每年我們都會一起到歐洲的新地方走走。去年是阿姆斯特丹，今年又有一處新天地等著我們並肩去發現。",
      },
      absinthe: {
        title: "{AbsINThe} 之夜",
        body: "我們與校內酒吧 {AbsINThe} 合作，全年舉辦主題之夜、遊戲和輕鬆的夜晚聚會。",
      },
      cultural: {
        title: "文化聚會",
        body: "從 {Global Village} 到隨興的小聚，蜂巢裡幾乎總有事情在發生。",
      },
    },
    photoCaption1: "{Global Village}",
    photoCaption2: "情人節（派對）",
    photoAlt1: "學生在 Global Village 歡慶各國文化",
    photoAlt2: "校園裡的情人節派對",
  },
  partners: {
    eyebrow: "感謝支持",
    h2: "讓蜂巢運轉的夥伴們。",
    logoAlt: "{name} 標誌",
    items: {
      tsp: "我們的本校，一所專注於數位技術、電信與資訊工程的工程師學校。",
      imtbs:
        "Institut Mines-Télécom Business School，與我們同處一個校區的合作院校，專注管理與商科。",
      sg: "一家法國銀行，協助我們的學生開立帳戶、把財務打理好。",
    },
  },
  contactBand: {
    title: "來打個招呼吧。",
    lede: "無論是抵達之前，或是到了之後有任何疑問，隨時聯絡我們，我們很想認識你。",
    foyer: "我們也在 {Foyer} 的 Welcom’ 辦公室為你提供服務。",
    foyerBtn: "Foyer 地圖",
    foyerAlert: "Foyer 地圖即將推出！🗺️🐝",
    instagram: "Instagram 上的 @welcom_int",
    bises: "送上甜甜的吻，也就是 <em>bises mielleuses</em>！🍯🐝",
  },
  footer: {
    tagline:
      "我們在 Télécom SudParis 與 IMT-BS（埃夫里）迎接國際學生。",
    credits: `© Association Welcom’ ${academicYear} · 由 {MiNET} 提供主機代管 · 照片：Club {Déclic}`,
    dev: "由 {name} 開發",
    backToTop: "回到頂部",
    top: "頂部",
  },
  hive: {
    title: "指南",
    peek: "進來看看",
    ariaGrid: "指南分類蜂巢圖",
    ariaList: "指南分類清單",
    categories: {
      "getting-here": {
        title: "如何抵達",
        description: "機場、RER D 列車，以及你的第一天",
      },
      housing: {
        title: "住宿",
        description: "Maisel 宿舍、CAF 補助和洗衣",
      },
      "admin-aid": {
        title: "行政與補助",
        description: "居留證（titre de séjour）、OFII 和保險",
      },
      "money-phone": {
        title: "金錢與手機",
        description: "法國銀行帳戶、SIM 卡、電信業者",
      },
      "getting-around": {
        title: "交通出行",
        description: "Navigo 月票、巴黎出遊、公車",
      },
      "daily-life": {
        title: "日常生活",
        description: "採買、藥局、校園生活",
      },
      studies: {
        title: "學業",
        description: "ECTS 學分、wifi、圖書館和課程",
      },
      "events-buddy": {
        title: "活動與夥伴",
        description: "迎新烤肉、夥伴計畫、旅行",
      },
    },
  },
  lexicon: {
    INT: "埃夫里校區的歷史名稱，如今由 Télécom SudParis 與 IMT-BS 共用。",
    Maisel:
      "Maison des Élèves，校園裡的學生宿舍樓，你將住在這裡。",
    AbsINThe:
      "深受喜愛、由學生營運的校園酒吧，舉辦各種主題之夜和輕鬆的聚會。",
    CAF: "Caisse d’Allocations Familiales，按月發放住房補助（APL）給你的法國政府機構。",
    "RER D":
      "把埃夫里與巴黎市中心相連的區域列車路線，約 40 分鐘可達。",
    ECTS: "歐洲學分轉換系統，你修讀課程所需累積的學分。",
    passifs:
      "未通過、需要重修才能畢業的科目或學分欠帳。",
    MiNET:
      "負責營運校園超高速光纖網路與 wifi 的學生社團。",
    "Déclic":
      "校園攝影社，記錄你所有的學生時刻與活動。",
    GS: "Gymnase des Sports，校園體育館，可進行籃球、羽球及各類活動。",
    "Espace T":
      "Espace Technique，緊鄰 foyer 與各學生社團的中心學生活動區。",
    APL: "Aide Personnalisée au Logement，由 CAF 管理的住房補貼計畫。",
    "Evry-thing":
      "對 Évry（埃夫里，巴黎以南我們校區所在的城市）的俏皮雙關！",
    Foyer:
      "學生社團活動中心 (Foyer) 匯集了校園各學生社團的辦公室，位於 U1、U4 教學樓與學校主樓之間。",
    "Global Village":
      "我們的旗艦文化活動，學生們透過美食、音樂、舞蹈與故事展現各自的文化傳承，這是對賦予我們校園社群豐富色彩的多元性的禮讚。",
    fallback: "一個校園俚語。",
  },
};
