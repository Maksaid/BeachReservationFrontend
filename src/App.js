import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Bar from "./Components/BeachBar/Bar/Bar";
import BeachDetails from "./Components/BeachPage/BeachDetails";
import NavBarComponent from "./Components/NavigationBar/NavBarComponent";
import './Components/BeachPage/BeachDetails.css'
import LoginForm from './Components/AuthForms/LoginForm'
import SignupForm from './Components/AuthForms/SignupForm'
import './Components/AuthForms/Form.css'
import CreateBeach from "./Components/CreateBeach/CreateBeach";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const [isLoggedIn, setLoggedIn] = useState((localStorage.length === 0))
    const [currentBeachId, setCurrentBeachId] = useState(null)
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isSignupFormVisible, setSignupFormVisible] = useState(false);
    const [isBeachBarToggled, setBeachBarToggled] = useState(true)

    const setNewCurrentBeachId = (beachId) => {
        setCurrentBeachId(beachId);
    }
    const handleLoginClick = () => {
        setIsLoginFormVisible(true); // Show the LoginForm when login button is clicked
    };
    const handleLogoutClick = () => {
        localStorage.clear();
        console.log(localStorage);
        setLoggedIn(false);
    }

    const handleSignupClick = () => {
        setSignupFormVisible(true);
    }
    const toggleBeachBar = () => {
        setBeachBarToggled(!isBeachBarToggled);
    }

    const handleFormClose = () => {
        setIsLoginFormVisible(false);
        setSignupFormVisible(false);
    }

    const handleProfileClick = () => {

    }


    return (
        <Router>
            <div className="app">
                <div style={{height:"fit-content"}}>
                <NavBarComponent handleLogin={setLoggedIn} handleLoginClick={handleLoginClick}
                                 handleSignupClick={handleSignupClick} isLoggedIn={isLoggedIn}
                                 handleProfileClick={handleProfileClick} handleLogoutClick={handleLogoutClick}
                                 toggleBeachBar={toggleBeachBar}
                                 isBeachBarToggled={isBeachBarToggled}/>
                </div>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/">
                                <Bar visible={isBeachBarToggled?"visible":"invisible"} currentBeach={currentBeachId}
                                     handleBeachClick={setNewCurrentBeachId}/>
                            <BeachDetails className="beach-details" beachId={currentBeachId} isLoggedIn={{isLoggedIn}}/>
                        </Route>
                        <Route path="/create">
                            <CreateBeach/>
                        </Route>

                    </Switch>
                </div>
                {isLoginFormVisible && (
                    <div className="blur-background">
                        <LoginForm onClose={handleFormClose} isLoggedIn={setLoggedIn}/>
                    </div>
                )}
                {isSignupFormVisible && (
                    <div className="blur-background">
                        <SignupForm onClose={handleFormClose}/>
                    </div>
                )

                }
                <ToastContainer/>
            </div>

        </Router>


    );
}

export default App;
