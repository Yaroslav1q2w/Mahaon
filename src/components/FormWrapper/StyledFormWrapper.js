import styled from "styled-components";

export const BriefWrapper = styled.div`
	margin-top: 64px;
	padding: 0 10px;

	@media (max-width: 768px) {
		padding: 0 16px;
	}
`;

export const StepTitle = styled.h2`
	font-size: 54px;
	color: #fff;
	margin-bottom: 8px;
	font-weight: 700;

	@media (max-width: 560px) {
		font-size: 32px;
	}
`;

export const StepText = styled.p`
	font-size: 16px;
	color: #fff;
	line-height: 1.2;
	padding-bottom: 32px;
`;
