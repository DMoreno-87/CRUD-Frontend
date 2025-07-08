import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

// NavBar receives 'user' as a prop to determine what to show
//if user is logged in shows log out button
const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

    
      {user ? (
        
        <>
          <span style={{ marginLeft: "10px" }}>Welcome, {user.username}</span>
          <Link to="/logout" style={{ marginLeft: "10px" }}>Logout</Link>
        </>
      ) : (
        // If the user is NOT logged in show login and signup buttons
        <>
          <Link to="/login" style={{ marginLeft: "10px" }}>Login</Link>
          <Link to="/signup" style={{ marginLeft: "10px" }}>Signup</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;

