import { calculateAngle } from "./../utils/formulas";
import randomSaucer from "./randomSaucer";
import moveBombs from "./moveBomb";
import checkCollisions from "./checkCollision";
function moveObjects(state, action) {
  if (!state.gameState.start) return state;

  let bombs = moveBombs(state.gameState.bombs);
  const mousePosition = action.mousePosition || { x: 0, y: 0 };
  const newState = randomSaucer(state);

  const time = new Date().getTime();
  let currentSaucers = newState.gameState.currentSaucers.filter(
    saucer => time - saucer.createdAt < 4000
  );

  const penalty =
    currentSaucers.length < newState.gameState.currentSaucers.length;
  let lives = state.gameState.lives;
  if (penalty) lives--;

  const start = lives > 0;
  if (!start) {
    lives = 3;
    bombs = [];
    currentSaucers = [];
  }

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  const detected = checkCollisions(bombs, currentSaucers);
  const detectedBombs = detected.map(obj => obj.bombId);
  const detectedSaucers = detected.map(obj => obj.saucerId);
  currentSaucers = currentSaucers.filter(saucer =>
    detectedSaucers.indexOf(saucer.id)
  );
  bombs = bombs.filter(bomb => detectedBombs.indexOf(bomb.id));
  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      currentSaucers: [...currentSaucers],
      bombs: [...bombs]
    },
    angle
  };
}
export default moveObjects;
