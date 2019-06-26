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
		createAccount(newUser);
	};

	const inputChange = (field, value) => {
		setValue({
			...form,
			[field]: value
		});
	};

	const { createAccount } = props;

	return <Signup form={form} inputChange={inputChange} handleSubmit={handleSubmit} />;
};

export default connect(null, { createAccount })(SignupContainer);
