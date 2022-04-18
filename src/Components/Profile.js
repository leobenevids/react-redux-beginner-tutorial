import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);

  return (
    <div style={{color: theme}}>
      <h1>Welcome {user.name}!</h1>
      <h2> this is the Profile Page</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Profile;
