import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<main>
			<header className="flex">
				<Sidebar />
				<Hero />
			</header>
		</main>
	);
};

export default App;
