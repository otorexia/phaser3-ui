export default class Test extends Phaser.Scene {
  constructor() {
    super({
      key: 'Test'
    });
  }

  create() {
    console.log(this); // eslint-disable-line
    // console.log(this.add.ui); // eslint-disable-line
    // this.add.ui(this, 'ever', 'you', 'say', '!');
  }

  // update() {}
}
