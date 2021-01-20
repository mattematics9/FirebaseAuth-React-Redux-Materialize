import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
            <li><Link className="sidenav-close" to="/">HOME</Link></li>
            <li><Link className="sidenav-close" to="/login">LOGIN</Link></li>
            <li><Link className="sidenav-close" to="/signup">SIGN UP</Link></li>
        </>
    )
}

export default SignedOutLinks
