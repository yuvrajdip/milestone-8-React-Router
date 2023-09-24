import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {


  const userDetails = useLoaderData();
  console.log(userDetails);
  const {name , address , email , phone , website , username } = userDetails;

  const params = useParams();
  console.log(`params`, params);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/aboutus');
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Name : {name}</p>
      <p>username : {username}</p>
      <p>Address : {address.street} , {address.city}</p>
      <p>Phone : {phone}</p>
      <p>email : {email}</p>
      <p>Website : {website}</p>

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;