export default function createHitArea(container, config) {
  let hitArea;
  if (config.type.toLowerCase() === 'rectangle') {
    hitArea = new Phaser.Geom.Rectangle(
      -container.bounds.width / 2,
      -container.bounds.height / 2,
      container.bounds.width * config.size,
      container.bounds.height * config.size
    );
  }
  if (config.type.toLowerCase() === 'circle') {
    config.size -= config.size * 0.5; // eslint-disable-line
    hitArea = new Phaser.Geom.Circle(0, 0, container.bounds.width * config.size);
  }
  return hitArea;
}
