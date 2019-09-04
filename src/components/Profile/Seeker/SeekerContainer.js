import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
	const { createProfile, creatingProfile } = props;

	const [form, setValue] = useState({
		first_name: '',
		last_name: '',
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
			first_name: form.first_name,
			last_name: form.last_name,
			email: form.email,
			location: form.location,
			phone: form.phone,
			linkedIn: form.linkedIn,
			is_employer: false
		};
		console.log(profile);

		createProfile(profile).then(res => {
			if (res.data !== undefined && res.status === 200) {
				return <Redirect to="/dashboard" />;
			}

			return <Redirect to="/dashboard" />;
		});
	};

	return <Seeker form={form} inputChange={inputChange} handleSubmit={handleSubmit} creatingProfile={creatingProfile} />;
};

const mapStateToProps = state => {
	return {
		creatingProfile: state.userReducer.creatingProfile
	};
};

export default connect(mapStateToProps, { createProfile })(SeekerContainer);
