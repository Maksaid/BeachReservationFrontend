import React from 'react';
import LoginButton from './LoginButton'
import './NavBar.css'
import SignupButton from "./SignupButton";
const NavBar = ({handleLogin, isLoggedIn}) => {
    const handleLoginClick = () => {
        // Implement your login logic here (e.g., redirect to login page or show a login modal)
        console.log('Login button clicked');
        handleLogin(!isLoggedIn)
    };
    const handleSignUpClick = () => {

    }

    return (
        <div className="nav-bar">
            <SignupButton onSignupClick={handleSignUpClick()} isLoggedIn={isLoggedIn} />
            <LoginButton onLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />
        </div>

    );
};

export default NavBar;