import { useContext } from "react";
import MainStats from "../components/MainStats";
import Cases from "../components/Cases";
import Services from "../components/Services";
import GroupsСompanies from "../components/GroupsСompanies";
import About from "../components/About";
import ContactSection from "../components/ContactSection";
import { RefsContext } from "../App";

const HomePage = () => {
	const { servicesRef, casesRef } = useContext(RefsContext);

	return (
		<>
			<MainStats />
			<Services ref={servicesRef} />
			<Cases ref={casesRef} />
			<GroupsСompanies />
			<About />
			<ContactSection />
		</>
	);
};

export default HomePage;
