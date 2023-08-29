import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'
import  Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = ({ isLoggedIn,handleLoginClick, handleSignupClick, handleProfileClick,handleLogoutClick, toggleBeachBar, isBeachBarToggled}) => {

    return (
        <div className="nav-bar">
            <div style={{display:"flex",justifyContent:"left", flexGrow:1}}>
                <Button className="m-1" style={{justifySelf:"left"}} variant="light" size="lg" onClick={toggleBeachBar}>
                    {isBeachBarToggled?"<-":"->"}
                </Button>
            </div>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button className="m-1" variant="light" size="lg">
                    Home
                </Button>
            </Link>
            <Link to="/create" style={{ textDecoration: 'none' }}>
                <Button variant="light" className="m-1" size="lg">
                    Create Beach
                </Button>
            </Link>
            { !isLoggedIn && (
                <>
                    <Button variant="light" size="lg" className="m-1" onClick={handleSignupClick} >Sign up</Button>{' '}
                    <Button variant="light" size="lg"  className="m-1" onClick={handleLoginClick}  >Log in</Button>{' '}
                </>
    )}
            { isLoggedIn && (
                <>
                    <Button variant="danger" size="lg"  className="m-1" onClick={handleLogoutClick} >Log out</Button>
                </>
            )}
        </div>

    );
};

export default NavBar;