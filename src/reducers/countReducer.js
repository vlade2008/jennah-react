import update from 'react-addons-update';

const INITIAL_STATE = {
    count: []
};

export default function countReducer(state = INITIAL_STATE, action = {}){
  switch (action.type) {
    case 'VOWELCOUNT':
       return update(state,{
           count:{
               $set:action.data
           }
       });
    default:
      return state;
  }
}
