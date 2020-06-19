function startGame(state, initialGameState) {
  return {
    ...state,
    gameState: {
      ...initialGameState,
      start: true
    }
  };
}
export default startGame;
