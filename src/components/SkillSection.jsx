import SkillItem from "./SkillItem";
import { skillGroups } from "../data/skillsData";
import Reveal from "./Reveal";

const Skills = () => {
	return (
		<section className="sm:px-4">
			<h2 className="text-2xl text-white my-5">Skills</h2>

			<div className="sm:space-y-6 grid md:grid-cols-2 gap-x-8">
				{skillGroups.map((group) => (
					<div key={group.title}>
						<Reveal>
							<h3 className="sm:text-lg text-gray-200 mb-1 sm:mb-3 font-semibold text-sky-300/70">
								{group.title}
							</h3>
						</Reveal>

						<Reveal>
							<div className="grid grid-cols-4 gap-2 items-center md:bg-blue-200/10 rounded-2xl">
								{group.skills.map((skill) => (
									<SkillItem
										key={skill.name}
										name={skill.name}
										Icon={skill.icon}
										imageSrc={`./src/assets/icons/${skill.name.toLowerCase()}.svg`}
									/>
								))}
							</div>
						</Reveal>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
