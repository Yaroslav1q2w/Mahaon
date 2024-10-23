import { createContext, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import RootRouter from "./routers";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
	MainWrapper,
	ContentWrapper,
	ContentInner,
	GlobalStyles,
} from "./StyledApp";

export const RefsContext = createContext(null);

const App = () => {
	const servicesRef = useRef(null);
	const casesRef = useRef(null);

	return (
		<Provider store={store}>
			<RefsContext.Provider value={{ servicesRef, casesRef }}>
				<BrowserRouter>
					<MainWrapper>
						<GlobalStyles />
						<ContentWrapper>
							<ContentInner>
								<Header />
								<RootRouter />
								<Footer />
							</ContentInner>
						</ContentWrapper>
					</MainWrapper>
				</BrowserRouter>
			</RefsContext.Provider>
		</Provider>
	);
};

export default App;
