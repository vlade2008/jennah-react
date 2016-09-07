import React, {PropTypes} from 'react';

const User = React.createClass({
  render() {
    const {users,i} = this.props;
    return (
      <li className="list-group list-group-item">
        <a href="">{users.name}</a>
      </li>
    )
  }
});

export default User
