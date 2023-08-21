import {useState} from "react";
import axios from "axios";

const CreateReviewInput = ({isLoggedIn, beachId, onDetailsChanged}) => {
    const [inputClicked, setInputClicked] = useState(false);
    const [text, setText] = useState("");
    const [currentRate, setCurrentRate] = useState(10);

    const handleInputClick = () => {
        setInputClicked(true);
    }
    const handleSaveButton = async (e) => {
            e.preventDefault();
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
            } catch
                (error) {
                console.error(error);
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
            <input className="input" onClick={handleInputClick} pattern="\d" type="number" max="10" min="1" step="1" value={currentRate}
                   onChange={(e) => setCurrentRate(e.target.value)}/>
            <br/>
            <label>Review Text</label>
            <textarea className="textarea text" onClick={handleInputClick} value={text} onChange={(e) => setText(e.target.value)}/>
            { inputClicked &&
                <div>
            <button id="save-button" className="button" onClick={handleSaveButton}>Save</button>
            <button id="cancel-button" className="button" onClick={handleCancelButton}>Cancel</button>
                </div>
}
        </div>
    );
}
export default CreateReviewInput;