import DynamicBitmapText from './dynamicBitmapText';
import BitmapText from './bitmapText';
import PlainText from './plainText';

/**
 * @param {Phaser.Scene} scene the parent scene for this Component
 * @param {x} x cordinate for this Component
 * @param {x} y cordinate for this Component
 * @param {args} other arguments
 */
export default function(scene, ...args) {
  const type = args[0];
  const dynamic = args[1];
  const x = args[2];
  const y = args[3];
  const text = args[4];
  const font = args[5];
  const size = args[6];
  const align = args[7];
  let label = null;
  if (type === 'bitmaptext') {
    if (dynamic) {
      label = new DynamicBitmapText(scene, x, y, font, text, size, align);
    } else {
      label = new BitmapText(scene, x, y, font, text, size, align);
    }
  }
  if (type === 'text') {
    label = new PlainText(scene, x, y, text, font);
  }

  return label;
}
