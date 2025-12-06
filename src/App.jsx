import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
		</main>
	);
};

export default App;
