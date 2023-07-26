import { useState } from "react";

export default function Authenticate (token) { //create Authenticate component 
    const [error, setError] = useState(null);
    
    async function handleClick() {
        try {
        } catch (error) {

        }
    }

    return (
    <>
        <h2>Authenticate!</h2> 
        <button onClick={handleClick}>Authenticate Token!</button>
    </>

    )
}