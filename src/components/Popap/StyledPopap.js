import styled from "styled-components";

export const PopupWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: flex-start;
	overflow-y: auto;
	padding: 40px 16px;
	z-index: 1000;
`;

export const PopupContent = styled.div`
	background: #fff;
	padding: 32px;
	border-radius: 16px;
	width: 90%;
	max-width: 500px;
	text-align: center;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

	@media (max-width: 540px) {
		padding: 16px;
	}
`;

export const Title = styled.h2`
	font-size: 24px;
	font-weight: 800;
	color: #333;
	margin-bottom: 16px;
`;

export const InfoText = styled.p`
	font-size: 16px;
	color: #666;
	margin-bottom: 8px;

	& strong {
		color: #333;
	}
`;

export const CloseButton = styled.button`
	margin-top: 30px;
	background-color: #006dff;
	border-radius: 100px;
	font-size: 16px;
	font-weight: 600;
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
