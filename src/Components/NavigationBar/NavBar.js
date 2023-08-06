import React from 'react';
import LoginButton from './LoginButton'
import './NavBar.css'
import SignupButton from "./SignupButton";
const NavBar = ({handleLogin, isLoggedIn, handleLoginClick, handleSignupClick}) => {


    return (
        <div className="nav-bar">
            <SignupButton onSignupClick={handleSignupClick} isLoggedIn={isLoggedIn} />
            <LoginButton onLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />
        </div>

    );
};

export default NavBar;