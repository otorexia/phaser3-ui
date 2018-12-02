import * as components from './components';
import { uiFactory, uiCreator } from './utils/helper';

export default class Test extends Phaser.Plugins.BasePlugin {
  /**
   *  My custom global plugin.
   *
   *  @constructor
   *  @param {Phaser.Plugins.PluginManager} manager - Phaser plugin manager.
   */
  constructor(manager) {
    super(manager);
    this.create = components;
    manager.registerGameObject('ui', uiFactory, uiCreator);
  }
}
