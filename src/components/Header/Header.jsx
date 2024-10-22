import { useState, useEffect, useContext } from "react";
import {
	HeaderWrapper,
	Logo,
	Menu,
	MenuItem,
	MenuButton,
	MenuIcon,
} from "./StyledHeader";
import logo from "../../assets/images/logo.png";
import { ReactComponent as MenuIconSvg } from "../../assets/images/menu.svg";
import { Link } from "react-router-dom";
import { RefsContext } from "../../App";

const Header = () => {
	const { servicesRef, casesRef } = useContext(RefsContext);
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const scrollToSection = (ref) => {
		console.log(ref);

		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
			closeMenu();
		}
	};

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
	}, [isMenuOpen]);

	return (
		<HeaderWrapper>
			<Link to="/">
				<Logo src={logo} alt="Logo" />
			</Link>
			<Menu $isOpen={isMenuOpen}>
				<MenuItem onClick={() => scrollToSection(servicesRef)}>
					Послуги
				</MenuItem>
				<MenuItem onClick={() => scrollToSection(casesRef)}>Кейси</MenuItem>
				<MenuButton as={Link} to="/brief/step-1" onClick={closeMenu}>
					Заповнити бриф
				</MenuButton>
			</Menu>
			<MenuIcon onClick={toggleMenu}>
				<MenuIconSvg />
			</MenuIcon>
		</HeaderWrapper>
	);
};

export default Header;
