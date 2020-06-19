import { calculateAngle } from "./../utils/formulas";

function shoot(state, action) {
  if (!state.gameState.start) return state;
  const { bombs } = state.gameState;
  if (bombs.length === 2) return state;

  const { x, y } = action.mousePosition;
  const angle = calculateAngle(0, 0, x, y);
  const id = new Date().getTime();
  const bomb = {
    position: { x: 0, y: 0 },
    angle,
    id
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      bombs: [...bombs, bomb]
    }
  };
}

export default shoot;
