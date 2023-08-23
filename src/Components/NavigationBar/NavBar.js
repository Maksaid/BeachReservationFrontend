import React from 'react';
import LoginButton from './LoginButton'
import './NavBar.css'
import SignupButton from './SignupButton';
import ProfileButton from './ProfileButton'
import LogOutButton from "./LogOutButton";
import { Link } from 'react-router-dom'
const NavBar = ({ isLoggedIn,handleLoginClick, handleSignupClick, handleProfileClick,handleLogoutClick}) => {

    return (
        <div className="nav-bar">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="button">
                    Home
                </div>
            </Link>
            <Link to="/create" style={{ textDecoration: 'none' }}>
                <div className="button">
                    Create Beach
                </div>
            </Link>
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