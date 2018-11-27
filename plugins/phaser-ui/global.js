export default class Test extends Phaser.Plugins.BasePlugin {
  /**
   *  My custom global plugin.
   *
   *  @constructor
   *  @param {Phaser.Plugins.PluginManager} manager - Phaser plugin manager.
   */
  constructor(manager) {
    super('UI', manager);
  }

  init() {
    console.log('ui-plugin is alive', this); // eslint-disable-line
  }
}
