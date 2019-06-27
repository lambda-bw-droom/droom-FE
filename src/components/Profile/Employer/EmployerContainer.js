import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../../../redux/action';
import { Employer } from './Employer';

/**
 * Login `Container component`
 * Note: container component only contains logic no `JSX`
 * this pattern of composing component allows separation of 
 * logic from views
 *
 * @param {*} props
 * @returns {Object}
 */
const EmployerContainer = props => {
	const { createProfile } = props;

	const [form, setValue] = useState({
		companyName: '',
		location: '',
		about: '',
		phone: '',
		email: '',
		linkedIn: '',
		website: '',
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
			companyName: '',
			location: '',
			about: '',
			phone: '',
			email: '',
			linkedIn: '',
			website: ''
		};
		createProfile(newUser);
	};

	return <Employer form={form} inputChange={inputChange} handleSubmit={handleSubmit} />;
};

export default connect(null, { createProfile })(EmployerContainer);
