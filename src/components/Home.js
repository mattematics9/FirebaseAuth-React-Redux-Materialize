import React from 'react'
import Profile from './profile/Profile'
import { connect } from 'react-redux'

const Home = (props) => {

    const { currentUser } = props;
    console.log(currentUser);

    return (
        <div>
            {currentUser.userAuth? <Profile/>: null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps)(Home)
