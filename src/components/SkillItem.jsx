const SkillItem = ({ name, Icon, imageSrc, isDark }) => {
	return (
		<div className="flex flex-col items-center gap-2 p-4 rounded-xl text-center transition hover:bg-white/10">
			{Icon ? (
				<Icon className="text-3xl sm:text-4xl text-white" />
			) : (
				<img
					src={imageSrc}
					alt={name}
					className="min-w-[34px] max-w-[35px] xl:max-w-15 xl:max-h-10 object-cover"
				/>
			)}
			<span
				className={`${
					isDark ? "text-gray-300" : "text-black font-semibold"
				} text-[10px] sm:text-sm`}>
				{name}
			</span>
		</div>
	);
};

export default SkillItem;
