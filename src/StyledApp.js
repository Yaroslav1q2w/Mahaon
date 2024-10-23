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
	min-height: 100vh;
	background-color: #1a1a1a;
`;

export const ContentWrapper = styled.div`
	padding: 0 16px;
	width: 100%;
`;

export const ContentInner = styled.div`
	max-width: 1296px;
	margin: 0 auto;
`;
