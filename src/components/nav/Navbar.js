import React, { useEffect } from 'react'
import LoggedInLinks from './LoggedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

const Navbar = (props) => {

    useEffect(() => {

        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }, [])

    const { currentUser } = props;
    const links = currentUser.user? <LoggedInLinks/>: <SignedOutLinks/>;

    return (
        <div>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">LOGO</Link>
                    <Link to="" className="sidenav-trigger" data-target="mobile-nav">
                        <i className="material-icons">menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        {links}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav grey lighten-2" id="mobile-nav">
                {links}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Navbar)
