import { isMobile } from "../Config";
import { imagesOptions } from "./imagesOptions";
import { buttonsOptions } from "./buttonsOptions";
import {
  playerDrawHistory,
  currencySettings,
  placeBets,
  gameCode,
  serverBalance,
  urlParamsObject,
  updateURL
} from "../api";
import {
  BTNS_NAME_1000,
  BTNS_NAME_800,
  CELLS_NUMBER_ARRAY,
  CREATE_CELL_BETWEEN_NUMBER_DATA,
  CREATE_CELL_LEFT_BOTTOM_DATA,
  CREATE_CELL_LEFT_BTNS,
  CREATE_CELL_NUMBER_DATA,
  CREATE_SECOND_CELL_BIG_BTNS,
  CREATE_SECOND_CELL_NUMBER_DATA,
  PAY_OBJECT,
  SECOND_SCREEN_BTNS_POS,
} from "./data";

import { game } from "../Config";
import { TopMenu } from "./topMenu";

const style2 = {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "Arial",
  },style4 = {
    fontSize: 12,
    color: "#000",
    fontWeight: "600",
    fontFamily: "Arial",
  },
  style5 = {
    fontSize: 12,
    color: "#fff",
    fontStyle: "500",
    fontFamily: "Arial",
  };

class MainWindow extends Phaser.Scene {
  constructor() {
    super("MainWindow");
    this.chipsSecondContainers = {};
    this.chipsFirstContainers = {};
    this.WAIT_MODE = false;
    this.LAST_BET_REPEAT = [];
    this.buttons = [];
    this.buttonsBorder = [];
    this.isRaceBet = false;
    this.topBtnsAnim = false;
    this.lastBet = {};
    this.cellsNumberArray = CELLS_NUMBER_ARRAY;
    this.chipsRect = null;
    this.BET = 10; // ставка
    this.BET_ALL = 0; // вся ставка
    this.btnsName800 = BTNS_NAME_800;
    this.btnsName1000 = BTNS_NAME_1000;
    this.isStart = false;
    this.counter = 0;
    this.secondScreenBtnPos = SECOND_SCREEN_BTNS_POS;
    this.cells1 = {};
    this.cells2 = {};
    this.NO_MORE_BETS = false;
    this.clickUndoCount = 0;
    this.musicOn = false;
    this.speedWheel = 1.7;
    this.balance = "0";
    for (let i = 1; i <= 36; i++) {
      i % 2 === 0
        ? this.cellsNumberArray["even"].push(`${i}`)
        : this.cellsNumberArray["odd"].push(`${i}`);
    }

    for (let i = 1; i <= 36; i += 3) {
      this.cellsNumberArray["2to1-l3"].push(`${i}`);
    }

    for (let i = 2; i <= 36; i += 3) {
      this.cellsNumberArray["2to1-l2"].push(`${i}`);
    }

    for (let i = 3; i <= 36; i += 3) {
      this.cellsNumberArray["2to1-l1"].push(`${i}`);
    }

    this.mainArrayCell = {};
    this.secondArrayCell = {};
    this.bets = {};
    this.bets2 = {};

    this.chipsArray = ["j1", "j2", "j3", "j4", "j5"];
    this.chipsArrayBet = { j1: 10, j2: 20, j3: 100, j4: 200, j5: 500 };
    this.angle = (360 / 37) * 0.0174533;
    this.rouletteNum = [
      0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10,
      23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32,
    ];
    this.listAudioLang = ['en', 'es'];
  }

