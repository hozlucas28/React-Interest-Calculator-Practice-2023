import styled from 'styled-components';
import { useField } from 'formik';

const Control = styled.div`
	margin-bottom: 20px;
`;

const Label = styled.label`
	margin-bottom: 5px;
	display: block;
	color: var(--color-text);
`;

const MyInput = styled.input`
	width: 100%;
	margin-bottom: 5px;
	padding: 8px;
	border: solid 1px #b1b3b5;
	outline: none;

	&:focus-visible {
		border-color: var(--color-highlight);
	}
`;

const ErrorMessage = styled.div`
	color: var(--color-error);
`;

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<Control>
			<Label>{label}</Label>
			<MyInput
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<ErrorMessage>{meta.error}</ErrorMessage>
			) : null}
		</Control>
	);
};

export default Input;
