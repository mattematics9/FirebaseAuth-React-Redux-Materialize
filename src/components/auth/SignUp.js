import React, { useState } from 'react'
import { signUpUser } from '../../firebase/methods'

const SignUp = (props) => {
 
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/');
        signUpUser(name, email, password)
    }

    const handleChange = (e) => {
        switch (e.target.id){
            case 'name-signup':
                setName(e.target.value)
                break;
            case 'email-signup':
                setEmail(e.target.value)
                break;
            case 'password-signup':
                setPassword(e.target.value)
                break;
            default:
                return
        }
    }

    return (
        <div className="container">
            <h4 className="center">SIGN UP</h4>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input onChange={handleChange} type="text" id="name-signup"/>
                    <label htmlFor="name-signup">Name</label>
                </div>
                <div className="input-field">
                    <input onChange={handleChange} type="email" id="email-signup"/>
                    <label htmlFor="email-signup">Email</label>
                </div>
                <div className="input-field">
                    <input onChange={handleChange} type="password" id="password-signup"/>
                    <label htmlFor="password-signup">Password</label>
                </div>
                <button>SIGN UP</button>
            </form>
        </div>
    )
}

export default SignUp
