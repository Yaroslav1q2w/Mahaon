import { forwardRef } from "react";
import {
	CasesWrapper,
	ImageItem,
	Title,
	CasesGrids,
	ItemContent,
	GridItem,
	TitleContent,
	TextContent,
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
import { Link } from "react-router-dom";

const Cases = forwardRef((props, ref) => (
	<CasesWrapper ref={ref}>
		<TitleWrapper>
			<Title>Кейси</Title>
			<MoreCasesWrapper>
				<MoreCasesText>Більше кейсів</MoreCasesText>
				<ArrowRight />
			</MoreCasesWrapper>
		</TitleWrapper>

		<CasesGrids>
			<ImageItem className="span-2">
				<ItemContent>
					<div>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</div>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
						<FooterItem className="additional-text">
							<FooterText>Термін виконання</FooterText>
							<FooterNumber>2 місяці</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>
			<ImageItem>
				<ItemContent>
					<div>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</div>
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
					<div>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</div>
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
			<GridItem>
				<GridTitle>Тут буде твій проект</GridTitle>
				<GridText>Кожен проект додаємо у кейси</GridText>
				<MenuButton as={Link} to="/brief/step-1">
					Заповнити бриф
				</MenuButton>
			</GridItem>
			<ImageItem>
				<ItemContent>
					<div>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</div>
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
					<div>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</div>
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
			<ImageItem className="span-2">
				<ItemContent>
					<div>
						<TitleContent>Starjob</TitleContent>
						<TextContent>Мережа каналів для пошуку роботи</TextContent>
					</div>
					<FooterContent>
						<FooterItem>
							<FooterText>Підписників</FooterText>
							<FooterNumber>125 000</FooterNumber>
						</FooterItem>
						<FooterItem>
							<FooterText>Бюджет</FooterText>
							<FooterNumber>1 250 000₴</FooterNumber>
						</FooterItem>
						<FooterItem className="additional-text">
							<FooterText>Термін виконання</FooterText>
							<FooterNumber>2 місяці</FooterNumber>
						</FooterItem>
					</FooterContent>
				</ItemContent>
			</ImageItem>
		</CasesGrids>
	</CasesWrapper>
));

export default Cases;
