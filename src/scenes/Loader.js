import { height, offsetX, game } from "../Config";
import { urlParamsObject } from "../api"

class Loader extends Phaser.Scene {
  constructor() {
    super("Loader");
    this.count = 0;
    this.toggle = false;
    this.audioSpriteLangParams = urlParamsObject.langCode && this.switchAudioSpriteLang();
  }

  preload() {
    const progressBorder = this.add
      .graphics()
      .lineStyle(5, 0x000000, 1.0)
      .fillStyle(0x000000, 1.0)
      .strokeRect(offsetX - 185, height / 2 + 115, 390, 5);

    const progressBox = this.add.graphics({
      fillStyle: { color: 0x2df623 },
    });
    this.load.on("progress", (value) => {
      progressBox.clear();
      progressBox.fillRect(offsetX - 188, height / 2 + 113, 400 * value, 10);
    });

    this.load.image("ball", `src/assets/sprites/main/ball.png`);
    this.load.image(
      "icon_fullscreen",
      `src/assets/sprites/main/icon_fullscreen.png`
    );
    this.load.image(
      "btn_continue",
      `src/assets/sprites/buttons/btn_continue.png`
    );

    this.load.svg("top_arrow", `src/assets/sprites/main/topArrow.svg`, { width: 62, height: 20 });
    this.load.svg("top_frame", `src/assets/sprites/main/topFrame.svg`,{ width: 806, height: 160 });

    this.load.spritesheet(
      "icon_languages",
      "src/assets/sprites/main/icon_languages.png",
      {
        frameWidth: 15,
        frameHeight: 12,
      }
    );
    this.load.spritesheet(
      "icon_sound",
      "src/assets/sprites/main/icon_sound.png",
      {
        frameWidth: 15,
        frameHeight: 12,
      }
    );
    this.load.spritesheet(
      "numbers",
      "src/assets/sprites/main/numbers.png",
      {
        frameWidth: 54,
        frameHeight: 34,
      }
    );
    this.load.spritesheet(
      "btn_sound",
      "src/assets/sprites/main/btn_sound.png",
      {
        frameWidth: 50,
        frameHeight: 50,
      }
    );
    this.load.spritesheet(
      "btn_en",
      "src/assets/sprites/buttons/btn_en.png",
      {
        frameWidth: 50,
        frameHeight: 50,
      }
    );
    this.load.spritesheet(
      "btn_es",
      "src/assets/sprites/buttons/btn_es.png",
      {
        frameWidth: 50,
        frameHeight: 50,
      }
    );
    this.load.spritesheet(
      "btn_fr",
      "src/assets/sprites/buttons/btn_fr.png",
      {
        frameWidth: 50,
        frameHeight: 50,
      }
    );
    this.load.spritesheet(
      "btn_tr",
      "src/assets/sprites/buttons/btn_tr.png",
      {
          frameWidth: 50,
          frameHeight: 50,
      }
    );
    this.load.spritesheet(
      "btn_fullscreen",
      "src/assets/sprites/main/btn_fullscreen.png",
      {
        frameWidth: 50,
        frameHeight: 50,
      }
    );
    this.load.spritesheet("btn_help", "src/assets/sprites/main/btn_help.png", {
      frameWidth: 50,
      frameHeight: 50,
    });

    this.load.multiatlas(
      "spritesheet",
      `src/assets/sprites/main/spritesheet.json`,
      `src/assets/sprites/main`
    );

    this.load.audioSprite(
      `audiosprite_${this.audioSpriteLangParams}`,
      `src/assets/sound/audiosprite_${this.audioSpriteLangParams}.json`,
      [
        `src/assets/sound/audiosprite_${this.audioSpriteLangParams}.ogg`,
        `src/assets/sound/audiosprite_${this.audioSpriteLangParams}.mp3`,
        `src/assets/sound/audiosprite_${this.audioSpriteLangParams}.ac3`,
        `src/assets/sound/audiosprite_${this.audioSpriteLangParams}.m4a`,
      ],
      { instaces: 6 }
    );
    // this.load.audioSprite(
    //   "audiosprite_es",
    //   "src/assets/sound/audiosprite_es.json",
    //   [
    //     "src/assets/sound/audiosprite_es.ogg",
    //     "src/assets/sound/audiosprite_es.mp3",
    //     "src/assets/sound/audiosprite_es.ac3",
    //     "src/assets/sound/audiosprite_es.m4a",
    //   ],
    //   { instaces: 6 }
    // );

    this.load.once("loaderror", () => {
      this.toggle = true;
      this.count > 9 ?
          confirm("Restart page?") && document.location.reload()  :
          this.time.addEvent({
            delay: 3000,
            callback: () => {
              ++this.count;
              this.toggle = false;
              this.scene.restart();
            },
          });
    }, this);

    this.load.on("complete", () => {
      if (!this.toggle) {
        progressBorder.destroy();
        progressBox.destroy();
        game.scene.keys["BeforeLoad"].createBtn();
      }
    });

  }

  switchAudioSpriteLang() {
      switch ((urlParamsObject.langCode).toLowerCase()) {
          case "es":
              return "es";
          default:
              return "en";
      }
  }
}
export { Loader };
