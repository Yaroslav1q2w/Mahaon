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

const Step2 = () => (
	<StepWrapper>
		<StepTitle>Крок 2: Оберіть послуги</StepTitle>
		<OptionGroup>
			<OptionLabel>
				<input type="checkbox" /> Медіабаїнг
			</OptionLabel>
			<OptionLabel>
				<input type="checkbox" /> Telegram Ads
			</OptionLabel>
			<OptionLabel>
				<input type="checkbox" /> Зовнішній трафік
			</OptionLabel>
			{/* Додати інші варіанти... */}
		</OptionGroup>
		<button>Продовжити</button>
	</StepWrapper>
);

export default Step2;
