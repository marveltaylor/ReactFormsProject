import { useState } from "react";

export default function Authenticate (token) { //create Authenticate component 
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const repsonse = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {"Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        })
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