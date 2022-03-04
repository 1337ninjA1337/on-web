import { game } from "../Config";
import { currencySettings } from "../api";

class Help extends Phaser.Scene {
  constructor() {
    super("Help");
  }

  create() {
    game.scene.keys["SetLanguages"].addText(game.scene.keys["SetLanguages"].startLanguage, "Help");
    this.togglePageVisibility(false);
    this.add
      .image(0, 20, "spritesheet", "help_back.png")
      .setOrigin(0)
      .setScale(1)
      .setInteractive()
      .setVisible(true);

    this.logo = this.add
      .image(137, 120, "spritesheet", "logo.png")
      .setOrigin(0)
      .setScale(1)
      .setVisible(true);

    this.CONTAINER_ROULET_HELP = this.add.container(236, 327, [
      this.add
        .image(0, 0, "spritesheet", "wheel.png")
        .setOrigin(0.5)
        .setScale(1),
      this.add
        .image(0, 0, "spritesheet", "wheel_shadow.png")
        .setOrigin(0.5)
        .setScale(1),
    ]);

    const CONTAINER_BTN_OPERATION = this.add.container(1, 1, [
      this.add
        .rectangle(150, 25, 298, 48, 0x223c21, 1)
        .setOrigin(0.5)
        .setInteractive(),
      this.add
        .graphics()
        .lineStyle(2, 0x8a7c14, 1)
        .strokeRoundedRect(0, 0, 298, 48, 6),
      this["Operation"],
    ]);

    const CONTAINER_BTN_SERIES = this.add.container(1, 81, [
      this.add
        .rectangle(150, 25, 298, 48, 0x223c21, 1)
        .setOrigin(0.5)
        .setInteractive(),
      this.add
        .graphics()
        .lineStyle(2, 0x8a7c14, 1)
        .strokeRoundedRect(0, 0, 298, 48, 6),
      this["Series"]
    ]);

    const CONTAINER_BTN_WINPLAN = this.add.container(1, 161, [
      this.add
        .rectangle(150, 25, 298, 48, 0x223c21, 1)
        .setOrigin(0.5)
        .setInteractive(),
      this.add
        .graphics()
        .lineStyle(2, 0x8a7c14, 1)
        .strokeRoundedRect(0, 0, 298, 48, 6),
      this["WinPlan"]
    ]);

    const style2 = {
        fontSize: 20,
        color: "#FFFF6E",
        fontWeight: "900",
        fontFamily: "Arial",
        align: "center",
        lineSpacing: -2,
      };

    const CONTAINER_OPERATION = this.add
      .container(397, 143, [
          this["Text1"],
          this["Text2"],
          this["Text3"],
          this["Text4"],
          this["Text5"],
      ])
      .setVisible(false);

    const CONTAINER_WINPLAN = this.add
      .container(50, 50, [
        this.add
          .image(10, 23, "spritesheet", "help_win.png")
          .setOrigin(0)
          .setScale(1),
        this["Lim"],

        this.add.text(332, 88, "A", style2).setOrigin(0.5),
        this["FullNumber"],
        this.add.text(590, 88, "35:1", style2).setOrigin(0.5),
        this.add.text(645, 88, ""+currencySettings.rouletteNumbers, style2).setOrigin(0.5),

        this.add.text(332, 124, "B", style2).setOrigin(0.5),
        this["Split"],
        this.add.text(590, 124, "17:1", style2).setOrigin(0.5),
        this.add.text(645, 124, ""+currencySettings.rouletteSplitNumbers, style2).setOrigin(0.5),

        this.add.text(332, 160, "С", style2).setOrigin(0.5),
        this["Street"],
        this.add.text(590, 160, "11:1", style2).setOrigin(0.5),
        this.add.text(645, 160, ""+currencySettings.rouletteStreetNumbers, style2).setOrigin(0.5),

        this.add.text(332, 196, "D", style2).setOrigin(0.5),
        this["Corner"],
        this.add.text(590, 196, "8:1", style2).setOrigin(0.5),
        this.add.text(645, 196, ""+currencySettings.rouletteCornerNumbers, style2).setOrigin(0.5),

        this.add.text(332, 232, "E", style2).setOrigin(0.5),
        this["SixLine"],
        this.add.text(590, 232, "5:1", style2).setOrigin(0.5),
        this.add.text(645, 232, ""+currencySettings.rouletteSixLineNumbers, style2).setOrigin(0.5),

        this.add.text(332, 268, "F", style2).setOrigin(0.5),
        this["Column"],
        this.add.text(590, 268, "2:1", style2).setOrigin(0.5),
        this.add.text(645, 268, ""+currencySettings.rouletteX3, style2).setOrigin(0.5),

        this.add.text(332, 304, "G", style2).setOrigin(0.5),
        this["Dozen"],
        this.add.text(590, 304, "2:1", style2).setOrigin(0.5),
        this.add.text(645, 304, ""+currencySettings.rouletteX3, style2).setOrigin(0.5),

        this.add.text(332, 340, "H", style2).setOrigin(0.5),
        this["Low/High"],
        this.add.text(590, 340, "1:1", style2).setOrigin(0.5),
        this.add.text(645, 340, ""+currencySettings.rouletteX2, style2).setOrigin(0.5),

        this.add.text(332, 376, "I", style2).setOrigin(0.5),
        this["Odd/Even"],
        this.add.text(590, 376, "1:1", style2).setOrigin(0.5),
        this.add.text(645, 376, ""+currencySettings.rouletteX2, style2).setOrigin(0.5),

        this.add.text(332, 412, "J", style2).setOrigin(0.5),
        this["Red/Black"],
        this.add.text(590, 412, "1:1", style2).setOrigin(0.5),
        this.add.text(645, 412, ""+currencySettings.rouletteX2, style2).setOrigin(0.5),

        this["MaximumLimit"],
      ])
      .setVisible(false);

    const CONTAINER_BTN_SERIE5_8 = this.add.container(181, -111, [
        this.add
          .rectangle(149, 26, 297, 47, 0x223c21, 1)
          .setOrigin(0.5)
          .setInteractive(),
        this.add
          .graphics()
          .lineStyle(2, 0x8a7c14, 1)
          .strokeRoundedRect(0, 2, 298, 48, 6),
        this["Serie5/8"],
      ]),
      CONTAINER_BTN_SERIE_BIG = this.add.container(181, -46, [
        this.add
          .rectangle(149, 26, 297, 47, 0x223c21, 1)
          .setOrigin(0.5)
          .setInteractive(),
        this.add
          .graphics()
          .lineStyle(2, 0x8a7c14, 1)
          .strokeRoundedRect(0, 2, 298, 48, 6),
        this["BigSerie"],
      ]),
      CONTAINER_BTN_SERIE_PLEIN = this.add.container(181, 19, [
        this.add
          .rectangle(149, 26, 297, 47, 0x223c21, 1)
          .setOrigin(0.5)
          .setInteractive(),
        this.add
          .graphics()
          .lineStyle(2, 0x8a7c14, 1)
          .strokeRoundedRect(0, 2, 298, 48, 6),
        this["OrphelinsPlein"],
      ]),
      CONTAINER_BTN_SERIE_CHEVAL = this.add.container(181, 84, [
        this.add
          .rectangle(149, 26, 297, 47, 0x223c21, 1)
          .setOrigin(0.5)
          .setInteractive(),
        this.add
          .graphics()
          .lineStyle(2, 0x8a7c14, 1)
          .strokeRoundedRect(0, 2, 298, 48, 6),
        this["OrphelinsCheval"],
      ]),
      CONTAINER_BTN_SERIE_ZERO = this.add.container(181, 149, [
        this.add
          .rectangle(149, 26, 297, 47, 0x223c21, 1)
          .setOrigin(0.5)
          .setInteractive(),
        this.add
          .graphics()
          .lineStyle(2, 0x8a7c14, 1)
          .strokeRoundedRect(0, 2, 298, 48, 6),
        this["ZeroGame"],
      ]);

    this.obj = [
      {
        text: this["TextSeries5/8"],
        textTop: this["textTopSerie5/8"],
      },
      {
        text: this["TextBigSeries"],
        textTop: this["textTopBigSerie"],
      },
      {
        text: this["TextOrphelinsPlein"],
        textTop: this["textTopOrphelinsPlein"],
      },
      {
        text: this["TextOrphelinscheval"],
        textTop: this["textTopOrphelinsCheval"],
      },
      {
        text: this["TextZeroGame"],
        textTop: this["textTopZeroGame"],
      },
      {
        textTop: this["textTopOperation"]
      },
      {
        textTop: this["textTopWinPlan"]
      }
    ];

    this.CONTAINER_SERIE = this.add
      .container(250, 250, [
        this.add
          .image(-10, 0, "spritesheet", "serie_5_8.png")
          .setOrigin(0.5)
          .setScale(1),
        this.add
          .image(-10, 0, "spritesheet", "big_serie.png")
          .setOrigin(0.5)
          .setScale(1)
          .setVisible(false),
        this.add
          .image(-10, 0, "spritesheet", "orphelins_plein.png")
          .setOrigin(0.5)
          .setScale(1)
          .setVisible(false),
        this.add
          .image(-10, 0, "spritesheet", "orphelins_cheval.png")
          .setOrigin(0.5)
          .setScale(1)
          .setVisible(false),
        this.add
          .image(-10, 0, "spritesheet", "zero_game.png")
          .setOrigin(0.5)
          .setScale(1)
          .setVisible(false),
        this["TextSeries5/8"],
        CONTAINER_BTN_SERIE5_8,
        CONTAINER_BTN_SERIE_BIG,
        CONTAINER_BTN_SERIE_PLEIN,
        CONTAINER_BTN_SERIE_CHEVAL,
        CONTAINER_BTN_SERIE_ZERO,
      ])
      .setVisible(false);

    CONTAINER_BTN_SERIE5_8.list[0].on("pointerup", () => {
        this.hideAllText()
        this.obj[0].text.setVisible(true);
      this.hideAllSeriesWheel(0);
    });
    CONTAINER_BTN_SERIE_BIG.list[0].on("pointerup", () => {
        this.hideAllText()
        this.obj[1].text.setVisible(true);
      this.hideAllSeriesWheel(1);
    });
    CONTAINER_BTN_SERIE_PLEIN.list[0].on("pointerup", () => {
        this.hideAllText()
        this.obj[2].text.setVisible(true);
      this.hideAllSeriesWheel(2);
    });
    CONTAINER_BTN_SERIE_CHEVAL.list[0].on("pointerup", () => {
        this.hideAllText()
        this.obj[3].text.setVisible(true);
      this.hideAllSeriesWheel(3);
    });
    CONTAINER_BTN_SERIE_ZERO.list[0].on("pointerup", () => {
        this.hideAllText()
        this.obj[4].text.setVisible(true);
      this.hideAllSeriesWheel(4);
    });

    this.CONTAINER_BTNS_HELP = this.add.container(420, 200, [
      CONTAINER_BTN_OPERATION,
      CONTAINER_BTN_SERIES,
      CONTAINER_BTN_WINPLAN,
    ]);

    this.CONTAINER_BTN_EXIT = this.add.container(250, 550, [
      this.add
        .rectangle(150, 22, 299, 41, 0x223c21, 1)
        .setOrigin(0.5)
        .setInteractive(),
      this.add
        .graphics()
        .lineStyle(2, 0xafba8c, 1)
        .strokeRoundedRect(1, 0, 298, 43, 6),
      this["Exit"],
      this["MainMenu"]
    ]);

    CONTAINER_BTN_OPERATION.list[0].on("pointerup", () => {
      this.hideMain(5);
      CONTAINER_OPERATION.setVisible(true);
    });

    CONTAINER_BTN_SERIES.list[0].on("pointerup", () => {
      this.hideMain(0);
      this["TextSeries5/8"].setVisible(true);
      this.CONTAINER_SERIE.setVisible(true);
    });

    CONTAINER_BTN_WINPLAN.list[0].on("pointerup", () => {
      this.hideMain(6);
      CONTAINER_WINPLAN.setVisible(true);
    });

    this.CONTAINER_BTN_EXIT.list[0].on("pointerup", () => {
      game.scene.keys["Musics"].sounds("btn2");
      if (this.CONTAINER_BTN_EXIT.list[2].visible === true) {
        this.togglePageVisibility(false);
        game.scene.keys["MainWindow"].togglePageVisibility(true);
        game.scene.keys["TopMenu"].isHelp = false;
        game.scene.keys["TopMenu"].topMenuContainer.list[0].setInteractive();
      } else {
        this.logo.setVisible(true);
        this.CONTAINER_ROULET_HELP.setVisible(true);
        this.CONTAINER_BTNS_HELP.setVisible(true);
        this.CONTAINER_BTN_EXIT.list[3].setVisible(false);
        this.CONTAINER_BTN_EXIT.list[2].setVisible(true);
        CONTAINER_OPERATION.setVisible(false);
        CONTAINER_WINPLAN.setVisible(false);
        this.CONTAINER_SERIE.setVisible(false);
        this.hideAllSeriesWheel(0);
        this["HELP"].setVisible(true);
        this.hideAllText();
      }
    });
  }

