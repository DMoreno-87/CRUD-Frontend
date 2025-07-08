import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({setUser}) =>{
    const [error, setError] = useState('');
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

return (
    <div style={{ padding: '20px' }}>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );

export default Logout;
