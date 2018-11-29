import { Button } from 'Plugins/phaser-ui'; // eslint-disable-line

export default class Test extends Phaser.Scene {
  constructor() {
    super({
      key: 'Test'
    });
  }

  create() {
    // 3(+1) different way to do it
    const b = this.make.ui(
      this,
      'Button',
      100,
      100,
      {
        // let b = this.ui.make.Button(this, {
        // let b = new Button(this, {
        ninesprite: true,
        x: 0,
        y: 0,
        w: 100,
        h: 40,
        sprite: 'outline-blue',
        frame: null,
        config: { top: 10, bottom: 10, left: 10, right: 10 }
      },
      { type: 'Rectangle', size: 1 }
    );
    this.add.existing(b);
    // b.x = 100;
    // b.y = 200;
    console.log(b); // eslint-disable-line
  }

  // update() {}
}
