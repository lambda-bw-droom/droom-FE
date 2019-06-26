import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Header, Button, Footer } from '../~common';
import {
	small_space,
	dark,
	white,
	boxShadow,
	medium_space,
	borderRadius,
	primary_color,
	ContainerStyled
} from '../~styles/reuseables';
import { Job } from './Job';

const jobs = [
	{
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	}
];

/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Jobs = () => {
	return (
		<JobsStyled>
			<Header>
				<h3>
					<NavLink to="/">
						<img src="https://image.flaticon.com/icons/svg/660/660503.svg" alt="logo" />
					</NavLink>
				</h3>

				<ul>
					<li>
						<NavLink to="/signup">signup</NavLink>
					</li>
					<li>
						<NavLink to="/login">login</NavLink>
					</li>
				</ul>
			</Header>
			<main>
				<ContainerStyled>
					<h3>Explore Jobs</h3>
					<MainWrapper>
						<JobListContainer>{jobs.map(job => <Job {...job} />)}</JobListContainer>

						<RightAside>
							<h3>Job details</h3>
							<CompanyDetailsWrapper>
								<div>
									<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" />
								</div>
								<ul>
									<li>Google inc</li>
									<li>Location</li>
									<li>Company size</li>
									<li>Linked in</li>
									<li>Website</li>
								</ul>
							</CompanyDetailsWrapper>

							<ActionWrapper>
								<Next buttonText="Next" type="button" onClick={() => console.log('ok')} />
								<SuperLike buttonText="Like" type="button" onClick={() => console.log('ok')} />
							</ActionWrapper>
						</RightAside>
					</MainWrapper>
				</ContainerStyled>
			</main>

			<Footer>
				<p>&copy; 2019</p>
				<p>Made by Yemi, Jaytee Padilla & Cash Globe</p>
				<p>The Droom team</p>
			</Footer>
		</JobsStyled>
	);
};

const JobsStyled = styled.div`
	& header {
		a {
			color: ${white};
		}
	}

	& main {
		padding-bottom: ${medium_space};
		& h3 {
			text-align: center;
			margin: ${medium_space} 0;
		}
	}
`;

const MainWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const RightAside = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background: ${white};
	min-height: 600px;
	width: 350px;
	box-shadow: ${boxShadow};
	padding-top: ${medium_space};
	border-radius: ${borderRadius};
	padding: ${small_space};

	a {
		color: ${dark};

		&:hover {
			color: ${primary_color};
		}
	}
`;

const JobListContainer = styled.section`
	width: 900px;
	display: flex;
	flex-wrap: wrap;
`;

const CompanyDetailsWrapper = styled.div`
	text-align: center;

	ul {
		list-style: none;
		padding: ${small_space};

		li {
			margin-bottom: ${small_space};
		}
	}
`;

const SuperLike = styled(Button)``;

const Next = styled(Button)``;

const ActionWrapper = styled.div`
	display: flex;

	button {
		width: 150px;
		margin: 10px;
		font-weight: 400;
	}
`;
