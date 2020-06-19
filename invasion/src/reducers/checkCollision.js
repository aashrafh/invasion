import { checkCollision } from "./../utils/formulas";
const gameHeight = 1200;

const checkCollisions = (bombs, saucers) => {
  const detected = [];
  saucers.forEach(saucer => {
    const time = new Date().getTime() - saucer.createdAt;
    const position = {
      x: saucer.position.x,
      y: saucer.position.y + (time / 4000) * gameHeight
    };
    const a = {
      x1: position.x - 40,
      y1: position.y - 10,
      x2: position.x + 40,
      y2: position.y + 10
    };
    bombs.forEach(bomb => {
      const b = {
        x1: bomb.position.x - 8,
        y1: bomb.position.y - 8,
        x2: bomb.position.x + 8,
        y2: bomb.position.y + 8
      };
      if (checkCollision(a, b)) {
        detected.push({
          bombId: bomb.id,
          saucerId: saucer.id
        });
      }
    });
  });
  return detected;
};

export default checkCollisions;
