import {
	SectionWrapper,
	LeftSide,
	LeftTitle,
	Subtitle,
	RightSide,
	Info,
	Title,
	Link,
	InnerContent,
} from "./StyledContactSection";

const ContactSection = () => {
	return (
		<SectionWrapper>
			<InnerContent>
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
			</InnerContent>
		</SectionWrapper>
	);
};

export default ContactSection;
