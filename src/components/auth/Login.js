import React, { useState } from 'react'
import { loginUser } from '../../firebase/methods'

const Login = (props) => {
    
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/');
        loginUser(email, password);
    }

    const handleChange = (e) => {
        switch (e.target.id){
            case 'email-login':
                setEmail(e.target.value)
                break;
            case 'password-login':
                setPassword(e.target.value)
                break;
            default:
                return
        }
    }

    return (
        <div className="container">
            <h4 className="center">LOGIN</h4>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input onChange={handleChange} type="email" id="email-login"/>
                    <label htmlFor="email-login">Email</label>
                </div>
                <div className="input-field">
                    <input onChange={handleChange} type="password" id="password-login"/>
                    <label htmlFor="password-login">Password</label>
                </div>
                <button className="btn">LOGIN</button>
            </form>
        </div>
    )
}

export default Login
