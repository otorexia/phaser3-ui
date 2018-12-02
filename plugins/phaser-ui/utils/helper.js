import * as components from '../components';

export function uiFactory(scene, type, ...args) {
  type = type.charAt(0).toUpperCase() + type.slice(1);
  let obj = null;
  if (components[type]) {
    obj = components[type](scene, ...args);
    scene.add.existing(obj);
  }
  return obj;
}

export function uiCreator(scene, type, ...args) {
  type = type.charAt(0).toUpperCase() + type.slice(1);
  let obj = null;
  if (components[type]) {
    obj = components[type](scene, ...args);
  }
  return obj;
}
