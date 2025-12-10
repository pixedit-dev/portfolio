import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaGitAlt,
	FaGithub,
	FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiSass } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const skillGroups = [
	{
		title: "Core Front-End",
		skills: [
			{ name: "HTML", icon: FaHtml5 },
			{ name: "CSS", icon: FaCss3Alt },
			{ name: "JavaScript", icon: FaJs },
			{ name: "TypeScript", icon: SiTypescript },
		],
	},
	{
		title: "Frameworks",
		skills: [
			{ name: "React", icon: FaReact },
			{ name: "Next.js", icon: null },
		],
	},
	{
		title: "Styling & Animation",
		skills: [
			{ name: "Tailwind CSS", icon: SiTailwindcss },
			{ name: "SCSS", icon: SiSass },
			{ name: "Bootstrap", icon: FaBootstrap },
			{ name: "Framer Motion", icon: TbBrandFramerMotion },
		],
	},
	{
		title: "Tools & Integrations",
		skills: [
			{ name: "Git", icon: FaGitAlt },
			{ name: "GitHub", icon: FaGithub },
			{ name: "MongoDB", icon: SiMongodb },
			{ name: "NextAuth", icon: null },
		],
	},
];
