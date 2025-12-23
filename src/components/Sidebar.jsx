import { motion } from "framer-motion";

const Sidebar = ({ isDark }) => {
	const styles =
		"block transform rotate-[-90deg] cursor-pointer hover:text-gray-500 transition-colors duration-200";

	return (
		<div className="sm:w-[50px] w-[30px] sm:text-sm text-[12px] mt-16">
			<ul
				className={`${
					isDark ? "text-stone-400" : "text-[#6c4015]"
				} h-fit flex flex-col gap-y-16 font-semibold`}>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.6, ease: "easeInOut" }}
					className="mt-10">
					<a href="#about" className={`${styles}`}>
						About
					</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.7, ease: "easeInOut" }}>
					<a href="#projects" className={`${styles}`}>
						Projects
					</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.8, ease: "easeInOut" }}>
					<a href="#journey" className={`${styles} mt-4`}>
						Experience
					</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.9, ease: "easeInOut" }}>
					<a href="#contact" className={`${styles}`}>
						Contact
					</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 2, ease: "easeInOut" }}>
					<a className={`${styles} mt-2`} href="#summary">
						Summary
					</a>
				</motion.li>
			</ul>
		</div>
	);
};

export default Sidebar;
