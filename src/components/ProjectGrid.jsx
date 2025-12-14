import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
const ProjectGrid = () => {
	return (
		<section>
			<h3 className="text-[#dfdfdf] text-[16px] sm:text-2xl my-8 text-center">
				Self-initiated projects
			</h3>
			<div className="grid grid-cols-2 gap-y-10 justify-center">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectGrid;
