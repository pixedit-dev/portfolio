import { motion } from "framer-motion";
const Sidebar = () => {
	return (
		<motion.div
			initial={{ x: -100 }}
			animate={{ x: 0 }}
			transition={{ duration: 2.4, ease: "easeInOut" }}
			className="w-[50px] text-sm">
			<ul className="h-full text-stone-400 flex flex-col gap-y-16 ">
				<li className="mt-10">
					<a className="block transform rotate-[-90deg]">About</a>
				</li>
				<li>
					<a className="block transform rotate-[-90deg]">Projects</a>
				</li>
				<li>
					<a className="block transform rotate-[-90deg]">Resume</a>
				</li>
				<li>
					<a className="block transform rotate-[-90deg]">Contact</a>
				</li>
				<li>
					<a className="block transform rotate-[-90deg] mt-3">Roadmap</a>
				</li>
			</ul>
		</motion.div>
	);
};

export default Sidebar;
