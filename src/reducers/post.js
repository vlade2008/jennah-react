function post(state = [], action){
  switch (action.type) {
    case 'POST_LIST':
      return action.data;
    default:
      return state;
  }
}

export default post;
