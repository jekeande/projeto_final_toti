import React, { useState } from 'react';
import { useAuth } from './Auth';

const Login = () =>{

    const [input, setInput] = useState({
        name: ''
    });

    const { email, setEmail } = useAuth();

    const handleLogin = () => {
        localStorage.setItem("email", JSON.stringify(input))
        setEmail(input);
    }
    const handleLogout = () => {
        localStorage.removeItem("email")
        setEmail({input});
    }

    console.log('login',email.name)

    return (
        <div>
        <h1>Login:{email.name}</h1>
            <input type="text" onChange={(e)=>setInput({ name: e.target.value})} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Login;