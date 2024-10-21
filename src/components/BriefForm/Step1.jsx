import React from "react";
import styled from "styled-components";

const StepWrapper = styled.div`
	padding: 20px;
`;

const StepTitle = styled.h2`
	font-size: 24px;
	margin-bottom: 20px;
`;

const InputWrapper = styled.div`
	margin-bottom: 10px;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 5px;
`;

const Input = styled.input`
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const Step1 = () => (
	<StepWrapper>
		<StepTitle>Крок 1: Введіть ваші дані</StepTitle>
		<InputWrapper>
			<Label>Ім’я *</Label>
			<Input type="text" />
		</InputWrapper>
		<InputWrapper>
			<Label>Контакт для зв’язку *</Label>
			<Input type="text" />
		</InputWrapper>
		<InputWrapper>
			<Label>Назва компанії</Label>
			<Input type="text" />
		</InputWrapper>
		<InputWrapper>
			<Label>Посилання на сайт або соц мережі</Label>
			<Input type="text" />
		</InputWrapper>
		<button>Продовжити</button>
	</StepWrapper>
);

export default Step1;
