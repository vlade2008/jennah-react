import React from 'react';
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {userData} from '../actions/actionCreator';
import _ from 'lodash';

class Single extends React.Component {
  render() {


    const {users} = this.props; //user props all
    const {userID} = this.props.params; // get the paramaters of the ID


    const result = users.filter((obj)=> {
    return obj.id == userID; // if truthy then keep item
  });
    return(
      <div>

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
export default connect(mapStateToProps,mapDispatchToProps)(Single);
