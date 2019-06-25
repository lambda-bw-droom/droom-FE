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
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		errors: {}
	});

	const handleSubmit = () => {
		const newUser = {
			firstName: form.firstName,
			lastName: form.lastName,
			email: form.email,
			password: form.password
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
