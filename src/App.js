import { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/nav/Navbar'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { authStateChanged } from './store/actions/authActions'
import { auth, firestore} from './firebase/config'
import { connect } from 'react-redux'


function App(props) {



  useEffect(() => {
      auth.onAuthStateChanged(function(userAuth) {

          if(userAuth){
            firestore.collection('users').doc(userAuth.uid).get().then(userFirestoreDoc => {
              props.authStateChanged(userAuth, userFirestoreDoc)
            })
          }else{
            props.authStateChanged(null, null)
          }
      });
  })

  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    authStateChanged: (userAuth, userFirestoreDoc) => dispatch(authStateChanged(userAuth, userFirestoreDoc)),
    
  }
}

export default connect(null, mapDispatchToProps)(App)
