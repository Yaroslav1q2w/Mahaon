import React from "react";
import MainStats from "../components/MainStats";
import Cases from "../components/Cases";
import Services from "../components/Services";
import GroupsСompanies from "../components/GroupsСompanies";
import About from "../components/About";
import ContactSection from "../components/ContactSection";

const HomePage = () => (
	<>
		<MainStats />
		<Services />
		<Cases />
		<GroupsСompanies />
		<About />
		<ContactSection />
	</>
);

export default HomePage;
