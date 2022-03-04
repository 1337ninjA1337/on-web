import { game } from "../Config";
import textOptions from "./textOptions";

const style3 = {
        fontSize: 12,
        color: "#fff",
        fontStyle: "bold",
        fontFamily: "Arial",
    };

class TopMenu extends Phaser.Scene {
    constructor() {
        super("TopMenu");
        this.volume = 1;
        this.languages = Object.entries(textOptions).map(el => el[0]);
        this.isHelp = false;
    }

    create() {
        game.scene.keys["SetLanguages"].addText(game.scene.keys["SetLanguages"].startLanguage, "TopMenu");
        this.topMenuContainer = this.add
            .container(0, 0, [
                this.add
                    .rectangle(0, 0, 800, 20, 0x000, 1)
                    .setOrigin(0)
                    .setInteractive(),
                this.add.rectangle(0, 18, 800, 2, 0x4e4e4e, 1).setOrigin(0),
                this.add.rectangle(540, 0, 130, 18, 0x000, 1).setOrigin(0),
                this.add.rectangle(557, 0, 2, 18, 0x4e4e4e, 1).setOrigin(0),
                this.add.rectangle(677, 0, 2, 18, 0x4e4e4e, 1).setOrigin(0),
                this.add.rectangle(18, 0, 2, 18, 0x4e4e4e, 1).setOrigin(0),
                this.add.rectangle(37, 0, 2, 18, 0x4e4e4e, 1).setOrigin(0),
                this.add.rectangle(56, 0, 2, 18, 0x4e4e4e, 1).setOrigin(0),
                this.add.graphics()
                    .fillGradientStyle(0x000000, 0x000000, 0x000000, 0x000000,0.68,0.68,0,0)
                    .fillRect(0, 0, 800, 20),
                this.add.rectangle(679, 0, 119, 18, 0x000000, 1).setOrigin(0),//0x660000
                this["ID"],
                this.add.sprite(2, 4, "icon_languages").setFrame(0).setOrigin(0),
                this.add.sprite(40, 4, "icon_sound").setFrame(2).setOrigin(0),
                this.add.text(25, 3, "?", style3).setOrigin(0),
                this.add.text(603, 3, "00:00", style3).setOrigin(0),

            ])
            .setDepth(110);
        this.topMenuArrow = this.add.image(369, -1, "top_arrow").setOrigin(0).setDepth(111);


        this.topBtnsContainer = this.add
            .container(305, -50, [
                this.add.image(95, 30, "top_frame").setOrigin(0.5),
                this.add
                    .circle(12, 1, 23, 0x144628)
                    .setOrigin(0),
                this.add
                    .circle(72, 1, 23, 0x144628)
                    .setOrigin(0),
                this.add
                    .circle(132, 1, 23, 0x144628)
                    .setOrigin(0),
                this.add
                    .sprite(70, -1, "btn_sound")
                    .setFrame(4)
                    .setOrigin(0)
                    .setInteractive(),
                this.add
                    .sprite(130, -1, "btn_help")
                    .setFrame(0)
                    .setOrigin(0)
                    .setInteractive(),
                this["AUDIO[A]"],
                this["HELP[P]"],
            ])
            .setDepth(100);

        this.topBtnsContainerLanguages = this.add
            .container(305, -50, [
                this["LANGUAGE[L]"],
                this.add
                    .sprite(10, -1, "btn_en")
                    .setFrame(0)
                    .setOrigin(0)
                    .setVisible(true)
                    .setInteractive(),
                this.add
                    .sprite(10, -1, "btn_es")
                    .setFrame(0)
                    .setOrigin(0)
                    .setVisible(false)
                    .setInteractive(),
                this.add
                    .sprite(10, -1, "btn_tr")
                    .setFrame(0)
                    .setOrigin(0)
                    .setVisible(false)
                    .setInteractive(),
                this.add
                    .sprite(10, -1, "btn_fr")
                    .setFrame(0)
                    .setOrigin(0)
                    .setVisible(false)
                    .setInteractive(),
                this.add
                    .circle(12, 1, 30, 0x144628, 0.01)
                    .setInteractive()
                    .setOrigin(0),
            ])
            .setDepth(100);

        this.input.keyboard.on("keydown-A", () => this.setVolume());
        this.input.keyboard.on("keydown-P", () => this.showHelpPage());

        this.topBtnsContainerLanguages.list[5].on("pointerover", () =>
            this.topBtnsContainerLanguages.list[0].setVisible(true)
        );

        this.topBtnsContainerLanguages.list[5].on("pointerout", () =>
            this.topBtnsContainerLanguages.list[0].setVisible(false)
        );

        this.topBtnsContainerLanguages.list[5].on("pointerdown", () =>
            this.changeLanguage());
        this.topBtnsContainerLanguages.list[5].on("pointerup", () =>
            this.topBtnsContainerLanguages.list
                .filter(item => item.type === "Sprite")
                .find(el => el["visible"]).setFrame(0));

        this.topBtnsContainer.list[4].on("pointerover", () =>
            this.toggleTopBtnsText(true, 6)
        );

        this.topBtnsContainer.list[4].on("pointerout", () =>
            this.toggleTopBtnsText(false, 6)
        );

        this.topBtnsContainer.list[5].on("pointerover", () =>
            this.toggleTopBtnsText(true, 7)
        );

        this.topBtnsContainer.list[5].on("pointerout", () =>
            this.toggleTopBtnsText(false, 7)
        );

        this.topBtnsContainer.list[4].on("pointerup", () => this.setVolume());
        this.topBtnsContainer.list[4].on("pointerdown", () => {

            if (this.volume === 1) {
                this.topBtnsContainer.list[4].setFrame(1);
            } else if (this.volume === 0.5) {
                this.topBtnsContainer.list[4].setFrame(5);
            } else {
                this.topBtnsContainer.list[4].setFrame(3);
            }
        });

        this.topBtnsContainer.list[5].on("pointerdown", () => {
            game.scene.keys["Musics"].sounds("btn2");
            this.showHelpPage();
            this.isHelp = game.scene.keys["Help"].scene.settings.visible;
        });

        this.BIG_RECT = this.add
            .rectangle(0, 0, 800, 620, 0xffffff, 1)
            .setOrigin(0)
            .setAlpha(0.001)
            .setDepth(99)
            .setInteractive()
            .setVisible(false);

        this.BIG_RECT.on("pointerup", () => {
            if (!this.isHelp) {
                this.topBtnsAnim = false;
                this.BIG_RECT.setVisible(false);
                this.topMenuContainer.list[0].setInteractive();
            }
        });

        this.topMenuContainer.list[0].on("pointerup", () => {
            if (!this.isHelp) {
                this.topBtnsAnim = true;
                this.BIG_RECT.setVisible(true);
                this.topMenuContainer.list[0].disableInteractive();
            }
        });

        this.changeLanguage(game.scene.keys["SetLanguages"].startLanguage)
    }


