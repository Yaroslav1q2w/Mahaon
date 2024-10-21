import {
	SectionWrapper,
	LeftSide,
	LeftTitle,
	Subtitle,
	RightSide,
	Info,
	Title,
	Link,
} from "./StyledContactSection";

const ContactSection = () => {
	return (
		<SectionWrapper>
			<LeftSide>
				<LeftTitle>Зв’язатись з нами</LeftTitle>
				<Subtitle>Залишились питання - пишіть, ми допоможемо</Subtitle>
			</LeftSide>
			<RightSide>
				<Info>
					<Title>Просування в Telegram</Title>
					<Link href="#">@mahaonads</Link>
				</Info>
				<Info>
					<Title>Трафік з інших соц.мереж</Title>
					<Link href="#">@martaterra</Link>
				</Info>
			</RightSide>
		</SectionWrapper>
	);
};

export default ContactSection;
