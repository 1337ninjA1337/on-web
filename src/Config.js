import { Scale } from "phaser";
import { BeforeLoad } from "./scenes/BeforeLoad";
import { Loader } from "./scenes/Loader";
import { SetLanguages } from "./scenes/SetLanguages";
import { MainWindow } from "./scenes/MainWindow";
import { Help } from "./scenes/Help";
import { TopMenu } from "./scenes/topMenu";
import { Musics } from "./scenes/Musics";

export const isMobile = false;
  // /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //   navigator.userAgent
  // ) || navigator.maxTouchPoints > 0;

export const gameWidth = 800;
export const height = 620;
export const offsetX = gameWidth / 2;

const config = {
  type: Phaser.AUTO,
  parent: "slots",
  powerPreference: "high-performance",
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
    width: gameWidth,
    height: height,
  },
  fps: {
    target: 20,
    forceSetTimeOut: true
  },
  audio: {
    disableWebAudio: false,
  },
  dom: {
    createContainer: false,
  },
  scene: [BeforeLoad, Loader, SetLanguages, Musics, MainWindow, Help, TopMenu],
};

export const game = new Phaser.Game(config);
