import { useState } from "react";

export default function SignUpForm ({setToken}) { //create SignUpForm component

const [username, setUsername] = useState(""); //create username state variable with value ""
const [password, setPassword] = useState(""); //create password state variable with value ""
const [error, setError] = useState(null); //create error state variable with value null

    async function handleSubmit(event) { //prevents reloading the page
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({username, password})
            });
            const result = await response.json();
            console.log(result);
            setToken(result.token);
        } catch (error) {
            setError(error.message);
        }
        setUsername("");
        setPassword("");
    }
    return (
    <>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>} 
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input type="username" name="username" id="username" required minLength="5" maxLength="8" value={username} onChange={(e) => {setUsername(e.target.value);}} />
            </label>
            <label>
                Password: <input type="password" name="password" id="password" required minLength="4" maxLength="6" value={password} onChange={(e) => {setPassword(e.target.value);}}/>
            </label>
            <button>Submit</button>
        </form>
    </>
    )
};
