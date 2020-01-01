import { MainMenuScene } from './main-menu-scene.js';
import { GameMenuScene } from './game-menu-scene.js';
import { HeroMenuScene } from './hero-menu-scene.js';
import { CastleMenuScene } from './castle-menu-scene.js';

const Scenes = {
  mainMenu: MainMenuScene(),
  gameMenu: GameMenuScene(),
  heroMenu: HeroMenuScene(),
  armyMenu: CastleMenuScene()
}

export { Scenes }
