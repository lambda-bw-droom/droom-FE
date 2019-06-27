import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/action';
import { Login } from './Login';

/**
 * Login `Container component`
 * Note: container component only contains logic no `JSX`
 * this pattern of composing component allows separation of 
 * logic from views
 *
 * @param {*} props
 * @returns {Object}
 */
const LoginContainer = props => {
	const { signing_in } = props;

	const [form, setValue] = useState({
		username: '',
		password: '',
		errors: {}
	});

	const inputChange = (field, value) => {
		setValue({
			...form,
			[field]: value
		});
	};

	const handleSubmit = () => {
		const newUser = {
			username: form.username,
			password: form.password
		};
		login(newUser);
	};

	const { login } = props;

	return <Login form={form} inputChange={inputChange} signing_in={signing_in} handleSubmit={handleSubmit} />;
};

const mapStateToProps = state => {
	return {
		signing_in: state.userReducer.signing_in
	};
};

export default connect(mapStateToProps, { login })(LoginContainer);
