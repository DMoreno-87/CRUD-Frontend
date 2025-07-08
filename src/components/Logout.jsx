import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({setUser}) =>{
    const [error, setError] = useState('');
    const navigate = useNavigate();


const handleLogout = async () => {
    try {
        await axios.post('http://localhost:8080/auth/logout', {}, {withCredentials: true});
        console.log("succesfully log outt");
         setUser(null);
        navigate('/login');
    }
    catch (err) {
        console.error("error:", err);
        setError('Logout Unsuccessful');
    }
}

return (
    <div style={{ padding: '60px' }}>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );

};

export default Logout;
