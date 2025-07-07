import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) =>{
    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', {
        username,
        password,
      }, { withCredentials: true });

      // get request 
      const me = await axios.get('/auth/me', { withCredentials: true });
      setUser(me.data);
      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
    }
  };