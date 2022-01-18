import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import accounts from './accounts';

export default combineReducers({
  accounts,
  router: routerReducer
});