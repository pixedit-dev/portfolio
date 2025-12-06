import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./Button";

const Navbar = () => {
	return (
		<div className="pl-16 pt-3 flex justify-between">
			<ul className="flex text-stone-300 text-[20px] gap-x-[10px]">
				<motion.li
					initial={{ y: -200 }}
					animate={{ y: 0 }}
					transition={{ duration: 1.8 }}>
					<a href="#">
						<FaGithub />
					</a>
				</motion.li>
				<motion.li
					initial={{ y: -200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.9 }}>
					<a href="#">
						<FaTelegram />
					</a>
				</motion.li>
				<motion.li
					initial={{ y: -200 }}
					animate={{ y: 0 }}
					transition={{ duration: 2 }}>
					<a href="#">
						<FaLinkedin />
					</a>
				</motion.li>
			</ul>

			<div className="pr-4">
				<Button
					className="inline-block rounded-2xl p-0.5 cursor-pointer
                           bg-gradient-to-r from-cyan-500 to-blue-500">
					<span
						className="block px-3 py-0.5 font-bold text-sm rounded-[14px] 
                               bg-gray-800 text-[#e8e8e8] transition-all duration-300
                               group-hover:bg-opacity-0 group-hover:text-white">
						My Resume
					</span>
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
