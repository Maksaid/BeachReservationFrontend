import React from 'react';
import LoginButton from './LoginButton'
import './NavBar.css'
const NavBar = () => {
    const handleLoginClick = () => {
        // Implement your login logic here (e.g., redirect to login page or show a login modal)
        console.log('Login button clicked');
    };

    return (
        <div className="nav-bar">
            <LoginButton onLoginClick={handleLoginClick} />
        </div>

    );
};

export default NavBar;