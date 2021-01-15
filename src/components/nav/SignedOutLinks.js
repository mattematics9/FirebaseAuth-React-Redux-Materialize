import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/signup">SIGN UP</Link></li>
        </>
    )
}

export default SignedOutLinks
