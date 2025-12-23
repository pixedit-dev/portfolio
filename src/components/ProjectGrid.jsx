import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const ProjectGrid = ({ isDark }) => {
	return (
		<section id="projects" className="mb-24 sm:mb-44">
			<Reveal delay="0.5">
				<h3
					className={`${
						isDark ? "text-[#dfdfdf]" : "text-[#1a3379]"
					} text-[16px] sm:text-2xl mb-16 text-center font-semibold`}>
					Self-initiated projects
				</h3>
			</Reveal>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-20 gap-x-2 px-4 justify-center">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} isDark={isDark} />
				))}
			</div>
		</section>
	);
};

export default ProjectGrid;
