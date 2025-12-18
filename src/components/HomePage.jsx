import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectGrid from "./ProjectGrid";
import Sidebar from "./Sidebar";
import Journey from "./Journey";
import Contact from "./Contact";

const HomePage = () => {
	return (
		<div>
			<header>
				<Navbar />
			</header>

			<div className="flex">
				<Sidebar />
				<Hero />
			</div>
			<div className="container max-w-[1280px] flex-col gap-y-[8rem] mx-auto">
				<About />
				<ProjectGrid />
				<Journey />
				<Contact />
			</div>
		</div>
	);
};

export default HomePage;
