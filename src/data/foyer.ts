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

export const rdc: Floor = {
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
    { id: "club-zik", label: "CLUB ZIK", accent: A[0], poly: [[100, 120], [260, 120], [260, 185], [200, 185], [200, 170], [100, 170]] },
    { id: "intv", label: "", accent: A[3], poly: [[100, 170], [200, 170], [200, 185], [260, 185], [260, 248], [100, 248]] },
    { id: "intech", label: "INTECH", accent: A[2], poly: [[100, 248], [260, 248], [260, 312], [100, 312]] },
    { id: "club-jeux", label: "CLUB JEUX", accent: A[3], poly: [[100, 400], [260, 400], [260, 600], [100, 600]] },
    { id: "asint", label: "ASINT", accent: A[1], poly: [[360, 130], [480, 130], [480, 210], [360, 210]] },
    { id: "welcom", label: "WELCOM'", accent: A[2], poly: [[360, 210], [480, 210], [480, 260], [360, 260]] },
    { id: "bde", label: "BDE", accent: A[0], poly: [[480, 130], [600, 130], [600, 260], [480, 260]] },
    { id: "bda", label: "BDA", accent: A[3], poly: [[480, 350], [600, 350], [600, 420], [520, 420], [520, 400], [480, 400]] },
    { id: "minet", label: "MiNET", accent: A[0], poly: [[480, 400], [520, 400], [520, 420], [600, 420], [600, 480], [480, 480]] },
    { id: "emotys", label: "EMOTY:S", accent: A[2], poly: [[480, 480], [600, 480], [600, 580], [480, 580]] },
    { id: "bpm", label: "BPM", accent: A[1], poly: [[318, 400], [400, 400], [400, 500], [318, 500]] },
    { id: "declic", label: "DÉCLIC", accent: A[2], poly: [[260, 500], [400, 500], [400, 600], [260, 600]] },
    { id: "cookit", label: "COOK'IT", accent: A[1], poly: [[920, 550], [920, 700], [800, 700], [800, 550]] },
    { id: "bar", label: "BAR", accent: A[5], poly: [[800, 570], [800, 700], [750, 700], [700, 660]] },
    { id: "reserve", label: "RÉSERVE", accent: A[4], poly: [[460, 680], [580, 690], [580, 780], [460, 780]] },
    { id: "absinthe", label: "RÉSERVE", accent: A[4], poly: [[750, 700], [920, 700], [920, 780], [750, 780]] },
    { id: "toilettes-1", label: "TOILETTES", accent: A[5], poly: [[318, 500], [318, 400], [260, 400], [260, 500]] },
    { id: "toilettes-2", label: "TOILETTES", accent: A[5], poly: [[580, 690], [750, 700], [750, 780], [580, 780]] },
  ],
};

export const ss: Floor = {
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
    { id: "tijet", label: "Tijet", accent: A[0], poly: [[1000, 500], [1000, 650], [900, 650], [900, 500]] },
    { id: "cave", label: "CAVE", accent: A[4], poly: [[900, 650], [800, 630], [800, 550], [900, 550]] },
    { id: "bagdaderie", label: "BAGAGERIE", accent: A[5], poly: [[750, 550], [750, 630], [500, 620], [500, 520], [640, 520], [640, 540]] },
    { id: 'evryone', label: "EVRYONE", accent: A[0], poly: [[800, 450], [700, 450], [745, 350], [825, 370], [800, 400]] },
    { id: 'tabernacle', label: 'TABERNACLE', accent: A[0], poly: [[825, 370], [745, 350], [772, 290], [852, 310]] },
    { id: 'minet2', label: 'MiNET', accent: A[2], poly: [[852, 310], [772, 290], [808, 210], [888, 230]] },
    { id: 'xtreme', label: "Xtreme/Dolphint", accent: A[2], poly: [[1000, 500], [900, 500], [927, 440]] },
    { id: 'univert', label: "Univert", accent: A[1], poly: [[1000, 500], [927, 440], [954, 380], [1027, 440]] },
    { id: 'equallity', label: "Equallity", accent: A[3], poly: [[1027, 440], [954, 380], [981, 320], [1054, 380]] },
    { id: 'hackademint', label: "Hackadem'INT", accent: A[0], poly: [[1054, 380], [981, 320], [1008, 260], [1081, 320]] },
    { id: 'paintit', label: "Paint'IT", accent: A[1], poly: [[1081, 320], [1008, 260], [1035, 200], [1108, 260]] },
    { id: 'ss-empty-top', label: "", accent: A[5], poly: [[1008, 260], [888, 161], [915, 101], [1035, 200]] }
  ],
};

export const floors: Floor[] = [rdc, ss];
