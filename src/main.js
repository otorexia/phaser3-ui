import resize from './utils/resize';
import * as config from './config';

function extendConfig(Phaser) {
  const scenes = require('./scenes');
  const ui = require('Plugins/phaser-ui');
  console.log(ui);
  // const { RandomNamePlugin } = require('Plugins/phaser-ui/RandomNamePlugin');
  config.scene = Object.values(scenes);
  config.type = Phaser.AUTO;
  // for plugins require file inside this funtion
  config.plugins = {
    global: [
      // {
      //   key: 'RandomNamePlugin',
      //   plugin: RandomNamePlugin,
      //   mapping: 'ranName',
      //   data: 'boo!',
      //   start: true
      // },
      {
        key: 'UI',
        plugin: ui.global,
        mapping: 'ui',
        data: 'boo!',
        start: true
      }
    ],
    scene: [{ key: 'UI', plugin: ui.scene, mapping: 'ui', start: true }]
  };
}

function initGame(Phaser) {
  // for Global exposure. use this pattern - require("expose-loader?<libraryName>!./<location to file>");
  /* eslint-disable */
  require('expose-loader?Global!./global');
  require('expose-loader?Customs!./utils/customs');
  /* eslint-enable */

  let game;
  extendConfig(Phaser);
  window.onload = () => {
    config.canvas.width = config.width;
    config.canvas.height = config.height;
    game = new Phaser.Game(config);
    resize(game, config.width, config.height);
    window.addEventListener(
      'resize',
      () => {
        resize(game, config.width, config.height);
      },
      false
    );
  };
}

if (process.env.NODE_ENV === 'development') {
  import('phaser').then(Phaser => {
    initGame(Phaser);
  });
} else {
  /**
   * load any kind of phaser build for production, including custom builds.
   */
  import('phaserMin').then(Phaser => {
    initGame(Phaser);
  });
}
