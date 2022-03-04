import { game } from "./Config";
import EchoClient from "./scenes/EchoClient";

export const gameCode = "roulette-onweb";
let endpoint,
    count = 0;

export let urlParamsObject = location.search
    .substr(1)
    .split("&")
    .reduce(function (res, a) {
        let paramArr = a.split("=");
        res[decodeURIComponent(paramArr[0])] =
            paramArr.length === 1 ? null : decodeURIComponent(paramArr[1]);
        return res;
    }, {});

export let playerDrawHistory = {},
    currencySettings = {},
    serverBalance;


export const getNewToken = () => {
    if (!urlParamsObject["accessToken"]) {
        setTimeout(getNewToken, 3000);
        console.log("%c Specify the URL parameters", "color: #b80000")
    } else if (
        localStorage.getItem('roulette')
        && urlParamsObject["accessToken"] === JSON.parse(localStorage.getItem('roulette')).accessToken
    ) {
        endpoint = process.env[urlParamsObject["skinID"]]["apiEndpoint"];
        game.scene.keys["SetLanguages"].startLanguage = urlParamsObject["langCode"].toLowerCase();
        updateURL();
        getSettings();
    } else {
        endpoint = process.env[urlParamsObject["skinID"]]["apiEndpoint"];
        game.scene.keys["SetLanguages"].startLanguage = urlParamsObject["langCode"].toLowerCase();
        //=============================================Получаем новый токен=================================================
        fetch(
            `${endpoint}/api/operator/swap-game-launch-token` +
            `?gameLaunchToken=${urlParamsObject["accessToken"]}` +
            `&skinID=${urlParamsObject["skinID"]}`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then(res => res.json())
            .then(res => {
                if (!res["errorMessage"]) {
                    saveNewToken(res);
                    getSettings();
                } else {
                    if (confirm("Go back?"))
                        location.href = location.href.replace(location.search, "") // It could be any link. Where you want the user to go back to.


                    // if (count < 3) {
                    //     console.log(`%c${res["errorMessage"]}`, "color: #b80000");
                    //     setTimeout(getNewToken, 3000);
                    //     ++count
                    // } else {
                    //     if (confirm("Restart page?"))
                    //         location.href = location.href.replace(location.search, "")
                    // }

                }
            })
            .catch(err => {
                if (confirm("Go back?"))
                    location.href = location.href.replace(location.search, "") // It could be any link. Where you want the user to go back to.
            });
    }
}

const getSettings = () => {
    //=============================================Получаем настройки игры==============================================

    fetch(`${endpoint}/api/skins/${urlParamsObject["skinID"]}/games/${gameCode}/settings`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
        .then(res => res.json())
        .then(res => {

            countLimits(res.data["currencySettings"]
                .filter(item =>
                    item["currencyId"] === JSON.parse(localStorage.getItem("roulette")).currencyID
                )[0]);
        })
        .catch(err => console.log(err));

    //=======================================Получаем историю ставок игрока=============================================
    fetch(
        `${endpoint}/api/players/${urlParamsObject["playerID"]}/tickets`+
        `?page=1`+
        `&gameCode=${gameCode}`+
        `&perPage=16`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                SkinID: urlParamsObject["skinID"],
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("roulette")).newToken,
            }
        }
    )
        .then(res => res.json())
        .then(res => {

            console.log(res.data);
            if (res.message === 'success') playerDrawHistory = res.data
        })
        .catch(err => {
            console.log(err)
            if (err.message !== 'success') playerDrawHistory = "rand"
        });

    //==========================================Запускаем загрузку игры=================================================
    game.scene.keys["BeforeLoad"].startGame();

    //====================================Подписываемся на события приватного канала====================================
    const Broadcaster = EchoClient.getEchoClient(
        urlParamsObject["skinID"],
        JSON.parse(localStorage.getItem("roulette")).newToken
    );

    
    console.log(urlParamsObject);
    
    Broadcaster.private("draw-results.roulette-onweb." +
        urlParamsObject["skinID"] + "." +
        urlParamsObject["playerID"])
        .listen("GameTicketResultEvent", (data) => {
            game.scene.keys["MainWindow"].WAIT_MODE = false;
            const drawResults = JSON.parse(data["drawResults"]);
            game.scene.keys["MainWindow"].generateNumber(drawResults["drawnNumbers"][0].number);

            game.scene.keys["MainWindow"]["Bets Accept"]
                .setText(
                    game.scene.keys["MainWindow"]["Bets Accept"].text.replace(/\w+[.!?]?$/, "") +
                    data["gameTicketID"]
                )
                .setVisible(true);

            game.scene.keys["TopMenu"]["ID"]
                .setText(
                    game.scene.keys["TopMenu"]["ID"].text.replace(/[\w-]+[.!?]?$/, data["gameTicketID"])
                );
            game.scene.keys["MainWindow"]
                .balanceUpdate(
                    +(game.scene.keys["MainWindow"].balance - game.scene.keys["MainWindow"].BET_ALL)
                        .toFixed(2)
                );
        })
        .listen("AppMessageEvent", (res) => {
            const MAINWINDOW = game.scene.keys["MainWindow"];
            MAINWINDOW.Maximum.setVisible(false);
            MAINWINDOW.ErrorReaction
                .setText("A technical error has occured")
                .setDepth(2)
                .setVisible(true);
            MAINWINDOW.limitBlock.setFillStyle(0xff0000, 1);
            MAINWINDOW.limitTimer && clearTimeout(this.limitTimer);
            MAINWINDOW.limitTimer = setTimeout(() => {
                MAINWINDOW.ErrorReaction.setVisible(false);
                MAINWINDOW.limitBlock.setFillStyle(0x144628, 1);
            }, 4000);
        });

    Broadcaster.private("3rdParty.private." +
        urlParamsObject["skinID"] + "." +
        urlParamsObject["playerID"])
        .listen("BalanceUpdateEvent", (data) => {
            if (data.status === 'deposit')
                serverBalance = data.balance;
        });

}

