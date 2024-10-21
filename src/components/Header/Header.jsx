import React, { useState } from "react";
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

const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<HeaderWrapper>
			<Logo src={logo} alt="Logo" />
			<Menu isOpen={isMenuOpen}>
				<MenuItem href="#" onClick={closeMenu}>
					Послуги
				</MenuItem>
				<MenuItem href="#" onClick={closeMenu}>
					Кейси
				</MenuItem>
				<MenuButton onClick={closeMenu}>Заповнити бриф</MenuButton>
			</Menu>
			<MenuIcon onClick={toggleMenu}>
				<MenuIconSvg />
			</MenuIcon>
		</HeaderWrapper>
	);
};

export default Header;
