import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import LoginForm from './components/LoginForm';
import SignupSelector from './components/SignupSelector';

function App() {
  return (
    <div className="App">
			<Route exact path="/login" render={props => <LoginForm {...props} />} />
			<Route exact path="/signup" render={props => <SignupSelector {...props} />} />
    </div>
  );
}

export default App;
