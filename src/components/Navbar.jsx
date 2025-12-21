import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

const Navbar = ({ setIsDark, isDark }) => {
	const { scrollY } = useScroll();

	const backgroundToggled = isDark
		? "rgba(17, 24, 39, 0.591)"
		: "rgba(47, 73, 79, 0.494)";

	const background = useTransform(
		scrollY,
		[0, 400],
		["rgba(17, 24, 39, 0)", backgroundToggled]
	);

	const toggleBackground = () => {
		setIsDark((dark) => !dark);
	};

	const blur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(2px)"]);

	return (
		<motion.div
			style={{
				backgroundColor: background,
				backdropFilter: blur,
			}}
			className="w-full pl-6 sm:pl-16 py-2 sm:py-3 flex justify-between fixed rounded-b-lg">
			<ul
				className={`${
					isDark ? "text-stone-300" : "text-stone-800"
				} flex pt-1 sm:text-[20px] gap-x-[10px]`}>
				<motion.li
					initial={{ y: -200 }}
					animate={{ y: 0 }}
					transition={{ duration: 1.8 }}
					className="hover:text-[#828282] hover:scale-105 duration-200">
					<a href="https://github.com/pixedit-dev" target="_blank">
						<FaGithub />
					</a>
				</motion.li>
				<motion.li
					initial={{ y: -200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.9 }}
					className="hover:text-[#b0b0b0] hover:scale-105 duration-200">
					<a href="https://t.me/none_ll0lXll">
						<FaTelegram />
					</a>
				</motion.li>
				<motion.li
					initial={{ y: -200 }}
					animate={{ y: 0 }}
					transition={{ duration: 2 }}
					className="hover:text-[#b0b0b0] hover:scale-105 duration-200">
					<a
						href="https://www.linkedin.com/in/milad-marivand-89b2033a1/"
						target="_blank">
						<FaLinkedin />
					</a>
				</motion.li>
			</ul>

			<motion.div
				initial={{ y: -200 }}
				animate={{ y: 0 }}
				transition={{ duration: 2 }}
				onClick={() => toggleBackground()}
				className="pr-4">
				<Button
					className="inline-block rounded-2xl p-0.5 cursor-pointer
                           bg-gradient-to-r from-cyan-500 to-blue-500 border-none outline-none">
					<span
						className="block px-3 py-0.5 font-bold text-[10px] sm:text-[12px] rounded-[14px] 
                               bg-gray-800 text-[#e8e8e8] hover:text-gray-300">
						{isDark ? "Dark" : "Light"}
					</span>
				</Button>
			</motion.div>
		</motion.div>
	);
};

export default Navbar;