const countLimits = (settings) => {
    currencySettings = {
        defaultStake: (+settings.defaultStake).toFixed(settings["currencyDecimals"]),
        minStake: (+settings.minStake).toFixed(settings["currencyDecimals"]),
        maxStake: (+settings.maxStake).toFixed(settings["currencyDecimals"]),
        maxPayout: (+settings.maxPayout).toFixed(settings["currencyDecimals"]),
        rouletteNumbers: (settings.maxStake / 10).toFixed(settings["currencyDecimals"]),
        rouletteSplitNumbers: ((settings.maxStake / 10) * 2).toFixed(settings["currencyDecimals"]),
        rouletteStreetNumbers: ((settings.maxStake / 10) * 3).toFixed(settings["currencyDecimals"]),
        rouletteCornerNumbers: ((settings.maxStake / 10) * 4).toFixed(settings["currencyDecimals"]),
        rouletteSixLineNumbers: ((settings.maxStake / 10) * 6).toFixed(settings["currencyDecimals"]),
        rouletteX2: (settings.maxStake / 2).toFixed(settings["currencyDecimals"]),
        rouletteX3: (settings.maxStake / 2).toFixed(settings["currencyDecimals"]),
        denominations: Object.values(settings.denominations).filter(el => el),
        symbol: settings.symbol,
        symbolPosition: settings.symbolPosition,
    };
    game.scene.keys["SetLanguages"].balance = (+urlParamsObject["balance"] / 100).toFixed(2);
};

const saveNewToken = (res) => {
    localStorage.setItem("roulette", JSON.stringify({
        newToken: res.newToken,
        currencyID: res["playerCurrencyID"],
        playerID: urlParamsObject["playerID"],
        skinID: urlParamsObject["skinID"],
        accessToken: urlParamsObject["accessToken"],
        langCode: urlParamsObject["langCode"],
        balance: urlParamsObject["balance"],
        currencyCode: urlParamsObject["currencyCode"]
    }));
}

export const placeBets = (array) => {
    console.log(array);
    fetch(`${endpoint}/api/tickets/place`,
        {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                SkinID: urlParamsObject["skinID"],
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("roulette")).newToken,
            },
            body: JSON.stringify(array)
        }
    )
        .then(res => res.json())
        .then(res => {
            game.scene.keys["MainWindow"].WAIT_MODE = true;
            // setTimeout(() => {
            //     if (game.scene.keys["MainWindow"].WAIT_MODE) {
            //         game.scene.keys["MainWindow"]["Bets Not Accept"].setVisible(true);
            //         game.scene.keys["MainWindow"].waitModeON();
            //     }
            //
            // }, 4000);
        })
        .catch(err => {
            game.scene.keys["MainWindow"]["Bets Not Accept"].setVisible(true);
            game.scene.keys["MainWindow"].waitModeON();
            console.log(err);
        });
}

export const updateURL = () => {
    const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname,
        dataUrlLS = JSON.parse(localStorage.getItem('roulette')),
        newUrl =
            baseUrl +
            `?skinID=${dataUrlLS.skinID}` +
            `&playerID=${dataUrlLS.playerID}` +
            `&accessToken=${dataUrlLS.accessToken}` +
            //`&playerDisplayID=1` +
            `&langCode=${dataUrlLS.langCode}` +
            //`&demoMode=0` +
            `&balance=${dataUrlLS.balance}` +
            `&currencyCode=${dataUrlLS.currencyCode}`;
    history.pushState(null, null, newUrl);
}

