import { useState } from "react";

const [username, setUsername] = useState(""); //create username state variable with value ""
const [password, setPassword] = useState(""); //create password state variable with value ""
const [error, setError] = useState(null); //create error state variable with value null

export default function SignUpForm () { //create SignUpForm component
    return (
        <h2>Sign Up!</h2>
    )
};