    update() {
        this.topMenuContainer.list[14].setText(this.getCurrentTime());

        if (this.topBtnsAnim) {
            if (this.topBtnsContainer.y < 25) {
                this.topBtnsContainer.y += 5;
                this.topBtnsContainerLanguages.y += 5;
            }
        } else {
            if (this.topBtnsContainer.y > -50) {
                this.topBtnsContainer.y -= 5;
                this.topBtnsContainerLanguages.y -= 5;
            }
        }
    }

    changeLanguage(lang) {
        const sprites  = this.topBtnsContainerLanguages.list
                .filter(item => item.type === "Sprite"),
            spriteActive = sprites.find(el => el["visible"]);

        spriteActive.setVisible(false);
        sprites.forEach((item, i, arr) => {
            if (lang && lang === this.languages[i]) {
                arr[i].setVisible(true);
                this.setMiniFlagFrame(i);
            } else if (!lang && item === spriteActive) {
                if (i === arr.length - 1) {
                    arr[0].setVisible(true);
                    arr[0].setFrame(1);
                    this.setMiniFlagFrame(0);
                    game.scene.keys["SetLanguages"].setLang(this.languages[0]);
                } else {
                    arr[i + 1].setVisible(true);
                    arr[i + 1].setFrame(1);
                    this.setMiniFlagFrame(i + 1);
                    game.scene.keys["SetLanguages"].setLang(this.languages[i + 1]);
                }
            }
        })
    }

    setMiniFlagFrame(num) {
        const miniFlagFrame = [0,4,5,20];
        this.topMenuContainer.list[11].setFrame(miniFlagFrame[num]);
    }

    setVolume() {
        if (this.volume === 1) {
            this.volume = 0;
            this.scene.scene.sound.setVolume(0);
            this.topMenuContainer.list[12].setFrame(0);
            this.topBtnsContainer.list[4].setFrame(0);
        } else if (this.volume === 0.5) {
            this.volume = 1;
            game.scene.keys["Musics"].sounds("audio_on");
            this.scene.scene.sound.setVolume(1);
            this.topMenuContainer.list[12].setFrame(2);
            this.topBtnsContainer.list[4].setFrame(4);
        } else if (this.volume === 0) {
            this.volume = 0.5;
            game.scene.keys["Musics"].sounds("audio_on");
            this.scene.scene.sound.setVolume(0.5);
            this.topMenuContainer.list[12].setFrame(1);
            this.topBtnsContainer.list[4].setFrame(2);
        }
    }

    getCurrentTime() {
        const currentDate = new Date(),
            hours =
                +currentDate.getHours() <= 9
                    ? "0" + currentDate.getHours()
                    : currentDate.getHours(),
            minutes =
                +currentDate.getMinutes() <= 9
                    ? "0" + currentDate.getMinutes()
                    : currentDate.getMinutes();

        return hours + ":" + minutes;
    }

    showHelpPage() {
        this.topBtnsAnim = false;
        this.BIG_RECT.setVisible(false);
        this.togglePageVisibility(false);
        game.scene.keys["Help"].togglePageVisibility(true);
        this.togglePageVisibility(true);
    }

    togglePageVisibility(value) {
        if (!this.isHelp) {
            this.topMenuArrow.setVisible(false);
            this.topBtnsContainer.setVisible(false);
            this.topBtnsContainerLanguages.setVisible(false);
        } else {
            this.topMenuArrow.setVisible(true);
            this.topBtnsContainer.setVisible(true);
            this.topBtnsContainerLanguages.setVisible(true);
        }
        this.scene[value ? "wake" : "sleep"]();
        this.scene.setVisible(value);
    }

    toggleTopBtnsText(bool, num) {
        this.topBtnsContainer.list[num].setVisible(bool);
    }
}

export { TopMenu };
