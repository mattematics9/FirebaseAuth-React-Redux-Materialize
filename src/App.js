import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/nav/Navbar'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'

function App(props) {

  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
    </BrowserRouter>
  );
}

export default App
