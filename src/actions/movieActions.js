export let updateStatus = (data,callback=null) => {
  return dispatch => {

     dispatch(updateMovie(data));
    if (callback) {
      dispatch(callback)
    }
  }
}



export let updateMovie = (data) => {
  return {
    type: 'CHANGESTATUS',
    data
  }
}
