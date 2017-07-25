import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import countReducer from './countReducer';
const rootReducer = combineReducers({
  routing,
  count:countReducer
});

export default rootReducer;
