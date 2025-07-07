import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({setUser}) =>{
    const navigate = useNavigate();
}

const handleLogout = async () => {
    try {
        await axios.post('/auth/logout', {}, {withCredentials: true});
        setUser(null);
        navigate('/login');
    }
    catch (err) {
        setError('Logout Unsuccessful');
    }
};