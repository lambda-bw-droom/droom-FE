import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../../../redux/action';
import { Seeker } from './Seeker';

/**
 * Seeker `Container component`
 * Note: container component only contains logic no `JSX`
 * this pattern of composing component allows separation of 
 * logic from views
 *
 * @param {*} props
 * @returns {Object}
 */
const SeekerContainer = props => {
	const { createProfile } = props;

	const [form, setValue] = useState({
		firstName: '',
		lastName: '',
		email: '',
		location: '',
		phone: '',
		linkedIn: '',
		errors: {}
	});

	const inputChange = (field, value) => {
		setValue({
			...form,
			[field]: value
		});
	};

	const handleSubmit = () => {
		const profile = {
			firstName: '',
			lastName: '',
			email: '',
			location: '',
			phone: '',
			linkedIn: ''
		};
		createProfile(profile);
	};

	return <Seeker form={form} inputChange={inputChange} handleSubmit={handleSubmit} />;
};

export default connect(null, { createProfile })(SeekerContainer);
