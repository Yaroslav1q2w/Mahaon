import { useSelector } from "react-redux";
import {
	PopupWrapper,
	PopupContent,
	Title,
	InfoText,
	CloseButton,
} from "./StyledPopap";

const Popup = ({ onClose }) => {
	const formData = useSelector((state) => state.form);

	return (
		<PopupWrapper>
			<PopupContent>
				<Title>Дякуємо за заповнення брифу!</Title>
				<InfoText>
					<strong>Ім’я:</strong> {formData.step1.name}
				</InfoText>
				<InfoText>
					<strong>Контакт:</strong> {formData.step1.contact}
				</InfoText>
				<InfoText>
					<strong>Назва компанії:</strong> {formData.step1.company}
				</InfoText>
				<InfoText>
					<strong>Сайт/Соц. мережі:</strong> {formData.step1.website}
				</InfoText>
				<InfoText>
					<strong>Обрані послуги:</strong> {formData.step2.services.join(", ")}
				</InfoText>
				<InfoText>
					<strong>Цілі:</strong> {formData.step2.goals.join(", ")}
				</InfoText>
				<InfoText>
					<strong>Цільова аудиторія:</strong> {formData.step2.audience}
				</InfoText>
				<InfoText>
					<strong>Термін реалізації:</strong> {formData.step3.duration}
				</InfoText>
				<InfoText>
					<strong>Бюджет:</strong> {formData.step3.budget}
				</InfoText>
				<InfoText>
					<strong>Додаткова інформація:</strong> {formData.step3.additionalInfo}
				</InfoText>
				<CloseButton onClick={onClose}>Закрити</CloseButton>
			</PopupContent>
		</PopupWrapper>
	);
};

export default Popup;
