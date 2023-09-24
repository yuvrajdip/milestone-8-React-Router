import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
  const {name , email , id , phone } = user;

  const navigate = useNavigate();
  
  const userStyle = {
    border:'2px solid yellow',
    padding : '5px',
    borderRadius: '20px'
  }

  const handleShowDetails = (id) => {
    navigate(`/users/${id}`)
  }

  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <Link to={`/users/${id}`}>Show Details</Link>
      <Link to={`/users/${id}`}>
        <button>Click Me</button>
      </Link>
      <button onClick={()=>handleShowDetails(id)}>Show Details</button>
    </div>
  );
};

export default User;