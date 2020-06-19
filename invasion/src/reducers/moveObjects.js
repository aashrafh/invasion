import { calculateAngle } from "./../utils/formulas";
import randomSaucer from "./randomSaucer";
import moveBombs from "./moveBomb";
function moveObjects(state, action) {
  if (!state.gameState.start) return state;

  let bombs = moveBombs(state.gameState.bombs);
  const mousePosition = action.mousePosition || { x: 0, y: 0 };
  const newState = randomSaucer(state);

  const time = new Date().getTime();
  const currentSaucers = newState.gameState.currentSaucers.filter(
    saucer => time - saucer.createdAt < 4000
  );

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      // currentSaucers: currentSaucers,
      bombs
    },
    angle
  };
}
export default moveObjects;
