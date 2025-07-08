import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import Login from "./components/Login"; // 
import Logout from "./components/Logout"; // 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { API_URL } from "./shared";

const App = () => {
  const [user, setUser] = useState(null); // 
 console.log("Before user--->", user);
  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<AddUser setUser={setUser} />} />
      </Routes>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
