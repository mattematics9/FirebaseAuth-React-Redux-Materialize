import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './providers/UserProvider'
import 'materialize-css/dist/css/materialize.min.css'


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App/>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


