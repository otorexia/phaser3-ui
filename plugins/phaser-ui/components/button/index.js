import NinePatch from 'Plugins/phaser-ui/utils/NinePatch';
// import NineSlice from 'Plugins/phaser-ui/utils/NineSlice';
import PlainSprite from 'Plugins/phaser-ui/utils/PlainSprite';
import Label from '../Label';
import Button from './button';

/**
 * @param {Phaser.Scene} scene the parent scene for this Component
 * @param {x} x cordinate for this Component
 * @param {x} y cordinate for this Component
 * @param {spriteConfig} specifies parameters for sprite creation.
 * @param {args} other arguments
 */
export default function(scene, ...args) {
  const x = args[0];
  const y = args[1];
  const spriteConfigs = args[2];
  const label = args[3]; // eslint-disable-line
  const inputArea = args[4];
  const effects = args[5];
  const debug = args[6];
  const base = [];
  spriteConfigs.forEach(spriteConfig => {
    if (spriteConfig.type && spriteConfig.type.includes('nine')) {
      let sprite;
      if (spriteConfig.type.includes('patch')) {
        sprite = new NinePatch(scene, spriteConfig);
      }
      if (spriteConfig.type.includes('slice')) {
        console.warn('nineslice-plugin is disabled at the moment'); // eslint-disable-line
        // sprite = new NineSlice(scene, spriteConfig);
      }
      if (spriteConfig.hide) sprite.setAlpha(0);
      base.push(sprite);
    } else {
      base.push(new PlainSprite(scene, spriteConfig));
    }
  });
  let labelObj = null;
  if (label) {
    labelObj = new Label(
      scene,
      label.type,
      label.dynamic,
      label.x,
      label.y,
      label.text,
      label.font,
      label.size,
      label.align
    );
    labelObj.setOrigin(0.5);
    base.push(labelObj);
  }
  const button = new Button(scene, x, y, base, inputArea, effects, debug);
  button.label = labelObj;
  return button;
}
