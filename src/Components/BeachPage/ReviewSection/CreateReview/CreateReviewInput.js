import {useState} from "react";
import axios from "axios";
import "./CreateReview.css"
import {toast} from "react-toastify";

const CreateReviewInput = ({isLoggedIn, beachId, onDetailsChanged}) => {
    const [inputClicked, setInputClicked] = useState(false);
    const [text, setText] = useState("");
    const [currentRate, setCurrentRate] = useState(10)
    const handleInputClick = () => {
        setInputClicked(true);
    }

        const setErrorMessage = (errorMessage) =>{
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3001,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

    }
    const handleSaveButton = async (e) => {
            e.preventDefault();
            if (currentRate > 10 || currentRate < 1) {
                setErrorMessage("Rate must be from 1 to 10");
            } else if (text === "") {
                setErrorMessage("review must not be empty")
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
                    toast.success('Review added!', {
                        position: "top-right",
                        autoClose: 3001,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } catch
                    (error) {
                    console.error(error);
                    error.response.status === 401 ? setErrorMessage("Login please, your session is expired") : setErrorMessage("Something gone wrong");
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
                </div>
            }
        </div>
    );
}
export default CreateReviewInput;