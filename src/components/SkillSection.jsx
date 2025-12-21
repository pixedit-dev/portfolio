import SkillItem from "./SkillItem";
import { skillGroups } from "../data/skillsData";
import Reveal from "./Reveal";

const SkillSection = ({ isDark }) => {
	return (
		<section className="sm:px-4">
			<Reveal delay="0.5">
				<h2
					className={`${
						isDark ? "text-[#dfdfdf]" : "text-[#1a3379]"
					} text-2xl font-semibold my-8`}>
					Skills
				</h2>
			</Reveal>

			<div className="sm:space-y-6 grid md:grid-cols-2 gap-x-8">
				{skillGroups.map((group) => (
					<div key={group.title}>
						<Reveal delay="0.3">
							<h3
								className={`${
									isDark ? "text-sky-300/70" : "text-sky-700"
								} sm:text-lg mb-1 sm:mb-3 font-semibold`}>
								{group.title}
							</h3>
						</Reveal>

						<Reveal>
							<div className="grid grid-cols-4 gap-2 items-center md:bg-black/20 rounded-2xl">
								{group.skills.map((skill) => (
									<SkillItem
										key={skill.name}
										name={skill.name}
										Icon={skill.icon}
										imageSrc={`./src/assets/icons/${skill.name.toLowerCase()}.svg`}
										isDark={isDark}
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

export default SkillSection;
