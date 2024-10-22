import styled from "styled-components";
import backgroundImage from "../../assets/images/img.jpg";

export const CasesWrapper = styled.div`
	padding: 80px 10px 0;

	@media (max-width: 768px) {
		padding: 80px 16px 0;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 32px;
	padding: 0 10px;
`;

export const MoreCasesWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	transition: gap 0.3s;

	&:hover {
		gap: 20px;
	}

	svg {
		width: 33px;
		fill: #fff;
	}
`;

export const MoreCasesText = styled.p`
	font-size: 18px;
	font-weight: 600;
	color: #fff;
`;

export const Title = styled.h2`
	font-size: 32px;
	font-weight: 600;
	color: grey;
`;

export const CasesGrids = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 24px;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`;

export const ImageItem = styled.div`
	position: relative;
	background-size: cover;
	background-position: center;
	height: 350px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;
	background-image: url(${backgroundImage});
	border-radius: 24px;

	&:hover::before {
		opacity: 0.7;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.9);
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	&.span-2 {
		grid-column: span 2;

		@media (max-width: 1024px) {
			grid-column: span 1;
		}
	}
`;

export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 350px;
`;

export const GridTitle = styled.h4`
	font-size: 32px;
	font-weight: 700;
	text-align: center;
	color: #fff;
`;

export const GridText = styled.p`
	color: grey;
	font-size: 24px;
	padding-top: 6px;
`;

export const MenuButton = styled.button`
	padding: 10px 16px;
	background-color: #007bff;
	color: #fff;
	border: none;
	font-weight: 500;
	font-size: 16px;
	transition: background-color 0.3s;
	border-radius: 8px;
	cursor: pointer;
	margin-top: 32px;
	text-decoration: none;

	&:hover {
		background-color: #0061e3;
	}
`;

export const ItemContent = styled.div`
	position: relative;
	z-index: 2;
	color: #fff;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	padding: 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;

	${ImageItem}:hover & {
		opacity: 1;
	}
`;

export const TitleContent = styled.h4`
	font-size: 34px;
	font-weight: 600;
`;

export const TextContent = styled.p`
	font-size: 16px;
	padding-top: 4px;
`;

export const FooterContent = styled.div`
	display: flex;
	gap: 43px;
`;

export const FooterItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	&.additional-text {
		@media (max-width: 748px) {
			display: none;
		}
	}
`;

export const FooterText = styled.p`
	font-size: 16px;
`;

export const FooterNumber = styled.p`
	font-size: 28px;
	font-weight: 600;
`;
