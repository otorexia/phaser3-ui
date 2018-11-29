export default class PlainSprite extends Phaser.GameObjects.Sprite {
  constructor(scene, spriteConfig) {
    super(scene, spriteConfig.x, spriteConfig.y, spriteConfig.sprite, spriteConfig.frame);
    this.displayWidth = spriteConfig.w;
    this.displayHeight = spriteConfig.h;
  }
}
