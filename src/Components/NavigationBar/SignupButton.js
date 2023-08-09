// LoginButton.js
import React from 'react';
import './NavBar.css'

const SignupButton = ({ onSignupClick }) => {
    return (
        <button className="button" onClick={onSignupClick}>
            Sign Up
        </button>
    );
};

export default SignupButton;