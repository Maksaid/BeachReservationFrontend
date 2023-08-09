import React from 'react';
import LoginButton from './LoginButton'
import './NavBar.css'
import SignupButton from './SignupButton';
import ProfileButton from './ProfileButton'
const NavBar = ({isLoggedIn, handleLoginClick, handleSignupClick, handleProfileClick}) => {


    return (
        <div className="nav-bar">
            { !isLoggedIn && (
                <>
                    <SignupButton onSignupClick={handleSignupClick}  />
                    <LoginButton onLoginClick={handleLoginClick}  />
                </>
    )}
            { isLoggedIn && (
                <>
                    <ProfileButton onProfileClick={handleProfileClick} />
                </>
            )}
        </div>

    );
};

export default NavBar;