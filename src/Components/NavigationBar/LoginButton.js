// LoginButton.js
import React from 'react';
import './NavBar.css'

const LoginButton = ({ onLoginClick }) => {
    return (
        <button className="button" onClick={onLoginClick}>
            Log In
        </button>
    );
};

export default LoginButton;