import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../../redux/action';
import { Signup } from './Signup';

/**
 * Login `Container component`
 * Note: container component only contains logic no `JSX`
 * this pattern of composing component allows separation of 
 * logic from views
 *
 * @param {*} props
 * @returns {Object}
 */
const SignupContainer = props => {
	const { creating } = props;

	const [form, setValue] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		is_employer: '',
		errors: {}
	});

	const handleSubmit = () => {
		const newUser = {
			first_name: form.first_name,
			last_name: form.last_name,
			email: form.email,
			password: form.password,
			is_employer: form.is_employer
		};

		createAccount(newUser).then(res => {
			if (res.data !== undefined && res.status === 201) {
				return props.history.push('/dashboard');
			}

			props.history.push('/signup');
		});
	};

	const inputChange = (field, value) => {
		setValue({
			...form,
			[field]: value
		});
	};

	const { createAccount } = props;

	return <Signup form={form} inputChange={inputChange} creating={creating} handleSubmit={handleSubmit} />;
};

const mapStateToProps = state => {
	return {
		creating: state.userReducer.creating
	};
};

export default connect(mapStateToProps, { createAccount })(SignupContainer);
