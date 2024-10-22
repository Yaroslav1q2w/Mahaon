import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PrivacyPolicy from "../components/PrivacyPolicy";
import UserAgreement from "../components/UserAgreement";
import FormWrapper from "../components/FormWrapper/FormWrapper";
import Step1 from "../components/FormWrapper/components/Step1";
import Step2 from "../components/FormWrapper/components/Step2";
import Step3 from "../components/FormWrapper/components/Step3";

const RootRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/brief" element={<FormWrapper />}>
				<Route path="step-1" element={<Step1 />} />
				<Route path="step-2" element={<Step2 />} />
				<Route path="step-3" element={<Step3 />} />
			</Route>
			<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			<Route path="/user-agreement" element={<UserAgreement />} />
		</Routes>
	);
};

export default RootRouter;
