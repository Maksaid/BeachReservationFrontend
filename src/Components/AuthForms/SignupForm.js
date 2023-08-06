// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({onClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add a loading state to disable the form during submission
    const [error, setError] = useState(null); // Add a state to handle login errors
    const [showSuccess, setShowSuccess] = useState(false); // Add state for success notification


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading state

        try {
            const response = await axios.post('https://localhost:7034/api/User/register', {
                name,
                email,
                password,
                phone,
            });

            // Successful login, store JWT in localStorage or cookies
            setShowSuccess(true);
            // onClose();
            setIsLoading(false); // End loading state
            setError(null); // Reset error state
        } catch (error) {
            setError('Invalid email or password'); // Set error message
            setIsLoading(false); // End loading state
        }
    };

    return (
        <div className="login-form-container">
            <h2>Sign up</h2>
            <button className="close-button" onClick={onClose}>
                &#10006;
            </button>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Signing Up...' : 'Sign up'}
                </button>
                {error && <div className="error-message">{error}</div>}
            </form>
            {showSuccess && (
                <div className="success-notification">
                    Success! {name}, try to login, please.
                </div>
            )}
        </div>
    );
};

export default LoginForm;
