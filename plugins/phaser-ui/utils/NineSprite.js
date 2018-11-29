import { NinePatch } from '@koreez/phaser3-ninepatch';

export default class NineSprite extends NinePatch {
  constructor(scene, ninepatch) {
    super(
      scene,
      ninepatch.x,
      ninepatch.y,
      ninepatch.w,
      ninepatch.h,
      ninepatch.sprite,
      ninepatch.frame,
      ninepatch.config
    );
  }
}
