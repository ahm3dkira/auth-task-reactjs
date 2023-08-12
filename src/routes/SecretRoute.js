import { Logout, getSecretMessage, setSecretMessage } from "../services/AuthService";
import React, { useEffect, useState } from 'react';
export default function SecretRoute() {
    const [oldSecretMessage, setOldSecretMessage] = useState("");
    const [newSecretMessage, setNewSecretMessage] = useState("");
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
            <h2>Secret:</h2>
            <p>{oldSecretMessage}</p>
            <input type="textarea" value={newSecretMessage} onChange={(e) => setNewSecretMessage(e.target.value)} />
            {oldSecretMessage !== newSecretMessage && <button onClick={handleSave}>Save</button>}
            <p>Only logged in users should be able to see this page.</p>
            <button onClick={Logout}>Logout</button>
        </div>
    );
}