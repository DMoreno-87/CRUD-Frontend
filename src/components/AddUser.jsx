import React, { useState } from 'react';
import axios from 'axios'; // ✅ Fix import

const AddUser = () => {
  const [form, setForm] = useState({
    userName: '',
    passwordHash: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/auth/signup', form); 
      console.log('Signup successful');
    } catch (error) {
      console.error('Failed to sign up:', error);
    }

    setForm({
      userName: '',
      passwordHash: '',
    });
  };

  return (
    <main>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="userName"
          value={form.userName}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          required
        />
        <label>Password:</label>
        <input
          type="password" 
          name="passwordHash" 
          value={form.passwordHash}
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
