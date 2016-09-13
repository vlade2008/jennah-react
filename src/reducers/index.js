import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import post from './post'

const rootReducer = combineReducers({
  routing,
  user,
  post
});

export default rootReducer;
