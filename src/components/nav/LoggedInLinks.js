import React from 'react'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../store/actions/authActions'
import { connect } from 'react-redux'

const LoggedInLinks = (props) => {

    const handleClick = () => {
        props.signOutUser();
    }

    return (
        <>
            <li><Link className="sidenav-close" to="/">HOME</Link></li>
            <li><Link className="sidenav-close" onClick={handleClick} to="/">SIGN OUT</Link></li>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: () => dispatch(signOutUser())
    }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks)
