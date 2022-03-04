const top = 20;
const imagesOptions = {
  "back.jpg": {
    desktop: {
      x: 0,
      y: 20,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "help_back.png": {
    desktop: {
      x: 0,
      y: 0,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: false,
  },

  "icon_languages.png": {
    desktop: {
      x: 0,
      y: 0,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },

  "icon_sound.png": {
    desktop: {
      x: 0,
      y: 0,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "logo.png": {
    desktop: {
      x: 133,
      y: 15 + top,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "racebet.png": {
    desktop: {
      x: 420,
      y: 20,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: false,
    depth: 1
  },

  "racebet_highlight.png": {
    desktop: {
      x: 420,
      y: 20,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: false,
    depth: 0
  },


  "table.png": {
    desktop: {
      x: 420,
      y: 20,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
    depth: 1
  },

  "table_highlight.png": {
    desktop: {
      x: 420,
      y: 20,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
    depth: 0
  },

  "left_table.png": {
    desktop: {
      x: 5,
      y: top,
      scale: {x: 0.6388, y: 0.6388},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "wheel_table.png": {
    desktop: {
      x: 75,
      y: 415,
      scale: {x: 0.64, y: 0.64},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "series.png": {
    desktop: {
      x: 75,
      y: 510,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "wheel.png": {
    desktop: {
      x: 243,
      y: 245,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    visible: true,
  },

  "wheel_spin.png": {
    desktop: {
      x: 243,
      y: 245,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    visible: true,
  },

  "wheel_shadow.png": {
    desktop: {
      x: 243,
      y: 245,
      scale: {x: 1, y: 1},
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    visible: true,
  },

  "j1.png": {
    desktop: {
      x: 90,//-3.5
      y: 568,//+15.5
      scale: {x: 0.92, y: 0.92},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "j2.png": {
    desktop: {
      x: 156,
      y: 568,
      scale: {x: 0.92, y: 0.92},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "j3.png": {
    desktop: {
      x: 222,
      y: 568,
      scale: {x: 0.92, y: 0.92},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "j4.png": {
    desktop: {
      x: 288,
      y: 568,
      scale: {x: 0.92, y: 0.92},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "j5.png": {
    desktop: {
      x: 354,
      y: 568,
      scale: {x: 0.92, y: 0.92},
    },
    origin: {
      x: 0,
      y: 0,
    },
    visible: true,
  },

  "0.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "1.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "2.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "3.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "4.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "5.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "6.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "7.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "8.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "9.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "10.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "11.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "12.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "13.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "14.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "15.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "16.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "17.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "18.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "19.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "20.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "21.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "22.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },

  "23.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "24.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "25.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "26.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "27.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "28.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "29.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "30.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "31.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "32.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "33.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "34.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "35.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
  "36.png": {
    desktop: {
      x: 145,
      y: 415,
      scale: {x: 1, y: 0.63},
    },
    origin: {
      x: 0,
      y: 0,
    },
    depth: 100,
    visible: false,
  },
};

export { imagesOptions };
