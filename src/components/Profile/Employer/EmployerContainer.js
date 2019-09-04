import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProfile } from '../../../redux/action';
import { Employer } from './Employer';

/**
 * Employer `Container component`
 * Note: container component only contains logic no `JSX`
 * this pattern of composing component allows separation of 
 * logic from views
 *
 * @param {*} props
 * @returns {Object}
 */
const EmployerContainer = props => {
	const { createProfile, creatingProfile } = props;

	const [form, setValue] = useState({
		companyName: '',
		location: '',
		about: '',
		phone: '',
		email: '',
		linkedIn: '',
		website: '',
		is_employer: true,
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
			companyName: form.companyName,
			location: form.location,
			about: form.about,
			phone: form.phone,
			email: form.email,
			linkedIn: form.linkedIn,
			website: form.website
		};

		createProfile(profile);
	};

	return (
		<Employer form={form} inputChange={inputChange} handleSubmit={handleSubmit} creatingProfile={creatingProfile} />
	);
};

const mapStateToProps = state => {
	return {
		creatingProfile: state.userReducer.creatingProfile
	};
};

export default connect(mapStateToProps, { createProfile })(EmployerContainer);
