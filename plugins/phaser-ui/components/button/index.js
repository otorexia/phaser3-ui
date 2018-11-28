import { NinePatch } from '@koreez/phaser3-ninepatch';

class Button extends NinePatch {
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

export default function(scene, ninepatch) {
  let button = new Button(scene, ninepatch);
  return button;
}
