import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";
import Logout from "./Logout";

// NavBar receives 'user' as a prop to determine what to show
//if user is logged in shows log out button
const NavBar = ({ user, setUser }) => {
  console.log("user--->", user);
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      {user ? (
        <>
          <span style={{ marginLeft: "10px" }}>
            {" "}
            Succesfully logged in! {user.username}
          </span>
          <Logout user={user} setUser={setUser}/>
        </>
      ) : (
        // If the user is NOT logged in show login and signup buttons
        <>
          <Link to="/login" style={{ marginLeft: "10px" }}>
            Login
          </Link>
          <Link to="/signup" style={{ marginLeft: "10px" }}>
            Signup
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
