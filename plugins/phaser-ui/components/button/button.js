import createHitArea from 'Plugins/phaser-ui/utils/HitArea';
import createHitAreaIndicator from 'Plugins/phaser-ui/utils/hitAreaIndicator';

let playTweenHover = true;
let playTweenUp = true;
let playTweenDown = true;
let playTweenOut = true;

function hideObj(hide, list) {
  hide.forEach(el => {
    list[el].alpha = 0;
  });
}
function showObj(show, list) {
  show.forEach(el => {
    list[el].alpha = 1;
  });
}

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, childs, inputArea, effects, debug) {
    super(scene, x, y, childs);
    this.bounds = this.getBounds();
    const hitArea = createHitArea(this, inputArea);
    this.setInteractive(hitArea, Phaser.Geom[inputArea.type].Contains);
    if (debug) {
      const graphics = createHitAreaIndicator(this, hitArea);
      this.list.push(graphics);
    }

    if (effects.tint && effects.normal) {
      if (effects.normal.color) {
        childs.forEach(child => {
          if (effects.tint) child.setTint(effects.normal.color);
        });
      } else {
        effects.normal.color = 0xffffff;
      }
    }

    this.isDisabled = false;

    this.on('pointerover', () => {
      if (!this.isDisabled) {
        if (effects.hover) {
          if (effects.tint) {
            childs.forEach(child => {
              if (effects.hover.color) child.setTint(effects.hover.color);
            });
          }

          if (effects.hover.tween && playTweenHover && (effects.frame || effects.tween)) {
            effects.hover.tween.targets = childs;
            effects.hover.tween.onStart = () => {
              playTweenHover = false;
              if (effects.frame && effects.hover.frame) {
                if (effects.hover.frame.hide) {
                  hideObj(effects.hover.frame.hide, this.list);
                }
                if (effects.hover.frame.show) {
                  showObj(effects.hover.frame.show, this.list);
                }
              }
            };
            effects.hover.tween.onComplete = () => {
              playTweenHover = true;
            };
            scene.tweens.add(effects.hover.tween);
          }
        }
        this.emit('on-hover');
      }
    });

    this.on('pointerdown', () => {
      if (!this.isDisabled) {
        if (effects.down) {
          if (effects.tint) {
            childs.forEach(child => {
              if (effects.down.color) child.setTint(effects.down.color);
            });
          }

          if (effects.down.tween && playTweenDown && (effects.frame || effects.tween)) {
            effects.down.tween.targets = childs;
            effects.down.tween.onStart = () => {
              playTweenDown = false;
              if (effects.frame && effects.down.frame) {
                if (effects.down.frame.hide) {
                  hideObj(effects.down.frame.hide, this.list);
                }
                if (effects.down.frame.show) {
                  showObj(effects.down.frame.show, this.list);
                }
              }
            };
            effects.down.tween.onComplete = () => {
              playTweenDown = true;
            };
            scene.tweens.add(effects.down.tween);
          }
        }
        this.emit('on-down');
      }
    });

    this.on('pointerup', () => {
      if (!this.isDisabled) {
        if (effects.up) {
          if (effects.tint) {
            childs.forEach(child => {
              if (effects.up.color) child.setTint(effects.up.color);
            });
          }

          if (effects.up.tween && playTweenUp && (effects.frame || effects.tween)) {
            effects.up.tween.targets = childs;
            effects.up.tween.onStart = () => {
              playTweenUp = false;
              if (effects.frame && effects.up.frame) {
                if (effects.up.frame.hide) {
                  hideObj(effects.up.frame.hide, this.list);
                }
                if (effects.up.frame.show) {
                  showObj(effects.up.frame.show, this.list);
                }
              }
            };
            effects.up.tween.onComplete = () => {
              playTweenUp = true;
            };
            scene.tweens.add(effects.up.tween);
          }
        }
        this.emit('on-up');
      }
    });

    this.on('pointerout', () => {
      if (!this.isDisabled) {
        if (effects.tint) {
          childs.forEach(child => {
            child.clearTint();
          });
        }

        if (effects.out) {
          if (effects.out.tween && playTweenOut && (effects.frame || effects.tween)) {
            effects.out.tween.targets = childs;
            effects.out.tween.onStart = () => {
              playTweenOut = false;
              if (effects.frame && effects.out.frame) {
                if (effects.out.frame.hide) {
                  hideObj(effects.out.frame.hide, this.list);
                }
                if (effects.out.frame.show) {
                  showObj(effects.out.frame.show, this.list);
                }
              }
            };
            effects.out.tween.onComplete = () => {
              playTweenOut = true;
            };
            scene.tweens.add(effects.out.tween);
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
