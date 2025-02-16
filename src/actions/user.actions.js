import {userConstants} from "../constants";
import {userService} from "../service";
import {alertActions} from "./";
import {history} from "../helpers";

export const userActions = {
  register,
  login,
  logout
};

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
    .then(
        user => {
          dispatch(success(user));
          history.push("/login");
          dispatch(alertActions.success("Registration successful"));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
    );
  };

  function request(user) {
    return {
      type: userConstants.REGISTER_REQUEST,
      user
    }
  }

  function failure(error) {
    return {
      type: userConstants.REGISTER_FAILURE,
      error
    }
  }

  function success(user) {
    return {
      type: userConstants.REGISTER_SUCCESS,
      user
    }
  }
}

function login(username, password) {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username, password)
    .then(
        user => {
          dispatch(success(user));
          history.push("/profile");
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
    );
  };

  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user}
  }

  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user}
  }

  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error}
  }
}

function logout() {
  userService.logout();
  return {type: userConstants.LOGOUT};
}