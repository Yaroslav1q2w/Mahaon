import { Outlet } from "react-router-dom";
import { BriefWrapper, StepText, StepTitle } from "./StyledFormWrapper";

const FormWrapper = () => {
	return (
		<BriefWrapper>
			<StepTitle>Заповнити бриф</StepTitle>
			<StepText>
				Дайте відповідь на декілька запитань і ми зв’яжемось з вами у робочий
				час
			</StepText>
			<Outlet />
		</BriefWrapper>
	);
};

export default FormWrapper;
