// LoginButton.js
import React from 'react';
import './NavBar.css'

const LogOutButton = ({ onLogoutClick }) => {
    return (
        <button className="button" onClick={onLogoutClick}>
            LogOut
        </button>
    );
};

export default LogOutButton;