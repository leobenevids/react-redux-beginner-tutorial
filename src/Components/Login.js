import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../Features/User";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Leo", age: 23, email: "leo@email.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
