import Reveal from "./Reveal";
import SkillSection from "./SkillSection";

const About = ({ isDark }) => {
	return (
		<section
			id="about"
			className={`${
				isDark ? "text-white" : "text-[#201b03]"
			} text-center px-4 sm:px-6 md:px-[2rem] mb-24 sm:mb-44`}>
			<div className="flex flex-col gap-x-10">
				<div className="flex flex-col gap-y-4 text-left mb-12 text-sm">
					<Reveal delay="0.4">
						<h2
							className={`${
								isDark ? "text-[#dfdfdf]" : "text-[#1a3379]"
							} text-[18px] sm:text-[24px] text-center pb-4 md:pr-4 font-semibold`}>
							About me
						</h2>
					</Reveal>
					<Reveal>
						<p className="sm:max-w-[600px] text-[13px] sm:text-[18px]">
							I`m a Front-End developer with two years of experience building
							modern applications using React and Next.js.
						</p>
					</Reveal>
					<Reveal>
						<div>
							<p className="font-semibold mb-2">Front-End focus:</p>
							<ul
								className={`${
									isDark ? "text-[#b6dae5]" : "text-[#851616]"
								} list-disc pl-10 space-y-2 font-semibold text-[14px] md:text-[16px]`}>
								<li>React & Next.js</li>
								<li>Clean, readable, and maintainable code</li>
								<li>Performance-focused UI</li>
								<li>Creative, detail-oriented UI design</li>
								<li>Teamwork and continuous growth</li>
							</ul>
						</div>
					</Reveal>
					<Reveal>
						<p>
							For me, good Front-End work is where thoughtful engineering meets
							clear communication & understanding of user needs.
						</p>
					</Reveal>
				</div>
				<div>
					<SkillSection isDark={isDark} />
				</div>
			</div>
		</section>
	);
};

export default About;
