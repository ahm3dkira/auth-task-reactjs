import React, { useState} from 'react';
import { LoginWithEmail } from '../services/AuthService';
import { Button, Alert, FormGroup, FormLabel, Input, Stack } from '@mui/material';

export default function LoginRoute({setLoggedIn}) {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    // const [submitted, setSubmitted] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
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
            setMessage("");
        }
    }

    return (
        <div className="login-route">
            <Stack spacing={2} direction="column" padding={4} alignItems="center" justifyContent="center">
                <h2>Login</h2>
                { message !== "" && <Alert severity="error">{message}</Alert> }
                <form onSubmit={handleSubmit} style={{width: "50%"}}>
                    <FormGroup>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Stack direction="row" padding={2} alignItems="center" justifyContent="center">
                        <Button type="submit">Login</Button>
                    </Stack>
                </form>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </Stack>
        </div>
    );
}