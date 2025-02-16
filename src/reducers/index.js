import {combineReducers} from 'redux';

import {registration} from './registration.reducer';
import {authentication} from "./authentication.reducer";
import {alert} from "./alert.reducer";

const rootReducer = combineReducers({
  alert,
  registration,
  authentication
});

export default rootReducer;