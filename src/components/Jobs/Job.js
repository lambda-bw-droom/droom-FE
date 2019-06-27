import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	small_space,
	dark,
	white,
	boxShadow,
	medium_space,
	borderRadius,
	small_font_size
} from '../~styles/reuseables';

/**
 * This is a dumb component with no logic
 *
 * @param {*} props
 * @returns {object}
 */
export const Job = props => {
	const { imgSrc, role, companyName, location, postedDate } = props;

	return (
		<JobCard to="/jobs">
			<Animated animationIn="zoomInDown" isVisible={true}>
				<div>
					<img src={imgSrc} alt={companyName} />
				</div>
				<JobRoleStyled>{role}</JobRoleStyled>
				<CompanyNameStyled>{companyName}</CompanyNameStyled>
				<CompanyLocationStyled>{location}</CompanyLocationStyled>
				<PostedDateStyled>{postedDate}</PostedDateStyled>
			</Animated>
		</JobCard>
	);
};

Job.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	postedDate: PropTypes.any
};

const JobCard = styled(Link)`
	width: 250px;
	height: 250px;
	box-shadow: ${boxShadow};
	padding: ${small_space} ${medium_space};
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
