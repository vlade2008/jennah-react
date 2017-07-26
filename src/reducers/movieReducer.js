import update from 'react-addons-update';
import data from '../data/data.json'
const INITIAL_STATE = {
    data
};

export default function movieReducer(state = INITIAL_STATE, action = {}){
  switch (action.type) {
    case 'CHANGESTATUS':
    return update(state,{
        $set:action.data
    });
    default:
      return state;
  }
}
