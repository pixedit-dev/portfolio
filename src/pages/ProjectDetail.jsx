import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
	FaGithub,
	FaExternalLinkAlt,
	FaArrowLeft,
	FaCheckCircle,
} from "react-icons/fa";
import projects from "../data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
	const { projectId } = useParams();
	const { pathname } = useLocation();
	const project = projects.find((p) => p.id === projectId);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	if (!project) {
		return (
			<div className="h-screen flex flex-col items-center justify-center text-white">
				<h2 className="text-3xl font-bold mb-4">Project not found</h2>
				<Link
					to="/"
					className="text-blue-400 hover:underline flex items-center gap-2">
					<FaArrowLeft /> Back to Projects
				</Link>
			</div>
		);
	}

	// Animation Variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const currentIndex = projects.findIndex((p) => p.id === projectId);
	// If it's the last project, loop back to the first one
	const nextProject = projects[(currentIndex + 1) % projects.length];

	return (
		<motion.section className="text-white max-w-[900px] mx-auto py-20 px-6">
			{/* Back Button */}
			<Link
				to="/"
				className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
				<FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
				Back to Portfolio
			</Link>

			{/* Header Section */}
			<motion.div variants={fadeInUp}>
				<h1 className="text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
					{project.name}
				</h1>
				<p className="text-xl text-blue-400 font-medium mb-8">
					{project.title}
				</p>
			</motion.div>

			{/* Image Wrapper with Hover Effect */}
			<motion.div
				variants={fadeInUp}
				className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
				<img
					src={project.thumbnail}
					alt={project.name}
					className="w-full object-cover hover:scale-105 transition-transform duration-700"
				/>
			</motion.div>

			{/* Content Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
				<motion.div variants={fadeInUp} className="md:col-span-2">
					<h3 className="text-2xl font-semibold mb-4 text-gray-100">
						About the Project
					</h3>
					<p className="text-gray-400 leading-relaxed mb-8">
						{project.description}
					</p>

					<h3 className="text-2xl font-semibold mb-4 text-gray-100">
						Key Features
					</h3>
					<ul className="space-y-3">
						{project.features.map((feature, index) => (
							<li key={index} className="flex items-start gap-3 text-gray-300">
								<FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
								{feature}
							</li>
						))}
					</ul>
				</motion.div>

				{/* Sidebar: Tech Stack & Links */}
				<motion.div variants={fadeInUp} className="space-y-8">
					<div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
						<h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">
							Tech Stack
						</h3>
						<div className="space-y-4">
							{Object.entries(project.techStack).map(([category, items]) => (
								<div key={category}>
									<p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
										{category}
									</p>
									<p className="text-sm text-gray-200">
										{Array.isArray(items) ? items.join(" • ") : items}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<motion.a
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							href={project.links.demo}
							target="_blank"
							className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
							<FaExternalLinkAlt /> Live Demo
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							href={project.links.github}
							target="_blank"
							className="flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition-colors border border-white/10">
							<FaGithub size={20} /> View Source
						</motion.a>
					</div>
				</motion.div>
			</div>

			{/* link to next project */}
			<div className="mt-32 pt-10 border-t border-white/10">
				<p className="text-gray-500 text-center mb-4 uppercase tracking-widest text-sm">
					Up Next
				</p>

				<Link
					to={`/projects/${nextProject.id}`}
					className="group relative block w-full overflow-hidden rounded-2xl">
					<motion.div
						whileHover={{ scale: 0.98 }}
						transition={{ duration: 0.4 }}
						className="relative h-[200px] md:h-[300px] flex items-center justify-center">
						{/* Background Image with Overlay */}
						<img
							src={nextProject.thumbnail}
							alt={nextProject.name}
							className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

						{/* Content */}
						<div className="relative z-10 text-center">
							<h2 className="text-4xl md:text-6xl font-black group-hover:tracking-wider transition-all duration-500">
								{nextProject.name}
							</h2>
							<div className="flex items-center justify-center gap-2 mt-4 text-blue-400 font-bold opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
								View Project <FaExternalLinkAlt size={14} />
							</div>
						</div>
					</motion.div>
				</Link>
			</div>
		</motion.section>
	);
};

export default ProjectDetail;
