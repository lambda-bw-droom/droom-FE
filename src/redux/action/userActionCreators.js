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
	console.log('created');
};

export const login = credentials => dispatch => {
	dispatch({ type: LOGIN_IN, payload: true });
	console.log('login');
};
