import { useState } from "react";
import { useDispatch } from "react-redux";
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

	const selectSingleOption = (item, setFunction) => {
		setFunction(item);
		setError("");
	};

	const onSubmit = () => {
		if (!selectedBudget) {
			setError("Оберіть будь ласка бюджет проекту");
			return;
		}

		dispatch(
			updateStep3({
				duration: selectedDeadline,
				budget: selectedBudget,
				additionalInfo,
			})
		);
		setShowPopup(true);
	};

	const closePopup = () => {
		setShowPopup(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
		navigate("/");
	};

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
				<QuestionTitle>Бюджет проекту *</QuestionTitle>
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
