const Journey = () => {
	return (
		<div className="px-2 sm:px-12 mx-auto pb-28 text-sm sm:text-[16px] select-none">
			<h3 className="font-roboto text-[18px] sm:text-2xl text-[#dfdfdf] text-center mb-12 mt-28">
				My Story
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 text-stone-300/80 gap-8">
				<div className="rounded-2xl bg-white/5 p-6">
					<span className="border-2 text-gray-400 border-sky-400 px-2 py-[2px] h-full rounded-full mr-2">
						1
					</span>
					<strong className="font-inter text-[#dfdfdf] text-[15px] sm:text-[16px]">
						The Beginning
					</strong>
					<p className="mt-4">
						I started my journey learning front-end development independently.
						In the beginning, I relied on structured courses to understand the
						fundamentals and build a clear foundation.
					</p>
				</div>
				<div className="rounded-2xl bg-white/5 p-6">
					<span className="border-2 text-gray-400 border-sky-400 px-2 py-[2px] h-full rounded-full mr-2">
						2
					</span>
					<strong className="font-inter text-[#dfdfdf] text-[15px] sm:text-[16px]">
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
				<div className="rounded-2xl bg-white/5 p-6">
					<span className="border-2 text-gray-400 border-sky-400 px-2 py-[2px] h-full rounded-full mr-2">
						3
					</span>
					<strong className="font-inter text-[#dfdfdf] text-[15px] sm:text-[16px]">
						The Shift to Creating
					</strong>
					<p className="mt-4">
						Over time, I discovered that what truly drives me is{" "}
						<span className="font-semibold text-[#dfdfdf] underline">
							building
						</span>
						. My curiosity grew, and I started spending more time building and
						experimenting. I worked on projects of different scales, from small
						practice builds to larger applications, such as a recipe finder
						built with Next.js, and recreating existing products without
						referencing their source code.
					</p>
				</div>
				<div className="rounded-2xl bg-white/5 p-6">
					<span className="border-2 text-gray-400 border-sky-400 px-2 py-[2px] h-full rounded-full mr-2">
						4
					</span>
					<strong className="font-inter text-[#dfdfdf] text-[15px] sm:text-[16px]">
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
		</div>
	);
};

export default Journey;
