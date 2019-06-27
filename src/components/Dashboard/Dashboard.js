import React from 'react';
import { Animated } from 'react-animated-css';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Header } from '../~common';
import {
	small_space,
	dark,
	white,
	lightGrey,
	boxShadow,
	medium_space,
	light,
	borderRadius
} from '../~styles/reuseables';

import { JobDetails } from '../Jobs/JobDetails';

/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Dashboard = () => {
	return (
		<DashboardStyled>
			<Header>
				<h3>
					<NavLink to="/">
						<img src="https://image.flaticon.com/icons/svg/660/660503.svg" alt="logo" />
					</NavLink>
				</h3>

				<ul>
					<li>
						<NavLink to="/signup">Profile</NavLink>
					</li>
					<li>
						<NavLink to="/login">Analytics</NavLink>
					</li>
					<li>
						<NavLink to="/jobs">Jobs</NavLink>
					</li>
				</ul>
			</Header>
			<main>
				<MainWrapper>
					<RightAside>
						<ProfileImageContainer>
							<ProfileImage>
								<img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="user thumbnail" />
							</ProfileImage>

							<div>My matches</div>
						</ProfileImageContainer>

						<ActionBar>
							<li>
								<Link to="/profile">Profile</Link>
							</li>
							<li>
								<Link to="/match">Matches</Link>
							</li>
							<li>
								<Link to="/message">Message</Link>
							</li>

							<li>
								<Link to="/logout">logout</Link>
							</li>
						</ActionBar>

						<MatchList>
							<h5>Your Matches</h5>
							<li>Google</li>
							<li>Facebook</li>
							<li>Andela</li>
							<li>Lambda</li>
						</MatchList>
					</RightAside>

					<MainSection>
						{/* <Animated animationIn="bounceOutLeft" animationInDelay="0" animationOut="fadeOut" isVisible={true}> */}
						<JobDetails
							imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
							companyName="Google"
							location="Lagos Nigeria"
							companySize="10000"
							linkedIn="linkedin/google"
							website="https://www.google.com/"
						/>
						{/* </Animated> */}
					</MainSection>
				</MainWrapper>
			</main>
		</DashboardStyled>
	);
};

const MainWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DashboardStyled = styled.div`
	& header {
		background: ${white};

		a {
			color: ${dark};
		}
	}
`;

const RightAside = styled.aside`
	margin-top: 1px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${lightGrey};
	min-height: calc(100vh - 50px);
	width: 300px;
	box-shadow: ${boxShadow};
	padding: ${medium_space};

	a {
		color: ${white};
		display: block;
		padding: 5px;

		&:hover {
			color: #283e4a;
		}
	}
`;

const ActionBar = styled.ul`
	min-height: 100px;
	list-style: none;
	background: ${light};
	width: 250px;
	padding: ${small_space};
	border-radius: ${borderRadius};
	border: 1px solid ${dark};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: ${small_space} 0;

	li {
		margin-bottom: ${small_space};
		width: 100px;
		background: #283e4a;
		border-radius: ${borderRadius};
		padding: 0;
		transition: 0.2s;
		border: 1px solid transparent;

		&:hover {
			border: 1px solid #283e4a;
			background: ${white};
			color: #283e4a;
		}
	}
`;

const MainSection = styled.section`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 50px;
`;

const ProfileImageContainer = styled.div`
	min-height: 100px;
	padding: ${small_space};
	background: ${light};
	width: 250px;
	border: 1px solid ${dark};
	border-radius: ${borderRadius};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ProfileImage = styled.div`
	img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
`;

const MatchList = styled.ul`
	min-height: 100px;
	list-style: none;
	color: #283e4a;
	width: 250px;
	border-radius: ${borderRadius};
	border: 1px solid ${dark};
	margin-bottom: ${small_space} 0;

	li {
		padding: ${small_space};
	}

	h5 {
		text-align: center;
		padding: ${small_space} 0;
		border-bottom: 1px solid #283e4a;
	}
`;
