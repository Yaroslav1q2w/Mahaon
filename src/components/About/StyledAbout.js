import styled from "styled-components";

export const AboutWrapp = styled.div`
	margin-top: 80px;

	@media (max-width: 768px) {
		margin-top: 40px;
	}
`;

export const Title = styled.h3`
	font-size: 32px;
	font-weight: 700;
	color: #595959;
	line-height: 1;
`;

export const AboutItems = styled.div`
	padding-top: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;

	@media (max-width: 1024px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		gap: 30px;
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 21px;
	}
`;

export const Item = styled.div`
	background-color: #fff;
	width: 306px;
	height: 160px;
	border-radius: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	filter: grayscale(100%);
	transition: filter 0.3s ease-in-out;

	${Item}:hover & {
		filter: grayscale(0%);
	}
`;
