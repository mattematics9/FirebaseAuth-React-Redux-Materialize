import React from 'react'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../firebase/methods'

const LoggedInLinks = (props) => {

    const handleClick = () => {
        signOutUser();
    }

    return (
        <>
            <li><Link className="sidenav-close" to="/">HOME</Link></li>
            <li><Link className="sidenav-close" onClick={handleClick} to="/">SIGN OUT</Link></li>
        </>
    )
}

export default LoggedInLinks
