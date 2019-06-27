import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../~common';
import { borderRadius, medium_space, h4_font_size } from '../../~styles/reuseables';
/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Seeker = props => {
	const { handleSubmit, inputChange, form } = props;

	return (
		<MainWrapper>
			<FormContainer>
				<h4>Setup Your Profile</h4>

				<form>
					<Input
						type="text"
						name="firstName"
						inputChange={inputChange}
						error={form.errors.firstName}
						value={form.firstName}
						labelText="First name"
					/>

					<Input
						type="text"
						name="lastName"
						inputChange={inputChange}
						error={form.errors.lastName}
						value={form.lastName}
						labelText="Last name"
					/>

					<Input
						type="text"
						name="email"
						inputChange={inputChange}
						error={form.errors.email}
						value={form.email}
						labelText="Email"
					/>

					<Input
						type="text"
						name="location"
						inputChange={inputChange}
						error={form.errors.location}
						value={form.location}
						labelText="Location"
					/>

					<Input
						type="text"
						name="phone"
						inputChange={inputChange}
						error={form.errors.phone}
						value={form.phone}
						labelText="Phone"
					/>

					<Input
						type="text"
						name="linkedIn"
						inputChange={inputChange}
						error={form.errors.linkedIn}
						value={form.linkedIn}
						labelText="linkedIn"
					/>
					<ActionWrapper>
						<Button buttonText="Create" onClick={handleSubmit} type="button" />
						<Button buttonText="Cancel" onClick={handleSubmit} type="button" />
					</ActionWrapper>
				</form>
			</FormContainer>
		</MainWrapper>
	);
};

const MainWrapper = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: calc(100vh - 100px);
`;

const FormContainer = styled.div`
	width: 400px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	border-radius: ${borderRadius};
	padding: 4rem;

	h4 {
		margin: 0;
		margin-bottom: ${medium_space};
		font-size: ${h4_font_size};
		text-align: center;
	}
`;

const ActionWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		width: 150px;
		margin-top: 15px;
		font-weight: 400;
	}
`;
