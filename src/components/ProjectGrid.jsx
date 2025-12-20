import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const ProjectGrid = () => {
	return (
		<section>
			<Reveal delay="0.5">
				<h3 className="text-[#dfdfdf] text-[16px] sm:text-2xl my-16 text-center">
					Self-initiated projects
				</h3>
			</Reveal>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-20 px-4 justify-center">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectGrid;
