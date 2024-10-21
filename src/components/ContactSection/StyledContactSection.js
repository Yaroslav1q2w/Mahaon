import styled from "styled-components";

export const SectionWrapper = styled.div`
	display: flex;
	justify-content: start;
	align-items: flex-start;
	padding: 40px;
	max-width: 1077px;
	width: 100%;
	margin: 0 auto;
	border-radius: 24px;
	background-color: #fff;
	padding: 64px;
	gap: 40px;
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 300px;
`;

export const LeftTitle = styled.h2`
	font-size: 36px;
	font-weight: 700;
	color: #000;
`;

export const Subtitle = styled.p`
	font-size: 18px;
	color: grey;
`;

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;

	&:not(:last-child) {
		border-bottom: 1px solid #e0e0e0;
		padding-bottom: 16px;
	}
`;

export const Title = styled.h3`
	font-size: 22px;
	font-weight: 500;
	color: grey;
	padding-bottom: 8px;
`;

export const Link = styled.a`
	font-size: 24px;
	font-weight: 500;
	color: #000;
	text-decoration: none;
	transition: color 0.3s ease-in-out;

	&:hover {
		color: #006dff;
	}
`;
