
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyA_JKLpaCz-SvgavUV8N6KCHepGg8V8EDg",
  authDomain: "myproject-d1513.firebaseapp.com",
  databaseURL: "https://myproject-d1513.firebaseio.com",
  projectId: "myproject-d1513",
  storageBucket: "myproject-d1513.appspot.com",
  messagingSenderId: "1072127009189"
};

export let updateStatus = (data,callback=null) => {
  return dispatch => {

     dispatch(updateMovie(data));
    if (callback) {
      dispatch(callback)
    }
  }
}

export let getMovieList = () => {
  return dispatch => {


    firebase.initializeApp(config);

    firebase.database().ref('/restapi').once('value',(snapshot)=>{
      dispatch(updateMovie(snapshot.val().movieList))
    })
  }
}

export let upsertMovie = (data) => {
  return dispatch => {


  }
}



export let updateMovie = (data) => {
  return {
    type: 'GETMOVIE',
    data
  }
}
