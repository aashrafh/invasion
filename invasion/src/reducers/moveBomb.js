import { calculateNextPosition } from "./../utils/formulas";

const moveBombs = bombs =>
  bombs
    .filter(
      bomb =>
        bomb.position.y > -800 &&
        bomb.position.x > -500 &&
        bomb.position.x < 500
    )
    .map(bomb => {
      const { x, y } = bomb.position;
      const { angle } = bomb;
      return {
        ...bomb,
        position: calculateNextPosition(x, y, angle, 5)
      };
    });

export default moveBombs;
