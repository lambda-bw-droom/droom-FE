import axios from 'axios';

//Base url
const BASE_URL = 'http://localhost:8000';

// Create user action types
export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';

// Login user in action types
export const LOGIN_IN = 'LOGIN_IN';
export const LOGIN_IN_SUCCESS = 'LOGIN_IN_SUCCESS';
export const LOGIN_IN_FAILURE = 'LOGIN_IN_FAILURE';

export const createAccount = newUser => dispatch => {
	dispatch({ type: CREATING_ACCOUNT, payload: true });

	return axios
		.post(`${BASE_URL}/auth/register`, newUser)
		.then(res => {
			console.log(res);
		})
		.catch(err => console.log(err));
};

export const login = credentials => dispatch => {
	dispatch({ type: LOGIN_IN, payload: true });
};
