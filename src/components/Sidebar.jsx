import { motion } from "framer-motion";

const Sidebar = () => {
	const styles =
		"block transform rotate-[-90deg] cursor-pointer hover:text-white transition-colors duration-300";

	return (
		<div className="sm:w-[50px] w-[30px] sm:text-sm text-[12px]">
			<ul className="h-fit text-stone-400 flex flex-col gap-y-16">
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.6, ease: "easeInOut" }}
					className="mt-10">
					<a className={`${styles}`}>About</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.7, ease: "easeInOut" }}>
					<a className={`${styles}`}>Projects</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.8, ease: "easeInOut" }}>
					<a className={`${styles} mt-4`}>Experience</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.9, ease: "easeInOut" }}>
					<a className={`${styles}`}>Contact</a>
				</motion.li>
				<motion.li
					initial={{ x: -200 }}
					animate={{ x: 0 }}
					transition={{ duration: 2, ease: "easeInOut" }}>
					<a className={`${styles} mt-2`}>Summary</a>
				</motion.li>
			</ul>
		</div>
	);
};

export default Sidebar;
