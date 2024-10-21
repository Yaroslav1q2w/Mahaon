import {
	CasesWrapper,
	ImageItem,
	Title,
	CasesGrids,
	ItemContent,
	GridItem,
	TitleContent,
	TextContent,
	HeaderContent,
	FooterContent,
	FooterItem,
	FooterText,
	FooterNumber,
	GridTitle,
	GridText,
	MenuButton,
	TitleWrapper,
	MoreCasesWrapper,
	MoreCasesText,
} from "./StyledCases";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

const Cases = () => (
	<CasesWrapper>
		<TitleWrapper>
			<Title>Кейси</Title>
			<MoreCasesWrapper>
				<MoreCasesText>Більше кейсів</MoreCasesText>
				<ArrowRight />
			</MoreCasesWrapper>
		</TitleWrapper>

		<CasesGrids>
			<ImageItem style={{ gridColumn: "span 2" }}>
				<ItemContent>
					<HeaderContent>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</HeaderContent>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Термін виконання</FooterText>
							<FooterNumber>2 місяці</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>
			<ImageItem>
				<ItemContent>
					<HeaderContent>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</HeaderContent>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>

			<ImageItem>
				<ItemContent>
					<HeaderContent>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</HeaderContent>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>
			<GridItem style={{ gridColumn: "span 1" }}>
				<GridTitle>Тут буде твій проект</GridTitle>
				<GridText>Тут буде твій проект</GridText>{" "}
				<MenuButton>Заповнити бриф</MenuButton>
			</GridItem>
			<ImageItem>
				<ItemContent>
					<HeaderContent>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</HeaderContent>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>

			<ImageItem>
				<ItemContent>
					<HeaderContent>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</HeaderContent>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>
			<ImageItem style={{ gridColumn: "span 2" }}>
				<ItemContent>
					<HeaderContent>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</HeaderContent>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Термін виконання</FooterText>
							<FooterNumber>2 місяці</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>
		</CasesGrids>
	</CasesWrapper>
);

export default Cases;
