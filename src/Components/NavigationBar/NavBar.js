import React from 'react';
import LoginButton from './LoginButton'
import './NavBar.css'
import SignupButton from './SignupButton';
import ProfileButton from './ProfileButton'
import LogOutButton from "./LogOutButton";
const NavBar = ({ isLoggedIn,handleLoginClick, handleSignupClick, handleProfileClick,handleLogoutClick}) => {

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
                    <LogOutButton onLogoutClick={handleLogoutClick} />
                </>
            )}
        </div>

    );
};

export default NavBar;