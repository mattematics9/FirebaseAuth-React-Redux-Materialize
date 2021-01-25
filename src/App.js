import { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/nav/Navbar'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { auth, firestore } from './firebase/config'
import { connect } from 'react-redux'
import EditProfile from './components/profile/EditProfile'


function App(props) {

  const { dispatch } = props;
  //The user's token is automatically persisted to local storage, and is read when the page is loaded. This means that the user should automatically be authenticated again when you reload the page.  However, without onAuthStateChanged the code doesn't detect this authentication, since your components run before Firebase has reloaded and validated the user credentials. To fix this, you'll want to listen for the (asynchronous) onAuthStateChanged() event, instead of getting the value synchronously.
  useEffect(() => {
      auth.onAuthStateChanged(function(user) {

          if(user){
              firestore.collection('users').doc(user.uid).get().then(userFirestoreDoc => {
                  dispatch(user, userFirestoreDoc)
            })
          }else{
              dispatch(null, null)
          }
      });
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/edit-profile" component={EditProfile}/>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (user, userFirestoreDoc) => {
        dispatch({
            type: 'AUTH_STATE_CHANGED',
            payload: {
                user,
                userFirestoreDoc
            }
        })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
