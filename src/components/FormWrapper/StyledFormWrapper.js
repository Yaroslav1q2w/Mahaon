import styled from "styled-components";

export const BriefWrapper = styled.div`
	margin-top: 64px;
`;

export const StepTitle = styled.h2`
	font-size: 64px;
	color: #fff;
	margin-bottom: 8px;
	font-weight: 800;

	@media (max-width: 560px) {
		font-size: 32px;
	}
`;

export const StepText = styled.p`
	font-size: 16px;
	color: #fff;
	line-height: 1.2;
	padding-bottom: 32px;
	font-weight: 500;
`;
