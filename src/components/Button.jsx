import styled from 'styled-components';

const Button = styled.button`
	padding: 0.25em 1em;
	color: var(--color-button-text);
	font-size: 1em;
	border: 2px solid var(--color-button);
	border-radius: 3px;
	background-color: var(--color-button);
	cursor: pointer;
	width: 100%;
	transition: background-color 0.1s ease-out, border-color 0.1s ease-out;

	&:hover {
		background-color: var(--color-button-hover);
		border-color: var(--color-button-hover);
	}
`;

export default Button;
