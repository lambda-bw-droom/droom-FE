import axios from 'axios';
import { axiosWithHeader } from '../../helper/axiosWithHeader';

//Base url
const BASE_URL = 'https://droom-backend-bw.herokuapp.com';

// Create user action types
export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';

// Create user profiles action types
export const CREATING_PROFILE = 'CREATING_PROFILE';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE';

// Login user in action types
export const LOGIN_IN = 'LOGIN_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

/*---------------------------------------------------
	Action creators start here
------------------------------------------------------*/
export const createAccount = newUser => dispatch => {
	dispatch({ type: CREATING_ACCOUNT, payload: true });

	return axios
		.post(`${BASE_URL}/auth/register`, newUser)
		.then(res => {
			dispatch({
				type: CREATE_ACCOUNT_SUCCESS,
				payload: {
					user: res.data.saved[0],
					token: res.data.token
				}
			});

			return res;
		})
		.catch(err => {
			dispatch({ type: CREATE_ACCOUNT_FAILURE });
			return err;
		});
};

export const login = credentials => dispatch => {
	dispatch({ type: LOGIN_IN });

	return axiosWithHeader()
		.post(`${BASE_URL}/auth/login`, credentials)
		.then(res => {
			dispatch({
				type: LOG_IN_SUCCESS,
				payload: {
					user: res.data.saved[0],
					token: res.data.token
				}
			});

			return res;
		})
		.catch(err => {
			dispatch({ type: LOG_IN_FAILURE, payload: err.message });
			return err;
		});
};

export const createProfile = profile => dispatch => {
	console.log('profile');
};
