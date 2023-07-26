import { useState } from "react";

export default function Authenticate (token) { //create Authenticate component 
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
        try {
            const repsonse = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        });
        const result = await response.json();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
    <>
        <h2>Authenticate!</h2> 
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
    </>

    )
}