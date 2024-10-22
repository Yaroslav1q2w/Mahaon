import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";

export const ServicesWrapper = styled.div`
	padding: 0 10px;

	@media (max-width: 768px) {
		padding: 0 16px;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h2`
	font-size: 32px;
	letter-spacing: 1px;
	color: grey;
	font-weight: 600;
`;

export const Slider = styled(Swiper)`
	margin-top: 32px;
`;

export const ServiceItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: #171717;
	padding: 32px;
	border-radius: 24px;
	min-height: 240px;
	height: 100%;
	cursor: pointer;
`;

export const SliderButtons = styled.div`
	display: flex;
	gap: 8px;
`;

export const NavButton = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: grey;
	border: none;
	cursor: pointer;
	position: relative;
	transition: background-color 0.3s;

	&.swiper-button-prev {
		transform: rotate(180deg);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.swiper-button-next {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&:hover {
		background-color: #006dff;
	}
`;

export const Icon = styled.div`
	width: 60px;
	height: 60px;

	svg {
		width: 100%;
		height: 100%;
		fill: #2c2c2c;

		&:hover {
			fill: red;
		}
	}
`;

export const ServiceTitle = styled.h3`
	font-size: 24px;
	padding-top: 24px;
	color: #fff;
	font-weight: 600;
`;

export const ServiceText = styled.p`
	font-size: 14px;
	color: #666;
	text-align: start;
	padding-top: 8px;
	font-weight: 400;
`;
