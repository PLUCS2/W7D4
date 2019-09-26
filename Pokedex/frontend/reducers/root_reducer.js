import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import entities from './entities_reducer';

export default combineReducers({
  entities,
  ui: uiReducer
});
