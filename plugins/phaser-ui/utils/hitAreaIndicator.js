export default function createIndicator(container, hitArea) {
  const graphics = container.scene.make.graphics();
  graphics.lineStyle(2, 0x00ffff, 1);
  if (hitArea.constructor.name === 'Rectangle') {
    graphics.strokeRect(hitArea.x, hitArea.y, hitArea.width, hitArea.height);
  }
  if (hitArea.constructor.name === 'Circle') {
    graphics.strokeCircle(hitArea.x, hitArea.y, container.input.hitArea.radius);
  }
  graphics.setDepth(1000);

  return graphics;
}
