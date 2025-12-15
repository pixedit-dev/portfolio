import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
	return (
		<div className="rounded-[10px] shadow-xl shadow-stone-800 bg-radial from-[#37393a] to-[#232526] max-w-[350px] mx-auto justify-self-center text-white flex flex-col">
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
					<h4 className="text-sm mt-4">{project.title}</h4>
				</div>
			</div>

			<div className="p-4 flex-grow">
				<p className="text-gray-300/70">{project.description}</p>
			</div>

			<div className="text-center text-blue-500/70 flex gap-x-4 justify-around p-4 mt-auto max-h-[50px]">
				<Link
					to={`/projects/${project.id}`}
					className="hover:text-blue-500/80 hover:border-b-1">
					More details
				</Link>
				<a
					href={project.links.demo}
					target="_blank"
					className="hover:text-blue-500/80 hover:border-b-1">
					View demo version
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
