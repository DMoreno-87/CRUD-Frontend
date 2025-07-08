import React, { useState } from "react";
import axios from "axios"; // ✅ Fix import

const AddUser = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/auth/signup", form);
      console.log("Signup successful");
    } catch (error) {
      console.error("Failed to sign up:", error);
    }

    setForm({
      username: "",
      password: "",
    });
  };

  return (
    <main>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default AddUser;
