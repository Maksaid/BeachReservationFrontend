// LoginButton.js
import React from 'react';
import './NavBar.css'

const LoginButton = ({ onLoginClick , isLoggedIn}) => {
    return (
        <div className={`nav-button ${isLoggedIn ? 'out' : 'in'}`} onClick={onLoginClick}>
            👤{isLoggedIn? 'LogOut' : 'LogIn'}
        </div>
    );
};

export default LoginButton;