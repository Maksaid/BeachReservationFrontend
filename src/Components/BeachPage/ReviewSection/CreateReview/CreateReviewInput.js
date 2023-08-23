import {useState} from "react";
import axios from "axios";
import "./CreateReview.css"

const CreateReviewInput = ({isLoggedIn, beachId, onDetailsChanged}) => {
    const [inputClicked, setInputClicked] = useState(false);
    const [text, setText] = useState("");
    const [currentRate, setCurrentRate] = useState(10)
    const [successMessage, setSuccessMessage] = useState("");
    const [errorStatus, setErrorStatus] = useState(false);
    const handleInputClick = () => {
        setInputClicked(true);
    }
    const handleSaveButton = async (e) => {
            e.preventDefault();
            if (currentRate > 10 || currentRate < 1) {
                setSuccessMessage("Rate must be from 1 to 10");
                setErrorStatus(true);
            } else if (text === "") {
                setSuccessMessage("review must not be empty")
                setErrorStatus(true);
            } else
                try {
                    await axios.post('https://localhost:7034/api/Review/add-review', {
                        BeachId: beachId,
                        Score: currentRate,
                        Text: text
                    }, {
                        headers:
                            {
                                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                            }
                    });
                    setCurrentRate(1);
                    setText("");
                    onDetailsChanged();
                    setErrorStatus(false);
                    setSuccessMessage("Success! Review added!")
                } catch
                    (error) {
                    console.error(error);
                    setErrorStatus(true);
                    error.response.status === 401 ? setSuccessMessage("Login please, your session is expired") : setSuccessMessage("Something gone wrong");
                }
        }
    ;
    const handleCancelButton = () => {
        setText("")
        setCurrentRate(0)
        setInputClicked(false)
    }


    return (isLoggedIn &&
        <div className="input-container">
            <label>Score:</label>
            <input className="input" onClick={handleInputClick} pattern="\d" type="number" max="10" min="1" step="1"
                   value={currentRate}
                   onChange={(e) => setCurrentRate(e.target.value)}/>
            <br/>
            <label>Review Text</label>
            <textarea className="textarea text" onClick={handleInputClick} value={text}
                      onChange={(e) => setText(e.target.value)}/>
            {inputClicked &&
                <div>
                    <button id="save-button" className="button" onClick={handleSaveButton}>Save</button>
                    <button id="cancel-button" className="button" onClick={handleCancelButton}>Cancel</button>
                    <div className={"notification " + (!errorStatus ? "green" : "red")}>{successMessage}</div>
                </div>
            }
        </div>
    );
}
export default CreateReviewInput;