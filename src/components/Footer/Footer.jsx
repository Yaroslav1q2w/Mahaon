import { useContext } from "react";
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
import { RefsContext } from "../../App";

const Footer = () => {
	const { servicesRef, casesRef } = useContext(RefsContext);

	const scrollToSection = (ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<FooterWrapper>
			<Link to="/">
				<Logo src={logo} alt="Mahaon Logo" />
			</Link>

			<FooterInner>
				<FooterContainer>
					<LinksContainer>
						<Column>
							<FooterLink onClick={() => scrollToSection(servicesRef)}>
								Послуги
							</FooterLink>
							<FooterLink onClick={() => scrollToSection(casesRef)}>
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
							telegram
						</SocialLink>
						<SocialLink target="_blank" href="https://www.linkedin.com/feed/">
							linkedIn
						</SocialLink>
						<SocialLink target="_blank" href="https://www.facebook.com/">
							facebook
						</SocialLink>
						<SocialLink target="_blank" href="https://www.instagram.com/">
							instagram
						</SocialLink>
					</SocialLinks>
				</FooterContainer>
			</FooterInner>
			<Copyright>&copy; Mahaon, 2024</Copyright>
		</FooterWrapper>
	);
};

export default Footer;
