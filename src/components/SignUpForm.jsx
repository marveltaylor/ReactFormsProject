import { useState } from "react";

const [username, setUsername] = useState(""); //create username state variable with value ""
const [password, setPassword] = useState(""); //create password state variable with value ""
const [error, setError] = useState(null); //create error state variable with value null

export default function SignUpForm () { //create SignUpForm component
    async function handleSubmit(event) { //prevents reloading the page
        event.preventDefault();
        console.log("Hello");
    }
    return (
    <>
        <h2>Sign Up!</h2>
        <form>
            <label>
                Username: <input value={username} onChange={(e) => {setUsername(e.target.value);}} />
            </label>
            <label>
                Password: <input value={password} onChange={(e) => {setPassword(e.target.value);}}/>
            </label>
            <button>Submit</button>
        </form>
    </>
    )
};
