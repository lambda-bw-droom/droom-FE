import {
	CREATING_ACCOUNT,
	CREATE_ACCOUNT_SUCCESS,
	CREATE_ACCOUNT_FAILURE,
	LOGIN_IN,
	LOG_IN_SUCCESS,
	LOG_IN_FAILURE
} from '../action';

const initialState = {
	user: null,
	creating: false,
	signing_in: false,
	error: null
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATING_ACCOUNT:
			return {
				...state,
				creating: true
			};
		case CREATE_ACCOUNT_SUCCESS:
			return {
				...state,
				creating: false,
				user: action.payload.user
			};
		case CREATE_ACCOUNT_FAILURE:
			return {
				...state,
				error: action.payload,
				creating: false
			};
		case LOGIN_IN:
			return {
				...state,
				signing_in: true
			};
		case LOG_IN_SUCCESS:
			return {
				...state,
				signing_in: false,
				user: action.payload.user,
				...action.payload.profile
			};
		case LOG_IN_FAILURE:
			return {
				...state,
				signing_in: false,
				error: action.payload
			};
		default:
			return state;
	}
};
