import textOptions from "./textOptions";
import {game, isMobile} from "../Config";
import {currencySettings, urlParamsObject} from "../api";

class SetLanguages extends Phaser.Scene{
    constructor() {
        super("SetLanguages");
        this.device = isMobile ? "mobile" : "desktop";
        this.startLanguage = "en"//"en";
        this.balance = "0";
    }

    addText(lang, scenes) {
        this.startLanguage = lang
        Object.entries(textOptions[lang][scenes]).map((option) => {
            const { x, y } = option[1][this.device],
                { origin, fontSize, color, text, fontWeight, lineSpacing, fontFamily, visible, setDepth } = option[1];
            game.scene.keys[scenes][option[0]] = game.scene.keys[scenes].add
                .text(x, y, text, {
                    fontSize: fontSize,
                    color: color,
                    align: "center",
                    fontStyle: fontWeight,
                    fontFamily: fontFamily,
                    lineSpacing: lineSpacing,
                })
                .setOrigin(origin.x, origin.y)
                .setVisible(visible !== undefined ? visible : true)
                .setDepth(setDepth !== undefined ? setDepth : 0);
            if (option[0] === "MaximumLimit") {
                game.scene.keys[scenes][option[0]].setText(text + currencySettings.maxStake);
            } else if (/[0-9]+text/.test(option[0])) {
                this.changeChipDenomination(game.scene.keys[scenes][option[0]], option[0]);
            } else if (option[0] === "playerBalance") {
                game.scene.keys[scenes][option[0]]
                    .setText(
                        currencySettings.symbolPosition = "before" ?
                            currencySettings.symbol + " " + (+this.balance).toFixed(2) :
                            (+this.balance).toFixed(2) + " " + currencySettings.symbol
                    );
            } else if (option[0] === "Bet_all") {
                game.scene.keys[scenes][option[0]]
                    .setText(
                        currencySettings.symbolPosition = "before" ?
                            currencySettings.symbol + " " + game.scene.keys[scenes][option[0]].text :
                            game.scene.keys[scenes][option[0]].text + " " + currencySettings.symbol
                    );
                game.scene.keys[scenes]
                    .changeSizeTextChip(
                        game.scene.keys[scenes][option[0]],
                        game.scene.keys[scenes][option[0]].text,
                        5
                    );
            }

        });
    }

    setLang(lang) {
        this.startLanguage = lang
        game.scene.keys["Musics"].sounds("btn2");
        Object.entries(textOptions[lang]).forEach(el => {
            if (el[0] !== "BeforeLoad")
                Object.entries(el[1]).forEach(option => {
                    const { x, y } = option[1][this.device],
                        { origin, fontSize, color, text, fontWeight, lineSpacing, fontFamily, setDepth } = option[1]
                    game.scene.keys[el[0]][option[0]]
                        .setText(text)
                        .setStyle({
                            fontSize: fontSize,
                            color: color,
                            align: "center",
                            fontStyle: fontWeight,
                            fontFamily: fontFamily,
                            lineSpacing: lineSpacing,
                        })
                        .setOrigin(origin.x, origin.y)
                        .setX(x)
                        .setY(y)
                        .setDepth(setDepth !== undefined ? setDepth : 0);
                    if (option[0] === "MaximumLimit") {
                        game.scene.keys[el[0]][option[0]].setText(text + currencySettings.maxStake)
                    } else if (/[0-9]+text/.test(option[0])) {
                        this.changeChipDenomination(game.scene.keys[el[0]][option[0]], option[0]);
                    } else if (option[0] === "playerBalance") {
                        game.scene.keys[el[0]][option[0]]
                            .setText(
                                currencySettings.symbolPosition = "before" ?
                                    currencySettings.symbol +
                                    " " +
                                    (+game.scene.keys["MainWindow"].balance).toFixed(2) :
                                    (+game.scene.keys["MainWindow"].balance).toFixed(2) +
                                    " " +
                                    currencySettings.symbol
                            );
                    } else if (option[0] === "Bet_all") {
                        game.scene.keys[el[0]][option[0]]
                            .setText(
                                currencySettings.symbolPosition = "before" ?
                                    currencySettings.symbol + " " + (game.scene.keys["MainWindow"].BET_ALL).toFixed(2) :
                                    game.scene.keys["MainWindow"].BET_ALL.toFixed(2) + " " + currencySettings.symbol
                            );
                        game.scene.keys[el[0]]
                            .changeSizeTextChip(
                                game.scene.keys[el[0]][option[0]],
                                game.scene.keys[el[0]][option[0]].text,
                                5
                            );
                    }
                });
        })
    }

    changeChipDenomination(scene, name) {
        const nominal = currencySettings.denominations;
        switch (name) {
            case "10text":
                this.changeSizeTextChip(scene, nominal[0]);
                break;
            case "20text":
                this.changeSizeTextChip(scene, nominal[1]);
                break;
            case "100text":
                this.changeSizeTextChip(scene, nominal[2]);
                break;
            case "200text":
                this.changeSizeTextChip(scene, nominal[3]);
                break;
            case "500text":
                this.changeSizeTextChip(scene, nominal[4]);
                break;
        }
    }

    changeSizeTextChip(scene, value) {
        const numberLength = value.split(".").join("").length;
        if (/\./.test(value) && numberLength === 3) {
            scene.setText(value).setFontSize(12);
        } else if (!/\./.test(value) && numberLength <= 3 || numberLength < 3) {
            scene.setText(value);
        } else {
            scene.setText(value)
                .setFontSize((/\./.test(value) ? 13 : 14) - numberLength)
                .setX(scene.x + 0.5)
                .setY(scene.y + 0.5);
        }
    }
}

export {SetLanguages}