import NinePatch from 'Plugins/phaser-ui/utils/NinePatch';
import NineSlice from 'Plugins/phaser-ui/utils/NineSlice';
import PlainSprite from 'Plugins/phaser-ui/utils/PlainSprite';
import Button from './button';

/**
 * @param {Phaser.Scene} scene the parent scene for this Component
 * @param {x} x cordinate for this Component
 * @param {x} y cordinate for this Component
 * @param {spriteConfig} specifies parameters for sprite creation.
 * @param {args} other arguments
 */
export default function(scene, x, y, spriteConfigs, label, inputArea, effects, debug) {
  const base = [];
  spriteConfigs.forEach(spriteConfig => {
    if (spriteConfig.type && spriteConfig.type.includes('nine')) {
      let sprite;
      if (spriteConfig.type.includes('patch')) {
        sprite = new NinePatch(scene, spriteConfig);
      }
      if (spriteConfig.type.includes('slice')) {
        sprite = new NineSlice(scene, spriteConfig);
      }
      if (spriteConfig.hide) sprite.setAlpha(0);
      base.push(sprite);
    } else {
      base.push(new PlainSprite(scene, spriteConfig));
    }
  });
  const button = new Button(scene, x, y, base, inputArea, effects, debug);
  return button;
}
