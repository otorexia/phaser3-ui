import createHitArea from 'Plugins/phaser-ui/utils/HitArea';
import createHitAreaIndicator from 'Plugins/phaser-ui/utils/hitAreaIndicator';

let playTween = true;

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, childs, configs) {
    super(scene, x, y, childs);
    this.bounds = this.getBounds();
    const hitArea = createHitArea(this, configs[0]);
    // console.log(configs);
    this.setInteractive(hitArea, Phaser.Geom[configs[0].type].Contains);
    //  Just to display the hit area, not actually needed to work
    configs[2] = !configs[2];
    if (configs[2]) {
      const graphics = createHitAreaIndicator(this, hitArea);
      this.list.push(graphics);
    }

    if (configs[1].tint && configs[1].normal) {
      if (configs[1].normal.color) {
        childs.forEach(child => {
          if (configs[1].tint) child.setTint(configs[1].normal.color);
        });
      } else {
        configs[1].normal.color = 0xffffff;
      }
    }

    this.isDisabled = false;

    this.on('pointerover', () => {
      if (!this.isDisabled) {
        if (configs[1].hover) {
          if (configs[1].tint) {
            childs.forEach(child => {
              if (configs[1].hover.color) child.setTint(configs[1].hover.color);
            });
          }
          if (configs[1].tween && configs[1].hover.tween) {
            configs[1].hover.tween.targets = childs;
            scene.tweens.add(configs[1].hover.tween);
          }
        }
        this.emit('on-hover');
      }
    });

    this.on('pointerdown', () => {
      if (!this.isDisabled) {
        if (configs[1].down) {
          if (configs[1].tint) {
            childs.forEach(child => {
              if (configs[1].down.color) child.setTint(configs[1].down.color);
            });
          }

          if (configs[1].tween && configs[1].down.tween && playTween) {
            configs[1].down.tween.targets = childs;
            configs[1].down.tween.onStart = () => {
              playTween = false;
              if (configs[1].down.frame) {
                // this.list[0].setFrame(configs[1].down.frame);
              }
            };
            configs[1].down.tween.onComplete = () => {
              // this.list[0].setFrame('green.png');
              playTween = true;
            };
            scene.tweens.add(configs[1].down.tween);
          }
        }
        this.emit('on-down');
      }
    });

    this.on('pointerout', () => {
      if (!this.isDisabled) {
        childs.forEach(child => {
          child.clearTint();
        });
        if (configs[1].exit) {
          if (configs[1].tween && configs[1].exit.tween) {
            configs[1].exit.tween.targets = childs;
            scene.tweens.add(configs[1].exit.tween);
          }
        }
        this.emit('on-exit');
      }
    });
  }

  setDisable(val, effect) {
    this.isDisabled = val;
    this.list.forEach(child => {
      if (child.constructor.name !== 'Graphics') {
        if (val) {
          if (effect.tint) {
            child.setTint(effect.tint);
          }
        } else {
          child.clearTint();
        }
      }
    });
  }
}
