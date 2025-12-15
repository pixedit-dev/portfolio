import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
	const { projectId } = useParams();

	const project = projects.find((project) => project.id === projectId);

	if (!project) {
		return (
			<div className="text-center text-white mt-20">
				<h2 className="text-2xl">Project not found</h2>
			</div>
		);
	}

	return (
		<section className="text-white max-w-[900px] mx-auto py-20">
			<h1 className="text-3xl font-bold">{project.name}</h1>

			<p className="text-gray-400 mt-2">{project.title}</p>

			<img
				src={project.thumbnail}
				alt={project.name}
				className="rounded-lg mt-6"
			/>

			<p className="mt-6 text-gray-300">{project.description}</p>

			<h3 className="mt-8 font-semibold">Features</h3>
			<ul className="list-disc ml-6 text-gray-300">
				{project.features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>

			<h3 className="mt-8 font-semibold">Tech Stack</h3>
			<ul className="list-disc ml-6 text-gray-300">
				{Object.entries(project.techStack).map(([category, items]) => (
					<li key={category}>
						<strong>{category}:</strong>{" "}
						{Array.isArray(items) ? items.join(", ") : items}
					</li>
				))}
			</ul>

			<div className="mt-10 flex gap-6">
				<a
					href={project.links.github}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400">
					GitHub
				</a>
				<a
					href={project.links.demo}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400">
					Live Demo
				</a>
			</div>
		</section>
	);
};

export default ProjectDetail;
