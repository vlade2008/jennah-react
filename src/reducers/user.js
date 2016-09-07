function user(state = [], action){
  switch (action.type) {
    case 'USER_LIST':
      return action.data;
    default:
      return state;
  }
}

export default user;
