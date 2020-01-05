import { MainMenuScene } from "./main-menu-scene.js";
import { GameMenuScene } from "./game-menu-scene.js";
import { InventoryMenuScene } from "./inventory-menu-scene.js";
import { SkillsMenuScene } from "./skills-menu-scene.js";
import { ArmyMenuScene } from "./army-menu-scene.js";

const Scenes = {
  mainMenu: MainMenuScene(),
  gameMenu: GameMenuScene(),
  inventoryMenu: InventoryMenuScene(),
  skillsMenu: SkillsMenuScene(),
  armyMenu: ArmyMenuScene()
};

export { Scenes };
