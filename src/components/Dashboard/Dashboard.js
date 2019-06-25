import React from 'react';
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
	borderRadius,
	primary_color
} from '../~styles/reuseables';
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
					<LeftAside>
						<div>
							<div>matches</div>
							<div>matches details</div>
						</div>
					</LeftAside>

					<MainSection>
						<h3>Explore Jobs</h3>
						<JobListContainer>
							<JobCard>Job1</JobCard>
							<JobCard>Job2</JobCard>
							<JobCard>Job3</JobCard>
						</JobListContainer>
					</MainSection>

					<RightAside>
						<ul>
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
						</ul>
					</RightAside>
				</MainWrapper>
			</main>
		</DashboardStyled>
	);
};

const MainWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	aside {
		background: ${lightGrey};
		min-height: calc(100vh - 50px);
		width: 250px;
		box-shadow: ${boxShadow};
		padding: ${medium_space};
	}
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
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		color: ${dark};

		&:hover {
			color: ${primary_color};
		}
	}

	ul {
		list-style: none;
		background: ${light};
		padding: ${medium_space};
		border-radius: ${borderRadius};
		border: 1px solid ${dark};

		li {
			margin-bottom: ${small_space};
		}
	}
`;

const LeftAside = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		color: ${dark};

		&:hover {
			color: ${primary_color};
		}
	}
`;

const MainSection = styled.section`
	width: 900px;

	h3 {
		text-align: center;
		margin: ${medium_space};
	}
`;

const JobListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const JobCard = styled.div`
	width: 260px;
	height: 260px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	padding: ${small_space};
`;