    hideAllText() {
        this.obj.forEach(item => {
            if (item.text && item.text.visible) item.text.setVisible(false);
            if (item.textTop.visible) item.textTop.setVisible(false);
        })
    }

  hideAllSeriesWheel(i) {
    game.scene.keys["Musics"].sounds("btn2");
    this.CONTAINER_SERIE.list[0].setVisible(i === 0);
    this.CONTAINER_SERIE.list[1].setVisible(i === 1);
    this.CONTAINER_SERIE.list[2].setVisible(i === 2);
    this.CONTAINER_SERIE.list[3].setVisible(i === 3);
    this.CONTAINER_SERIE.list[4].setVisible(i === 4);

    this["HELP"].setVisible(false);
    this.obj[i].textTop.setVisible(true);
  }

  hideMain(i) {
    this.logo.setVisible(false);
    this.CONTAINER_ROULET_HELP.setVisible(false);
    this.CONTAINER_BTNS_HELP.setVisible(false);
    this.hideAllText();
    this["HELP"].setVisible(false);
    this.obj[i].textTop.setVisible(true);

    this.CONTAINER_BTN_EXIT.list[2].setVisible(false);
    this.CONTAINER_BTN_EXIT.list[3].setVisible(true);
    game.scene.keys["Musics"].sounds("btn2");
  }

  togglePageVisibility(value) {
    this.scene[value ? "wake" : "sleep"]();
    this.scene.setVisible(value);
  }
}

export { Help };
