import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 64px 0;
	color: #fff;
`;

export const Title = styled.div`
	font-size: 32px;
	font-weight: 600;
	padding-bottom: 32px;
`;

export const SubTitle = styled.div`
	font-size: 24px;
	padding: 32px 0;
	font-weight: 600;
`;

export const Text = styled.div`
	padding-bottom: 20px;
`;

export const NumberedList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-left: 20px;
`;

export const NumberedItem = styled.div`
	display: flex;
	align-items: baseline;
	gap: 8px;
	padding-left: ${({ $paddingLeft }) => $paddingLeft || "0"};
`;

export const ItemText = styled.span`
	padding-left: 4px;
`;
