import update from 'react-addons-update';
import data from '../data/data.json'
const INITIAL_STATE = {
    movieList:[]
};

export default function movieReducer(state = INITIAL_STATE, action = {}){
  switch (action.type) {
    case 'GETMOVIE':
      return update(state,{
                movieList:{
                    $set:action.data
                }
              })
    default:
      return state;
  }
}
