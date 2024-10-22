import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStep2 } from "../../../../reducers/form.reducer";
import { useNavigate } from "react-router-dom";
import {
	NumberStep,
	QuestionTitle,
	BlockSelected,
	OptionsContainer,
	Option,
	Button,
} from "./StyledStep2";

const servicesOptions = [
	"Медіабаїнг",
	"Telegram Ads",
	"Зовнішній трафік",
	"Канал під ключ",
	"Контент-маркетинг",
	"Розробка чат-ботів",
];

const goalsOptions = [
	"Впізнаваність бренду",
	"Підтримка репутації",
	"Створення популярної і активної спільноти",
	"Комунікація зі споживачами, зворотний зв’язок",
	"Підвищення лояльності споживачів",
	"Зростання трафіку на сайт",
	"Запуск нового бренду",
	"Підтримка іміджу, підвищення конкурентоспроможності",
	"Інше",
];

const audienceOptions = ["До 18 років", "18-25", "26-34", "35-49", "50+ років"];

const Step2 = () => {
	const [selectedServices, setSelectedServices] = useState([]);
	const [selectedGoals, setSelectedGoals] = useState([]);
	const [selectedAudience, setSelectedAudience] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const toggleSelection = (item, setFunction, selectedItems) => {
		if (selectedItems.includes(item)) {
			setFunction(selectedItems.filter((i) => i !== item));
		} else {
			setFunction([...selectedItems, item]);
		}
	};

	const selectSingleOption = (item, setFunction) => {
		setFunction(item);
	};

	const onSubmit = () => {
		dispatch(
			updateStep2({
				services: selectedServices,
				goals: selectedGoals,
				audience: selectedAudience,
			})
		);
		navigate("/brief/step-3");
	};

	return (
		<>
			<NumberStep>2 / 3</NumberStep>

			<BlockSelected>
				<QuestionTitle>Оберіть послуги які вас цікавлять</QuestionTitle>
				<OptionsContainer>
					{servicesOptions.map((service) => (
						<Option
							key={service}
							$selected={selectedServices.includes(service)}
							onClick={() =>
								toggleSelection(service, setSelectedServices, selectedServices)
							}>
							{service}
						</Option>
					))}
				</OptionsContainer>
			</BlockSelected>

			<BlockSelected>
				<QuestionTitle>Які цілі ви ставите перед собою</QuestionTitle>
				<OptionsContainer>
					{goalsOptions.map((goal) => (
						<Option
							key={goal}
							$selected={selectedGoals.includes(goal)}
							onClick={() =>
								toggleSelection(goal, setSelectedGoals, selectedGoals)
							}>
							{goal}
						</Option>
					))}
				</OptionsContainer>
			</BlockSelected>

			<BlockSelected>
				<QuestionTitle>Цільова аудиторія</QuestionTitle>
				<OptionsContainer>
					{audienceOptions.map((audience) => (
						<Option
							key={audience}
							$selected={selectedAudience === audience}
							onClick={() => selectSingleOption(audience, setSelectedAudience)}>
							{audience}
						</Option>
					))}
				</OptionsContainer>
			</BlockSelected>

			<Button onClick={onSubmit}>Продовжити</Button>
		</>
	);
};

export default Step2;
