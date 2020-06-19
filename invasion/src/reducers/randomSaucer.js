import {
  waitInterval,
  saucersPositions,
  initialY,
  maxSaucers
} from "./../utils/constants";
function randomSaucer(state) {
  if (!state.gameState.start) return state;

  const { lastSaucer, currentSaucers } = state.gameState,
    time = new Date().getTime();
  const newSaucer =
    time - lastSaucer.getTime() > waitInterval &&
    currentSaucers.length < maxSaucers;
  if (!newSaucer) return state;

  const id = new Date().getTime();
  const randomSaucerPosition = Math.floor(Math.random() * maxSaucers);
  const saucerPosition = saucersPositions[randomSaucerPosition];
  const saucer = {
    position: {
      x: saucerPosition,
      y: initialY
    },
    createdAt: new Date().getTime,
    id
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      currentSaucers: [...currentSaucers, saucer],
      lastSaucer: new Date()
    }
  };
}
export default randomSaucer;
