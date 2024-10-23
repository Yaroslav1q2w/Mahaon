import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 80px;

	@media (max-width: 768px) {
		margin-top: 40px;
	}
`;

export const HeaderCompany = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h4`
	font-size: 32px;
	font-weight: 600;
	color: #595959;
	padding-bottom: 8px;

	.color {
		color: #006dff;
	}
`;

export const Text = styled.p`
	font-size: 16px;
	color: #595959;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export const SliderButtons = styled.div`
	display: flex;
	gap: 8px;
`;

export const NavButton = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #595959;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.3s;

	&:hover {
		background-color: #006dff;
	}

	@media (max-width: 768px) {
		width: 40px;
		height: 40px;
	}
`;

export const CompanySlider = styled.div`
	display: flex;
	position: relative;
	overflow: hidden;
	margin-top: 32px;
`;

export const Card = styled.div`
	background-color: #2c2c2c;
	border-radius: 24px;
	padding: 32px;
	width: 306px;
	min-height: 350px;
	cursor: pointer;
	position: relative;
	transition: transform 0.3s ease-in-out, width 0.3s ease-in-out, z-index 0.3s;
	margin-left: -150px;

	&:first-child {
		margin-left: 0;
	}

	&:not(:last-child) {
		padding-right: 116px;
	}

	&.active {
		width: 700px;
	}

	@media (max-width: 768px) {
		width: 200px;

		&.active {
			max-width: 500px;
			width: 100%;
			padding-right: 150px;
		}
	}
`;

export const CardTitle = styled.h3`
	color: white;
	font-size: 32px;
	font-weight: 700;
`;

export const CardContent = styled.div`
	color: #fff;
	margin-top: 16px;
	p {
		margin-bottom: 32px;
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 8px 10px;

		li {
			font-size: 16px;
			margin-bottom: 8px;
			padding: 12px 16px;
			color: #fff;
			background-color: #595959;
			white-space: nowrap;
			border-radius: 30px;

			@media (max-width: 768px) {
				white-space: wrap;
				border-radius: 12px;
				padding: 8px 10px;
				font-size: 14px;
			}
		}
	}
`;
