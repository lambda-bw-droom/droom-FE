import React from 'react';
import PropTypes from 'prop-types';
import { ButtonPrimaryStyled } from '../../~styles/reuseables';

export const Button = props => {
	const { buttonText, type, onClick } = props;

	return (
		<ButtonPrimaryStyled onClick={onClick} type={type}>
			{buttonText}
		</ButtonPrimaryStyled>
	);
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	type: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
	type: 'button'
};
