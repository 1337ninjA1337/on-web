export const CELLS_NUMBER_ARRAY = {
  "1st12": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  "2nd12": [
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ],
  "3rd12": [
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
  ],
  "1-18": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
  ],
  "19-36": [
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
  ],
  red: [
    "1",
    "3",
    "5",
    "7",
    "9",
    "12",
    "14",
    "16",
    "18",
    "19",
    "21",
    "23",
    "25",
    "27",
    "30",
    "32",
    "34",
    "36",
  ],
  black: [
    "2",
    "4",
    "6",
    "8",
    "10",
    "11",
    "13",
    "15",
    "17",
    "20",
    "22",
    "24",
    "26",
    "28",
    "29",
    "31",
    "33",
    "35",
  ],
  "2to1-l1": [],
  "2to1-l2": [],
  "2to1-l3": [],
  even: [],
  odd: [],
};

export const BTNS_NAME_800 = [
  "2to1-l3",
  "2to1-l2",
  "2to1-l1",
  "2nd12",
  "1st12",
  "3rd12",
];

export const SECOND_SCREEN_BTNS_POS = {
  33: { y: 20 },
  16: { y: 20 },
  24: { y: 20 },
  5: { y: 20 },
  10: { y: 20 },
  23: { y: 20 },
  8: { y: 20 },
  30: { y: 20 },
  11: { y: 20 },
  12: { y: 18 },
  35: { y: 18 },
  3: { y: 18 },
  26: { y: 18 },
  0: { y: 18 },
  32: { y: 18 },
  15: { y: 18 },
  19: { y: 18 },
  4: { y: 18 },
  21: { y: 18 },
  1: { x: -28, y: -18 },
  20: { x: -25, y: -20 },
  14: { x: -10, y: -26 },
  31: { x: 10, y: -24 },
  9: { x: 20, y: -17 },
  22: { x: 26, y: -17 },
  18: { x: 32, y: -14 },
  29: { x: 37, y: -7 },
  7: { x: 38, y: 4 },
  28: { x: 30, y: 14 },
  36: { x: 35, y: 15 },
  13: { x: 40, y: 6 },
  27: { x: 40, y: -5 },
  6: { x: 30, y: -15 },
  34: { x: 25, y: -15 },
  17: { x: 21, y: -17 },
  25: { x: 9, y: -25 },
  2: { x: -12, y: -23 },
};

export const BTNS_NAME_1000 = ["1-18", "even", "red", "black", "odd", "19-36"];

const x1Col = 613,
  x2Col = 702,
  x3Col = 791,
  numW = 87,
  y1Row = 100,
  y2Row = 139,
  y3Row = 178,
  y4Row = 217,
  y5Row = 256,
  y6Row = 295,
  y7Row = 334,
  y8Row = 373,
  y9Row = 412,
  y10Row = 451,
  y11Row = 490,
  y12Row = 529;

