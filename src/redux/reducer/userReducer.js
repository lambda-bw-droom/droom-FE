import {
	CREATING_ACCOUNT,
	CREATE_ACCOUNT_SUCCESS,
	CREATE_ACCOUNT_FAILURE,
	LOGIN_IN,
	LOGIN_IN_SUCCESS,
	LOGIN_IN_FAILURE
} from '../action';

const initialState = {
	user: {
		username: '',
		user_type: 0
	},
	profile: {
		employers: [
			{
				name: '',
				location: '',
				about: '',
				contact_info: {
					phone: '',
					email: ''
				},
				social_media: {
					facebook: '',
					linkedIn: '',
					twitter: '',
					github: ''
				},
				website: ''
			}
		],
		seekers: [
			{
				first_name: '',
				last_name: '',
				position: '',
				location: '',
				bio: '',
				job_type: '',
				contact_info: {
					phone_number: '',
					email: ''
				},
				interests: [],
				past_experience: [
					{
						name: '',
						title: '',
						description: ''
					}
				],
				education: [
					{
						school: '',
						certificate: ''
					}
				],
				skills: [],
				references: [
					{
						name: '',
						relationship: '',
						phone: '',
						email: ''
					}
				],
				social_media: {
					facebook: '',
					linkedIn: '',
					twitter: '',
					github: ''
				},
				portfolio: '',
				resume: '',
				projects: [],
				niche: 1,
				seen: [],
				timestamp: ''
			}
		]
	},
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
				user: action.payload.user,
				...action.payload.profile
			};
		case CREATE_ACCOUNT_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case LOGIN_IN:
			return {
				...state,
				signing_in: true
			};
		case LOGIN_IN_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				...action.payload.profile
			};
		case LOGIN_IN_FAILURE:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
