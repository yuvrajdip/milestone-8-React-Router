import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      <h2>Users length : {users.length}</h2>
      
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)', gap:'20px'}}>
        {
          users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>

    </div>
  );
};

export default Users;