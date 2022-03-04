import { height, offsetX, game } from "../Config";
import { getNewToken } from "../api";

class BeforeLoad extends Phaser.Scene {
  constructor() {
    super("BeforeLoad");
    this.togleAnim = true;
    this.count = 0;
    this.startLoader = true;
  }
  preload() {
    getNewToken();
    this.load.image("loader", `src/assets/sprites/main/load_amanet.jpg`);
  }
  create() {
    game.scene.keys["SetLanguages"].addText(game.scene.keys["SetLanguages"].startLanguage, "BeforeLoad");
    this.scene.launch("Musics");

    if (this.textures.exists("loader") ) {
      this.bg = this.add.image(0, 0, "loader").setOrigin(0).setScale(1, 1.034);
    } else {
      this.startLoader = false;
      this.count > 9 ?
          confirm("Restart page?") && document.location.reload() :
          this.time.addEvent({
            delay: 3000,
            callback: () => {
              this.startLoader = true;
              ++this.count;
              this.scene.restart();
            },
          });
    }
  }

  update() {
    if (this.continueBtnText) {
      if (this.togleAnim) {
        this.continueBtnText.setScale(this.continueBtnText.scale -= 0.002);
        this.continueBtnText.scale < 0.95 && (this.togleAnim = false);
      } else {
        this.continueBtnText.setScale(this.continueBtnText.scale += 0.002);
        this.continueBtnText.scale > 1 && (this.togleAnim = true);
      }
    }
  }

  startGame() {
    this.startLoader &&
    this.scene.launch("Loader");
  }

  createBtn() {
    this.continueBtn = this.add
        .image(offsetX, height / 2 + 119, "btn_continue")
        .setOrigin(0.5);
    this["CONTINUE"].x = offsetX;
    this["CONTINUE"].y = height / 2 + 118;
    this.continueBtnText = this["CONTINUE"].setVisible(true);
    this.continueBtn.setInteractive();
    this.continueBtn.on("pointerup", () => {

      this.bg && game.scene.keys["BeforeLoad"].bg.destroy();
      this.continueBtn.destroy();
      this.continueBtnText.destroy();

      this.scene.launch("MainWindow");
      this.scene.launch("Help");
      this.scene.launch("TopMenu");
    });
  }
}
export { BeforeLoad };
