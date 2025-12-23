import { motion } from "framer-motion";
import { FaExclamation, FaLongArrowAltRight } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import Reveal from "./Reveal";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

// Gears animation
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
				<FaGear className="w-6 h-6 text-emerald-800" />
			</motion.div>

			<motion.div
				animate={{ rotate: -360 }}
				transition={{
					duration: 11,
					ease: "linear",
					repeat: Infinity,
				}}
				className="absolute top-[11px] left-[13px] transform scale-[0.85]">
				<FaGear className="w-5 h-5 text-emerald-700 opacity-80" />
			</motion.div>
		</div>
	);
};

// The main component
const Hero = ({ isDark }) => {
	const scrollToContact = () => {
		document.getElementById("contact")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<div className="h-screen mx-auto flex justify-center items-center px-3 md:px-6 mb-24">
			<div
				className={`${
					isDark ? "text-white" : "text-black"
				} font-nunito flex flex-col gap-2`}>
				{/* Profile image 1 */}
				<ProfileImage
					src="/images/profile_image1.png"
					className="max-w-[100px] sm:max-w-[150px] mx-auto rounded-full lg:-ml-18 mt-10 mb-6 shadow-xl shadow-black/80 duration-200 select-none"
				/>

				<Reveal>
					<h3 className="md:text-[20px] flex">
						Hello
						<motion.span
							className={`${
								isDark ? "text-cyan-500" : "text-orange-400"
							} ml-[-5px]`}
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
					<h1 className="md:text-4xl font-bold">Milad Marivand</h1>
				</Reveal>

				<Reveal delay="0.3">
					<h3 className="md:text-xl text-[14px]">
						Junior{" "}
						<span
							className={`${
								isDark ? "text-cyan-500" : "text-orange-500 font-semibold"
							}`}>
							Front-End
						</span>{" "}
						Developer
					</h3>
				</Reveal>
				<Reveal delay="0.7">
					<p
						className={`${
							isDark ? "text-neutral-300" : "text-stone-700 font-semibold"
						} text-[13px] md:text[18px] max-w-[600px]`}>
						Specializing in React and modern design, I prioritize clean code and
						user interactivity to deliver reliable results. I never stop
						experimenting and experiencing cool things, and always open to new
					</p>
					<div className="flex items-center gap-1 pb-2 text-sm">
						<span
							className={`${isDark ? "text-orange-400" : "text-stone-800"}`}>
							challanges
						</span>
						<AnimatedGears />
					</div>
				</Reveal>
				<Reveal delay="1">
					<Button
						onClick={scrollToContact}
						className="flex text-sm bg-sky-600 ml-2 py-1 px-2 md:py-2 md:px-4 w-fit rounded-[10px] cursor-pointer">
						Let's chat
						<motion.a
							className="ml-1 mt-[4px]"
							animate={{ x: [0, 5, 0] }}
							transition={{
								duration: 1.8,
								repeat: Infinity,
								ease: "easeInOut",
							}}>
							<FaLongArrowAltRight />
						</motion.a>
					</Button>
				</Reveal>
			</div>
		</div>
	);
};

export default Hero;
