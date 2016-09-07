import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap'
import Progress from "react-progress-2";
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {userData} from '../actions/actionCreator';
import User from './User';

require('react-progress-2/main.css');

 class UserGrid extends React.Component{

  constructor(props){
      super(props);
      this.props.get_user();
    }

      componentDidMount(){

          }

  render() {

    const users = this.props.users;

    return (
      <div className="UserGrid">
        {users.map((user,i)=>
          <User {...this.props} users={user} key={i} />
        )}

      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      users:state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_user:bindActionCreators(userData,dispatch),
        routerActions: bindActionCreators(routerActions, dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserGrid);
