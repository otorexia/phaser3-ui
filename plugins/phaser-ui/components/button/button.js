import createHitArea from 'Plugins/phaser-ui/utils/HitArea';
import createHitAreaIndicator from 'Plugins/phaser-ui/utils/hitAreaIndicator';

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, childs, configs) {
    super(scene, x, y, childs);
    this.bounds = this.getBounds();
    const hitArea = createHitArea(this, configs[0]);
    // console.log(hitArea);
    this.setInteractive(hitArea, Phaser.Geom[configs[0].type].Contains);
    //  Just to display the hit area, not actually needed to work
    const graphics = createHitAreaIndicator(this, hitArea);
    this.list.push(graphics);

    this.on('pointerover', () => {
      childs.forEach(child => {
        child.setTint(0x44ff44);
      });
    });

    this.on('pointerout', () => {
      childs.forEach(child => {
        child.clearTint();
      });
    });
  }
}
