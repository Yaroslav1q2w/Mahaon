import styled from "styled-components";

export const FooterWrapper = styled.footer`
	color: #fff;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	margin: 144px 0 50px;

	@media (max-width: 768px) {
		padding: 0 16px;
	}
`;

export const FooterInner = styled.div`
	padding-top: 36px;
`;

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;
	align-items: flex-start;
	margin-bottom: 40px;

	@media (max-width: 1022px) {
		flex-direction: column;
		align-items: center;
		gap: 32px;
	}

	@media (max-width: 580px) {
		align-items: start;
	}
`;

export const Logo = styled.img`
	width: 54px;
`;

export const LinksContainer = styled.div`
	display: flex;
	gap: 80px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const FooterLink = styled.a`
	color: #fff;
	text-decoration: none;
	font-size: 16px;
	transition: color 0.3s;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		color: #007bff;
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 20px;

	@media (max-width: 768px) {
		justify-content: center;
		margin-bottom: 20px;
		flex-wrap: wrap;
	}

	@media (max-width: 580px) {
		justify-content: start;
	}
`;

export const SocialLink = styled.a`
	color: #fff;
	text-decoration: none;
	font-size: 16px;
	transition: background-color 0.3s;
	cursor: pointer;
	background-color: #5b6c84;
	padding: 10px 24px;
	border-radius: 50px;
	font-weight: 500;

	&:hover {
		background-color: #006dff;
	}
`;

export const Copyright = styled.div`
	font-size: 16px;
	font-weight: 600;
	color: #595959;
	margin-top: 32px;
	text-align: left;
`;
