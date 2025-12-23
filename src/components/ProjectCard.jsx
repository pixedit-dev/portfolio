import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const ProjectCard = ({ project, isDark }) => {
	return (
		<Reveal>
			<div
				className={`${
					isDark
						? "bg-radial from-[#37393a] to-[#232526] border-black/30 text-white"
						: "bg-radial from-[#46464632] to-[#a1a1a13c] border-black/10"
				} rounded-[10px] border-1 max-w-[350px] mx-auto justify-self-center flex flex-col sm:h-[450px]`}>
				<div>
					<Link to={`/projects/${project.id}`}>
						<img
							src={project.thumbnail}
							alt={project.name}
							className="cursor-pointer hover:scale-95 rounded-[10px] w-full transition-transform duration-200"
						/>
					</Link>
					<div className="text-center mt-6 px-4">
						<strong>{project.name}</strong>
						<h4 className="font-roboto text-sm mt-4">{project.title}</h4>
					</div>
				</div>

				<div className="p-4 flex-grow">
					<p
						className={`${
							isDark ? "text-gray-300/70" : "text-black/70"
						} font-inter`}>
						{project.description}
					</p>
				</div>

				<div
					className={`${
						isDark ? "text-blue-500/70" : "text-blue-700 font-semibold"
					} text-center flex gap-x-4 justify-around p-1 mb-2 mt-auto max-h-[50px]`}>
					<Link
						to={`/projects/${project.id}`}
						className="text-[12px] sm:text-sm hover:text-blue-500/80 hover:border-b-1">
						More details
					</Link>
					<a
						href={project.links.demo}
						target="_blank"
						className="text-[12px] sm:text-sm hover:text-blue-500/80 hover:border-b-1">
						View demo version
					</a>
				</div>
			</div>
		</Reveal>
	);
};

export default ProjectCard;
