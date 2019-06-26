import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { GlobalStyles } from '../~styles/reuseables';
import { Login } from '../Login';
import { Signup } from '../Signup';
import { Home } from '../Home';
import { JobsContainer } from '../Jobs';
import { Dashboard } from '../Dashboard/Dashboard';
import uuid from 'uuid';

export const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<GlobalStyles />
				<Route exact path="/" render={props => <Home {...props} />} key={uuid()} />
				<Route exact path="/login" render={props => <Login {...props} />} key={uuid()} />
				<Route exact path="/signup" render={props => <Signup {...props} />} key={uuid()} />
				<Route exact path="/dashboard" render={props => <Dashboard {...props} />} key={uuid()} />
				<Route exact path="/jobs" render={props => <JobsContainer {...props} />} key={uuid()} />
			</Provider>
		</Router>
	);
};
