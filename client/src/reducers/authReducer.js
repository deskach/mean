import { FETCH_USER } from "../actions/types";

export default (state = null, action = null) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
