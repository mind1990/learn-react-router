import React from 'react';

const User = props => {
  // console.log(props);
  const { user } = props;
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4>{user.name}</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Company</strong>: {user.company.name}
          </li>
          <li className="list-group-item">
            <strong>Phone</strong>: {user.phone}
          </li>
          <li className="list-group-item">
            <strong>Email</strong>: {user.email}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default User;