export interface Room {
  id: string;
  label: string;
  poly: [number, number][];
  blurb?: string;
  accent: string;
  venue?: boolean;
}

export interface Floor {
  id: string;
  frame: [number, number];
  outline: [number, number][];
  entrances?: { gap: [[number, number], [number, number]]; from: string }[];

  courtyard?: [number, number][];
  rooms: Room[];
}

const A = ["var(--hive-blue)", "var(--hive-yellow)", "var(--hive-green)", "var(--hive-peach)", "var(--honey-wash)", "var(--cream-deep)"];

const rdc: Floor = {
  id: "rdc",
  frame: [1200, 865],
  outline: [[100, 120], [600, 130], [600, 580], [760, 195], [1000, 245], [920, 550], [920, 780], [460, 780], [460, 680], [400, 680], [400, 600], [100, 600]],
  entrances: [
    { gap: [[260, 120], [360, 130]], from: "rer" },
    { gap: [[600, 260], [600, 350]], from: "espace-t" },
    { gap: [[460, 680], [400, 680]], from: "u2" },
    { gap: [[100, 400], [100, 312]], from: "u4" },
  ],
  rooms: [
    { id: "club-zik", label: "CLUB ZIK", accent: A[0], blurb: "Local de répétition et matériel de musique pour les musiciens du campus.", poly: [[100, 120], [260, 120], [260, 185], [200, 185], [200, 170], [100, 170]] },
    { id: "intv", label: "", accent: A[3], blurb: "You'll meet them eventually.", poly: [[100, 170], [200, 170], [200, 185], [260, 185], [260, 248], [100, 248]] },
    { id: "intech", label: "INTech", accent: A[2], blurb: "Club d'informatique, robotique et projets technologiques étudiants.", poly: [[100, 248], [260, 248], [260, 312], [100, 312]] },
    { id: "club-jeux", label: "CLUB JEUX", accent: A[3], blurb: "Jeux de société, jeux de rôle et soirées gaming entre étudiants.", poly: [[100, 400], [260, 400], [260, 600], [100, 600]] },
    { id: "asint", label: "ASINT", accent: A[1], blurb: "Bureau des Sports (ASINT) : tournois, entraînements et événements sportifs.", poly: [[360, 130], [480, 130], [480, 210], [360, 210]] },
    { id: "welcom", label: "WELCOM'", accent: "var(--hive-green)", blurb: "Association d'accueil et d'intégration des étudiants internationaux.", poly: [[360, 210], [480, 210], [480, 260], [360, 260]] },
    { id: "bde", label: "BDE", accent: A[0], blurb: "Bureau des Élèves : organisation de la vie étudiante et grands événements.", poly: [[480, 130], [600, 130], [600, 260], [480, 260]] },
    { id: "bda", label: "BDA", accent: A[3], blurb: "Bureau des Arts : théâtre, musique, danse, culture et soirées artistiques.", poly: [[480, 350], [600, 350], [600, 420], [520, 420], [520, 400], [480, 400]] },
    { id: "minet", label: "MiNET", accent: A[0], blurb: "Fournisseur d'accès Internet associatif du campus et réseau très haut débit.", poly: [[480, 400], [520, 400], [520, 420], [600, 420], [600, 480], [480, 480]] },
    { id: "emotys", label: "Emoty:S", accent: A[2], blurb: "Troupe de comédie musicale du campus et spectacles étudiants.", poly: [[480, 480], [600, 480], [600, 580], [480, 580]] },
    { id: "bpm", label: "BPM Club Sono", accent: A[1], blurb: "Association de DJing, sonorisation et éclairage.", poly: [[318, 400], [400, 400], [400, 500], [318, 500]] },
    { id: "declic", label: "DÉCLIC", accent: A[2], blurb: "Club photo du campus : couverture des événements et cours de photographie.", poly: [[260, 500], [400, 500], [400, 600], [260, 600]] },
    { id: "cookit", label: "Cook'IT", accent: A[1], blurb: "Association culinaire : ateliers de cuisine, dégustations et évènements gourmands.", poly: [[920, 550], [920, 700], [800, 700], [800, 550]] },
    { id: "bar", label: "Bar", accent: A[5], blurb: "Comptoir et espace bar du Foyer pour se retrouver entre cours.", poly: [[800, 570], [800, 700], [750, 700], [700, 660]] },
    { id: "reserve", label: "Réserve", accent: A[4], blurb: "Local de stockage géré par le bar AbsINThe.", poly: [[460, 680], [580, 690], [580, 780], [460, 780]] },
    { id: "absinthe", label: "AbsINThe", accent: A[4], blurb: "Le bar étudiant du campus pour des moments de détente et de convivialité.", poly: [[750, 700], [920, 700], [920, 780], [750, 780]] },
    { id: "toilettes-1", label: "TOILETTES", accent: A[5], poly: [[318, 500], [318, 400], [260, 400], [260, 500]] },
    { id: "toilettes-2", label: "TOILETTES", accent: A[5], poly: [[580, 690], [750, 700], [750, 780], [580, 780]] },
  ],
};

