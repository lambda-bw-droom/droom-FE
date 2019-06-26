import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../~common';
import {
	small_space,
	dark,
	white,
	boxShadow,
	medium_space,
	borderRadius,
	primary_color,
	ButtonSecondaryStyled
} from '../~styles/reuseables';

/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const JobDetails = props => {
	const { imgSrc, companyName, location, companySize, linkedIn, website } = props;

	return (
		<JobDetailsStyled>
			<h4>Job details</h4>
			<CompanyDetailsWrapper>
				<div>
					<img src={imgSrc} alt={companyName} />
				</div>
				<ul>
					<li>Company Name {companyName}</li>
					<li>Location: {location}</li>
					<li>Company Size: {companySize}</li>
					<li>
						<a href={linkedIn}>linkedIn: {linkedIn}</a>
					</li>
					<li>
						<a href={website} target="_blank" rel="noopener noreferrer">
							Website: {website}
						</a>
					</li>
					<li>
						<ButtonSecondaryStyled>View Profile</ButtonSecondaryStyled>
					</li>
				</ul>
			</CompanyDetailsWrapper>

			<ActionWrapper>
				<Next buttonText="Next" type="button" onClick={() => console.log('ok')} />
				<SuperLike buttonText="Like" type="button" onClick={() => console.log('ok')} />
			</ActionWrapper>
		</JobDetailsStyled>
	);
};

JobDetails.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	companySize: PropTypes.number.isRequired,
	linkedIn: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired
};

const JobDetailsStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background: ${white};
	min-height: 550px;
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

	h4 {
		margin: ${small_space} 0;
	}
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

const ActionWrapper = styled.div`
	display: flex;

	button {
		width: 120px;
		margin: 10px;
		font-weight: 400;
	}
`;

const SuperLike = styled(Button)``;

const Next = styled(Button)``;
