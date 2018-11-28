import { Button } from 'Plugins/phaser-ui'; // eslint-disable-line

export default class Test extends Phaser.Scene {
  constructor() {
    super({
      key: 'Test'
    });
  }

  create() {
    // 3(+1) different way to do it
    let b = this.make.ui(this, 'Button', {
      // let b = this.ui.make.Button(this, {
      // let b = new Button(this, {
      x: 0,
      y: 0,
      w: 100,
      h: 40,
      sprite: 'outline-blue',
      frame: null,
      config: {
        top: 10, // Amount of pixels for top
        bottom: 10, // Amount of pixels for bottom
        left: 10, // Amount of pixels for left
        right: 10 // Amount of pixels for right
      }
    });
    this.add.existing(b);
    b.x = 100;
    b.y = 200;
    console.log(b); // eslint-disable-line
  }

  // update() {}
}
