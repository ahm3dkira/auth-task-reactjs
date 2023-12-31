import React, {useEffect, useState} from 'react';
import { SignupWithEmail } from '../services/AuthService';
import { Stack, FormGroup, FormLabel, Input, Button } from '@mui/material';
export default function RegisterRoute() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
        console.log(email, password, username); 
        setMessage("");
        const response = await SignupWithEmail({email, password, username});
        setMessage(response.message);
        setSubmitted(true);
    }
    useEffect(() => {
    }, [message, submitted]);

    return (
        <div className="register-route">
            <Stack spacing={2} direction="column" padding={4} alignItems="center" justifyContent="center">
                { message && <p>{message}</p> }
                { submitted && <p>Form submitted go to <a href="/login">Login</a></p> }

                <h2>Register</h2>
                <form onSubmit={handleSubmit} style={{width: "50%"}}>
                    {/* username */}
                    <Stack spacing={2} direction="column" padding={4}>
                        <FormGroup>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </FormGroup>
                        <Stack direction="row" padding={2} alignItems="center" justifyContent="center">
                            <Button type="submit">Register</Button>
                        </Stack>
                    {/* </Stack> */}
                        {/* <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" onClick={handleSubmit}>Register</button> */}
                    </Stack>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </Stack>
        </div>
    );
}