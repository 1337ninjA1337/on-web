import { game } from "../Config";

class Musics extends Phaser.Scene {
  constructor() {
    super("Musics");
    this.sounds = {};
  }

  create() {
    this.sounds = (name) => {
      const sound = !!game.scene.keys["Loader"].sound.jsonCache.entries
          .entries[`audiosprite_${game.scene.keys["SetLanguages"].startLanguage}`] ?
          this.sound
              .addAudioSprite(`audiosprite_${game.scene.keys["SetLanguages"].startLanguage}`, name) :
          this.sound
              .addAudioSprite(`audiosprite_en`, name)
      sound.play(name);

      return sound;
    };
  }
}

export { Musics };
