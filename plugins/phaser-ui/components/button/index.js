import NineSprite from 'Plugins/phaser-ui/utils/NineSprite';
import PlainSprite from 'Plugins/phaser-ui/utils/PlainSprite';
import Button from './button';

export default function(scene, x, y, spriteConfig, ...args) {
  let base;
  if (spriteConfig.ninesprite) {
    base = new NineSprite(scene, spriteConfig);
  } else {
    base = new PlainSprite(scene, spriteConfig);
  }
  const button = new Button(scene, x, y, [base], ...args);
  return button;
}
