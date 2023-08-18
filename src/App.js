import './App.css';
import React, { useState } from 'react'
import Bar from "./Components/BeachBar/Bar/Bar";
import BeachDetails from "./Components/BeachPage/BeachDetails";
import NavBar from "./Components/NavigationBar/NavBar";
import './Components/BeachPage/BeachDetails.css'
import LoginForm from './Components/AuthForms/LoginForm'
import SignupForm from './Components/AuthForms/SignupForm'
import './Components/AuthForms/Form.css'

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [currentBeachId, setCurrentBeachId] = useState(null)
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isSignupFormVisible, setSignupFormVisible] = useState(false);

    const setNewCurrentBeachId = (beachId) =>{
        setCurrentBeachId(beachId);
    }
    const handleLoginClick = () => {
        setIsLoginFormVisible(true); // Show the LoginForm when login button is clicked
    };
    const handleLogoutClick = () =>{
        localStorage.clear();
        console.log(localStorage);
        setLoggedIn(false);
    }

    const handleSignupClick = () => {
        setSignupFormVisible(true);
    }

    const handleFormClose = () => {
        setIsLoginFormVisible(false);
        setSignupFormVisible(false);
    }

    const handleProfileClick = () => {

    }


    return (
        <div>
            <NavBar handleLogin={setLoggedIn} handleLoginClick={handleLoginClick} handleSignupClick={handleSignupClick} isLoggedIn={isLoggedIn} handleProfileClick={handleProfileClick} handleLogoutClick={handleLogoutClick}/>
            <div className="app-container">
                <Bar className="bar-container" handleBeachClick={setNewCurrentBeachId}/>
                <BeachDetails className="beach-details" beachId={currentBeachId} isLoggedIn={{isLoggedIn}}/>
            </div>
            {isLoginFormVisible && (
                <div className="blur-background">
                    <LoginForm onClose={handleFormClose} isLoggedIn={setLoggedIn}/>
                </div>
            )}
            {isSignupFormVisible && (
                <div className="blur-background">
                    <SignupForm onClose={handleFormClose} />
                </div>
            )

            }
        </div>

    );
}

export default App;
