import {
	FooterWrapper,
	FooterContainer,
	FooterInner,
	Logo,
	LinksContainer,
	Column,
	FooterLink,
	SocialLinks,
	SocialLink,
	Copyright,
} from "./StyledFooter";
import logo from "../../assets/images/logo.png";

const Footer = () => {
	return (
		<FooterWrapper>
			<Logo src={logo} alt="Mahaon Logo" />

			<FooterInner>
				<FooterContainer>
					<LinksContainer>
						<Column>
							<FooterLink href="#">Послуги</FooterLink>
							<FooterLink href="#">Кейси</FooterLink>
						</Column>
						<Column>
							<FooterLink href="#">Політика конфіденційності</FooterLink>
							<FooterLink href="#">Угода користувача</FooterLink>
						</Column>
					</LinksContainer>

					<SocialLinks>
						<SocialLink href="#">Telegram</SocialLink>
						<SocialLink href="#">LinkedIn</SocialLink>
						<SocialLink href="#">Facebook</SocialLink>
						<SocialLink href="#">Instagram</SocialLink>
					</SocialLinks>
				</FooterContainer>
			</FooterInner>
			<Copyright>&copy; Mahaon, 2024</Copyright>
		</FooterWrapper>
	);
};

export default Footer;
