import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";
import Reveal from "../components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Contact = () => {
	const [copied, setCopied] = useState(false);

	const copyEmail = () => {
		navigator.clipboard.writeText("pixedit.2023@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="text-[#dfdfdf] mt-32 px-6 sm:px-12 max-w-6xl mx-auto pb-32">
			<Reveal>
				<div className="mb-12 text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Get in Touch
					</h2>
					<p className="text-gray-400 max-w-md mx-auto">
						Open to collaboration, questions, or opportunities.
					</p>
				</div>
			</Reveal>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Email Card */}
				<Reveal>
					<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full relative">
						<FiMail className="text-2xl mb-4 text-blue-400" />
						<h3 className="text-white font-semibold text-xl mb-2">Email</h3>
						<p className="text-sm text-gray-400 mb-6">
							Best for detailed discussions
						</p>

						<button
							onClick={copyEmail}
							title="Copy Email"
							className="flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-lg hover:text-white transition-all w-full justify-center relative outline-none cursor-pointer">
							<span className="truncate">pixedit.2023@gmail.com</span>

							{copied ? <FiCheck className="text-green-400" /> : <FiCopy />}

							{/* The "Copied!" Floating Tooltip */}
							<AnimatePresence>
								{copied && (
									<motion.span
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className="absolute -top-6 right-0 bg-gradient-to-r from-[#E0EAFC] to-[#CFDEF3] text-black text-xs py-1 px-2 rounded-md shadow-lg">
										Copied!
									</motion.span>
								)}
							</AnimatePresence>
						</button>
					</div>
				</Reveal>

				{/* GitHub Card */}
				<Reveal>
					<a
						href="https://github.com/pixedit-dev"
						target="_blank"
						rel="noreferrer"
						className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors block h-full">
						<FiGithub className="text-2xl mb-4 text-purple-400" />
						<h3 className="text-white font-semibold text-xl mb-2">GitHub</h3>
						<p className="text-sm text-gray-400 mb-9">
							Explore my projects and code
						</p>
						<span className="text-white underline underline-offset-4 group-hover:text-purple-400">
							View Profile
						</span>
					</a>
				</Reveal>

				{/* LinkedIn Card */}
				<Reveal>
					<a
						href="#"
						target="_blank"
						rel="noreferrer"
						className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors block h-full">
						<FiLinkedin className="text-2xl mb-4 text-blue-500" />
						<h3 className="text-white font-semibold text-xl mb-2">LinkedIn</h3>
						<p className="text-sm text-gray-400 mb-9">
							Professional background
						</p>
						<span className="text-white underline underline-offset-4 group-hover:text-blue-500">
							Let's Connect
						</span>
					</a>
				</Reveal>
			</div>
		</section>
	);
};

export default Contact;
