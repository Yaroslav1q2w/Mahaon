import styled from "styled-components";
import backgroundImage from "../../assets/images/m.png";

export const Wrapper = styled.div`
	position: relative;
	padding-top: 144px;

	@media (max-width: 768px) {
		padding-top: 90px;
	}

	@media (max-width: 580px) {
		padding-top: 64px;
	}
`;

export const BackgroundWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: auto;
	right: 40px;
	bottom: 0;
	background-image: url(${backgroundImage});
	background-size: contain;
	background-position: top right;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	max-width: 1000px;
	z-index: 1;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const InnerContent = styled.div`
	position: relative;
	z-index: 2;

	@media (max-width: 768px) {
		padding-top: 16px;
	}
`;

export const Title = styled.h1`
	font-size: 64px;
	line-height: 78px;
	color: #fff;
	font-weight: 800;
	padding-bottom: 16px;

	@media (max-width: 768px) {
		font-size: 36px;
		line-height: 1.3;
		padding-bottom: 8px;
	}
`;

export const Color = styled.span`
	color: #006dff;
`;

export const Text = styled.p`
	color: #8a8a8a;
	font-size: 18px;
	line-height: 21.94px;
	text-align: left;
	font-weight: 400;
	padding-bottom: 128px;

	@media (max-width: 768px) {
		font-size: 14px;
		line-height: 20px;
	}
`;

export const StatsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px;
	background-color: rgba(65, 65, 65, 0.5);
	border-radius: 24px;
	backdrop-filter: blur(6px);

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 16px;
	}
`;

export const StatItem = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 10px;

	@media (max-width: 768px) {
		gap: 8px;
	}
`;

export const ItemText = styled.p`
	color: #8a8a8a;
	font-size: 16px;
	font-weight: 600;
`;

export const ItemNumber = styled.p`
	color: #fff;
	font-size: 32px;
	font-weight: 700;
`;
