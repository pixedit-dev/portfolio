import { motion } from "framer-motion";
import { FaExclamation, FaLongArrowAltRight } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Reveal from "./Reveal";
import Button from "./Button";

// A simple and small animation
const AnimatedGears = () => {
	return (
		<div className="relative inline-block w-6 h-6 align-text-bottom">
			<motion.div
				animate={{ rotate: 360 }}
				transition={{
					duration: 12,
					ease: "linear",
					repeat: Infinity,
				}}
				// Absolute positioning to overlap with the second gear
				className="absolute top-0 left-0 scale-75">
				<FaGear className="w-6 h-6 text-emerald-600" />
			</motion.div>

			<motion.div
				animate={{ rotate: -360 }}
				transition={{
					duration: 11,
					ease: "linear",
					repeat: Infinity,
				}}
				className="absolute top-[11px] left-[13px] transform scale-[0.85]">
				<FaGear className="w-5 h-5 text-emerald-500 opacity-80" />
			</motion.div>
		</div>
	);
};

// The main component
const Hero = () => {
	return (
		<div className="h-screen mx-auto flex justify-center items-center px-2 md:px-6">
			<div className="font-nunito text-white flex flex-col gap-3">
				<Reveal>
					<h3 className="md:text-[20px] flex">
						Hello
						<motion.span
							className="text-cyan-500 ml-[-5px]"
							animate={{ rotate: [0, -8, 0, 8, 0] }}
							transition={{
								duration: 1.2,
								repeat: Infinity,
								ease: "easeInOut",
							}}>
							<FaExclamation className="mt-[3px]" />
						</motion.span>{" "}
						I'm
					</h3>
					<h1 className="md:text-4xl  font-bold">Milad Marivand</h1>
				</Reveal>

				<Reveal delay="0.3">
					<h3 className="md:text-xl">
						Junior <span className="text-cyan-500">Front-End</span> Developer
					</h3>
				</Reveal>
				<Reveal delay="0.7">
					<p className="text-sm md:text[18px] max-w-[600px] text-neutral-300">
						Specializing in React and modern design, I prioritize clean code and
						user interactivity to deliver reliable results. I never stop
						experimenting and experiencing cool things, and always open to new
					</p>
					<div className="flex items-center gap-1 pb-2">
						<span className="text-orange-400">challanges</span>
						<AnimatedGears />
					</div>
				</Reveal>
				<Reveal delay="1">
					<Button className="flex bg-sky-600 ml-2 py-1 px-2 md:py-2 md:px-4 w-fit rounded-[10px] cursor-pointer">
						Let's chat
						<motion.span
							className="ml-1 mt-[4px]"
							animate={{ x: [0, 5, 0] }}
							transition={{
								duration: 1.8,
								repeat: Infinity,
								ease: "easeInOut",
							}}>
							<FaLongArrowAltRight />
						</motion.span>
					</Button>
				</Reveal>
			</div>
		</div>
	);
};

export default Hero;
