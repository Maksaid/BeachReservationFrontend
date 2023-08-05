// LoginButton.js
import React from 'react';
import './NavBar.css'

const SignupButton = ({ onSignupClick , isLoggedIn}) => {
    return (
        <div className={`nav-button ${isLoggedIn ? 'invisible' : 'in'}`} onClick={onSignupClick}>
            👤{isLoggedIn? '' : 'Sign Up'}
        </div>
    );
};

export default SignupButton;