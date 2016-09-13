import React, {PropTypes} from 'react';
// import { Link } from 'react-router';
import {routerActions} from 'react-router-redux';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';

 class  User  extends React.Component{

   onClick = (id) =>{
     return () =>{
       this.props.routerActions.push("/user/" + id);
     }
   }

  render() {
    const {users,i} = this.props;
    return (
      <li className="list-group list-group-item">
        {/* <Link to={`/user/${users.id}`}>{users.name}</Link> */}
        <Button onClick={this.onClick(users.id)}>{users.name}</Button>
      </li>

    )
  }
};
export default User;
