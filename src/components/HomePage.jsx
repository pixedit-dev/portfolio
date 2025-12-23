import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectGrid from "./ProjectGrid";
import Sidebar from "./Sidebar";
import Journey from "./Journey";
import Contact from "./Contact";
import { useState } from "react";
import ScrollToTop from "../utils/ScrollToTop";
import Summary from "./Summary";

const HomePage = () => {
	const [isDark, setIsDark] = useState(true);

	return (
		<div
			className={`bg-linear-to-b ${
				isDark ? "from-[#222425] to-[#3c3d3f]" : "from-[#fff8e1] to-[#d4c7a9]"
			} bg-cover bg-no-repeat bg-fixed`}>
			<header>
				<Navbar setIsDark={setIsDark} isDark={isDark} />
			</header>

			<div className="flex">
				<Sidebar isDark={isDark} />
				<Hero isDark={isDark} />
			</div>
			<div className="container max-w-[1280px] flex-col gap-y-[8rem] mx-auto">
				<About isDark={isDark} />
				<ProjectGrid isDark={isDark} />
				<Journey isDark={isDark} />
				<Contact isDark={isDark} />
				<Summary isDark={isDark} />
				<ScrollToTop isDark={isDark} />
			</div>
		</div>
	);
};

export default HomePage;
