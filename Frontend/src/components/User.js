import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './User.css'; // Import external CSS file for styling

const User = () => {
  const user = localStorage.getItem('userName') || 'Guest'; // Fallback for userName

  return (
    <div className="user-container">
      <FaUserCircle className="user-icon" />
      <h1 className="user-name">Hi, {user}</h1>
    </div>
  );
};

export default User;
