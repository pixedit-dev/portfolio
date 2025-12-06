import { motion } from "framer-motion";
const Sidebar = () => {
	return (
		<div className="w-[50px] text-sm">
			<ul className="h-fit text-stone-400 flex flex-col gap-y-16 ">
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.6, ease: "easeInOut" }}
					className="mt-10">
					<a className="block transform rotate-[-90deg]">About</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.7, ease: "easeInOut" }}>
					<a className="block transform rotate-[-90deg]">Projects</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.8, ease: "easeInOut" }}>
					<a className="block transform rotate-[-90deg]">Resume</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.9, ease: "easeInOut" }}>
					<a className="block transform rotate-[-90deg]">Contact</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 2, ease: "easeInOut" }}>
					<a className="block transform rotate-[-90deg] mt-3">Roadmap</a>
				</motion.li>
			</ul>
		</div>
	);
};

export default Sidebar;