export const CREATE_CELL_NUMBER_DATA = [
  [
    791,
    61,
    265,
    38,
    {
      cellNumber: "0",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y1Row,
    numW,
    38,
    {
      cellNumber: "1",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y1Row,
    numW,
    38,
    {
      cellNumber: "2",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y1Row,
    numW,
    38,
    {
      cellNumber: "3",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y2Row,
    numW,
    38,
    {
      cellNumber: "4",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y2Row,
    numW,
    38,
    {
      cellNumber: "5",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y2Row,
    numW,
    38,
    {
      cellNumber: "6",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y3Row,
    numW,
    38,
    {
      cellNumber: "7",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y3Row,
    numW,
    38,
    {
      cellNumber: "8",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y3Row,
    numW,
    38,
    {
      cellNumber: "9",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y4Row,
    numW,
    38,
    {
      cellNumber: "10",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y4Row,
    numW,
    38,
    {
      cellNumber: "11",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y4Row,
    numW,
    38,
    {
      cellNumber: "12",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y5Row,
    numW,
    38,
    {
      cellNumber: "13",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y5Row,
    numW,
    38,
    {
      cellNumber: "14",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y5Row,
    numW,
    38,
    {
      cellNumber: "15",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y6Row,
    numW,
    38,
    {
      cellNumber: "16",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y6Row,
    numW,
    38,
    {
      cellNumber: "17",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y6Row,
    numW,
    38,
    {
      cellNumber: "18",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y7Row,
    numW,
    38,
    {
      cellNumber: "19",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y7Row,
    numW,
    38,
    {
      cellNumber: "20",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y7Row,
    numW,
    38,
    {
      cellNumber: "21",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y8Row,
    numW,
    38,
    {
      cellNumber: "22",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y8Row,
    numW,
    38,
    {
      cellNumber: "23",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y8Row,
    numW,
    38,
    {
      cellNumber: "24",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y9Row,
    numW,
    38,
    {
      cellNumber: "25",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y9Row,
    numW,
    38,
    {
      cellNumber: "26",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y9Row,
    numW,
    38,
    {
      cellNumber: "27",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y10Row,
    numW,
    38,
    {
      cellNumber: "28",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y10Row,
    numW,
    38,
    {
      cellNumber: "29",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y10Row,
    numW,
    38,
    {
      cellNumber: "30",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y11Row,
    numW,
    38,
    {
      cellNumber: "31",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y11Row,
    numW,
    38,
    {
      cellNumber: "32",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y11Row,
    numW,
    38,
    {
      cellNumber: "33",
      type: "straight up",
      number: true,
    },
  ],
  [
    x1Col,
    y12Row,
    numW,
    38,
    {
      cellNumber: "34",
      type: "straight up",
      number: true,
    },
  ],
  [
    x2Col,
    y12Row,
    numW,
    38,
    {
      cellNumber: "35",
      type: "straight up",
      number: true,
    },
  ],
  [
    x3Col,
    y12Row,
    numW,
    38,
    {
      cellNumber: "36",
      type: "straight up",
      number: true,
    },
  ],
];

export const CREATE_CELL_BETWEEN_NUMBER_DATA = [
  [
    790,
    y1Row - 29,
    60 + 12,
    10,
    {
      cellNumber: "3|0",
      rects: ["0", "3"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y4Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "12|9",
      rects: ["9", "12"],
      type: "split",
      left: 6,
    },
  ],
  [
    x3Col - 76,
    y1Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "3|2",
      rects: ["3", "2"],
      type: "split",
    },
  ],
  [
    790,
    y2Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "6|3",
      rects: ["3", "6"],
      type: "split",
      left: 6,
    },
  ],
  [
    x3Col - 76,
    y2Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "6|5",
      rects: ["6", "5"],
      type: "split",
    },
  ],
  [
    790,
    y3Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "6|9",
      rects: ["6", "9"],
      type: "split",
      left: 6,
    },
  ],
  [
    693,
    y1Row - 29,
    68,
    10,
    {
      cellNumber: "2|0",
      rects: ["0", "2"],
      type: "split",
    },
  ],
  [
    693,
    y2Row - 33,
    68,
    10,
    {
      cellNumber: "5|2",
      rects: ["2", "5"],
      type: "split",
    },
  ],
  [
    790,
    y5Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "12|15",
      rects: ["12", "15"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y6Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "18|15",
      rects: ["15", "18"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y7Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "18|21",
      rects: ["18", "21"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y8Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "24|21",
      rects: ["21", "24"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y9Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "24|27",
      rects: ["24", "27"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y10Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "30|27",
      rects: ["27", "30"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y11Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "30|33",
      rects: ["30", "33"],
      type: "split",
      left: 6,
    },
  ],
  [
    790,
    y12Row - 33,
    60 + 12,
    10,
    {
      cellNumber: "36|33",
      rects: ["33", "36"],
      type: "split",
      left: 6,
    },
  ],
  [
    693,
    y3Row - 33,
    68,
    10,
    {
      cellNumber: "5|8",
      rects: ["5", "8"],
      type: "split",
    },
  ],
  [
    693,
    y4Row - 33,
    68,
    10,
    {
      cellNumber: "11|8",
      rects: ["8", "11"],
      type: "split",
    },
  ],
  [
    693,
    y5Row - 33,
    68,
    10,
    {
      cellNumber: "11|14",
      rects: ["11", "14"],
      type: "split",
    },
  ],
  [
    693,
    y6Row - 33,
    68,
    10,
    {
      cellNumber: "17|14",
      rects: ["14", "17"],
      type: "split",
    },
  ],
  [
    693,
    y7Row - 33,
    68,
    10,
    {
      cellNumber: "17|20",
      rects: ["17", "20"],
      type: "split",
    },
  ],
  [
    693,
    y8Row - 33,
    68,
    10,
    {
      cellNumber: "23|20",
      rects: ["20", "23"],
      type: "split",
    },
  ],
  [
    693,
    y9Row - 33,
    68,
    10,
    {
      cellNumber: "23|26",
      rects: ["23", "26"],
      type: "split",
    },
  ],
  [
    693,
    y10Row - 33,
    68,
    10,
    {
      cellNumber: "29|26",
      rects: ["26", "29"],
      type: "split",
    },
  ],
  [
    693,
    y11Row - 33,
    68,
    10,
    {
      cellNumber: "29|32",
      rects: ["29", "32"],
      type: "split",
    },
  ],
  [
    693,
    y12Row - 33,
    68,
    10,
    {
      cellNumber: "35|32",
      rects: ["32", "35"],
      type: "split",
    },
  ],
  [
    607,
    y1Row - 29,
    75,
    10,
    {
      cellNumber: "1|0",
      rects: ["0", "1"],
      type: "split",
    },
  ],
  [
    600,
    y2Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "1|4",
      rects: ["1", "4"],
      type: "split",
    },
  ],
  [
    600,
    y3Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "7|4",
      rects: ["4", "7"],
      type: "split",
    },
  ],
  [
    600,
    y4Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "7|10",
      rects: ["7", "10"],
      type: "split",
    },
  ],
  [
    600,
    y5Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "13|10",
      rects: ["10", "13"],
      type: "split",
    },
  ],
  [
    600,
    y6Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "16|13",
      rects: ["13", "16"],
      type: "split",
    },
  ],
  [
    600,
    y7Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "16|19",
      rects: ["16", "19"],
      type: "split",
    },
  ],
  [
    600,
    y8Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "22|19",
      rects: ["19", "22"],
      type: "split",
    },
  ],
  [
    600,
    y9Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "22|25",
      rects: ["22", "25"],
      type: "split",
    },
  ],
  [
    600,
    y10Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "28|25",
      rects: ["25", "28"],
      type: "split",
    },
  ],
  [
    600,
    y11Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "28|31",
      rects: ["28", "31"],
      type: "split",
    },
  ],
  [
    600,
    y12Row - 33,
    75 - 14,
    10,
    {
      cellNumber: "34|31",
      rects: ["31", "34"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y3Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "9|8",
      rects: ["9", "8"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y4Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "12|11",
      rects: ["12", "11"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y5Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "15|14",
      rects: ["15", "14"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y6Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "18|17",
      rects: ["18", "17"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y7Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "21|20",
      rects: ["21", "20"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y8Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "24|23",
      rects: ["24", "23"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y9Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "27|26",
      rects: ["27", "26"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y10Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "30|29",
      rects: ["30", "29"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y11Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "33|32",
      rects: ["33", "32"],
      type: "split",
    },
  ],
  [
    x3Col - 76,
    y12Row - 8,
    10 + 14,
    25,
    {
      cellNumber: "36|35",
      rects: ["36", "35"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y1Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "2|1",
      rects: ["2", "1"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y2Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "5|4",
      rects: ["5", "4"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y3Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "8|7",
      rects: ["8", "7"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y4Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "11|10",
      rects: ["11", "10"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y5Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "14|13",
      rects: ["14", "13"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y6Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "17|16",
      rects: ["17", "16"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y7Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "20|19",
      rects: ["20", "19"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y8Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "23|22",
      rects: ["23", "22"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y9Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "26|25",
      rects: ["26", "25"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y10Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "29|28",
      rects: ["29", "28"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y11Row - 7,
    10 + 14,
    25,
    {
      cellNumber: "32|31",
      rects: ["32", "31"],
      type: "split",
    },
  ],
  [
    x1Col + 13,
    y12Row - 8,
    10 + 14,
    25,
    {
      cellNumber: "35|34",
      rects: ["35", "34"],
      type: "split",
    },
  ],
  [
    x3Col - 81,
    y1Row - 29,
    14,
    9,
    {
      cellNumber: "3|2|0",
      rects: ["0", "2", "3"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y1Row + 6,
    14,
    10,
    {
      cellNumber: "6|5|3|2",
      rects: ["2", "3", "5", "6"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y2Row + 6,
    14,
    10,
    {
      cellNumber: "6|5|9|8",
      rects: ["5", "6", "8", "9"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y3Row + 6,
    14,
    10,
    {
      cellNumber: "12|11|9|8",
      rects: ["8", "9", "11", "12"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y4Row + 6,
    14,
    10,
    {
      cellNumber: "12|11|15|14",
      rects: ["11", "12", "14", "15"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y5Row + 6,
    14,
    10,
    {
      cellNumber: "18|17|15|14",
      rects: ["14", "15", "17", "18"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y6Row + 6,
    14,
    10,
    {
      cellNumber: "18|17|21|20",
      rects: ["17", "18", "20", "21"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y7Row + 6,
    14,
    10,
    {
      cellNumber: "24|23|21|20",
      rects: ["20", "21", "23", "24"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y8Row + 6,
    14,
    10,
    {
      cellNumber: "24|23|27|26",
      rects: ["23", "24", "26", "27"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y9Row + 6,
    14,
    10,
    {
      cellNumber: "30|29|27|26",
      rects: ["26", "27", "29", "30"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y10Row + 6,
    14,
    10,
    {
      cellNumber: "30|29|33|32",
      rects: ["29", "30", "32", "33"],
      type: "corner",
    },
  ],
  [
    x3Col - 81,
    y11Row + 6,
    14,
    10,
    {
      cellNumber: "36|35|33|32",
      rects: ["32", "33", "35", "36"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y1Row - 29,
    14,
    10,
    {
      cellNumber: "2|1|0",
      rects: ["0", "1", "2"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y2Row - 33,
    14,
    10,
    {
      cellNumber: "5|4|2|1",
      rects: ["1", "2", "4", "5"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y3Row - 33,
    14,
    10,
    {
      cellNumber: "5|4|8|7",
      rects: ["4", "5", "7", "8"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y4Row - 33,
    14,
    10,
    {
      cellNumber: "11|10|8|7",
      rects: ["7", "8", "10", "11"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y5Row - 33,
    14,
    10,
    {
      cellNumber: "11|10|14|13",
      rects: ["10", "11", "13", "14"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y6Row - 33,
    14,
    10,
    {
      cellNumber: "17|16|14|13",
      rects: ["13", "14", "16", "17"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y7Row - 33,
    14,
    10,
    {
      cellNumber: "17|16|20|19",
      rects: ["16", "17", "19", "20"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y8Row - 33,
    14,
    10,
    {
      cellNumber: "23|22|20|19",
      rects: ["19", "20", "22", "23"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y9Row - 33,
    14,
    10,
    {
      cellNumber: "23|22|26|25",
      rects: ["22", "23", "25", "26"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y10Row - 33,
    14,
    10,
    {
      cellNumber: "29|28|26|25",
      rects: ["25", "26", "28", "29"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y11Row - 33,
    14,
    10,
    {
      cellNumber: "29|28|32|31",
      rects: ["28", "29", "31", "32"],
      type: "corner",
    },
  ],
  [
    x1Col + 8,
    y12Row - 33,
    14,
    10,
    {
      cellNumber: "35|34|32|31",
      rects: ["31", "32", "34", "35"],
      type: "corner",
    },
  ],
  [
    540,
    y11Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "35|34|32|31|33|36",
      rects: ["31", "32", "34", "35", "33", "36"],
      type: "corner",
    },
  ],
  [
    540,
    y11Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "32|31|33",
      rects: ["31", "32", "33"],
      type: "corner",
    },
  ],
  [
    540,
    y12Row - 8,
    5 + 10,
    25,
    {
      cellNumber: "34|35|36",
      rects: ["34", "35", "36"],
      type: "corner",
    },
  ],
  [
    540,
    y10Row + 5,
    5 + 10,
    10,
    {
      cellNumber: "32|31|33|28|29|30",
      rects: ["31", "32", "33", "28", "29", "30"],
      type: "corner",
    },
  ],
  [
    540,
    y10Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "28|29|30",
      rects: ["28", "29", "30"],
      type: "corner",
    },
  ],
  [
    540,
    y9Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "25|26|27|28|29|30",
      rects: ["25", "26", "27", "28", "29", "30"],
      type: "corner",
    },
  ],
  [
    540,
    y9Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "25|26|27",
      rects: ["25", "26", "27"],
      type: "corner",
    },
  ],
  [
    540,
    y8Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "25|26|27|22|23|24",
      rects: ["25", "26", "27", "22", "23", "24"],
      type: "corner",
    },
  ],
  [
    540,
    y8Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "22|23|24",
      rects: ["22", "23", "24"],
      type: "corner",
    },
  ],
  [
    540,
    y7Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "19|20|21|22|23|24",
      rects: ["19", "20", "21", "22", "23", "24"],
      type: "corner",
    },
  ],
  [
    540,
    y7Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "19|20|21",
      rects: ["19", "20", "21"],
      type: "corner",
    },
  ],
  [
    540,
    y6Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "19|20|21|16|17|18",
      rects: ["19", "20", "21", "16", "17", "18"],
      type: "corner",
    },
  ],
  [
    540,
    y6Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "16|17|18",
      rects: ["16", "17", "18"],
      type: "corner",
    },
  ],
  [
    540,
    y5Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "13|14|15|16|17|18",
      rects: ["13", "14", "15", "16", "17", "18"],
      type: "corner",
    },
  ],
  [
    540,
    y5Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "13|14|15",
      rects: ["13", "14", "15"],
      type: "corner",
    },
  ],
  [
    540,
    y4Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "13|14|15|10|11|12",
      rects: ["13", "14", "15", "10", "11", "12"],
      type: "corner",
    },
  ],
  [
    540,
    y4Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "10|11|12",
      rects: ["10", "11", "12"],
      type: "corner",
    },
  ],
  [
    540,
    y3Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "7|8|9|10|11|12",
      rects: ["7", "8", "9", "10", "11", "12"],
      type: "corner",
    },
  ],
  [
    540,
    y3Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "7|8|9",
      rects: ["7", "8", "9"],
      type: "corner",
    },
  ],
  [
    540,
    y2Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "7|8|9|4|5|6",
      rects: ["7", "8", "9", "4", "5", "6"],
      type: "corner",
    },
  ],
  [
    540,
    y2Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "4|5|6",
      rects: ["4", "5", "6"],
      type: "corner",
    },
  ],
  [
    540,
    y1Row + 5,
    5 + 10,
    8 + 2,
    {
      cellNumber: "1|2|3|4|5|6",
      rects: ["1", "2", "3", "4", "5", "6"],
      type: "corner",
    },
  ],
  [
    540,
    y1Row - 7,
    5 + 10,
    25,
    {
      cellNumber: "1|2|3",
      rects: ["1", "2", "3"],
      type: "corner",
    },
  ],
];

export const CREATE_CELL_LEFT_BOTTOM_DATA = [
  [
    524,
    217,
    48,
    154,
    {
      cellNumber: "1st12",
      type: "dozen",
    },
  ],
  [
    524,
    373,
    48,
    154,
    {
      cellNumber: "2nd12",
      type: "dozen",
    },
  ],
  [
    524,
    529,
    48,
    154,
    {
      cellNumber: "3rd12",
      type: "dozen",
    },
  ],
  [
    474,
    139,
    48,
    76,
    {
      cellNumber: "1-18",
      type: "low",
    },
  ],
  [
    474,
    217,
    48,
    76,
    {
      cellNumber: "even",
      type: "even",
    },
  ],
  [
    474,
    295,
    48,
    76,
    {
      cellNumber: "red",
      type: "red",
    },
  ],
  [
    474,
    373,
    48,
    76,
    {
      cellNumber: "black",
      type: "black",
    },
  ],
  [
    474,
    451,
    48,
    76,
    {
      cellNumber: "odd",
      type: "odd",
    },
  ],
  [
    474,
    529,
    48,
    76,
    {
      cellNumber: "19-36",
      type: "high",
    },
  ],
  [
    x3Col,
    568,
    numW,
    38,
    {
      cellNumber: "2to1-l1",
      type: "column",
    },
  ],
  [
    x2Col,
    568,
    numW,
    38,
    {
      cellNumber: "2to1-l2",
      type: "column",
    },
  ],
  [
    x1Col,
    568,
    numW,
    38,
    {
      cellNumber: "2to1-l3",
      type: "column",
    },
  ],
];

export const CREATE_CELL_LEFT_BTNS = [
  [
    140,
    558,
    65,
    47,
    {
      cellNumber: "5|8|10|11|13|16|23|24|27|30|33|36",
      rects: [
        "5",
        "8",
        "10",
        "11",
        "13",
        "16",
        "23",
        "24",
        "27",
        "30",
        "33",
        "36",
      ],
    },
    ["5|8", "11|10", "16|13", "24|23", "30|27", "36|33"],
  ],
  [
    205,
    558,
    65,
    47,
    {
      cellNumber: "0|2|3|4|7|12|15|18|19|21|22|25|26|28|29|32|35",
      rects: [
        "0",
        "2",
        "3",
        "4",
        "7",
        "12",
        "15",
        "18",
        "19",
        "21",
        "22",
        "25",
        "26",
        "28",
        "29",
        "32",
        "35",
      ],
    },
    ["3|2|0", "7|4", "12|15", "18|21", "22|19", "29|28|26|25", "35|32"],
  ],
  [
    276,
    558,
    69,
    47,
    {
      cellNumber: "1|6|9|14|17|20|31|34",
      rects: ["1", "6", "9", "14", "17", "20", "31", "34"],
    },
    ["6", "9", "17", "14", "20", "31", "34", "1"],
  ],
  [
    348,
    558,
    70,
    47,
    {
      cellNumber: "1|6|9|14|17|20|31|34",
      rects: ["1", "6", "9", "14", "17", "20", "31", "34"],
    },
    ["6|9", "17|14", "17|20", "34|31", "1"],
  ],
  [
    413,
    558,
    64,
    47,
    {
      cellNumber: "0|3|12|15|26|32|35",
      rects: ["0", "3", "12", "15", "26", "32", "35"],
    },
    ["3|0", "12|15", "26", "35|32"],
  ],
];

export const CREATE_SECOND_CELL_NUMBER_DATA = [
  [
    739,
    280,
    {
      cellNumber: "0",
      type: "straight up",
      number: true,
      top: -1,
      topRect: -2,
    },
    false,
    [0, 0, 0, 34, 56, 34, 56, 0],
  ],
  [
    739,
    144,
    {
      cellNumber: "12",
      type: "straight up",
      number: true,
      topRect: -2,
    },
    false,
    [0, 0, 0, 33, 56, 33, 56, 0],
  ],
  [
    736,
    112,
    {
      cellNumber: "28",
      type: "straight up",
      number: true,
      left: -1
    },
    false,
    [0, 0, 3, 33, 58, 33, 56, -7],
  ],
  [
    720,
    91,
    {
      cellNumber: "7",
      type: "straight up",
      number: true,
      top: 4,
      topRect: 3,
      leftRect: 1
    },
    false,
    [0, 0, 17, 23, 73, 16, 63, -7, 48, -25],
  ],
  [
    690,
    67,
    {
      cellNumber: "29",
      type: "straight up",
      number: true,
      top: -4,
      left: -4,
      topRect: 6,
    },
    false,
    [0, 0, 32, 23, 78, -2, 55, -21, 34, -32],
  ],
  [
    650,
    58,
    {
      cellNumber: "18",
      type: "straight up",
      number: true,
      top: -3,
      left: -6,
      topRect: 2,
      leftRect: 1
    },
    false,
    [0, 0, 40, 9, 74, -21, 40, -31, 13, -35],
  ],
  [
    605,
    58,
    {
      cellNumber: "22",
      type: "straight up",
      number: true,
      top: -1,
      left: -6,
      topRect: -2,
      leftRect: 1
    },
    false,
    [0, 0, 45, 0, 58, -35, 0, -35],
  ],
  [
    565,
    58,
    {
      cellNumber: "9",
      type: "straight up",
      number: true,
      top: -1,
      left: 5,
      topRect: -2,
      leftRect: 1
    },
    false,
    [0, 0, 42, 0, 42, -35, -14, -35],
  ],
  [
    526,
    68,
    {
      cellNumber: "31",
      type: "straight up",
      number: true,
      top: -4,
      left: 6,
      topRect: 3,
      leftRect: 1
    },
    false,
    [0, 0, 37, -10, 25, -45, -14, -37, -34, -32],
  ],
  [
    497,
    88,
    {
      cellNumber: "14",
      type: "straight up",
      number: true,
      top: -2,
      left: -2,
      topRect: 6,
      leftRect: 1
    },
    false,
    [0, 0, 30, -18, -3, -52, -25, -40, -50, -20],
  ],
  [
    483,
    113,
    {
      cellNumber: "20",
      type: "straight up",
      number: true,
      top: 1,
      left: -6,
      topRect: 3,
      leftRect: 1
    },
    false,
    [0, 0, 6, -12, 15, -25, -36, -47, -47, -30, -57, -8],
  ],
  [
    739,
    178,
    {
      cellNumber: "35",
      type: "straight up",
      number: true,
      topRect: -2,
    },
    false,
    [0, 0, 0, 34, 56, 34, 56, 0],
  ],
  [
    739,
    210,
    {
      cellNumber: "3",
      type: "straight up",
      number: true,
      top: -2,
      topRect: -2,
    },
    false,
    [0, 0, 0, 35, 56, 35, 56, 0],
  ],
  [
    739,
    313,
    {
      cellNumber: "32",
      type: "straight up",
      number: true,
      top: -2,
      topRect: -2,
    },
    false,
    [0, 0, 0, 35, 56, 35, 56, 0],
  ],
  [
    739,
    348,
    {
      cellNumber: "15",
      type: "straight up",
      number: true,
      top: -1,
      topRect: -2,
    },
    false,
    [0, 0, 0, 35, 56, 35, 56, 0],
  ],
  [
    739,
    382,
    {
      cellNumber: "19",
      type: "straight up",
      number: true,
      topRect: -2,
    },
    false,
    [0, 0, 0, 35, 56, 35, 56, 0],
  ],
  [
    739,
    415,
    {
      cellNumber: "4",
      type: "straight up",
      number: true,
      top: -2,
      topRect: -2,
    },
    false,
    [0, 0, 0, 35, 56, 35, 56, 0],
  ],
  [
    738,
    450,
    {
      cellNumber: "21",
      type: "straight up",
      number: true,
      top: -2,
      topRect: -1,
    },
    false,
    [0, 0, -2, 30, 55, 36, 56, 0],
  ],
  [
    739,
    246,
    {
      cellNumber: "26",
      type: "straight up",
      number: true,
      topRect: -2,
      leftRect: 0.5
    },
    false,
    [0, 0, 0, 35, 55, 35, 55, 0],
  ],
  [
    426,
    144,
    {
      cellNumber: "33",
      type: "straight up",
      number: true,
      topRect: -1,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    426,
    181,
    {
      cellNumber: "16",
      type: "straight up",
      number: true,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    426,
    219,
    {
      cellNumber: "24",
      type: "straight up",
      number: true,
      topRect: -1,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    426,
    255,
    {
      cellNumber: "5",
      type: "straight up",
      number: true,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    426,
    292,
    {
      cellNumber: "10",
      type: "straight up",
      number: true,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    426,
    330,
    {
      cellNumber: "23",
      type: "straight up",
      number: true,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    426,
    367,
    {
      cellNumber: "8",
      type: "straight up",
      number: true,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    426,
    406,
    {
      cellNumber: "30",
      type: "straight up",
      number: true,
      topRect: -1,
    },
    false,
    [-1, 0, -1, 38, 55, 38, 55, 0],
  ],
  [
    425,
    444,
    {
      cellNumber: "11",
      type: "straight up",
      number: true,
      left: -2,
      topRect: -1,
      leftRect: 0.5
    },
    false,
    [0, 0, 0, 38, 55, 32, 55, 0],
  ],
  [
    424,
    481,
    {
      cellNumber: "36",
      type: "straight up",
      number: true,
      top: -3,
      left: -2,
      topRect: 3,
      leftRect: 1
    },
    false,
    [0, 0, 6, 20, 21, 40, 70, 17, 55, -7],
  ],
  [
    445,
    520,
    {
      cellNumber: "13",
      type: "straight up",
      number: true,
      left: 2,
      topRect: 6,
      leftRect: 1
    },
    false,
    [0, 0, 25, 22, 40, 30, 75, 0, 50, -22],
  ],
  [
    486,
    551,
    {
      cellNumber: "27",
      type: "straight up",
      number: true,
      top: 3,
      left: 4,
      topRect: 5,
      leftRect: 1
    },
    false,
    [0, 0, 25, 10, 58, 17, 70, -19, 35, -33],
  ],
  [
    545,
    567,
    {
      cellNumber: "6",
      type: "straight up",
      number: true,
      top: 2,
      left: 2,
      topRect: -2,
      leftRect: 1
    },
    false,
    [0, 0, 25, 2, 53, 2, 53, -33, 19, -35, 10, -37],
  ],
  [
    598,
    568,
    {
      cellNumber: "34",
      type: "straight up",
      number: true,
      top: 2,
      left: -4,
      topRect: -2,
      leftRect: 1
    },
    false,
    [0, 0, 54, 0, 45, -36, 0, -36],
  ],
  [
    654,
    568,
    {
      cellNumber: "17",
      type: "straight up",
      number: true,
      top: 3,
      left: -4,
      topRect: 1,
      leftRect: 1
    },
    false,
    [0, 0, 23, -1, 60, -10, 30, -42, -14, -36],
  ],
  [
    715,
    558,
    {
      cellNumber: "25",
      type: "straight up",
      number: true,
      top: 1,
      left: -4,
      topRect: 8,
    },
    false,
    [0, 0, 30, -15, 54, -32, 4, -55, -14, -41, -35, -33],
  ],
  [
    769,
    525,
    {
      cellNumber: "2",
      type: "straight up",
      number: true,
      top: -2,
      topRect: 3,
    },
    false,
    [0, 0, 13, -16, 24, -38, -34, -45, -50, -20],
  ],
  [
    480,
    144,
    {
      cellNumber: "1",
      type: "straight up",
      number: true,
      top: 1,
      left: -3,
      topRect: -1,
      leftRect: 1
    },
    false,
    [0, 0, 1, -30, -55, -38, -57, 0],
  ],
];

export const CREATE_SECOND_CELL_BIG_BTNS = [
  [
    650,
    144,
    {
      cellNumber: "0|3|12|15|26|32|35",
      rects: ["0", "3", "12", "15", "26", "32", "35"],
    },
    ["3|0", "12|15", "26", "35|32"],
    [
      0, 12, 0, 226, 2, 228, 4, 230, 6, 232, 8, 234, 10, 236, 12, 238, 16, 239,
      55, 240, 55, 0, 13, 0,
    ],
  ],
  [
    596,
    297,
    {
      cellNumber: "1|20|14|31|9|6|17|34",
      rects: ["1", "20", "14", "31", "9", "6", "34", "17"],
    },
    ["6|9", "17|14", "17|20", "34|31", "1"],
    [0, 0, -34, 212, 30, 214, 70, 210],
  ],
  [
    510,
    120,
    {
      cellNumber: "1|20|14|31|9|6|34|17",
      rects: ["1", "20", "14", "31", "9", "6", "34", "17"],
    },
    ["6", "9", "17", "14", "20", "31", "34", "1"],
    [
      0, 0, 0, 25, 88, 180, 95, -39, 60, -39, 40, -35, 30, -30, 20, -25, 15,
      -20, 10, -17,
    ],
  ],
  [
    510,
    146,
    {
      cellNumber: "5|8|10|11|13|16|23|24|27|30|33|36",
      rects: [
        "5",
        "8",
        "10",
        "11",
        "13",
        "16",
        "23",
        "24",
        "27",
        "30",
        "33",
        "36",
      ],
    },
    ["5|8", "11|10", "16|13", "24|23", "30|27", "36|33"],
    [0, -2, 0, 320, 5, 335, 10, 340, 14, 345, 20, 351, 53, 364, 88, 152],
  ],
  [
    598,
    300,
    {
      cellNumber: "0|2|3|4|7|12|15|18|19|21|22|25|26|28|29|32|35",
      rects: [
        "0",
        "2",
        "3",
        "4",
        "7",
        "12",
        "15",
        "18",
        "19",
        "21",
        "22",
        "25",
        "26",
        "28",
        "29",
        "32",
        "35",
      ],
    },
    ["3|2|0", "7|4", "12|15", "18|21", "22|19", "29|28|26|25", "35|32"],
    [
      0, 0, 67, 205, 90, 193, 100, 183, 107, 168, 107, 82, 65, 82, 61, 78, 58,
      76, 56, 73, 50, 64, 50, -140, 55, -145, 60, -152, 65, -155, 70, -157, 107,
      -157, 107, -170, 104, -183, 95, -198, 80, -208, 65, -215, 45, -219, 7,
      -219,
    ],
  ],
];

export const PAY_OBJECT = {
  "1-18": 2,
  even: 2,
  red: 2,
  black: 2,
  odd: 2,
  "19-36": 2,
  "1st12": 3,
  "2nd12": 3,
  "3rd12": 3,
  "2to1-l3": 3,
  "2to1-l2": 3,
  "2to1-l1": 3,
  "35|34|32|31|33|36": 6,
  "32|31|33|28|29|30": 6,
  "25|26|27|28|29|30": 6,
  "25|26|27|22|23|24": 6,
  "19|20|21|22|23|24": 6,
  "19|20|21|16|17|18": 6,
  "13|14|15|16|17|18": 6,
  "13|14|15|10|11|12": 6,
  "7|8|9|10|11|12": 6,
  "7|8|9|4|5|6": 6,
  "1|2|3|4|5|6": 6,
  "6|5|3|2": 9,
  "6|5|9|8": 9,
  "12|11|9|8": 9,
  "12|11|15|14": 9,
  "18|17|15|14": 9,
  "18|17|21|20": 9,
  "24|23|21|20": 9,
  "24|23|27|26": 9,
  "30|29|27|26": 9,
  "30|29|33|32": 9,
  "36|35|33|32": 9,
  "5|4|2|1": 9,
  "5|4|8|7": 9,
  "11|10|8|7": 9,
  "11|10|14|13": 9,
  "17|16|14|13": 9,
  "17|16|20|19": 9,
  "23|22|20|19": 9,
  "23|22|26|25": 9,
  "29|28|26|25": 9,
  "29|28|32|31": 9,
  "35|34|32|31": 9,
  "3|2|0": 12,
  "32|31|33": 12,
  "34|35|36": 12,
  "28|29|30": 12,
  "25|26|27": 12,
  "22|23|24": 12,
  "19|20|21": 12,
  "16|17|18": 12,
  "13|14|15": 12,
  "10|11|12": 12,
  "7|8|9": 12,
  "4|5|6": 12,
  "2|1|0": 12,
  "1|2|3": 12,
  "3|0": 18,
  "12|9": 18,
  "3|2": 18,
  "6|3": 18,
  "6|5": 18,
  "6|9": 18,
  "2|0": 18,
  "5|2": 18,
  "12|15": 18,
  "18|15": 18,
  "18|21": 18,
  "24|21": 18,
  "24|27": 18,
  "30|27": 18,
  "30|33": 18,
  "36|33": 18,
  "5|8": 18,
  "11|8": 18,
  "11|14": 18,
  "17|14": 18,
  "17|20": 18,
  "23|20": 18,
  "23|26": 18,
  "29|26": 18,
  "29|32": 18,
  "35|32": 18,
  "1|0": 18,
  "1|4": 18,
  "7|4": 18,
  "7|10": 18,
  "13|10": 18,
  "16|13": 18,
  "16|19": 18,
  "22|19": 18,
  "22|25": 18,
  "28|25": 18,
  "28|31": 18,
  "34|31": 18,
  "9|8": 18,
  "12|11": 18,
  "15|14": 18,
  "18|17": 18,
  "21|20": 18,
  "24|23": 18,
  "27|26": 18,
  "30|29": 18,
  "33|32": 18,
  "36|35": 18,
  "2|1": 18,
  "5|4": 18,
  "8|7": 18,
  "11|10": 18,
  "14|13": 18,
  "17|16": 18,
  "20|19": 18,
  "23|22": 18,
  "26|25": 18,
  "29|28": 18,
  "32|31": 18,
  "35|34": 18,
  "0": 36,
  "1": 36,
  "2": 36,
  "3": 36,
  "4": 36,
  "5": 36,
  "6": 36,
  "7": 36,
  "8": 36,
  "9": 36,
  "10": 36,
  "11": 36,
  "12": 36,
  "13": 36,
  "14": 36,
  "15": 36,
  "16": 36,
  "17": 36,
  "18": 36,
  "19": 36,
  "20": 36,
  "21": 36,
  "22": 36,
  "23": 36,
  "24": 36,
  "25": 36,
  "26": 36,
  "27": 36,
  "28": 36,
  "29": 36,
  "30": 36,
  "31": 36,
  "32": 36,
  "33": 36,
  "34": 36,
  "35": 36,
  "36": 36,
};