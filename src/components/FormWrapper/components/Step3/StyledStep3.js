import styled from "styled-components";

export const NumberStep = styled.div`
	display: inline-block;
	background-color: #5b6c84;
	padding: 10px 24px;
	border-radius: 100px;
	font-size: 16px;
	color: #fff;
	font-weight: 600;
	margin-bottom: 64px;
`;

export const QuestionTitle = styled.h3`
	font-size: 16px;
	color: #fff;
	margin-bottom: 16px;
	font-weight: 500;
`;

export const BlockSelected = styled.div`
	margin-bottom: 32px;
`;

export const OptionsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

export const Option = styled.div`
	padding: 10px 24px;
	border: 1px solid
		${({ $selected }) => ($selected ? "transparent" : "#595959")};
	border-radius: 100px;
	color: #595959;
	cursor: pointer;
	font-size: 16px;
	font-weight: 500;
	transition: 0.3s;
	background-color: ${({ $selected }) =>
		$selected ? "#006DFF" : "transparent"};
	color: ${({ $selected }) => ($selected ? "#fff" : "grey")};

	&:hover {
		border-color: #006dff;
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 16px;
	border-radius: 8px;
	border: 1px solid #595959;
	font-size: 16px;
	resize: none;
	outline: none;
	background: none;
	max-width: 640px;
	color: #fff;
`;

export const Button = styled.button`
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

export const ErrorText = styled.p`
	color: red;
	font-size: 13px;
	font-weight: 500;
	display: block;
	margin-top: 6px;
	padding-left: 6px;
`;