const ss: Floor = {
  id: "ss1",
  frame: [1200, 865],
  outline: [
    [700, 450],
    [808, 210],
    [915, 101],
    [1108, 260],
    [1000, 500],
    [1000, 700],
    [600, 700],
    [600, 625],
    [500, 620],
    [500, 520],
    [640, 520]
  ],
  rooms: [
    { id: "tijet", label: "TiJET", accent: A[0], blurb: "Local principal de l'association TiJET (Junior-Entreprise du campus).", poly: [[1000, 500], [1000, 650], [900, 650], [900, 500]] },
    { id: "cave", label: "La Cave", accent: A[4], blurb: "Local partagé par le Club Code, la CELL (création de jeux : vidéo, plateau, escape games...), Gam'INT et Model'IT.", poly: [[900, 650], [800, 630], [800, 550], [900, 550]] },
    { id: "bagagerie", label: "Bagagerie", accent: A[5], blurb: "Local de stockage principal de MiNET contenant leur équipement réseau de rechange.", poly: [[750, 550], [750, 630], [500, 620], [500, 520], [640, 520], [640, 540]] },
    { id: "evryone", label: "EVRYONE", accent: A[0], blurb: "La radio étudiante du campus : émissions en direct et podcasts.", poly: [[800, 450], [700, 450], [745, 350], [825, 370], [800, 400]] },
    { id: "tabernacle", label: "Tabernacle", accent: A[0], blurb: "Local de stockage du BDE (Bureau des Élèves).", poly: [[825, 370], [745, 350], [772, 290], [852, 310]] },
    { id: "minet2", label: "Salle Serveur", accent: A[2], blurb: "Salle serveur principale gérée par l'association MiNET.", poly: [[852, 310], [772, 290], [808, 210], [888, 230]] },
    { id: "xtreme", label: "XTREME / DOLPH'INT", accent: A[2], blurb: "Local partagé par Xtreme (course en extérieur, trail, organisateurs du Bike&Run) et Dolph'INT (club de voile & nautisme).", poly: [[1000, 500], [900, 500], [927, 440]] },
    { id: "univert", label: "Univert & INTervenir", accent: A[1], blurb: "Local partagé par Univert (écologie & développement durable) et INTervenir (association humanitaire).", poly: [[1000, 500], [927, 440], [954, 380], [1027, 440]] },
    { id: "equality", label: "EquALLity & IN&acT", accent: A[3], blurb: "Local partagé par EquALLity (féminisme & égalité) et IN&acT (association LGBTQIA+ du campus).", poly: [[1027, 440], [954, 380], [981, 320], [1054, 380]] },
    { id: "hackademint", label: "Hackadem'INT", accent: A[0], blurb: "Club de cybersécurité, de hacking éthique et de CTF.", poly: [[1054, 380], [981, 320], [1008, 260], [1081, 320]] },
    { id: "paintit", label: "Paint'IT", accent: A[1], blurb: "Local partagé par Paint'IT (peinture & dessin), TellTheTale (narration & JDR) et INTimes (journal étudiant).", poly: [[1081, 320], [1008, 260], [1035, 200], [1108, 260]] },
    { id: "ss-empty-top", label: "", accent: A[5], poly: [[1008, 260], [888, 161], [915, 101], [1035, 200]] }
  ],
};

export const floors: Floor[] = [rdc, ss];
