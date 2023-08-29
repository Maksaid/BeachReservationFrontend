import {useState} from "react";
import axios from "axios";
import "./CreateReview.css"
import {toast} from "react-toastify";
import {Rating} from "@mui/material";
import Button from "react-bootstrap/Button";

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
            <Rating size="large" value={5} precision={0.5} value={currentRate/2}
                    onChange={(e, newValue) => {
                        setCurrentRate(newValue*2);
                    }}/>
            <br/>
            <label>Review Text</label>
            <textarea className="textarea text" onClick={handleInputClick} value={text}
                      onChange={(e) => setText(e.target.value)}/>
            {inputClicked &&
                <div>
                    <Button id="save-button" className="m-1" variant="light" onClick={handleSaveButton}>Save</Button>
                    <Button id="cancel-button" className="m-1" variant="light" onClick={handleCancelButton}>Cancel</Button>
                </div>
            }
        </div>
    );
}
export default CreateReviewInput;