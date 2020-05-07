import * as Constants from "./constants";

export function fetchRestaurant(city) {
  return dispatch => {
    return fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
      .then(res => res.json())
      .then(res => dispatch({ type: Constants.FETCH_RESTAURANTS, data: res }));
  }
}
