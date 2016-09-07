import axios from 'axios';

  export let userData=()=>{
    return dispatch=>{
      axios.get('http://jsonplaceholder.typicode.com/users')
      .then((result)=>{
        dispatch({
          type:'USER_LIST',
          data:result.data
        });
      })
      .catch((error)=>{
      });
    }

  }

  export let postData=()=>{
    return dispatch=>{
      axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((result)=>{
        dispatch({
          type:'POST_LIST',
          data:result.data
        })
      })
      .catch((error)=>{
      });
    }
  }
