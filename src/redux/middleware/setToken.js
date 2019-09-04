export const setToken = store => next => action => {
	// Get token from browser local storage
	let token = '';

	if (action.type === 'LOG_IN_SUCCESS') {
		token = action.payload.token;
		// Save token to local storage
		localStorage.setItem('token', token);
	}

	if (action.type === 'CREATE_ACCOUNT_SUCCESS') {
		token = action.payload.token;
		// Save token to local storage
		localStorage.setItem('token', token);
	}

	next(action);
};
