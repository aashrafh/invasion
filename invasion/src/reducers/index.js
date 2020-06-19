import moveObjects from "./moveObjects";
import startGame from "./startGame";
import shoot from "./shoot";
import { MOVE_OBJECTS, START_GAME, SHOOT } from "./../actions/index";
import { act } from "react-dom/test-utils";

const initialGameState = {
  start: false,
  lives: 3,
  kills: 0,
  currentSaucers: [],
  lastSaucer: new Date(),
  bombs: []
};
const initialState = {
  angle: 45,
  gameState: initialGameState
};

function reducer(state = initialState, action) {
  if (action.type === MOVE_OBJECTS) return moveObjects(state, action);
  else if (action.type === START_GAME)
    return startGame(state, initialGameState);
  else if (action.type === SHOOT) return shoot(state, action);
  else return state;
}

export default reducer;
