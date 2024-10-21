import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Step1 from "../components/BriefForm/Step1";
import Step2 from "../components/BriefForm/Step2";
import Step3 from "../components/BriefForm/Step3";

const RootRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/brief/step-1" element={<Step1 />} />
			<Route path="/brief/step-2" element={<Step2 />} />
			<Route path="/brief/step-3" element={<Step3 />} />
		</Routes>
	);
};

export default RootRouter;
