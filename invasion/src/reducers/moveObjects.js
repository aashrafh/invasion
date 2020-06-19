import { calculateAngle } from "./../utils/formulas";
import randomSaucer from "./randomSaucer";
function moveObjects(state, action) {
  const mousePosition = action.mousePosition || { x: 0, y: 0 };
  const { x, y } = mousePosition,
    angle = calculateAngle(0, 0, x, y);
  const newState = randomSaucer(state);
  return {
    ...newState,
    angle
  };
}
export default moveObjects;
