import {
	StatsWrapper,
	StatItem,
	Wrapper,
	Title,
	Color,
	Text,
	BackgroundWrapper,
	InnerContent,
	ItemText,
	ItemNumber,
} from "./StyledMainStats";

const MainStats = () => (
	<Wrapper>
		<BackgroundWrapper />
		<InnerContent>
			<Title>
				Перша <br /> telegram-агенція <br /> <Color>повного циклу</Color>
			</Title>
			<Text>Будуємо комунікацію користувачів з брендами</Text>
			<StatsWrapper>
				<StatItem>
					<ItemText>Років досвіду</ItemText> <ItemNumber>5</ItemNumber>
				</StatItem>
				<StatItem>
					<ItemText>Виконано проекті:</ItemText> <ItemNumber>149</ItemNumber>
				</StatItem>
				<StatItem>
					<ItemText>Привели підписників</ItemText>
					<ItemNumber>6 000 000</ItemNumber>
				</StatItem>
				<StatItem>
					<ItemText>Рекламний бюджет</ItemText>
					<ItemNumber>43 000 000 ₴</ItemNumber>
				</StatItem>
			</StatsWrapper>
		</InnerContent>
	</Wrapper>
);

export default MainStats;
