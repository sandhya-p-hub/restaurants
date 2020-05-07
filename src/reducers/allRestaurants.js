import * as Constants from "../actions/constants";

export default function(state = {restaurants:[]}, action = {restaurants:[]}) {
  switch (action.type) {
    case Constants.FETCH_RESTAURANTS:
      return action.data;

    default:
      return state;
  }
}
