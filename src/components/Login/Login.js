import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Header, Footer, Button, Input } from '../~common';
import { ContainerStyled, borderRadius, medium_space } from '../~styles/reuseables';
/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Login = props => {
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
						<NavLink to="/signup">Signup</NavLink>
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
							<h3>Welcome Back!</h3>

							<form>
								<Input
									type="text"
									name="username"
									inputChange={inputChange}
									error={form.errors.username}
									value={form.username}
									labelText="Username"
								/>

								<Input
									type="password"
									name="password"
									inputChange={inputChange}
									error={form.errors.password}
									value={form.password}
									labelText="Password"
								/>
								<Button buttonText="login" onClick={handleSubmit} type="button" />
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
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	border-radius: ${borderRadius};
	padding: 4rem;

	h3 {
		margin-bottom: ${medium_space};
		text-align: center;
	}
`;
