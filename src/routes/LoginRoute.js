import React, { useState} from 'react';
import { LoginWithEmail } from '../services/AuthService';

export default function LoginRoute({setLoggedIn}) {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
        // console.log(username, password);
        setMessage("");
        const response = await LoginWithEmail({username, password});
        // console.log(response);
        setMessage(response.message);
        if (response.token) {
            localStorage.setItem("token", response.token);
            const user = JSON.parse(atob(response.token.split(".")[1]));
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            setLoggedIn(true);
            window.location.href = "/";
            console.log(message);
        }
    }

    return (
        <div className="login-route">
            <h2>Login</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
}