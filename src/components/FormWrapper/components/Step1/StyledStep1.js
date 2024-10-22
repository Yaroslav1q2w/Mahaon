import styled from "styled-components";

export const NumberStep = styled.div`
	display: inline-block;
	background-color: #5b6c84;
	padding: 10px 24px;
	border-radius: 100px;
	font-size: 16px;
	color: #fff;
	font-weight: 600;
`;

export const Form = styled.form`
	margin-top: 64px;
	width: 100%;
`;

export const InnerForm = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px 24px;
	max-width: 640px;

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
		gap: 24px;
	}
`;

export const Label = styled.label`
	display: block;
	cursor: pointer;
`;

export const InputText = styled.p`
	font-size: 16px;
	color: #fff;
	padding-bottom: 8px;

	&.input-required::after {
		content: "*";
		color: #ff0000;
		padding-left: 6px;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 12px;
	border: 1px solid #595959;
	background: none;
	border-radius: 8px;
	outline: none;
	color: #fff;
`;

export const ErrorText = styled.span`
	color: red;
	font-size: 13px;
	font-weight: 500;
	display: block;
	margin-top: 6px;
	padding-left: 6px;
`;

export const Button = styled.button`
	margin-top: 32px;
	background-color: #006dff;
	border-radius: 100px;
	font-size: 16px;
	padding: 16px 24px;
	border: none;
	color: #fff;
	display: inline-block;

	transition: background-color 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: #0061e3;
	}
`;
