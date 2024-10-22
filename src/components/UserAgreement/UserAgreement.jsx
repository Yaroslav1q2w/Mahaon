import { useEffect } from "react";
import { Title, Wrapper, Text } from "./StyledUserAgreement";

const UserAgreement = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<Wrapper>
			<Title>Угода користувача</Title>
			<Text>
				Tenzo.com (далі - «‎ми», «наш», «нас», «tenzo.com» ) - біржа
				Telegram-каналів, яка надає послуги з реалізації та/або просування
				реалізації Telegram-каналу користувачів.
			</Text>

			<Text>
				Ми, у Tenzo.com, створили цю Політику конфіденційності, мета якої –
				допомогти вам зрозуміти, які дані ми збираємо, для чого ми їх
				використовуємо та як ви можете реалізувати свої права. Важливо уважно
				прочитати цю Політику конфіденційності та чітко її зрозуміти, тому ми
				сподіваємося, що ви приділите їй час та увагу.
			</Text>

			<Text>
				Ваша конфіденційність та безпека мають першочергове значення для нас. Ми
				прагнемо захищати дані, якими ви ділитеся з нами.
			</Text>
		</Wrapper>
	);
};

export default UserAgreement;
