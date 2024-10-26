// Step3.js

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStep3 } from "../../../../reducers/form.reducer";
import { useNavigate } from "react-router-dom";
import ThankYouPopup from "../../../Popap";
import {
	NumberStep,
	QuestionTitle,
	BlockSelected,
	OptionsContainer,
	Option,
	TextArea,
	Button,
	ErrorText,
} from "./StyledStep3";

const deadlineOptions = [
	"до 1 місяця",
	"1-3 місяці",
	"3-6 місяців",
	"більше 6 місяців",
];

const budgetOptions = [
	"до 1000 $",
	"1-5 тис $",
	"5-10 тис $",
	"10-20 тис $",
	"більше 20 тис $",
];

const Step3 = () => {
	const [selectedDeadline, setSelectedDeadline] = useState("");
	const [selectedBudget, setSelectedBudget] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");
	const [error, setError] = useState("");
	const [showPopup, setShowPopup] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Отримуємо всі дані з форми із Redux (крім кроку 3)
	const { step1, step2 } = useSelector((state) => state.form);

	const selectSingleOption = (item, setFunction) => {
		setFunction(item);
		setError("");
	};

	const sendToTelegram = async (data) => {
		const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
		const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
		const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

		const text = `
<b>Ім’я:</b> ${data.name}
<b>Контакт:</b> ${data.contact}
<b>Назва компанії:</b> ${data.company}
<b>Сайт/Соц. мережі:</b> ${data.website}
<b>Обрані послуги:</b> ${data.services.join(", ")}
<b>Цілі:</b> ${data.goals.join(", ")}
<b>Цільова аудиторія:</b> ${data.audience}
<b>Термін реалізації:</b> ${data.duration}
<b>Бюджет:</b> ${data.budget}
<b>Додаткова інформація:</b> ${data.additionalInfo}
`.replace(/^\s+/gm, "");

		try {
			await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					chat_id: chatId,
					text: text,
					parse_mode: "HTML",
				}),
			});
		} catch (error) {
			console.error("Error sending message to Telegram:", error);
		}
	};

	const onSubmit = () => {
		if (!selectedBudget) {
			setError("Оберіть будь ласка бюджет проекту");
			return;
		}

		// Оновлюємо дані в Redux для кроку 3
		dispatch(
			updateStep3({
				duration: selectedDeadline,
				budget: selectedBudget,
				additionalInfo,
			})
		);

		// Формуємо об'єкт для відправки
		const updatedFormData = {
			name: step1.name,
			contact: step1.contact,
			company: step1.company,
			website: step1.website,
			services: step2.services,
			goals: step2.goals,
			audience: step2.audience,
			duration: selectedDeadline,
			budget: selectedBudget,
			additionalInfo,
		};

		setShowPopup(true);

		// Відправка даних до Telegram
		sendToTelegram(updatedFormData);
	};

	const closePopup = () => {
		setShowPopup(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
		navigate("/");
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<>
			<NumberStep>3 / 3</NumberStep>

			<BlockSelected>
				<QuestionTitle>Термін реалізації</QuestionTitle>
				<OptionsContainer>
					{deadlineOptions.map((deadline) => (
						<Option
							key={deadline}
							$selected={selectedDeadline === deadline}
							onClick={() => selectSingleOption(deadline, setSelectedDeadline)}>
							{deadline}
						</Option>
					))}
				</OptionsContainer>
			</BlockSelected>

			<BlockSelected>
				<QuestionTitle className="input-required">Бюджет проекту</QuestionTitle>
				<OptionsContainer>
					{budgetOptions.map((budget) => (
						<Option
							key={budget}
							$selected={selectedBudget === budget}
							onClick={() => selectSingleOption(budget, setSelectedBudget)}>
							{budget}
						</Option>
					))}
				</OptionsContainer>
				{error && <ErrorText>{error}</ErrorText>}
			</BlockSelected>

			<BlockSelected>
				<QuestionTitle>Додаткова інформація</QuestionTitle>
				<TextArea
					rows="5"
					value={additionalInfo}
					onChange={(e) => setAdditionalInfo(e.target.value)}
				/>
			</BlockSelected>

			<Button onClick={onSubmit}>Відправити</Button>

			{showPopup && <ThankYouPopup onClose={closePopup} />}
		</>
	);
};

export default Step3;
