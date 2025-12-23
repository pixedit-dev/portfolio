import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
	return (
		<BrowserRouter basename="/portfolio">
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects/:projectId" element={<ProjectDetail />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
