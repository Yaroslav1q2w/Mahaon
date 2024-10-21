import { AboutWrapp, Title, AboutItems, Item, Image } from "./StyledAbout";

const About = () => {
	return (
		<AboutWrapp>
			<Title>Про нас пишуть</Title>
			<AboutItems>
				<Item>
					<Image
						src={require("../../assets/images/TSN_logo2008 1.png")}
						alt="tsn"
					/>
				</Item>
				<Item>
					<Image
						src={require("../../assets/images/_92632799_ukranian_976x549 2.png")}
						alt="bbc"
					/>
				</Item>
				<Item>
					<Image
						src={require("../../assets/images/RBK-Ukraine_logo 2.png")}
						alt="rbk"
					/>
				</Item>
				<Item>
					<Image
						src={require("../../assets/images/Logo-Blue-18687 3.png")}
						alt="delo"
					/>
				</Item>
			</AboutItems>
		</AboutWrapp>
	);
};

export default About;
