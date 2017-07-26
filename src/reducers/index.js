import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import countReducer from './countReducer';
import movieReducer from './movieReducer'
const rootReducer = combineReducers({
  routing,
  count:countReducer,
  movie:movieReducer
});

export default rootReducer;
