import {userConstants} from "../constants";

let user = JSON.parse(localStorage.getItem(userConstants.LOGGED_IN_USER));
const initialState = user ? {user: user} : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        user: action.user
      });
    case userConstants.LOGIN_REQUEST:
      return Object.assign({}, state, {
        loggingIn: true,
        user: action.user
      });
    case userConstants.LOGIN_FAILURE: {
      return {};
    }
    default: {
      return state;
    }
  }
}