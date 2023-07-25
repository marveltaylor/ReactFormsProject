import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenticate'
import SignUpForm from './components/SignUpForm'

const [token, setToken] = useState(null);

function App() {
  return (
    <>
    <Authenticate />
    <SignUpForm />
    </>
  )
};

export default App
