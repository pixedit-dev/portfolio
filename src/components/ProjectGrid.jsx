import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
	return (
		<section>
			<h3 className="text-[#dfdfdf] text-[16px] sm:text-2xl my-16 text-center">
				Self-initiated projects
			</h3>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 px-4 justify-center">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectGrid;
