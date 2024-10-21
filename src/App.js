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

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainWrapper>
					<GlobalStyles />

					<ContentInner>
						<Header />
						<ContentWrapper>
							<RootRouter />
						</ContentWrapper>
						<Footer />
					</ContentInner>
				</MainWrapper>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
