import styled from "styled-components";

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px 10px;
	position: relative;

	@media (max-width: 768px) {
		padding: 32px 16px;
	}

	@media (max-width: 540px) {
		padding: 16px;
	}
`;

export const Logo = styled.img`
	height: auto;
	width: 52px;
	cursor: pointer;

	@media (max-width: 768px) {
		width: 43px;
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	gap: 32px;
	transition: transform 0.3s ease-in-out;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		position: fixed;
		top: 100px;
		right: 0;
		width: 100%;
		height: 100%;
		background: #1a1a1a;
		padding: 20px;
		gap: 32px;
		z-index: 1000;
		transform: ${({ $isOpen }) =>
			$isOpen ? "translateX(0)" : "translateX(100%)"};
		overflow-y: auto;
		visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
	}
`;

export const MenuItem = styled.a`
	cursor: pointer;
	color: #fff;
	font-size: 16px;
	text-decoration: none;
	font-weight: 500;
	transition: color 0.3s;

	&:hover {
		color: #007bff;
	}
`;

export const MenuButton = styled.button`
	padding: 10px 16px;
	background-color: #007bff;
	color: #fff;
	border: none;
	font-weight: 500;
	font-size: 16px;
	transition: background-color 0.3s;
	text-decoration: none;
	border-radius: 8px;
	cursor: pointer;

	&:hover {
		background-color: #0061e3;
	}
`;

export const MenuIcon = styled.div`
	display: none;
	cursor: pointer;

	@media (max-width: 768px) {
		display: block;
	}
`;
