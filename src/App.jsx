import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<main>
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
		</main>
	);
};

export default App;
