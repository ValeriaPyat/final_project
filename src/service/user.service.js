import {userConstants} from "../constants";

export const userService = {
  register,
  login,
  logout
};

function register(user) {
  let username = user.username;

  let item = localStorage.getItem(username);
  if (item !== null) {
    return Promise.reject(
        'User with username: ' + username + " already exists");
  }

  localStorage.setItem(username, JSON.stringify(user));

  return Promise.resolve(user);
}

function login(username, password) {
  let item = localStorage.getItem(username);
  if (item === null) {
    return Promise.reject('User with username: ' + username + " not found");
  }

  let user = JSON.parse(item);
  if (user.password !== password) {
    return Promise.reject('Wrong password');
  }
  localStorage.removeItem(userConstants.LOGGED_IN_USER);
  localStorage.setItem(userConstants.LOGGED_IN_USER, JSON.stringify(user));

  return Promise.resolve(user);
}

function logout() {
  localStorage.removeItem(userConstants.LOGGED_IN_USER);
}