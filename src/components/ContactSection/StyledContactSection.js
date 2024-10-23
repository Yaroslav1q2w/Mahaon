import styled from "styled-components";

export const SectionWrapper = styled.div`
	max-width: 1077px;
	width: 100%;
	margin: 0 auto;
`;

export const InnerContent = styled.div`
	display: flex;
	gap: 40px;
	padding: 64px;
	border-radius: 24px;
	background-color: #fff;
	margin-top: 144px;

	@media (max-width: 768px) {
		padding: 64px 32px;
		gap: 16px;
		margin-top: 104px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: 300px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 16px;
	}
`;

export const LeftTitle = styled.h2`
	font-size: 36px;
	font-weight: 700;
	color: #000;
`;

export const Subtitle = styled.p`
	font-size: 18px;
	color: #595959;
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
	color: #595959;
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
