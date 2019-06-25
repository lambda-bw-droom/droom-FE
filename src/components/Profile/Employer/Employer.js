import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../~common';
import { borderRadius, medium_space } from '../../~styles/reuseables';
/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Employer = props => {
	const { handleSubmit, inputChange, form } = props;

	return (
		<MainWrapper>
			<FormContainer>
				<h3>Setup Your Profile</h3>

				<form>
					<Input
						type="text"
						name="companyName"
						inputChange={inputChange}
						error={form.errors.companyName}
						value={form.companyName}
						labelText="Company Name"
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
						name="about"
						inputChange={inputChange}
						error={form.errors.about}
						value={form.about}
						labelText="About"
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
						name="email"
						inputChange={inputChange}
						error={form.errors.email}
						value={form.email}
						labelText="Email"
					/>

					<Input
						type="text"
						name="linkedIn"
						inputChange={inputChange}
						error={form.errors.linkedIn}
						value={form.linkedIn}
						labelText="linkedIn"
					/>

					<Input
						type="text"
						name="website"
						inputChange={inputChange}
						error={form.errors.website}
						value={form.website}
						labelText="Website Address"
					/>

					<Button buttonText="Create" onClick={handleSubmit} type="button" />
				</form>
			</FormContainer>
		</MainWrapper>
	);
};

const MainWrapper = styled.section`
	display: flex;
	padding: 10rem 0;
	justify-content: space-around;
	align-items: center;
	min-height: calc(100vh - 100px);
`;

const FormContainer = styled.div`
	width: 400px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	border-radius: ${borderRadius};
	padding: 4rem;

	h3 {
		margin-bottom: ${medium_space};
		text-align: center;
	}
`;
