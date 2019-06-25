import styled from 'styled-components';
import { normal_space, base_font_size, primary_color, boxShadow, borderRadius, dark, light } from '../index';

export const InputStyled = styled.input`
	width: 100%;
	height: 32px;
	appearance: none;
	display: block;
	padding: ${normal_space};
	border-radius: ${borderRadius};
	font-size: ${base_font_size};
	font-weight: 600;
	border: 1px solid ${dark};
	background-color: unset;
	outline: none;
	transition: all 200ms ease-in-out;
	color: ${dark};

	&::placeholder {
		color: ${light};
	}

	&:focus,
	&:checked {
		border: 1px solid ${primary_color};
		box-shadow: ${boxShadow};
	}
`;
