const Journey = ({ isDark }) => {
	return (
		<section
			id="journey"
			className="px-2 sm:px-12 mx-auto pb-28 text-sm sm:text-[16px] select-none">
			<h3
				className={`${
					isDark ? "text-[#dfdfdf]" : "text-[#1a3379]"
				} font-roboto text-[18px] sm:text-2xl font-semibold text-center mb-12 mt-28`}>
				My Story
			</h3>
			<div
				className={`${
					isDark ? "text-stone-300/80" : "text-[#210770]"
				} grid grid-cols-1 md:grid-cols-2 gap-8`}>
				<div
					className={`${
						isDark ? "bg-white/5" : "bg-black/10"
					} rounded-2xl p-6`}>
					<span
						className={`${
							isDark ? "text-gray-400" : "text-gray-100"
						} border-2 border-sky-500 px-2 py-[2px] h-full rounded-full mr-2`}>
						1
					</span>
					<strong
						className={`${
							isDark ? "text-[#dfdfdf]" : "text-black"
						} font-inter text-[15px] sm:text-[16px`}>
						The Beginning
					</strong>
					<p className="mt-4">
						I started my journey learning front-end development independently.
						In the beginning, I relied on structured courses to understand the
						fundamentals and build a clear foundation.
					</p>
				</div>
				<div
					className={`${
						isDark ? "bg-white/5" : "bg-black/10"
					} rounded-2xl p-6`}>
					<span
						className={`${
							isDark ? "text-gray-400" : "text-gray-100"
						} border-2 border-sky-500 px-2 py-[2px] h-full rounded-full mr-2`}>
						2
					</span>
					<strong
						className={`${
							isDark ? "text-[#dfdfdf]" : "text-black"
						} font-inter text-[#dfdfdf] text-[15px] sm:text-[16px]`}>
						Learning Through Practice
					</strong>
					<p className="mt-4">
						As I progressed, I moved beyond courses and began learning through
						real problems. I searched for solutions, studied other developers’
						code, watched tutorials, and used every reliable resource that could
						teach me something new. This approach continues to shape how I learn
						today.
					</p>
				</div>
				<div
					className={`${
						isDark ? "bg-white/5" : "bg-black/10"
					} rounded-2xl p-6`}>
					<span
						className={`${
							isDark ? "text-gray-400" : "text-gray-100"
						} border-2 border-sky-500 px-2 py-[2px] h-full rounded-full mr-2`}>
						3
					</span>
					<strong
						className={`${
							isDark ? "text-[#dfdfdf]" : "text-black"
						} font-inter text-[#dfdfdf] text-[15px] sm:text-[16px]`}>
						The Shift to Creating
					</strong>
					<p className="mt-4">
						Over time, I discovered that what truly drives me is{" "}
						<span
							className={`${
								isDark ? "text-[#dfdfdf]" : "text-[#5c0a0a]"
							} font-semibold underline `}>
							building
						</span>
						. My curiosity grew, and I started spending more time building and
						experimenting. I worked on projects of different scales, from small
						practice builds to larger applications, such as a recipe finder
						built with Next.js, and recreating existing products without
						referencing their source code.
					</p>
				</div>
				<div
					className={`${
						isDark ? "bg-white/5" : "bg-black/10"
					} rounded-2xl p-6`}>
					<span
						className={`${
							isDark ? "text-gray-400" : "text-gray-100"
						} border-2 border-sky-500 px-2 py-[2px] h-full rounded-full mr-2`}>
						4
					</span>
					<strong
						className={`${
							isDark ? "text-[#dfdfdf]" : "text-black"
						} font-inter text-[#dfdfdf] text-[15px] sm:text-[16px]`}>
						Where I Am Now
					</strong>
					<p className="mt-4">
						I know there is still a long way to go, but I genuinely enjoy the
						learning process itself. Each project helps me think more clearly,
						write better code, and build interfaces that are more thoughtful and
						reliable.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Journey;
