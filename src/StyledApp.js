import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif; 
  }

  * {
    box-sizing: inherit;     
		margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
  }
`;

export const MainWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	min-height: 100vh;
	background-color: #1a1a1a;
	margin: 0 auto;
`;

export const ContentInner = styled.div`
	max-width: 1296px;
	width: 100%;
`;

export const ContentWrapper = styled.div`
	flex-grow: 1;
`;
