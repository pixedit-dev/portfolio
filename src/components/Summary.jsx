const Summary = ({ isDark }) => {
	return (
		<section
			id="summary"
			className={`${
				isDark ? "text-gray-200" : "text-black"
			} text-center max-w-[600px] mx-auto pb-16 px-6 sm:mt-18`}>
			<h3
				className={`${
					isDark ? "text-[#dfdfdf]" : "text-[#1a3379]"
				} font-bold text-[18px] sm:text-[20px] mb-6`}>
				Summary
			</h3>
			<p className="mb-6">
				I believe good work comes from curiosity, responsibility, and
				collaboration, and I’m committed to continuous learning and building
				with intention.
			</p>
			<p className="font-semibold">
				Thanks for stopping by. If my work resonates with you, I’d be glad to
				get in touch.
			</p>
		</section>
	);
};

export default Summary;
