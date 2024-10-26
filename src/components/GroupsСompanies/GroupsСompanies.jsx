import { useEffect, useState } from "react";
import {
	Wrapper,
	HeaderCompany,
	Title,
	Text,
	SliderButtons,
	CompanySlider,
	NavButton,
	Card,
	CardTitle,
	CardContent,
} from "./StyledGroupsСompanies";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-slider.svg";

const companyData = [
	{
		title: "Terra",
		description:
			"Найбільша партнерська CPA-мережа в Telegram. Арбітраж трафіка з TikTok, Instagram, Facebook, Youtube в Telegram канали за фіксованою ціною.",
		stats: [
			"1000+ веб-майстрів",
			"500+ виконаних замовлень",
			"5 000 000 ₴ рекламного бюджету",
			"5₴ середня вартість підписника",
		],
		background: "#303030",
	},
	{
		title: "Tenzo",
		description:
			"Одна з найбільших та перша автоматизована біржа купівлі та продажу telegram проектів.",
		stats: [
			"5000+ підписників",
			"3000+ потенційних покупців в каналі",
			"542 проектів на продажі",
		],
		background: "#626262",
	},
	{
		title: "Інспектор",
		description:
			"Перша та найбільша система перевірки репутації та захисту від шахрайства.",
		stats: [
			"5700+ підписників",
			"1092 шахраїв заблоковано",
			"3 роки роботи",
			"7000+ користувачів в боті",
		],
		background: "#2b2b2b",
	},
	{
		title: "Telebox",
		description:
			"Перша екосистема ботів помічників для адміністраторів каналів",
		stats: [
			"6 ботів",
			"125 000 + користувачів",
			"925 проектів підключено до наших ботів",
		],
		background: "#303030",
	},
	{
		title: "Avangard",
		description: "Найбільша веб-студія по розробці telegram-ботів",
		stats: [
			"86 клієнтів",
			"98 проектів розроблено",
			"більше 1 000 000 користувачів в ботах клієнтів",
		],
		background: "#404040",
	},
];

const GroupsСompanies = () => {
	const [activeIndex, setActiveIndex] = useState(2);
	const [isContentVisible, setContentVisible] = useState(false);

	useEffect(() => {
		setContentVisible(true);
	}, [activeIndex]);

	const handlePrev = () => {
		setContentVisible(false);
		setTimeout(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === 0 ? companyData.length - 1 : prevIndex - 1
			);
			setContentVisible(true);
		}, 300);
	};

	const handleNext = () => {
		setContentVisible(false);
		setTimeout(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === companyData.length - 1 ? 0 : prevIndex + 1
			);
			setContentVisible(true);
		}, 300);
	};

	return (
		<Wrapper>
			<HeaderCompany>
				<div>
					<Title>
						Mahaon входить <span className="color">в групу компаній</span>
					</Title>
					<Text>Поєднайте досвід фахівців лідуючих проектів</Text>
				</div>
				<SliderButtons>
					<NavButton
						style={{ transform: "rotate(180deg)" }}
						onClick={handlePrev}>
						<ArrowIcon />
					</NavButton>
					<NavButton onClick={handleNext}>
						<ArrowIcon />
					</NavButton>
				</SliderButtons>
			</HeaderCompany>

			<CompanySlider>
				{companyData.map((company, index) => (
					<Card
						key={index}
						className={index === activeIndex ? "active" : ""}
						onClick={() => {
							setContentVisible(false);
							setTimeout(() => {
								setActiveIndex(index);
								setContentVisible(true);
							}, 300);
						}}
						style={{ background: company.background }}>
						<CardTitle>{company.title}</CardTitle>
						<CardContent
							className={
								isContentVisible && index === activeIndex ? "show" : ""
							}>
							<p>{company.description}</p>
							<ul>
								{company.stats.map((stat, statIndex) => (
									<li key={statIndex}>{stat}</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</CompanySlider>
		</Wrapper>
	);
};

export default GroupsСompanies;
