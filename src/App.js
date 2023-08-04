        import './App.css';
        import React, { useState } from 'react'
        import Bar from "./Components/BeachBar/Bar";
        import BeachDetails from "./Components/BeachPage/BeachDetails";
        import NavBar from "./Components/NavigationBar/NavBar";
        import './Components/BeachPage/BeachDetails.css'

        function App() {

            const [currentBeachId, setCurrentBeachId] = useState(null)

            const setNewCurrentBeachId = (beachId) =>{
                setCurrentBeachId(beachId);
            }
            return (
                <div>
                    <NavBar/>
                    <div className="app-container">
                        <Bar className="bar-container" handleBeachClick={setNewCurrentBeachId}/>
                        <BeachDetails className="beach-details" beachId={currentBeachId} />
                    </div>
                </div>

            );
        }

        export default App;
