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
	ContainerStyled,
	small_font_size
} from '../~styles/reuseables';

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
						<MainSection>
							<JobListContainer>
								<JobCard to="/jobs">
									<div>
										<img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="company logo" />
									</div>
									<JobRoleStyled>Executive Assistant to CEO</JobRoleStyled>
									<CompanyNameStyled>Lambda</CompanyNameStyled>
									<CompanyLocationStyled>Dubai, United Arab Emirates</CompanyLocationStyled>
									<PostedDateStyled>1 day ago</PostedDateStyled>
								</JobCard>

								<JobCard to="/jobs">
									<div>
										<img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="company logo" />
									</div>
									<JobRoleStyled>Executive Assistant to CEO</JobRoleStyled>
									<CompanyNameStyled>Lambda</CompanyNameStyled>
									<CompanyLocationStyled>Dubai, United Arab Emirates</CompanyLocationStyled>
									<PostedDateStyled>1 day ago</PostedDateStyled>
								</JobCard>

								<JobCard to="/jobs">
									<div>
										<img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="company logo" />
									</div>
									<JobRoleStyled>Executive Assistant to CEO</JobRoleStyled>
									<CompanyNameStyled>Lambda</CompanyNameStyled>
									<CompanyLocationStyled>Dubai, United Arab Emirates</CompanyLocationStyled>
									<PostedDateStyled>1 day ago</PostedDateStyled>
								</JobCard>

								<JobCard to="/jobs">
									<div>
										<img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="company logo" />
									</div>
									<JobRoleStyled>Executive Assistant to CEO</JobRoleStyled>
									<CompanyNameStyled>Lambda</CompanyNameStyled>
									<CompanyLocationStyled>Dubai, United Arab Emirates</CompanyLocationStyled>
									<PostedDateStyled>1 day ago</PostedDateStyled>
								</JobCard>

								<JobCard to="/jobs">
									<div>
										<img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="company logo" />
									</div>
									<JobRoleStyled>Executive Assistant to CEO</JobRoleStyled>
									<CompanyNameStyled>Lambda</CompanyNameStyled>
									<CompanyLocationStyled>Dubai, United Arab Emirates</CompanyLocationStyled>
									<PostedDateStyled>1 day ago</PostedDateStyled>
								</JobCard>

								<JobCard to="/jobs">
									<div>
										<img src="https://img.icons8.com/color/48/000000/user-male-circle.png" alt="company logo" />
									</div>
									<JobRoleStyled>Executive Assistant to CEO</JobRoleStyled>
									<CompanyNameStyled>Lambda</CompanyNameStyled>
									<CompanyLocationStyled>Dubai, United Arab Emirates</CompanyLocationStyled>
									<PostedDateStyled>1 day ago</PostedDateStyled>
								</JobCard>
							</JobListContainer>
						</MainSection>

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
	margin-top: 20px;
	padding: ${small_space};

	a {
		color: ${dark};

		&:hover {
			color: ${primary_color};
		}
	}
`;

const MainSection = styled.section`width: 900px;`;

const JobListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const JobCard = styled(Link)`
	width: 260px;
	height: 190px;
	box-shadow: ${boxShadow};
	padding: ${small_space} ${medium_space};
	margin: 20px;
	background: ${white};
	border-radius: ${borderRadius};
	color: ${dark};

	&:hover {
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.2);
		transition: box-shadow 83ms;
	}
`;

const CompanyNameStyled = styled.p`
	font-size: ${small_font_size};
	margin-bottom: 0.5rem;
`;

const CompanyLocationStyled = styled.h5`
	color: rgba(0, 0, 0, 0.6);
	font-size: ${small_font_size};
	margin-bottom: 0.5rem;
`;

const JobRoleStyled = styled.p`
	font-size: 1.5rem;
	margin: 0;
	text-align: left;
	margin-bottom: 0.5rem;
`;

const PostedDateStyled = styled.p`
	color: rgba(0, 0, 0, 0.6);
	font-size: ${small_font_size};
	margin-bottom: 0.5rem;
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