  create() {
    this.listAudioLang.forEach(el => {
      if (el !== game.scene.keys["SetLanguages"].startLanguage)
        this.load.audioSprite(
            `audiosprite_${el}`,
            `src/assets/sound/audiosprite_${el}.json`,
            [
              `src/assets/sound/audiosprite_${el}.ogg`,
              `src/assets/sound/audiosprite_${el}.mp3`,
              `src/assets/sound/audiosprite_${el}.ac3`,
              `src/assets/sound/audiosprite_${el}.m4a`,
            ],
            { instaces: 6 }
        );
    })
    this.load.start();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )) {
      this.scale.startFullscreen();
    }

    this.chipsArrayBet = {
      j1: +currencySettings.denominations[0],
      j2: +currencySettings.denominations[1],
      j3: +currencySettings.denominations[2],
      j4: +currencySettings.denominations[3],
      j5: +currencySettings.denominations[4]
    };

    this.BET = +currencySettings.denominations[0];

    this.input.on(
      "pointermove",
      function (pointer) {
        this.X = pointer.x;
        this.Y = pointer.y;
        this.IS_DOWN = pointer.isDown;
      },
      this
    );

    this.input.on("pointerdown", () => {
      this.stopAnimPlaceBet();
    });

    this.input.on("pointerup", (e, object) => {
      if (
          this.CONTAINER_BLINK_CHIPS
          && (!object[0] || object[0].type === "Image")
      ) {
        this.CONTAINER_BLINK_CHIPS.destroy();
        delete this.CONTAINER_BLINK_CHIPS;
      }
    });

    this.device = isMobile ? "mobile" : "desktop";
    Object.entries(imagesOptions).map((option) => {
      const { x, y, scale } = option[1][this.device],
        { origin, visible, depth } = option[1];

      this[option[0].substr(0, option[0].length - 4)] = this.add
        .image(x, y, "spritesheet", option[0])
        .setOrigin(origin.x, origin.y)
        .setScale(scale.x, scale.y)
        .setVisible(visible !== false);
      depth && this[option[0].substr(0, option[0].length - 4)].setDepth(depth);
    });
    this["back"].setInteractive();

    this.chipsRect = this.add
      .graphics()
      .lineStyle(2, 0xadb473, 1)
      .strokeRoundedRect(87, 565, 52, 52, 6);

    this.chipsArray.forEach((el) => {
      this[el].setInteractive();
      this[el].on("pointerup", () => {
        game.scene.keys["Musics"].sounds("selectjeton");
        this.BET = +(this.chipsArrayBet[el]).toFixed(2) ;
        const rect = this.add
          .graphics()
          .lineStyle(2, 0xadb473, 1)
          .strokeRoundedRect(this[el].x - 3, this[el].y - 3, 52, 52, 6);

        this.chipsRect && this.chipsRect.destroy();
        this.chipsRect = rect;
      });
    });
    Object.entries(buttonsOptions).map((option) => {
      const { x, y, scale } = option[1][this.device],
        { origin, visible } = option[1];

      this.buttons[option[0].substr(0, option[0].length - 4)] = this.add
        .image(x, y, "spritesheet", option[0])
        .setOrigin(origin.x, origin.y)
        .setScale(scale)
        .setVisible(visible !== false)
        .setInteractive();

      const { height, width } =
          this.buttons[option[0].substr(0, option[0].length - 4)],
        widthButton = +((width - 3) * scale).toFixed(0),
        heightButton = +((height - 3) * scale).toFixed(0);

      this.buttonsBorder[option[0].substr(0, option[0].length - 4)] = this.add
        .graphics()
        .lineStyle(2, 0x70613b)
        .strokeRoundedRect(x + 1, y + 1, widthButton, heightButton, 5);
    });

    game.scene.keys["SetLanguages"].addText(game.scene.keys["SetLanguages"].startLanguage, "MainWindow");

    this.buttonInstances();

    this.drawFields();

    this.limitBlock = this.add
      .rectangle(245, 497, 337, 18, 0x144628, 1)
      .setDepth(1);

    const graphics = this.make.graphics({x: 0, y: 0, add: true})
            .fillRect(78, 405, 335, 30),
      mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
    this["Place Bet3"].setMask(mask);
    this["Place Bet"].setMask(mask);
    this.animPlaceBetText("Place Bet");

    this.ballAngle = 0;

    this.leftTableNumbers = this.add.container(8, 23, []);
    this.generateRandLeftTableNum();
    this.balance = game.scene.keys["SetLanguages"].balance;
    playerDrawHistory["tickets"] && playerDrawHistory["tickets"].length > 0 && this.visibleLastWinAnim();
    !playerDrawHistory["tickets"] && game.scene.keys["Musics"].sounds("place");
    this.createAllChips();
    this.renderTexture();
  }

  renderTexture() {
    const container = this.add
            .container(0,0,
              [
              this["back"],
              this["left_table"],
              this["wheel"],
              this["wheel_table"],
              this["series"],
              this["CREDIT"],
              this["Last Win Top"],
              this["BetTop"],
              this["logo"],
              this.buttonsBorder["start"],
              this.buttonsBorder["undo table"],
              this.buttonsBorder["repeat bet"],
              this.buttonsBorder["Race bet"],
              this.buttonsBorder["Exit"],
            ]),
        rt = this.add.renderTexture(
          0,
          0,
          game.config.width,
          game.config.height
        ).setDepth(-1);
    rt.draw(container, container.x, container.y);
    container.setVisible(false);
    return rt
  }

  createAllChips() {
    this.containerFirstTable = {}
    this.setChips(
        CREATE_CELL_NUMBER_DATA,
        this.containerFirstTable
    );
    this.setChips(
        CREATE_CELL_BETWEEN_NUMBER_DATA,
        this.containerFirstTable
    );
    this.setChips(
        CREATE_CELL_LEFT_BOTTOM_DATA,
        this.containerFirstTable
    );

    this.containerSecondTable = {}

    this.setChips(
        CREATE_SECOND_CELL_NUMBER_DATA,
        this.containerSecondTable,
        true
    );

  }

  setChips(data, arr, isSecond, visible) {

    data.forEach(el => {
      const POS = isSecond && this.secondScreenBtnPos[el[2].cellNumber],
          CELL = isSecond && this.secondArrayCell[el[2].cellNumber],
          X = isSecond && (POS && POS.x ?
              CELL.x + POS.x - (el[2].left || 0) :
              CELL.x + CELL.width / 2 - (el[2].left || 0)),
          Y = isSecond && (POS && POS.y ?
              CELL.y + POS.y - (el[2].top || 0) :
              CELL.y - (el[2].top || 0));

      arr[el[isSecond ? 2 : 4].cellNumber] =
          this.add
              .container(
                  isSecond ? X : el[0] - el[2] / 2 - (el[4].left || 0),
                   isSecond ? Y : el[1] - el[3] / 2,
                  [
                    this.add
                        .image(1, 0.5, "spritesheet", "j1.png")
                        .setOrigin(0.5)
                        .setScale(0.8)
                        .setVisible(false),
                    this.add
                        .image(1, 0.5, "spritesheet", "j2.png")
                        .setOrigin(0.5)
                        .setScale(0.8)
                        .setVisible(false),
                    this.add
                        .image(1, 0.5, "spritesheet", "j3.png")
                        .setOrigin(0.5)
                        .setScale(0.8)
                        .setVisible(false),
                    this.add
                        .image(1, 0.5, "spritesheet", "j4.png")
                        .setOrigin(0.5)
                        .setScale(0.8)
                        .setVisible(false),
                    this.add
                        .image(1, 0.5, "spritesheet", "j5.png")
                        .setOrigin(0.5)
                        .setScale(0.8)
                        .setVisible(false),
                    this.add
                        .text(
                            1,
                            0,
                            "0",
                            style2
                        )
                        .setName("TextImage")
                        .setOrigin(0.5)
                        .setScale(0.7),
                  ]
              )
              .setVisible(visible)
              .setDepth(5);

      if (isSecond) {
        arr[el[isSecond ? 2 : 4].cellNumber].add(
            [
              this.add
                  .rectangle(
                      -16 + (el[2].leftRect || 0),
                      3 + (el[2].topRect || 0),
                      28,
                      14,
                      0x000,
                      0.85
                  )
                  .setStrokeStyle( 1, 0x000 , 0.85)
                  .setOrigin(0),
              this.add
                  .text(
                      -2 + (el[2].leftRect || 0),
                      10 + (el[2].topRect || 0),
                      "0",
                      {
                        fontFamily: "Arial",
                      }
                  )
                  .setName("TextGraphics")
                  .setOrigin(0.5)
                  .setScale(0.8),
            ]
        )
      }
    })
  }

  visibleLastWinAnim() {
    const payout = (+playerDrawHistory["tickets"][0]["payout"]).toFixed(2);

    this.clearAllMask();
    this.NO_MORE_BETS = true

    game.scene.keys["Musics"].sounds((playerDrawHistory["tickets"][0]["drawResult"][0]).toString())
    if ((playerDrawHistory["tickets"][0]["drawResult"][0]).toString() !== "0") {
      this.time.delayedCall(1000, () =>
          game.scene.keys["Musics"].sounds(
              CELLS_NUMBER_ARRAY.red
                  .indexOf((playerDrawHistory["tickets"][0]["drawResult"][0]).toString()) === -1 ? "black" : "red"
          )
      );
    }

    this.showWin((playerDrawHistory["tickets"][0]["drawResult"][0]).toString());
    this.blinkNumber((playerDrawHistory["tickets"][0]["drawResult"][0]).toString());
    if (+payout !== 0) {
      this.balanceUpdate(this.balance - +payout);
      this.showWinPoint(undefined, payout);
    }
  }

  update() {
    this.moveChips();

    if (this.isStart || this.WAIT_MODE) {

      if (this.groupBig) {
        this.distance = Phaser.Math.Distance.Between(
            this.groupBig.getChildren()[0].x,
            this.groupBig.getChildren()[0].y,
            this.groupSmall.getChildren()[0].x,
            this.groupSmall.getChildren()[0].y
        );
      }

      if (this.wheelRotateRadius > 1080 && this.wheelRotateRadius < 1400 && !this.WAIT_MODE) {
        this.wheelRotateRadius += this.speedWheel -= 0.003 * 8;
      } else if (this.wheelRotateRadius > 1400 && !this.WAIT_MODE) {
        this.wheelRotateRadius += this.speedWheel < 0 ? 0 : this.speedWheel -= 0.012 * 8;
      } else {
        this.wheelRotateRadius += this.speedWheel;
      }

      // вращение колеса
      this["wheel_spin"].setAngle(-this.wheelRotateRadius);

      // вращение статического шара с колесом
      Phaser.Actions.RotateAroundDistance(
        this.groupSmall.getChildren(),
        this.geomPointSmall,
        -((this.speedWheel * Math.PI) / 180),
        85
      );

      if (this.groupBig) {

        if (!this.ballBig.visible && this.wheelRotateRadius > 1440) {
          this.isStart = false;
          game.scene.keys["TopMenu"].topMenuArrow.setVisible(true);
          game.scene.keys["TopMenu"].isHelp = false;
        }

        this.ballAngle += (this.speed * 180) / Math.PI;

      if (this.ballAngle < 720 && this.ballAngle >= 0) {
        this.ballRotateRadius -= 0;
      } else if (this.ballAngle >= 720 && this.ballAngle < 720 + 360) {
        this.ballRotateRadius -= 0.2 * 3;
        this.speed -= 0.0003 * 8;
      } else {
        if (!this.musicOn) this.ballOnNumber = game.scene.keys["Musics"].sounds("ball_on_number");
        this.musicOn = true;
        this.ballRotateRadius <= 85
          ? (this.ballRotateRadius = 85)
          : (this.ballRotateRadius -= 0.3 * 3);

        this.speed <= 0.015 * 3 ? (this.speed = 0.015 * 3) : (this.speed -= 0.00038 * 8);
      }

      if (this.WAIT_MODE) this.speed = 0.067 * 3;

        if (this.distance < 5 && this.speed === 0.015 * 3 && !this.WAIT_MODE) {
          this.ballBig.setVisible(false);
          this.ballSmall.setVisible(true);

          this.ballOnNumber.stop();
          !this.setSoundNubmer && this.stop(this.rand);
        } else {
          Phaser.Actions.RotateAroundDistance(
              this.groupBig.getChildren(),
              this.geomPointBig,
              this.speed,
              this.ballRotateRadius
          );
        }
      }
    }
  }

  moveChips() {
    if (this.CONTAINER_BLINK_CHIPS && this.IS_DOWN) {
      this.CONTAINER_BLINK_CHIPS.x = this.X;
      this.CONTAINER_BLINK_CHIPS.y = this.Y;
    }
  }

  defaultSpeenOptions() {
    this.speedWheel = 1.7 * 3;
    this.musicOn = false;
    this.ballAngle = 0;
    this.ballSmall && this.ballSmall.setVisible(false);
    this.groupBig = false;

    this.time.delayedCall(1500, () => {
      this.groupBig = this.add.group();
      this.geomPointBig = new Phaser.Geom.Point(243, 245);
      this.ballBig = this.groupBig.create(243, 115, "ball");
      game.scene.keys["Musics"].sounds("ballrun");
    });

    this.groupSmall = this.add.group();
    this.geomPointSmall = new Phaser.Geom.Point(243, 245);
    this.ballSmall = this.groupSmall
      .create(243, 160, "ball")
      .setVisible(false);

    // ставим изначально шар в ячейку
    Phaser.Actions.RotateAroundDistance(
      this.groupSmall.getChildren(),
      this.geomPointSmall,
      -0.5 * this.angle + this.angle / 2,
      85
    );

    this.ballRotateRadius = 135;
    this.wheelRotateRadius = 0;
    this.speed = 0.067 * 3;
  }

  stop(rand) {
    this.setSoundNubmer = true;
    this.time.delayedCall(1000, () => {
      game.scene.keys["Musics"].sounds("" + rand)
      if (rand !== 0) {
        this.time.delayedCall(1000, () =>
            game.scene.keys["Musics"].sounds(
                CELLS_NUMBER_ARRAY.red.indexOf("" + rand) === -1 ? "black" : "red"
            )
        );
      }

      this.showWin(rand);
      this.blinkChipsWin(rand);
      this.blinkNumber(rand);
    });
  }

  showWin(num) {
    if (num === 0) num = "0";
    if (num) {
      this[num].setVisible(true);
      this.winRect = this.add
        .graphics()
        .lineStyle(2, 0xafba8c, 1)
        .setDepth(100)
        .strokeRoundedRect(145, 415, 188, 92, 2);
      this.redLoadRectangle && this.redLoadRectangle.destroy();
      this.redLoadRectangle = false;
      this.redGradient && this.redGradient.destroy();
    } else {
      for (let i = 0; i <= 36; i++) this[i].setVisible(false);
      this.winRect && this.winRect.destroy();

      this["Place Bet3"].setVisible(false);
      this["Place Bet"].setVisible(true);
      this["Place Bet3"].x = 420;
      this["Place Bet"].x = 420;
      this.animPlaceBetText("Place Bet");
    }
  }

  startSpin(bool) {
    if (!this.NO_MORE_BETS && !this.ActiveStartButton && this.BET_ALL && !this.redLoadRectangle) {
      if (bool) {
        this.animationButton(this["Start"]);
        game.scene.keys["Musics"].sounds("btn2");
        if (navigator.onLine) {
          this.WAIT_MODE = false;
          this.ballBig && this.ballBig.setVisible(false);

          this.defaultSpeenOptions();
          this.isStart = true;
          game.scene.keys["TopMenu"].topMenuArrow.setVisible(false);
          game.scene.keys["TopMenu"].isHelp = true;
          this.setSoundNubmer = false;
          this.ActiveStartButton = true;
          this.stopAnimPlaceBet(true);
        }
      }
    } else {
      if (bool) {
        this.placeBet && this.placeBet.destroy();
        this.animationButton(this["Start"]);
        game.scene.keys["Musics"].sounds("btn2");
        this.placeBet = game.scene.keys["Musics"].sounds("place");
      }
    }
  }

  animationButton(button) {
    button.y += 1;
    this.time.delayedCall(100, () => button.y -= 1)
  }

  setRT(firstContainer, isOnlyFirst) {
    this.rtFirstContainer && this.rtFirstContainer.destroy();

    this.rtFirstContainer = this.add
        .renderTexture(
            game.config.width / 2,
            0,
            game.config.width / 2,
            game.config.height
        ).setDepth(100);

    Object.values(firstContainer).forEach(el => {
      this.rtFirstContainer.draw(el, el.x - game.config.width / 2, el.y);
      el.setVisible(false);
    })
    this.rtFirstContainer.setVisible(!this.isRaceBet)

    if (!isOnlyFirst) {
      this.rtSecondContainer && this.rtSecondContainer.destroy();

      this.rtSecondContainer = this.add
          .renderTexture(
              game.config.width / 2,
              0,
              game.config.width / 2,
              game.config.height
          ).setDepth(100);

      Object.values(this.chipsSecondContainers).forEach(el => {
        this.rtSecondContainer.draw(el, el.x - game.config.width / 2, el.y);
        el.setVisible(false);
      })
      this.rtSecondContainer.setVisible(this.isRaceBet)
    }

  }

  buttonInstances() {
    this.buttons["start"].on("pointerdown", () => !this.CONTAINER_BLINK_CHIPS && this.startSpin(true));

    this.buttons["undo table"].on("pointerdown", () => !this.CONTAINER_BLINK_CHIPS && this.undoBets());

    this.buttons["repeat bet"].on("pointerdown", () => {
      this.animationButton(this["Repeat bet"]);
      this.animationButton(this["Repeat bet2"]);

      if (
          !this.NO_MORE_BETS &&
          (Object.keys(this.chipsFirstContainers).length || this.LAST_BET_REPEAT.length > 0)
      ) {
        game.scene.keys["Musics"].sounds("jeton");
        this.counter++
        if (this["Repeat bet2"].visible) {
          Object.entries(this.bets).filter(( item) => item[1].totalBets !== 0).forEach(item => {
            this.setBet(this.mainArrayCell[item[0]], item[0], item[1].totalBets);
          })
          this.setRT(this.chipsFirstContainers);
        } else {
          this.LAST_BET_REPEAT.forEach(item => this.setBet(this.mainArrayCell[item[0]], item[0], item[1]));
          this.setRT(this.chipsFirstContainers);
          this.LAST_BET_REPEAT = [];
        }
      }

    });

    this.buttons["Race bet"].on("pointerdown", () => {
      this.animationButton(this["Race bet"]);
      this.animationButton(this["Race bet2"]);
      game.scene.keys["Musics"].sounds("btn2");

      if (this.isRaceBet) {
        this.isShowFirsScreenElems(true);
        this["Race bet2"].setVisible(false);
        this["Race bet"].setVisible(true);
      } else {
        this["Race bet"].setVisible(false);
        this["Race bet2"].setVisible(true);
        this.isShowFirsScreenElems(false);
      }

      this.isRaceBet = !this.isRaceBet;
      this["table"].setVisible(!this["table"].visible);
      this["table_highlight"].setVisible(!this["table_highlight"].visible);
      this["racebet"].setVisible(!this["racebet"].visible);
      this["racebet_highlight"].setVisible(!this["racebet_highlight"].visible);
    });

    this.buttons["Exit"].on("pointerdown", () => {
      this.animationButton(this["Exit"]);
      game.scene.keys["Musics"].sounds("btn2");
      location.href = location.href.replace(location.search, "");
    });
  }

  addLeftTableNumber(num) {
    if (this.leftTableNumbers.list.length > 15) {
      this.leftTableNumbers.list[0].destroy();
    }
    this.leftTableNumbers.list.forEach(item => {
      item.y += 34;
    });
    this.leftTableNumbers.add(this.add
        .sprite(0, 0, "numbers")
        .setFrame(num)
        .setOrigin(0, 0));
  }

  generateRandLeftTableNum() {
    if (!playerDrawHistory["tickets"]) {
      for (let i = 0; i < 16; ++i) {
        this.addLeftTableNumber(Math.floor(Math.random() * 37));
      }
    } else {
      playerDrawHistory["tickets"]
          .filter((el, i) => i + 1 <= 16)
          .reverse()
          .forEach(el => this.addLeftTableNumber(el["drawResult"][0]))
    }
  }

  clearChipTexture(container, cellNumber) {
    container[cellNumber].list[5].setText(0);
    container[cellNumber].list.forEach(el => el.type === "Image" && el.setVisible(false));
    container[cellNumber].setVisible(false);
  }

  removeBet(cellNumber, Bet) {
    this.bets[cellNumber].totalBets = +(this.bets[cellNumber].totalBets - Bet).toFixed(2);

    //Удаляем данные 1 Таблицы
    if (this.bets[cellNumber].totalBets > 0) {
      this.clearChipTexture(this.chipsFirstContainers, cellNumber)
      this.setChipTexture(
          this.chipsFirstContainers,
          cellNumber,
          (this.bets[cellNumber].totalBets).toFixed(2),
          false,
          !this.isRaceBet
      )
    } else {
      this.clearChipTexture(this.chipsFirstContainers, cellNumber)
      delete this.chipsFirstContainers[cellNumber];
    }

    //Удаляем данные 2 Таблицы
    const arrayCellNumber = cellNumber.split("|");
    if (arrayCellNumber.length > 1) {
      arrayCellNumber.forEach((el) => {
        this.bets2[el][1] = +(this.bets2[el][1] - (Bet / arrayCellNumber.length) * 36).toFixed(2);
        this.clearChipTexture(this.chipsSecondContainers, el)
        this.bets2[el][1] > 0 ?
            this.setChipTexture(
                this.chipsSecondContainers,
                el,
                false,
                (this.bets2[el][1]).toFixed(2),
                this.isRaceBet
            ) :
            delete this.chipsSecondContainers[el];
      });
    } else if (isNaN(+cellNumber)) {
      this.cellsNumberArray[cellNumber].forEach((el) => {
        this.bets2[el][1] =
            +(this.bets2[el][1] - (Bet / this.cellsNumberArray[cellNumber].length) * 36)
              .toFixed(2);
        this.clearChipTexture(this.chipsSecondContainers, el)
        this.bets2[el][1] > 0 ?
            this.setChipTexture(
                this.chipsSecondContainers,
                el,
                false,
                (this.bets2[el][1]).toFixed(2),
                this.isRaceBet
            ) :
            delete this.chipsSecondContainers[el];
      });
    } else {
      this.bets2[cellNumber][1] = +(this.bets2[cellNumber][1] - Bet * 36).toFixed(2);
      this.bets2[cellNumber][0] = +(this.bets2[cellNumber][0] - Bet).toFixed(2);
      this.clearChipTexture(this.chipsSecondContainers, cellNumber)
      this.bets2[cellNumber][1] > 0 ?
          this.setChipTexture(
              this.chipsSecondContainers,
              cellNumber,
              (this.bets2[cellNumber][0]).toFixed(2),
              (this.bets2[cellNumber][1]).toFixed(2),
              this.isRaceBet
          ) :
          delete this.chipsSecondContainers[cellNumber];
    }
    this.BET_ALL = +(this.BET_ALL - Bet).toFixed(2);
    this.Bet_all.setText(
        currencySettings.symbolPosition = "before" ?
            currencySettings.symbol + " " + (this.BET_ALL).toFixed(2) :
            (this.BET_ALL).toFixed(2) + " " + currencySettings.symbol
    ).setScale(1);
    this.changeSizeTextChip(this.Bet_all, this.Bet_all.text, 5);
    this.setRT(this.chipsFirstContainers);
  }

  undoBets() {
    if (!this.NO_MORE_BETS) {
      this.animationButton(this["Undo table"]);
      this.animationButton(this["Undo table2"])

      if (Object.keys(this.chipsFirstContainers).length) {
        game.scene.keys["Musics"].sounds("jeton");
        this.clickUndoCount++;
        if (this.clickUndoCount === 3) {
          this["Undo table"].setVisible(false);
          this["Undo table2"].setVisible(true);
        }
        if (this.clickUndoCount > 3) {
          this.deleteAllBets();
          this["Undo table2"].setVisible(false);
          this["Undo table"].setVisible(true);
          this.clickUndoCount = 0;
        } else {
          Object.values(this.lastBet)[Object.values(this.lastBet).length -1]
              .forEach(el => {
                const lastBet = +el.split('#')[1],
                    lastBetName = el.split('#')[0];
                this.removeBet(lastBetName, lastBet);

              })
          delete this.lastBet[Object.keys(this.lastBet)[Object.keys(this.lastBet).length - 1]];

        }
      }
    }

  }

  togglePageVisibility(value) {
    game.scene.keys["TopMenu"].togglePageVisibility(true);
    this.scene[value ? "wake" : "sleep"]();
    this.scene.setVisible(value);
  }

  animPlaceBetText(stringKey) {
    this.animPlaceBetTextInterval && this.animPlaceBetTextInterval.destroy();
    this.animPlaceBetTextInterval = this.time.addEvent({
      delay: 0,
      callback: () => {
        if (this[stringKey].x > -100) {
          this[stringKey].x -= 2.5;
        } else {
          this.animPlaceBetTextInterval.destroy();
          this[stringKey].x = 420;
          this.animPlaceBetText(stringKey);
        }
      },
      loop: true,
    });
  }

  blinkNumber(num) {
    this.time.addEvent({
      delay: 400,
      callback: () => {
        if (!this.isRaceBet) {
          if (this["table_highlight"].mask) {
            this.clearAllMask();
          } else {
            this.highlightCells([num.toString()], true);
          }
        } else {
          if (this["racebet_highlight"].mask) {
            this.clearAllMask();
          } else {
            this.highlightCells([num.toString()], true);
          }
        }
      },
      repeat: 7,
    });

    this.time.delayedCall(3600, () => {
      this.showWin()
      if (!this.winCountRect) this.NO_MORE_BETS = false
    });
  }

  blinkChipsWin(num) {
    this.winChips = [];
    const arrAllBets = [],
        blinkChipArr = {};
    arrAllBets.push(num.toString());

    for (let item in this.cellsNumberArray) {
      if (this.cellsNumberArray[item].some(item => item === num.toString())){
        arrAllBets.push(item);
      }
    }

    CREATE_CELL_BETWEEN_NUMBER_DATA.forEach(item => {
      if (item[4].rects.some(item => item === num.toString())) {
        arrAllBets.push(item[4].cellNumber);
      }
    });

    CREATE_CELL_LEFT_BTNS.forEach(item => {
      if (item[4].rects.some(item => item === num.toString())) {
        arrAllBets.push(item[4].cellNumber);
      }
    });

    arrAllBets.forEach(el => {
      if (this.chipsFirstContainers[el])
        this.winChips.push(this.chipsFirstContainers[el])
    })

    this.winChips.length && this.showWinPoint(arrAllBets);

    this.time.delayedCall(3600, () => {
      if (!this.winChips.length) {
        this.addLeftTableNumber(num);
        this.balanceUpdate(serverBalance);
      }
      this.deleteAllBets(this.winChips.length && this.winChips);
    });

    Object.entries(this.chipsFirstContainers).forEach(el => {
      if (!this.winChips.some(item => item === el[1])) {
        el[1].setVisible(true)
        blinkChipArr[el[0]] = el[1]
      }
    })
    this.setRT(blinkChipArr, true);

    this.rtwinChips = this.add
        .renderTexture(
            game.config.width / 2,
            0,
            game.config.width / 2,
            game.config.height
        )
        .setDepth(101)
        .setVisible(false)

    this.winChips.forEach(el =>
        this.rtwinChips.draw(
            el,
            el.x - game.config.width / 2,
            el.y
        )
    )

    this.time.addEvent({
      delay: 400,
      callback: () => {
        !this.isRaceBet && this.rtwinChips.setVisible(!this.rtwinChips.visible)
      },
      repeat: 8,
    });

  }

  showWinPoint(arrAllBets, lastWin) {
    let soundNumber = 2;
    const allWinPoint = lastWin ? lastWin : this.LAST_BET_REPEAT
        .filter(item => arrAllBets.some(el => el === item[0]))
        .reduce((result, totalItem) => {
          soundNumber = soundNumber < PAY_OBJECT[totalItem[0]] ?
              PAY_OBJECT[totalItem[0]] :
              soundNumber;
          return result + (totalItem[1] * PAY_OBJECT[totalItem[0]]);
        },0)
        .toString();

    this.winCountRect = this.add.container(130, 25, [
      this.add
          .graphics()
          .fillGradientStyle(0x2f552f, 0x2f552f, 0x1a301a, 0x1a301a,1,1,1,1)
          .fillRect(0, 0, 224, 49),
      this.add
          .graphics()
          .lineStyle(2, 0xa1af82, 1)
          .strokeRoundedRect(0, 0, 224, 49, 2),
      this.add
          .text(
              112,
              24,
              (+allWinPoint).toFixed(2),
              {
                fontSize: 46,
                color: "#ffff00",
                fontStyle: "bold",
                fontFamily: "Arial",
              }
          )
          .setOrigin(0.5, 0.5)
    ]);

    switch (soundNumber) {
      case 2:
      case 3:
        game.scene.keys["Musics"].sounds("rge_win_02");
        break;
      case 6:
        game.scene.keys["Musics"].sounds("rge_win_06");
        break;
      case 9:
        game.scene.keys["Musics"].sounds("rge_win_09");
        break;
      case 12:
        game.scene.keys["Musics"].sounds("rge_win_12");
        break;
      case 18:
        game.scene.keys["Musics"].sounds("rge_win_18");
        break;
      case 36:
        game.scene.keys["Musics"].sounds("rge_win_36");
        break;
    }
    this.Last_win.setText((+allWinPoint).toFixed(2));
    this.winPoint = allWinPoint;
    this.time.delayedCall(5600, () => {
      this.countDownPoint(allWinPoint);
      this.rgeOdoStart = game.scene.keys["Musics"].sounds("rge_odo_start");
    });

  }

  countDownPoint(allWinPoint) {
    this.time.delayedCall(60, () => {
      if(+this.winCountRect.list[2]["_text"] > 0) {
        const countPoint = (allWinPoint - (this.winPoint / 10)).toFixed(2),
            textBalance = +this.balance + (this.winPoint / 10);
        this.winCountRect.list[2]
            .setText(
                (Math.floor(countPoint * 100) / 100).toFixed(2)
            );
        this["playerBalance"]
            .setText(
                currencySettings.symbolPosition = "before" ?
                    currencySettings.symbol + " " + (Math.floor(textBalance * 100) / 100).toFixed(2) :
                    (Math.floor(textBalance * 100) / 100).toFixed(2) + " " + currencySettings.symbol
            );
        this.balance = +(Math.floor(textBalance * 100) / 100).toFixed(2);
        this.countDownPoint(countPoint);
      } else {
        this.rand && this.addLeftTableNumber(this.rand);
        this.winCountRect.destroy();
        this.rgeOdoStart.stop();
        game.scene.keys["Musics"].sounds("rge_odo_end");
        this.winChips && this.winChips.forEach(el => el.setVisible(false));
        this.winChips = [];
        this.balanceUpdate(serverBalance || game.scene.keys["SetLanguages"].balance);
        this.deleteAllBets();
      }
    });
  }

  deleteAllBets(exception) {
    if (!exception) {
      this.NO_MORE_BETS = false;
      this["Bets Accept"].setVisible(false);
      game.scene.keys["TopMenu"]["ID"]
          .setText(
              game.scene.keys["TopMenu"]["ID"].text.replace(/[\w-]+[.!?]?$/, "-")
          );
      this.BET_ALL = 0;
      this.Bet_all.setText(
          currencySettings.symbolPosition = "before" ?
              currencySettings.symbol + " " + (this.BET_ALL).toFixed(2) :
              (this.BET_ALL).toFixed(2) + " " + currencySettings.symbol
      ).setScale(1);
      this.rtwinChips && this.rtwinChips.destroy();
    }
    this.showWin();

    const deleteChips = (container) => {
      Object.entries(container).forEach(el => {
        if ((exception && !exception.some(item => item === el[1])) || !exception) {
          this.clearChipTexture(container, el[0]);
          delete container[el[0]]
        }
      })
    };
    //Удаляем фишки с 1 таблицы
    deleteChips(this.chipsFirstContainers);
    //Удаляем фишки с 2 таблицы
    deleteChips(this.chipsSecondContainers);

    this.rtFirstContainer && this.rtFirstContainer.destroy();
    this.rtSecondContainer && this.rtSecondContainer.destroy();

    Object.values(this.bets).forEach(el => el.totalBets = 0);

    Object.keys(this.lastBet).forEach((el) => delete this.lastBet[el]);

    this.bets2 = {};
    this.changeSizeTextChip(this.Bet_all, this.Bet_all.text, 5);

    this["Repeat bet2"].setVisible(false);
    this["Repeat bet"].setVisible(true);
    game.scene.keys["Musics"].sounds("removejeton");
  }

  drawFields() {
    CREATE_CELL_NUMBER_DATA.forEach((el) =>
      this.createCell(el[0], el[1], el[2], el[3], el[4])
    );
    CREATE_CELL_BETWEEN_NUMBER_DATA.forEach((el) =>
      this.createCell(el[0], el[1], el[2], el[3], el[4])
    );
    CREATE_CELL_LEFT_BOTTOM_DATA.forEach((el) =>
      this.createCell(el[0], el[1], el[2], el[3], el[4])
    );
    CREATE_CELL_LEFT_BTNS.forEach((el) =>
      this.createCell(el[0], el[1], el[2], el[3], el[4], el[5])
    );

    CREATE_SECOND_CELL_NUMBER_DATA.forEach((el) =>
      this.createSecondCell(el[0], el[1], el[2], el[3], el[4])
    );
    CREATE_SECOND_CELL_BIG_BTNS.forEach((el) =>
      this.createSecondCell(el[0], el[1], el[2], el[3], el[4])
    );
  }

  createSecondCell(x, y, object, btnsArray, polylineArray) {
    const self = this,
      cell = this.add
        .polygon(x, y, polylineArray, 0xffffff)
        .setInteractive(
          new Phaser.Geom.Polygon(polylineArray),
          Phaser.Geom.Polygon.Contains
        )
        .setScale(1);

    if (object.number) this.cells2[object.cellNumber] = cell;

    cell.setOrigin(0).setAlpha(0.01).setVisible(false);

    cell.on("pointerover", function () {
      if (!self.NO_MORE_BETS) {
        if (object.cellNumber && !object.rects) {
          self.reducer(object.cellNumber, true);
        }

        object.rects &&
          self.highlightCells(object.rects, true, object.cellNumber);
      }
    });

    cell.on("pointerout", function () {
      this.setAlpha(0.01);
      if (!self.NO_MORE_BETS) {
        if (object.cellNumber && !object.rects) {
          self.reducer(object.cellNumber, false);
        }

        object.rects && self.highlightCells(object.rects, false);
      }
    });

    cell.on("pointerdown", function (pointer) {
      if (!this.NO_MORE_BETS) {
        if (isNaN(object.cellNumber) || !self.bets2[object.cellNumber]) {
          self.createBlinkChips(pointer, self.BET);
        } else {
          if (self.bets2[object.cellNumber] && self.bets2[object.cellNumber][0]) {
            self.dragAndDrop(object, pointer);
          } else {
            self.createBlinkChips(pointer, self.BET);
          }
        }
      }
    });

    cell.on("pointerup", function () {
      self.createChips(self, btnsArray, object, cell);
    });

    this.secondArrayCell[object.cellNumber] = cell;
  }

  createChips(self, buttonArr, object, cell) {
    self.DragTimer && self.DragTimer.destroy();

    game.scene.keys["Musics"].sounds("jeton");
    if (!buttonArr) {
      self.makeABet({
        cell,
        cellNumber: object.cellNumber,
      }, self.CONTAINER_BLINK_CHIPS ? +self.CONTAINER_BLINK_CHIPS.list[1].text : false);
    } else {
      self.clickLeftBtns(buttonArr, self.CONTAINER_BLINK_CHIPS ?
          +self.CONTAINER_BLINK_CHIPS.list[1].text :
          false
      );
    }
    if (self.CONTAINER_BLINK_CHIPS) {
      self.CONTAINER_BLINK_CHIPS.destroy();
      delete self.CONTAINER_BLINK_CHIPS;
    }
  }

  createCell(x, y, w, h, object, leftBtns) {
    const self = this,
      cell = this.add
        .rectangle(x, y, w, h, 0xffffff, 1)
        .setOrigin(1)
        .setAlpha(0.01)
        .setDepth(0)
        .setInteractive();

    if (object.number) this.cells1[object.cellNumber] = cell;
    cell.on("pointerover", function () {
      if (!self.NO_MORE_BETS) {
        if (object.cellNumber && !object.rects) {
          self.reducer(object.cellNumber, true);
        }
        object.rects && self.highlightCells(object.rects, true);
      }
    });

    cell.on("pointerout", function () {
      if (!self.NO_MORE_BETS) {
        if (object.cellNumber && !object.rects) {
          self.reducer(object.cellNumber, false);
        }
        object.rects && self.highlightCells(object.rects, false);
      }
    });

    cell.on(
      "pointerdown",
      (pointer) => {
        if (!this.NO_MORE_BETS) {
          !this.bets[object.cellNumber].totalBets &&
          this.createBlinkChips(pointer, this.BET);
          this.dragAndDrop(object, pointer);
        }
      }
    );

    cell.on("pointerup", function () {
      self.createChips(self, leftBtns, object, cell);
    });
    this.mainArrayCell[object.cellNumber] = cell;
    this.mainArrayCell[object.cellNumber].setData("left", object.left);
    this.bets[object.cellNumber] = {};
    this.bets[object.cellNumber].totalBets = 0;
  }

  dragAndDrop(object, pointer) {
    this.DragTimer = this.time.delayedCall(200, () => {
      if (this.bets[object.cellNumber].totalBets) {
        this.createBlinkChips(pointer, this.bets[object.cellNumber].totalBets);

        this.removeBet(object.cellNumber, this.bets[object.cellNumber].totalBets);

        Object.entries(this.lastBet).forEach(el => {
          if (el[1][0].split("#")[0] === object.cellNumber)
            delete this.lastBet[el[0]]
        })
      }
    });
  }

  createBlinkChips(pointer, bet) {
    this.CONTAINER_BLINK_CHIPS && this.CONTAINER_BLINK_CHIPS.destroy();

    this.CONTAINER_BLINK_CHIPS = this.add
      .container(pointer.downX, pointer.downY, [
        this.add
          .image(1, 0.5, "spritesheet", this.selectPictureChip(bet))
          .setOrigin(0.5)
          .setScale(0.8),
        this.add
          .text(
              bet === "10" ? 1 : 1.5,
              0,
              (bet).toFixed(2),
              style2
          )
          .setOrigin(0.5)
          .setScale(0.7),
      ])
      .setDepth(5);

    this.changeSizeTextChip(
        this.CONTAINER_BLINK_CHIPS.list[1],
        this.CONTAINER_BLINK_CHIPS.list[1].text,
        )
  }

  selectPictureChip(bet) {
    let chipsName = "j1.png";
    if (bet >= +currencySettings.denominations[1]) chipsName = "j2.png";
    if (bet >= +currencySettings.denominations[2]) chipsName = "j3.png";
    if (bet >= +currencySettings.denominations[3]) chipsName = "j4.png";
    if (bet >= +currencySettings.denominations[4]) chipsName = "j5.png";
    return chipsName
  }

  clickLeftBtns(array, total) {
    if (!this.NO_MORE_BETS) {
      this.counter++;
      this.clickUndoCount = 0;
      this["Undo table2"].setVisible(false);
      this["Undo table"].setVisible(true);
      this.stopAnimPlaceBet();
      array.forEach((i) => this.setBet(this.mainArrayCell[i], i, total));
      this.setRT(this.chipsFirstContainers);
      this.LAST_BET_REPEAT = [];
    }
  }

  canMakeABet(cellNumber, total) {
    if (this.btnsName800.includes(cellNumber)) {
      if (
        +(this.bets[cellNumber].totalBets + total).toFixed(2) > +currencySettings.rouletteX3
      ) {
        return +(this.bets[cellNumber].totalBets + total).toFixed(2) > +currencySettings.rouletteX3 ?
            +currencySettings.rouletteX3 : +currencySettings.maxStake;
      } else {
        return false;
      }
    } else if (this.btnsName1000.includes(cellNumber)) {
      if (
          +(this.bets[cellNumber].totalBets + total).toFixed(2) > +currencySettings.rouletteX2
      ) {
        return +currencySettings.rouletteX2;
      } else {
        return false;
      }
    } else {
      const length = cellNumber.split("|").length;

      if (
          +(this.bets[cellNumber].totalBets + total).toFixed(2) > +(length * +currencySettings.rouletteNumbers).toFixed(2)
      ) {
        return +(this.bets[cellNumber].totalBets + total).toFixed(2) > +(length * +currencySettings.rouletteNumbers).toFixed(2)
          ? +(length * +currencySettings.rouletteNumbers).toFixed(2)
          : +currencySettings.maxStake;
      } else {
        return false;
      }
    }
  }

  addMaxFieldLimit(num) {
    game.scene.keys["Musics"].sounds("limit");
    this.ErrorReaction.setVisible(false);
    num !== "noCred" ? this.Maximum.setVisible(true) : this.noCredit.setVisible(true).setDepth(2);
    this.limitBlock.setFillStyle(0x144628, 1);
    this.limitBlockOuter && clearTimeout(this.limitBlockOuter);
    this.limitBlockOuter = setTimeout(() => {
      num !== "noCred" && this.Maximum.setText(
        `${this.Maximum.text.replace(/ \d+/gi, "")} ${num}`
      ).setDepth(2);
      this.limitBlock.setFillStyle(0xff0000, 1);
      this.limitTimer && clearTimeout(this.limitTimer);
      this.limitTimer = setTimeout(() => {
        num !== "noCred" ? this.Maximum.setVisible(false) : this.noCredit.setVisible(false);
        this.limitBlock.setFillStyle(0x144628, 1);
      }, 2000);
    }, 60);
  }

  selectPictureChipV2(bet) {
    let chipsName = 0;
    if (bet >= +currencySettings.denominations[1]) chipsName = 1;
    if (bet >= +currencySettings.denominations[2]) chipsName = 2;
    if (bet >= +currencySettings.denominations[3]) chipsName = 3;
    if (bet >= +currencySettings.denominations[4]) chipsName = 4;
    return chipsName
  }

  setChipTexture(container, cellNumber, ChipText, RectText, visible) {
    container[cellNumber]
        .setVisible(visible);
    ChipText && container[cellNumber].list[5]
        .setText(
            ChipText
        )
        .setScale(0.7)
        .setVisible(+ChipText !== 0)
        .setX(RectText ? -1.5 : 1)
        .setY(RectText ? -2 : 0)
    RectText && container[cellNumber].list[7]
        .setText(
            RectText
        )
        .setScale(0.8)

    container[cellNumber].list[5].text === "0" && container[cellNumber].list
        .forEach(el => {
          !ChipText && el.name === "TextImage" && el.setVisible(false)
          el.type === "Image" && el.setVisible(false)
        })

    ChipText && container[cellNumber]
        .list[this.selectPictureChipV2(+ChipText)]
        .setX(RectText ? -1.5 : 1)
        .setY(RectText ? -1 : 1)
        .setVisible(+ChipText !== 0)

    ChipText && this.changeSizeTextChip(
        container[cellNumber].list[5],
        container[cellNumber].list[5].text
    )
    RectText && this.changeSizeTextChip(
        container[cellNumber].list[7],
        container[cellNumber].list[7].text
    )

  }

  setBet(cell, cellNumber, total) {
    const canMakeABet = this.canMakeABet(cellNumber, !!total ? total : this.BET),
          totalBetBefore = +(this.bets[cellNumber].totalBets).toFixed(2),
          residueBet = +(+currencySettings.maxStake - this.BET_ALL).toFixed(2);
    if (+(this.BET_ALL + (total ? total : this.BET)).toFixed(2) > +currencySettings.maxStake){
      this.addMaxFieldLimit(+currencySettings.maxStake);

      this.bets[cellNumber].totalBets = +(canMakeABet &&
          (canMakeABet - totalBetBefore < totalBetBefore + residueBet) ?
            canMakeABet : totalBetBefore + residueBet).toFixed(2);

    } else if (+this.balance < +((total ? total : this.BET) + this.BET_ALL).toFixed(2)) {
      if (+this.balance > this.BET_ALL) {
        this.addMaxFieldLimit("noCred");
        if ((+this.balance - this.BET_ALL).toFixed(2) >= this.BET ) {
          this.bets[cellNumber].totalBets = +(+this.balance - this.BET_ALL).toFixed(2)
        } else {
          this.bets[cellNumber].totalBets = +(this.bets[cellNumber].totalBets + +this.balance - this.BET_ALL).toFixed(2)
        }

      } else {
        this.addMaxFieldLimit("noCred");
      }
    } else if (canMakeABet) {
      this.addMaxFieldLimit(canMakeABet);

      this.bets[cellNumber].totalBets =
          +(canMakeABet + this.BET_ALL > +currencySettings.maxStake &&
          canMakeABet >= totalBetBefore + residueBet ?
              totalBetBefore + residueBet :
              canMakeABet).toFixed(2);
    } else {
      this.bets[cellNumber].totalBets = +(this.bets[cellNumber].totalBets +
          (!total ?
              this.BET :
              this.BET_ALL + total > +currencySettings.maxStake ? residueBet : total)
      ).toFixed(2);
    }

    this.ActiveStartButton = false;

    if (this.BET_ALL < +currencySettings.maxStake && +this.balance > this.BET_ALL) {

      Object.keys(this.mainArrayCell).forEach(() =>
          this["table_highlight"].clearMask().setDepth(0)
      );

      Object.keys(this.secondArrayCell).forEach(() =>
          this["racebet_highlight"].clearMask().setDepth(0)
      );

      //===========================================Новая Функция фишек====================================================
      //===========================================First Table====================================================
      this.setChipTexture(
          this.containerFirstTable,
          cellNumber,
          (this.bets[cellNumber].totalBets).toFixed(2),
          false,
          !this.isRaceBet
      )
      this.chipsFirstContainers[cellNumber] = this.containerFirstTable[cellNumber];
      //===========================================Second Table====================================================
      const arrayCellNumber = cellNumber.split("|");

      if (arrayCellNumber.length > 1) {
        arrayCellNumber.forEach(el => {
          if (this.bets2[el]) {
            if (this.bets2[el][1]) {
              this.bets2[el][1] += ((this.bets[cellNumber].totalBets - totalBetBefore)  / arrayCellNumber.length) * 36;
            } else {
              this.bets2[el][1] = ((this.bets[cellNumber].totalBets - totalBetBefore)  / arrayCellNumber.length) * 36;
            }
          } else {
            this.bets2[el] = [null, ((this.bets[cellNumber].totalBets - totalBetBefore)  / arrayCellNumber.length) * 36];
          }
          this.setChipTexture(
              this.containerSecondTable,
              el,
              false,
              (this.bets2[el][1]).toFixed(2),
              this.isRaceBet
          )

          this.chipsSecondContainers[el] = this.containerSecondTable[el];
        })
      } else if (isNaN(+cellNumber)) {
        this.cellsNumberArray[cellNumber].forEach((el) => {
          if (this.bets2[el]) {
            if (this.bets2[el][1]) {
              this.bets2[el][1] +=
                  ((this.bets[cellNumber].totalBets - totalBetBefore) / this.cellsNumberArray[cellNumber].length) * 36;
            } else {
              this.bets2[el][1] =
                  ((this.bets[cellNumber].totalBets - totalBetBefore) / this.cellsNumberArray[cellNumber].length) * 36;
            }
          } else {
            this.bets2[el] = [
              null,
              ((this.bets[cellNumber].totalBets - totalBetBefore) / this.cellsNumberArray[cellNumber].length) * 36,
            ];
          }

          this.setChipTexture(
              this.containerSecondTable,
              el,
              false,
              (this.bets2[el][1]).toFixed(2),
              this.isRaceBet
          )

          this.chipsSecondContainers[el] = this.containerSecondTable[el];
        })
      } else {
        if (this.bets2[cellNumber]) {
          if (this.bets2[cellNumber][1]) {
            this.bets2[cellNumber][1] += (this.bets[cellNumber].totalBets - totalBetBefore) * 36;
          } else {
            this.bets2[cellNumber][1] = (this.bets[cellNumber].totalBets - totalBetBefore) * 36;
          }
          if (this.bets2[cellNumber][0]) {
            this.bets2[cellNumber][0] += this.bets[cellNumber].totalBets - totalBetBefore;
          } else {
            this.bets2[cellNumber][0] = this.bets[cellNumber].totalBets - totalBetBefore;
          }
        } else {
          this.bets2[cellNumber] = [this.bets[cellNumber].totalBets - totalBetBefore, (this.bets[cellNumber].totalBets - totalBetBefore) * 36];
        }

        this.setChipTexture(
            this.containerSecondTable,
            cellNumber,
            (this.bets2[cellNumber][0]).toFixed(2),
            (this.bets2[cellNumber][1]).toFixed(2),
            this.isRaceBet
        )
        this.chipsSecondContainers[cellNumber] = this.containerSecondTable[cellNumber];
      }


      this.BET_ALL = +(this.BET_ALL + this.bets[cellNumber].totalBets - totalBetBefore).toFixed(2);
      this.Bet_all.setText(
          currencySettings.symbolPosition = "before" ?
              currencySettings.symbol + " " + (this.BET_ALL).toFixed(2) :
              (this.BET_ALL).toFixed(2) + " " + currencySettings.symbol
      ).setScale(1);
      this.changeSizeTextChip(this.Bet_all, this.Bet_all.text, 5);

      this.lastBet[this.counter]
          ? this.lastBet[this.counter]
              .push(
                  cellNumber +
                  "#" +
                  +(this.bets[cellNumber].totalBets - totalBetBefore).toFixed(2)
              )
          : (this.lastBet[this.counter] = [
              cellNumber +
              "#" +
              +(this.bets[cellNumber].totalBets - totalBetBefore).toFixed(2)
          ]);

      this["Repeat bet"].setVisible(false);
      this["Repeat bet2"].setVisible(true);
      //===========================================Новая Функция фишек==================================================
    }
  }

  changeSizeTextChip(chipTextContainer, text, value) {
    const numberLength = text.split(".").join("").length;

    if (numberLength > (value ? value : 3))
      chipTextContainer
          .setScale(
              +(chipTextContainer.scale - (value ? 0.04 : 0.05) * numberLength).toFixed(2)
          );
    else if (/\./.test(text))
      chipTextContainer
        .setScale(
            value ?
                chipTextContainer.scale :
                chipTextContainer.scale - 0.05
        )
  }


  stopAnimPlaceBet(isStart) {
    this.animPlaceBetTextTimer && this.animPlaceBetTextTimer.destroy();
    this.animPlaceBetTextInterval && this.animPlaceBetTextInterval.destroy();

    this["Place Bet"].x = 246;
    this["Place Bet3"].x = 246;

    if (!isStart) {
      if (this.isStart) return;
      this.animPlaceBetTextTimer = this.time.delayedCall(3000, () =>
        this.animPlaceBetText("Place Bet")
      );
    } else {
      this["Place Bet"].setVisible(false);
      this["Place Bet2"].setVisible(true);

      this.redLoadRectangle = this.add
        .rectangle(77.5, 418, 0, 19, 0xbe2f2f, 1)
        .setOrigin(0)
        .setAlpha(1)
        .setDepth(0);

      this.redGradient = this.add
        .graphics()
        .fillGradientStyle(
          0xffffff,
          0xffffff,
          0xffffff,
          0xffffff,
          0.45,
          0.45,
          0,
          0
        )
        .fillRect(77.5, 418.5, 0, 7);

      this.time.addEvent({
        delay: 666,
        callback: () => {
          this.redLoadRectangle.width += 336 / 6;
          this.redGradient.commandBuffer[12] += 336 / 6;
        },
        repeat: 5,
      });
      this.time.delayedCall(4000, () => {
        this["Place Bet2"].setVisible(false);
        this["Place Bet3"].setVisible(true);
        this.NO_MORE_BETS = true;
        this.clearAllMask();
        game.scene.keys["Musics"].sounds("no_more_bets");
        Object.entries(this.bets)
            .filter(( item) => item[1].totalBets > 0)
            .forEach(item => this.LAST_BET_REPEAT.push([item[0], Object.entries(item[1])[0][1]]));
        this.time.delayedCall(1000, () => {
          if (!this.BET_ALL) {
            this.waitModeON();
          } else {
            this.sendBets();
            this.animPlaceBetText("Place Bet3");
          }
        });
      });
    }
  }

  balanceUpdate(balanceValue) {
    this.balance = balanceValue;
    this["playerBalance"].setText(
        currencySettings.symbolPosition = "before" ?
            currencySettings.symbol + " " + (+this.balance).toFixed(2) :
            (+this.balance).toFixed(2) + " " + currencySettings.symbol
    );
    const dataRouletteLS = JSON.parse(localStorage.getItem('roulette'));
    dataRouletteLS.balance = +(this.balance * 100).toFixed(2);
    localStorage.setItem('roulette', JSON.stringify(dataRouletteLS))
    updateURL();
  }

  waitModeON() {
    this.WAIT_MODE = true;
    this.isStart = false;
    this.deleteAllBets(false);
    this.redLoadRectangle && this.redLoadRectangle.destroy();
    this.redLoadRectangle = false;
    this.redGradient && this.redGradient.destroy();
    game.scene.keys["Musics"].sounds("place");
    this.time.delayedCall(1000, () => {
      this["Bets Not Accept"].setVisible(false);
    })
  }

  sendBets() {

    const allBets = Object.entries(this.bets)
        .filter(el => el[1].totalBets > 0)
        .map(el => [el[0], el[1].totalBets]),
        infoBets = {
          "playerSelections": [],
          "drawType": "uniqueToPlayer",
          "gameCode": gameCode,
          "amount": +(allBets.reduce((sum, current) => sum + current[1], 0) * 100).toFixed(0),
          "currency": urlParamsObject["currencyCode"]
        };
    allBets.forEach(el => {
      infoBets.playerSelections.push({
        stake: +(el[1] * 100).toFixed(0),
        marketCode: this.checkName(el[0]),
        selections: this.checkName(el[0], true),
        currency: urlParamsObject["currencyCode"]
      })
    });

    infoBets.playerSelections = JSON.stringify(infoBets.playerSelections);
    placeBets(infoBets);
  }

  checkName(nameBet, selections) {
    const ucFirst = (str) => str[0].toUpperCase() + str.slice(1),
        numberRange = (name) => {
          switch (name) {
            case "1st12":
              return "rouletteDozens1to12"
            case "2nd12":
              return "rouletteDozens13to24"
            case "3rd12":
              return "rouletteDozens25to36"
            case "2to1-l1":
              return "rouletteColumns1st"
            case "2to1-l2":
              return "rouletteColumns2nd"
            case "2to1-l3":
              return "rouletteColumns3rd"
            case "1-18":
              return "rouletteOverUnder1to18"
            case "19-36":
              return "rouletteOverUnder19to36"
          }
        };

    if (Number.isInteger(+nameBet)){
      return selections ? [nameBet] : "rouletteNumbers"
    } else if (nameBet.split("|").length > 1) {
      if (selections)
          return nameBet.split("|");
      switch (nameBet.split("|").length) {
        case 2:
          return "rouletteSplitNumbers"
        case 3:
          return "rouletteStreetNumbers"
        case 4:
          return "rouletteCornerNumbers"
        case 6:
          return "rouletteSixLineNumbers"
      }
    } else {
      switch (nameBet) {
        case "red":
        case "black":
          return selections ?
              [`rouletteColor${ucFirst(nameBet)}`] :
              "rouletteColor"
        case "even":
        case "odd":
          return selections ?
              [`rouletteOddEven${ucFirst(nameBet)}`] :
              "rouletteOddEven"
        case "1-18":
        case "19-36":
          return selections ?
              [numberRange(nameBet)] :
              "rouletteHighLow"
        case "1st12":
        case "2nd12":
        case "3rd12":
          return selections ?
              [numberRange(nameBet)] :
              "rouletteDozens"
        case "2to1-l1":
        case "2to1-l2":
        case "2to1-l3":
          return selections ?
              [numberRange(nameBet)] :
              "rouletteColumns"
      }
    }
  }

  generateNumber(winNumber) {
    this.rand = winNumber;//Math.floor(Math.random() * 37);
    this.randNum = this.rouletteNum.indexOf(this.rand) + 1;
    Phaser.Actions.RotateAroundDistance(
        this.groupSmall.getChildren(),
        this.geomPointSmall,
        -this.randNum * this.angle + this.angle / 2,
        85
    );
  }


  clearAllMask() {
    this["table_highlight"].mask &&
      this["table_highlight"].clearMask().setDepth(0);
    this["racebet_highlight"].mask &&
      this["racebet_highlight"].clearMask().setDepth(0);
  }

  makeABet({ cell, cellNumber }, total) {
    if (!this.NO_MORE_BETS) {
      this.counter++;
      this.clickUndoCount = 0;
      this["Undo table2"].setVisible(false);
      this["Undo table"].setVisible(true);
      this.stopAnimPlaceBet();
      if (!isNaN(+cellNumber)) {
        this.setBet(this.mainArrayCell[cellNumber], cellNumber, total);
        this.setRT(this.chipsFirstContainers);
        this.LAST_BET_REPEAT = [];
      } else {
        this.setBet(cell, cellNumber, total);
        this.setRT(this.chipsFirstContainers);
        this.LAST_BET_REPEAT = [];
      }
    }
  }

  reducer(cellNumber, bool) {
    this.cellsNumberArray[cellNumber]
      ? this.highlightCells(this.cellsNumberArray[cellNumber], bool, cellNumber)
      : this.highlightCells([cellNumber], bool);
  }

  highlightCells(cellArray, isHighlight, cellNumber) {
    this.isRaceBet
      ? this["racebet_highlight"].setDepth(2)
      : this["table_highlight"].setDepth(2);
    const graphics = this.make.graphics(undefined, undefined);
    let button;

    if (this.isRaceBet && cellNumber) {
      const arrButton = [];
      button = CREATE_SECOND_CELL_BIG_BTNS.filter(
        (item) => item[2].cellNumber === cellNumber
      )[0];

      button[4].forEach((el, i) => {
        i % 2 === 0
          ? arrButton.push({ x: el + button[0] })
          : (arrButton[arrButton.length - 1].y = el + button[1]);
      });

      graphics.fillPoints(arrButton);
    } else if (cellNumber) {
      button = CREATE_CELL_LEFT_BOTTOM_DATA.filter(
        (item) => item[4].cellNumber === cellNumber
      )[0];

      button &&
        graphics.fillRect(
          button[0] - button[2],
          button[1] - button[3],
          button[2],
          button[3]
        );
    }

    cellArray.map((num) => {
      const arr = [],
        number = Object.entries(
          this.isRaceBet ? this.secondArrayCell : this.mainArrayCell
        ).find((j) => num === j[0])[1];

      if (this.isRaceBet) {
        number.pathData.forEach((el, i) => {
          i % 2 === 0
            ? arr.push({ x: el + number.x })
            : (arr[arr.length - 1].y = el + number.y);
        });

        graphics.fillPoints(arr);
      } else {
        graphics.fillRect(
          number.x - number.width,
          number.y - number.height,
          number.width,
          number.height
        );
      }
    });

    const mask = graphics.createGeometryMask();
    if (isHighlight) {
      this.isRaceBet
        ? this["racebet_highlight"].setMask(mask)
        : this["table_highlight"].setMask(mask);
    } else {
      this.isRaceBet
        ? this["racebet_highlight"].clearMask().setDepth(0)
        : this["table_highlight"].clearMask().setDepth(0);
    }
  }

  isShowFirsScreenElems(bool) {
    for (let key in this.mainArrayCell)
      if (
        key !== "1|6|9|14|17|20|31|34" &&
        key !== "5|8|10|11|13|16|23|24|27|30|33|36" &&
        key !== "0|2|3|4|7|12|15|18|19|21|22|25|26|28|29|32|35" &&
        key !== "0|3|12|15|26|32|35"
      )
        this.mainArrayCell[key].setVisible(bool);

    for (let key in this.secondArrayCell)
      this.secondArrayCell[key].setVisible(!bool);

    this.rtFirstContainer && this.rtFirstContainer.setVisible(bool);
    this.rtwinChips && this.rtwinChips.setVisible(bool);
    this.rtSecondContainer && this.rtSecondContainer.setVisible(!bool);
  }
}

export { MainWindow };
