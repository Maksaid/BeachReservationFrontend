import "./CreateBeach.css"
import {useEffect, useRef, useState} from "react";
import BeachConfiguration from "./BeachConfiguration/BeachConfiguration";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

const CreateBeach = () => {
    const [beachName, setBeachName] = useState("");
    const [beachDescription, setBeachDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState(null); // Store the URL of the image
    const [currRows, setCurrRows] = useState(2);
    const [currColumns, setCurrColumns] = useState(4);
    const currIndexes = useRef(Array.from({length: currRows * currColumns}, (_, i) => i));

        const setSuccessMessage = (errorMessage) =>{
            toast.error(errorMessage
                , {
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

    useEffect(() => {
        if (image) {
            // Create a Blob from the byte[] array
            const blob = new Blob([image], {type: "image/jpeg"}); // Adjust the type accordingly

            // Create a URL for the Blob
            const url = URL.createObjectURL(blob);

            // Set the URL in state
            setImageURL(url);
        }
    }, [image]);
    const handleSubmitCreation = async (e) => {
            e.preventDefault();
            if (beachName === "" && beachDescription === "") {
                setSuccessMessage("beach name and description must not be empty");
            } else if (currRows > 15 || currColumns > 25) {
                setSuccessMessage("too much columns or rows")
            } else
                try {
                    var response = await axios.post('https://localhost:7034/api/Beach/create-beach', {
                        Name: beachName,
                        Description: beachDescription,
                        RowsCount: currRows,
                        ColsCount: currColumns,
                        Indexes: currIndexes.current,
                        Country: "country",
                        City: "city",
                        Longitude: "3632",
                        Latitude: "2342"
                    }, {
                        headers:
                            {
                                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                            }
                    });
                    console.log(response.data.id);
                    toast.success("beach-created"
                        , {
                            position: "top-right",
                            autoClose: 3001,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    await sendBackgroundImage(response.data.id, e)
                } catch
                    (error) {
                    console.error(error);
                    if (error.response && error.response.status === 401) {
                        setSuccessMessage("Login please, your session is expired");
                    } else {
                        setSuccessMessage("Something went wrong with the image upload.");
                    }
                }
        }
    ;
    const sendBackgroundImage = async (beachId, e) => {
        e.preventDefault();
        try {
            if (image) {
                const formData = new FormData();
                formData.append("file", new Blob([new Uint8Array(image)], {type: "image/jpeg"})); // Adjust the type accordingly
                formData.append("beachId", beachId);

                await axios.post('https://localhost:7034/api/Image/add-background-image', formData, {
                    maxContentLength: 20000000,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                        'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                    },
                });

                setImage(null);
                setImageURL("");
                setBeachName("");
                setBeachDescription("");
                setCurrRows(2);
                setCurrColumns(4);
                toast.success("beach-foto added"
                    , {
                        position: "top-right",
                        autoClose: 3001,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
            } else {
                setSuccessMessage("Please select an image.");
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                setSuccessMessage("Login please, your session is expired");
            } else {
                setSuccessMessage("Something went wrong with the image upload.");
            }
        }
    };


    function handleImage(e) {
        const file = e.target.files[0];

        if (file) {
            // Create a FileReader
            const reader = new FileReader();

            // Set up an event handler for when the file has been loaded
            reader.onload = (event) => {
                // event.target.result contains the array buffer of the image
                const arrayBuffer = event.target.result;

                // Now you can convert the array buffer to a byte[] array
                const byteArray = new Uint8Array(arrayBuffer);

                // Set the image and byteArray in your component's state
                setImage(byteArray);
            };

            // Read the image file as an array buffer
            reader.readAsArrayBuffer(file);
        }
    }

    return (
        <div className="main">
            <h1>Create your beach Here</h1>
            <label>Name:</label>
            <input onChange={e => setBeachName(e.target.value)} value={beachName}/>
            <label>Description:</label>
            <input onChange={e => setBeachDescription(e.target.value)} value={beachDescription}/>
            <div id="cols and rows incrementors">
                <label>Columns: </label>
                <input onChange={event => (setCurrColumns(event.target.value))} value={currColumns} step="1"/>
                <label>Rows: </label>
                <input onChange={event => (setCurrRows(event.target.value))} value={currRows} step="1"/>
            </div>
            <BeachConfiguration currRows={currRows} currColumns={currColumns} currIndexes={currIndexes}/>

            <label>Add BackgroundImage</label>
            <form>
                <input type="file" name="my_image" onChange={handleImage}/>
                {imageURL && <img src={imageURL} alt="Uploaded" style={{aspectRatio: 4 / 3, width: 100}}/>}
            </form>
            <button onClick={handleSubmitCreation}>Send</button>
            <ToastContainer/>
        </div>
    );
}
export default CreateBeach