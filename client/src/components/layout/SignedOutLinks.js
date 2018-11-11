import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = (props) => {
  // console.log("new Props", props.user.email)
  // console.log("new Props isAuthenticated", props.isAuthenticated)
  return (
    <ul className="right">
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinks;
