import { Button } from 'Plugins/phaser-ui'; // eslint-disable-line

export default class Test extends Phaser.Scene {
  constructor() {
    super({
      key: 'Test'
    });
  }

  create() {
    const tt = this.add.sprite(400, 100, 'colored', 'green.png');
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
        sprite: 'colored',
        frame: 'green.png',
        config: { top: 20, bottom: 20, left: 20, right: 20 }
      },
      { type: 'Rectangle', size: 1 },
      {
        tint: false,
        tween: true,
        hover: { color: 0xe7e7e7 },
        down: {
          color: 0xd5d5d5,
          tween: {
            scaleY: 1.1,
            scaleX: 1.1,
            duration: 100,
            ease: 'Elastic',
            yoyo: true,
            easeParams: [1.5, 0.5],
            delay: 100
          },
          frame: 'green_pressed.png'
        }
      },
      true
    );
    this.add.existing(b);
    // b.x = 100;
    // b.y = 200;
    console.log(b); // eslint-disable-line
    b.on('on-hover', () => {
      tt.alpha = 0;
      // console.log('Hello World!');
    });
    b.on('on-down', () => {
      tt.alpha = 0.2;
      // console.log('Hello World!');
    });
    b.on('on-exit', () => {
      tt.alpha = 1;
      // console.log('!!');
    });

    // b.setDisable(true, { tint: 0x959595 });
    // setTimeout(() => {
    //   b.setDisable(false);
    // }, 1000);
  }

  // update() {}
}
