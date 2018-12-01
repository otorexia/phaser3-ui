import { NineSlice } from 'phaser3-nineslice';

export default class NineSliceSprite extends NineSlice {
  constructor(scene, nineslice) {
    super(scene, nineslice.sliceConfig, nineslice.positionConfig);
    this.setOrigin(0.5);
  }
}
