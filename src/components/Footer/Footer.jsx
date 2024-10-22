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
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<FooterWrapper>
			<Link to="/">
				<Logo src={logo} alt="Mahaon Logo" />
			</Link>

			<FooterInner>
				<FooterContainer>
					<LinksContainer>
						<Column>
							<FooterLink as={Link} to="/">
								Послуги
							</FooterLink>
							<FooterLink as={Link} to="/">
								Кейси
							</FooterLink>
						</Column>
						<Column>
							<FooterLink as={Link} to="/privacy-policy">
								Політика конфіденційності
							</FooterLink>
							<FooterLink as={Link} to="/user-agreement">
								Угода користувача
							</FooterLink>
						</Column>
					</LinksContainer>

					<SocialLinks>
						<SocialLink target="_blank" href="https://web.telegram.org/a/">
							Telegram
						</SocialLink>
						<SocialLink target="_blank" href="https://www.linkedin.com/feed/">
							LinkedIn
						</SocialLink>
						<SocialLink target="_blank" href="https://www.facebook.com/">
							Facebook
						</SocialLink>
						<SocialLink target="_blank" href="https://www.instagram.com/">
							Instagram
						</SocialLink>
					</SocialLinks>
				</FooterContainer>
			</FooterInner>
			<Copyright>&copy; Mahaon, 2024</Copyright>
		</FooterWrapper>
	);
};

export default Footer;
