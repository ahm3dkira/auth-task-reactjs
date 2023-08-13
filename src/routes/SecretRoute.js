import { Button, Stack } from "@mui/material";
import { Logout, getSecretMessage, setSecretMessage } from "../services/AuthService";
import React, { useEffect, useState } from 'react';
export default function SecretRoute() {
    const [oldSecretMessage, setOldSecretMessage] = useState("");
    const [newSecretMessage, setNewSecretMessage] = useState("");
    // const [userData, setUserData] = useState(null)
    const username = JSON.parse(localStorage.getItem("user")).username;

    useEffect(() => {
        async function fetchData() {
            const response = await getSecretMessage();
            setOldSecretMessage(response.secretMessage);
            setNewSecretMessage(response.secretMessage);
        }
        fetchData();
    }, []);
    async function handleSave() {
        const response = await setSecretMessage(newSecretMessage);
        console.log(response);
    }


    return (
        <div className="secret-route">
            <Stack spacing={2} direction="column" padding={4} alignItems="center" justifyContent="center">
                <h2>Welcome {username}!</h2>
                <h3>Here is your secret don't tell anyone ;)</h3>
                <p>your secret message is:<span>{oldSecretMessage}</span></p>

                <textarea value={newSecretMessage} onChange={(e) => setNewSecretMessage(e.target.value)} cols="40" rows="8"/>


                {oldSecretMessage !== newSecretMessage && <Button variant="contained" onClick={handleSave}>Save</Button>}
                <p>Only logged in users should be able to see this page.</p>
                <Button variant="contained" onClick={Logout}>Logout</Button>
            </Stack>
        </div>
    );
}