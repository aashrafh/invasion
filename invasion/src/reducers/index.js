import moveObjects from "./moveObjects";
import startGame from "./startGame";
import { MOVE_OBJECTS, START_GAME } from "./../actions/index";

const initialGameState = {
  start: false,
  lives: 3,
  kills: 0,
  currentSaucers: [],
  lastSaucer: new Date()
};
const initialState = {
  angle: 45,
  gameState: initialGameState
};

function reducer(state = initialState, action) {
  if (action.type === MOVE_OBJECTS) return moveObjects(state, action);
  else if (action.type === START_GAME)
    return startGame(state, initialGameState);
  else return state;
}

export default reducer;
