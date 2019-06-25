import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * @param {object} { component: Component }
 * @returns {object}
 */
export const Auth = ({ component: Component }) => {
	const token = localStorage.getItem('token');

	// Check if token exist and renders wrapped component
	if (token) {
		return <Route render={props => <Component {...props} />} />;
	}

	return <Redirect to="/" />;
};
