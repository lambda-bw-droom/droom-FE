import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Header, Footer } from '../~common';
import { ContainerStyled, ButtonPrimaryStyled, medium_space } from '../~styles/reuseables';
/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Home = () => {
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
						<HeroLeft>
							<h2>Swipe and connect with the right employer</h2>
						</HeroLeft>

						<HeroRight>
							<div>
								<img src="https://img.icons8.com/bubbles/50/000000/collaboration.png" alt="icon" />
								<img src="https://img.icons8.com/bubbles/50/000000/attach-resume-male.png" alt="icon" />
								<img src="https://img.icons8.com/clouds/100/000000/share.png" alt="icon" />
							</div>
							<p>View and Swipe through potential and vibrant job seekers</p>
							<Link to="/signup">
								<ButtonPrimaryStyled>Join Now</ButtonPrimaryStyled>
							</Link>
						</HeroRight>
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
	justify-content: space-between;
	min-height: calc(100vh - 100px);
`;

const HeroLeft = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeroRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 100px;
		height: 100px;
	}

	a {
		margin: ${medium_space};
		width: 200px;
	}
`;
