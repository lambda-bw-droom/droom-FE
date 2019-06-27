import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { Header, Footer } from '../~common';
import { white, medium_space, ContainerStyled } from '../~styles/reuseables';
import { Job } from './Job';
import { JobDetails } from './JobDetails';

const jobs = [
	{
		id: 1,
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		id: 2,
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		id: 3,
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		id: 4,
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		id: 5,
		imgSrc: 'https://img.icons8.com/color/48/000000/user-male-circle.png',
		role: 'Executive Assistant to CEO',
		companyName: 'Lambda',
		location: 'Dubai, United Arab Emirates',
		postedDate: '1 day ago'
	},
	{
		id: 6,
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
						<JobListContainer>{jobs.map(job => <Job key={job.id} {...job} />)}</JobListContainer>
						<RightAside>
							<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
								<JobDetails
									imgSrc="https://img.icons8.com/color/48/000000/google-logo.png"
									companyName="Google"
									location="Lagos Nigeria"
									companySize="10000"
									linkedIn="linkedin/google"
									website="https://www.google.com/"
								/>
							</Animated>
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

const RightAside = styled.aside``;

const JobListContainer = styled.section`
	width: 900px;
	display: flex;
	flex-wrap: wrap;
`;
