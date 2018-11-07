import React from 'react';
import User from './User';

const Users = (props) => {
  // console.log(props);
  const { users } = props;
  const userList = users.map(user => <User key={user.id} user={user} />)
  return (
    <div>
      <h1 className="mb-4">Users</h1>
      {userList}
    </div>
  )
}

export default Users;