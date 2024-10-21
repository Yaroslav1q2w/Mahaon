import styled from "styled-components";

export const AboutWrapp = styled.div`
	margin-bottom: 144px;
`;

export const Title = styled.h3`
	font-size: 32px;
	font-weight: 600;
	color: grey;
	line-height: 1;
`;

export const AboutItems = styled.div`
	padding-top: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Item = styled.div`
	background-color: #fff;
	width: 306px;
	height: 160px;
	border-radius: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	filter: grayscale(100%);
	transition: filter 0.3s ease-in-out;

	${Item}:hover & {
		filter: grayscale(0%);
	}
`;
