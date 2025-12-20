import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const ProjectCard = ({ project }) => {
	return (
		<Reveal>
			<div className="rounded-[10px] shadow-xl shadow-stone-800 bg-radial from-[#37393a] to-[#232526] max-w-[350px] mx-auto justify-self-center text-white flex flex-col sm:h-[450px]">
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
					<p className="text-gray-300/70 font-inter">{project.description}</p>
				</div>

				<div className="text-center text-blue-500/70 flex gap-x-4 justify-around p-1 mb-2 mt-auto max-h-[50px]">
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
