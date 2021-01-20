import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/profile/Profile'
import Navbar from './components/nav/Navbar'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { connect } from 'react-redux'

function App(props) {

  const { currentUser } = props;

  const jsx = currentUser.name? <Profile/>: 
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
    </>
    
  return (
    <BrowserRouter>
      <Navbar/>
      {jsx}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(App);
