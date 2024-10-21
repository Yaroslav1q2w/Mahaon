import React from "react";
import styled from "styled-components";

const StepWrapper = styled.div`
	padding: 20px;
`;

const StepTitle = styled.h2`
	font-size: 24px;
	margin-bottom: 20px;
`;

const OptionGroup = styled.div`
	margin-bottom: 10px;
`;

const OptionLabel = styled.label`
	display: block;
	margin: 5px 0;
`;

const Step3 = () => (
	<StepWrapper>
		<StepTitle>Крок 3: Завершіть бриф</StepTitle>
		<OptionGroup>
			<OptionLabel>
				<input type="radio" name="deadline" /> до 1 місяця
			</OptionLabel>
			<OptionLabel>
				<input type="radio" name="deadline" /> 1-3 місяці
			</OptionLabel>
			{/* Додати інші варіанти... */}
		</OptionGroup>
		<button>Відправити</button>
	</StepWrapper>
);

export default Step3;
