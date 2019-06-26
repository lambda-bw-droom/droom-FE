import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Header, Footer, Button, Input } from '../~common';
import {
	ContainerStyled,
	borderRadius,
	medium_space,
	InputGroupStyled,
	LabelStyled,
	white,
	boxShadow
} from '../~styles/reuseables';
/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Signup = props => {
	const { handleSubmit, inputChange, form } = props;

	return (
		<div>
			<Header>
				<h3>
					<NavLink to="/">
						<img src="https://image.flaticon.com/icons/svg/660/660503.svg" alt="logo" />
					</NavLink>
				</h3>

				<ul>
					<li>
						<NavLink to="/login">login</NavLink>
					</li>
					<li>
						<NavLink to="/jobs">Jobs</NavLink>
					</li>
				</ul>
			</Header>
			<main>
				<ContainerStyled>
					<MainWrapper>
						<div>welcome message</div>

						<FormContainer>
							<h3>Create Account</h3>

							<form>
								<Input
									type="text"
									name="first_name"
									inputChange={inputChange}
									error={form.errors.first_name}
									value={form.first_name}
									labelText="First name"
								/>

								<Input
									type="text"
									name="last_name"
									inputChange={inputChange}
									error={form.errors.last_name}
									value={form.last_name}
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
									type="password"
									name="password"
									inputChange={inputChange}
									error={form.errors.password}
									value={form.password}
									labelText="Password"
								/>

								<InputGroupStyled style={{ display: 'flex' }}>
									<LabelStyled>
										Job seeker{' '}
										<input
											type="radio"
											name="is_employer"
											value={false}
											style={{ marginRight: '20px' }}
											checked={`${form.is_employer}` === `${false}`}
											onChange={evt => {
												const field = evt.target.name;
												const value = evt.target.value;
												inputChange(field, value);
											}}
										/>
									</LabelStyled>

									<LabelStyled>
										Employer{' '}
										<input
											type="radio"
											name="is_employer"
											value={true}
											checked={`${form.is_employer}` === `${true}`}
											onChange={evt => {
												const field = evt.target.name;
												const value = evt.target.value;
												inputChange(field, value);
											}}
										/>
									</LabelStyled>
								</InputGroupStyled>

								<Button buttonText="Create Account" onClick={handleSubmit} type="button" />
							</form>
						</FormContainer>
					</MainWrapper>
				</ContainerStyled>
			</main>
			<Footer>
				<p>&copy; 2019</p>
				<p>Made by Yemi, Jaytee Padilla & Cash Globe</p>
				<p>The Droom team</p>
			</Footer>
		</div>
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
	box-shadow: ${boxShadow};
	border-radius: ${borderRadius};
	padding: 4rem;
	background: ${white};

	h3 {
		margin-bottom: ${medium_space};
		text-align: center;
	}
`;
