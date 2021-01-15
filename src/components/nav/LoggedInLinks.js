import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInLinks = () => {
    return (
        <>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/">SIGN OUT</Link></li>
        </>
    )
}

export default LoggedInLinks
