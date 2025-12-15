import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ProjectGrid from "./ProjectGrid";
import Sidebar from "./Sidebar";

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
			<div className="container max-w-[1280px] mx-auto">
				<About />
				<ProjectGrid />
			</div>
		</div>
	);
};

export default HomePage;
