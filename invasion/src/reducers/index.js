import moveObjects from "./moveObjects";
import { MOVE_OBJECTS } from "./../actions/index";
import { act } from "react-dom/test-utils";
const initialState = {
  angle: 45
};

function reducer(state = initialState, action) {
  if (action.type === MOVE_OBJECTS) return moveObjects(state, action);
  else return state;
}

export default reducer;
